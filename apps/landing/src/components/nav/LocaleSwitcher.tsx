"use client";

/**
 * LocaleSwitcher — country picker rendered in the nav.
 *
 * Behavior:
 *   1. Persist user's explicit choice in `iam:locale` cookie (1 year, SameSite=Lax).
 *   2. Replace the first path segment of the current URL with the new locale path.
 *   3. Preserve search + hash so deep-links (#waitlist, ?ref=…) survive the swap.
 *
 * The middleware (`src/middleware.ts`) reads the same cookie, so future visits
 * to `/` shortcut straight to the chosen locale.
 *
 * Two visual variants — `compact` for the desktop nav row, `block` for the
 * mobile drawer — share the same option list and selection logic.
 */

import * as React from "react";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import {
  SUPPORTED_LOCALE_PATHS,
  PATH_TO_LOCALE,
  isLocalePath,
  type LocalePath,
} from "@/lib/i18n/locales";
import { COUNTRIES } from "@/lib/i18n/countries";

interface Option {
  readonly path: LocalePath;
  readonly flag: string;
  readonly displayName: string;
  readonly isoUpper: string;
}

const FLAG_BY_PATH: Readonly<Record<LocalePath, string>> = {
  pe: "🇵🇪",
  mx: "🇲🇽",
  ar: "🇦🇷",
  co: "🇨🇴",
  cl: "🇨🇱",
};

const OPTIONS: ReadonlyArray<Option> = SUPPORTED_LOCALE_PATHS.map((path) => {
  const country = COUNTRIES[PATH_TO_LOCALE[path]];
  return {
    path,
    flag: FLAG_BY_PATH[path],
    displayName: country.displayName,
    isoUpper: country.isoCountry,
  };
});

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function setLocaleCookie(path: LocalePath): void {
  const isHttps = window.location.protocol === "https:";
  document.cookie = [
    `iam:locale=${path}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE_SECONDS}`,
    "SameSite=Lax",
    isHttps ? "Secure" : null,
  ]
    .filter((p): p is string => p !== null)
    .join("; ");
}

function swapLocaleSegment(pathname: string, next: LocalePath): string {
  const parts = pathname.split("/");
  // pathname always starts with "/", so parts[0] is "".
  const first = parts[1] ?? "";
  if (isLocalePath(first)) {
    parts[1] = next;
  } else {
    parts.splice(1, 0, next);
  }
  const result = parts.join("/");
  return result === "" ? `/${next}` : result;
}

interface Props {
  readonly currentPath: LocalePath;
  readonly variant?: "compact" | "block";
}

export default function LocaleSwitcher({
  currentPath,
  variant = "compact",
}: Props): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const menuId = React.useId();

  const current = OPTIONS.find((o) => o.path === currentPath) ?? OPTIONS[0];
  if (current === undefined) {
    throw new Error("LocaleSwitcher: no options available");
  }

  const close = React.useCallback((): void => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent): void => {
      if (rootRef.current === null) return;
      if (!(event.target instanceof Node)) return;
      if (rootRef.current.contains(event.target)) return;
      close();
    };
    const handleKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  const handleSelect = (next: LocalePath): void => {
    if (next === currentPath) {
      close();
      return;
    }
    setLocaleCookie(next);
    const target =
      swapLocaleSegment(window.location.pathname, next) +
      window.location.search +
      window.location.hash;
    window.location.assign(target);
  };

  const triggerClass =
    variant === "compact"
      ? "inline-flex h-10 items-center gap-2 rounded-base border border-surface-border bg-transparent px-3 text-small font-medium text-text-primary hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page motion-reduce:transition-none"
      : "flex w-full items-center justify-between gap-2 rounded-base border border-surface-border bg-transparent px-4 py-3 text-label font-medium text-text-primary hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const menuClass =
    variant === "compact"
      ? "absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-base border border-surface-border bg-page py-1 shadow-md"
      : "absolute left-0 right-0 top-full z-50 mt-2 rounded-base border border-surface-border bg-page py-1 shadow-md";

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Cambiar país (actual: ${current.displayName})`}
        onClick={() => setOpen((v) => !v)}
        className={triggerClass}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.isoUpper}</span>
        <ChevronDownIcon size={14} strokeWidth={2} aria-hidden />
      </button>

      {open ? (
        <ul id={menuId} role="listbox" className={menuClass}>
          {OPTIONS.map((opt) => {
            const selected = opt.path === currentPath;
            return (
              <li key={opt.path}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => handleSelect(opt.path)}
                  className="flex w-full items-center gap-3 px-3 py-2 text-left text-small text-text-primary hover:bg-surface-alt focus-visible:bg-surface-alt focus-visible:outline-none"
                >
                  <span aria-hidden="true" className="text-base">
                    {opt.flag}
                  </span>
                  <span className="flex-1">{opt.displayName}</span>
                  {selected ? (
                    <CheckIcon
                      size={14}
                      strokeWidth={2.25}
                      className="text-primary"
                      aria-hidden
                    />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
