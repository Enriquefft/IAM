---
slug: product-bets
status: draft
last_reviewed: 2026-05-02
decision_owner: founder
mode: bootstrap-profitable
---

# Product bets shortlist

Candidate products for first build. Bootstrap-only frame: priority is profitable business, not venture-scale. Decision input — not a commitment. Final pick goes to `product/<chosen>/`.

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

# Bet C — Parent ↔ Therapist bridge **(recommended)**

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

# Bet A — Therapist-only SaaS (workflow + parent comms)

## Concept
Practice management for solo LATAM therapists / small clinics. Replaces Word/Excel/WhatsApp stack. Scheduling, session notes, parent-facing reports, billing.

## Personas served
- Professional 3a, 3b, 3c, 3f ([`personas.md §3`](../business/research/personas.md))

## Problems hit
- [`problems.md §7`](../business/research/problems.md) documentation burden (30-50% of work time)
- E29 4hr/day Word/Excel; reagendar caos; no parent transparency

## Pricing
- $20-40/mo solo practitioner
- $60-100/mo small clinic (≤5 seats)

## Bootstrap math
- 20 warm pros × $30 = $600 MRR direct from list
- 200 paying solo = $6K MRR
- Ceiling: ~500 paying LATAM solos = $15K MRR. US push needed for more.

## Risks
- LATAM no per-seat SaaS culture; procurement cycles slow
- US-crowded (CentralReach, Motivity, Catalyst, Theralytics, Rethink)
- Low ACV × thin market = lifestyle ceiling

## Why not first
Bet C contains Bet A's value as a side-effect (therapist gets dashboard for free) and adds parent-paid revenue on top. A is the consolation pivot if C fails on therapist-network side.

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
| C — Parent↔therapist bridge | $15-25K | High (both sides) | Network effects | Medium | **1** |
| A — Therapist SaaS | $5-15K | Medium (one side) | Workflow lock-in | Medium | 2 (fallback from C) |
| B — Post-diag subscription | $5-10K | Medium (parent only) | Weak | Low | 3 |
| D — AAC-as-a-service | $3-8K | Low (subset only) | License risk | Medium | 4 |
| E — School-home schedule | $2-5K | Low (no teachers) | Network effects | Medium | 5 (later) |
| F — Teen autonomy | <$2K | None | Community moat | High | 6 (later) |

# Decision

**Build Bet C.** Reasons:
- Only bet that uses both sides of warm list as zero-CAC channel
- Strongest unit economics under bootstrap (no paid acquisition needed)
- Contains Bet A as side-effect (therapist gets dashboard free)
- Solves the most-cited problem across raw interviews and structured research
- 12-mo MRR target compatible with profitable LATAM lifestyle business
- Wedge + expand path: autism → ADHD → general pediatric therapy

Fallback if C fails: pivot to A using same therapist warm list.

# Open questions

- Of the 20 warm professionals, how many are private practice (will pay personally) vs employed at clinic (procurement gate)?
- Of the 30 mothers, what's the kid-age distribution? Bet C needs ≥10 with kid 4-12 in active therapy.
- Therapy-week volume per warm therapist (for daily prompt cadence design)
- Whether warm therapists will let recordings be used for AI training (E29 type insights → training corpus moat)

# Next steps

1. Tag warm list by subtype (private-practice vs clinic-employed; kid age; current therapy frequency)
2. Draft pilot pitch script (Spanish, voice + text) for 4-week paid pilot at $25/mo parent
3. Run 5 therapist + 10 mother calls week 1
4. Concierge MSP weeks 3-6 (WhatsApp Business + Notion, manual prompts)
5. Software MSP weeks 7-10 if ≥3 paying pairs renew

# Sources

- Raw interviews: [`journey.md`](../journey.md) E01-E29
- Personas: [`business/research/personas.md`](../business/research/personas.md)
- Problems: [`business/research/problems.md`](../business/research/problems.md)
- Competitive landscape: [`business/research/competitors/`](../business/research/competitors/) (60+ files)
