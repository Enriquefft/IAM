import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";
import { WAITLIST_COPY } from "./copy";

type FormState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; alreadyConfirmed: boolean }
  | { type: "error"; errors: Record<string, string> }
  | { type: "fatal"; message: string };

export default function WaitlistForm({ action }: { action: string }) {
  const [state, setState] = React.useState<FormState>({ type: "idle" });
  const [role, setRole] = React.useState<string>("");
  const [consent, setConsent] = React.useState(false);
  const successRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (state.type === "success" || state.type === "fatal") {
      successRef.current?.focus();
    }
  }, [state.type]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ type: "submitting" });

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      email: String(data.get("email") ?? ""),
      name: String(data.get("name") ?? "") || undefined,
      role,
      consent: consent ? true : undefined,
      hp: String(data.get("hp") ?? "") || undefined,
    };

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      if (res.status === 202 || res.status === 200) {
        const json = (await res.json()) as {
          ok: boolean;
          alreadyConfirmed?: boolean;
        };
        setState({ type: "success", alreadyConfirmed: json.alreadyConfirmed === true });
        return;
      }

      if (res.status === 429) {
        setState({
          type: "fatal",
          message: "Demasiados intentos. Esperá un minuto y volvé a intentar.",
        });
        return;
      }

      if (res.status === 400) {
        const json = (await res.json()) as {
          errors?: Array<{ field: string; message: string }>;
        };
        const map: Record<string, string> = {};
        for (const err of json.errors ?? []) {
          map[err.field] = err.message;
        }
        setState({ type: "error", errors: map });
        return;
      }

      setState({ type: "fatal", message: "Algo salió mal. Intentá de nuevo en un momento." });
    } catch {
      setState({ type: "fatal", message: "Sin conexión. Verificá tu red y volvé a intentar." });
    }
  }

  if (state.type === "success") {
    const alreadyConfirmed = state.alreadyConfirmed;
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="rounded-lg bg-status-successSurface border border-brand-salvia-200 p-6 text-center focus:outline-none"
      >
        <p className="text-h5 font-semibold text-brand-salvia-600 mb-2">
          {alreadyConfirmed
            ? WAITLIST_COPY.alreadyConfirmedHeading
            : WAITLIST_COPY.successHeading}
        </p>
        <p className="text-body-sm text-text-secondary">
          {alreadyConfirmed
            ? WAITLIST_COPY.alreadyConfirmedBody
            : WAITLIST_COPY.successBody}
        </p>
      </div>
    );
  }

  const errors =
    state.type === "error" ? state.errors : {};

  return (
    <form
      action={action}
      method="post"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de lista de espera"
    >
      {/* honeypot — off-screen positioned to be invisible without detectable zero-size signals */}
      <input
        type="text"
        name="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
      />

      <div className="space-y-4">
        <div>
          <Label htmlFor="wl-name">{WAITLIST_COPY.nameLabel}</Label>
          <Input
            id="wl-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={WAITLIST_COPY.namePlaceholder}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="wl-email">
            {WAITLIST_COPY.emailLabel}
            <span className="text-status-errorText ml-0.5" aria-hidden="true">*</span>
          </Label>
          <Input
            id="wl-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={WAITLIST_COPY.emailPlaceholder}
            aria-describedby={errors["email"] ? "wl-email-err" : undefined}
            aria-invalid={errors["email"] ? true : undefined}
            className={cn("mt-1.5", errors["email"] && "border-status-error")}
          />
          {errors["email"] && (
            <p
              id="wl-email-err"
              role="alert"
              className="mt-1 text-small text-status-errorText"
            >
              {errors["email"]}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="wl-role">
            {WAITLIST_COPY.roleLabel}
            <span className="text-status-errorText ml-0.5" aria-hidden="true">*</span>
          </Label>
          <Select value={role} onValueChange={setRole} required>
            <SelectTrigger
              id="wl-role"
              aria-describedby={errors["role"] ? "wl-role-err" : undefined}
              aria-invalid={errors["role"] ? true : undefined}
              className={cn("mt-1.5", errors["role"] && "border-status-error")}
            >
              <SelectValue placeholder={WAITLIST_COPY.rolePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {WAITLIST_COPY.roleOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors["role"] && (
            <p
              id="wl-role-err"
              role="alert"
              className="mt-1 text-small text-status-errorText"
            >
              {errors["role"]}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3 pt-1">
          <Checkbox
            id="wl-consent"
            checked={consent}
            onCheckedChange={(v) => setConsent(v === true)}
            aria-labelledby="wl-consent-label"
            aria-describedby={errors["consent"] ? "wl-consent-err" : undefined}
            aria-invalid={errors["consent"] ? true : undefined}
            className="mt-0.5 shrink-0"
          />
          <div>
            <Label id="wl-consent-label" htmlFor="wl-consent" className="cursor-pointer leading-snug">
              {WAITLIST_COPY.consentLabel}
              <span className="text-status-errorText ml-0.5" aria-hidden="true">*</span>
            </Label>
            {errors["consent"] && (
              <p
                id="wl-consent-err"
                role="alert"
                className="mt-1 text-small text-status-errorText"
              >
                {errors["consent"]}
              </p>
            )}
          </div>
        </div>
      </div>

      {state.type === "fatal" && (
        <p
          role="alert"
          className="mt-4 rounded-base bg-status-errorSurface border border-status-error/30 px-4 py-3 text-small text-status-errorText"
        >
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state.type === "submitting"}
        className="mt-6 w-full"
      >
        {state.type === "submitting"
          ? WAITLIST_COPY.submittingLabel
          : WAITLIST_COPY.submitLabel}
      </Button>

      <p className="mt-3 text-center text-small text-text-muted">
        {WAITLIST_COPY.trustLine}
      </p>
    </form>
  );
}
