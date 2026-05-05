// demo-content.ts — SSOT for all copy, strings, and static data used in the Demo.
// Derives SoapKey from SOAP_FIELDS, DemoStateId from STATE_IDS; no duplicated literals.
// demo-machine.ts and all demo components import from here.

// ── State IDs ────────────────────────────────────────────────────────────────

export const STATE_IDS = [
  "agenda",
  "editor-empty",
  "editor-full",
  "pdf-held",
  "rebook",
  "closing",
] as const;
export type DemoStateId = (typeof STATE_IDS)[number];

// ── SOAP ──────────────────────────────────────────────────────────────────────

export const SOAP_FIELDS = ["S", "O", "A", "P"] as const;
export type SoapKey = (typeof SOAP_FIELDS)[number];

export const SOAP_LABELS = {
  S: "Subjetivo",
  O: "Objetivo",
  A: "Análisis",
  P: "Plan",
} as const satisfies Record<SoapKey, string>;

export const SOAP_PLACEHOLDERS = {
  S: "Cómo llegó Mateo, qué dijo, qué trajo.",
  O: "Lo observado durante la sesión.",
  A: "Tu lectura clínica.",
  P: "Próximos pasos.",
} as const satisfies Record<SoapKey, string>;

export const SOAP_DEFAULTS = {
  S: "Mateo llega tranquilo. Trajo su agenda visual. Arrancamos con la rutina de saludo que practicamos.",
  O: "Atendió a la tarea de categorías por seis minutos seguidos. Pidió un descanso con su tarjeta. Volvió por su cuenta.",
  A: "Logró sostener atención más tiempo que la semana pasada. La tarjeta de descanso le funciona como apoyo.",
  P: "Vamos a practicar pedir descanso en grupo. Cita el miércoles 17:00.",
} as const satisfies Record<SoapKey, string>;

// ── Hints per state (Demo.html:993-999) ──────────────────────────────────────

export const HINTS = {
  agenda: "Tocá la sesión de Mateo para escribir la nota.",
  "editor-empty": "Probá dictar. También podés escribir directo.",
  "editor-full": "Generá el resumen para la familia de Mateo.",
  "pdf-held": "Tú lo revisas. Tú lo apruebas. Tú lo envías.",
  rebook: "Aceptá el slot sugerido. La familia recibe la confirmación por WhatsApp.",
  closing: null,
} as const satisfies Record<DemoStateId, string | null>;

// ── Chapter nav labels / tooltips / subtitles (Demo.html:1872-1923) ──────────

export const CHAPTER_LABELS = {
  agenda: "Agenda",
  "editor-empty": "Nota",
  "editor-full": "Resumen",
  "pdf-held": "Borrador",
  rebook: "Reagendar",
  closing: "Cierre",
} as const satisfies Record<DemoStateId, string>;

export const CHAPTER_TIPS = {
  agenda: "Una sesión cerrada con la nota pendiente. Click para abrirla.",
  "editor-empty": "Editor SOAP vacío. Dictá o escribí.",
  "editor-full": "Nota lista. Generá el resumen para la familia.",
  "pdf-held": "Borrador del resumen — revisas tú antes de enviar.",
  rebook: "Una cancelación de último momento. Aceptá un slot.",
  closing: "Cierre del día. Mateo es Mateo.",
} as const satisfies Record<DemoStateId, string>;

export const CHAPTER_SUBTITLES = {
  agenda: "Viernes 17:02. Mateo cerró sesión hace una hora; falta la nota.",
  "editor-empty": "Dictá o escribí en el campo Subjetivo. Probá ambos.",
  "editor-full": "La nota está completa. Generá el resumen para la familia.",
  "pdf-held": "El borrador. Lo revisas tú, lo apruebas tú, lo envías tú.",
  rebook: "Sofía canceló. El sistema sugiere slots. Aceptá uno.",
  closing: "La tarde de Ana. Una hora ganada al viernes.",
} as const satisfies Record<DemoStateId, string>;

// ── Rebook slots (Demo.html:1824-1834) ───────────────────────────────────────

export const REBOOK_SLOTS = [
  { label: "Mié 1 may · 17:00 ✓" },
  { label: "Jue 2 may · 11:00" },
  { label: "Vie 3 may · 15:00" },
] as const satisfies readonly { readonly label: string }[];

export type RebookSlot = (typeof REBOOK_SLOTS)[number];

// ── Post-demo copy (Demo.html:1933-1955) ─────────────────────────────────────

export const POST_DEMO = {
  eyebrow: "Después de la tarde de Ana",
  heading: "Reservá tu piloto. Tres clínicas a la vez como máximo.",
  cta: "Unirme a la lista de espera",
  guarantee: "Garantía mes 3 · sin tarjeta · sin permanencia",
  waShareText:
    "Mira esto. Software de consulta TEA en español, sin Word ni Excel. Te recupera 6 horas a la semana. https://i-am.clinic?ref=ws",
  copyUrl: "https://i-am.clinic?ref=link",
} as const;

// ── Agenda sessions (Demo.html:1049-1065) ────────────────────────────────────

export const AGENDA_SESSIONS_BASE = [
  { time: "14:00", name: "Lucía P.", meta: "Sesión 6 · 50 min", tagKind: "ok" as const, tag: "Listo" },
  { time: "15:00", name: "Tomás R.", meta: "Primera sesión · 60 min", tagKind: "ok" as const, tag: "Listo" },
  { time: "Mar 10:00", name: "Sofía B.", meta: "Sesión 9 · próximo martes", tagKind: "ok" as const, tag: "Confirmada" },
  { time: "Lun 8:00", name: "Diego R.", meta: "Sesión 4 · próximo lunes", tagKind: "ok" as const, tag: "Confirmada" },
] as const;

export const SOFIA_MOVED = {
  time: "—",
  name: "Sofía B.",
  meta: "Reagendada al miércoles 1 may · 17:00",
  tagKind: "moved" as const,
  tag: "Reagendada",
} as const;

export const MATEO_PENDING = {
  time: "16:00",
  name: "Mateo R.",
  meta: "Sesión 14 · 50 min",
  tagKind: "note" as const,
  tag: "Cerrada · nota pendiente",
} as const;

export const MATEO_CLOSED = {
  time: "16:00",
  name: "Mateo R.",
  meta: "Sesión 14 · 50 min",
  tagKind: "ok" as const,
  tag: "Cerrada · nota enviada",
} as const;
