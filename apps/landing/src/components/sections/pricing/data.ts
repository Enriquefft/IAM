// section-pricing.jsx:19-62
// Waitlist CTA copy is canonicalised to "Unirme a la lista de espera" (see Nav).
// Bundle copy is "Unirme a la lista"; canonical waitlist CTA across the site
// is "Unirme a la lista de espera" — see section-nav.jsx:100 / section-hero.jsx:33.

export interface PricingTierData {
  readonly id: "esencial" | "consultorio" | "clinica";
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly desc: string;
  readonly features: readonly string[];
  readonly cta: { readonly label: string; readonly href: string };
  readonly highlighted: boolean;
}

export const PRICING_TIERS = [
  {
    id: "esencial",
    name: "Esencial",
    price: "$0",
    period: "siempre",
    desc: "Para empezar. Hasta 5 pacientes activos.",
    features: [
      "Agenda con recordatorios",
      "10 notas al mes",
      "Cobros por transferencia",
    ],
    cta: { label: "Unirme a la lista de espera", href: "#waitlist" },
    highlighted: false,
  },
  {
    id: "consultorio",
    name: "Consultorio",
    price: "$29",
    period: "USD / mes",
    desc: "Para la práctica privada de tiempo completo.",
    features: [
      "Pacientes y notas ilimitadas",
      "Recibos automáticos",
      "Dictado por voz en español",
      "Recordatorios por WhatsApp y correo",
      "Soporte en horario de consulta",
    ],
    cta: { label: "Unirme a la lista de espera", href: "#waitlist" },
    highlighted: true,
  },
  {
    id: "clinica",
    name: "Clínica",
    price: "$69",
    period: "USD / mes",
    desc: "Para equipos de hasta 6 profesionales.",
    features: [
      "Todo lo de Consultorio",
      "Multi-terapeuta y derivaciones",
      "Reportes administrativos",
      "Onboarding 1:1 con tu equipo",
    ],
    cta: {
      label: "Hablar con ventas",
      href: "mailto:ventas@i-am.clinic?subject=Plan%20Cl%C3%ADnica",
    },
    highlighted: false,
  },
] as const satisfies readonly PricingTierData[];
