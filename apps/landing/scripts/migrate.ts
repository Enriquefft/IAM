import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";
import { nodeEnv } from "../src/lib/env";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env for local development (no-op in CI/Vercel where env vars are injected).
const __envPath = resolve(__dirname, "../.env");
if (existsSync(__envPath)) {
  process.loadEnvFile(__envPath);
}

const sql = neon(nodeEnv().DATABASE_URL);

// Ensure migration tracking table exists (idempotent).
await sql`
  CREATE TABLE IF NOT EXISTS _migrations (
    filename TEXT PRIMARY KEY,
    applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`;

/**
 * Split a SQL file into individual statements by semicolon,
 * preserving dollar-quoted blocks (DO $$ ... $$) intact.
 */
function splitStatements(ddl: string): string[] {
  const statements: string[] = [];
  let current = "";
  let inDollarQuote = false;
  let dollarTag = "";

  const lines = ddl.split("\n");

  for (const line of lines) {
    if (!inDollarQuote) {
      // Check for start of dollar-quote block (e.g., $$, $body$)
      const dollarMatch = /\$([^$]*)\$/.exec(line);
      if (dollarMatch !== null) {
        const tag = dollarMatch[0] ?? "$$";
        if (line.indexOf(tag, (dollarMatch.index ?? 0) + tag.length) === -1) {
          // Opening tag without closing on same line — enter dollar-quote mode
          inDollarQuote = true;
          dollarTag = tag;
        }
      }
    } else {
      if (line.includes(dollarTag)) {
        inDollarQuote = false;
        dollarTag = "";
      }
    }

    current += line + "\n";

    if (!inDollarQuote && line.trimEnd().endsWith(";")) {
      const stmt = current.trim();
      if (stmt.length > 0) {
        statements.push(stmt);
      }
      current = "";
    }
  }

  const remainder = current.trim();
  if (remainder.length > 0) {
    statements.push(remainder);
  }

  return statements.filter((s) => s.length > 0);
}

const migrations = [
  "0001_init.sql",
  "0002_indexes.sql",
];

for (const filename of migrations) {
  const alreadyApplied = await sql`
    SELECT 1 FROM _migrations WHERE filename = ${filename}
  `;

  if (alreadyApplied.length > 0) {
    process.stdout.write(`  skip  ${filename} (already applied)\n`);
    continue;
  }

  const filePath = resolve(__dirname, "../db/migrations", filename);
  const ddl = readFileSync(filePath, "utf-8");
  const statements = splitStatements(ddl);

  process.stdout.write(`  apply ${filename} (${String(statements.length)} statements)...\n`);

  for (const stmt of statements) {
    await sql.query(stmt);
  }

  await sql`INSERT INTO _migrations (filename) VALUES (${filename})`;
  process.stdout.write(`  done  ${filename}\n`);
}

process.stdout.write("All migrations applied.\n");
process.exit(0);
