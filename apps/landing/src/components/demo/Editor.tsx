// Editor.tsx — SOAP editor panel for the demo.
// Handles mic button, contentEditable Subjetivo, auto-fill display, Resumen button.
// ContentEditable risk: treated as uncontrolled. Initial value set via dangerouslySetInnerHTML
// keyed on state transition. onInput syncs view-model only.

import type { InputEvent } from "react";
import { useCallback } from "react";
import { MicIcon } from "lucide-react";
import {
  SOAP_FIELDS,
  SOAP_LABELS,
  SOAP_PLACEHOLDERS,
} from "./demo-content";
import type { SoapKey } from "./demo-content";
import type { AutoFields } from "./demo-machine";

interface Props {
  readonly stateId: "editor-empty" | "editor-full";
  readonly anaText: string;
  readonly autoFields: AutoFields | null;
  readonly micOn: boolean;
  readonly resumenPressed: boolean;
  readonly reducedMotion: boolean;
  readonly onTypeSubjetivo: (text: string) => void;
  readonly onClickMic: () => void;
  readonly onClickResumen: () => void;
  readonly micRef: React.RefObject<HTMLButtonElement | null>;
  readonly resumenBtnRef: React.RefObject<HTMLButtonElement | null>;
  readonly subjetivoRef: React.RefObject<HTMLDivElement | null>;
}

function valueFor(
  field: SoapKey,
  anaText: string,
  autoFields: AutoFields | null,
): string {
  if (field === "S") {
    if (anaText) return anaText;
    return autoFields?.S ?? "";
  }
  if (autoFields === null) return "";
  // Direct property access — AutoFields keys are exactly SoapKey.
  if (field === "O") return autoFields.O ?? "";
  if (field === "A") return autoFields.A ?? "";
  return autoFields.P ?? "";
}

export function Editor({
  stateId,
  anaText,
  autoFields,
  micOn,
  resumenPressed,
  reducedMotion,
  onTypeSubjetivo,
  onClickMic,
  onClickResumen,
  micRef,
  resumenBtnRef,
  subjetivoRef,
}: Props) {
  const isEditorFull = stateId === "editor-full";

  const handleSubjetivoInput = useCallback(
    (e: InputEvent<HTMLDivElement>) => {
      onTypeSubjetivo(e.currentTarget.innerText);
    },
    [onTypeSubjetivo],
  );

  return (
    <div className="px-5 py-4 flex flex-col gap-3 h-full overflow-hidden">
      <div className="bg-surface border border-surface-border rounded-xl p-5 flex flex-col gap-3 flex-1 overflow-hidden">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-surface-border">
          <div className="min-w-0">
            <p className="font-sans text-[14px] font-bold text-text-primary truncate">Mateo R. · Sesión 14</p>
            <p className="font-sans text-[11.5px] text-text-muted mt-0.5">Hoy 16:00 · plantilla SOAP</p>
          </div>

          {/* Mic button */}
          <button
            ref={micRef}
            type="button"
            aria-label={micOn ? "Detener dictado" : "Iniciar dictado"}
            aria-pressed={micOn}
            onClick={onClickMic}
            className={[
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
              "font-sans text-[12px] font-semibold transition-colors duration-[150ms]",
              "border flex-shrink-0 whitespace-nowrap",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
              micOn
                ? "bg-brand-salvia-500 border-brand-salvia-500 text-white"
                : "bg-brand-salvia-100 border-brand-salvia-200 text-brand-salvia-600 hover:bg-brand-salvia-200",
            ].join(" ")}
          >
            {micOn ? (
              <>
                <MicBars reducedMotion={reducedMotion} />
                Dictando
              </>
            ) : (
              <>
                <MicIcon size={13} strokeWidth={2} aria-hidden={true} />
                Dictar
              </>
            )}
          </button>
        </div>

        {/* SOAP grid */}
        <div className="grid grid-cols-[32px_1fr] gap-x-3.5 gap-y-2.5 flex-1 overflow-auto">
          {SOAP_FIELDS.map((f: SoapKey) => {
            const text = valueFor(f, anaText, autoFields);
            const isTyping = autoFields?.typingField === f;
            const isSubj = f === "S";

            return (
              <SoapRow
                key={f}
                fieldKey={f}
                label={SOAP_LABELS[f]}
                placeholder={SOAP_PLACEHOLDERS[f]}
                text={text}
                isTyping={isTyping}
                isSubj={isSubj}
                isEditable={isSubj && stateId === "editor-empty" && !micOn}
                showAutoText={isSubj ? (micOn || (autoFields?.S != null && !anaText)) : true}
                reducedMotion={reducedMotion}
                subjetivoRef={isSubj ? subjetivoRef : undefined}
                onInput={isSubj ? handleSubjetivoInput : undefined}
              />
            );
          })}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2.5 justify-end pt-3 border-t border-surface-border">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-sans text-[12.5px] font-semibold border border-surface-border bg-page text-text-secondary hover:bg-surface-alt transition-colors duration-[150ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2"
          >
            Guardar borrador
          </button>
          <button
            ref={resumenBtnRef}
            type="button"
            aria-disabled={!isEditorFull}
            onClick={isEditorFull ? onClickResumen : undefined}
            className={[
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-sans text-[12.5px] font-semibold",
              "border transition-all duration-[150ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-salvia-400 focus-visible:ring-offset-2",
              "relative",
              isEditorFull
                ? [
                    "bg-brand-salvia-500 border-brand-salvia-500 text-white",
                    "shadow-sm hover:bg-brand-salvia-600 hover:border-brand-salvia-600",
                    resumenPressed ? "scale-[0.97]" : "",
                    !reducedMotion ? "before:absolute before:inset-[-4px] before:rounded-xl before:animate-btnHalo before:pointer-events-none" : "",
                  ].join(" ")
                : "bg-page border-surface-border text-text-muted opacity-55 cursor-not-allowed",
            ].join(" ")}
          >
            Resumen para familia →
          </button>
        </div>
      </div>
    </div>
  );
}

function MicBars({ reducedMotion }: { readonly reducedMotion: boolean }) {
  const bars = [
    { h: "h-[6px]", delay: "" },
    { h: "h-[10px]", delay: "[animation-delay:120ms]" },
    { h: "h-[12px]", delay: "[animation-delay:240ms]" },
    { h: "h-[8px]", delay: "[animation-delay:360ms]" },
  ];
  return (
    <span
      className="inline-flex items-end gap-[2px] h-3"
      aria-hidden="true"
    >
      {bars.map((b, i) => (
        <span
          key={i}
          className={[
            "w-[2.5px] bg-current rounded-[1px]",
            b.h,
            !reducedMotion ? `animate-micPulse ${b.delay}` : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </span>
  );
}

function SoapRow({
  fieldKey,
  label,
  placeholder,
  text,
  isTyping,
  isSubj,
  isEditable,
  showAutoText,
  reducedMotion,
  subjetivoRef,
  onInput,
}: {
  readonly fieldKey: SoapKey;
  readonly label: string;
  readonly placeholder: string;
  readonly text: string;
  readonly isTyping: boolean;
  readonly isSubj: boolean;
  readonly isEditable: boolean;
  readonly showAutoText: boolean;
  readonly reducedMotion: boolean;
  readonly subjetivoRef: React.RefObject<HTMLDivElement | null> | undefined;
  readonly onInput: ((e: InputEvent<HTMLDivElement>) => void) | undefined;
}) {
  const isActive = isTyping && !reducedMotion;

  const textBoxClass = [
    "font-sans text-[13.5px] leading-[1.55] text-text-primary",
    "min-h-[30px] px-2.5 py-1.5 rounded-md border",
    "transition-colors duration-[180ms]",
    isActive
      ? "bg-brand-salvia-100 border-brand-salvia-200"
      : "bg-page border-transparent",
    isEditable
      ? "focus:bg-surface focus:border-brand-salvia-200 focus:shadow-focus focus:outline-none cursor-text"
      : "",
    text === "" && !isEditable
      ? "before:content-[attr(data-placeholder)] before:text-ink-300 before:italic"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div
        className="font-sans text-[13px] font-bold text-brand-salvia-600 pt-2 select-none"
        title={label}
        aria-hidden="true"
      >
        {fieldKey}
      </div>

      {isSubj ? (
        <div
          ref={subjetivoRef}
          role="textbox"
          aria-multiline="true"
          aria-label="Notas del Subjetivo"
          contentEditable={isEditable}
          suppressContentEditableWarning={isEditable}
          data-placeholder={placeholder}
          className={textBoxClass}
          onInput={isEditable ? onInput : undefined}
          dangerouslySetInnerHTML={showAutoText ? { __html: text } : undefined}
        />
      ) : (
        <div
          data-placeholder={placeholder}
          className={textBoxClass}
          aria-label={label}
        >
          {text || ""}
          {isActive && !reducedMotion && (
            <span
              aria-hidden="true"
              className="inline-block w-[1.5px] h-[14px] bg-brand-salvia-500 align-[-2px] ml-[1px] animate-caretBlink"
            />
          )}
        </div>
      )}
    </>
  );
}
