import { describe, it, expect, beforeEach } from "vitest";

const LIMIT = 5;

interface RateLimitStore {
  count: number;
}

function createInMemoryRateLimiter(store: Map<string, RateLimitStore>) {
  return async function checkRateLimit(
    ipHash: Buffer,
  ): Promise<{ limited: boolean }> {
    const key = ipHash.toString("hex");
    const entry = store.get(key) ?? { count: 0 };
    entry.count += 1;
    store.set(key, entry);
    return { limited: entry.count > LIMIT };
  };
}

describe("rate-limit (in-memory)", () => {
  let store: Map<string, RateLimitStore>;
  let checkRateLimit: ReturnType<typeof createInMemoryRateLimiter>;

  beforeEach(() => {
    store = new Map();
    checkRateLimit = createInMemoryRateLimiter(store);
  });

  it("allows first 5 requests", async () => {
    const ip = Buffer.from("aabbcc", "hex");
    for (let i = 0; i < LIMIT; i++) {
      const { limited } = await checkRateLimit(ip);
      expect(limited).toBe(false);
    }
  });

  it("blocks the 6th request", async () => {
    const ip = Buffer.from("ddeeff", "hex");
    for (let i = 0; i < LIMIT; i++) {
      await checkRateLimit(ip);
    }
    const { limited } = await checkRateLimit(ip);
    expect(limited).toBe(true);
  });

  it("does not confuse different IP hashes", async () => {
    const ip1 = Buffer.from("111111", "hex");
    const ip2 = Buffer.from("222222", "hex");
    for (let i = 0; i < LIMIT + 2; i++) {
      await checkRateLimit(ip1);
    }
    const { limited } = await checkRateLimit(ip2);
    expect(limited).toBe(false);
  });
});
