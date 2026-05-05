import { z } from "zod";

const Env = z.object({
  DATABASE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM: z.string().email().default("hola@i-am.clinic"),
  SITE_URL: z.string().url().default("https://i-am.clinic"),
});

export type EnvShape = z.infer<typeof Env>;

let _parsed: EnvShape | undefined;

/**
 * Lazily parses and validates env vars on first access.
 * Throws a descriptive error at runtime if required vars are missing.
 */
export function getEnv(): EnvShape {
  if (_parsed !== undefined) {
    return _parsed;
  }
  const result = Env.safeParse(import.meta.env);
  if (!result.success) {
    throw new Error(
      `Environment variable validation failed:\n${result.error.issues
        .map((i) => `  ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`,
    );
  }
  _parsed = result.data;
  return _parsed;
}

/**
 * Convenience re-export. Calling env.X lazily validates the full schema
 * the first time any key is read, then caches the result.
 */
export const env = {
  get DATABASE_URL() {
    return getEnv().DATABASE_URL;
  },
  get RESEND_API_KEY() {
    return getEnv().RESEND_API_KEY;
  },
  get RESEND_FROM() {
    return getEnv().RESEND_FROM;
  },
  get SITE_URL() {
    return getEnv().SITE_URL;
  },
} satisfies Record<keyof EnvShape, string>;
