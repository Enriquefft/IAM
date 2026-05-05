// section-features.jsx:67-84

export interface FeatureData {
  readonly title: string;
  readonly body: string;
  readonly bullets: readonly string[];
}

export const FEATURES = [
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
    body: "Cobras por tarjeta, transferencia, Yape o PLIN. El recibo sale solo al cerrar la sesión, listo para tu contador.",
    bullets: [
      "Stripe, Yape y PLIN",
      "Recibos automáticos",
      "Reporte mensual exportable",
    ],
  },
] as const satisfies readonly FeatureData[];
