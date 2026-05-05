// section-cta-footer.jsx:88-102
// Demo.html → /demo and *.html → /* per Astro routing.
// /privacidad and /terminos are Phase 7 routes — links will 404 in interim.

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly items: readonly FooterLink[];
}

export const FOOTER_COLUMNS = [
  {
    title: "Producto",
    items: [
      { label: "Funciones", href: "#funciones" },
      { label: "Precios", href: "#precios" },
      { label: "Demo", href: "/demo" },
      { label: "Preguntas", href: "#preguntas" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Quiénes somos", href: "#equipo" },
      { label: "Contacto", href: "mailto:hola@i-am.clinic" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Aviso de privacidad", href: "/privacidad" },
      { label: "Términos de servicio", href: "/terminos" },
      { label: "Soporte", href: "mailto:hola@i-am.clinic" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const FOOTER_TAGLINE =
  "Hecho en Lima por psicólogos, ingenieros y diseñadores. Creemos que la consulta privada merece mejores herramientas." as const;

export const FOOTER_COPYRIGHT = "© 2026 i-am.clinic · Lima, Perú" as const;

export const FOOTER_DOUBT_PREFIX = "¿Una duda? " as const;

export const FOOTER_DOUBT_EMAIL = "hola@i-am.clinic" as const;
