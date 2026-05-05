/**
 * /og.png — server-rendered Open Graph image (1200×630).
 *
 * Uses @vercel/og (Satori + resvg) to generate a branded PNG.
 * Per-locale: tagline + bottom contact line read from `@/lib/i18n` so each
 * country shares to social with its own locality.
 *
 * Cached for 1 year per unique `?locale=` query.
 *
 * Brand colors reference tailwind.config.ts tokens:
 *   bg: brand.cream.50       (#FDFAF5)
 *   title: ink.900           (#1C1612)
 *   accent: brand.salvia.400 (#6B9B73)
 *   tagline: ink.700         (#3D3026)
 *
 * SSOT exception: @vercel/og renders via Satori in an edge runtime with no
 * CSS or Tailwind available. Raw hex is the only option. Values mirror
 * palette.ts and tailwind.config.ts — update in lockstep on brand token changes.
 */

import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";
import { createElement as h } from "react";
import {
  isLocalePath,
  pathToLocale,
  ogTagline,
  ogContactLine,
  DEFAULT_LOCALE_PATH,
} from "@/lib/i18n";

export const prerender = false;

const WIDTH = 1200;
const HEIGHT = 630;

export const GET: APIRoute = ({ url }) => {
  const localeParam = url.searchParams.get("locale");
  const localePath = isLocalePath(localeParam) ? localeParam : DEFAULT_LOCALE_PATH;
  const locale = pathToLocale(localePath);
  const tagline = ogTagline(locale);
  const contactLine = ogContactLine(locale);

  const element = h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#FDFAF5", // brand.cream.50
        padding: "80px 96px",
        fontFamily: "sans-serif",
        position: "relative" as const,
      },
    },
    h(
      "div",
      {
        style: {
          fontSize: 20,
          fontWeight: 500,
          color: "#6B9B73", // brand.salvia.400 / primary
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
          marginBottom: 24,
        },
      },
      "i-am.clinic",
    ),
    h(
      "div",
      {
        style: {
          fontSize: 64,
          fontWeight: 700,
          color: "#1C1612", // ink.900
          lineHeight: 1.1,
          letterSpacing: "-0.015em",
          marginBottom: 24,
          maxWidth: 900,
        },
      },
      "La consulta privada, sin papeleo.",
    ),
    h(
      "div",
      {
        style: {
          fontSize: 28,
          fontWeight: 400,
          color: "#3D3026", // ink.700
          lineHeight: 1.5,
          maxWidth: 800,
        },
      },
      tagline,
    ),
    h(
      "div",
      {
        style: {
          position: "absolute" as const,
          bottom: 80,
          left: 96,
          right: 96,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      h(
        "div",
        {
          style: {
            fontSize: 18,
            color: "#6B5A4A", // ink.500 / text.muted
          },
        },
        contactLine,
      ),
      h(
        "div",
        {
          style: {
            width: 56,
            height: 56,
            borderRadius: 12,
            backgroundColor: "#F7F2E8", // brand.cream.100
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        h("div", {
          style: {
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "#6B9B73", // primary / salvia.400
          },
        }),
      ),
    ),
  );

  const response = new ImageResponse(element, {
    width: WIDTH,
    height: HEIGHT,
  });

  // URL is unique per locale, so caching for 1 year is safe.
  response.headers.set(
    "Cache-Control",
    "public, max-age=31536000, immutable",
  );

  return response;
};
