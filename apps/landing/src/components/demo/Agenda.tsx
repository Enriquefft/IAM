// Agenda.tsx — Agenda screen within the demo stage.
// Renders the session list with Mateo row in clickable target state when mateoClosed=false.
// All strings and row data from Demo.html:1048-1105 and demo-content.ts.

import { CheckIcon } from "lucide-react";
import {
  AGENDA_SESSIONS_BASE,
  MATEO_PENDING,
  MATEO_CLOSED,
  SOFIA_MOVED,
} from "./demo-content";

interface Props {
  readonly pulse: boolean;
  readonly mateoClosed: boolean;
  readonly sofiaMoved: boolean;
  readonly onClickMateo?: () => void;
  readonly mateoRowRef?: React.RefObject<HTMLDivElement | null>;
}

type TagKind = "ok" | "note" | "moved";

interface SessionRow {
  readonly time: string;
  readonly name: string;
  readonly meta: string;
  readonly tagKind: TagKind;
  readonly tag: string;
  readonly target?: boolean;
  readonly muted?: boolean;
}

export function Agenda({
  pulse,
  mateoClosed,
  sofiaMoved,
  onClickMateo,
  mateoRowRef,
}: Props) {
  const mateoRow: SessionRow = mateoClosed ? MATEO_CLOSED : { ...MATEO_PENDING, target: true };
  const sofiaRow: SessionRow = sofiaMoved ? { ...SOFIA_MOVED, muted: true } : AGENDA_SESSIONS_BASE[2];

  const sessions: readonly SessionRow[] = [
    AGENDA_SESSIONS_BASE[0],
    AGENDA_SESSIONS_BASE[1],
    mateoRow,
    sofiaRow,
    AGENDA_SESSIONS_BASE[3],
  ];

  return (
    <div className="px-5 py-4 flex flex-col gap-3.5 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-sans text-[19px] font-bold text-text-primary leading-tight">Agenda</h2>
          <p className="font-sans text-[12px] text-text-muted mt-0.5">Viernes · 17:02 · cuatro sesiones cerradas</p>
        </div>
        <p className="font-sans text-[12px] text-text-muted whitespace-nowrap">Vie · 1 de mayo</p>
      </div>

      {/* Session table */}
      <div className="bg-surface border border-surface-border rounded-xl overflow-hidden">
        {sessions.map((s, i) => (
          <AgendaRow
            key={i}
            row={s}
            pulse={pulse}
            mateoRowRef={s.target === true ? mateoRowRef : undefined}
            onClick={s.target === true ? onClickMateo : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function AgendaRow({
  row,
  pulse,
  mateoRowRef,
  onClick,
}: {
  readonly row: SessionRow;
  readonly pulse: boolean;
  readonly mateoRowRef: React.RefObject<HTMLDivElement | null> | undefined;
  readonly onClick: (() => void) | undefined;
}) {
  const isTarget = row.target === true;

  return (
    <div
      ref={mateoRowRef}
      className={[
        "grid grid-cols-[64px_1fr_auto] gap-3 items-center px-3.5 py-2.5",
        "border-b border-surface-border last:border-b-0",
        "transition-colors duration-[180ms] ease-out",
        isTarget ? "cursor-pointer" : "",
        isTarget && pulse ? "bg-brand-salvia-100 animate-rowPulse motion-reduce:animate-none motion-reduce:bg-brand-salvia-100" : "",
        isTarget && !pulse ? "hover:bg-brand-salvia-100" : "",
        row.muted === true ? "opacity-70" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      role={isTarget ? "button" : undefined}
      tabIndex={isTarget ? 0 : undefined}
      onKeyDown={
        isTarget && onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <p className="font-sans text-[12px] font-medium text-text-muted tabular-nums">{row.time}</p>
      <div>
        <p className="font-sans text-[13px] font-semibold text-text-primary">{row.name}</p>
        <p className="font-sans text-[11.5px] text-text-muted">{row.meta}</p>
      </div>
      <AgendaTag tagKind={row.tagKind} tag={row.tag} />
    </div>
  );
}

function AgendaTag({ tagKind, tag }: { readonly tagKind: TagKind; readonly tag: string }) {
  if (tagKind === "note") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-sans text-[10.5px] font-semibold bg-brand-terra-100 text-brand-terra-600 tracking-wide uppercase whitespace-nowrap">
        <span className="w-[5px] h-[5px] rounded-full bg-brand-terra-500 flex-shrink-0" aria-hidden="true" />
        {tag}
      </span>
    );
  }
  if (tagKind === "moved") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-sans text-[10.5px] font-semibold bg-brand-salvia-100 text-brand-salvia-600 tracking-wide uppercase whitespace-nowrap">
        {tag}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-sans text-[10.5px] font-semibold bg-brand-salvia-100 text-brand-salvia-600 tracking-wide uppercase whitespace-nowrap">
      <CheckIcon size={9} strokeWidth={2.5} aria-hidden={true} />
      {tag}
    </span>
  );
}
