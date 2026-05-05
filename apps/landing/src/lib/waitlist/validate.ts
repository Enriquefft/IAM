import { z } from "zod";
import { SUPPORTED_LOCALES } from "@/lib/i18n/locales";

export const SignupSchema = z.object({
  email: z
    .email({
      error: (issue) =>
        issue.input === undefined ? "El correo es requerido" : "Ingresá un correo válido",
    })
    .max(254, { error: "El correo es demasiado largo" })
    .transform((v) => v.toLowerCase().trim()),
  name: z.string().max(120).optional(),
  role: z.enum(["terapista", "clinica", "familia", "otro"], {
    error: (issue) =>
      issue.input === undefined ? "Seleccioná tu perfil" : "Perfil inválido",
  }),
  locale: z.enum(SUPPORTED_LOCALES, {
    error: (issue) =>
      issue.input === undefined ? "Locale requerido" : "Locale inválido",
  }),
  consent: z.literal(true, { error: "Debés aceptar las condiciones" }),
  hp: z.string().optional(),
});

export type SignupInput = z.infer<typeof SignupSchema>;

export type FieldError = { field: string; message: string };

export function parseSignup(
  raw: unknown,
): { ok: true; data: SignupInput } | { ok: false; errors: FieldError[] } {
  const result = SignupSchema.safeParse(raw);
  if (result.success) return { ok: true, data: result.data };
  const errors: FieldError[] = result.error.issues.map((issue) => ({
    field: issue.path[0] !== undefined ? String(issue.path[0]) : "_",
    message: issue.message,
  }));
  return { ok: false, errors };
}
