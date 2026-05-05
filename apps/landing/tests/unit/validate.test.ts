import { describe, it, expect } from "vitest";
import { parseSignup } from "../../src/lib/waitlist/validate";

describe("parseSignup", () => {
  const valid = {
    email: "Test@Example.com",
    role: "terapista",
    consent: true,
  };

  it("normalises email to lowercase+trim", () => {
    const result = parseSignup(valid);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.email).toBe("test@example.com");
  });

  it("accepts optional name and hp", () => {
    const result = parseSignup({ ...valid, name: "Ana", hp: "" });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.name).toBe("Ana");
  });

  it("rejects missing email", () => {
    const result = parseSignup({ role: "clinica", consent: true });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.some((e) => e.field === "email")).toBe(true);
  });

  it("rejects invalid role", () => {
    const result = parseSignup({ ...valid, role: "impostor" });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.some((e) => e.field === "role")).toBe(true);
  });

  it("rejects consent=false", () => {
    const result = parseSignup({ ...valid, consent: false });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.some((e) => e.field === "consent")).toBe(true);
  });

  it("accepts all valid role values", () => {
    for (const role of ["terapista", "clinica", "familia", "otro"] as const) {
      const result = parseSignup({ ...valid, role });
      expect(result.ok).toBe(true);
    }
  });
});
