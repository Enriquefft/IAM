import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { env } from "../src/lib/env";

export function createDb() {
  const sql = neon(env.DATABASE_URL);
  return drizzle(sql, { schema });
}

export type Db = ReturnType<typeof createDb>;
