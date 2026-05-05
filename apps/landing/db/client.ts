import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../src/lib/env";

export function createDb() {
  return drizzle(env.DATABASE_URL);
}

export type Db = ReturnType<typeof createDb>;
