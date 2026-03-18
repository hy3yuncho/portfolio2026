/**
 * src/lib/tokens.ts
 * Copy to src/lib/tokens.ts after bootstrapping.
 *
 * Single source of truth for design tokens — mirrors Figma variables exactly:
 *   "Portfolio / Colors"  (20 variables)
 *   "Portfolio / Spacing" (12 variables)
 *
 * Use the SEMANTIC ALIASES in component code, not raw hex values.
 * Use Tailwind class names (bg-ink, text-accent, etc.) wherever possible —
 * fall back to these constants only for dynamic/computed values.
 */

// ── Color tokens ─────────────────────────────────────────────────────────────

export const colors = {
  // Neutral scale
  neutral: {
    0:   '#FFFFFF',
    50:  '#FEFEFC',
    100: '#F1F2F3',
    200: '#E5E5E5',
    300: '#D9D9D9',
    500: '#969696',
    600: '#666666',
    700: '#57423F',
    900: '#141412',
  },

  // Brand — purple
  brand: {
    100: '#E8E6FF',
    300: '#9B8EFE',
    500: '#6558FE',  // ← primary
    700: '#3529C8',
    900: '#1F1589',
  },

  // Highlight — accent palette (case study tags, illustrations)
  highlight: {
    yellow:      '#FADB68',
    yellowLight: '#FFF6BB',
    blue:        '#81E2FF',
    green:       '#B4EA93',
    pink:        '#F6B7D0',
    orange:      '#FD9555',
  },

  // ── Semantic aliases — use these in component code ──────────────────────
  // Text
  ink:           '#141412',   // primary text
  inkSecondary:  '#57423F',   // secondary text (warm brown)
  inkMuted:      '#666666',   // muted / supporting text
  inkFaint:      '#969696',   // placeholder / disabled

  // Surfaces
  surface:        '#FEFEFC',  // page bg      → bg-surface
  surfaceRaised:  '#F7FAFC',  // nav/footer bg → bg-surface-raised
  surfaceSubtle:  '#F1F2F3',  // tiles/tags bg → bg-surface-subtle

  // Borders
  border:        '#E5E5E5',   // default border → border-border
  borderStrong:  '#D9D9D9',   // dividers        → border-border-strong

  // Brand
  brand:  '#6558FE',          // shorthand brand/500
  accent: '#FADB68',          // brand yellow (name, logomark)
} as const

// ── Spacing tokens (px values) ────────────────────────────────────────────────
// Matches Figma "Portfolio / Spacing" collection
// Tailwind v4 uses 4px base unit — these map to: p-1=4px, p-2=8px, etc.

export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const

// ── Typography tokens ─────────────────────────────────────────────────────────
// Mirrors the 14 text styles in the Figma file.
// Prefer the .text-* Tailwind utilities in globals.css over these constants.
// Use these only when setting styles programmatically (e.g. canvas, SVG).

export const typography = {
  h1:          { family: 'IBM Plex Serif', weight: 500, style: 'italic', size: 24, lineHeight: 1.2 },
  h2:          { family: 'IBM Plex Serif', weight: 500, style: 'italic', size: 22, lineHeight: 1.2 },
  h3:          { family: 'DM Sans',        weight: 500, style: 'normal', size: 20, lineHeight: 1.3 },
  h4:          { family: 'IBM Plex Serif', weight: 500, style: 'italic', size: 16, lineHeight: 1.3 },
  body1:       { family: 'DM Sans',        weight: 400, style: 'normal', size: 16, lineHeight: 1.5 },
  body1Light:  { family: 'DM Sans',        weight: 300, style: 'normal', size: 16, lineHeight: 1.5 },
  body2:       { family: 'DM Sans',        weight: 400, style: 'normal', size: 14, lineHeight: 1.5 },
  body2Light:  { family: 'DM Sans',        weight: 300, style: 'normal', size: 14, lineHeight: 1.5 },
  body3:       { family: 'DM Sans',        weight: 300, style: 'normal', size: 12, lineHeight: '20px' },
  label:       { family: 'Montserrat',     weight: 500, style: 'normal', size: 12, letterSpacing: '0.05em', textTransform: 'uppercase' as const },
  nav:         { family: 'Montserrat',     weight: 900, style: 'normal', size: 14, letterSpacing: '0.02em', textTransform: 'uppercase' as const },
  display:     { family: 'Montserrat',     weight: 900, style: 'italic', size: 64, lineHeight: 1 },
  btn:         { family: 'Montserrat',     weight: 400, style: 'normal', size: 14 },
  btnSm:       { family: 'Montserrat',     weight: 300, style: 'normal', size: 12 },
} as const

// ── Shadow tokens ─────────────────────────────────────────────────────────────

export const shadow = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
} as const

// ── Breakpoints ───────────────────────────────────────────────────────────────
// Test at these exact widths during implementation.

export const breakpoints = {
  mobile:  375,
  tablet:  768,
  desktop: 1280,
} as const

// ── Layout ────────────────────────────────────────────────────────────────────

export const layout = {
  maxWidth:       1024,  // max-w-5xl — max content width, centred
  pageWidth:      1440,  // full design canvas width in Figma
  paddingDesktop: 80,    // horizontal page padding on desktop
  paddingMobile:  20,    // horizontal page padding on mobile
} as const
