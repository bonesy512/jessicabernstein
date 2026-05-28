---
name: Law Office of Jessica Bernstein (Vercel-Engineered)
colors:
  light:
    background: "#fafafa" # Vercel's canvas-soft
    foreground: "#0f172a" # Deep Slate (replaces Vercel Ink)
    primary: "#0f172a"
    primary-foreground: "#ffffff"
    secondary: "#ffffff" # Vercel's pure canvas
    secondary-foreground: "#0f172a"
    muted: "#f5f5f5" # Vercel's canvas-soft-2
    muted-foreground: "#64748b"
    accent: "#b45309"
    accent-foreground: "#ffffff"
    destructive: "#dc2626" # Urgent Red for Jail Release
    destructive-foreground: "#ffffff"
    border: "#ebebeb" # Vercel Hairline
    card: "#ffffff"
    card-foreground: "#0f172a"
  dark:
    background: "#020617" # Deep Midnight
    foreground: "#f8fafc"
    primary: "#f8fafc"
    primary-foreground: "#020617"
    secondary: "#0f172a"
    secondary-foreground: "#f8fafc"
    muted: "#1e293b"
    muted-foreground: "#94a3b8"
    accent: "#d97706"
    accent-foreground: "#ffffff"
    destructive: "#ef4444"
    destructive-foreground: "#ffffff"
    border: "#1e293b"
    card: "#0f172a"
    card-foreground: "#f8fafc"
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: "600"
    lineHeight: 48px
    letterSpacing: -2.4px
  display-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -1.28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0px
  button-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "500"
    lineHeight: 24px
    letterSpacing: 0px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  pill: 100px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 192px
elevation:
  level-1: "0 0 0 1px var(--border-color)"
  level-2: "0px 1px 1px rgba(0,0,0,0.02), 0px 2px 2px rgba(0,0,0,0.04), 0 0 0 1px var(--border-color)"
  level-3: "0px 2px 2px rgba(0,0,0,0.04), 0px 8px 8px -8px rgba(0,0,0,0.04), 0 0 0 1px var(--border-color)"
  level-4: "0px 2px 2px rgba(0,0,0,0.04), 0px 8px 16px -4px rgba(0,0,0,0.04), 0 0 0 1px var(--border-color)"
---

# DESIGN.md

## Brand & Style (The Vercel-Legal Hybrid)

We are adapting Vercel's stark, developer-focused precision to the legal sector. By utilizing a near-white canvas (`#fafafa`), deep slate ink (`#0f172a`), and aggressive negative tracking on our serif headings, we project absolute authority, extreme technical competence, and trustworthiness. 

The site must feel engineered, not just designed. The only place we introduce high-urgency color is the `destructive` Red (`#dc2626`) reserved strictly for the 24-Hour Jail Release CTA. 

## Typography

We map Vercel's typographic principles to our legal font stack:
- **Headings (`Playfair Display`):** Weight 600 is the ceiling. We utilize Vercel's aggressive negative tracking (`-2.4px` for Heroes, `-1.28px` for Sections) to make the serif look incredibly modern and razor-sharp. 
- **Voice:** Headlines are sentence-case and period-terminated (e.g., "Honest. Compassionate. Dedicated."). This punctuation is part of the brand's authoritative voice.
- **Body (`Inter`):** Neutral tracking, strictly used for readability in practice areas and disclaimers.

## Layout & Whitespace

The page reads as engineered: large gaps + tight interiors, never the other way around.
- **Base Unit:** 4px grid.
- **Whitespace:** Use `{spacing.4xl}` to `{spacing.5xl}` between sections. 
- **Card Interiors:** Keep card content stacks tight (`{spacing.xs}` 8px gap between headline and paragraph).

## Elevation & Depth (CRITICAL)

**Do not use heavy drop shadows.** We are adopting Vercel's stacked shadow system to create a premium, calm elevation scale.
- Every elevated card MUST carry an inset hairline border (`Level 1`).
- Practice Area cards use `Level 3` soft-stack shadows.
- Pricing/Financing callout cards use `Level 4` float-stack shadows.
- Modals/Dropdowns use stacked offsets with 4-12% opacity. 
This exactness is what separates a premium custom build from a cheap WordPress template.

## Components & Do's/Don'ts

### Do
- **Pill CTAs:** Use `{rounded.pill}` (100px) for marketing-scale CTAs (like Contact Us) and `{rounded.sm}` (6px) for nav-scale UI buttons.
- **Polarity Flipping:** Cycle page surfaces from Soft Canvas (`#fafafa`) to Pure White Cards (`#ffffff`) to Deep Slate Bands (`#0f172a`). The dark band IS the depth cue.
- **Pin the Red:** The "24-Hour Jail Release" button must use the `destructive` token and remain pinned to the mobile and desktop navigation.

### Don't
- Don't capitalize every word in a headline. Sentence-case + period-terminated.
- Don't use standard blurred drop shadows. Use the stacked elevation tokens.
- Don't center-align heavy body text; keep paragraphs left-aligned for scannability, reserving center-alignment for hero headings.
