---
name: AssistPro Editorial
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#56423d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#89726c'
  outline-variant: '#dcc1b9'
  surface-tint: '#9c4328'
  primary: '#994125'
  on-primary: '#ffffff'
  primary-container: '#b8583b'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59f'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5b5c5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#747572'
  on-tertiary-container: '#fdfcf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb59f'
  on-primary-fixed: '#3a0a00'
  on-primary-fixed-variant: '#7d2c13'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e3e2e0'
  tertiary-fixed-dim: '#c7c6c4'
  on-tertiary-fixed: '#1a1c1a'
  on-tertiary-fixed-variant: '#464745'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display:
    fontFamily: Noto Serif
    fontSize: 84px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-hero:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is built upon the "Editorial Minimalism" aesthetic, positioning the agency as a high-tier, white-glove service provider rather than a mere utility. It balances the warmth of human-centric assistance with the precision of modern technology. 

The visual language draws inspiration from high-end fashion and architectural periodicals. It utilizes **Minimalism** with an emphasis on extreme typographic scale and intentional negative space to convey authority and calm. The use of a warm, off-white foundation removes the sterile coldness of standard SaaS platforms, replacing it with a "studio" feel that suggests bespoke attention. Key interactions should feel fluid and intentional, mirroring the seamless experience of having a dedicated professional assistant.

## Colors

The palette is anchored by a warm, organic background (#FAF9F6) that provides a sophisticated alternative to pure white. The primary accent, **Terracotta (#C15F41)**, is used sparingly but boldly to guide the user's eye toward calls to action and critical interactive elements.

- **Primary:** Terracotta, representing warmth, groundedness, and action.
- **Secondary:** Deep Charcoal (#1A1A1A), used for high-contrast typography to ensure maximum readability and a premium "ink-on-paper" feel.
- **Tertiary/Surface:** Pure White (#FFFFFF), reserved exclusively for elevated card elements to create a crisp distinction against the cream background.
- **Neutral:** A cool-toned slate gray from the brand profile (#F2F4F7) is utilized for subtle background shifts and inactive states.

## Typography

The typographic system relies on **extreme scale contrast**. Large-format headlines in **Noto Serif** evoke the authoritative tone of a premium publication, while **Manrope** provides a highly legible, geometric counterpoint for functional text.

Line heights are generous for body copy to prevent visual fatigue, while headlines are kept tight to maintain their structural impact. Use the `label-caps` style for section headers or small metadata to create a "tabbed" or "cataloged" look. Avoid using the serif font for any text smaller than 24px to preserve its elegance and prevent rendering issues.

## Layout & Spacing

This design system employs a **fixed grid** approach for desktop views, centering content within a 1280px container to ensure a focused, curated experience. 

The spacing rhythm is intentional and "airy." Vertical rhythm is defined by a large 120px gap between major sections, allowing the oversized typography to breathe. Content follows a 12-column structure with wide 32px gutters. Use generous padding within cards (minimum 40px) to maintain the premium, spacious feel. Thin horizontal rules (1px) should be used to separate content blocks without adding the visual weight of heavy borders.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. The design system avoids harsh, dark shadows in favor of light, multi-layered "soft glows."

1. **Base Layer:** The warm cream (#FAF9F6) serves as the canvas.
2. **Surface Layer:** Pure white cards sit atop the base, using a subtle 1px border (#EAE9E6) and a soft, diffused shadow (0px 12px 32px rgba(26, 26, 26, 0.04)).
3. **Interactive Layer:** Active elements or hovered cards should lift slightly using a more pronounced, yet still soft, shadow.

Backdrop blurs are used exclusively for navigation bars to maintain the editorial feel while providing modern utility.

## Shapes

The shape language is defined by large, sophisticated radii that soften the high-contrast typography. Standard UI elements (cards, containers) use a **16px-24px corner radius** (Level 2).

Secondary interactive elements, such as category tags or status indicators, utilize **pill-shaped** geometry to create a clear visual distinction from structural cards. Buttons should follow this pill-shaped convention or have at least a 12px radius to ensure they feel approachable.

## Components

### Buttons
Primary buttons are pill-shaped, using the Terracotta (#C15F41) background with pure white text. Secondary buttons should be transparent with a thin 1px charcoal border and charcoal text. Hover states involve a subtle scale increase (1.02x) and a deepening of the shadow.

### Cards
Cards are the primary container for service offerings. They must be pure white (#FFFFFF) with a 24px corner radius. Content inside cards should be left-aligned with significant padding (48px top/bottom) to mirror magazine layouts.

### Chips & Tags
Used for skills or service categories. These are strictly pill-shaped, using a light neutral background (#F2F4F7) and the `label-caps` typography style.

### Inputs
Form fields use a "minimalist underline" style or a very lightly tinted background (#F2F4F7) with a 12px radius. Focus states are indicated by a 1px Charcoal border—avoid high-glow effects to maintain the sophisticated aesthetic.

### Horizontal Rules
Use 1px lines in #EAE9E6 to separate list items or header sections. These should feel like "guides" in a professional document.