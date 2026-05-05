import { sql, lt } from "drizzle-orm";
import type { Db } from "../../../db/client";
import { rateLimit } from "../../../db/schema";

const LIMIT = 5;
const WINDOW_MS = 60_000;
let callCount = 0;

function currentWindowStart(): Date {
  const now = Date.now();
  return new Date(now - (now % WINDOW_MS));
}

export async function checkRateLimit(
  db: Db,
  ipHash: Buffer,
): Promise<{ limited: boolean }> {
  callCount += 1;
  const shouldClean = callCount % 50 === 0;

  const windowStart = currentWindowStart();

  const result = await db
    .insert(rateLimit)
    .values({ ipHash, windowStart, count: 1 })
    .onConflictDoUpdate({
      target: [rateLimit.ipHash, rateLimit.windowStart],
      set: { count: sql`${rateLimit.count} + 1` },
    })
    .returning({ count: rateLimit.count });

  const count = result[0]?.count ?? 0;

  if (shouldClean) {
    const cutoff = new Date(Date.now() - WINDOW_MS * 10);
    await db.delete(rateLimit).where(lt(rateLimit.windowStart, cutoff)).catch(() => undefined);
  }

  return { limited: count > LIMIT };
}
