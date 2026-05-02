---
slug: pecs-evidence
status: stable
last_reviewed: 2026-05-02
related_topics: [aac-apps-landscape, aac-symbol-systems]
---

# Summary
PECS (Picture Exchange Communication System, Bondy & Frost 1994) has the strongest evidence base of any low-tech AAC modality for autistic individuals: confirmed EBP in Hume 2021's third-generation NCAEP review ([hume2021-ebp-third-gen]) and in Project AIM's meta-analyses. Effects are **moderate-to-large for functional/requesting communication, small for spontaneous speech, and weakest for older children and those with comorbid intellectual disability without scaffolding**. The 2007 Howlin RCT ([howlin2007-pecs-rct], n=84) remains the largest controlled trial: PECS-trained children initiated communication ~2.7x more often than controls, but with no measurable speech advantage and effects fading 10 months post-training. Head-to-head with speech-generating devices (SGDs) shows **no consistent winner** ([gilroy2018-pecs-vs-sgd-rct], [boesch2013-pecs-sgd]), with [ganz2014-aac-participant-interaction] suggesting PECS edges SGDs for ASD+IDD profiles and SGDs edge PECS for ASD-without-IDD. **Phase progression matters more than starting modality**: children who reach Phase IV+ (sentence structure) show the largest gains across outcomes ([ganz2012-pecs-targeted-meta]).

# Evidence

## Foundational protocol
- [bondy1994-pecs-manual] — Defines the 6 PECS phases: (I) physical exchange, (II) distance/persistence, (III) discrimination, (IV) sentence structure, (V) responding to "what do you want?", (VI) commenting. Phase progression is the protocol's load-bearing element.
- [charlop2002-pecs-multibaseline] — Foundational n=3 multiple-baseline showing PECS acquisition + collateral spontaneous speech + collateral social-communicative behaviors. Cited 1,000+ times; established the "PECS may also support speech" hypothesis.

## Meta-analyses & systematic reviews
- [flippin2010-pecs-meta] — Small-to-moderate gains in functional communication; small-to-negligible effects on spontaneous speech.
- [ganz2012-pecs-targeted-meta] — IRD effect sizes by outcome and moderator: functional communication strongest; preschoolers > older children; autism-only > comorbid IDD; more PECS phases acquired = larger overall effect.
- [ganz2012-aac-meta] — Broader AAC meta-analysis where PECS, SGDs, and other picture-based systems all show large gains in communication outcomes for individuals with developmental disabilities.
- [ganz2014-aac-participant-interaction] — Meta-stratified by participant: SGDs most effective for ASD-only; PECS most effective for ASD+IDD; preschool universally highest-yield window.
- [hume2021-ebp-third-gen] — PECS confirmed EBP within the broader AAC and MIMC (multi-component intervention) evidence groupings.
- [sandbank2020-project-aim] / [sandbank2023-project-aim-update] — Project AIM meta-analyses confirm AAC + naturalistic developmental behavioral intervention as evidence-supported categories.

## Controlled trials (RCT-level)
- [howlin2007-pecs-rct] / [howlin2007-pecs-cluster-rct] — UK cluster RCT, n=84, three arms (immediate PECS training, delayed PECS, no-training). Initiations OR 2.72; rate ratio 2.13 (95% CI 1.13–4.03). No speech effect. Effects decayed by 10-month follow-up.
- [gordon2011-pecs-predictors] — Howlin trial secondary analysis: baseline picture-card use predicted treatment response (RR 1.90); baseline spontaneous speech predicted response (RR 1.77).
- [kasari2014-jasper-emt-sgd] — SMART trial, n=61 minimally-verbal children. Adding an SGD (Proloquo2Go on iPad) to JASP+EMT outperformed JASP+EMT alone on socially-communicative utterances. Not PECS-specific but informs PECS-vs-SGD comparison: for minimally-verbal kids, a tablet SGD added to a naturalistic intervention beats spoken-modeling alone.
- [gilroy2018-pecs-vs-sgd-rct] — RCT n=35 directly comparing PECS to iPad SGD. No statistically significant difference in primary outcomes.

## Single-subject comparisons
- [boesch2013-pecs-sgd] — Adapted alternating-treatment design n=3. No clear PECS vs. SGD superiority on requesting acquisition.

# Effect-size summary

| Outcome | Best estimate | Source |
| --- | --- | --- |
| Initiation rate (PECS vs control) | OR 2.72 | [howlin2007-pecs-rct] |
| Communication acts rate ratio | 2.13 (95% CI 1.13–4.03) | [howlin2007-pecs-rct] |
| Speech outcomes | Small / negligible | [flippin2010-pecs-meta] |
| Functional comm (IRD) | Strongest of categories | [ganz2012-pecs-targeted-meta] |
| Picture-card baseline → response | RR 1.90 | [gordon2011-pecs-predictors] |
| Spontaneous speech baseline → response | RR 1.77 | [gordon2011-pecs-predictors] |
| PECS vs SGD head-to-head | No consistent difference | [gilroy2018-pecs-vs-sgd-rct], [boesch2013-pecs-sgd] |

# Open questions
- **Durability beyond 1 year**. Howlin's 10-month decay is the largest-N data point on durability; longer follow-ups are missing from the literature.
- **PECS Phase IV–VI evidence**. Most studies report Phase I–III acquisition. Sentence structure, "what do you want?" response, and commenting are under-studied in controlled designs.
- **Tablet-PECS hybrids**. Apps that simulate the exchange (drag-card-to-listener) have no published efficacy data separating them from on-screen-only SGDs. The exchange action may or may not be the active ingredient.
- **PECS in Spanish-speaking contexts**. No identified RCT-level evaluation in LATAM. Pyramid Educational Consultants distributes PECS-Spanish materials; outcome studies are missing.
- **PECS for adults with acquired disability**. Almost all published PECS evidence is pediatric ASD; adult ASD or post-stroke applications are under-evidenced.
- **Active ingredient**. Is the gain from (a) the picture symbols, (b) the physical exchange action, (c) the structured 6-phase teaching protocol, or (d) the trainer's prompting hierarchy? The trial designs do not isolate these.

# Builder takeaways
- **PECS protocol > PECS app**. The evidence base is for the *protocol* (6 phases, exchange, prompting hierarchy). Any product that ships a "PECS-like" interface without enforcing phase progression and discrimination training is borrowing PECS branding without PECS efficacy.
- **Phase awareness in product**. Build phase as a first-class entity. Track which phase the user is in. Surface to caregivers when a user has stalled (e.g., 30 days without phase advancement). Auto-suggest phase-IV sentence-strip drill when phase-III discrimination is solid.
- **Exchange-mode is differentiated UX**. Until the active-ingredient question is settled, offering a "send to listener" mode (BLE peer-to-peer, scan-QR, or send-to-paired-device) preserves the exchange action that distinguishes PECS from on-screen-only SGDs. Cheap to build, defensible to skeptics.
- **Stratify by cognitive profile**. ASD-only users may benefit from full SGD interface earlier; ASD+IDD users may benefit from more scaffolded exchange-style interaction longer. Don't ship one rigid path. See [ganz2014-aac-participant-interaction].
- **Predictors as onboarding signal**. [gordon2011-pecs-predictors] shows baseline picture-card use and any spontaneous speech are positive prognostic indicators. Capture these at onboarding and show realistic expectation framing to families ("evidence suggests faster gains for users who already…").
- **Counter the "AAC delays speech" myth proactively**. Pair the PECS onboarding with the [millar2006-aac-speech] (89% gain in speech) and [schlosser2008-aac-autism-speech] data. The myth is the #1 abandonment driver per [yau2024-aac-barriers].
- **Don't over-claim**. Call PECS-style intervention "evidence-based for functional communication". Do *not* claim it teaches speech. Do *not* claim durability beyond 1 year. Honest framing builds trust with informed families.
- **Preschool is the highest-yield window**. Acquisition rates are largest in 3–5-year-olds. Marketing, partnerships, and pricing should center this segment. Older-child onboarding needs different scaffolding (age-appropriate art, less juvenile UI).
- **Spanish-language PECS materials gap**. No published RCT in Spanish-speaking LATAM. A locally-validated implementation study is a credible academic-partnership angle for Peru/Mexico.
