---
name: Beatus Scooter
description: Marketing site for electric scooter stores in Rio de Janeiro state, built as a coverage map of the cities Beatus serves.
colors:
  wine: "#ac002f"
  wine-hover: "#c40036"
  wine-dark: "#6e001b"
  wine-display: "#d9365d"
  wine-on-dark: "#ef7592"
  wine-signal: "#ff5d86"
  ink: "#1d1d1d"
  ink-deep: "#141414"
  ink-raised: "#262626"
  mid: "#474747"
  muted: "#5e5e5e"
  line: "#e3e1dd"
  line-strong: "#d6d3ce"
  paper: "#f4f3f1"
  white: "#ffffff"
  on-dark: "rgba(255,255,255,.92)"
  on-dark-2: "rgba(255,255,255,.70)"
  line-dark: "rgba(255,255,255,.12)"
  whatsapp: "#25d366"
  whatsapp-ink: "#0b3d24"
  confirmed-ink: "#17773f"
  confirmed-on-dark: "#7fe0a6"
typography:
  display:
    fontFamily: "'Clash Display', Georgia, serif"
    fontSize: "clamp(38px, 4.5vw, 66px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Clash Display', Georgia, serif"
    fontSize: "clamp(30px, 3.3vw, 46px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Clash Display', Georgia, serif"
    fontSize: "clamp(19px, 1.8vw, 24px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  body-article:
    fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  2xl: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  container: "1280px"
  section: "112px"
  section-compact: "104px"
  section-mobile: "76px"
  card: "28px"
components:
  button-primary:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.wine-hover}"
  button-ghost-on-dark:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-white-on-wine:
    backgroundColor: "{colors.white}"
    textColor: "{colors.wine}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "54px"
  nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark-2}"
    height: "76px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "48px"
  pill-tag:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  card-paper:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.2xl}"
    padding: "34px 40px"
  card-report:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card}"
  verdict-box:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "16px"
    padding: "30px 32px"
---

# Design System: Beatus Scooter

## Overview

**Creative North Star: "The Lit Territory"**

The site is a coverage map of the state of Rio de Janeiro. Every city Beatus serves is a municipality shape filled in wine red on a near-black floor, and the rest of the site extends that idea: the dark ground is the territory, wine red marks what has been won, and thin warm-gray lines divide the land into readable plots. The home opens on the map with the cities lighting up one by one from west to east, and a store owner can tap a city to turn the main button into "Tenho uma loja em X". The first viewport rejects the agency hero built from big number blocks; proof lives in one quiet line of text under the call to action.

The world belongs to the Beatus brand: charcoal and near-black floors, wine as a field color (lit cities, the contact band, the article sidebar CTA), Clash Display for every heading, Satoshi for everything else. Density is editorial rather than dashboard: long single-column sections, generous vertical rhythm, sections alternating between dark (ink), white and warm paper. The only other hue in the world is WhatsApp green, and it is fenced: the floating WhatsApp button, the inside of chat mockups, and sent or confirmed status marks.

The build diverges from the direction contract in two places, and the build wins: the hero grid is an even 6/6 split (not 5/7), and the hero H1 tops out at 66px (not about 76px).

**Key Characteristics:**
- Dark map hero, municipalities as the primary graphic, wine fill as the "covered" signal.
- Three floors in rotation: ink (#1d1d1d / #141414), white, warm paper (#f4f3f1).
- Wine red is a field color, not just an accent: it fills shapes, bands and the one primary button.
- Headings are questions, set in Clash Display 600 with tight tracking and balanced wrap.
- Thin 1px rules do the structural work; shadows are rare and soft.
- WhatsApp green appears only where WhatsApp itself would.

## Colors

A two-temperature palette: warm neutral grays and near-blacks carry the page, one wine red carries all meaning, and a fenced WhatsApp green carries conversation state.

### Primary
- **Beatus Wine** (`wine`): the primary button, lit municipalities on the map, legend swatch, icons in light sections, numbered method counters, category tags on post lists, FAQ plus/minus marks, text selection, the full-bleed contact band and the article sidebar CTA. On white it holds 7.5:1, so it is safe as text.
- **Pressed Wine** (`wine-hover`): hover state of the wine button only.
- **Dried Wine** (`wine-dark`): scrollbar thumb against the ink track; no other role.
- **Lifted Wine** (`wine-display`): the emphasized phrase inside the dark hero H1 ("test ride."). Display sizes only; 3.7:1 on ink.
- **Wine on Dark** (`wine-on-dark`): wine used as text or icon on dark floors (service labels under each funnel stop, icons in the "inside the store" list, focus ring). 6.1:1 on ink.
- **Signal Wine** (`wine-signal`): the brightest wine, reserved for the endpoint of a path: the selected city on the map, the final "signal back" stop ring, and the gradient tail of the funnel line.

### Secondary
- **WhatsApp Green** (`whatsapp`) with **WhatsApp Ink** (`whatsapp-ink`) text: the floating WhatsApp pill and the "Enviar mensagem" label in the ad mockup. Never a section color, never a main CTA fill.
- **Confirmed Green** (`confirmed-ink` on light, `confirmed-on-dark` on dark): positive status only (good metric in the team report, "confirmed" slot, CRM tag, sent conversion signal). The chat mockups use their own dark green bubbles to imitate WhatsApp; those are mockup materials, not palette.

### Neutral
- **Ink** (`ink`): body text on light floors; hero, AEO band and nav background.
- **Deep Ink** (`ink-deep`): the darker floor for store logos, funnel section and footer, so dark sections read as distinct plots.
- **Raised Ink** (`ink-raised`): the city picker select on the dark hero.
- **Mid Gray** (`mid`): secondary body copy on light floors.
- **Muted Gray** (`muted`): captions, meta, breadcrumbs, report footnotes (5.8:1 on paper).
- **Warm Rule** (`line`) and **Warm Rule Strong** (`line-strong`): 1px dividers on white and on paper respectively.
- **Warm Paper** (`paper`): alternate light floor and the inset "scene" card; article lead box.
- **On Dark** / **On Dark 2** / **Line Dark**: white text at 92% and 70% and white rules at 12% on ink floors.

### Named Rules
**The Lit City Rule.** Wine fill on a dark ground means "Beatus is here." Use it for covered territory, the active path and the final call, never as decoration on a neutral card.

**The Fenced Green Rule.** Green appears only on the floating WhatsApp button, inside conversation mockups, and on sent or confirmed status. A green section, a green primary button or a green icon set is off-world.

**The Three Floors Rule.** Sections alternate among ink, white and paper (with deep ink for the store logos, funnel and footer). Wine is the fourth floor and is spent once per page as the closing contact band.

## Typography

**Display Font:** Clash Display 500/600/700 (with Georgia, serif)
**Body Font:** Satoshi 400/500/700 (with Helvetica Neue, Arial, sans-serif)

**Character:** Clash Display gives the headings a compact, engineered, slightly mechanical voice that suits a vehicle trade; Satoshi keeps the body neutral and easy to read in Portuguese at length. Both load from Fontshare with `display=swap`.

### Hierarchy
- **Display** (600, clamp 38 to 66px, 1.05, -0.02em): home hero H1 only. Article H1 uses clamp 34 to 58px and the blog index H1 clamp 36 to 62px at line-height 1.1.
- **Headline** (600, clamp 30 to 46px, 1.05): section H2s, each phrased as a question. The base H2 scale runs clamp 32 to 54px; the contact H2 sits at clamp 32 to 50px; the store logos H2 drops to clamp 26 to 38px. Article H2s run clamp 25 to 32px.
- **Title** (600, clamp 19 to 24px, 1.25, -0.01em): post titles in lists, funnel stop H3s (21px), method step H3s (22px), report headers (20px), FAQ questions (clamp 18 to 21px, 1.3).
- **Numeric display** (Clash 600, 20px to 44px): report values, method counters, calendar day in the slot mockup. Numbers that matter are set in the display face.
- **Body** (400, 17px, 1.6; 16.5px under 720px): home copy, capped at 66ch. Article body is 18px at 1.7 inside a 70ch column (17px on mobile), colored #2f2f2f.
- **Lead** (19 to 21px, 1.6): AEO answer band, problem lead, article lead box.
- **Label** (700, 14px, no case change): category tags, form labels, footer column heads (+0.02em), legend text (14.5px, 500).

### Named Rules
**The Question Heading Rule.** Every section H2 is a real question a store owner would type or ask aloud, and the paragraph right after it answers it directly.

**The No Eyebrow Rule.** Headings stand alone. There is no uppercase label or kicker above any H2; the only small wine label is the category tag that belongs to a post in a list.

**The Tabular Figures Rule.** Metrics, times and table cells use tabular numerals so values align in columns.

## Layout

Single container of 1280px max with a fluid gutter of clamp(20px, 5vw, 72px). Sections are full-bleed color bands with vertical padding of 112px (problem, funnel, team, method) or 104px (comparison, FAQ, blog, contact, testimonials), dropping to 76px under 720px. The fixed nav is 76px tall (66px on mobile) and anchor scrolling is offset by 88px.

Two-column sections use asymmetric fractional grids on a 12-unit sense: 6/6 hero, 7/5 AEO and funnel heads, 5/6 problem and contact, 6/5 team, 4/7 FAQ, with column gaps of clamp(32px, 6vw, 88 to 96px). Articles use a fluid main column plus a 300px sticky sidebar (top 104px).

The funnel is a five-stop horizontal path joined by a 2px wine line; under 1060px it becomes a vertical path with the line on the left and each stop's mockup capped at 360px. Lists of posts are full-width rows (150px tag column, title, 24 to 28px arrow) divided by rules, never card grids.

Breakpoints: 1060px (all two-column grids collapse to one; method steps go to two columns), 980px (article sidebar stacks and stops sticking), 720px (nav links hide, hero reorders to H1, sub, CTA, map, proof; primary hero button goes full width and the ghost button hides; forms and steps go single column; the comparison table becomes labeled stacked rows; the WhatsApp float collapses to its icon).

## Elevation & Depth

The system is flat and uses tonal layering: depth comes from switching floors (ink, deep ink, paper, white) and from 1px rules. Shadows exist only as soft, negative-spread drops under objects that sit on top of a floor, and they never form a hard offset.

### Shadow Vocabulary
- **Primary button lift** (`box-shadow: 0 8px 18px -10px rgba(0,0,0,.45)`): the wine button on the home only.
- **Report card** (`box-shadow: 0 12px 24px -18px rgba(29,29,29,.28)`): the white team report on paper.
- **Form on wine** (`box-shadow: 0 24px 48px -28px rgba(0,0,0,.45)`): the white diagnostic form on the contact band.
- **Floating layers** (`box-shadow: 0 12px 28px -10px rgba(0,0,0,.55)` and `0 8px 20px -8px rgba(0,0,0,.6)`): WhatsApp float and the map tooltip.
- **Nav glass**: ink at 86% (home) or 94% (blog) with a 14px backdrop blur and a line-dark bottom rule.

### Named Rules
**The Negative Spread Rule.** Every shadow uses a negative spread so it reads as contact with the floor, not as a halo. No hard offset shadows.

## Shapes

Softly rounded rectangles throughout, with radius growing with object size: 4px for the skip link and focus ring, 6px for buttons, selects and tooltips, 8px for inputs, 10px for the map bar and notes, 12px for store tiles, mockups and article tables, 14 to 18px for sidebar boxes, the scene card, the report and the form, 16px for the verdict box. Full pills (999px) are reserved for the WhatsApp float, the service pills in the AEO band and status tags. Author photos are circles.

The one organic shape in the system is the municipality outline from the RJ map, drawn with non-scaling 1px strokes. Timelines use 12px circular nodes on a 2px vertical rule; the funnel uses 56px circular stops with a 2px wine ring. Chat bubbles use a 9px radius with one 2px corner pointing to the speaker.

## Components

### Buttons
Confident and flat, with Satoshi 700 at 16px and a 10px gap to an inline WhatsApp glyph.
- **Shape:** gently rounded (6px), 52px min height, 24px horizontal padding; 44px tall in the nav.
- **Primary:** wine fill, white text. It is the only filled button on light and dark floors.
- **Hover / Focus:** hover shifts to pressed wine; active nudges down 1px; focus shows a 3px wine-on-dark ring with 3px offset. Transitions run 0.2s on the house ease.
- **Ghost on dark:** transparent with a 1.5px white rule at 28% (60% on hover), used as the secondary hero action.
- **White on wine:** white fill with wine text inside wine bands (hover #ffe9ee), paired with a ghost at 50% white.

### Chips
- **Style:** service pills on the dark AEO band: 1px white rule at 18%, 84% white text, 14px/500, full pill.
- **Status tag:** small pill with translucent green fill and confirmed-on-dark text, only inside the CRM mockup.

### Cards / Containers
- **Corner Style:** 12px for tiles and mockups, 18px for feature cards.
- **Background:** paper for the lost-sale timeline and article lead, white for the report and form, ink for the article verdict, wine for the sidebar CTA.
- **Shadow Strategy:** flat, except the report and form (see Elevation).
- **Border:** store tiles and sidebar boxes use a 1px rule; paper and ink cards use none.
- **Internal Padding:** 22 to 36px.

### Inputs / Fields
- **Style:** white fill, 1.5px #cfcbc5 stroke, 8px radius, 48px min height, Satoshi 500 at 16px; labels above in 14px/700 with optional hints at 500 in muted gray.
- **Focus:** stroke turns wine plus a 3px wine halo at 15% alpha.
- **Error:** a 14.5px/700 wine line under the form. The dark hero select is a raised-ink field with a custom white chevron.

### Navigation
Fixed translucent ink bar with blur, 50px logo, links in 15px/500 at 70% white turning full white on hover or when current, and one compact wine button on the right. Under 720px the links hide, leaving logo and button; the WhatsApp float covers the rest.

### RJ Coverage Map (signature)
An inline SVG of every RJ municipality: uncovered cities are a 3.5% white wash with a 16% white stroke; covered cities fill wine with an ink stroke, brighten to #d61a4c on hover or focus and to signal wine when selected, with a white pin at each city. With JavaScript, covered cities start transparent and light one by one from west to east (0.6s fade, 45ms apart, 250ms start), all forced lit by 2.6s. A white tooltip names the city on hover. Below the map a bar holds the legend swatch and a city select; picking a city rewrites the primary button.

### Funnel Path (signature)
Five stops (ad, conversation, test ride, sale, signal back) joined by a wine line, each with a line icon in a ringed circle, a Clash H3, a wine-on-dark service label, a short paragraph and a small product mockup (ad card, WhatsApp chat, booked slot, CRM card, conversion signal). The last stop is filled wine with a signal ring.

### Post Rows
Full-width rows divided by rules: category tag in wine, Clash title, stroke arrow. Hover shifts the row 8 to 10px right and slides the arrow 4px while it turns wine.

### Floating WhatsApp
Bottom-right green pill with dark green text, 54px tall, lifting 2px on hover; icon only under 720px.

### Motion
One ease for everything: `cubic-bezier(.16,1,.3,1)`. State changes run 0.2 to 0.3s; section reveals fade up 22px over 0.8s once, via IntersectionObserver, with a 2.6s safety that reveals everything. Reveals and map lighting apply only when JavaScript has added the `js` class, and `prefers-reduced-motion` removes transitions and shows everything lit.

### Imagery
No stock photography and no generated scenes. Imagery is the brand's own: the vector RJ map, product mockups built in HTML and CSS, a single-line scooter drawing in white stroke inside the ad mock, store logos in grayscale that regain color on hover, and the author's real photo in article bylines. Icons are inline stroke SVGs at 1.7 to 1.8 weight with round caps.

## Do's and Don'ts

### Do:
- **Do** open with territory: on any new landing surface for this silo, lead with the map or a place-based artifact, not a stat block.
- **Do** spend wine as a field (lit cities, the closing contact band, the sidebar CTA) and keep one filled button style: wine with white text.
- **Do** phrase every H2 as a question and answer it in the first sentence after it.
- **Do** alternate ink, white and paper floors and separate content with 1px warm rules (#e3e1dd on white, #d6d3ce on paper, 12% white on ink).
- **Do** use `wine-on-dark` for wine text on dark floors and `wine` for wine text on light floors.
- **Do** build proof as product mockups in code (chat, CRM card, report) with a note that they illustrate, not screenshot.
- **Do** keep all motion on the house ease, gate it behind the `js` class, and honor reduced motion.

### Don't:
- **Don't** build a hero from big number blocks or KPI tiles; proof is one line under the button.
- **Don't** use WhatsApp green outside the float, conversation mockups and sent or confirmed status.
- **Don't** put uppercase eyebrows or kickers above headings.
- **Don't** use stock photos, generated people or fake store fronts; show real store logos only.
- **Don't** add hard offset shadows or glow halos; shadows use a negative spread.
- **Don't** publish testimonials or review markup until real, authorized quotes exist; the testimonials block stays hidden.
- **Don't** use em dashes or en dashes in copy; use commas, colons, periods or parentheses.
