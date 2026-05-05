import { describe, it, expect } from "vitest";
import { generateRawToken, hashToken, tokenExpiresAt } from "../../src/lib/waitlist/token";

const SECRET = "a".repeat(64);

describe("token", () => {
  it("generateRawToken returns a 64-char hex string (32 bytes)", () => {
    const token = generateRawToken();
    expect(token).toMatch(/^[0-9a-f]{64}$/);
  });

  it("generateRawToken is unique across calls", () => {
    const a = generateRawToken();
    const b = generateRawToken();
    expect(a).not.toBe(b);
  });

  it("hashToken returns a 32-byte Buffer", () => {
    const hash = hashToken("some-token", SECRET);
    expect(Buffer.isBuffer(hash)).toBe(true);
    expect(hash.length).toBe(32);
  });

  it("hashToken is deterministic", () => {
    const h1 = hashToken("tok", SECRET);
    const h2 = hashToken("tok", SECRET);
    expect(h1.equals(h2)).toBe(true);
  });

  it("hashToken differs for different tokens", () => {
    const h1 = hashToken("tok-a", SECRET);
    const h2 = hashToken("tok-b", SECRET);
    expect(h1.equals(h2)).toBe(false);
  });

  it("tokenExpiresAt is approximately 7 days from now", () => {
    const before = Date.now();
    const exp = tokenExpiresAt();
    const after = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    expect(exp.getTime()).toBeGreaterThanOrEqual(before + sevenDaysMs - 100);
    expect(exp.getTime()).toBeLessThanOrEqual(after + sevenDaysMs + 100);
  });
});
