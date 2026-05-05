/**
 * Country-keyed copy table.
 *
 * All five locales share the same Spanish content; this file only carries
 * **phrases that change with country truth** — payment lists, jurisdiction,
 * locality. Renderers compose these with `COUNTRIES[locale]` at call site.
 *
 * If a string does NOT vary by country, it stays in its original component.
 * Don't drag locale-invariant copy through here.
 */

import { COUNTRIES, joinPayments, type Country } from "./countries";
import { currencyCode } from "./pricing";
import type { Locale } from "./locales";

// ---------------------------------------------------------------------------
// Per-locale renderable phrases (functions, not constants — they interpolate
// from COUNTRIES at the call site so adding a payment method only requires
// editing countries.ts).
// ---------------------------------------------------------------------------

/** Pricing footnote: "Precios en PEN. Aceptamos Yape, PLIN y transferencia." */
export function pricingFootnote(locale: Locale): string {
  const country = COUNTRIES[locale];
  const payments = joinPayments(country, 3);
  return `Precios en ${currencyCode(locale)}. Aceptamos ${payments}.`;
}

/** Compact two-method list used in feature card body copy. */
export function compactPaymentList(locale: Locale): string {
  return joinPayments(COUNTRIES[locale], 2);
}

/** "Tarjeta, transferencia, Yape o PLIN" — used in features body. */
export function paymentSummary(locale: Locale): string {
  const country = COUNTRIES[locale];
  const labels = country.payments.map((p) => p.label);
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0] ?? "";
  const head = labels.slice(0, -1).join(", ");
  const tail = labels[labels.length - 1] ?? "";
  return `${head} o ${tail}`;
}

/** Footer tagline. "Hecho en Lima por psicólogos…" */
export function footerTagline(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Hecho en ${country.locality} por psicólogos, ingenieros y diseñadores. Creemos que la consulta privada merece mejores herramientas.`;
}

/** Footer copyright bottom-bar text. */
export function footerCopyright(locale: Locale, year: number): string {
  const country = COUNTRIES[locale];
  return `© ${year} i-am.clinic · ${country.locality}, ${country.displayName}`;
}

/** Equipo section locality phrase. */
export function equipoLocalityPhrase(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Somos psicólogos, ingenieros y diseñadores en ${country.locality}. Algunos del equipo atendemos pacientes los miércoles, así que sabemos qué se siente cerrar el último expediente del día.`;
}

/** Privacy notice "Quiénes somos" paragraph. */
export function privacyAboutParagraph(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `i-am.clinic es un servicio operado desde ${country.locality}, ${country.displayName}, que ofrece herramientas de agenda, notas clínicas y cobranza para psicólogos, psiquiatras y otros profesionales de salud mental en práctica privada.`;
}

/** Privacy notice "Tus derechos" paragraph fragment that cites local law. */
export function privacyRightsLawClause(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Bajo la ${country.privacyLaw.citation} ${country.privacyLaw.jurisdictionLabel}, tienes derecho a acceder, rectificar, cancelar y oponerte al uso de tus datos. Para ejercer estos derechos, escríbenos a `;
}

/** Privacy notice / terms footer locality line. */
export function legalContactLine(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `i-am.clinic · ${country.locality}, ${country.displayName} · `;
}

/** Terms of service "Servicio" paragraph. */
export function termsServiceParagraph(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `i-am.clinic ("el servicio") es una plataforma operada desde ${country.locality}, ${country.displayName}, que provee herramientas de agenda, notas clínicas y cobranza para profesionales de salud mental en práctica privada.`;
}

/** Terms of service "Ley aplicable" paragraph. */
export function termsGoverningLawParagraph(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Estos términos se rigen por ${country.jurisdiction.governingLawPhrase}. Cualquier disputa se resolverá en los tribunales de ${country.jurisdiction.courts}, salvo que la ley aplicable disponga otra cosa.`;
}

/** FAQ — psychiatry question's country-specific tail clause. */
export function faqPsychiatryAnswer(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Sí. Plantillas para receta, control de medicamentos con folio, e historial farmacológico. Si tu colegio profesional pide algo específico para ${country.displayName}, dinos y lo agregamos.`;
}

/** FAQ — data protection question's country-specific law citation. */
export function faqDataProtectionAnswer(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Sí, las dos cosas. Los expedientes están cifrados con tu llave (ni nuestro soporte puede leerlos sin tu permiso) y cumplimos la ${country.privacyLaw.citation} ${country.privacyLaw.jurisdictionLabel}. Si te vas, te llevas todo en PDF y CSV.`;
}

/** Home page <title> per locale. Replaces "LatAm" wording. */
export function homePageTitle(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `i-am.clinic — Software para terapeutas de autismo en ${country.displayName}`;
}

/** Privacy page description (meta) — cites local law. */
export function privacyPageDescription(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Cómo recolectamos, usamos y protegemos tu información en i-am.clinic. Cumplimiento con la ${country.privacyLaw.citation} ${country.privacyLaw.jurisdictionLabel}.`;
}

/** OG image tagline — replaces "LatAm" wording. */
export function ogTagline(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `Agenda, notas SOAP y cobros para psicólogos en ${country.displayName}.`;
}

/** OG image bottom contact line ("hola@i-am.clinic · Lima, Perú"). */
export function ogContactLine(locale: Locale): string {
  const country = COUNTRIES[locale];
  return `hola@i-am.clinic · ${country.locality}, ${country.displayName}`;
}

// ---------------------------------------------------------------------------
// Locale switcher labels
// ---------------------------------------------------------------------------

export function localeDisplayName(locale: Locale): string {
  return COUNTRIES[locale].displayName;
}

// ---------------------------------------------------------------------------
// Waitlist confirmation email (subject + body strings)
// ---------------------------------------------------------------------------

export interface WaitlistEmailCopy {
  /** Email subject line. */
  readonly subject: string;
  /** Inbox preview snippet (first ~90 chars). */
  readonly preview: string;
  /** Hero heading inside the email body. */
  readonly heading: string;
  /** Lead paragraph asking the user to confirm. */
  readonly intro: string;
  /** CTA button label. */
  readonly buttonLabel: string;
  /** Helper line above the raw URL fallback. */
  readonly fallbackHelper: string;
  /** Footer line about expiry + ignore-if-not-you. */
  readonly footerExpiry: string;
  /** Closing brand tagline. */
  readonly brandTagline: string;
}

const VOS: Pick<
  WaitlistEmailCopy,
  "subject" | "preview" | "heading" | "intro" | "buttonLabel" | "fallbackHelper" | "footerExpiry" | "brandTagline"
> = {
  subject: "Confirmá tu lugar en la lista de espera de i-am.clinic",
  preview: "Confirmá tu lugar en la lista de espera de i-am.clinic",
  heading: "Un paso más",
  intro:
    "Gracias por anotarte. Solo falta confirmar tu correo para reservar tu lugar en la lista de espera.",
  buttonLabel: "Confirmar mi lugar",
  fallbackHelper: "Si el botón no funciona, copiá y pegá este enlace en tu navegador:",
  footerExpiry:
    "Este enlace vence en 7 días. Si no te anotaste en i-am.clinic, podés ignorar este correo.",
  brandTagline: "i-am.clinic — herramienta clínica para profesionales de la salud mental",
};

const TU: Pick<
  WaitlistEmailCopy,
  "subject" | "preview" | "heading" | "intro" | "buttonLabel" | "fallbackHelper" | "footerExpiry" | "brandTagline"
> = {
  subject: "Confirma tu lugar en la lista de espera de i-am.clinic",
  preview: "Confirma tu lugar en la lista de espera de i-am.clinic",
  heading: "Un paso más",
  intro:
    "Gracias por unirte. Solo falta confirmar tu correo para reservar tu lugar en la lista de espera.",
  buttonLabel: "Confirmar mi lugar",
  fallbackHelper: "Si el botón no funciona, copia y pega este enlace en tu navegador:",
  footerExpiry:
    "Este enlace vence en 7 días. Si no te uniste a i-am.clinic, puedes ignorar este correo.",
  brandTagline: "i-am.clinic — herramienta clínica para profesionales de la salud mental",
};

export function waitlistEmailCopy(locale: Locale): WaitlistEmailCopy {
  return locale === "es-AR" ? VOS : TU;
}

/** Plain-text body for the confirmation email (matches HTML copy). */
export function waitlistEmailPlainText(
  locale: Locale,
  confirmUrl: string,
): string {
  const c = waitlistEmailCopy(locale);
  return `${c.subject}.\n\n${c.intro}\n\n${confirmUrl}\n\n${c.footerExpiry}`;
}

export type { Country };
