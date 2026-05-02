---
slug: competitive-landscape
title: Autism wellness/education competitive landscape — segmentation, whitespace, wedge map
last_reviewed: 2026-05-02
geos_focus: [PE, MX, CO, AR, EC, CL]
geos_anchor: [US, EU, ES]
product_scope: wellness-education-only
personas: [tea-kid, parent, professional]
status: living-document
related: [./market.md, ./pricing.md, ./personas.md, ./problems.md, ./competitors/]
---

# Scope

Meta-overview of the 52 competitor files in [./competitors/](./competitors/). Segments by **category × buyer × geo × clinical claim level**, then identifies the structural gaps where no competent product currently exists. Wedges link directly to [problems.md](./problems.md) entries.

Not a buying guide. A map of who occupies what cell, who is weak in that cell, and which cells are empty. Decisions live in `product/` and `company/`.

`Note:` Per [business/CLAUDE.md](../CLAUDE.md), this is research, not a commitment. The "where we go" question is answered in `company/` and `product/`.

# Segmentation matrix

## By primary category

| Category | Count | Files |
|---|---|---|
| AAC apps (consumer / proprietary device) | 13 | [proloquo2go](./competitors/proloquo2go.md), [touchchat](./competitors/touchchat.md), [lamp-words-for-life](./competitors/lamp-words-for-life.md), [coughdrop](./competitors/coughdrop.md), [cboard](./competitors/cboard.md), [asterics-grid](./competitors/asterics-grid.md), [niki-talk](./competitors/niki-talk.md), [jabtalk](./competitors/jabtalk.md), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [avaz](./competitors/avaz.md), [speak-for-yourself](./competitors/speak-for-yourself.md), [letmetalk](./competitors/letmetalk.md), [lingraphica](./competitors/lingraphica.md) |
| Pictogram libraries / standards | 1 | [arasaac](./competitors/arasaac.md) |
| Visual schedule / routine | 5 | [choiceworks](./competitors/choiceworks.md), [first-then-visual-schedule](./competitors/first-then-visual-schedule.md), [brili](./competitors/brili.md), [goally](./competitors/goally.md), [pictogramagenda](./competitors/pictogramagenda.md) |
| Social skills / emotions | 7 | [otsimo](./competitors/otsimo.md), [autispark](./competitors/autispark.md), [social-express](./competitors/social-express.md), [model-me-kids](./competitors/model-me-kids.md), [look-at-me-samsung](./competitors/look-at-me-samsung.md), [avokiddo-emotions](./competitors/avokiddo-emotions.md), [zones-of-regulation-app](./competitors/zones-of-regulation-app.md) |
| ABA practice mgmt + data | 8 | [centralreach](./competitors/centralreach.md), [catalyst-ensora](./competitors/catalyst-ensora.md), [hi-rasmus](./competitors/hi-rasmus.md), [rethink-behavioral-health](./competitors/rethink-behavioral-health.md), [motivity](./competitors/motivity.md), [raven-health](./competitors/raven-health.md), [theralytics](./competitors/theralytics.md), [therap](./competitors/therap.md) |
| Parent / tracking / clinical-screening | 4 | [birdhouse](./competitors/birdhouse.md), [mita](./competitors/mita.md), [floreo](./competitors/floreo.md), [cognoa-canvas-dx](./competitors/cognoa-canvas-dx.md) |
| LATAM / Spanish-first apps | 13 | [dia-a-dia](./competitors/dia-a-dia.md), [jose-aprende](./competitors/jose-aprende.md), [pictotea](./competitors/pictotea.md), [sigueme](./competitors/sigueme.md), [arasuite-araword-araboard](./competitors/arasuite-araword-araboard.md), [picto-selector](./competitors/picto-selector.md), [dictapicto](./competitors/dictapicto.md), [soyvisual](./competitors/soyvisual.md), [autistapp](./competitors/autistapp.md), [araboard](./competitors/araboard.md), [proyecto-habilidades](./competitors/proyecto-habilidades.md), [autismored](./competitors/autismored.md), [pictoaplicaciones](./competitors/pictoaplicaciones.md), [aprendices-visuales](./competitors/aprendices-visuales.md), [talkaactive](./competitors/talkaactive.md) |

`View:` count is a popularity proxy, not a quality proxy. The AAC and ABA-software cells are crowded but mostly old; the LATAM cell is crowded but underfunded.

## By buyer (who pays)

| Buyer | Count | Pattern |
|---|---|---|
| Parent direct (B2C) | 26 | AAC apps + visual schedules + social-skills games + most LATAM apps. Lifetime/freemium dominant. |
| Insurance / device funding (US) | 4 | [proloquo2go](./competitors/proloquo2go.md) (via SGD funding), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [lamp-words-for-life](./competitors/lamp-words-for-life.md), [lingraphica](./competitors/lingraphica.md). Does not transfer to LATAM. |
| Clinic / professional (B2B per-seat) | 8 | All ABA software. USD 24–500+/user/month. |
| School / district (B2B bulk) | 3 | [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [centralreach](./competitors/centralreach.md), [rethink-behavioral-health](./competitors/rethink-behavioral-health.md) (school edition). Heavy implementation. |
| Free / donation / NGO-funded | 11 | [arasaac](./competitors/arasaac.md), [cboard](./competitors/cboard.md), [asterics-grid](./competitors/asterics-grid.md), [letmetalk](./competitors/letmetalk.md), [jabtalk](./competitors/jabtalk.md), [picto-selector](./competitors/picto-selector.md), [dictapicto](./competitors/dictapicto.md), [soyvisual](./competitors/soyvisual.md), [jose-aprende](./competitors/jose-aprende.md), [aprendices-visuales](./competitors/aprendices-visuales.md), [autismored](./competitors/autismored.md). Mostly Spain-funded. |

## By geography (real distribution, not "available on the App Store")

| Geo cluster | Count actively serving | Notes |
|---|---|---|
| US-only / US-anchored | 21 | Most ABA software, most US AAC majors. Pricing assumes insurance reimbursement. |
| US + EU + multi-region | 8 | [proloquo2go](./competitors/proloquo2go.md), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [otsimo](./competitors/otsimo.md), [coughdrop](./competitors/coughdrop.md), [cboard](./competitors/cboard.md), [therap](./competitors/therap.md), [centralreach](./competitors/centralreach.md), [catalyst-ensora](./competitors/catalyst-ensora.md). |
| Spain-anchored, available LATAM | 13 | All [arasaac](./competitors/arasaac.md)-derived or Spain government / NGO-funded apps. Spanish UI but ES-Spain dialect. Distribution into LATAM is incidental. |
| LATAM-origin actively maintained | 4 | [niki-talk](./competitors/niki-talk.md) (AR), [autistapp](./competitors/autistapp.md) (AR), [autismored](./competitors/autismored.md) (CO), [talkaactive](./competitors/talkaactive.md) (MX). Smallest of the bunch. |
| LATAM-origin abandoned / dormant | 2+ | [pictotea](./competitors/pictotea.md) status uncertain; some [arasuite](./competitors/arasuite-araword-araboard.md) deps unmaintained. |
| **Peru-origin actively serving Peru** | **0** | Empty cell. |

`View:` This is the loudest signal in the matrix. **No Peru-origin product serves Peruvian families.** All "Spanish" tools are Spain-dialect, NGO-funded, or dormant Argentine projects. Peru is served only as a residual market for Spain's exports.

## By clinical claim level

| Level | Count | Pattern |
|---|---|---|
| Wellness / education only | 38 | Vast majority. Includes most LATAM apps and all visual schedules. |
| Clinician tool (no diagnosis) | 13 | All ABA software, [floreo](./competitors/floreo.md) (under FDA review), [lingraphica](./competitors/lingraphica.md). |
| SaMD / FDA-cleared | 1 | [cognoa-canvas-dx](./competitors/cognoa-canvas-dx.md) (FDA-cleared diagnostic, separate regulatory pathway). |

`View:` Almost everyone in the consumer space is wellness/education. The bar to enter is low. The bar to **be defensible** in wellness/education is content depth + UX + localization + retention — not regulatory.

## By target user (kid / parent / professional)

| Target user pattern | Count | Examples |
|---|---|---|
| Kid only | 6 | [autispark](./competitors/autispark.md), [look-at-me-samsung](./competitors/look-at-me-samsung.md), [model-me-kids](./competitors/model-me-kids.md), [avokiddo-emotions](./competitors/avokiddo-emotions.md), [jose-aprende](./competitors/jose-aprende.md), [aprendices-visuales](./competitors/aprendices-visuales.md). |
| Parent only | 2 | [birdhouse](./competitors/birdhouse.md), [brili](./competitors/brili.md). |
| Professional only | 9 | All ABA software except [therap](./competitors/therap.md) (which is also institutional). |
| Kid + parent | 16 | Most AAC apps, [otsimo](./competitors/otsimo.md), [goally](./competitors/goally.md), most LATAM. |
| Kid + professional | 8 | [proloquo2go](./competitors/proloquo2go.md), [coughdrop](./competitors/coughdrop.md), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [floreo](./competitors/floreo.md), [lingraphica](./competitors/lingraphica.md), [pictogramagenda](./competitors/pictogramagenda.md), [autistapp](./competitors/autistapp.md), [niki-talk](./competitors/niki-talk.md). |
| **All three (kid + parent + professional)** | **3** | [coughdrop](./competitors/coughdrop.md), [otsimo](./competitors/otsimo.md), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md). |
| **All three + with retention loop across them** | **0** | Empty cell. |

`View:` Three apps formally claim all three personas. None operationalizes the **loop** between them: kid uses → parent sees what kid actually used → professional sees same and adjusts plan → kid feels respected, not surveilled (see [problems.md §2 AAC abandonment](./problems.md)). The CoughDrop concept comes closest but UI/distribution are weak.

# Per-category teardown

## AAC apps

**Three structural patterns:**

1. **US premium lifetime (USD 100–300)** — [proloquo2go](./competitors/proloquo2go.md), [touchchat](./competitors/touchchat.md), [lamp-words-for-life](./competitors/lamp-words-for-life.md), [td-snap-tobii-dynavox](./competitors/td-snap-tobii-dynavox.md), [speak-for-yourself](./competitors/speak-for-yourself.md). Default in US. Treated as assistive equipment, not subscription. SLP-mediated purchase. ARASAAC absent (use proprietary symbol libraries SymbolStix, PCS, Metacom). Spanish UI exists; LATAM clinical content does not.
2. **Web/cross-platform mid-tier** — [coughdrop](./competitors/coughdrop.md), [avaz](./competitors/avaz.md). Subscription. Open data philosophy. Smaller install base.
3. **Free / open / regionally-funded** — [cboard](./competitors/cboard.md), [asterics-grid](./competitors/asterics-grid.md), [letmetalk](./competitors/letmetalk.md), [jabtalk](./competitors/jabtalk.md), [niki-talk](./competitors/niki-talk.md). ARASAAC-based. Free and frequently abandoned (50% AAC abandonment rate per [problems.md §2](./problems.md)).

**Common gaps across all three:**
- **No parent training surface.** AAC apps assume someone teaches the parent how to be a communication partner. None of the apps does. This is the proximate cause of the 50% abandonment rate.
- **No SLP-parent shared view.** SLP cannot see what the kid is actually using at home; parent cannot see what the SLP set up at clinic.
- **Spanish-language is UI-only.** Vocabulary, grammar quirks (LATAM voseo, tuteo, ustedeo), pictogram dialect (carro/auto/coche, durazno/melocotón) are not addressed.
- **Indigenous-language vocabulary (Quechua, Aymara, Guaraní) is effectively zero.**

## Visual schedules / routines

- 5 specialized apps. iOS-dominant, English-dominant ([choiceworks](./competitors/choiceworks.md), [first-then](./competitors/first-then-visual-schedule.md), [brili](./competitors/brili.md)). One Android-friendly LATAM-leaning ([pictogramagenda](./competitors/pictogramagenda.md)).
- [goally](./competitors/goally.md) sells dedicated hardware tablet — too expensive for LATAM private-pay.
- **Gap:** No school-home shared schedule (see [problems.md §5](./problems.md)). Teacher fills paper "cuaderno viajero"; parent never sees the same surface.

## Social skills / emotions

- 7 apps. Most are 2014-era content that has not aged well. [look-at-me-samsung](./competitors/look-at-me-samsung.md) is essentially abandoned. [model-me-kids](./competitors/model-me-kids.md) is video library, not interactive.
- [zones-of-regulation-app](./competitors/zones-of-regulation-app.md) is the strongest evidence-aligned but English-only.
- **Gap:** Teen-self-directed (persona 1c — see [personas.md](./personas.md)) is unaddressed. Every social-skills app reads as "for the adult who is worried about you", not "for you, by us".

## ABA practice management

- 8 apps. US-only, English-only, professional-only.
- [centralreach](./competitors/centralreach.md) is incumbent; opaque pricing; UI dated.
- [theralytics](./competitors/theralytics.md), [raven-health](./competitors/raven-health.md), [motivity](./competitors/motivity.md) are the price-transparent disrupters. Sub-USD 30/user.
- **Gap:** All assume US billing infrastructure (Medicaid HCBS, EVV, NPI numbers). LATAM clinics need scheduling + session notes + parent communication, not US compliance plumbing.

## Parent / tracking / screening

- 4 apps. [birdhouse](./competitors/birdhouse.md) status uncertain. [mita](./competitors/mita.md) is the leading parent-driven cognitive-development tool. [floreo](./competitors/floreo.md) is VR therapy adjunct. [cognoa-canvas-dx](./competitors/cognoa-canvas-dx.md) is the only FDA-cleared diagnostic.
- **Gap:** No structured "30-day post-diagnosis program" in Spanish (see [problems.md §4](./problems.md)). The exact moment of highest parent willingness to pay is currently served by Google + WhatsApp groups.

## LATAM / Spanish-first

- 13 apps. Mostly Spain-funded NGO or government. [arasaac](./competitors/arasaac.md) underpins almost all of them.
- [niki-talk](./competitors/niki-talk.md) is the only LATAM commercial-quality app at scale; AR-origin but available across LATAM. Dated UI.
- [autistapp](./competitors/autistapp.md), [autismored](./competitors/autismored.md), [talkaactive](./competitors/talkaactive.md) are LATAM-origin but small.
- **Gap:** No LATAM-origin **subscription product with retention investment**. All free apps installed-and-abandoned; all paid apps imported from US.
- **Gap:** No LATAM-origin product treats Indigenous languages.

# The whitespace map

The cells where no competent product exists. Cross-referenced with [problems.md](./problems.md):

| Whitespace cell | Linked problem | Evidence of gap |
|---|---|---|
| **Peru-origin product serving Peru** | All. Diagnostic delay (97% gap), AAC abandonment, parent post-dx chaos. | 0 of 52 competitors are Peru-origin. |
| **AAC + parent training as co-product** | [§2 AAC abandonment](./problems.md) | All 13 AAC apps treat parent as install-and-walk-away. |
| **School-home shared schedule (LATAM)** | [§5 school-home discontinuity](./problems.md) | "Cuaderno viajero" is paper. No app bridges PE SAANEE / MX CAM / etc. with home. |
| **30-day post-diagnosis program (Spanish)** | [§4 post-diagnosis chaos](./problems.md) | WHO Caregivers Skills Training is research, not consumer product. |
| **Teen-self-directed (12–18) wellness** | [persona 1c](./personas.md) | All "autism apps" assume parent is the user. |
| **Indigenous-language pictogram set** | [persona §1a Quechua/Aymara/Guaraní](./personas.md) | <1% of available autism digital content. |
| **LATAM dialect-aware AAC vocabulary** | [§2 AAC abandonment](./problems.md) | All Spanish AAC defaults to Spain-Spanish. |
| **Parent + SLP shared view of what kid actually used** | [§2 AAC abandonment](./problems.md) | None of 13 AAC apps. |
| **LATAM clinic SaaS without US billing plumbing** | (not yet in problems.md) | All 8 ABA-software products are US-only. |
| **Caregiver mental health, autism-specific (LATAM)** | [§3 caregiver mental load](./problems.md) | Calm/Headspace exist but are not autism-aware; no LATAM product targets this. |

# Wedge synthesis

`View:` The structural opportunity is a **LATAM-origin, Spanish-first, cross-persona product (kid + parent + professional)** that closes the AAC-abandonment loop by treating the parent as a co-user from day one, with a school/clinic-shared surface and a 30-day post-diagnosis onboarding program.

**This combines four whitespace cells**: (a) Peru-origin product, (b) AAC + parent training, (c) school-home shared surface, (d) post-diagnosis program. It does **not** require regulatory clearance — wellness/education framing per [business/CLAUDE.md product scope](../CLAUDE.md). It defends against US AAC majors via LATAM-dialect vocabulary, against Spain-NGO apps via subscription investment in retention, and against US ABA software via lack of need for US billing plumbing.

**The most defensible single feature** is the AAC parent-training surface that turns the 50% abandonment rate into a retention metric: every "today, intentionally pause before handing them the cup" prompt the parent completes is a retention event for the family and a logged communication-opportunity event for the SLP.

# Competitors not yet researched (gaps in this file)

`Estimate:` substantive competitors found in initial scan but not yet written up:

- **Awake Labs / Reveal** (Canada) — biometric anxiety detection. Adjacent, not direct.
- **As You Are** (US) — virtual diagnostic clinic. Service, not app. Out of consumer scope.
- **Behaivior** (US) — addiction predictive model, autism adjacent claim. Edge case.
- **Kyo** — therapy services holding company, acquired multiple ABA practices. Not a software company in the same sense.
- **Visual Schedule Planner** (Good Karma Apps) — older iOS app, possibly dormant. Worth a 1-pager.
- **NeuroFlow** — adult mental health platform with autism-adjacent claims. Adult, not pediatric.
- **Speech Blubs** (Slovenia/US) — speech therapy gamified, autism-adjacent. Worth a file.
- **Articulation Station** (Little Bee Speech) — SLP tool, not autism-specific but used heavily.
- **Endeavor OTC** (game-based ADHD treatment, FDA-cleared) — adjacent SaMD, not autism. Worth referencing in [pricing.md](./pricing.md).
- **Floreo competitors in VR autism therapy** (Daivergent, Kakamora) — small.
- **Open AAC ecosystem participants** beyond CoughDrop/AsTeRICS — OpenBoard, Snap+Core First (TD Snap, already covered).

`Action:` Add 1-pagers for **Speech Blubs** and **Visual Schedule Planner** in next research pass; the others are out of direct competitive frame.

# Update log

- 2026-05-02 — initial draft. 52 competitor files indexed; whitespace and wedge mapped.

# Sources

This file synthesizes [./competitors/](./competitors/) — see individual files for primary sources. Cross-references:
- [./market.md](./market.md) — sizing of cells called out as whitespace.
- [./pricing.md](./pricing.md) — anchors for pricing benchmarks per category.
- [./personas.md](./personas.md) — persona definitions referenced by target-user matrix.
- [./problems.md](./problems.md) — wedge_potential ratings link directly to whitespace cells.
