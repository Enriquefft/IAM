// EditorFrame.tsx — Pure presentational editor frame for HeroLoop.
// Accepts `progress` (0..1) which drives the SOAP typewriter effect.
// All strings verbatim from Demo.html lines 1004-1007, 1125-1126, 1167, 1246.

import {
  CalendarIcon,
  FileTextIcon,
  MessageSquareIcon,
  CheckIcon,
} from "lucide-react";

interface Props {
  readonly progress: number;
}

const SOAP_CONTENT = {
  S: "Mateo llega tranquilo. Trajo su agenda visual. Arrancamos con la rutina de saludo que practicamos.",
  O: "Atendió a la tarea de categorías por seis minutos seguidos. Pidió un descanso con su tarjeta. Volvió por su cuenta.",
  A: "Logró sostener atención más tiempo que la semana pasada. La tarjeta de descanso le funciona como apoyo.",
  P: "Vamos a practicar pedir descanso en grupo. Cita el miércoles 17:00.",
} as const satisfies Record<string, string>;

const SOAP_LABELS = {
  S: "Subjetivo",
  O: "Objetivo",
  A: "Análisis",
  P: "Plan",
} as const satisfies Record<string, string>;

const SOAP_FIELDS = ["S", "O", "A", "P"] as const;
type SoapKey = (typeof SOAP_FIELDS)[number];

function sliceProgress(text: string, progress: number): string {
  return text.slice(0, Math.floor(text.length * progress));
}

export function EditorFrame({ progress }: Props): JSX.Element {
  return (
    <div className="bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-md">

      {/* Chrome titlebar */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-surface-alt border-b border-surface-border">
        <span className="size-2.5 rounded-full bg-brand-terra-300" />
        <span className="size-2.5 rounded-full bg-brand-wood-300" />
        <span className="size-2.5 rounded-full bg-brand-salvia-200" />
        <div className="flex-1 h-[22px] rounded-md bg-surface border border-surface-border flex items-center gap-1.5 px-2.5 font-sans text-[11px] text-text-muted">
          app.i-am.clinic / agenda
        </div>
      </div>

      {/* App body: sidebar + main */}
      <div className="grid grid-cols-[180px_1fr] min-h-[360px] bg-surface">

        {/* Sidebar */}
        <nav className="bg-surface-alt border-r border-surface-border px-3.5 py-4.5 flex flex-col gap-1">

          <div className="flex items-center gap-2 px-1.5 pb-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              className="h-[22px] w-[22px]"
              aria-hidden="true"
            >
              <rect width="56" height="56" rx="12" className="text-surface-alt" fill="currentColor" />
              <g transform="translate(12,12)">
                <path d="M 4 26 Q 4 4, 26 4 Q 26 22, 14 28 Q 8 30, 4 26 Z" className="text-primary" fill="currentColor" />
                <circle cx="22" cy="22" r="3.6" className="text-accent" fill="currentColor" />
              </g>
            </svg>
            <span className="font-sans text-sm font-bold text-text-primary">i-am.clinic</span>
          </div>

          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-transparent text-text-secondary font-sans text-[13px] font-medium">
            <CalendarIcon size={14} strokeWidth={1.75} aria-hidden={true} />
            Agenda
          </div>

          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-surface text-brand-salvia-600 font-sans text-[13px] font-semibold shadow-sm">
            <FileTextIcon size={14} strokeWidth={1.75} aria-hidden={true} />
            Notas
          </div>

          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-transparent text-text-secondary font-sans text-[13px] font-medium">
            <MessageSquareIcon size={14} strokeWidth={1.75} aria-hidden={true} />
            Pacientes
          </div>

          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-transparent text-text-secondary font-sans text-[13px] font-medium">
            <CheckIcon size={14} strokeWidth={1.75} aria-hidden={true} />
            Familias
          </div>

          <div className="mt-auto pt-3.5 border-t border-surface-border flex items-center gap-2">
            <div className="grid place-items-center h-7 w-7 rounded-full bg-brand-terra-100 text-brand-terra-600 font-sans font-semibold text-[11px]">
              AG
            </div>
            <div className="font-sans text-[12px] leading-snug">
              <p className="font-semibold text-text-primary truncate">Lic. Ana García</p>
              <p className="text-text-muted truncate">Psicología · TEA</p>
            </div>
          </div>
        </nav>

        {/* Editor main */}
        <div className="px-5 py-4.5 flex flex-col gap-3">

          {/* Editor header */}
          <div>
            <p className="font-sans text-[15px] font-bold text-text-primary">Mateo R. · Sesión 14</p>
            <p className="font-sans text-[11px] text-text-muted">Hoy 16:00 · plantilla SOAP</p>
          </div>

          {/* SOAP grid */}
          <div className="grid grid-cols-[24px_1fr] gap-x-2 gap-y-2.5">
            {SOAP_FIELDS.map((f: SoapKey) => (
              <SoapRow
                key={f}
                fieldKey={f}
                text={sliceProgress(SOAP_CONTENT[f], progress)}
                label={SOAP_LABELS[f]}
              />
            ))}
          </div>

          {/* Action row — static span styled like button, NOT a real button */}
          <div className="flex items-center gap-2 pt-1">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-salvia-100 text-brand-salvia-600 font-sans text-[12px] font-semibold cursor-default">
              Resumen para familia →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SoapRow({
  fieldKey,
  text,
  label,
}: {
  readonly fieldKey: string;
  readonly text: string;
  readonly label: string;
}): JSX.Element {
  return (
    <>
      <div
        className="font-sans text-[11px] font-bold text-brand-salvia-600 pt-0.5 select-none"
        title={label}
      >
        {fieldKey}
      </div>
      <div className="font-sans text-[12px] text-text-secondary leading-snug min-h-[16px]">
        {text}
      </div>
    </>
  );
}
