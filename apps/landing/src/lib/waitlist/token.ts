import { createHmac, randomBytes } from "node:crypto";

export function generateRawToken(): string {
  return randomBytes(32).toString("hex");
}

export function hmacSha256(value: string, secret: string): Buffer {
  return createHmac("sha256", secret).update(value).digest();
}

export function hashToken(rawToken: string, secret: string): Buffer {
  return hmacSha256(rawToken, secret);
}

export function tokenExpiresAt(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d;
}
