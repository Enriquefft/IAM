---
slug: workflows
status: draft
last_reviewed: 2026-05-02
geographic_focus: [PE, MX, CO, AR, EC, CL]
anchor_geographies: [US, EU]
product_scope: wellness-education-only
personas: [parent, professional]
purpose: day-in-life task maps, time-budget per non-clinical activity, current tool stack — input for product feature prioritization
---

# Workflows — day-in-life maps

Granular task maps per persona. Focus on **non-clinical / operational** load that software can absorb. Clinical content (intervention design, diagnostic reasoning) lives in [`clinical/`](../../clinical/).

Pairs with [`personas.md`](./personas.md) (who) and [`problems.md`](./problems.md) (why-it-hurts). This file is the **what-they-actually-do**, hour by hour.

# Professional — solo LATAM therapist (3a/3c, also 3b/3f)

Anchored on Persona [`§3a SLP`](./personas.md#3a-slp--fonoaudiólogo-school--or-clinic-based) and [`§3c Psychologist`](./personas.md#3c-psychologist--clinical-psychologist-private-practice-or-clinic). Cash-pay private practice or small clinic, PE/MX/CO/AR.

## Time block: pre-session (AM, ~2-4 hr/day)

| Task | Tool today | Notes |
|---|---|---|
| Plan day's sessions | Word/Excel | Manual, per-kid; ~4hr/day cited (E29) |
| Hunt pictograms / materials | Google, Pinterest, Canva, ARASAAC | Download, no taxonomy |
| Build session decks | PowerPoint | Copy-paste from prior week |
| Print / cut / laminate | Home printer | Physical materials |
| Triage overnight WhatsApp | Personal phone | Crisis updates, cancelations |

## Time block: scheduling (continuous, biggest pain)

| Task | Tool today | Notes |
|---|---|---|
| Reagendar after sick/no-show | Excel + WhatsApp | Caos logístico (E29) |
| Confirm slots / reshuffle | WhatsApp | 3-5 parents per disruption |
| Track who paid | Separate Excel or paper notebook | No reconciliation with calendar |
| Remind no-shows of T&Cs | Verbal / WhatsApp | Rarely enforced |
| Detect calendar conflicts | Eyeball | No auto-detect |

## Time block: inter-session (5-15 min slots)

| Task | Tool today | Notes |
|---|---|---|
| Quick paper notes | Notebook | Transcribed later (often skipped) |
| Hallway parent handoff | Verbal | No log, no summary |
| Reset room | Manual | Sensory-safe, swap visuals |
| Eat / bathroom / open next file | — | — |

## Time block: post-session (PM, ~1-2 hr)

| Task | Tool today | Notes |
|---|---|---|
| Transcribe paper → digital | Word | Per-kid file |
| Write parent summary | Word (often skipped) | "registro es solo para ella" (E29) |
| Send PDF to parent | WhatsApp | When motivated; usually verbal next session |
| Update goal-tracking sheet | Excel | When remembered |

## Time block: cobranza / billing (weekly–monthly)

| Task | Tool today | Notes |
|---|---|---|
| Manual invoicing | Word doc → WhatsApp | Per session or per month |
| Chase payment | Yape / Plin / Mercado Pago / transfer | No auto-recon |
| Cash receipts | Paper recibo | — |
| Tax / boleta electrónica | SUNAT / SAT / AFIP portal | Manual entry |

No insurance billing in cash-pay LATAM private. CPT-code workflows are US-specific (see [`§3e BCBA`](./personas.md#3e-bcba--behavior-analyst)).

## Time block: parent comms (off-hours, unpaid)

| Task | Tool today | Notes |
|---|---|---|
| WhatsApp evening / weekend | Personal phone | Crisis Q's, schedule, "cómo salió hoy" |
| Long voice notes | WhatsApp | Substitute for typed reports |
| Same question 3× from 3 parents | WhatsApp | No FAQ, no broadcast |
| Boundary management | None | Personal/professional phone merged |

## Time block: material / IP management

| Task | Tool today | Notes |
|---|---|---|
| Store PDFs | Laptop folders | No taxonomy |
| Re-create same visual | Canva / PowerPoint | Can't find old file |
| Version goal sheets | Filename suffixes | No versioning |
| Backup | Personal Google Drive | Mixed with family photos |

## Time block: compliance / records

| Task | Tool today | Notes |
|---|---|---|
| Consent forms | Paper folder | — |
| Patient record | Word + folders | No EMR — see [`personas.md:140`](./personas.md) |
| Annual report to clinic/school | Manual compile | From scattered notes |

## Quantified non-clinical load — solo therapist

| Task category | Hours/week | Tool today | Software-tractable? |
|---|---|---|---|
| Session planning | 10–15 | Word/Excel | High |
| Reagendar | 3–5 | WhatsApp + Excel | High |
| Notes / parent reports | 5–8 | Word → WhatsApp PDF | High |
| Material hunt | 3–5 | Google / Canva | Medium (library) |
| Cobranza / billing | 2–4 | Word + manual transfer | Medium (LATAM rails fragmented) |
| Parent comms after-hours | 5–10 | WhatsApp personal | High (in-app threading) |

Total non-clinical: **~30-50% of work week** — matches [`problems.md §7`](./problems.md) cite (ASHA portal; SLP burnout review [PMC 7732050](https://pmc.ncbi.nlm.nih.gov/articles/PMC7732050/)).

## Therapist emotional / control curve

High control inside session → zero control once kid leaves. Documentation visibility ends at door. Decisions for next session built on parent verbal recall + memory. (E24 Implementation Gap, E25 data-blind.)

## Wedge ranking — what software fixes first

1. **Calendar + auto-reagendar with WhatsApp confirmation** — sharpest pain, daily, easy demo
2. **Structured note → auto-generated parent PDF** — recovers post-session hour, parent transparency side-effect
3. **Material library tagged by goal / age / dialect** — kills AM hunt
4. **Invoice + payment link** — real pain, but LATAM payment rails fragmented (Yape/Plin/MP/transfer/cash) = build cost

Diagnostic / clinical reasoning tools sit further out — buyer is the same therapist but the time-saver argument is weaker than admin automation.

---

# Parent — mother of TEA kid (Persona 2a, 2b)

Anchored on [`§2 Parent`](./personas.md). LATAM context, kid in active therapy.

## Day-flow

| Stage | Action | Pain point | Evidence |
|---|---|---|---|
| 1. Morning start | Organize routine | Fragile routines | E13 elevated maternal stress |
| 2. Daily activities | Feeding, tasks | Kid refuses | E03 "NO" triggers crisis |
| 3. Trigger | Activity transition | No anticipation tool | E03 lacks transition guides |
| 4. Crisis | Manage dysregulation | Doesn't know what to do | E01 mother needs co-regulation first |
| 5. Public crisis | Contain | Social shame | E09 exclusion from lack of protocol |
| 6. Improvised fix | Tablet / YouTube | Guilt, non-educational | E19 risk from no guide |
| 7. Post-crisis | Reflect | Future anxiety | E02 autonomy priority |
| 8. Therapy session | Drive kid to consult | Limited home transfer | E04 therapy doesn't translate |
| 9. Home tasks | Try to apply | No time / materials | E17 lacks flexible materials |
| 10. Daily reality | No continuity | Exhaustion | E05 system doesn't cover home |
| 11. Night | Night crisis | Extreme isolation | E22 micro-routine changes |
| 12. Long-term | Future planning | Fear | E02 autonomy urgency |

Emotional curve: hope → stress → anxiety → crisis → guilt → exhaustion.

## Quantified parent operational load

| Task | Frequency | Current tool |
|---|---|---|
| Schedule + reschedule therapy | Weekly | WhatsApp w/ therapist |
| Track session-to-home tasks | Daily | Memory / paper note |
| Log crisis events | Per-event | None or notes app |
| Find Spanish materials | Weekly | Google, YouTube, peer WhatsApp groups |
| Get progress visibility from therapist | Monthly+ | Verbal hallway, occasional WhatsApp PDF |
| Coordinate with school | Weekly | WhatsApp / cuaderno viajero |

## Parent core insight

> "No tengo una guía en el momento en que más la necesito."

24/7 expectation, near-zero 24/7 support. Therapy hours are <2% of the week.

---

# Cross-persona — implementation gap

| Mother | Therapist |
|---|---|
| Doesn't know what to do in crisis | Doesn't know what happened at home |
| Can't execute therapy correctly | Can't measure progress |
| Alone | Depends on her |
| Improvises | Adjusts without data |

**Systemic insight:** the gap between session and home is the binding constraint on outcomes. Causes:

- Caregiver time (E24)
- Practical tools (E17)
- Objective data (E25)

Effects:
- Learning doesn't consolidate
- Frustration compounds
- Kid's dependence persists

# Sources

- Raw interviews: E01-E29 (registry — link target TBD pending journey.md migration)
- [`personas.md`](./personas.md)
- [`problems.md`](./problems.md) — esp. §7 documentation burden
- [`competitive-landscape.md`](./competitive-landscape.md)

# Open questions

- Hours/week breakdown above is `Estimate:` — needs validation against 5-therapist time-diary study (next step in [`company/product-bets.md` Next steps](../../company/product-bets.md#next-steps))
- LATAM clinic vs solo split among warm 20 — affects whether per-seat or per-practitioner pricing fits ([`product/therapist-saas/definition.md`](../../product/therapist-saas/definition.md) defaults to solo USD 20/mo + ≤5-seat clinic USD 15/seat pending data)
- Parent log-keeping willingness — daily prompt response rate determines whether home-data → therapist dashboard is viable as the parent-companion expansion module post-A (originally scoped as [`product-bets.md` Bet C](../../company/product-bets.md))
