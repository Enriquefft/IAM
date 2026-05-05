import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  primaryKey,
  pgEnum,
  customType,
} from "drizzle-orm/pg-core";

export const waitlistRoleEnum = pgEnum("waitlist_role", [
  "terapista",
  "clinica",
  "familia",
  "otro",
]);

const citext = customType<{ data: string }>({
  dataType() {
    return "citext";
  },
});

const bytea = customType<{ data: Buffer }>({
  dataType() {
    return "bytea";
  },
  fromDriver(val) {
    if (Buffer.isBuffer(val)) return val;
    if (typeof val === "string") return Buffer.from(val.replace(/^\\x/, ""), "hex");
    throw new Error("unexpected bytea driver value");
  },
  toDriver(val) {
    return val;
  },
});

function tstz(name: string) {
  return timestamp(name, { withTimezone: true, mode: "date" });
}

export const waitlist = pgTable("waitlist", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: citext("email").unique().notNull(),
  name: text("name"),
  role: waitlistRoleEnum("role").notNull(),
  consentAt: tstz("consent_at").notNull(),
  confirmedAt: tstz("confirmed_at"),
  createdAt: tstz("created_at").notNull().defaultNow(),
  updatedAt: tstz("updated_at").notNull().defaultNow(),
});

export const confirmations = pgTable("confirmations", {
  tokenHash: bytea("token_hash").primaryKey(),
  waitlistId: uuid("waitlist_id")
    .notNull()
    .references(() => waitlist.id, { onDelete: "cascade" }),
  expiresAt: tstz("expires_at").notNull(),
  createdAt: tstz("created_at").notNull().defaultNow(),
});

export const rateLimit = pgTable(
  "rate_limit",
  {
    ipHash: bytea("ip_hash").notNull(),
    windowStart: tstz("window_start").notNull(),
    count: integer("count").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.ipHash, t.windowStart] })],
);

export type WaitlistRow = typeof waitlist.$inferSelect;
export type WaitlistInsert = typeof waitlist.$inferInsert;
export type ConfirmationRow = typeof confirmations.$inferSelect;
export type ConfirmationInsert = typeof confirmations.$inferInsert;
export type RateLimitRow = typeof rateLimit.$inferSelect;
export type WaitlistRole = (typeof waitlistRoleEnum.enumValues)[number];
