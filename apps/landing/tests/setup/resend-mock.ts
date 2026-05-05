import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { beforeAll, afterEach, afterAll } from "vitest";

export const server = setupServer(
  http.post("https://api.resend.com/emails", () => {
    return HttpResponse.json({ id: "mock-email-id" }, { status: 200 });
  }),
);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
