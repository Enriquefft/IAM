import { eq, and, isNull } from "drizzle-orm";
import type { Db } from "../../../db/client";
import { waitlist, confirmations } from "../../../db/schema";
import type { WaitlistRole } from "../../../db/schema";
import type { Locale } from "@/lib/i18n/locales";

export interface SignupPayload {
  email: string;
  name?: string;
  role: WaitlistRole;
  locale: Locale;
  consentAt: Date;
}

/**
 * Upsert the waitlist row, clear any stale confirmation tokens for the entry,
 * and insert a new confirmation token — in sequential steps.
 *
 * The neon-http driver does not support interactive transactions, so each
 * step is its own query. Interruption between steps leaves the user without
 * a token (safe — re-signup regenerates one). No stale token can be reused
 * because we clear before inserting.
 */
export async function signupWithToken(
  db: Db,
  payload: SignupPayload,
  tokenHash: Buffer,
  expiresAt: Date,
): Promise<{ alreadyConfirmed: boolean }> {
  const existing = await db
    .select({ id: waitlist.id, confirmedAt: waitlist.confirmedAt })
    .from(waitlist)
    .where(eq(waitlist.email, payload.email))
    .limit(1);

  const row = existing[0];

  if (row?.confirmedAt !== null && row?.confirmedAt !== undefined) {
    return { alreadyConfirmed: true };
  }

  let waitlistId: string;

  if (row !== undefined) {
    await db
      .update(waitlist)
      .set({
        name: payload.name,
        role: payload.role,
        locale: payload.locale,
        updatedAt: new Date(),
      })
      .where(and(eq(waitlist.email, payload.email), isNull(waitlist.confirmedAt)));
    waitlistId = row.id;
  } else {
    const inserted = await db
      .insert(waitlist)
      .values({
        email: payload.email,
        name: payload.name,
        role: payload.role,
        locale: payload.locale,
        consentAt: payload.consentAt,
      })
      .returning({ id: waitlist.id });

    const newRow = inserted[0];
    if (newRow === undefined) throw new Error("Failed to insert waitlist row");
    waitlistId = newRow.id;
  }

  // Delete any stale (unconfirmed) tokens before issuing a new one.
  // This prevents multiple live tokens per email on re-signup.
  await db.delete(confirmations).where(eq(confirmations.waitlistId, waitlistId));

  await db.insert(confirmations).values({ tokenHash, waitlistId, expiresAt });

  return { alreadyConfirmed: false };
}

export async function storeConfirmationToken(
  db: Db,
  waitlistId: string,
  tokenHash: Buffer,
  expiresAt: Date,
): Promise<void> {
  await db
    .insert(confirmations)
    .values({ tokenHash, waitlistId, expiresAt })
    .onConflictDoUpdate({
      target: confirmations.tokenHash,
      set: { waitlistId, expiresAt },
    });
}

export interface ConfirmResult {
  status: "ok" | "expired" | "invalid";
  /** Locale of the waitlist row (when found), so the caller can redirect to
   *  the correct localized confirmation page. */
  locale?: Locale;
}

export async function confirmToken(db: Db, tokenHash: Buffer): Promise<ConfirmResult> {
  const rows = await db
    .select({
      waitlistId: confirmations.waitlistId,
      expiresAt: confirmations.expiresAt,
      locale: waitlist.locale,
    })
    .from(confirmations)
    .innerJoin(waitlist, eq(waitlist.id, confirmations.waitlistId))
    .where(eq(confirmations.tokenHash, tokenHash))
    .limit(1);

  const row = rows[0];
  if (row === undefined) return { status: "invalid" };
  if (row.expiresAt < new Date()) {
    await db.delete(confirmations).where(eq(confirmations.tokenHash, tokenHash));
    return { status: "expired", locale: row.locale };
  }

  await db
    .update(waitlist)
    .set({ confirmedAt: new Date(), updatedAt: new Date() })
    .where(eq(waitlist.id, row.waitlistId));

  await db.delete(confirmations).where(eq(confirmations.tokenHash, tokenHash));

  return { status: "ok", locale: row.locale };
}
