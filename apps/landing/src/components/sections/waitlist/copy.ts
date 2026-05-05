export const WAITLIST_COPY = {
  eyebrow: "Lista de espera",
  heading: "Sé de los primeros.",
  lede: "Anotate y te avisamos cuando haya cupo. Sin compromiso ni spam.",
  namePlaceholder: "Tu nombre (opcional)",
  nameLabel: "Nombre",
  emailLabel: "Correo electrónico",
  emailPlaceholder: "correo@ejemplo.com",
  roleLabel: "¿Cómo describís tu rol?",
  rolePlaceholder: "Seleccioná una opción",
  roleOptions: [
    { value: "terapista", label: "Terapeuta independiente" },
    { value: "clinica", label: "Centro o clínica" },
    { value: "familia", label: "Familia o cuidador" },
    { value: "otro", label: "Otro" },
  ] as const,
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
} as const;
