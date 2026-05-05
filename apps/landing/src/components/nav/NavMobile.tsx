"use client";

// NavMobile.tsx — React island: scroll-shadow toggler + mobile trigger + Sheet drawer.
// Directive: client:idle (applied in Nav.astro).
// Budget: ≤9 KB gz.

import * as React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "./LocaleSwitcher";
import type { LocalePath } from "@/lib/i18n/locales";

interface Props {
  links: ReadonlyArray<{ href: string; label: string }>;
  ctaLabel: string;
  ctaHref: string;
  demoHref: string;
  demoLabel: string;
  currentPath: LocalePath;
}

export default function NavMobile({
  links,
  ctaLabel,
  ctaHref,
  demoHref,
  demoLabel,
  currentPath,
}: Props): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  // Scroll-shadow: set data-scrolled on the <header data-nav-shell> element.
  // Passive + rAF-throttled to avoid layout thrash. section-nav.jsx scroll logic.
  React.useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = (): void => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const shell = document.querySelector<HTMLElement>("[data-nav-shell]");
        if (shell === null) return;
        const scrolled = window.scrollY > 8;
        shell.dataset["scrolled"] = String(scrolled);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile hamburger trigger — section-nav.jsx:57 */}
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menú" // section-nav.jsx:57
          aria-expanded={open}
          aria-controls="nav-mobile-sheet"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-base border border-surface-border bg-transparent text-ink-900 hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none"
        >
          <MenuIcon size={20} strokeWidth={1.75} aria-hidden />
        </button>
      </SheetTrigger>

      {/* Mobile sheet drawer — section-nav.jsx:74 */}
      <SheetContent
        id="nav-mobile-sheet"
        side="right"
        showCloseButton={false}
        className="bg-page text-ink-900 p-6 flex flex-col gap-0 w-full sm:max-w-sm motion-reduce:transition-none motion-reduce:animate-none"
      >
        {/* Visually-hidden title for screen readers (Radix Dialog requires an accessible name). */}
        <SheetTitle className="sr-only">Menú</SheetTitle>

        {/* Sheet header row — logo area + close button */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo placeholder — keeps visual balance */}
          <span className="text-label font-semibold text-ink-900">i-am.clinic</span>

          {/* Close button — section-nav.jsx:83 */}
          <button
            type="button"
            aria-label="Cerrar menú" // section-nav.jsx:83
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-base border border-surface-border text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <XIcon size={20} strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        {/* Sheet link list — section-nav.jsx:21-25 */}
        <ul className="flex flex-col" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="font-sans text-h3 font-semibold text-ink-900 py-4 border-b border-surface-border block"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sheet footer — locale picker + CTAs */}
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <LocaleSwitcher currentPath={currentPath} variant="block" />

          {/* Primary CTA — section-nav.jsx:100 */}
          <Button size="lg" className="w-full" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>

          {/* Demo link — section-nav.jsx:105 */}
          <a
            href={demoHref}
            className="text-center py-3 text-ink-700 text-label font-medium"
          >
            {demoLabel}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
