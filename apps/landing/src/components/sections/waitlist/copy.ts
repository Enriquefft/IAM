/**
 * Waitlist form copy — locale-aware. Argentine "vos" forms only differ in
 * verb endings; rather than translate everything per locale, we maintain
 * two registers (vos for AR, tú for PE/MX/CO/CL) and select at render time.
 */

import type { Locale } from "@/lib/i18n/locales";

export interface WaitlistCopy {
  readonly eyebrow: string;
  readonly heading: string;
  readonly lede: string;
  readonly namePlaceholder: string;
  readonly nameLabel: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly roleLabel: string;
  readonly rolePlaceholder: string;
  readonly roleOptions: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  readonly consentLabel: string;
  readonly submitLabel: string;
  readonly submittingLabel: string;
  readonly successHeading: string;
  readonly successBody: string;
  readonly alreadyConfirmedHeading: string;
  readonly alreadyConfirmedBody: string;
  readonly trustLine: string;
}

const ROLE_OPTIONS = [
  { value: "terapista", label: "Terapeuta independiente" },
  { value: "clinica", label: "Centro o clínica" },
  { value: "familia", label: "Familia o cuidador" },
  { value: "otro", label: "Otro" },
] as const;

const VOS: WaitlistCopy = {
  eyebrow: "Lista de espera",
  heading: "Sé de los primeros.",
  lede: "Anotate y te avisamos cuando haya cupo. Sin compromiso ni spam.",
  namePlaceholder: "Tu nombre (opcional)",
  nameLabel: "Nombre",
  emailLabel: "Correo electrónico",
  emailPlaceholder: "correo@ejemplo.com",
  roleLabel: "¿Cómo describís tu rol?",
  rolePlaceholder: "Seleccioná una opción",
  roleOptions: ROLE_OPTIONS,
  consentLabel:
    "Acepto que i-am.clinic guarde mi correo para enviarme novedades sobre el lanzamiento.",
  submitLabel: "Reservar mi lugar",
  submittingLabel: "Enviando...",
  successHeading: "Listo, te anotamos.",
  successBody:
    "Revisá tu bandeja de entrada — te enviamos un correo de confirmación. Si no lo ves en unos minutos, revisá la carpeta de spam.",
  alreadyConfirmedHeading: "Ya estás en la lista.",
  alreadyConfirmedBody:
    "Tu correo ya está confirmado. Te avisamos cuando abramos los primeros cupos.",
  trustLine: "Sin spam. Podés darte de baja en cualquier momento.",
};

const TU: WaitlistCopy = {
  eyebrow: "Lista de espera",
  heading: "Sé de los primeros.",
  lede: "Anótate y te avisamos cuando haya cupo. Sin compromiso ni spam.",
  namePlaceholder: "Tu nombre (opcional)",
  nameLabel: "Nombre",
  emailLabel: "Correo electrónico",
  emailPlaceholder: "correo@ejemplo.com",
  roleLabel: "¿Cómo describes tu rol?",
  rolePlaceholder: "Selecciona una opción",
  roleOptions: ROLE_OPTIONS,
  consentLabel:
    "Acepto que i-am.clinic guarde mi correo para enviarme novedades sobre el lanzamiento.",
  submitLabel: "Reservar mi lugar",
  submittingLabel: "Enviando...",
  successHeading: "Listo, te registramos.",
  successBody:
    "Revisa tu bandeja de entrada — te enviamos un correo de confirmación. Si no lo ves en unos minutos, revisa la carpeta de spam.",
  alreadyConfirmedHeading: "Ya estás en la lista.",
  alreadyConfirmedBody:
    "Tu correo ya está confirmado. Te avisamos cuando abramos los primeros cupos.",
  trustLine: "Sin spam. Puedes darte de baja en cualquier momento.",
};

export function waitlistCopy(locale: Locale): WaitlistCopy {
  return locale === "es-AR" ? VOS : TU;
}
