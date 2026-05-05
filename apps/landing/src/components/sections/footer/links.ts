// Footer link tables — locale-aware.
// Section render: Footer.astro consumes via buildFooterColumns(locale).
//
// Hash anchors are absolute paths under the locale prefix
// (e.g. /<locale>/#funciones) so footer links keep working when rendered on
// non-home pages (/<locale>/privacidad, /<locale>/terminos, /<locale>/confirmado).
// Plain #hash links break WCAG 2.1 SC 4.1.2 on pages without that anchor.

import { localeAnchor, localizePath, type LocalePath } from "@/lib/i18n";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly items: readonly FooterLink[];
}

export function buildFooterColumns(locale: LocalePath): readonly FooterColumn[] {
  return [
    {
      title: "Producto",
      items: [
        { label: "Funciones", href: localeAnchor(locale, "funciones") },
        { label: "Precios", href: localeAnchor(locale, "precios") },
        { label: "Demo", href: localizePath(locale, "/demo") },
        { label: "Preguntas", href: localeAnchor(locale, "preguntas") },
      ],
    },
    {
      title: "Empresa",
      items: [
        { label: "Quiénes somos", href: localeAnchor(locale, "equipo") },
        { label: "Contacto", href: "mailto:hola@i-am.clinic" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Aviso de privacidad", href: localizePath(locale, "/privacidad") },
        { label: "Términos de servicio", href: localizePath(locale, "/terminos") },
        { label: "Soporte", href: "mailto:hola@i-am.clinic" },
      ],
    },
  ];
}

export const FOOTER_DOUBT_PREFIX = "¿Una duda? " as const;
export const FOOTER_DOUBT_EMAIL = "hola@i-am.clinic" as const;
