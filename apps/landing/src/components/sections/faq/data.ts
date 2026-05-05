// section-faq.jsx:5-29
// Locale-aware: psychiatry-specific and data-protection answers cite the
// country's own colegio/ley via `@/lib/i18n/copy`.

import {
  faqPsychiatryAnswer,
  faqDataProtectionAnswer,
  type Locale,
} from "@/lib/i18n";

export interface FaqItemData {
  readonly id: string;
  readonly q: string;
  readonly a: string;
}

export function buildFaqItems(locale: Locale): readonly FaqItemData[] {
  return [
    {
      id: "faq-0",
      q: "¿Necesito instalar algo?",
      a: "No. Funciona en el navegador y hay app para iPhone y Android. Si cambias de computadora, tu información sigue ahí.",
    },
    {
      id: "faq-1",
      q: "Vengo de otra plataforma. ¿Puedo migrar mi agenda y mis pacientes?",
      a: "Sí. Importamos desde Google Calendar, Outlook y CSV. Si vienes de Doctoralia, Cliniweb o algo más raro, agendamos una llamada de 30 minutos y lo hacemos contigo. Sin costo extra.",
    },
    {
      id: "faq-2",
      q: "¿Funciona para psiquiatría?",
      a: faqPsychiatryAnswer(locale),
    },
    {
      id: "faq-3",
      q: "¿Qué tan rápido contestan cuando algo no funciona?",
      a: "Lunes a viernes en horario de consulta: máximo 2 horas. Fuera de eso, al día siguiente. Te contesta una persona de nuestro equipo, no un bot.",
    },
    {
      id: "faq-4",
      q: "¿Mis datos están seguros y son míos?",
      a: faqDataProtectionAnswer(locale),
    },
    {
      id: "faq-5",
      q: "¿Qué pasa si cancelo?",
      a: "Cancelas desde tu cuenta y exportas tus datos. Sin contratos anuales, sin trámite de salida, sin llamadas de retención.",
    },
  ];
}
