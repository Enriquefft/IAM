// AgendaFrame.tsx — Pure presentational agenda-idle frame.
// All strings are verbatim from Demo.html (lines 1015-1072).
// No FloatingCards. No interactive elements.

import {
  CalendarIcon,
  FileTextIcon,
  MessageSquareIcon,
  CheckIcon,
} from "lucide-react";

interface SessionRow {
  readonly time: string;
  readonly name: string;
  readonly meta: string;
  readonly tagKind: "listo" | "pending" | "confirmed";
  readonly tag: string;
}

const SESSIONS: readonly SessionRow[] = [
  { time: "14:00",    name: "Lucía P.",  meta: "Sesión 6 · 50 min",        tagKind: "listo",   tag: "Listo" },
  { time: "15:00",    name: "Tomás R.",  meta: "Primera sesión · 60 min",   tagKind: "listo",   tag: "Listo" },
  { time: "16:00",    name: "Mateo R.",  meta: "Sesión 14 · 50 min",        tagKind: "pending", tag: "Cerrada · nota pendiente" },
  { time: "Mar 10:00", name: "Sofía B.", meta: "Sesión 9 · próximo martes", tagKind: "confirmed", tag: "Confirmada" },
  { time: "Lun 8:00", name: "Diego R.",  meta: "Sesión 4 · próximo lunes",  tagKind: "confirmed", tag: "Confirmada" },
] as const satisfies readonly SessionRow[];

export function AgendaFrame() {
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

          {/* Logo row */}
          <div className="flex items-center gap-2 px-1.5 pb-3.5">
            {/* Mark inline SVG — colors via currentColor / CSS vars matching Mark.astro */}
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

          {/* Active nav: Agenda */}
          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-surface text-brand-salvia-600 font-sans text-[13px] font-semibold shadow-sm">
            <CalendarIcon size={14} strokeWidth={1.75} aria-hidden={true} />
            Agenda
          </div>

          <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-transparent text-text-secondary font-sans text-[13px] font-medium">
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

          {/* Profile footer */}
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

        {/* Main content */}
        <div className="px-5 py-4.5 flex flex-col gap-3.5">

          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-sans text-lg font-bold text-text-primary">Agenda</h2>
              <p className="font-sans text-[11px] text-text-muted">Viernes · 17:02 · cuatro sesiones cerradas</p>
            </div>
          </div>

          {/* Session list */}
          <div className="flex flex-col gap-2">
            {SESSIONS.map((s) => (
              <SessionRowItem key={s.name} row={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRowItem({ row }: { readonly row: SessionRow }) {
  const tagClass =
    row.tagKind === "listo"
      ? "bg-brand-salvia-100 text-brand-salvia-600"
      : row.tagKind === "pending"
        ? "bg-brand-terra-100 text-brand-terra-600"
        : "bg-brand-salvia-100 text-brand-salvia-600";

  return (
    <div className="grid grid-cols-[56px_1fr_auto] items-center gap-3.5 px-3 py-2.5 rounded-[10px] border border-transparent">
      <div className="text-center">
        <p className="font-sans text-[13px] font-semibold text-text-primary">{row.time}</p>
      </div>
      <div>
        <p className="font-sans text-[13px] font-semibold text-text-primary">{row.name}</p>
        <p className="font-sans text-[11px] text-text-muted">{row.meta}</p>
      </div>
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-sans text-[11px] font-medium ${tagClass}`}>
        {(row.tagKind === "confirmed") && (
          <CheckIcon size={10} strokeWidth={1.75} aria-hidden={true} />
        )}
        {row.tag}
      </span>
    </div>
  );
}
