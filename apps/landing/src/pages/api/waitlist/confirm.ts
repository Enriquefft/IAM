import type { APIRoute } from "astro";
import { createDb } from "../../../../db/client";
import { env } from "../../../lib/env";
import { hashToken } from "../../../lib/waitlist/token";
import { confirmToken } from "../../../lib/waitlist/repo";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const rawToken = url.searchParams.get("token");

  if (!rawToken) {
    return redirect("/confirmado?error=invalid");
  }

  const tokenHash = hashToken(rawToken, env.WAITLIST_TOKEN_SECRET);
  const db = createDb();

  try {
    const { status } = await confirmToken(db, tokenHash);

    if (status === "ok") {
      return redirect("/confirmado");
    }

    return redirect(`/confirmado?error=${status}`);
  } catch {
    return redirect("/confirmado?error=invalid");
  }
};

function redirect(location: string): Response {
  return new Response(null, { status: 302, headers: { Location: location } });
}
