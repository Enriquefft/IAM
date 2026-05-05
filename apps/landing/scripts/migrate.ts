import { neon } from "@neondatabase/serverless";

const url = process.env["DATABASE_URL"];
if (!url) {
  process.stderr.write("DATABASE_URL is not set\n");
  process.exit(1);
}

const sql = neon(url);

const statements = [
  `CREATE EXTENSION IF NOT EXISTS citext`,
  `CREATE EXTENSION IF NOT EXISTS pgcrypto`,
  `DO $$ BEGIN
    CREATE TYPE waitlist_role AS ENUM ('terapista', 'clinica', 'familia', 'otro');
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$`,
  `CREATE TABLE IF NOT EXISTS waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email CITEXT UNIQUE NOT NULL,
    name TEXT,
    role waitlist_role NOT NULL,
    consent_at TIMESTAMPTZ NOT NULL,
    confirmed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS confirmations (
    token_hash BYTEA PRIMARY KEY,
    waitlist_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS rate_limit (
    ip_hash BYTEA NOT NULL,
    window_start TIMESTAMPTZ NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (ip_hash, window_start)
  )`,
];

process.stdout.write("Applying migration 0001_init...\n");

for (const stmt of statements) {
  await sql(stmt);
}

process.stdout.write("Migration applied.\n");
process.stdout.write("Verifying tables:\n");

const tables = await sql(
  `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('waitlist','confirmations','rate_limit') ORDER BY table_name`,
);
for (const row of tables) {
  const tableName = String(row["table_name"]);
  const count = await sql(`SELECT COUNT(*) AS n FROM "${tableName}"`);
  process.stdout.write(`  ${tableName}: ${String(count[0]?.["n"] ?? 0)} rows\n`);
}

process.exit(0);
