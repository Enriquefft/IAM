/**
 * Locale-aware path helpers for in-app links.
 *
 * Every internal link rendered on a locale-scoped page MUST go through one
 * of these helpers — never hardcode `/` or `/demo`. Hash-only anchors
 * (`#waitlist`) are also re-rooted at the locale, so they keep working when
 * rendered on subpages like `/<locale>/privacidad`.
 */

import type { LocalePath } from "./locales";

/** Returns `/<locale>` (no trailing slash). */
export function localeRoot(locale: LocalePath): string {
  return `/${locale}`;
}

/**
 * Compose a locale-prefixed path. `subpath` may start with `/` or `#` or be
 * empty. Examples:
 *
 *   localizePath("pe", "")            → "/pe"
 *   localizePath("pe", "/demo")       → "/pe/demo"
 *   localizePath("pe", "#waitlist")   → "/pe#waitlist"
 *   localizePath("pe", "/#funciones") → "/pe/#funciones"
 */
export function localizePath(locale: LocalePath, subpath: string): string {
  const root = localeRoot(locale);
  if (subpath.length === 0) return root;
  if (subpath.startsWith("#")) return `${root}${subpath}`;
  if (subpath.startsWith("/")) return `${root}${subpath}`;
  return `${root}/${subpath}`;
}

/**
 * Convenience: anchor link to a section on the home page.
 * `localeAnchor("pe", "waitlist")` → `/pe/#waitlist`.
 */
export function localeAnchor(locale: LocalePath, anchorId: string): string {
  return `${localeRoot(locale)}/#${anchorId}`;
}
