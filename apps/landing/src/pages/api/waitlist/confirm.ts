import type { APIRoute } from "astro";
import { createDb } from "../../../../db/client";
import { env } from "../../../lib/env";
import { hashToken } from "../../../lib/waitlist/token";
import { confirmToken } from "../../../lib/waitlist/repo";
import {
  DEFAULT_LOCALE,
  isLocale,
  localeToPath,
  type Locale,
} from "@/lib/i18n/locales";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawToken = url.searchParams.get("token");

  // Fallback locale chain when the token doesn't resolve: cookie → default.
  // The cookie is the locale the user was browsing in; default keeps the
  // confirm flow from ever 404ing on a missing prefix.
  const cookieLocaleRaw = cookies.get("iam:locale")?.value;
  const cookieLocale: Locale | undefined =
    typeof cookieLocaleRaw === "string" && isLocale(cookieLocaleRaw)
      ? cookieLocaleRaw
      : undefined;
  const fallbackLocale: Locale = cookieLocale ?? DEFAULT_LOCALE;

  if (!rawToken) {
    return redirectConfirmado(fallbackLocale, "?error=invalid");
  }

  const tokenHash = hashToken(rawToken, env.WAITLIST_TOKEN_SECRET);
  const db = createDb();

  try {
    const result = await confirmToken(db, tokenHash);
    const locale = result.locale ?? fallbackLocale;

    if (result.status === "ok") {
      return redirectConfirmado(locale, "");
    }
    return redirectConfirmado(locale, `?error=${result.status}`);
  } catch {
    return redirectConfirmado(fallbackLocale, "?error=invalid");
  }
};

function redirectConfirmado(locale: Locale, query: string): Response {
  const location = `/${localeToPath(locale)}/confirmado${query}`;
  return new Response(null, { status: 302, headers: { Location: location } });
}
