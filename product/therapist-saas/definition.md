---
slug: therapist-saas
status: msp-scoping
created: 2026-05-02
last_reviewed: 2026-05-02
decision_source: ../../company/product-bets.md
target_users: [professional]
clinical_claim_level: clinician-tool
---

# What it is

Practice-management SaaS for solo LATAM therapists and small clinics serving TEA caseloads (psychologists, fonoaudiólogos / SLPs, occupational therapists, special-ed pedagogues). Replaces the Word/Excel/WhatsApp stack documented in interview E29 with a single tool covering scheduling, session notes, parent-facing reports, and billing.

Spanish-first. Priced for LATAM WTP. Single-actor product — parents are recipients of shared content, not co-users (parent-side companion app is a planned expansion module, not v1 scope).

# Why this product, not another

Decision context, kill criteria, and comparison vs Bets B/C/D/E/F live in [`../../company/product-bets.md`](../../company/product-bets.md). This file holds spec only.

# Personas served

Primary buyer: [`personas.md §3`](../../business/research/personas.md) Professional 3a (psicólogo private practice), 3b (fonoaudióloga / SLP), 3c (terapeuta ocupacional), 3f (clínica multidisciplinaria small).

Indirect beneficiaries: parents of patients (receive Spanish weekly progress PDFs), referring physicians (receive structured reports).

# Problems addressed

- [`problems.md §7`](../../business/research/problems.md) — therapist documentation burden (30-50% of work time)
- E29 raw interview: 4 hr/day on Word/Excel/WhatsApp; rescheduling chaos; no parent-facing transparency layer
- Adjacent: parent confusion about what was worked on in session (touched but not the primary wedge)

Day-in-life task map per time block: [`workflows.md` § Professional](../../business/research/workflows.md#professional--solo-latam-therapist-3a3c-also-3b3f). The v1 scope below maps directly to the wedge ranking in that file.

# Scope — v1 (MSP)

Order matches the [`workflows.md` wedge ranking](../../business/research/workflows.md#wedge-ranking--what-software-fixes-first). Anything below the line is explicitly out of v1.

1. **Caseload + scheduling + auto-reagendar** (wedge #1): patient profiles, recurring sessions, cancel/reschedule with WhatsApp confirmation link, conflict auto-detect. Targets the 3-5 hr/week "reagendar caos" cited in workflows.md.
2. **Structured session note → parent PDF** (wedge #2): Spanish SOAP template, voice-to-text capture, AI summary to fill SOAP fields, manual edit before save. Auto-compiles weekly parent-facing progress PDF. Targets the 5-8 hr/week notes+reports load.
3. **Billing — minimum viable** (wedge #4, scoped down): per-session ledger, monthly PDF invoice. Local electronic-invoice rails (SUNAT/CFDI/AFIP) are explicitly out of v1 — workflows.md flags LATAM payment rails as fragmented (Yape/Plin/MP/transfer/cash) and high build cost. v1 issues PDF receipts; therapist files boleta in the existing portal.

---

Out of v1 (deferred or rejected):
- **Material library tagged by goal/age/dialect** (wedge #3 per workflows.md): real pain (3-5 hr/week material hunt), but library curation is a content-build problem more than a software problem. Defer to v1.1 once we have ≥20 paying therapists who can crowd-tag.
- Parent-side companion app — Mo 7-12 expansion if A validates (originally [`Bet C`](../../company/product-bets.md))
- Native SUNAT / CFDI / AFIP electronic-invoice integration (v1.1)
- Multi-clinic admin / role hierarchy beyond owner+therapist (v2)
- Insurance / obras sociales claim submission (no — cash-pay LATAM private practice has no insurance billing per workflows.md)
- Telehealth video (no — not the wedge)
- AAC pictogram library (belongs in Bet D / parent module, not therapist tool)
- Diagnostic / clinical-reasoning tools (workflows.md: time-saver argument weaker than admin automation)

# MSP success metrics — quantified

Drawn from [`workflows.md` quantified non-clinical load](../../business/research/workflows.md#quantified-non-clinical-loadsolo-therapist). Per-therapist hours-saved targets at Mo 3 of pilot:

| Workflow | Pre-tool baseline (hr/wk) | v1 target reduction | Source metric |
|---|---|---|---|
| Reagendar | 3-5 | ≥50% | calendar conflict-resolution events automated |
| Notes + parent reports | 5-8 | ≥40% | session-to-PDF time per patient |
| Parent comms after-hours | 5-10 | ≥30% | in-app threading replacing personal-WhatsApp |

Aggregate v1 target: **≥6 hr/week recovered per therapist** by Mo 3. Below this, retention thesis fails — kill or rescope per [`product-bets.md` kill criteria](../../company/product-bets.md).

# Pricing

Per [`pricing.md` B2B per-seat LATAM](../../business/research/pricing.md):

- Solo practitioner: USD 20/mo (or local-currency equivalent, billed in local currency with quarterly USD review)
- Small clinic, ≤5 seats: USD 15/seat/mo, USD 60/mo minimum
- Annual prepay: 15% discount

Concierge MSP pilot price: USD 20/mo flat for warm-list therapists, locked for 6 months from pilot start.

# AI role

Feature leverage, not architecture mandate:

- Voice/text → structured SOAP session note (Spanish, accent-tolerant per PE/MX/AR/CL)
- Session-history → weekly parent-facing progress narrative (Spanish, plain language, clinician-reviewable before send)
- Schedule conflict + cancel-rebook routing suggestions

Open dependency: Spanish ASR quality on regional accents — see open question in [`product-bets.md` Open questions](../../company/product-bets.md).

# Defensibility

- Workflow lock-in: once a therapist has 6+ months of patient history in the system, switching cost is real
- Spanish-first SOAP + parent-PDF templates tuned for TEA caseloads (US incumbents are English-first, generic-clinical)
- LATAM pricing US incumbents can't match without cannibalizing core market
- Forward path: parent-companion module → Bet C network effects without cold-start

# Competitive landscape

Detailed competitor files: [`business/research/competitors/`](../../business/research/competitors/). Direct head-to-head set:

- US incumbents (CentralReach, Motivity, Catalyst, Theralytics, Rethink) — English-only, USD per-seat pricing well above LATAM WTP, generic ABA-clinical not TEA-LATAM-tuned
- LATAM generic practice-management (Doctoralia, Iclinic, Doctorium) — not TEA-specialized, no parent-facing layer
- Status-quo competitor: Word + Excel + WhatsApp + Google Drive (the real fight)

# Risks

Lifted from [`product-bets.md` Bet A risks](../../company/product-bets.md). Live in this file once they materialize during pilot.

# Open questions

See [`product-bets.md` Open questions](../../company/product-bets.md) — same list. Move resolved answers here as they land.

# Next steps

Active workplan lives in [`product-bets.md` Next steps](../../company/product-bets.md). Once concierge MSP launches, this file becomes the operative spec and the bets file freezes as decision context.
