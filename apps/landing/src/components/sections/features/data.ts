// section-features.jsx:67-84
// Locale-aware: payment-method strings interpolate from `@/lib/i18n`.

import {
  COUNTRIES,
  joinPayments,
  paymentSummary,
  type Locale,
} from "@/lib/i18n";

export interface FeatureData {
  readonly title: string;
  readonly body: string;
  readonly bullets: readonly string[];
}

export function buildFeatures(locale: Locale): readonly FeatureData[] {
  const country = COUNTRIES[locale];
  const cobrosBody = `Cobras por ${paymentSummary(locale)}. El recibo sale solo al cerrar la sesión, listo para tu contador.`;
  const cobrosBullet = joinPayments(country, 3);

  return [
    {
      title: "Agenda con confirmación",
      body: "Tus pacientes confirman desde el celular. Las inasistencias bajan sin que tengas que escribir un solo recordatorio.",
      bullets: [
        "Recordatorios por WhatsApp y correo",
        "Reagenda en un toque",
        "Sincroniza con Google y Outlook",
      ],
    },
    {
      title: "Notas de sesión",
      body: "Plantillas SOAP, DAP o libres. Dictado por voz en español. Exporta a PDF firmado cuando lo necesites.",
      bullets: [
        "Dictado en español",
        "Plantillas editables",
        "Cifrado de extremo a extremo",
      ],
    },
    {
      title: "Cobros y recibos",
      body: cobrosBody,
      bullets: [
        cobrosBullet,
        "Recibos automáticos",
        "Reporte mensual exportable",
      ],
    },
  ];
}
