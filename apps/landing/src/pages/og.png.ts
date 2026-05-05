/**
 * /og.png — server-rendered Open Graph image (1200×630).
 *
 * Uses @vercel/og (Satori + resvg) to generate a branded PNG.
 * Cached for 1 year via Cache-Control: public, max-age=31536000, immutable
 * because the content is static (not per-page dynamic).
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

export const prerender = false;

const WIDTH = 1200;
const HEIGHT = 630;

export const GET: APIRoute = () => {
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
    // Domain eyebrow
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
    // Main headline
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
    // Tagline
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
      "Agenda, notas SOAP y cobros para psicólogos en LatAm.",
    ),
    // Bottom bar: contact + logo mark
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
        "hola@i-am.clinic · Lima, Perú",
      ),
      // Brand mark placeholder
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

  // Cache for 1 year — content is static
  response.headers.set(
    "Cache-Control",
    "public, max-age=31536000, immutable",
  );

  return response;
};
