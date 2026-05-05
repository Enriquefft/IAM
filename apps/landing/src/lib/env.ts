import { z } from "zod";

// Single canonical schema — both Vite runtime and Node script loaders derive from here.
export const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1),
  WAITLIST_FROM: z.string().min(1).default("i-am.clinic <hola@i-am.clinic>"),
  PUBLIC_SITE_URL: z.string().url().default("https://i-am.clinic"),
  WAITLIST_TOKEN_SECRET: z.string().regex(/^[0-9a-f]{64}$/i),
  WAITLIST_IP_SALT: z.string().regex(/^[0-9a-f]{64}$/i),
});

export type EnvShape = z.infer<typeof EnvSchema>;

// ---------------------------------------------------------------------------
// Astro/Vite runtime loader (uses import.meta.env)
// ---------------------------------------------------------------------------

let _parsed: EnvShape | undefined;

export function getEnv(): EnvShape {
  if (_parsed !== undefined) {
    return _parsed;
  }
  const result = EnvSchema.safeParse(import.meta.env);
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

export const env = {
  get DATABASE_URL() {
    return getEnv().DATABASE_URL;
  },
  get RESEND_API_KEY() {
    return getEnv().RESEND_API_KEY;
  },
  get WAITLIST_FROM() {
    return getEnv().WAITLIST_FROM;
  },
  get PUBLIC_SITE_URL() {
    return getEnv().PUBLIC_SITE_URL;
  },
  get WAITLIST_TOKEN_SECRET() {
    return getEnv().WAITLIST_TOKEN_SECRET;
  },
  get WAITLIST_IP_SALT() {
    return getEnv().WAITLIST_IP_SALT;
  },
} satisfies Record<keyof EnvShape, string>;

// ---------------------------------------------------------------------------
// Node runtime loader (uses process.env — for db/client.ts and scripts/)
// ---------------------------------------------------------------------------

let _nodeParsed: EnvShape | undefined;

export function nodeEnv(): EnvShape {
  if (_nodeParsed !== undefined) {
    return _nodeParsed;
  }
  const result = EnvSchema.safeParse(process.env);
  if (!result.success) {
    throw new Error(
      `Environment variable validation failed:\n${result.error.issues
        .map((i) => `  ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`,
    );
  }
  _nodeParsed = result.data;
  return _nodeParsed;
}
