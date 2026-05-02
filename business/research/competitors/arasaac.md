---
slug: arasaac
name: ARASAAC (Aragonese Portal of Augmentative and Alternative Communication)
url: https://arasaac.org/
hq_country: ES
markets_served: [global]
founded: 2007
funding_stage: public
last_reviewed: 2026-05-02
target_users: [tea-kid, parent, professional]
clinical_claim_level: wellness
---

# What it is
Public-sector pictogram repository and AAC resource portal funded by the Government of Aragon (Spain), coordinated by CATEDU (Aragonese Center for Technologies for Education). Not an app vendor: ARASAAC is the upstream symbol set and content hub that third-party AAC apps consume. Pictograms drawn by Sergio Palao and licensed CC BY-NC-SA. The /aac-apps page is a curated index of partner apps that embed ARASAAC symbols, not first-party software.

# Pricing
- Free. Public good. Symbols, materials, and online tools are downloadable at no cost.
- License is **CC BY-NC-SA**: non-commercial use only, share-alike. Commercial use requires separate licensing from the Government of Aragon.

# Features
- ~5,000 color and black-and-white pictograms, searchable by concept.
- Materials library: visual schedules, social stories, communication boards, classroom resources.
- Online tools: pictogram-to-text, animations, video-modeling templates, AraBoard board builder, AraWord pictogram word processor.
- REST API and offline pictogram dumps for developers.
- Curated "AAC Apps" index of third-party software using ARASAAC symbols (Pictoaplicaciones suite — Pictoagenda, PictoTEA-style apps, Cboard, AsTeRICS Grid, JABtalk, etc., already tracked separately in this repo).
- Aula Abierta de ARASAAC: training materials and tutorials for families and professionals.

# Strengths
- De facto Spanish-speaking world AAC pictogram standard. Used in public schools across Spain and adopted in much of LATAM.
- 17+ language word dictionaries: ES, EN, PT, FR, IT, DE, AR, ZH, RO, RU, PL, BG, and others.
- Government-backed → permanence; not at startup mortality risk.
- Open API + free downloads → tiny integration cost for any AAC app, including ours (under non-commercial terms).
- Strong professional / SLP brand recognition in ES + LATAM.
- Community contributes translations and use cases.

# Weaknesses / gaps
- **NC license is the wedge.** Commercial AAC products cannot ship ARASAAC symbols without a separate license from the Government of Aragon. This blocks most VC-backed and SaaS AAC plays from using ARASAAC at all.
- **Curators, not builders.** ARASAAC itself ships no flagship app. End-user experience depends entirely on partner apps of uneven quality.
- **No personalization, no progress tracking, no clinical loop.** Static repository — does not learn from learner behavior, does not collect outcomes data, does not feed SLPs evidence on intervention efficacy.
- **Visual style is dated.** 2007-era flat pictograms; not adapted for modern UI density, dark mode, or accessibility tokens (high contrast, dyslexia-friendly fonts).
- **Govt cadence.** Public-sector pace; new pictograms and features arrive on government calendar, not market calendar.
- **LATAM dialect coverage is shallow.** Spanish vocabulary is Castilian-rooted; LATAM regional terms (e.g., MX/AR/CO/PE specific) are inconsistent.
- **No mobile-first authoring.** Tools are web-desktop oriented; building boards on a phone is not the design center.
- **Discoverability for families is poor.** Site is built for professionals; parents arriving cold see a wall of links.

# Evidence base
- One peer-reviewed paper on the pictographic system itself: [Cabello & Bertola, *Norms for a Pictographic System: The ARASAAC System*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6305113/) (2018) — assesses iconicity, familiarity, and naming agreement of ARASAAC symbols. Validates the symbol set's psycholinguistic properties; does not measure intervention outcomes.
- No clinical efficacy trials of ARASAAC-based intervention as a whole; outcomes evidence sits with the AAC method (PECS, modeling) rather than with the symbol provider.

# Usage signal
- **Portal traffic is real.** arasaac.org: ~569K monthly visits (Similarweb, last 3 mo to 2026-04), +21.2% MoM. Top countries: Spain 30.2%, Italy 14.9%, Argentina 11.7%, France 8.0%, Chile 7.4%. Bounce rate 34.9% — healthy for a content portal.
- **The /aac-apps directory is not where the traffic goes.** Pictoaplicaciones.com (the most prominent partner suite featured): only ~2.9K monthly visits, global rank #4.7M. Spain 51%, Mexico 27%, Argentina 22%. Tiny.
- **Per-app installs of the listed third-party apps are small** (numbers tracked per file): Cboard ~100K cumulative since 2020 (Similarweb / Aptoide), JABtalk ~150K cumulative since 2012 (AppBrain), PictogramAgenda ~1.1K installs/month (AppBrain), AsTeRICS Grid is a PWA with no install metric (active dev, last release 2026-01-30).
- **Engagement on those apps is weaker than installs suggest.** Cboard shows ~0 visible Play Store reviews against 100K installs — typical category review rate is 0.5–2% of installs; <0.1% is a tell of low retention.
- **Read:** ARASAAC the symbol portal has a real audience (educators, SLPs, parents printing visual schedules). The apps that consume ARASAAC pictograms do not. The pictogram set is the product; the apps are weak vessels.

# Geographic / language coverage
- 17+ language word dictionaries; native-quality Spanish (Castilian), English, Portuguese, French, Italian, German.
- Worldwide reach via web; strongest adoption in Spain, Portugal, and Spanish-speaking LATAM (AR, MX, CO, CL, PE, EC, UY).
- True L10n for major European languages; smaller/MT-quality for the long tail.

# Strategic read
- **Not a head-to-head competitor.** ARASAAC is category infrastructure, not an app. Their growth grows the AAC pie and trains the market that pictogram-based intervention is normal.
- **Direct competitors of theirs (other symbol sets):** PCS (Tobii Dynavox, paid, proprietary), SymbolStix (n2y, paid), Mulberry Symbols (CC BY-SA, free, smaller), OpenSymbols (aggregator).
- **For us, ARASAAC is a build-vs-license decision.** Options:
  1. Use ARASAAC under CC BY-NC-SA → free, fast, but locks us out of paid commercial tier (or forces a separate license deal with Gobierno de Aragón — historically negotiable for educational/non-profit-aligned products).
  2. Use Mulberry / OpenSymbols (commercial-friendly licenses) → smaller library, less LATAM brand recognition.
  3. Commission our own pictogram set → fully owned, expensive, slow, but no license ceiling and culturally tunable for LATAM dialects (a real weakness ARASAAC has).
- **The wedges ARASAAC leaves open and we can take:** clinical evidence loop (outcomes capture), adaptive personalization, modern mobile-first authoring, LATAM-dialect-correct vocabulary, parent-first onboarding, and a unified product instead of a directory of partner apps.

# Sources
- https://arasaac.org/ — retrieved 2026-05-02
- https://arasaac.org/aac-apps — retrieved 2026-05-02
- https://aulaabierta.arasaac.org/en/arasaac-symbols-search-engine — retrieved 2026-05-02
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6305113/ — retrieved 2026-05-02
- https://openassistive.org/item/arasaacpictograms/ — retrieved 2026-05-02
- https://www.similarweb.com/website/arasaac.org/ — retrieved 2026-05-02
- https://www.similarweb.com/website/pictoaplicaciones.com/ — retrieved 2026-05-02
