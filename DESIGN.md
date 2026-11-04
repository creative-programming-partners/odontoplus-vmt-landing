---
name: OdontoPlus VMT
description: Clínica dental para toda la familia en Villa María del Triunfo, presented as the clinic's own dental chart (odontograma).
colors:
  paper: "#f4f6f3"
  paper-2: "#e9ede8"
  rule: "#d3dad4"
  rule-strong: "#b4beb7"
  ink: "#14254f"
  ink-2: "#3d4a6b"
  ink-3: "#5d6884"
  night: "#0f1c3d"
  night-2: "#1b2b55"
  mark-red: "#d7263d"
  mark-red-soft: "#f7d9dd"
  mark-blue: "#1f5fd1"
  mark-blue-soft: "#d9e4f8"
  whatsapp: "#1c8f4e"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 4.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.5rem)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.05em"
  data:
    fontFamily: "'Martian Mono Variable', 'Martian Mono', ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  tag: "3px"
  check: "4px"
  panel: "14px"
  pill: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "40px"
  section: "80px"
  section-md: "112px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.night-2}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chip-symptom:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "40px"
  chip-symptom-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  source-tag:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "2px 6px"
  chart-panel:
    rounded: "{rounded.panel}"
  field-underline:
    textColor: "#ffffff"
    height: "48px"
    padding: "0"
---

# Design System: OdontoPlus VMT

## Overview

**Creative North Star: "The Odontograma"**

Every surface is a page of the clinic's own dental chart. The ground is cool chart paper with a hairline printed grid, the ink is a deep navy that also carries whole sections as solid night bands, and colour beyond that is clinical notation: red marks what is *por tratar*, blue marks what is *tratado*, exactly as a dentist colours a chart by hand. Components are parts of a printed form (ruled registers with fixed columns, underline fields, stamped provenance tags, the five-surface tooth square) rather than generic web cards.

Density is calm and generous: large expanded-width headings, long ruled rows, and a single strong top rule (2px ink) that opens each register. Depth is flat: overlap, hairlines and tonal paper, never drop shadows. Motion behaves like a pen: marks are drawn on (pathLength), readings crossfade with a short blur, and every press gives a small, instant scale response. The world refuses the dental-category default of white-and-teal heroes, stock smiling patients and rounded service cards.

Content is Spanish (Peru). Demo content is always labelled with its provenance; the system treats provenance as a visual element, not a footnote.

**Key Characteristics:**
- Cool chart paper ground, navy ink, navy night bands for whole sections.
- Notation red and notation blue carry clinical meaning only.
- Archivo on the width axis (expanded headings) paired with Martian Mono for numbers, labels and data.
- Printed-form components: ruled rows, fixed columns, underline fields, stamped tags.
- Flat depth; pen-like motion with reduced-motion fallbacks.

## Colors

A cool, near-monochrome paper-and-navy chart where the only saturated colour is clinical notation (plus WhatsApp green for the booking action).

### Primary
- **Chart Ink Navy** (#14254f): body text, headings, rules, strokes of every tooth and logomark, primary button fill, active chip fill. The heritage navy of the clinic, kept as the ink of the chart.
- **Night Band** (#0f1c3d): solid background for whole sections (Primera cita, Reservar, footer). White type sits on it; it is a section ground, never a card fill on paper.
- **Night Raised** (#1b2b55): hover state of the primary button.

### Secondary
- **Notation Red** (#d7263d): the *por tratar* mark. Tooth surfaces, the pen ring on a selected tooth, the "Antes" toggle, the hand-drawn underline under the H1 key phrase, case brackets and leader lines in the before phase, the red half of the footer line, and the form caret.
- **Notation Red Wash** (#f7d9dd): crown tint of a tooth marked red.

### Tertiary
- **Notation Blue** (#1f5fd1): the *tratado* mark. Tooth surfaces after treatment, the "Después" toggle, completed case steps, the H1 key phrase "diente por diente", the plus at the centre of the logomark and the "plus" in the wordmark. Also the system focus ring and text selection.
- **Notation Blue Wash** (#d9e4f8): crown tint of a tooth marked blue.
- **WhatsApp Green** (#1c8f4e): WhatsApp actions only (booking buttons, "Preguntar precio" links). It is the action colour, never a brand accent.

### Neutral
- **Chart Paper** (#f4f6f3): page ground and paper-tone button fill.
- **Paper Shade** (#e9ede8): alternate section ground (used at 60% for Casos, Opiniones, Ubicación) to separate bands without a shadow.
- **Hairline Rule** (#d3dad4): the printed chart grid (at 60% mix) and soft rules.
- **Strong Rule** (#b4beb7): scrollbar thumb and heavier dividers.
- **Ink Secondary** (#3d4a6b): intros, secondary copy, inactive chip text.
- **Ink Tertiary** (#5d6884): mono labels, FDI numbers not in focus, captions, meta.

### Named Rules
**The Notation Rule.** Red and blue are clinical marks: red means *por tratar*, blue means *tratado*. Use them only on teeth, chart legends, before/after states, case annotations, the H1 key phrase and the footer red/blue line (plus the system focus ring, selection and caret the build assigns them). Never as decorative fills, section backgrounds, icons or generic accents.

**The Ink Carries Sections Rule.** Navy is not only text: whole sections switch to the night band to change pace. Alternate paper, paper-shade and night bands; do not invent new section colours.

## Typography

**Display Font:** Archivo Variable (with Archivo, ui-sans-serif, system-ui)
**Label/Mono Font:** Martian Mono Variable (with ui-monospace)

**Character:** Archivo's width axis is the voice: headings set expanded (wdth 112, titles and the wordmark at 125) read like the printed header of a clinical form, while body stays at wdth 100. Martian Mono is the chart's handwriting of record: FDI tooth numbers, field labels, visit counts, hours, phone numbers.

### Hierarchy
- **Display** (800, clamp(2.35rem, 4.6vw, 4.6rem), 1.04, -0.035em, wdth 112): the hero H1 and the footer statement only.
- **Headline** (750, clamp(2rem, 4.4vw, 3.5rem), 1.04, -0.025em, wdth 112): section H2s, balanced wrap.
- **Title** (700, 1.25–1.45rem, tight, wdth 125): register row names, step titles, panel headers ("Ficha odontológica"), the address.
- **Body** (400, 1.0625rem, 1.6, wdth 100): copy, pretty wrap, measures of 46–62ch; intros at 1.125rem in Ink Secondary.
- **Label** (Martian Mono 400, 0.6–0.68rem, 0.05em tracking, uppercase): field labels, column headers, list legends (Dirección, Horario, Turno, Contacto).
- **Data** (Martian Mono, 0.55–0.8rem, tabular numerals): FDI numbers, "Pieza 36", visits, hours, phone, "Paso 1 / 4".

### Named Rules
**The Width Axis Rule.** Hierarchy comes from width and weight on one family, not from a second display face. Headings expand (wdth 112–125); body never does.

**The Mono Is Data Rule.** Martian Mono sets numbers, field labels and data. It labels a field, a column or a value; it never floats above a section heading as a decorative tagline.

## Layout

A 12-column grid inside a centred container (max 1320px) with gutters of 16px, 24px and 40px at mobile, sm and lg. Sections breathe on an 80px rhythm (112px from md). Heroes and section intros take 5–7 columns; the working chart takes the other 7. Registers (treatments, FAQ, team, case list) span the full content width and open with a 2px ink top rule, rows divided by ink hairlines at 15%. Mobile-first: the odontogram stacks into four quadrant rows on phones and becomes the classic 2×2 chart with midlines from md; a fixed WhatsApp booking bar appears below md. Breakpoints are Tailwind defaults (640 / 768 / 1024 / 1280).

**The Chart Paper Rule.** The 24px printed grid appears only on chart surfaces (the hero odontogram and case charts), never as a page or section background.

## Elevation & Depth

The system is flat. There is no box-shadow anywhere in the build. Depth comes from flat overlap and tone: chart panels are translucent white (70–80%) over paper with a 1px ink border at 20%; tiled grids use a 1px gap over a tinted ground so the hairlines are the background showing through; sections separate by paper / paper-shade / night bands. The sticky header and mobile booking bar use 95% paper with a small backdrop blur purely for legibility while scrolling.

**The Flat Overlap Rule.** Depth is shown by overlap, borders and tone, never by drop shadows or glows.

## Shapes

Mostly square-shouldered printed forms with two soft exceptions. Stamped tags, legend swatches and the case-list marker use a barely rounded 3px corner; step checkboxes 4px. Chart panels, tiled step grids, testimonials and the map frame use a 14px panel radius. Every interactive control (buttons, chips, toggles, icon buttons, the register's open/close disc) is a full pill or circle. Rules are the main structural shape: 2px ink to open a register, 1px hairlines to divide rows, 2px underlines as the only field border. The logomark is the five-surface tooth square with a 9px-radius frame, corner diagonals and a plus at its centre.

## Components

### Buttons
Confident, rounded, instant.
- **Shape:** full pill (9999px); heights 44px (md) and 56px (lg).
- **Primary:** ink fill with paper text, semibold 0.95rem, hover to Night Raised. Used for "Reservar cita" in the header.
- **WhatsApp:** green fill, white text, WhatsApp glyph at 18–20px; the default for every booking action, full-width on mobile.
- **Outline:** 1px ink border at 25%, hover to full ink with a 4% ink wash. Secondary actions like "Ver tratado / Ver antes".
- **Paper / Ghost:** paper fill or transparent, for use on night bands and quiet actions.
- **Press:** every pressable scales to 0.97 on active (160ms, strong ease-out); colours change over 180ms. Reduced motion removes the scale.

### Chips
- **Style:** pill, 40–44px tall, 1px ink border at 20%, Ink Secondary text, 0.8rem medium.
- **State:** active fills with ink and paper text (on night bands: white fill, ink text). Symptom chips are a radio group; day/shift chips are toggle buttons.

### Cards / Containers
- **Corner Style:** 14px panel radius.
- **Background:** white at 70–80% over paper; night on night bands.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px ink at 20% (white at 15% on night).
- **Internal Padding:** 12–28px; panels are subdivided by ink rules into printed header, body and reading strips.

### Inputs / Fields
- **Style:** underline fields: no box, transparent ground, 2px bottom rule (white at 30% on night), 48px tall, 1.125rem text, mono uppercase label above.
- **Focus:** the underline goes to full white; caret is Notation Red.
- **Error:** underline and message turn to a light red tuned for the night band.

### Navigation
Chart-header bar, 68px, sticky. Paper ground that gains a 15% ink bottom rule and 95% translucency after scroll. Links 0.92rem medium Ink Secondary, hover to ink. Below lg the menu becomes a full-height paper sheet of large expanded links divided by hairlines, with a full-width WhatsApp button at the foot.

### Source Tag
The stamped provenance mark on every content item: Martian Mono 0.625rem uppercase in a 3px-radius 1px box with a leading dot. Real sources ("Publicado en Instagram", "Dato de Facebook") take a solid border; "Contenido de ejemplo" takes a dashed border and dimmer ink so demo content is never read as real.

### Register Row
The treatments table and FAQ: fixed columns (treatment / qué resuelve / citas / open disc) that never shift, a mono column header, row titles in Title style, data in mono. Rows open by animating grid-template-rows (300ms, strong ease-out) and the circular plus turns 45° into an ink-filled close.

### Tooth Glyph and Odontogram
Each tooth is a silhouette (incisor, canine, premolar, molar; lower teeth mirrored) above or below the five-surface square, stroked in ink at ~1.1–1.3px. A mark fills the occlusal centre and one side in red or blue and washes the crown; the selected tooth gets a pen ring drawn on with pathLength. FDI numbers sit in mono beside each tooth; quadrant midlines are ink at 35%.

### Case Annotation
A segment of the arch with a 2px bracket under the treated teeth and a leader line that draws down (scaleY) to a mono caption, all in the current notation colour. Before/after is a mono pill toggle (red "Antes", blue "Después"); case steps check off in blue with a 90ms stagger.

### Logo
The five-surface tooth square with its centre turned into a blue plus, beside the expanded wordmark "Odonto**plus**" (plus in Notation Blue) and a mono "VMT" stamp. Ink and paper tones.

### Motion
- **Easing:** strong ease-out (cubic-bezier(0.23, 1, 0.32, 1)) for entrances and state changes; strong ease-in-out (cubic-bezier(0.77, 0, 0.175, 1)) for pen draws (underline, ring, leader line).
- **Reveal:** scroll entrances move 14px with opacity over 0.6s, once.
- **Crossfade:** chart readings and case panels swap with a 4–6px blur and opacity over 0.28–0.3s.
- **Reduced motion:** transforms, blur and draws collapse to opacity or the final state.

## Do's and Don'ts

### Do:
- **Do** mark clinical state with Notation Red (*por tratar*) and Notation Blue (*tratado*), and keep that meaning consistent across chart, legend, cases and copy.
- **Do** set headings in Archivo at wdth 112 (titles at 125) and body at wdth 100.
- **Do** put FDI numbers, field labels, visit counts, hours and phone numbers in Martian Mono with tabular numerals.
- **Do** open every register with a 2px ink top rule and divide rows with 1px ink hairlines at 15%.
- **Do** label every content item with a Source Tag; dashed for "Contenido de ejemplo".
- **Do** use the night band for whole sections, with white type and white-at-15% hairlines.
- **Do** give every pressable the 0.97 press scale and provide a reduced-motion fallback for every animation.
- **Do** route every booking action through the WhatsApp green button.

### Don't:
- **Don't** use red or blue as decoration, section backgrounds, or generic accent colour.
- **Don't** add drop shadows or glows; depth is flat overlap and tone.
- **Don't** put the chart grid on page or section backgrounds; it belongs to chart surfaces only.
- **Don't** place mono uppercase taglines above section headings; mono labels name fields, columns and values.
- **Don't** fall back to white-and-teal heroes, stock smiling patients, or rounded service-card grids.
- **Don't** box form fields; fields are underlines.
- **Don't** present demo content (team, testimonials, hours, prices) without its "Contenido de ejemplo" tag.
