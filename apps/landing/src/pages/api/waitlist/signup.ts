import type { APIRoute } from "astro";
import { createHmac } from "node:crypto";
import { createDb } from "../../../../db/client";
import { env } from "../../../lib/env";
import { parseSignup } from "../../../lib/waitlist/validate";
import { hashToken, generateRawToken, tokenExpiresAt } from "../../../lib/waitlist/token";
import { hashIp, extractIp } from "../../../lib/waitlist/ip";
import { checkRateLimit } from "../../../lib/waitlist/rate-limit";
import { signupWithToken } from "../../../lib/waitlist/repo";
import { sendConfirmEmail } from "../../../lib/waitlist/email";

function sha256Hex(value: string): string {
  return createHmac("sha256", "log-correlation").update(value).digest("hex");
}

export const POST: APIRoute = async ({ request }) => {
  const wantsJson =
    request.headers.get("accept")?.includes("application/json") === true;

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return jsonOrHtml(wantsJson, { ok: false, error: "invalid_json" }, 400);
  }

  const parsed = parseSignup(rawBody);
  if (!parsed.ok) {
    return jsonOrHtml(wantsJson, { ok: false, errors: parsed.errors }, 400);
  }

  const { email, name, role, consent: _consent, hp } = parsed.data;

  if (hp) {
    return jsonOrHtml(wantsJson, { ok: true }, 202);
  }

  const ip = extractIp(request);
  const ipHash = hashIp(ip, env.WAITLIST_IP_SALT);

  const db = createDb();
  const { limited } = await checkRateLimit(db, ipHash);

  if (limited) {
    return new Response(JSON.stringify({ ok: false, error: "rate_limited" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": "60",
      },
    });
  }

  const rawToken = generateRawToken();
  const tokenHash = hashToken(rawToken, env.WAITLIST_TOKEN_SECRET);
  const expiresAt = tokenExpiresAt();

  const payload = {
    email,
    role,
    consentAt: new Date(),
    ...(name !== undefined ? { name } : {}),
  };

  let alreadyConfirmed: boolean;

  try {
    const result = await signupWithToken(db, payload, tokenHash, expiresAt);
    alreadyConfirmed = result.alreadyConfirmed;
  } catch {
    return jsonOrHtml(wantsJson, { ok: false, error: "internal_error" }, 500);
  }

  if (alreadyConfirmed) {
    return jsonOrHtml(wantsJson, { ok: true, alreadyConfirmed: true }, 200);
  }

  const confirmUrl = `${env.PUBLIC_SITE_URL}/api/waitlist/confirm?token=${rawToken}`;

  try {
    await sendConfirmEmail({
      to: email,
      confirmUrl,
      fromAddress: env.WAITLIST_FROM,
      apiKey: env.RESEND_API_KEY,
    });
  } catch (err) {
    const emailHash = sha256Hex(email);
    process.stderr.write(
      `[waitlist] email delivery failed for sha256=${emailHash}: ${String(err)}\n`,
    );
  }

  return jsonOrHtml(wantsJson, { ok: true }, 202);
};

function jsonOrHtml(
  wantsJson: boolean,
  body: Record<string, unknown>,
  status: number,
): Response {
  if (wantsJson) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const isOk = body["ok"] === true;
  const redirectPath = isOk
    ? body["alreadyConfirmed"] === true
      ? "/confirmado?already=1"
      : "/confirmado?sent=1"
    : "/";

  return new Response(null, {
    status: 302,
    headers: { Location: redirectPath },
  });
}
