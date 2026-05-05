// ChapterStrip.tsx — Chapter navigation row + subtitle + Reiniciar button.
// Demo.html:1868-1928.

import { STATES } from "./demo-machine";
import { CHAPTER_LABELS, CHAPTER_TIPS, CHAPTER_SUBTITLES } from "./demo-content";

interface Props {
  readonly stateIdx: number;
  readonly reducedMotion: boolean;
  readonly onJumpTo: (idx: number) => void;
  readonly onRestart: () => void;
  readonly onAdvance: () => void;
}

export function ChapterStrip({
  stateIdx,
  reducedMotion,
  onJumpTo,
  onRestart,
  onAdvance,
}: Props): JSX.Element {
  // STATES is `as const satisfies` so element types preserve literal id union.
  const currentState = STATES[stateIdx];
  if (!currentState) return <div />;
  const currentId = currentState.id;

  return (
    <div className="mt-3.5 flex justify-between items-start gap-4">
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        {/* Chapter buttons */}
        <nav
          aria-label="Capítulos de la demo"
          className="flex items-stretch gap-1 flex-wrap"
        >
          {STATES.map((s, i) => {
            const isDone = i < stateIdx;
            const isActive = i === stateIdx;
            const label = CHAPTER_LABELS[s.id];
            const tip = CHAPTER_TIPS[s.id];

            return (
              <span key={s.id} className="inline-flex items-center">
                {i > 0 && (
                  <span className="text-surface-border mx-1 select-none" aria-hidden="true">
                    ·
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => onJumpTo(i)}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`Capítulo ${i + 1}: ${label} — ${tip}`}
                  className={[
                    "relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md",
                    "font-sans text-[12.5px] transition-colors duration-[150ms]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
                    "group",
                    isActive
                      ? "text-text-primary font-semibold"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-alt",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-grid place-items-center w-[18px] h-[18px] rounded-full",
                      "font-sans text-[10.5px] font-semibold tabular-nums transition-colors duration-[200ms]",
                      isActive
                        ? "bg-brand-salvia-500 text-white"
                        : isDone
                          ? "bg-brand-salvia-200 text-brand-salvia-600"
                          : "bg-surface-border text-text-muted",
                    ].join(" ")}
                  >
                    {i + 1}
                  </span>
                  <span>{label}</span>

                  {/* Tooltip */}
                  <span
                    role="tooltip"
                    className={[
                      "absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 translate-y-1",
                      "w-max max-w-[240px] px-3 py-2",
                      "bg-ink-900 text-page font-sans text-[12px] font-medium leading-[1.4] rounded-lg shadow-md",
                      "opacity-0 pointer-events-none transition-[opacity,transform] duration-[180ms] ease-out text-center",
                      "group-hover:opacity-100 group-hover:translate-y-0",
                      "group-focus-visible:opacity-100 group-focus-visible:translate-y-0",
                      "after:absolute after:top-full after:left-1/2 after:-translate-x-1/2",
                      "after:border-[5px] after:border-transparent after:border-t-ink-900",
                    ].join(" ")}
                  >
                    {tip}
                  </span>
                </button>
              </span>
            );
          })}
        </nav>

        {/* Subtitle (decorative — DemoApp owns the single aria-live announcer) */}
        <p className="font-sans text-[12.5px] text-text-muted leading-[1.45] tracking-[-0.005em] min-h-[18px]">
          {CHAPTER_SUBTITLES[currentId]}
        </p>

        {/* Reduced-motion advance button */}
        {reducedMotion && (
          <button
            type="button"
            onClick={onAdvance}
            className="mt-1 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-[12.5px] font-semibold bg-brand-salvia-100 text-brand-salvia-600 border border-brand-salvia-200 hover:bg-brand-salvia-200 transition-colors duration-[150ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2"
          >
            Avanzar →
          </button>
        )}
      </div>

      {/* Reiniciar */}
      <button
        type="button"
        onClick={onRestart}
        aria-label="Reiniciar la demo"
        className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-sans text-[12.5px] text-text-muted hover:text-text-primary hover:bg-surface-alt transition-colors duration-[150ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2"
      >
        ↻ Reiniciar
      </button>
    </div>
  );
}
