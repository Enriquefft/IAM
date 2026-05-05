// ParentPdf.tsx — Sliding PDF panel for pdf-held and rebook states.
// Spec: NO download button. Demo.html:1257-1315 for content + layout.

interface Props {
  readonly visible: boolean;
  readonly side: boolean;
  readonly anaText: string;
}

export function ParentPdf({ visible, side, anaText }: Props): JSX.Element {
  const usedAna = anaText.trim().length > 8;

  return (
    <div
      aria-hidden={!visible}
      className={[
        "absolute top-0 right-0 h-full bg-surface flex flex-col z-[4]",
        "transition-[transform,width] duration-[400ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
        "shadow-[-16px_0_40px_rgba(28,22,18,0.10)]",
        side ? "w-[38%]" : "w-[56%]",
        visible ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
    >
      {/* Scrollable paper area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 bg-gradient-to-b from-surface to-brand-cream-50">
        {/* Header */}
        <div className="border-b border-surface-border pb-3 mb-3.5">
          <p className="font-sans text-[10.5px] font-semibold text-brand-salvia-500 tracking-[0.08em] uppercase">
            Para la familia · borrador
          </p>
          <h2 className="font-serif text-[19px] font-bold text-text-primary mt-1 mb-0.5 leading-tight tracking-tight">
            Resumen semanal de Mateo
          </h2>
          <p className="font-sans text-[11.5px] text-text-muted">
            Semana del 28 de abril · Lic. Ana García
          </p>
        </div>

        {/* Section: Cómo llegó */}
        <div className="mb-3">
          <p className="font-serif text-[11px] font-bold text-text-secondary tracking-[0.06em] uppercase mb-1">
            Cómo llegó esta semana
          </p>
          <p className="font-serif text-[12.5px] leading-[1.6] text-text-primary">
            {usedAna ? (
              <>
                Mateo es una{" "}
                <em className="not-italic bg-brand-salvia-100 text-brand-salvia-600 px-[3px] rounded-[3px]">
                  persona autista
                </em>{" "}
                de ocho años. {anaText.trim()}
              </>
            ) : (
              <>
                Mateo es una{" "}
                <em className="not-italic bg-brand-salvia-100 text-brand-salvia-600 px-[3px] rounded-[3px]">
                  persona autista
                </em>{" "}
                de ocho años. Esta semana trajo su agenda visual a las dos
                sesiones y participó en la rutina de saludo que practicamos en
                marzo.
              </>
            )}
          </p>
        </div>

        {/* Section: Lo que logró */}
        <div className="mb-3">
          <p className="font-serif text-[11px] font-bold text-text-secondary tracking-[0.06em] uppercase mb-1">
            Lo que logró
          </p>
          <p className="font-serif text-[12.5px] leading-[1.6] text-text-primary">
            <em className="not-italic bg-brand-salvia-100 text-brand-salvia-600 px-[3px] rounded-[3px]">
              Logró
            </em>{" "}
            sostener atención en una tarea por seis minutos y pedir un descanso
            usando su tarjeta. Volvió a la tarea por su cuenta.
          </p>
        </div>

        {/* Section: La próxima semana */}
        <div className="mb-3">
          <p className="font-serif text-[11px] font-bold text-text-secondary tracking-[0.06em] uppercase mb-1">
            La próxima semana
          </p>
          <p className="font-serif text-[12.5px] leading-[1.6] text-text-primary">
            <em className="not-italic bg-brand-salvia-100 text-brand-salvia-600 px-[3px] rounded-[3px]">
              Vamos a practicar
            </em>{" "}
            pedir descanso cuando hay otras personas en la sala. Misma hora,
            miércoles 17:00.
          </p>
        </div>
      </div>

      {/* Footer — no download button per spec */}
      <div className="px-8 py-3 border-t border-surface-border flex items-center">
        <span className="font-sans text-[10.5px] text-ink-300">
          Borrador · revisas tú antes de enviar
        </span>
      </div>
    </div>
  );
}
