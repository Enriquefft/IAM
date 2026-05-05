// HintPopover.tsx — Anchored tooltip popover for per-state hints.
// Positions itself via useLayoutEffect + ResizeObserver relative to stageBodyRef.
// Reduced-motion path: renders inline below target, no absolute positioning.

import { useLayoutEffect, useState, useCallback } from "react";
import type { DemoStateId } from "./demo-machine";

type ArrowDir = "up" | "down" | "right-of";

interface HintPosition {
  readonly x: number;
  readonly y: number;
  readonly placement: "below" | "above" | "left-of";
}

interface Props {
  readonly visible: boolean;
  readonly text: string;
  readonly stateId: DemoStateId;
  readonly reducedMotion: boolean;
  readonly stageBodyRef: React.RefObject<HTMLDivElement>;
  readonly mateoRowRef: React.RefObject<HTMLDivElement>;
  readonly subjetivoRef: React.RefObject<HTMLDivElement>;
  readonly resumenBtnRef: React.RefObject<HTMLButtonElement>;
  readonly toastRef: React.RefObject<HTMLDivElement>;
}

function computePosition(
  stateId: DemoStateId,
  stageBodyRef: React.RefObject<HTMLDivElement>,
  mateoRowRef: React.RefObject<HTMLDivElement>,
  subjetivoRef: React.RefObject<HTMLDivElement>,
  resumenBtnRef: React.RefObject<HTMLButtonElement>,
  toastRef: React.RefObject<HTMLDivElement>,
): { pos: HintPosition; arrow: ArrowDir } | null {
  const stage = stageBodyRef.current;
  if (!stage) return null;
  const stageRect = stage.getBoundingClientRect();

  let target: Element | null = null;
  let placement: HintPosition["placement"] = "below";
  let nudge = { x: 0, y: 0 };

  if (stateId === "agenda" && mateoRowRef.current) {
    target = mateoRowRef.current;
    placement = "below";
    nudge = { x: 24, y: 12 };
  } else if (stateId === "editor-empty" && subjetivoRef.current) {
    target = subjetivoRef.current;
    placement = "below";
    nudge = { x: 0, y: 10 };
  } else if (stateId === "editor-full" && resumenBtnRef.current) {
    target = resumenBtnRef.current;
    placement = "above";
    nudge = { x: -200, y: -16 };
  } else if (stateId === "rebook" && toastRef.current) {
    target = toastRef.current;
    placement = "left-of";
    nudge = { x: -16, y: 20 };
  }

  if (!target) return null;
  const r = target.getBoundingClientRect();

  let x: number;
  let y: number;
  let arrow: ArrowDir;

  if (placement === "below") {
    x = r.left - stageRect.left + nudge.x;
    y = r.bottom - stageRect.top + nudge.y;
    arrow = "up";
  } else if (placement === "above") {
    x = r.left - stageRect.left + nudge.x;
    y = r.top - stageRect.top + nudge.y;
    arrow = "down";
  } else {
    x = r.left - stageRect.left + nudge.x;
    y = r.top - stageRect.top + nudge.y;
    arrow = "right-of";
  }

  return { pos: { x, y, placement }, arrow };
}

export function HintPopover({
  visible,
  text,
  stateId,
  reducedMotion,
  stageBodyRef,
  mateoRowRef,
  subjetivoRef,
  resumenBtnRef,
  toastRef,
}: Props): JSX.Element | null {
  const [pos, setPos] = useState<HintPosition>({ x: 0, y: 0, placement: "below" });
  const [arrow, setArrow] = useState<ArrowDir>("up");

  const update = useCallback(() => {
    const result = computePosition(
      stateId,
      stageBodyRef,
      mateoRowRef,
      subjetivoRef,
      resumenBtnRef,
      toastRef,
    );
    if (result) {
      setPos(result.pos);
      setArrow(result.arrow);
    }
  }, [stateId, stageBodyRef, mateoRowRef, subjetivoRef, resumenBtnRef, toastRef]);

  useLayoutEffect(() => {
    if (reducedMotion) return;
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (stageBodyRef.current) ro.observe(stageBodyRef.current);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [stateId, reducedMotion, update, stageBodyRef]);

  if (reducedMotion) {
    if (!visible) return null;
    return (
      <div
        role="status"
        className="mx-5 mt-2 px-3.5 py-2 bg-ink-900 text-page rounded-[10px] font-sans text-[12.5px] leading-[1.45]"
      >
        {text}
      </div>
    );
  }

  const arrowClass: Record<ArrowDir, string> = {
    up: "before:absolute before:top-[-6px] before:left-6 before:border-x-[6px] before:border-x-transparent before:border-b-[6px] before:border-b-ink-900",
    down: "before:absolute before:bottom-[-6px] before:right-9 before:border-x-[6px] before:border-x-transparent before:border-t-[6px] before:border-t-ink-900",
    "right-of":
      "before:absolute before:right-[-6px] before:top-3.5 before:border-y-[6px] before:border-y-transparent before:border-l-[6px] before:border-l-ink-900",
  };

  const transform =
    pos.placement === "above"
      ? "translateY(calc(-100% - 8px))"
      : pos.placement === "left-of"
        ? "translateX(calc(-100% - 8px))"
        : undefined;

  return (
    <div
      role="status"
      className={[
        "absolute max-w-[280px] bg-ink-900 text-page font-sans text-[12.5px] leading-[1.45]",
        "px-3.5 py-2.5 rounded-[10px] shadow-md z-[9] pointer-events-none",
        "transition-opacity duration-[240ms] ease-out",
        "before:content-['']",
        arrowClass[arrow],
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{
        left: pos.x,
        top: pos.y,
        transform,
      }}
    >
      {text}
    </div>
  );
}
