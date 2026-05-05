// links.ts — Nav link builder, locale-aware.
// Consumed by NavLinks.astro (desktop) and NavMobile.tsx (mobile sheet).
//
// All hash anchors are absolute paths under the locale prefix
// (e.g. /<locale>/#funciones) so they work correctly when nav is rendered on
// non-home pages like /<locale>/demo, /<locale>/privacidad, /<locale>/terminos.
// Plain #hash links break WCAG 2.1 SC 4.1.2 on pages without that anchor.

import { localeAnchor, localizePath, type LocalePath } from "@/lib/i18n";

export type NavLink = { href: string; label: string };

export function buildNavLinks(locale: LocalePath): readonly NavLink[] {
  return [
    { href: localeAnchor(locale, "funciones"), label: "Funciones" },
    { href: localizePath(locale, "/demo"), label: "Demo" },
    { href: localeAnchor(locale, "precios"), label: "Precios" },
    { href: localeAnchor(locale, "equipo"), label: "Equipo" },
    { href: localeAnchor(locale, "preguntas"), label: "Preguntas" },
  ];
}

export const WAITLIST_CTA = "Unirme a la lista de espera" as const;

export function demoHref(locale: LocalePath): string {
  return localizePath(locale, "/demo");
}

export function waitlistHref(locale: LocalePath): string {
  return localeAnchor(locale, "waitlist");
}
