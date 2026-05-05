import { createHmac } from "node:crypto";

export function hashIp(ip: string, salt: string): Buffer {
  return createHmac("sha256", salt).update(ip).digest();
}

export function extractIp(request: Request): string {
  const cf = request.headers.get("cf-connecting-ip");
  if (cf) return cf;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0];
    if (first !== undefined) return first.trim();
  }
  return "unknown";
}
