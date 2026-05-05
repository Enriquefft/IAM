// demo-machine.ts — SSOT for the Demo state machine: states, types, reducer.
// All state IDs and timing verbatim from Demo.html:983-990.

import { SOAP_DEFAULTS, SOAP_FIELDS } from "./demo-content";
import type { SoapKey } from "./demo-content";

// ── State definitions ─────────────────────────────────────────────────────────

export const STATES = [
  { id: "agenda",       hintMs: 3000  as const, autoMs: 8000  as const },
  { id: "editor-empty", hintMs: 3000  as const, autoMs: 8000  as const },
  { id: "editor-full",  hintMs: 3000  as const, autoMs: 8000  as const },
  { id: "pdf-held",     hintMs: 4000  as const, autoMs: 10000 as const },
  { id: "rebook",       hintMs: 3000  as const, autoMs: 8000  as const },
  { id: "closing",      hintMs: null  as null,  autoMs: 3000  as const },
] as const satisfies readonly DemoState[];

export type DemoStateId = (typeof STATES)[number]["id"];

export interface DemoState {
  readonly id: string;
  readonly hintMs: number | null;
  readonly autoMs: number;
}

// ── Auto-fill fields ──────────────────────────────────────────────────────────

export interface AutoFields {
  readonly S: string | undefined;
  readonly O: string | undefined;
  readonly A: string | undefined;
  readonly P: string | undefined;
  readonly typingField: SoapKey | null;
  readonly doneFields: ReadonlySet<SoapKey>;
}

// ── App state ─────────────────────────────────────────────────────────────────

export interface DemoAppState {
  readonly stateIdx: number;
  readonly hintVisible: boolean;
  readonly postVisible: boolean;
  readonly anaText: string;
  readonly micOn: boolean;
  readonly autoFields: AutoFields | null;
  readonly resumenPressed: boolean;
  readonly pickedSlot: number | null;
  readonly waConfirm: boolean;
}

// ── Events ───────────────────────────────────────────────────────────────────

export type DemoEvent =
  | { type: "advance" }
  | { type: "jumpTo"; idx: number }
  | { type: "restart" }
  | { type: "clickMateo" }
  | { type: "toggleMic" }
  | { type: "setMic"; on: boolean }
  | { type: "typeSubjetivo"; text: string }
  | { type: "clickResumen" }
  | { type: "pickSlot"; idx: number }
  | { type: "autoFillStep"; fields: AutoFields }
  | { type: "showWaConfirm" }
  | { type: "showHint" }
  | { type: "showPost" }
  | { type: "setResumenPressed"; pressed: boolean };

// ── Initial state ─────────────────────────────────────────────────────────────

export const INITIAL_STATE: DemoAppState = {
  stateIdx: 0,
  hintVisible: false,
  postVisible: false,
  anaText: "",
  micOn: false,
  autoFields: null,
  resumenPressed: false,
  pickedSlot: null,
  waConfirm: false,
};

// ── Full SOAP autoFields helper ───────────────────────────────────────────────

export function fullSoapFields(anaText?: string): AutoFields {
  return {
    S: anaText ?? SOAP_DEFAULTS.S,
    O: SOAP_DEFAULTS.O,
    A: SOAP_DEFAULTS.A,
    P: SOAP_DEFAULTS.P,
    typingField: null,
    doneFields: new Set<SoapKey>(SOAP_FIELDS),
  };
}

// ── Reducer ───────────────────────────────────────────────────────────────────

export function demoReducer(state: DemoAppState, event: DemoEvent): DemoAppState {
  const currentStateId = STATES[state.stateIdx]?.id;

  switch (event.type) {
    case "advance": {
      const nextIdx = state.stateIdx + 1;
      if (nextIdx >= STATES.length) {
        return { ...state, postVisible: true };
      }
      return {
        ...state,
        stateIdx: nextIdx,
        hintVisible: false,
      };
    }

    case "jumpTo": {
      const { idx } = event;
      if (idx < 0 || idx >= STATES.length) return state;
      const targetId = STATES[idx]?.id;

      const base: DemoAppState = {
        ...state,
        stateIdx: idx,
        hintVisible: false,
        micOn: false,
        resumenPressed: false,
      };

      if (targetId === "agenda" || targetId === "editor-empty") {
        return {
          ...base,
          anaText: "",
          autoFields: null,
          pickedSlot: null,
          waConfirm: false,
          postVisible: false,
        };
      }
      if (
        targetId === "editor-full" ||
        targetId === "pdf-held" ||
        targetId === "rebook"
      ) {
        return {
          ...base,
          autoFields: fullSoapFields(),
          pickedSlot: targetId === "rebook" ? null : state.pickedSlot,
          waConfirm: targetId === "rebook" ? false : state.waConfirm,
          postVisible: false,
        };
      }
      if (targetId === "closing") {
        return {
          ...base,
          autoFields: fullSoapFields(),
          pickedSlot: 0,
          waConfirm: true,
          postVisible: false,
        };
      }
      return base;
    }

    case "restart": {
      return { ...INITIAL_STATE };
    }

    case "clickMateo": {
      if (currentStateId !== "agenda") return state;
      return {
        ...state,
        stateIdx: state.stateIdx + 1,
        hintVisible: false,
      };
    }

    case "toggleMic": {
      if (currentStateId !== "editor-empty") return state;
      return { ...state, micOn: !state.micOn };
    }

    case "setMic": {
      return { ...state, micOn: event.on };
    }

    case "typeSubjetivo": {
      return { ...state, anaText: event.text };
    }

    case "clickResumen": {
      if (currentStateId !== "editor-full") return state;
      return { ...state, resumenPressed: true };
    }

    case "setResumenPressed": {
      return { ...state, resumenPressed: event.pressed };
    }

    case "pickSlot": {
      if (currentStateId !== "rebook") return state;
      return { ...state, pickedSlot: event.idx };
    }

    case "showWaConfirm": {
      return { ...state, waConfirm: true };
    }

    case "autoFillStep": {
      return { ...state, autoFields: event.fields };
    }

    case "showHint": {
      return { ...state, hintVisible: true };
    }

    case "showPost": {
      return { ...state, postVisible: true };
    }
  }
}
