import { describe, it, expect } from "vitest";
import { server } from "../setup/resend-mock";
import { http, HttpResponse } from "msw";

describe("sendConfirmEmail", () => {
  it("sends to the correct recipient with the confirm URL", async () => {
    let captured: unknown;
    server.use(
      http.post("https://api.resend.com/emails", async ({ request }) => {
        captured = await request.json();
        return HttpResponse.json({ id: "test-id-1" }, { status: 200 });
      }),
    );

    const { sendConfirmEmail } = await import("../../src/lib/waitlist/email");

    await sendConfirmEmail({
      to: "user@example.com",
      confirmUrl: "http://localhost:4321/api/waitlist/confirm?token=abc",
      fromAddress: "i-am.clinic <hola@i-am.clinic>",
      apiKey: "re_test_key",
    });

    const payload = captured as Record<string, unknown>;
    expect(payload["to"]).toBe("user@example.com");
    expect(payload["from"]).toBe("i-am.clinic <hola@i-am.clinic>");
    expect(typeof payload["subject"]).toBe("string");
    expect(String(payload["subject"])).toContain("Confirmá");
    expect(typeof payload["html"]).toBe("string");
    expect(String(payload["html"])).toContain(
      "http://localhost:4321/api/waitlist/confirm?token=abc",
    );
  });

  it("includes List-Unsubscribe header", async () => {
    let captured: unknown;
    server.use(
      http.post("https://api.resend.com/emails", async ({ request }) => {
        captured = await request.json();
        return HttpResponse.json({ id: "test-id-2" }, { status: 200 });
      }),
    );

    const { sendConfirmEmail } = await import("../../src/lib/waitlist/email");

    await sendConfirmEmail({
      to: "user2@example.com",
      confirmUrl: "http://localhost/confirm?token=xyz",
      fromAddress: "i-am.clinic <hola@i-am.clinic>",
      apiKey: "re_test_key",
    });

    const payload = captured as Record<string, unknown>;
    const headers = payload["headers"] as Record<string, unknown> | undefined;
    expect(headers).toBeDefined();
    expect(headers?.["List-Unsubscribe"]).toBeDefined();
  });

  it("throws when Resend returns an error", async () => {
    server.use(
      http.post("https://api.resend.com/emails", () => {
        return HttpResponse.json(
          { name: "validation_error", message: "Invalid from address", statusCode: 422 },
          { status: 422 },
        );
      }),
    );

    const { sendConfirmEmail } = await import("../../src/lib/waitlist/email");

    await expect(
      sendConfirmEmail({
        to: "user3@example.com",
        confirmUrl: "http://localhost/confirm?token=fail",
        fromAddress: "bad@address",
        apiKey: "re_test_key",
      }),
    ).rejects.toThrow();
  });
});
