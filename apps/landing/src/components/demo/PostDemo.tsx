// PostDemo.tsx — Post-demo CTA block revealed after the closing state.
// Primary CTA: "Unirme a la lista de espera" → #waitlist.
// Demo.html:1932-1956.

import { POST_DEMO } from "./demo-content";

interface Props {
  readonly visible: boolean;
  readonly onCopyLink: () => void;
}

export function PostDemo({ visible, onCopyLink }: Props) {
  const shareWhatsApp = () => {
    const href =
      "https://wa.me/?text=" + encodeURIComponent(POST_DEMO.waShareText);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      aria-hidden={!visible}
      className={[
        "mx-auto max-w-page px-8 py-6 pb-20",
        "grid gap-5 justify-items-center text-center",
        "transition-[opacity,transform] duration-[600ms] ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <p className="font-sans text-[12px] font-semibold text-brand-salvia-600 tracking-[0.08em] uppercase">
        {POST_DEMO.eyebrow}
      </p>

      <h2 className="font-sans text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-text-primary max-w-[560px] m-0 tracking-[-0.01em] leading-snug">
        {POST_DEMO.heading}
      </h2>

      <a
        href="#waitlist"
        className={[
          "inline-flex items-center justify-center gap-2",
          "w-[320px] max-w-full px-7 py-3.5 rounded-xl",
          "font-sans text-[16px] font-semibold text-white bg-brand-salvia-500",
          "shadow-md transition-[transform,background] duration-[150ms]",
          "hover:bg-brand-salvia-600 hover:-translate-y-[1px]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
        ].join(" ")}
      >
        {POST_DEMO.cta}
      </a>

      <p className="font-sans text-[13px] text-text-muted -mt-2.5">
        <strong className="font-semibold text-brand-salvia-600">Garantía mes 3</strong> · sin tarjeta · sin permanencia
      </p>

      <div className="flex gap-3 flex-wrap justify-center mt-1">
        <button
          type="button"
          onClick={shareWhatsApp}
          className={[
            "inline-flex items-center gap-2 px-4.5 py-2.5 rounded-[10px]",
            "font-sans text-[13px] font-medium text-text-secondary",
            "bg-transparent border border-surface-border",
            "transition-colors duration-[150ms] hover:border-ink-300 hover:bg-surface-alt",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
          ].join(" ")}
        >
          <WhatsAppIcon />
          Compartir por WhatsApp
        </button>

        <button
          type="button"
          onClick={onCopyLink}
          className={[
            "inline-flex items-center gap-2 px-4.5 py-2.5 rounded-[10px]",
            "font-sans text-[13px] font-medium text-text-secondary",
            "bg-transparent border border-surface-border",
            "transition-colors duration-[150ms] hover:border-ink-300 hover:bg-surface-alt",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
          ].join(" ")}
        >
          <LinkIcon />
          Copiar enlace
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.5 11.5 0 0 0 3.4 18.7L2 22l3.4-1.4a11.5 11.5 0 0 0 17.1-9.9 11.4 11.4 0 0 0-2-7.2zm-8.5 17.6a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-2.4 1 1-2.3-.2-.4a9.6 9.6 0 1 1 6.9 3.2zm5.5-7.2c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7s.3-.4.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3s-1 1-1 2.5 1 2.9 1.1 3.1c.1.2 2 3 4.7 4.2 2.7 1.1 2.7.7 3.2.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.4z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  );
}
