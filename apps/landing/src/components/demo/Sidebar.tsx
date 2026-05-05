// Sidebar.tsx — App sidebar: brand mark, user info, nav links.
// Pure presentational — section prop drives the active nav item.

import { CalendarIcon, FileTextIcon, UserIcon, MessageSquareIcon } from "lucide-react";

interface Props {
  readonly section: "agenda" | "notas";
}

const NAV_ITEMS = [
  { id: "agenda" as const, label: "Agenda", Icon: CalendarIcon },
  { id: "notas" as const, label: "Notas", Icon: FileTextIcon },
  { id: "pacientes" as const, label: "Pacientes", Icon: UserIcon },
  { id: "familia" as const, label: "Familias", Icon: MessageSquareIcon },
] as const;

export function Sidebar({ section }: Props) {
  return (
    <aside className="bg-surface-alt border-r border-surface-border px-3.5 py-4 flex flex-col gap-1">
      {/* Brand */}
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

      {/* Therapist identity */}
      <div className="px-2.5 pb-2.5 mb-1 border-b border-surface-border">
        <p className="font-sans text-[13px] font-semibold text-text-primary">Lic. Ana García</p>
        <p className="font-sans text-[11px] text-text-muted mt-0.5">Psicología · TEA</p>
      </div>

      {/* Nav */}
      {NAV_ITEMS.map(({ id, label, Icon }) => {
          const active = id === "agenda" ? section === "agenda" : id === "notas" ? section === "notas" : false;
        return (
          <div
            key={id}
            className={
              "flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-sans text-[13px] " +
              (active
                ? "bg-surface text-brand-salvia-600 font-semibold shadow-sm"
                : "text-text-secondary font-medium")
            }
            aria-current={active ? "page" : undefined}
          >
            <Icon size={14} strokeWidth={1.75} aria-hidden={true} />
            {label}
          </div>
        );
      })}

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
    </aside>
  );
}
