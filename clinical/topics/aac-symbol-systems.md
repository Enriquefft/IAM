---
slug: aac-symbol-systems
status: stable
last_reviewed: 2026-05-02
related_topics: [aac-apps-landscape, pecs-evidence]
---

# Summary
AAC pictogram libraries split into three license tiers: (1) **proprietary** (PCS/Boardmaker, SymbolStix, Widgit) — high polish, locked behind per-seat licenses, dominant in US/EU SLP supply chain; (2) **open Creative Commons** (ARASAAC, Mulberry, SCLERA, Tawasol, Soyvisual) — free at zero cost but with non-commercial / share-alike terms that constrain SaaS monetization; (3) **historical / lingua-franca** (Bliss) — semantically rich, niche user base. Empirical evidence on symbol "iconicity" is weak: ARASAAC name-agreement averages ~36% match with intended meaning ([paolieri2018-arasaac-norms]) and transparency averages ~0.39 on 0–1 scale ([diez2024-arasaac-transparency]). No symbol set has demonstrated outcome superiority in head-to-head trials. License terms — not symbol quality — are the binding constraint for a LATAM-targeted commercial AAC product.

# System catalog

## ARASAAC
- **Maintainer**: Aragonese Centre for Augmentative and Alternative Communication (Gobierno de Aragón, Spain).
- **License**: CC BY-NC-SA 4.0. Non-commercial only; derivatives must share-alike.
- **Count**: ~12,909 pictograms indexed via OpenSymbols catalog; ~14,000+ in native ARASAAC catalog (color + b/w variants).
- **Languages**: 30+ via the ARASAAC API (Spanish primary; English, French, Portuguese, Italian, German, Catalan, Basque, Galician, Russian, Arabic, Polish, etc.).
- **Format**: PNG + SVG (vector). API returns metadata + image binary.
- **API/SDK**: Public REST API at api.arasaac.org; documented endpoints for pictogram search, keyword localization, materials.
- **Used by**: AraBoard, Niki Talk, Pictogram Room, Soy Visual; default pictogram set across LATAM public-sector AAC.
- **Evidence**: [paolieri2018-arasaac-norms] (name agreement 36%); [diez2024-arasaac-transparency] (transparency 0.39).
- **Builder note**: NC clause blocks pure-SaaS monetization. Two paths: (a) ship ARASAAC as the free tier, monetize features (sync, family sharing, analytics) — confirm with ARASAAC team; (b) negotiate commercial license directly.

## SymbolStix
- **Maintainer**: News2You / n2y LLC (US).
- **License**: Proprietary. Per-seat or per-app licensing.
- **Count**: 30,000+ symbols.
- **Languages**: English primary; partial Spanish, French, German via partner apps.
- **Format**: Vector (SVG); raster export.
- **API/SDK**: Closed; OEM agreements only.
- **Used by**: Proloquo2Go (default symbol set), TouchChat, n2y's own News-2-You curriculum.
- **Evidence**: No public iconicity studies found.
- **Builder note**: Cannot use without a licensing deal. Pricing is the gatekeeper for indie/small-vendor competitors.

## PCS (Picture Communication Symbols) / Boardmaker
- **Maintainer**: Tobii Dynavox (Sweden/US).
- **License**: Proprietary. Boardmaker subscription required.
- **Count**: 45,000+ symbols.
- **Languages**: 44+ language packs.
- **Format**: WMF (legacy) + PNG; vector internal.
- **API/SDK**: Boardmaker Online has limited integration; no public SDK.
- **Used by**: Boardmaker software family, TD Snap, Tobii Dynavox devices, schools that procured PCS in the 1990s–2000s.
- **Evidence**: No public outcome-superiority studies vs. other symbol sets.
- **Builder note**: PCS is the legacy standard in US K-12 SLP. Not viable for a new commercial entrant unless OEM-licensed.

## Mulberry Symbols
- **Maintainer**: Garry Paxton (originally for the Open Symbols project).
- **License**: CC BY-SA 2.0 UK. Commercial use permitted; derivatives must share-alike.
- **Count**: ~3,400 symbols.
- **Languages**: English primary; community translations.
- **Format**: SVG (vector).
- **API/SDK**: Distributed via OpenSymbols.org; no live API.
- **Used by**: CoughDrop (open-source AAC app), Cboard, various open-source projects.
- **Evidence**: No iconicity studies indexed.
- **Builder note**: One of the few symbol sets where commercial use is unambiguously allowed. Smaller catalog than ARASAAC; "share-alike" clause must be honored on any modified symbols.

## Bliss / Blissymbolics
- **Maintainer**: Blissymbolics Communication International (BCI), Toronto.
- **License**: BCI charter; non-commercial educational use generally free; commercial use requires BCI authorization.
- **Count**: ~5,000+ authorized Bliss-words; combinatorial via radicals.
- **Languages**: Bliss is a semantic ideographic system — language-independent at the symbol layer; gloss translations exist in 17+ languages.
- **Format**: SVG; structured metadata via the Bliss reference set.
- **API/SDK**: BCI maintains a reference list; no public API.
- **Used by**: Specialized SLP practice for users with motor disabilities and high cognitive ability; legacy installed base.
- **Evidence**: Semantic depth recognized; learning curve steep. Niche user base compared to picture symbols.
- **Builder note**: Niche. Not the right default for an early-acquisition AAC app, but an option for adults with acquired disabilities (post-stroke, ALS).

## Widgit Symbols
- **Maintainer**: Widgit Software (UK).
- **License**: Proprietary. Per-seat / per-organization licensing. Education licenses common in UK.
- **Count**: 18,000+ symbols.
- **Languages**: English primary; multiple European language packs.
- **Format**: WMF + PNG.
- **API/SDK**: Widgit Symbols for Office (Word plug-in); limited third-party integration.
- **Used by**: Widgit's own InPrint and SymWriter; UK SEN classrooms.
- **Evidence**: No public outcome-superiority studies.
- **Builder note**: UK-dominant. Not relevant to LATAM market unless explicitly targeting UK schools.

## SCLERA
- **Maintainer**: SCLERA vzw (Belgium).
- **License**: CC BY-NC 2.0 Belgium. Non-commercial only; no share-alike clause.
- **Count**: ~13,000 pictograms.
- **Languages**: Dutch primary; French, English secondary.
- **Format**: B/W line drawings (PNG + vector).
- **API/SDK**: Catalog distribution via SCLERA website.
- **Used by**: Belgian/Dutch AAC tools; integrated into some open-source aggregators (OpenSymbols).
- **Evidence**: No iconicity studies indexed.
- **Builder note**: Distinctive minimalist line-drawing aesthetic. NC clause blocks commercial use.

## Tawasol Symbols
- **Maintainer**: Hamad Bin Khalifa University / Mada Center (Qatar).
- **License**: CC BY-SA 4.0 (commercial use permitted with share-alike).
- **Count**: 1,400+ symbols.
- **Languages**: Arabic-first (the only major AAC symbol set with Arabic cultural context); English glosses.
- **Format**: SVG.
- **API/SDK**: Catalog download; integrated into Mada AAC initiatives.
- **Used by**: MENA-region AAC apps; researchers building Arabic AAC.
- **Evidence**: No iconicity studies indexed.
- **Builder note**: Not relevant to LATAM directly, but a useful precedent: a regionally-relevant symbol set with permissive commercial license.

## Soy Visual / Soyvisual
- **Maintainer**: Fundación Orange + Asociación BATA (Spain).
- **License**: CC BY-NC-SA 4.0 (typical for Fundación Orange resources).
- **Count**: ~1,000+ photographic + illustrated symbols (smaller catalog than ARASAAC).
- **Languages**: 9+ — Spanish, English, Catalan, Euskera, Valencian, Italian, French, Portuguese, Galician, Ukrainian.
- **Format**: PNG. Uses real-photo + cartoon hybrid aesthetic.
- **API/SDK**: Catalog browsing on soyvisual.org; downloadable boards.
- **Used by**: Soyvisual's own free communicator app (iOS/Android); Spanish-speaking SLPs as supplement to ARASAAC.
- **Evidence**: No outcome studies indexed.
- **Builder note**: Photographic symbols are the highest-iconicity option for early symbolic communicators (real fridge vs. cartoon fridge). Photo + ARASAAC pictogram side-by-side may be the right scaffold for first 100 words.

## Open-source aggregators

- **OpenSymbols.org** — single search index across ARASAAC, Mulberry, SCLERA, Tawasol, others. JSON API. Used by CoughDrop, AsTeRICS Grid as upstream.
- **Global Symbols** — UK-based registry promoting localization of symbol sets to under-served languages.

# Evidence
- [paolieri2018-arasaac-norms] — ARASAAC name-agreement only 36% match with intended meaning across 332 pictograms; supports claim that "iconic" symbols still need teaching.
- [diez2024-arasaac-transparency] — ARASAAC mean transparency 0.39 / 1.0; verbs and abstract concepts score lowest.
- [banajee2003-toddler-core] — 23 core words = 96% of toddler utterances; supports building any symbol-set deployment around a core grid first.
- [laubscher2020-core-vocab-review] — published core lists may not match early symbolic communicators; warns against single-list orthodoxy.
- [bondy1994-pecs-manual] — PECS protocol assumes physical card exchange; symbol set is secondary to the exchange protocol.

# Open questions
- No head-to-head outcome trial comparing two symbol sets (e.g., PCS vs. ARASAAC) on language acquisition.
- Iconicity norms exist for ARASAAC; no comparable norms found for SymbolStix, PCS, or Mulberry.
- Cultural validation of LATAM-specific objects/foods (chicha, anticucho, mate, arepas) within ARASAAC is incomplete; no published audit.
- Quechua and Aymara gloss coverage in ARASAAC API not verified — likely zero.
- Commercial-license terms for ARASAAC's "for-profit" use case are not publicly published; a direct request to the Aragonese government is the only path to clarity.

# Builder takeaways
- **License-first selection**. Symbol-set choice is a license decision, not an aesthetic decision. For a commercial LATAM AAC product, the only zero-cost commercially-usable options are Mulberry (3,400) and Tawasol (1,400 Arabic-context). ARASAAC requires either (a) free-tier-only positioning or (b) negotiated commercial license.
- **Hybrid catalog as default**. Combining photos + ARASAAC + Mulberry covers iconicity range and license tiers. Photos handle highest-iconicity early vocab; ARASAAC handles depth; Mulberry handles commercial fallback.
- **API-driven, not bundled**. Pull symbols at runtime via OpenSymbols / ARASAAC API rather than shipping a static catalog. Lets you swap or add sets without app updates.
- **LATAM cultural gap is a moat**. No major symbol set has audited LATAM cultural fit. A small LATAM-specific extension catalog (regional foods, holidays, transport — combi, mototaxi, micro) is cheap to build and unique competitive value.
- **Quechua/Aymara translations**. Symbol metadata in indigenous languages is essentially nonexistent. Either contribute glosses upstream to ARASAAC API or maintain a parallel translation table — see [tonsing2020-multilingual-aac-ideology] and [soto2014-bilingual-aac] for ideological framing.
- **Iconicity is taught, not assumed**. With ARASAAC name-agreement at 36%, every symbol added to a user's grid should be paired with explicit teaching, not assumed self-explanatory. Onboarding flow must include "teach this symbol" mode, not just "add to grid".
