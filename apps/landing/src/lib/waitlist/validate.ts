import { z } from "zod";
import { SUPPORTED_LOCALES } from "@/lib/i18n/locales";

export const SignupSchema = z.object({
  email: z
    .string({ required_error: "El correo es requerido" })
    .email({ message: "Ingresá un correo válido" })
    .max(254, { message: "El correo es demasiado largo" })
    .transform((v) => v.toLowerCase().trim()),
  name: z.string().max(120).optional(),
  role: z.enum(["terapista", "clinica", "familia", "otro"], {
    required_error: "Seleccioná tu perfil",
    invalid_type_error: "Perfil inválido",
  }),
  locale: z.enum(SUPPORTED_LOCALES, {
    required_error: "Locale requerido",
    invalid_type_error: "Locale inválido",
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Debés aceptar las condiciones" }),
  }),
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
