// frames.ts — SSOT for HeroLoop frame timing and identifiers.
// All timing values are in milliseconds.

export interface HeroFrame {
  readonly id: HeroFrameId;
  readonly dwellMs: number;
}

export type HeroFrameId =
  | "agenda-idle"
  | "editor-dictating"
  | "editor-resumen"
  | "pdf-held"
  | "fade-reset";

export const HERO_FRAMES = [
  { id: "agenda-idle",      dwellMs: 2000 },
  { id: "editor-dictating", dwellMs: 5000 },
  { id: "editor-resumen",   dwellMs: 2000 },
  { id: "pdf-held",         dwellMs: 2000 },
  { id: "fade-reset",       dwellMs: 1000 },
] as const satisfies readonly HeroFrame[];

export const HERO_LOOP_TOTAL_MS: number = HERO_FRAMES.reduce(
  (acc, f) => acc + f.dwellMs,
  0,
);
