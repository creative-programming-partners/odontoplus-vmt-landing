---
name: OdontoPlus VMT
description: Clínica dental para toda la familia en Villa María del Triunfo; booking in plain sight through the clinic's appointment card.
colors:
  white: "#ffffff"
  mist: "#f1f6fa"
  mist-2: "#e3edf4"
  line: "#d6e1ea"
  navy: "#13264f"
  navy-2: "#1c3466"
  ink-2: "#3c4b6b"
  ink-3: "#5f6d88"
  celeste: "#1e9bd7"
  celeste-deep: "#0f7db3"
  celeste-soft: "#dff1fa"
  whatsapp: "#1c8f4e"
  whatsapp-deep: "#177a42"
typography:
  display:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.2vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
  tag:
    fontFamily: "'Figtree Variable', 'Figtree', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  focus: "6px"
  tile: "16px"
  card: "20px"
  photo: "28px"
  pill: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  card-pad: "20px"
  section-y: "80px"
  section-y-md: "112px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.navy-2}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-white-hover:
    backgroundColor: "{colors.mist}"
  chip-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "40px"
  chip-option-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  source-tag:
    backgroundColor: "{colors.mist-2}"
    textColor: "{colors.ink-2}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "20px"
  appointment-card-header:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "14px 20px"
  appointment-card-stub:
    backgroundColor: "{colors.celeste-soft}"
    textColor: "{colors.navy}"
    padding: "20px"
---

# Design System: OdontoPlus VMT

## Overview

**Creative North Star: "Reserva a la vista"**

The system is a clean, bright neighbourhood-clinic world: white and cool-mist grounds, the clinic's navy carrying text and every full-width band, and a single celeste voice taken from the clinic's own Facebook cover. Its organising object is the clinic's paper appointment card (tarjeta de citas), rebuilt as an interactive ticket: options on the left, a perforated stub on the right whose summary fills in as the visitor chooses and becomes the WhatsApp message. Everything else on the page is calm and legible so that the card, and the green WhatsApp action inside it, are unmistakable.

Density is generous and friendly: big rounded photos of real dental care, pill buttons, soft navy-tinted shadows, Figtree at heavy weight for headings with tight tracking and relaxed body copy. The brand commitment from PRODUCT.md is binding here: clarity over concept. A visitor arriving from Instagram on a phone must read "dentist in VMT, this is how I book" in seconds; no device in this world may need explaining.

Honesty is part of the visual language. Every content item carries a provenance tag (from Instagram, from Facebook, or example content), and stock photos that could be mistaken for the clinic carry a "Foto referencial" pill. The rejected previous world (abstract dental-chart notation) is a confirmed anti-reference.

**Key Characteristics:**
- White and mist grounds, navy text and bands, one celeste accent, WhatsApp green reserved for WhatsApp.
- Figtree Variable throughout; 800 for headings, tight negative tracking.
- Pills for every action and chip; 20px cards; 28px photos and bands.
- The appointment card is the one object elevated at rest.
- Provenance tags and "Foto referencial" pills are permanent parts of the system, not afterthoughts.
- Motion is quick, ease-out, small in distance, and has a reduced-motion fallback everywhere.

## Colors

A cool, clinical-but-warm palette: mostly white and mist, anchored by navy, with one bright celeste accent and one functional green.

### Primary
- **OdontoPlus Navy** (navy): body and heading text, the logo tooth, primary buttons, selected chips, the appointment-card header, the CTA band and the footer. The brand's anchor; when in doubt, text is navy.
- **Navy Hover** (navy-2): hover state of navy primary buttons only.

### Secondary
- **Cover Celeste** (celeste): the single accent. Emphasis words inside large headings (the hero's "de confianza"), the "Plus" of the logo and its badge, header icons, focus rings, text selection and caret. Used at large or bold sizes only.
- **Deep Celeste** (celeste-deep): the accent at text size: "Consultar" links, "Tu cita:" on the stub, icons inside soft celeste discs. Use this, never base celeste, for small text.
- **Celeste Wash** (celeste-soft): icon discs in the trust row and the appointment-card stub (at about 55% opacity).

### Tertiary
- **WhatsApp Green** (whatsapp) and **WhatsApp Hover** (whatsapp-deep): only on actions that open WhatsApp: the stub's "Reservar por WhatsApp", the header "Reservar cita", the floating bubble, the CTA band's main button, and inline WhatsApp links.

### Neutral
- **White** (white): default page ground, cards, unselected chips.
- **Cool Mist** (mist): hero gradient start, header at rest, alternating section grounds (cases), white-button hover.
- **Deep Mist** (mist-2): photo placeholders, factual provenance tags, pending-photo slots.
- **Hairline** (line): 1px card borders, 2px chip borders, the dashed tear line, dividers, scrollbar thumb.
- **Slate** (ink-2): secondary text, intros, chip labels, legends.
- **Muted Slate** (ink-3): tertiary text, meta lines, empty-state stub copy, demo-tag text.

### Named Rules
**The One Voice Rule.** Celeste is the only accent. It marks one or two words per heading, icons and links; it never fills a band, a button or a card.

**The Green Means WhatsApp Rule.** WhatsApp green appears only on elements that open WhatsApp. A green button that does anything else breaks the booking signal.

**The Navy Band Rule.** Full-width dark surfaces (appointment-card header, CTA band, footer) are navy, never celeste or green.

## Typography

**Display Font:** Figtree Variable (with Figtree, ui-sans-serif, system-ui)
**Body Font:** Figtree Variable (same stack)

**Character:** One friendly geometric sans at two temperatures: 800-weight headings with tight tracking that read as confident and local, and 400–600 body that stays plain and easy on a phone.

### Hierarchy
- **Display** (800, clamp(2.3rem, 4.2vw, 3.4rem), 1.08, -0.035em): the hero H1 only.
- **Headline** (800, clamp(1.9rem, 4vw, 3rem), 1.08, -0.025em): section H2s and the CTA band, with an optional intro paragraph at 1.125rem in slate, max 58ch.
- **Title** (800, 1.125–1.6rem, 1.08): card and treatment names; featured treatment names run at 1.6rem, compact ones at 1.25rem.
- **Body** (400, 1.0625rem, 1.6): running text, `text-wrap: pretty`, measure 48–62ch.
- **Label** (700, 0.875rem): chip-group legends, trust-row titles, stub links; chips themselves are 600 at 0.9rem.
- **Tag** (600, 0.72rem, line-height 1): provenance tags and "Foto referencial" pills.

### Named Rules
**The Heavy Heading Rule.** Every heading is Figtree 800 with negative tracking and balanced wrapping. Weight carries hierarchy; no second display face.

**The Plain Label Rule.** Labels are sentence case questions in plain Spanish ("¿Qué necesitas?", "¿Qué día te acomoda?"). Letter-spaced uppercase belongs only to the logo's "VMT · CLÍNICA DENTAL" lockup line.

## Layout

A centred container (max 1320px) with 16 / 24 / 40px side gutters at phone / sm / lg. Desktop sections use a 12-column grid: the hero gives 7 columns to the H1, promise and appointment card and 5 to a tall rounded photo with a trust row beneath; the FAQ splits 4 / 8. Sections breathe at 80px vertical padding, 112px from md up, alternating white and mist grounds. Card grids use 20px gaps (2 featured treatments, then 4 compact). Horizontal content (cases) becomes a snap-scrolling rail with hidden scrollbar on phones and a 5-column grid on desktop.

On phones the order is H1, promise, a full-width WhatsApp button, the photo, then the appointment card stacked (stub below the options). The ticket layout (stub beside options, 17rem wide) appears from lg. The booking button must stay in the first viewport at 1280×720. Sticky header is 72px; anchor scroll offset is 5.5rem.

## Elevation & Depth

A light, layered system: surfaces are white on mist, separated mainly by hairline borders, with two navy-tinted shadows. Depth signals importance and interactivity, never decoration.

### Shadow Vocabulary
- **Soft** (`box-shadow: 0 1px 2px rgb(19 38 79 / 0.05), 0 6px 18px -6px rgb(19 38 79 / 0.12)`): resting state of trust tiles, treatment and case cards, the menu button and the rating badge.
- **Card** (`box-shadow: 0 1px 2px rgb(19 38 79 / 0.06), 0 12px 32px -8px rgb(19 38 79 / 0.18)`): the appointment card at rest; elsewhere only as the hover state of a soft card.
- **WhatsApp glow** (`0 6px 16px -6px rgb(28 143 78 / 0.55)` on buttons, `0 10px 28px -8px rgb(28 143 78 / 0.6)` on the floating bubble): a green-tinted lift unique to WhatsApp actions.

### Named Rules
**The One Elevated Object Rule.** Only the appointment card wears the card shadow at rest. Every other card is soft at rest and may rise to card on hover.

**The Tinted Shadow Rule.** Shadows are tinted with navy (or green on WhatsApp actions), never neutral black.

## Shapes

Generously rounded and friendly. Cards, FAQ items and the appointment card use 20px; photos and the navy CTA band use 28px; trust tiles 16px; every button, chip, nav link, tag and icon disc is a full pill or circle. Borders are 1px hairline on cards and 2px on chips and outline buttons. The one non-rounded geometry is the ticket: a 2px dashed tear line between options and stub, with 24px circular perforation notches clipped to half circles where the line meets the card edge. Dashed borders also mark anything provisional (example-content tags, pending case photos).

## Components

### Buttons
Tactile, confident pills.
- **Shape:** full pill; heights 44px (md, 20px side padding, 0.95rem) and 56px (lg, 28px, 1.02rem); weight 700; icon gap 10px.
- **Primary:** navy fill, white text; hover navy-2.
- **WhatsApp:** green fill, white text, WhatsApp glyph (inline brand SVG) left, green glow; hover whatsapp-deep. The default booking action.
- **Outline:** 2px navy-at-15% border, navy text; border darkens to 40% on hover.
- **White / Ghost-light:** white fill on dark grounds; or 2px white-at-30% border, white text, on the navy band.
- **Press / Focus:** scale 0.97 on press (160ms, ease-out-strong), colors 180ms; 2px celeste focus outline at 3px offset. Reduced motion removes the scale.

### Chips
- **Style:** 40px pill, 2px hairline border, white fill, slate text, 600 at 0.9rem; compact chips (days, shifts) are at least 48px wide.
- **State:** selected chips fill navy with white text (`aria-pressed`); tapping again clears the choice. Hover darkens the border only on hover-capable devices.

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** white, on white or mist sections.
- **Shadow Strategy:** soft at rest, card on hover (see Elevation).
- **Border:** 1px hairline.
- **Internal Padding:** 20px, 24–28px on featured cards. Photos inside cards zoom to 1.03 over 500ms on hover.
- Each content card ends with a provenance tag on the left and a deep-celeste "Consultar →" link on the right.

### Navigation
Sticky 72px header: mist at rest, white at 95% with a hairline bottom shadow and backdrop blur once scrolled. Links are 600 at 0.95rem in slate, as pills that gain a 5% navy wash on hover. Right side: phone with celeste icon (xl), the WhatsApp "Reservar cita" button, and on mobile a white circular menu button opening a full-height white sheet with 800-weight 1.5rem links and stacked WhatsApp and call buttons.

### Appointment Card (signature)
The clinic's paper tarjeta de citas as a ticket. A navy header strip ("Tarjeta de citas" plus white logomark and name), three chip groups (treatment, day, shift), and a celeste-washed stub behind a dashed tear line with perforation notches. The stub's summary ("Tu cita: Endodoncia · jueves · por la tarde") updates live with a 220ms blur crossfade (blur 3px, 4px rise) and is announced politely to screen readers; the full-width WhatsApp button sends exactly that summary. Nothing is required; there is no name field. Below the button, a quiet underlined phone link.

### Provenance Tag and Photo Note
- **Provenance tag:** pill, 0.72rem 600. Factual sources (Instagram, Facebook) on deep-mist fill with slate text; example content in a dashed muted-slate border with no fill. Dark variants on navy use white at 10% fill or dashed white at 40%.
- **Foto referencial:** pill pinned 12px from the photo's bottom-left, navy at 70% with backdrop blur, white 0.72rem 600 text. Required on any stock photo that could be read as the clinic itself; removed when a real clinic photo replaces it.

### Floating WhatsApp
Appears after 720px of scroll (once the hero card is out of view) at bottom-right, respecting safe-area insets: a 56px green pill with glyph and "Escríbenos" (label hidden on phones), green glow. Enters with a spring (0.45s, bounce 0.2) from 12px below at scale 0.9; exits in 150ms.

### Motion
One easing for everything: ease-out-strong `cubic-bezier(0.23, 1, 0.32, 1)`. Sections reveal once on scroll, 14px rise over 600ms with 50–60ms stagger; hero elements enter over 700ms with 70ms steps. FAQ answers expand by animating grid rows over 300ms. Under `prefers-reduced-motion`, movement drops to opacity only, press scale and smooth scroll are disabled.

## Do's and Don'ts

### Do:
- **Do** keep navy (#13264F) as the text and band color and celeste as the only accent, used on one or two words per heading.
- **Do** use base celeste only at large or bold sizes; use celeste-deep for small text and links.
- **Do** put WhatsApp green on every action that opens WhatsApp, and on nothing else.
- **Do** give every content item a provenance tag, and every stock photo that could pass as the clinic a "Foto referencial" pill.
- **Do** use pills for actions and chips, 20px for cards, 28px for photos and bands.
- **Do** keep the appointment card as the only object with the card shadow at rest.
- **Do** use ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, short distances (≤14px), press scale 0.97, and a reduced-motion fallback for every animation.
- **Do** write labels and headings in plain Peru Spanish, sentence case.

### Don't:
- **Don't** introduce a second accent color or fill large areas with celeste.
- **Don't** use green for non-WhatsApp actions.
- **Don't** use neutral black shadows or hard offset shadows; shadows are soft and navy-tinted.
- **Don't** add small uppercase letter-spaced kickers or eyebrows above headings.
- **Don't** bring back abstract chart notation, technical diagrams or any device that needs explaining (the rejected odontogram world).
- **Don't** add a second typeface; Figtree carries display and text.
