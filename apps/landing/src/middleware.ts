/**
 * Locale routing middleware.
 *
 * Runs before page resolution. Responsibilities:
 *
 * 1. **Root `/`** → 302 to a detected locale (cookie → Vercel geo-IP →
 *    `accept-language` → fallback `pe`).
 * 2. **Path with no locale prefix** (`/demo`, `/privacidad`, …) → 302 to the
 *    detected locale's prefixed path, preserving subpath, query and hash.
 * 3. **Locale-prefixed path** → set `iam:locale` cookie so subsequent visits
 *    skip detection.
 *
 * Bypassed: `/api/*`, `/og.png`, `/favicon*`, `/apple-touch-icon*`, `/robots.txt`,
 * `/sitemap*`, `/_astro/*`, `/_image`, anything with a file extension.
 *
 * Astro composes this middleware with `@kindspells/astro-shield` (registered
 * via the integration with `enableMiddleware: true`); both run per request.
 */

import { defineMiddleware } from "astro:middleware";
import {
  DEFAULT_LOCALE_PATH,
  SUPPORTED_LOCALE_PATHS,
  acceptLanguageToLocale,
  countryCodeToLocale,
  isLocalePath,
  localeToPath,
  type LocalePath,
} from "@/lib/i18n";

const LOCALE_COOKIE = "iam:locale";

/** Paths that must never be rewritten or locale-prefixed. */
const BYPASS_PREFIXES: readonly string[] = [
  "/api/",
  "/_astro/",
  "/_image",
  "/_actions/",
];

const BYPASS_EXACT: ReadonlySet<string> = new Set([
  "/og.png",
  "/favicon.ico",
  "/favicon.svg",
  "/apple-touch-icon.png",
  "/robots.txt",
  "/sitemap-index.xml",
  "/sitemap-0.xml",
  "/manifest.webmanifest",
]);

function shouldBypass(pathname: string): boolean {
  if (BYPASS_EXACT.has(pathname)) return true;
  for (const prefix of BYPASS_PREFIXES) {
    if (pathname.startsWith(prefix)) return true;
  }
  // Static asset extensions (any file with a dot in the last segment).
  const lastSegment = pathname.split("/").pop() ?? "";
  if (lastSegment.includes(".")) return true;
  return false;
}

function pickLocale(
  cookieValue: string | undefined,
  ipCountry: string | null,
  acceptLanguage: string | null,
): LocalePath {
  if (cookieValue !== undefined && isLocalePath(cookieValue)) {
    return cookieValue;
  }
  const fromIp = countryCodeToLocale(ipCountry);
  if (fromIp !== null) return localeToPath(fromIp);
  const fromHeader = acceptLanguageToLocale(acceptLanguage);
  if (fromHeader !== null) return localeToPath(fromHeader);
  return DEFAULT_LOCALE_PATH;
}

function firstSegment(pathname: string): string | null {
  const trimmed = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (trimmed.length === 0) return null;
  return trimmed.split("/")[0] ?? null;
}

function setLocaleCookie(headers: Headers, locale: LocalePath): void {
  const oneYear = 60 * 60 * 24 * 365;
  headers.append(
    "Set-Cookie",
    `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${oneYear}; SameSite=Lax`,
  );
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);
  const { pathname, search, hash } = url;

  if (shouldBypass(pathname)) {
    return next();
  }

  const cookieLocale = context.cookies.get(LOCALE_COOKIE)?.value;
  const ipCountry = request.headers.get("x-vercel-ip-country");
  const acceptLanguage = request.headers.get("accept-language");
  const detected = pickLocale(cookieLocale, ipCountry, acceptLanguage);

  const segment = firstSegment(pathname);

  // Path already starts with a supported locale: pass through, ensure cookie.
  if (segment !== null && SUPPORTED_LOCALE_PATHS.includes(segment as LocalePath)) {
    const response = await next();
    if (cookieLocale !== segment) {
      setLocaleCookie(response.headers, segment as LocalePath);
    }
    return response;
  }

  // Path has no locale prefix (root or unprefixed page). Redirect.
  const subpath = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
  const target = `/${detected}${subpath}${search}${hash}`;
  const headers = new Headers({ Location: target, "Cache-Control": "no-store" });
  setLocaleCookie(headers, detected);
  return new Response(null, { status: 302, headers });
});
