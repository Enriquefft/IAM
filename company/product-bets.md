---
slug: product-bets
status: decided
decision_date: 2026-05-02
chosen_bet: A
last_reviewed: 2026-05-02
decision_owner: founder
mode: bootstrap-profitable
---

# Product bets shortlist

Candidate products evaluated for first build. Bootstrap-only frame: priority is profitable business, not venture-scale. **Decision: Bet A — Therapist-only SaaS.** Comparative analysis retained below for context; product spec lives in [`../product/therapist-saas/definition.md`](../product/therapist-saas/definition.md).

## Assets

- Tech team: ex-xAI level, MSP-optimized (minimum sellable products, conversion-tuned).
- Warm B2C: 30+ mothers of TEA kids, LATAM (PE/MX/AR/CO/CL).
- Warm B2B: 10-20 professionals (psychologists, SLPs, OTs, special-ed teachers) wanting a tool, undefined.
- Research base: [`business/research/personas.md`](../business/research/personas.md), [`business/research/problems.md`](../business/research/problems.md), [`journey.md`](../journey.md) (raw interviews E01-E29).

## Selection criteria

1. Uses warm list as zero-CAC channel.
2. Recurring revenue, sticky.
3. Path to $30-90K MRR within 12 months at LATAM pricing.
4. Defensible enough vs free alternatives (WhatsApp groups, ARASAAC, free AAC apps).
5. AI is feature leverage, not architecture mandate.

---

# Bet A — Therapist-only SaaS (workflow + parent comms) **(chosen 2026-05-02)**

## Concept
Practice management for solo LATAM therapists / small clinics serving TEA caseloads. Replaces Word/Excel/WhatsApp stack. Scheduling, session notes, parent-facing reports, billing.

## Personas served
- Professional 3a, 3b, 3c, 3f ([`personas.md §3`](../business/research/personas.md))

## Problems hit
- [`problems.md §7`](../business/research/problems.md) documentation burden (30-50% of work time)
- E29 4hr/day Word/Excel; reagendar caos; no parent transparency

## Pricing
- $20-40/mo solo practitioner
- $60-100/mo small clinic (≤5 seats)
- Anchors: [`pricing.md` B2B per-seat LATAM](../business/research/pricing.md) — solo $12/mo floor, $8/seat clinic

## Bootstrap math
- 20 warm pros × $30 = $600 MRR direct from list
- 200 paying solo = $6K MRR
- Ceiling: ~500 paying LATAM solos = $15K MRR. US push needed for more.

## AI role
Feature leverage:
- Auto-summarize session notes (voice/text → structured SOAP)
- Auto-generate parent-facing weekly progress PDF (Spanish)
- Schedule conflict + cancel-rebook routing

## Risks
- LATAM no per-seat SaaS culture; procurement cycles slow
- US-crowded (CentralReach, Motivity, Catalyst, Theralytics, Rethink) — competing on Spanish + LATAM-priced
- Low ACV × thin market = lifestyle ceiling; need clear path past $15K MRR (US Spanish-speaking SLP/BCBA market, or upsell parent-side later)

## Kill criteria
- Wk 4: <5 of 20 warm therapists install + use weekly → wrong product or wrong workflow assumption
- Wk 8: <50% activated therapists convert at $20+/mo → kill or repivot
- Mo 6: <$2K MRR → kill or pivot to Bet C parent-side

## Why chosen over C
- Single-actor UX; no two-sided coordination risk
- Founder pick 2026-05-02: workflow lock-in is more defensible than network bridge given current execution capacity
- Contains the therapist side cleanly; Bet C parent-app becomes natural expansion module once therapist base is stable
- Warm therapist list (20) is ready-to-pilot without parent-side scheduling overhead

---

# Bet C — Parent ↔ Therapist bridge

## Concept
Parent app + therapist dashboard. Therapist assigns daily home tasks per kid, parent logs execution + crisis events, AI generates Spanish prompts and weekly therapist-readable summary. Solves Implementation Gap (E24, E29) which is the #1 cited insight across both raw interviews and structured research.

## Personas served
- Parent 2a, 2b ([`personas.md §2a-§2b`](../business/research/personas.md))
- Professional 3a, 3b, 3c ([`personas.md §3a-§3c`](../business/research/personas.md))
- Kid 1a, 1b indirectly

## Problems hit
- [`problems.md §2`](../business/research/problems.md) AAC abandonment (parent as co-user wedge)
- [`problems.md §5`](../business/research/problems.md) school-home discontinuity
- [`problems.md §7`](../business/research/problems.md) therapist documentation burden (side-effect benefit)
- E03, E22 crisis without protocol; E04 therapy not translating home; E25 therapist data-blind

## Pricing
- Parent $25/mo basic — daily prompts, schedule, log, therapist dashboard read access
- Parent $50/mo premium — adds AI crisis chat (Spanish, ARASAAC + protocol RAG), weekly progress PDF
- Therapist free until 10+ parents → $30/mo multi-parent dashboard
- Anchor: parents already pay $30-60/session × 2-4/week = $25-50/mo is rounding error

## Bootstrap math
- 20 warm therapists × 10 parents × $30 ≈ **$6K MRR / $72K ARR** from current list
- 100 therapists in network ≈ **$30-90K MRR**
- Therapist invites parent = zero CAC

## AI role
Feature leverage:
- Daily Spanish prompt generation per kid profile
- Crisis chat (premium) with ARASAAC + clinical protocols RAG
- Auto-summarize parent week → therapist PDF (cuts E29 4hr/day Word/Excel)

## Risks
- Two-sided coordination = harder UX than single-actor product
- Parent retention if therapist disengages
- Free WhatsApp + Google Sheets is the real competitor

## Kill criteria
- Wk 2: <8 of 15 pre-pay pilots commit at $25 → wrong price or wrong product
- Wk 6: <50% pilot parents convert to paying → kill or pivot to Bet B
- Mo 6: <$3K MRR → kill

---

# Bet B — Parent post-diagnosis subscription program

## Concept
30-day structured program in Spanish for newly-diagnosed families. WHO Caregivers Skills Training-anchored. Daily content, weekly live group call, peer matching. Subscription continues post-30-day with ongoing modules (sensory, school transition, sibling, teen).

## Personas served
- Parent 2a primarily, 2b secondary ([`personas.md §2a-§2b`](../business/research/personas.md))

## Problems hit
- [`problems.md §4`](../business/research/problems.md) post-diagnosis chaos (highest WTP window)
- [`problems.md §3`](../business/research/problems.md) caregiver mental load (45% depression)
- [`problems.md §10`](../business/research/problems.md) stigma scripts
- E07 limbo del diagnóstico, E08 genetic-heritage fear, E13 madre catastrófica

## Pricing
- $15-25/mo
- $99 one-time 30-day intensive

## Bootstrap math
- 30 mothers × $20 = $600 MRR baseline (mixed stages, only 2a hits peak WTP)
- Need paid acquisition to scale → CAC $30-50 vs $20 ARPU = unit economics tight
- Realistic 12-mo target: $5-10K MRR

## Risks
- Content-heavy, slow to build
- Churn brutal post-honeymoon (subscription content always does)
- Free competitors: WhatsApp groups, ASPAU/Brincar/FESPAU, Autism Speaks ES, YouTube
- No defensible moat unless content is genuinely superior

## Why not first
Worse bootstrap economics than C. Real CAC, weak retention, no two-sided lock-in. Better as a content add-on to C later.

---

# Bet D — AAC-as-a-service (parent training + symbol set)

## Concept
ARASAAC-based AAC app where the parent is a co-user from day one. Daily 5-min parent training prompts ("today, pause before handing the cup"), automatic AAC use logging, dialect-aware pictograms (carro/auto/coche per country).

## Personas served
- Kid 1a, 1d ([`personas.md §1a, §1d`](../business/research/personas.md))
- Parent 2a, 2b
- Professional 3a (SLP)

## Problems hit
- [`problems.md §2`](../business/research/problems.md) AAC abandonment (~50% rate)
- [`problems.md §9`](../business/research/problems.md) LATAM dialect / Indigenous coverage gap
- E17 fracaso tareas casa por falta materiales

## Pricing
- $10-20/mo parent
- Free tier with watermark (build Spanish-language SEO moat)

## Bootstrap math
- High-engagement subset of mothers (those with minimally-verbal kids only) = subset of 30
- Smaller addressable market within warm list
- Realistic: $3-8K MRR ceiling at LATAM scale

## Risks
- Saturated free tier (LetMeTalk, SymboTalk, Cboard)
- Premium incumbent (Proloquo2Go $250 one-time) entrenched
- ARASAAC license is CC BY-NC-SA — commercial use needs separate license
- Narrow user base (only minimally-verbal kids)

## Why not first
Crowded, license risk, narrow. Better as a feature module inside C for the 1a-subtype subset.

---

# Bet E — School-home shared visual schedule

## Concept
Shared visual schedule + symbol set + daily "wins / hard moments" log between teacher and parent. Cuaderno viajero replacement. ARASAAC pictograms.

## Personas served
- Kid 1b, Parent 2b, Professional 3d ([`personas.md §1b, §2b, §3d`](../business/research/personas.md))

## Problems hit
- [`problems.md §5`](../business/research/problems.md) school-home discontinuity
- [`problems.md §12`](../business/research/problems.md) inclusion teacher unprepared
- E27 maestra asistente digital

## Pricing
- Parent $15-25/mo
- Teacher free
- School-side institutional sale (eventual): $200-500/mo small school

## Bootstrap math
- Teacher distribution = zero CAC if it works
- But: LATAM public school teacher won't drive adoption, no warm list on teacher side
- Realistic 12-mo: $2-5K MRR without school relationships

## Risks
- Teacher onboarding is the bottleneck and you don't have the warm list there
- LATAM public schools won't pay; private schools fragmented
- IT bans on teacher-installed apps in many districts

## Why not first
Teacher channel is cold. Comes back as Bet C expansion when therapist network introduces school referrals.

---

# Bet F — Adolescent autonomy app (Spanish, identity-first)

## Concept
Wellness app for autistic teens 13-18, Spanish, neurodiversity-affirming, **non-surveilling** (parent gets no reports). Regulation toolkit, identity content, peer matching, special-interest channels.

## Personas served
- Kid 1c ([`personas.md §1c`](../business/research/personas.md))

## Problems hit
- [`problems.md §8`](../business/research/problems.md) adolescent autonomy + identity-affirming content gap
- E18 niño-bebé stigma; E16 desafíos sociales invisibles

## Pricing
- $5-10/mo teen self-pay (parent's card)
- Freemium

## Bootstrap math
- No warm teen list
- Direct buying signal exists in subtype but acquisition is TikTok/Discord (cold)
- Realistic 12-mo: <$2K MRR without influencer push

## Risks
- Cold audience (warm list is parents, not teens)
- "By us, for us" requires autistic team — ethical and product requirement
- Ad acquisition expensive; community-led growth slow
- Wrong-channel-fit for current assets

## Why not first
No warm list for this persona. Park as long-term expansion.

---

# Ranking summary

| Bet | 12-mo MRR target | Warm list fit | Defensibility | Build cost | Pick order |
|---|---|---|---|---|---|
| **A — Therapist SaaS** | **$5-15K** | **Medium (one side)** | **Workflow lock-in** | **Medium** | **1 (chosen)** |
| C — Parent↔therapist bridge | $15-25K | High (both sides) | Network effects | Medium | 2 (expansion path) |
| B — Post-diag subscription | $5-10K | Medium (parent only) | Weak | Low | 3 |
| D — AAC-as-a-service | $3-8K | Low (subset only) | License risk | Medium | 4 |
| E — School-home schedule | $2-5K | Low (no teachers) | Network effects | Medium | 5 (later) |
| F — Teen autonomy | <$2K | None | Community moat | High | 6 (later) |

# Decision

**Build Bet A** (founder pick, 2026-05-02). Reasons:
- Single-actor UX; no two-sided coordination risk
- Workflow lock-in defensibility outweighs C's network-effect ceiling under current execution capacity
- 20 warm therapists ready to pilot without parallel parent-side scheduling
- Contains a clean expansion path: parent-app module on top of installed therapist base = Bet C territory without rebuild
- Profitable LATAM lifestyle business viable at $6-15K MRR target

Expansion sequencing: validate A through Mo 6 → ship parent-companion module Mo 7-12 (becomes Bet C without the cold-start problem).

# Open questions

- Of the 20 warm professionals, how many are private practice (personal credit-card pay) vs employed at clinic (procurement gate)?
- Current Word/Excel/WhatsApp stack per therapist — how much is genuinely replaceable vs habit-locked?
- Spanish session-note voice transcription quality on PE/MX/AR/CL accents (AI feature dependency)
- Billing/invoicing requirements per geo (PE SUNAT electronic invoicing, MX CFDI, AR AFIP) — depth of integration needed for v1
- Whether session recordings can be used for AI training corpus (consent + LATAM data law)

# Next steps

1. Tag warm therapist list by: private-practice vs clinic-employed, geo, current tooling, weekly session volume, willingness to pilot at $20-40/mo
2. Run 10 therapist discovery calls Wk 1-2 — confirm documentation burden hours, current stack pain, billing-integration must-haves
3. Concierge MSP Wk 3-6: shared Notion + Spanish session-note template + WhatsApp-to-PDF parent report, manual; charge $20/mo
4. Software MSP Wk 7-12: scheduling + notes + parent-share link; ship to ≥5 paying therapists
5. Decision gate Mo 6: ≥$2K MRR or kill; if pass, scope parent-companion module (Bet C expansion)

# Sources

- Raw interviews: [`journey.md`](../journey.md) E01-E29
- Personas: [`business/research/personas.md`](../business/research/personas.md)
- Problems: [`business/research/problems.md`](../business/research/problems.md)
- Competitive landscape: [`business/research/competitors/`](../business/research/competitors/) (60+ files)
