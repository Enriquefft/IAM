import { describe, it, expect } from "vitest";
import { hashIp, extractIp } from "../../src/lib/waitlist/ip";

const SALT = "b".repeat(64);

describe("ip", () => {
  describe("hashIp", () => {
    it("returns a 32-byte Buffer", () => {
      const h = hashIp("1.2.3.4", SALT);
      expect(Buffer.isBuffer(h)).toBe(true);
      expect(h.length).toBe(32);
    });

    it("is deterministic", () => {
      const h1 = hashIp("1.2.3.4", SALT);
      const h2 = hashIp("1.2.3.4", SALT);
      expect(h1.equals(h2)).toBe(true);
    });

    it("differs for different IPs", () => {
      const h1 = hashIp("1.2.3.4", SALT);
      const h2 = hashIp("5.6.7.8", SALT);
      expect(h1.equals(h2)).toBe(false);
    });
  });

  describe("extractIp", () => {
    function makeRequest(headers: Record<string, string>): Request {
      return new Request("http://test.example/", { headers });
    }

    it("prefers cf-connecting-ip", () => {
      const req = makeRequest({
        "cf-connecting-ip": "1.1.1.1",
        "x-forwarded-for": "2.2.2.2",
      });
      expect(extractIp(req)).toBe("1.1.1.1");
    });

    it("falls back to x-forwarded-for first value", () => {
      const req = makeRequest({ "x-forwarded-for": "3.3.3.3, 4.4.4.4" });
      expect(extractIp(req)).toBe("3.3.3.3");
    });

    it("returns 'unknown' with no headers", () => {
      const req = makeRequest({});
      expect(extractIp(req)).toBe("unknown");
    });
  });
});
