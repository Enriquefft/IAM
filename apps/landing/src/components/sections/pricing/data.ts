// Locale-invariant tier metadata. Price/period vary per locale and live in
// `@/lib/i18n/pricing` — composed at render time in Pricing.astro.
//
// Waitlist CTA copy is canonicalised to "Unirme a la lista de espera"
// (see Nav). Keep CTAs locale-invariant; locale-aware href is composed in
// Pricing.astro from `waitlistHref(localePath)`.

import type { PricingTierId } from "@/lib/i18n";

export interface PricingTierMeta {
  readonly id: PricingTierId;
  readonly name: string;
  readonly desc: string;
  readonly features: readonly string[];
  readonly ctaLabel: string;
  /** When set, CTA is a literal href (mailto:, etc). Otherwise the renderer
   *  uses the locale-aware waitlist anchor. */
  readonly ctaHref?: string;
  readonly highlighted: boolean;
}

export const PRICING_TIERS: readonly PricingTierMeta[] = [
  {
    id: "esencial",
    name: "Esencial",
    desc: "Para empezar. Hasta 5 pacientes activos.",
    features: [
      "Agenda con recordatorios",
      "10 notas al mes",
      "Cobros por transferencia",
    ],
    ctaLabel: "Unirme a la lista de espera",
    highlighted: false,
  },
  {
    id: "consultorio",
    name: "Consultorio",
    desc: "Para la práctica privada de tiempo completo.",
    features: [
      "Pacientes y notas ilimitadas",
      "Recibos automáticos",
      "Dictado por voz en español",
      "Recordatorios por WhatsApp y correo",
      "Soporte en horario de consulta",
    ],
    ctaLabel: "Unirme a la lista de espera",
    highlighted: true,
  },
  {
    id: "clinica",
    name: "Clínica",
    desc: "Para equipos de hasta 6 profesionales.",
    features: [
      "Todo lo de Consultorio",
      "Multi-terapeuta y derivaciones",
      "Reportes administrativos",
      "Onboarding 1:1 con tu equipo",
    ],
    ctaLabel: "Hablar con ventas",
    ctaHref: "mailto:ventas@i-am.clinic?subject=Plan%20Cl%C3%ADnica",
    highlighted: false,
  },
];
