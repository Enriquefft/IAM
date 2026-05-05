// links.ts — SSOT for Nav link data (section-nav.jsx:21-25)
// Consumed by NavLinks.astro (desktop) and NavMobile.tsx (mobile sheet).

export type NavLink = { href: string; label: string };

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#funciones", label: "Funciones" },    // section-nav.jsx:21
  { href: "/demo",      label: "Demo" },         // section-nav.jsx:22
  { href: "#precios",   label: "Precios" },      // section-nav.jsx:23
  { href: "#equipo",    label: "Equipo" },       // section-nav.jsx:24
  { href: "#preguntas", label: "Preguntas" },    // section-nav.jsx:25
] as const;

export const WAITLIST_CTA = "Unirme a la lista de espera" as const; // section-nav.jsx:100
// Bundle's section-nav.jsx:22 references Demo.html; Astro route lives at /demo.
export const DEMO_HREF    = "/demo" as const;
