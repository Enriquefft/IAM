// DemoApp.tsx — Top-level React island for the /demo page.
// Drives the 6-state demo machine: timers, keyboard, tilt handoff, visibility.

import { useEffect, useReducer, useRef, useState, useCallback } from "react";
import { demoReducer, INITIAL_STATE, STATES } from "./demo-machine";
import type { AutoFields, DemoStateId } from "./demo-machine";
import type { SoapKey } from "./demo-content";
import { SOAP_DEFAULTS, SOAP_FIELDS, HINTS, POST_DEMO, CHAPTER_LABELS } from "./demo-content";
import { readTiltHandoff, clearTiltHandoff } from "@/lib/tilt-handoff";

import { Sidebar } from "./Sidebar";
import { Agenda } from "./Agenda";
import { Editor } from "./Editor";
import { ParentPdf } from "./ParentPdf";
import { RebookToast } from "./RebookToast";
import { Closing } from "./Closing";
import { HintPopover } from "./HintPopover";
import { ChapterStrip } from "./ChapterStrip";
import { PostDemo } from "./PostDemo";

// ── Timer bookkeeping ─────────────────────────────────────────────────────────

type TimerId = "hint" | "auto" | "autoType" | "resumenPress" | "slotWa" | "slotAdvance" | "closingPost" | "copyToast";

function useTimerMap() {
  const timers = useRef(new Map<TimerId, ReturnType<typeof setTimeout>>());

  const schedule = useCallback((id: TimerId, fn: () => void, ms: number) => {
    const existing = timers.current.get(id);
    if (existing !== undefined) clearTimeout(existing);
    timers.current.set(id, setTimeout(fn, ms));
  }, []);

  const cancel = useCallback((...ids: TimerId[]) => {
    for (const id of ids) {
      const t = timers.current.get(id);
      if (t !== undefined) {
        clearTimeout(t);
        timers.current.delete(id);
      }
    }
  }, []);

  const cancelAll = useCallback(() => {
    for (const t of timers.current.values()) clearTimeout(t);
    timers.current.clear();
  }, []);

  useEffect(() => () => { cancelAll(); }, [cancelAll]);

  return { schedule, cancel, cancelAll };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function DemoApp(): JSX.Element {
  const [appState, dispatch] = useReducer(demoReducer, INITIAL_STATE);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [miniToast, setMiniToast] = useState<string | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const { schedule, cancel, cancelAll } = useTimerMap();

  // Refs for hint anchor + keyboard
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const stageBodyRef = useRef<HTMLDivElement>(null);
  const mateoRowRef = useRef<HTMLDivElement>(null);
  const subjetivoRef = useRef<HTMLDivElement>(null);
  const resumenBtnRef = useRef<HTMLButtonElement>(null);
  const micRef = useRef<HTMLButtonElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  const stateIdx = appState.stateIdx;
  const currentState = STATES[stateIdx];

  // ── Reduced-motion detection ──────────────────────────────────────────────

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // ── Tilt handoff ──────────────────────────────────────────────────────────

  useEffect(() => {
    const handoff = readTiltHandoff();
    clearTiltHandoff();
    if (!handoff) return;
    if (reducedMotion) return;

    const { x, y } = handoff;
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg)`,
      transition: "none",
    });
    const raf = requestAnimationFrame(() => {
      schedule("hint", () => {
        setTiltStyle({
          transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 600ms cubic-bezier(0.32,0.72,0,1)",
        });
        schedule("auto", () => setTiltStyle({}), 620);
      }, 0);
    });
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Visibility change ─────────────────────────────────────────────────────

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onVis = () => {
      if (document.hidden) {
        cancelAll();
      } else {
        setRestartKey((k) => k + 1);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [cancelAll]);

  // ── Per-state timer driver ─────────────────────────────────────────────────

  useEffect(() => {
    if (!currentState) return;
    cancel("hint", "auto");

    if (currentState.hintMs !== null && !reducedMotion) {
      schedule("hint", () => dispatch({ type: "showHint" }), currentState.hintMs);
    }

    if (!reducedMotion) {
      schedule("auto", () => handleAutoAdvance(currentState.id), currentState.autoMs);
    }
  // handleAutoAdvance is stable because all deps are captured at call time
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateIdx, reducedMotion, restartKey]);

  // ── Auto-type SOAP fill ───────────────────────────────────────────────────

  const simulateFillSOAP = useCallback(
    (includeS: boolean, currentAnaText: string) => {
      // SOAP_FIELDS is `readonly ["S","O","A","P"]`; `.filter` with a typed
      // predicate preserves the SoapKey element type without any cast.
      const isNonS = (k: SoapKey): k is Exclude<SoapKey, "S"> => k !== "S";
      const order: readonly SoapKey[] = includeS
        ? SOAP_FIELDS
        : SOAP_FIELDS.filter(isNonS);

      const accumulated: Partial<Record<SoapKey, string>> = {};
      const done = new Set<SoapKey>();

      if (!includeS && currentAnaText) {
        accumulated.S = currentAnaText;
        done.add("S");
      } else if (!includeS) {
        accumulated.S = SOAP_DEFAULTS.S;
        done.add("S");
      }

      let fi = 0;
      let ci = 0;

      const tick = () => {
        if (fi >= order.length) {
          const finalDone = new Set<SoapKey>(SOAP_FIELDS);
          const finalFields: AutoFields = {
            S: accumulated.S ?? SOAP_DEFAULTS.S,
            O: SOAP_DEFAULTS.O,
            A: SOAP_DEFAULTS.A,
            P: SOAP_DEFAULTS.P,
            typingField: null,
            doneFields: finalDone,
          };
          dispatch({ type: "autoFillStep", fields: finalFields });
          dispatch({ type: "setMic", on: false });
          schedule("auto", () => dispatch({ type: "advance" }), 400);
          return;
        }
        const f = order[fi];
        if (f === undefined) return;
        const target = SOAP_DEFAULTS[f];
        ci += reducedMotion ? target.length : 2;
        if (ci >= target.length) {
          accumulated[f] = target;
          done.add(f);
          ci = 0;
          fi += 1;
        } else {
          accumulated[f] = target.slice(0, ci);
        }
        const fields: AutoFields = {
          S: accumulated.S,
          O: accumulated.O,
          A: accumulated.A,
          P: accumulated.P,
          typingField: reducedMotion ? null : f,
          doneFields: new Set(done),
        };
        dispatch({ type: "autoFillStep", fields });
        if (reducedMotion) {
          tick();
        } else {
          schedule("autoType", tick, 40);
        }
      };
      tick();
    },
    [reducedMotion, schedule],
  );

  // ── Auto-advance per state ────────────────────────────────────────────────

  const handleAutoAdvance = useCallback(
    (id: string) => {
      if (id === "agenda") {
        dispatch({ type: "clickMateo" });
      } else if (id === "editor-empty") {
        dispatch({ type: "setMic", on: true });
        simulateFillSOAP(true, "");
      } else if (id === "editor-full") {
        dispatch({ type: "clickResumen" });
        schedule("resumenPress", () => {
          dispatch({ type: "setResumenPressed", pressed: false });
          dispatch({ type: "advance" });
        }, 220);
      } else if (id === "pdf-held") {
        dispatch({ type: "advance" });
      } else if (id === "rebook") {
        dispatch({ type: "pickSlot", idx: 0 });
        schedule("slotWa", () => dispatch({ type: "showWaConfirm" }), 600);
        schedule("slotAdvance", () => dispatch({ type: "advance" }), 2000);
      } else if (id === "closing") {
        dispatch({ type: "showPost" });
      }
    },
    [simulateFillSOAP, schedule],
  );

  // ── User-typed Subjetivo: after 1.1s pause, fill O/A/P ───────────────────

  useEffect(() => {
    const id = currentState?.id;
    if (id !== "editor-empty") return;
    if (!appState.anaText || appState.anaText.length < 8) return;

    cancel("autoType");
    schedule("autoType", () => {
      const sFields: AutoFields = {
        S: appState.anaText,
        O: undefined,
        A: undefined,
        P: undefined,
        typingField: null,
        doneFields: new Set<SoapKey>(["S"]),
      };
      dispatch({ type: "autoFillStep", fields: sFields });
      simulateFillSOAP(false, appState.anaText);
    }, 1100);

    return () => cancel("autoType");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.anaText, stateIdx]);

  // ── Keyboard handler ──────────────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        if (e.key === " " || e.key === "Enter") {
          // Don't hijack Space/Enter when focus is on an interactive element.
          // instanceof narrows e.target to HTMLElement without a cast.
          const target = e.target;
          if (target instanceof HTMLElement) {
            if (
              target.tagName === "BUTTON" ||
              target.tagName === "A" ||
              target.getAttribute("contenteditable") === "true"
            ) {
              return;
            }
          }
        }
        e.preventDefault();
        cancelAll();
        dispatch({ type: "advance" });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        cancelAll();
        dispatch({ type: "jumpTo", idx: stateIdx - 1 });
      } else if (e.key === "Escape") {
        e.preventDefault();
        cancelAll();
        dispatch({ type: "jumpTo", idx: STATES.length - 1 });
      }
    },
    [stateIdx, cancelAll],
  );

  // ── Action handlers ───────────────────────────────────────────────────────

  const handleClickMateo = useCallback(() => {
    cancelAll();
    dispatch({ type: "clickMateo" });
  }, [cancelAll]);

  const handleClickMic = useCallback(() => {
    if (currentState?.id !== "editor-empty") return;
    if (appState.micOn) {
      dispatch({ type: "setMic", on: false });
      return;
    }
    cancelAll();
    dispatch({ type: "setMic", on: true });
    simulateFillSOAP(true, "");
  }, [currentState?.id, appState.micOn, cancelAll, simulateFillSOAP]);

  const handleClickResumen = useCallback(() => {
    if (currentState?.id !== "editor-full") return;
    cancelAll();
    dispatch({ type: "clickResumen" });
    schedule("resumenPress", () => {
      dispatch({ type: "setResumenPressed", pressed: false });
      dispatch({ type: "advance" });
    }, 220);
  }, [currentState?.id, cancelAll, schedule]);

  const handlePickSlot = useCallback(
    (idx: number) => {
      if (currentState?.id !== "rebook") return;
      cancelAll();
      dispatch({ type: "pickSlot", idx });
      schedule("slotWa", () => dispatch({ type: "showWaConfirm" }), 600);
      schedule("slotAdvance", () => dispatch({ type: "advance" }), 2000);
    },
    [currentState?.id, cancelAll, schedule],
  );

  const handleJumpTo = useCallback(
    (idx: number) => {
      cancelAll();
      dispatch({ type: "jumpTo", idx });
    },
    [cancelAll],
  );

  const handleRestart = useCallback(() => {
    cancelAll();
    dispatch({ type: "restart" });
    setMiniToast(null);
  }, [cancelAll]);

  const handleAdvance = useCallback(() => {
    cancelAll();
    dispatch({ type: "advance" });
  }, [cancelAll]);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(POST_DEMO.copyUrl);
    } catch {
      /* clipboard not available */
    }
    setMiniToast("Enlace copiado");
    schedule("copyToast", () => setMiniToast(null), 2000);
  }, [schedule]);

  // ── Phase derivations ─────────────────────────────────────────────────────

  // currentState comes from STATES which is `as const satisfies readonly DemoState[]`.
  // Optional chain + nullish-coalesce yields DemoStateId without any cast.
  const id: DemoStateId = currentState?.id ?? "agenda";
  const showAgenda1 = id === "agenda";
  const isEditorEmpty = id === "editor-empty";
  const isEditorFull = id === "editor-full";
  const showEditor = isEditorEmpty || isEditorFull;
  const showAgenda2 = id === "rebook" || id === "closing";
  const pdfVisible = id === "pdf-held" || id === "rebook";
  const pdfSide = id === "rebook";
  const closingVisible = id === "closing";
  const section: "agenda" | "notas" = showEditor ? "notas" : "agenda";
  const stepNum = Math.min(stateIdx + 1, STATES.length);
  const hintText = HINTS[id];
  const showHint = appState.hintVisible && hintText !== null && id !== "pdf-held";
  const toastVisible = id === "rebook" || id === "closing";

  return (
    <>
      {/* Stage wrapper */}
      <div
        className="max-w-page mx-auto px-8 pb-14 pt-7"
        ref={stageContainerRef}
      >
        {/* Stage meta */}
        <div className="flex justify-between items-end mb-5 gap-6 flex-wrap">
          <div>
            <h1 className="font-sans font-bold text-[clamp(1.5rem,2.4vw,1.875rem)] tracking-[-0.01em] text-text-primary">
              La tarde de Ana
            </h1>
            <p className="font-sans text-[15px] text-text-muted max-w-[520px] mt-1.5">
              Una tarde de viernes en consulta. Cliquea, escribe, descargá el ejemplo. Sin sonido, sin demo de ventas.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 font-sans text-[12px] font-medium text-brand-salvia-600 px-3 py-1.5 border border-brand-salvia-200 rounded-full bg-brand-salvia-100">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-salvia-400" aria-hidden="true" />
            Demo guiado · sin sonido
          </span>
        </div>

        {/* Stage frame */}
        <div
          role="region"
          aria-roledescription="Demostración interactiva"
          aria-label="La tarde de Ana"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="relative bg-surface-alt border border-surface-border rounded-lg shadow-lg overflow-hidden h-[600px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2"
          style={tiltStyle}
        >
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2.5 px-4 py-3 bg-surface-alt border-b border-surface-border">
            <span className="size-[11px] rounded-full bg-brand-terra-300" aria-hidden="true" />
            <span className="size-[11px] rounded-full bg-brand-wood-300" aria-hidden="true" />
            <span className="size-[11px] rounded-full bg-brand-salvia-200" aria-hidden="true" />
            <div className="flex-1 mx-auto max-w-[360px] h-[22px] rounded-full bg-page border border-surface-border flex items-center justify-center px-3 font-sans text-[12px] text-text-muted">
              app.i-am.clinic / {section === "notas" ? "notas/mateo" : "agenda"}
            </div>
            <span className="font-sans text-[11px] font-medium text-text-muted bg-page border border-surface-border rounded-full px-2.5 py-1 tabular-nums whitespace-nowrap">
              {stepNum} / {STATES.length}
            </span>
          </div>

          {/* Stage body */}
          <div
            ref={stageBodyRef}
            className="relative w-full overflow-hidden bg-page"
            style={{ height: "calc(100% - 44px)" }}
          >
            {/* App layout */}
            <div className="grid grid-cols-[196px_1fr] w-full h-full">
              <Sidebar section={section} />

              {showAgenda1 && (
                <Agenda
                  pulse={appState.hintVisible && !reducedMotion}
                  mateoClosed={false}
                  sofiaMoved={false}
                  onClickMateo={handleClickMateo}
                  mateoRowRef={mateoRowRef}
                />
              )}

              {isEditorEmpty && (
                <Editor
                  key={`editor-empty:${restartKey}`}
                  stateId="editor-empty"
                  anaText={appState.anaText}
                  autoFields={appState.autoFields}
                  micOn={appState.micOn}
                  resumenPressed={appState.resumenPressed}
                  reducedMotion={reducedMotion}
                  onTypeSubjetivo={(text) => dispatch({ type: "typeSubjetivo", text })}
                  onClickMic={handleClickMic}
                  onClickResumen={handleClickResumen}
                  micRef={micRef}
                  resumenBtnRef={resumenBtnRef}
                  subjetivoRef={subjetivoRef}
                />
              )}
              {isEditorFull && (
                <Editor
                  key={`editor-full:${restartKey}`}
                  stateId="editor-full"
                  anaText={appState.anaText}
                  autoFields={appState.autoFields}
                  micOn={appState.micOn}
                  resumenPressed={appState.resumenPressed}
                  reducedMotion={reducedMotion}
                  onTypeSubjetivo={(text) => dispatch({ type: "typeSubjetivo", text })}
                  onClickMic={handleClickMic}
                  onClickResumen={handleClickResumen}
                  micRef={micRef}
                  resumenBtnRef={resumenBtnRef}
                  subjetivoRef={subjetivoRef}
                />
              )}

              {showAgenda2 && (
                <Agenda
                  pulse={false}
                  mateoClosed={true}
                  sofiaMoved={appState.pickedSlot !== null}
                />
              )}
            </div>

            {/* PDF panel */}
            <ParentPdf
              visible={pdfVisible}
              side={pdfSide}
              anaText={appState.anaText}
            />

            {/* Rebook toast */}
            <div ref={toastRef}>
              <RebookToast
                visible={toastVisible}
                pickedSlot={appState.pickedSlot}
                waConfirm={appState.waConfirm}
                onPickSlot={handlePickSlot}
              />
            </div>

            {/* Closing screen */}
            <Closing visible={closingVisible} />

            {/* Hint popover */}
            {showHint && hintText !== null && (
              <HintPopover
                visible={appState.hintVisible}
                text={hintText}
                stateId={id}
                reducedMotion={reducedMotion}
                stageBodyRef={stageBodyRef}
                mateoRowRef={mateoRowRef}
                subjetivoRef={subjetivoRef}
                resumenBtnRef={resumenBtnRef}
                toastRef={toastRef}
              />
            )}

            {/* Aria live announcer for state changes — single site, human label */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              {CHAPTER_LABELS[id]}
            </div>
          </div>
        </div>

        {/* Chapter strip + restart */}
        <ChapterStrip
          stateIdx={stateIdx}
          reducedMotion={reducedMotion}
          onJumpTo={handleJumpTo}
          onRestart={handleRestart}
          onAdvance={handleAdvance}
        />
      </div>

      {/* Post-demo block */}
      <PostDemo
        visible={appState.postVisible}
        onCopyLink={handleCopyLink}
      />

      {/* Mini toast */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className={[
          "fixed bottom-6 left-1/2 -translate-x-1/2",
          "bg-ink-900 text-page font-sans text-[13px] px-4.5 py-2.5 rounded-full",
          "z-50 pointer-events-none transition-[transform,opacity] duration-[250ms]",
          miniToast !== null
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        {miniToast}
      </div>
    </>
  );
}
