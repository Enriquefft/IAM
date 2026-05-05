// Closing.tsx — Closing quote screen, shown when stateId === "closing".
// Demo.html:1846-1854.

interface Props {
  readonly visible: boolean;
}

export function Closing({ visible }: Props): JSX.Element {
  return (
    <div
      aria-hidden={!visible}
      className={[
        "absolute inset-0 grid place-items-center bg-page text-center px-12 z-[8]",
        "transition-opacity duration-[600ms] ease-out",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div>
        <blockquote className="font-serif italic text-[clamp(1.375rem,2.6vw,1.875rem)] leading-[1.4] text-text-primary max-w-[680px] tracking-[-0.005em]">
          «Mateo es Mateo en la sesión, y Mateo en el documento.»
        </blockquote>
        <div className="mt-9 inline-flex items-center gap-2.5 font-sans text-[13px] font-semibold text-brand-salvia-600 tracking-[-0.005em]">
          <span
            className="w-[18px] h-[18px] rounded-[5px] bg-brand-salvia-500 grid place-items-center text-white font-bold text-[10px]"
            aria-hidden="true"
          >
            i
          </span>
          i-am.clinic
        </div>
      </div>
    </div>
  );
}
