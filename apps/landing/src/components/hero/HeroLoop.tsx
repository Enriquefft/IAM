// HeroLoop.tsx — 12-second animated miniature loop for the Hero section.
// Drives three layers: AgendaFrame, EditorFrame, PdfFrame.
// Respects prefers-reduced-motion and document visibility.
// All window/document/performance access is inside useEffect.

import { useEffect, useRef, useState } from "react";
import { AgendaFrame } from "./AgendaFrame";
import { EditorFrame } from "./EditorFrame";
import { PdfFrame } from "./PdfFrame";
import { HERO_FRAMES } from "./frames";
import type { HeroFrameId } from "./frames";

export default function HeroLoop(): JSX.Element {
  const [frameId, setFrameId] = useState<HeroFrameId>("agenda-idle");
  const [frameStartMs, setFrameStartMs] = useState<number>(0);
  const [soapProgress, setSoapProgress] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [restartKey, setRestartKey] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect reduced-motion preference (SSR-safe: reads inside useEffect).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  // Tab visibility pause/resume.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const onVis = () => {
      if (document.hidden) {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      } else {
        setRestartKey((k) => k + 1);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Loop driver via chained setTimeout.
  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      const frame = HERO_FRAMES[i];
      if (frame === undefined) return;
      setFrameId(frame.id);
      setFrameStartMs(performance.now());
      timerRef.current = setTimeout(() => {
        i = (i + 1) % HERO_FRAMES.length;
        tick();
      }, frame.dwellMs);
    };
    tick();
    return () => {
      cancelled = true;
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [reducedMotion, restartKey]);

  // rAF for SOAP progress during editor-dictating.
  useEffect(() => {
    if (reducedMotion || frameId !== "editor-dictating") {
      setSoapProgress(
        frameId === "editor-resumen" || frameId === "pdf-held" ? 1 : 0,
      );
      return;
    }
    let raf = 0;
    let cancelled = false;
    const start = performance.now();
    const dwell = 5000;
    const step = () => {
      if (cancelled) return;
      const t = Math.min(1, (performance.now() - start) / dwell);
      setSoapProgress(t);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [frameId, reducedMotion]);

  // Suppress the unused frameStartMs lint warning — it's kept for future
  // use (e.g. progress bars) and is part of the SSOT state shape.
  void frameStartMs;

  const agendaOpacity =
    frameId === "agenda-idle" || frameId === "fade-reset" ? 1 : 0;
  const editorOpacity =
    frameId === "editor-dictating" || frameId === "editor-resumen" ? 1 : 0;
  const pdfOpacity =
    frameId === "editor-resumen" || frameId === "pdf-held" ? 1 : 0;
  const pdfSlideIn = frameId === "editor-resumen" || frameId === "pdf-held";

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="relative w-full aspect-[1.05/1]"
    >
      {/* Agenda layer */}
      <div
        className="absolute inset-0"
        style={{
          opacity: agendaOpacity,
          transition: "opacity 600ms ease-in-out",
        }}
      >
        <AgendaFrame />
      </div>

      {/* Editor layer */}
      <div
        className="absolute inset-0"
        style={{
          opacity: editorOpacity,
          transition: "opacity 600ms ease-in-out",
        }}
      >
        <EditorFrame progress={soapProgress} />
      </div>

      {/* PDF layer */}
      <div
        className="absolute inset-0 overflow-hidden rounded-2xl"
        style={{
          opacity: pdfOpacity,
          transition: "opacity 600ms ease-in-out",
        }}
      >
        <PdfFrame slideIn={pdfSlideIn} />
      </div>
    </div>
  );
}
