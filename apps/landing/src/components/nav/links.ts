// links.ts — SSOT for Nav link data (section-nav.jsx:21-25)
// Consumed by NavLinks.astro (desktop) and NavMobile.tsx (mobile sheet).
//
// All hash anchors are absolute paths (e.g. /#funciones instead of #funciones)
// so they work correctly when the nav is rendered on non-home pages like /demo,
// /privacidad, /terminos, etc. Plain #hash links break WCAG 2.1 SC 4.1.2 on
// pages that don't contain the target anchor.

export type NavLink = { href: string; label: string };

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/#funciones", label: "Funciones" },    // section-nav.jsx:21
  { href: "/demo",       label: "Demo" },         // section-nav.jsx:22
  { href: "/#precios",   label: "Precios" },      // section-nav.jsx:23
  { href: "/#equipo",    label: "Equipo" },       // section-nav.jsx:24
  { href: "/#preguntas", label: "Preguntas" },    // section-nav.jsx:25
] as const;

export const WAITLIST_CTA = "Unirme a la lista de espera" as const; // section-nav.jsx:100
// Bundle's section-nav.jsx:22 references Demo.html; Astro route lives at /demo.
export const DEMO_HREF    = "/demo" as const;
export const WAITLIST_HREF = "/#waitlist" as const;
