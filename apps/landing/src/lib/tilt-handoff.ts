// tilt-handoff.ts — Zod-validated reader for the tilt impulse written by Hero.astro.
// Hero WRITER: apps/landing/src/components/sections/Hero.astro lines 102-122.
// Schema: { x: number, y: number, t: number }. TTL: 2000ms.

import { z } from "zod";

export const TiltHandoffSchema = z.object({
  x: z.number(),
  y: z.number(),
  t: z.number(),
});

export type TiltHandoff = z.infer<typeof TiltHandoffSchema>;

const STORAGE_KEY = "iam:tilt:handoff";
const TTL_MS = 2000;

export function readTiltHandoff(): TiltHandoff | null {
  if (typeof sessionStorage === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (raw === null) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    clearTiltHandoff();
    return null;
  }

  const result = TiltHandoffSchema.safeParse(parsed);
  if (!result.success) {
    clearTiltHandoff();
    return null;
  }

  const handoff = result.data;
  if (Date.now() - handoff.t >= TTL_MS) {
    clearTiltHandoff();
    return null;
  }

  return handoff;
}

export function clearTiltHandoff(): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
}
