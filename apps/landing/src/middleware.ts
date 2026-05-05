/**
 * Locale routing middleware.
 *
 * Runs before page resolution. Responsibilities:
 *
 * 1. **Root `/`**:
 *    - Crawler/social-card unfurler UA → pass through to `src/pages/index.astro`
 *      (renders default-locale content as the international hub; canonical → `/`).
 *    - Real user → 302 to detected locale (cookie → Vercel geo-IP →
 *      `accept-language` → fallback `pe`).
 * 2. **Path with no locale prefix** (`/demo`, `/privacidad`, …) → 302 to the
 *    detected locale's prefixed path, preserving subpath, query and hash.
 * 3. **Locale-prefixed path** → set `iam:locale` cookie so subsequent visits
 *    skip detection (skipped for crawlers — they don't store cookies).
 *
 * Bypassed: `/api/*`, `/og.png`, `/favicon*`, `/apple-touch-icon*`, `/robots.txt`,
 * `/sitemap*`, `/_astro/*`, `/_image`, anything with a file extension.
 *
 * CSP is shipped as a static header via `vercel.json` (see apps/landing/CLAUDE.md).
 * No other middleware composes with this one.
 */

import { defineMiddleware } from "astro:middleware";
import {
  DEFAULT_LOCALE_PATH,
  acceptLanguageToLocale,
  countryCodeToLocale,
  isLocalePath,
  localeToPath,
  type LocalePath,
} from "@/lib/i18n";
import { isCrawler } from "@/lib/crawler";

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

  const userAgent = request.headers.get("user-agent");
  const isBot = isCrawler(userAgent);

  // Crawlers hitting `/`: serve the international hub directly so link
  // previews and search indexing see real content. No cookie writes — they
  // don't store cookies, and varying Set-Cookie disturbs edge caching.
  if (pathname === "/" && isBot) {
    const response = await next();
    response.headers.append("Vary", "User-Agent");
    return response;
  }

  const cookieLocale = context.cookies.get(LOCALE_COOKIE)?.value;
  const ipCountry = request.headers.get("x-vercel-ip-country");
  const acceptLanguage = request.headers.get("accept-language");
  const detected = pickLocale(cookieLocale, ipCountry, acceptLanguage);

  const segment = firstSegment(pathname);

  // Path already starts with a supported locale: pass through, ensure cookie.
  if (segment !== null && isLocalePath(segment)) {
    const response = await next();
    if (!isBot && cookieLocale !== segment) {
      setLocaleCookie(response.headers, segment);
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
