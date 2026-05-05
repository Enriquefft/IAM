// RebookToast.tsx — Cancellation toast: 3 rebook slots + WhatsApp confirm row.
// Visible in rebook and closing states. Demo.html:1810-1842.

import { REBOOK_SLOTS } from "./demo-content";

interface Props {
  readonly visible: boolean;
  readonly pickedSlot: number | null;
  readonly waConfirm: boolean;
  readonly onPickSlot: (idx: number) => void;
}

export function RebookToast({
  visible,
  pickedSlot,
  waConfirm,
  onPickSlot,
}: Props): JSX.Element {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={[
        "absolute top-4 right-4 w-[280px] bg-surface border border-surface-border",
        "rounded-xl shadow-md p-3.5 z-[6]",
        "transition-[transform,opacity] duration-[320ms]",
        "[transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center gap-2 font-sans text-[11px] font-semibold text-brand-terra-600 tracking-[0.06em] uppercase mb-1.5">
        <span
          className="w-[7px] h-[7px] rounded-full bg-brand-terra-500 flex-shrink-0"
          aria-hidden="true"
        />
        Cancelación
      </div>

      {/* Message */}
      <p className="font-sans text-[13px] text-text-primary leading-snug mb-2.5">
        <strong className="font-semibold">Sofía B.</strong> canceló su sesión del martes 10:00.
      </p>

      {/* Slots */}
      <p className="font-sans text-[10.5px] font-medium text-text-muted tracking-[0.04em] uppercase mb-1.5">
        Slots sugeridos
      </p>
      <div className="flex flex-col gap-1.5">
        {REBOOK_SLOTS.map((slot, idx) => (
          <button
            key={idx}
            type="button"
            disabled={pickedSlot !== null}
            onClick={() => onPickSlot(idx)}
            className={[
              "font-sans text-[12px] font-medium px-2.5 py-1.5 rounded-lg border text-left w-full",
              "transition-colors duration-[180ms]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
              pickedSlot === idx
                ? "bg-brand-salvia-100 border-brand-salvia-200 text-brand-salvia-600 font-semibold"
                : "bg-page border-surface-border text-text-secondary hover:bg-surface-alt hover:border-ink-300",
              pickedSlot !== null && pickedSlot !== idx ? "opacity-50" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {slot.label}
          </button>
        ))}
      </div>

      {/* WhatsApp confirm */}
      <div
        className={[
          "mt-2.5 p-2.5 bg-page border border-surface-border rounded-lg",
          "font-sans text-[11.5px] text-text-secondary flex items-center gap-2",
          "transition-[opacity,max-height] duration-[280ms]",
          waConfirm ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden",
        ].join(" ")}
        aria-live="polite"
      >
        <WhatsAppIcon />
        <span>
          <strong className="font-semibold">WhatsApp</strong> · confirmación enviada a la familia de Sofía.
        </span>
      </div>
    </div>
  );
}

function WhatsAppIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5 flex-shrink-0 text-brand-salvia-500"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.5 11.5 0 0 0 3.4 18.7L2 22l3.4-1.4a11.5 11.5 0 0 0 17.1-9.9 11.4 11.4 0 0 0-2-7.2zm-8.5 17.6a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-2.4 1 1-2.3-.2-.4a9.6 9.6 0 1 1 6.9 3.2zm5.5-7.2c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7s.3-.4.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3s-1 1-1 2.5 1 2.9 1.1 3.1c.1.2 2 3 4.7 4.2 2.7 1.1 2.7.7 3.2.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.4z" />
    </svg>
  );
}
