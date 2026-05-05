// PdfFrame.tsx — Pure presentational PDF summary frame for HeroLoop.
// Accepts `slideIn: boolean` prop.
// All strings verbatim from Demo.html lines 1265-1301.
// "persona autista" is italicized per Demo.html <em> usage.

interface Props {
  readonly slideIn: boolean;
}

export function PdfFrame({ slideIn }: Props): JSX.Element {
  return (
    <div
      className="bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-md"
      style={{
        transform: slideIn ? "translateX(0%)" : "translateX(100%)",
        transition: "transform 400ms cubic-bezier(0,0,0.2,1)",
      }}
    >
      {/* Chrome titlebar */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-surface-alt border-b border-surface-border">
        <span className="size-2.5 rounded-full bg-brand-terra-300" />
        <span className="size-2.5 rounded-full bg-brand-wood-300" />
        <span className="size-2.5 rounded-full bg-brand-salvia-200" />
        <div className="flex-1 h-[22px] rounded-md bg-surface border border-surface-border flex items-center gap-1.5 px-2.5 font-sans text-[11px] text-text-muted">
          app.i-am.clinic / agenda
        </div>
      </div>

      {/* PDF content area */}
      <div className="px-5 py-4.5 min-h-[360px] bg-surface flex flex-col gap-4">

        {/* PDF header */}
        <div className="pb-3 border-b border-surface-border">
          <p className="font-sans text-[10px] font-medium text-text-muted uppercase tracking-[0.6px] mb-1">
            Para la familia · borrador
          </p>
          <h2 className="font-sans text-[16px] font-bold text-text-primary leading-tight">
            Resumen semanal de Mateo
          </h2>
          <p className="font-sans text-[11px] text-text-muted mt-0.5">
            Semana del 28 de abril · Lic. Ana García
          </p>
        </div>

        {/* Section: Cómo llegó esta semana */}
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[10px] font-semibold text-text-secondary uppercase tracking-[0.5px]">
            Cómo llegó esta semana
          </p>
          <p className="font-sans text-[12px] text-text-secondary leading-relaxed">
            Mateo es una <em>persona autista</em> de ocho años. Esta semana
            trajo su agenda visual a las dos sesiones y participó en la
            rutina de saludo que practicamos en marzo.
          </p>
        </div>

        {/* Section: Lo que logró */}
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[10px] font-semibold text-text-secondary uppercase tracking-[0.5px]">
            Lo que logró
          </p>
          <p className="font-sans text-[12px] text-text-secondary leading-relaxed">
            <em>Logró</em> sostener atención en una tarea por seis minutos y
            pedir un descanso usando su tarjeta. Volvió a la tarea por su
            cuenta.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-surface-border">
          <p className="font-sans text-[10px] text-text-muted">
            Borrador · revisas tú antes de enviar
          </p>
        </div>
      </div>
    </div>
  );
}
