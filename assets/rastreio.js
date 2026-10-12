/* Rastreamento Beatus Mídias (padrão Tiemi, out/2026). Fonte: ferramentas/rastreio/rastreio.js
   Copiado para /assets/rastreio.js de cada site e carregado no <head>, logo depois do GTM.
   Eventos na dataLayer (o GTM só escuta estes, nomes com prefixo bm_):
     bm_view_content  página carregada          -> Meta ViewContent, GA4 view_content
     bm_contato       clique em link do WhatsApp -> Meta Contact,     GA4 contact,       Google Ads Contato
     bm_lead          formulário enviado         -> Meta Lead,        GA4 generate_lead, Google Ads Lead
   Todo evento leva event_id (deduplicação Pixel x API de Conversões) e a origem (UTM, fbclid, gclid) guardada em
   cookie próprio de 90 dias. O lead leva user_data (telefone sem +, primeiro nome) para a correspondência avançada.
   Consentimento: bm_consent = granted | denied | unset (banner de cookies do site). Com denied, o GTM não dispara Meta nem Google Ads. */
(function (w, d) {
  if (w.__bmRastreio) return;
  w.__bmRastreio = 1;
  w.__beatusConvWa = true; // desliga o ouvinte antigo de WhatsApp das páginas (evita evento duplicado)
  var dl = (w.dataLayer = w.dataLayer || []);
  var PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "gbraid", "wbraid", "sck", "src"];
  var host = location.hostname.replace(/^www\./, "");
  var raiz = /\.com\.br$/.test(host) ? host.split(".").slice(-3).join(".") : host.split(".").slice(-2).join(".");

  function lerCookie(n) {
    var m = d.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
    if (!m) return null;
    try { return JSON.parse(decodeURIComponent(m[1])); } catch (e) { return null; }
  }
  function gravarCookie(n, v, dias) {
    var exp = new Date(Date.now() + dias * 864e5).toUTCString();
    d.cookie = n + "=" + encodeURIComponent(JSON.stringify(v)) + "; expires=" + exp + "; path=/; domain=." + raiz + "; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : "");
  }
  function novoId() { return "bm." + Date.now().toString(36) + "." + Math.random().toString(36).slice(2, 10); }

  // origem: último clique com parâmetro manda; sem parâmetro, mantém a guardada; primeira visita sem nada vira referência ou direto
  var q = new URLSearchParams(location.search), achou = {}, tem = false;
  PARAMS.forEach(function (p) { var v = q.get(p); if (v) { achou[p] = v.slice(0, 150); tem = true; } });
  var origem = lerCookie("bm_origem");
  if (tem) {
    achou.entrada = location.pathname; achou.quando = new Date().toISOString().slice(0, 10);
    origem = achou; gravarCookie("bm_origem", origem, 90);
    if (!lerCookie("bm_origem1")) gravarCookie("bm_origem1", origem, 365);
  } else if (!origem) {
    var ref = "";
    try { ref = d.referrer ? new URL(d.referrer).hostname.replace(/^www\./, "") : ""; } catch (e) {}
    if (ref.indexOf(raiz) === -1) {
      origem = { utm_source: ref || "direto", utm_medium: ref ? "referencia" : "nenhum", entrada: location.pathname, quando: new Date().toISOString().slice(0, 10) };
      gravarCookie("bm_origem", origem, 90);
    }
  }
  origem = origem || {};
  w.bmOrigem = function () { return origem; };

  // consentimento (banner de cookies do site grava beatus_consent no localStorage)
  var consent = "unset";
  try { consent = localStorage.getItem("beatus_consent") || "unset"; } catch (e) {}
  dl.push({ bm_consent: consent, bm_site: host });
  d.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest("#bc-aceitar,#bc-recusar") : null;
    if (!b) return;
    consent = b.id === "bc-aceitar" ? "granted" : "denied";
    dl.push({ event: "bm_consent_update", bm_consent: consent });
  }, true);

  function categoria() {
    var m = d.querySelector('meta[name="bm-categoria"]');
    if (m) return m.content;
    var p = location.pathname.split("/").filter(Boolean);
    return p.length ? p[0] : "home";
  }
  function evento(nome, extra, usuario) {
    var ev = { event: nome, event_id: novoId(), bm_site: host, page_path: location.pathname, content_category: categoria(),
               utm_source: origem.utm_source || "", utm_medium: origem.utm_medium || "", utm_campaign: origem.utm_campaign || "",
               utm_content: origem.utm_content || "", fbclid: origem.fbclid || "", gclid: origem.gclid || "" };
    for (var k in extra) if (extra.hasOwnProperty(k)) ev[k] = extra[k];
    ev.user_data = usuario || {};
    dl.push(ev);
    return ev;
  }
  w.bmEvento = evento;

  // telefone: só dígitos, com o código do país (Meta pede sem +; o GA4 e o Google Ads recebem a versão com +)
  function ddi() { return host === "beatusmidias.com" ? (location.pathname.indexOf("/pt/") === 0 ? "351" : "1") : "55"; }
  function telefone(t) {
    var n = String(t || "").replace(/\D/g, "").replace(/^0+/, "");
    if (!n) return "";
    var c = ddi();
    if (c === "55" && (n.length === 10 || n.length === 11)) n = "55" + n;
    else if (c === "1" && n.length === 10) n = "1" + n;
    else if (c === "351" && n.length === 9) n = "351" + n;
    return n;
  }
  function primeiroNome(s) { return String(s || "").trim().split(/\s+/)[0].toLowerCase(); }

  var ultimoLead = 0;
  w.bmLead = function (dados) {
    if (Date.now() - ultimoLead < 10000) return null; // um envio, um lead (inclui o WhatsApp aberto como reserva)
    ultimoLead = Date.now();
    dados = dados || {};
    var tel = telefone(dados.whatsapp || dados.telefone || dados.phone);
    var u = {};
    if (tel) { u.phone_number = tel; u.phone_e164 = "+" + tel; }
    if (dados.nome || dados.name) u.first_name = primeiroNome(dados.nome || dados.name);
    if (dados.email) u.email = String(dados.email).trim().toLowerCase();
    return evento("bm_lead", { content_name: dados.servico || d.title, lead_tipo: dados.tipo || "formulario" }, u);
  };

  // lead: o envio ao webhook do formulário é o sinal de que a validação passou; a origem vai junto para o CRM
  if (w.fetch) {
    var fetchOriginal = w.fetch;
    w.fetch = function (url, opt) {
      try {
        var u = String(url && url.url ? url.url : url);
        var corpo = opt && opt.body;
        if (/\/webhook\//.test(u) && corpo && typeof corpo.get === "function" && (corpo.get("whatsapp") || corpo.get("telefone") || corpo.get("email"))) {
          var ev = w.bmLead({ nome: corpo.get("nome") || corpo.get("name"), whatsapp: corpo.get("whatsapp") || corpo.get("telefone") || corpo.get("phone"),
                              email: corpo.get("email"), servico: corpo.get("servico") || corpo.get("nicho") || "" });
          ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"].forEach(function (p) { if (origem[p] && !corpo.get(p)) corpo.append(p, origem[p]); });
          if (origem.entrada && !corpo.get("entrada")) corpo.append("entrada", origem.entrada);
          if (ev && !corpo.get("event_id")) corpo.append("event_id", ev.event_id);
        } else if (/\/webhook\//.test(u) && typeof corpo === "string" && corpo.charAt(0) === "{") {
          var j = JSON.parse(corpo);
          if (j.whatsapp || j.email || j.telefone || j.phone) {
            var ev2 = w.bmLead({ nome: j.nome || j.name, whatsapp: j.whatsapp || j.telefone || j.phone, email: j.email, servico: j.business || j.servico || "" });
            ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "entrada"].forEach(function (p) { if (origem[p] && !j[p]) j[p] = origem[p]; });
            if (ev2) j.event_id = ev2.event_id;
            opt.body = JSON.stringify(j);
          }
        }
      } catch (e) {}
      return fetchOriginal.apply(this, arguments);
    };
  }
  // formulário sem webhook que só abre o WhatsApp com "Nome:" na mensagem também é lead
  var abrirOriginal = w.open;
  w.open = function (url) {
    try {
      var s = String(url || "");
      if (/wa\.me|api\.whatsapp\.com/.test(s) && /Nome|Name|Nombre/i.test(decodeURIComponent(s))) {
        var txt = decodeURIComponent(s), nm = (txt.match(/(?:Nome|Name):\s*([^\n]+)/i) || [])[1], tl = (txt.match(/(?:WhatsApp|Telefone|Phone):\s*([^\n]+)/i) || [])[1];
        w.bmLead({ nome: nm, whatsapp: tl, tipo: "formulario_whatsapp" });
      }
    } catch (e) {}
    return abrirOriginal.apply(this, arguments);
  };

  // contato: clique em qualquer link de WhatsApp; content_name diz qual oferta (data-oferta ou o texto da mensagem)
  d.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"],a[href*="whatsapp.com/send"]') : null;
    if (!a) return;
    var oferta = a.getAttribute("data-oferta");
    if (!oferta) {
      var t = ""; try { t = decodeURIComponent((a.href.split("text=")[1] || "").replace(/\+/g, " ")); } catch (er) {}
      oferta = (t || a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
    }
    var onde = a.closest("[id]") ? a.closest("[id]").id : (a.className || "link");
    evento("bm_contato", { content_name: oferta, link_local: String(onde).slice(0, 60) });
  }, true);

  // visualização de conteúdo (uma por carregamento)
  function ver() { evento("bm_view_content", { content_name: d.title.replace(/\s*\|.*$/, "") }); }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", ver); else ver();
})(window, document);
