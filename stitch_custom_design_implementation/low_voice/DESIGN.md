---
name: Low Voice
colors:
  surface: '#fff8f4'
  surface-dim: '#e2d8d0'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2ea'
  surface-container: '#f7ece4'
  surface-container-high: '#f1e6de'
  surface-container-highest: '#ebe1d9'
  on-surface: '#1f1b16'
  on-surface-variant: '#49473f'
  inverse-surface: '#352f2a'
  inverse-on-surface: '#f9efe7'
  outline: '#7a776f'
  outline-variant: '#cbc6bc'
  surface-tint: '#615e58'
  primary: '#615e58'
  on-primary: '#ffffff'
  primary-container: '#f4efe7'
  on-primary-container: '#6f6c66'
  inverse-primary: '#cac6be'
  secondary: '#765846'
  on-secondary: '#ffffff'
  secondary-container: '#fdd5be'
  on-secondary-container: '#795a49'
  tertiary: '#94483f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffebe8'
  on-tertiary-container: '#a5554c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e2da'
  primary-fixed-dim: '#cac6be'
  on-primary-fixed: '#1d1c17'
  on-primary-fixed-variant: '#494741'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#e6bea9'
  on-secondary-fixed: '#2b1609'
  on-secondary-fixed-variant: '#5c4130'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4aa'
  on-tertiary-fixed: '#3d0605'
  on-tertiary-fixed-variant: '#77312a'
  background: '#fff8f4'
  on-background: '#1f1b16'
  surface-variant: '#ebe1d9'
  paper-2: '#EDE6DB'
  card: '#FBF8F3'
  ink-soft: '#6D625A'
  ink-faint: '#9C9086'
  line: '#DCD3C6'
typography:
  hero-h1:
    fontFamily: GMarketSans
    fontSize: 80px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  hero-h1-mobile:
    fontFamily: GMarketSans
    fontSize: 46px
    fontWeight: '300'
    lineHeight: '1.2'
  page-h1:
    fontFamily: GMarketSans
    fontSize: 60px
    fontWeight: '300'
    lineHeight: '1.2'
  page-h1-mobile:
    fontFamily: GMarketSans
    fontSize: 38px
    fontWeight: '300'
    lineHeight: '1.2'
  h2:
    fontFamily: GMarketSans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.4'
  h3:
    fontFamily: GMarketSans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body:
    fontFamily: GMarketSans
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.95'
  label:
    fontFamily: GMarketSans
    fontSize: 11px
    fontWeight: '300'
    lineHeight: '1.0'
    letterSpacing: 0.3em
spacing:
  base: 8px
  wrap-max: 56rem
  measure: 34rem
  gutter: 1.75rem
  section-v: 4.5rem
  unit-sm: 0.5rem
  unit-md: 1rem
  unit-lg: 2rem
---

## Brand & Style

The design system embodies a "Low Voice" philosophy: quiet, honest, and human-centric. It focuses on the altruistic nature of the space rather than commercial hyperbole. The brand is defined by its boundaries—openly stating what it is not (e.g., "no groups over 4") to protect the tranquility of the environment.

### Design Style: Minimalism & Warm Materiality
The aesthetic is a refined, paper-inspired **Minimalism**. It avoids the clinical coldness of modern tech by using warm, organic tones and a tactile layout that mimics printed editorial design.

- **Human-Centric over Product-Centric:** Focus on stories and people rather than coffee bean specs.
- **Intentional Restraint:** High whitespace and thin, purposeful lines replace heavy decorative elements or images.
- **Honest Texture:** Avoids pure white and pure black to prevent eye strain and maintain a soft, "analog" atmosphere.
- **Subtle Motion:** Interactions are limited to gentle vertical shifts (6px) that suggest weight and presence without being distracting.

## Colors

The palette is derived from natural, earthy materials—unbleached paper, roasted coffee, and dried berries. It prioritizes low-contrast harmony to maintain a "quiet" visual volume.

- **Primary (--paper):** The foundational surface. A warm, cream-tinted off-white that serves as the "background" of the space.
- **Secondary (--coffee):** Used for emphasis, quotes, and pricing. It provides a grounded, professional warmth.
- **Tertiary (--berry):** Reserved strictly for critical boundaries, "refusal" messaging, and special set menus. It acts as a soft warning.
- **Neutral (--ink):** A deep, warm charcoal. This replaces pure black for all primary text to soften the reading experience.
- **Accent Details:** Use `--line` for structural separation. It should be subtle enough to organize content without creating hard visual barriers.

**Dark Mode Note:** When switching to dark mode, maintain the "brown-toned" warmth. Avoid shifting to blue-blacks or neutral grays; instead, use deep umber and muted tan equivalents to preserve the "low light" cafe atmosphere.

## Typography

The system relies exclusively on **GMarketSans**, utilizing its specific weight characteristics (300/500/700) to create hierarchy without font switching.

- **Weight Discipline:** Use 300 (Light) for the majority of the UI, including body text and large headers. 500 (Medium) is reserved for sub-headers and UI labels that require immediate recognition.
- **Reading Rhythm:** A generous line-height of 1.95 is mandatory for body text. This forces a slower, more deliberate reading pace, aligning with the brand’s "quiet" philosophy.
- **Measure:** Paragraphs must never exceed a width of `34rem` (approx. 544px). This ensures optimal readability and prevents lines from becoming too long in the high-whitespace layout.
- **Scale:** Headers use a fluid scale (clamp) to transition between desktop and mobile, ensuring the "low voice" remains legible and impactful on all devices.

## Layout & Spacing

The layout is a **fixed-fluid hybrid** that prioritizes negative space as a functional element.

- **The Wrapper:** All main content is contained within a `56rem` max-width container, centered on the screen.
- **Sectioning:** Vertical rhythm is defined by a consistent `4.5rem` (72px) margin between sections. Sections are separated by a singular 1px `--line` to denote transition without adding visual weight.
- **Mobile Adaptivity:** Below `600px`, margins should reduce to `1.25rem`, but the vertical spacing between sections remains high to preserve the "unhurried" feel.
- **Alignment:** Use a 12-column internal grid for card layouts (e.g., 3-column grid for menu items), but allow stories and text blocks to align to a central, narrower column (`34rem`).

## Elevation & Depth

Elevation is used sparingly to denote interactivity rather than structural depth.

- **Low-Contrast Outlines:** The default state for containers and cards is flat, defined by subtle background shifts (`--paper-2` or `--card`) or 1px `--line` borders.
- **Hover State:** When a card is hovered, it uses an **Ambient Shadow** and a slight vertical lift.
  - **Shadow Character:** Extremely diffused, using the `--ink` color at low opacity (`0.28`). 
  - **Motion:** A `translateY(-6px)` lift over 0.32s using a smooth cubic-bezier (`.22, .7, .3, 1`).
- **No Gradients:** Depth must never be conveyed through gradients or skeuomorphic lighting. Use flat color blocks and crisp shadows only.

## Shapes

The design system uses **Sharp (0px)** corners for almost all elements. This choice reflects the honesty and directness of the brand.

- **Borders:** Structural elements like input fields, buttons, and cards should have 0px radius.
- **Exceptions:** If a component requires a "human" touch (like a profile image or a small interactive tag), a maximum of 2px radius may be applied, but sharp corners are the default preference.
- **Lines:** Dividers are always 1px thick. Never use dashed or dotted lines; maintain a solid, continuous stroke.

## Components

Components are styled with extreme restraint to avoid looking like "marketing" elements.

- **Buttons:** Text-based with a subtle underline or a solid background using `--ink` or `--paper-2`. No rounded corners. The focus is on the label, not the container.
- **Cards:** Used for menu items and stories. Cards use `--card` as a surface color. They should not have borders unless they are on a `--paper` background; instead, use whitespace to define their boundaries.
- **Input Fields:** Minimalist design. A single bottom border or a very light `--line` box. Placeholder text should use `--ink-faint`.
- **Chips/Labels:** Small, uppercase text with high letter spacing (`0.3em`). These should be used for metadata like "STUDY" or "NOTICE."
- **Lists:** Traditional list markers are replaced with either a small `--coffee` colored square or simply an indented structure to maintain the clean line-of-sight.
- **Hero Area:** In the absence of photography, use the `hero-h1` typography as the primary visual anchor. If an image is added, it should be a single, high-quality, warm-toned shot of the bar counter or the owner’s workspace, never a generic stock photo.