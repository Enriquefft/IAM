/**
 * Email-safe brand color palette.
 *
 * Mirrored from tailwind.config.ts because email clients cannot run Tailwind —
 * inline styles require literal hex values. This file is the only permitted location
 * for raw hex outside tailwind.config.ts (see apps/landing/CLAUDE.md §Style exceptions).
 *
 * When updating brand tokens in tailwind.config.ts, update this file in the same commit.
 */

export const palette = {
  /** brand.cream.50 — page background */
  pageBg: "#FDFAF5",

  /** brand.salvia.500 — logo / brand text */
  brand: "#4E7A56",

  /** brand.salvia.400 — primary button background, link color */
  primary: "#6B9B73",

  /** ink.900 — heading text */
  headingText: "#1C1612",

  /** ink.700 — body text */
  bodyText: "#3D3026",

  /** surface.inverse / primary.fg — button foreground */
  buttonFg: "#ffffff",

  /** surface.border — divider / hr */
  border: "#EDE5D4",

  /** ink.500 — footer / muted text */
  mutedText: "#6B5A4A",
} as const;
