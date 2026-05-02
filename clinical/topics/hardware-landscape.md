---
slug: hardware-landscape
status: stable
last_reviewed: 2026-05-02
related_topics: [aac-symbol-systems, sensory-regulation, early-intervention, evidence-based-practices]
---

# Summary

The autism hardware market is large, fragmented, and evidence-poor. The strongest evidence sits in three categories: AAC dedicated devices (decades of communication-outcome RCTs underpin the category), eye-tracking diagnostic biomarkers (FDA-cleared 2023; Jones 2023, Keehn 2024), and biosignal-based aggression prediction (Goodwin 2019, single-team work, person-dependent only). The weakest sit in proprioceptive/sensory hardware (weighted blankets/vests have null RCTs — Gringras 2014, Lin 2017), tinted lenses (rejected by WHO/AAO/AAP), and fidget toys (Graziano 2018 found negative effects). Social robots have small social-skills effects (Kouroupa 2022 g=0.35) at unscalable per-unit cost. VR is "in its infancy" but has the first FDA De Novo submission for autism (Floreo 2025-2026). LATAM availability for nearly all categories is poor; pricing is dollar-denominated; importation, customs, and lack of insurance reimbursement gate adoption. Hardware is OUT OF SCOPE for our build, so this map is awareness only — to identify which categories software might integrate with, which the market still pays for despite weak evidence, and where pure-software wedges exist.

# Categories

## Wearables for biosignal stress / meltdown prediction

Capabilities differ sharply between research-grade and consumer devices. Only EDA + PPG + accelerometry combined supports the published prediction work; consumer wearables lack EDA.

| Device | Signals | FDA/CE | Price (USD) | API/SDK | LATAM availability |
|---|---|---|---|---|---|
| Empatica EmbracePlus | EDA, PPG, SpO2, temp, accel, gyro | FDA-cleared 2022/2023/2024 | ~$1,000–$2,000+ unit, cloud subscription | Cloud API (Sept 2024), SDK | Import only |
| Empatica E4 (sunset 2024) | EDA, PPG, temp, accel | CE | ~$1,690 | Yes (legacy) | Sunset |
| Apple Watch (S9+, Ultra 2) | PPG, ECG, accel, SpO2 | FDA Class II for ECG | $400–$800 | HealthKit | Available (PE/MX/CO/CL/AR/EC) |
| Garmin (Venu/Fenix) | PPG, accel | FDA Class II for some | $300–$1,000 | Connect IQ | Available |
| Oura Ring Gen3/4 | PPG, temp, accel | none | $349 + $5.99/mo | Cloud API | Available (some LATAM) |
| WHOOP 4.0/5.0 | PPG, temp, accel | none | $239/yr subscription | Limited API | US/EU/UK primary; LATAM patchy |
| Awake Labs Reveal | HR, EDA, temp (legacy product evolved into B2B platform) | — | n/r 2026 | n/r | Canada-focused |
| Pip / Reflect | EDA / handheld | — | $50–$300 | Limited | Spotty |

Evidence:
- [goodwin2019-aggression-prediction-e4] — E4 person-dependent models AUC 0.84, global 0.71 for 1-min aggression prediction in profound ASD inpatients (n=20).
- [hernandezsilveira2018-apple-watch-hrv-validation] — Apple Watch HRV ≥0.9 reliability vs Polar H7 in lab; ambulatory perceived-stress association null in separate study.
- [papoutsi2022-asd-wearables-review] — Most consumer wearables not validated in ASD; ~30 studies catalog.
- [khoury2025-wearable-asd-stress-systematic] — Only ~2 ASD-specific stress-monitoring datasets; no labeled corpus exists.
- [dinstein2026-simons-sleep-project] — EmbracePlus + EEG headband + sleep mat in 102 ASD + 98 sibling cohort; sleep latency longer in ASD; data open via SFARI Base.

Reality check: peer-reviewed ASD-specific meltdown prediction at AUC 0.84 exists only in a single team's inpatient profound-ASD work, person-dependent, with no prospective deployment evidence. Marketing claims by consumer-wearable apps far exceed the data.

## Sensory regulation devices

Largely consumer-marketed, evidence is weak to null for the most-purchased categories.

| Category | Representative products | Price (USD) | Evidence | LATAM |
|---|---|---|---|---|
| Weighted blankets | Sensacalm, Harkla, Mosaic | $80–$200 | Null RCT (Gringras 2014); preference exists | Local manufacture in PE/MX/AR |
| Compression vests | SPIO, JettProof, Squease | $50–$200 | Not evidence-based (Lin 2017) | Import + small local makers |
| Chewable jewelry | ARK Chewelry, Krypto-Bite | $7–$20 | No RCTs; consumer category | Import + local copies |
| Noise-canceling headphones | Bose QC, Sony WH, Puro Sound | $200–$400 | Pfeiffer 2019 n=6 single-subject suggests autonomic benefit | Import |
| Earplugs | Loop Quiet (NRR 14, 24 dB SNR), Flare Calmer | $25–$45 | Anecdotal; no autism-specific RCTs | Spotty; emerging in MX/PE |
| Tinted lenses | Irlen | $200–$700 | Rejected by WHO/AAO/AAP (Griffiths 2016) | Active marketing in LATAM |
| Fidget spinners/cubes | Generic | $5–$25 | Negative effects on attention (Graziano 2018) | Ubiquitous |

Evidence:
- [gringras2014-weighted-blanket-rct] — Phase III RCT (n=73): weighted blanket did not improve sleep in autistic children. Definitive null.
- [gee2020-weighted-blanket-single-subject] — n=2 single-subject; even permissive design failed to recommend.
- [lin2017-weighted-vest-asd-review] — Systematic review; weighted vests not evidence-based for ASD.
- [pfeiffer2019-noise-headphones-asd] — n=6 single-subject; Bose QC reduced autonomic arousal.
- [silver2019-irlen-systematic-review] — 44 studies; Irlen lenses rejected by major medical orgs.
- [graziano2018-fidget-spinner-adhd] — A-B-A-B in ADHD; fidget spinners worsen attention.

Reality check: this category sells billions per year on parent intuition + marketing. Software cannot replace the physical sensation, but can replace the unsupported claims with realistic expectation-setting and behavioral alternatives.

## AAC dedicated devices

Evidence-rich category. Decades of language-outcome studies; market driven by US insurance funding.

| Device | Type | Price (USD) | Software | Access methods | LATAM |
|---|---|---|---|---|---|
| Tobii Dynavox I-13 / I-16 | Dedicated SGD | $7,000–$20,000+ (CA pricing) | TD Snap, Communicator 5, TD Talk, TD Phone | Touch, eye gaze, switch, partner window | Reseller-dependent; high import cost |
| PRC-Saltillo Accent (1400/1000/800) | Dedicated SGD | $4,000–$10,000+ | Unity, LAMP Words for Life, Minspeak | Touch, switch, eye gaze | Limited; no PE distributor |
| Smartbox Grid Pad (10s/12/13/15) | Dedicated SGD | $4,000–$12,000 | Grid 3 | Touch, switch, eye gaze | UK-centric |
| iPad + AAC app (locked) | Tablet-based | $800–$2,500 | Proloquo2Go ($249.99), TouchChat ($299.99), TD Snap (subscription), LAMP Words for Life ($299.99) | Touch | iPad available; apps via App Store |
| Software-only AAC subscription | Web/mobile | $99–$499/yr | TD Snap, Coughdrop, AssistiveWare suite | Touch | Available wherever device exists |

Evidence (linked from related topic [aac-symbol-systems]):
- [desantos2019-meltzer-aacapps-cost] — Tobii Dynavox ~25-28% global market share, PRC-Saltillo 12-15%; pricing tiers and US Medicaid funding pathway.

Why dedicated vs tablet: US insurance funding (Medicare/Medicaid SGD benefit) requires "dedicated" classification (locked from non-AAC functions). LATAM lacks insurance pathway; tablet+app dominates.

Integration potential: Tobii Dynavox runs Windows; PRC-Saltillo runs Android. Both expose limited APIs. iPad+app integrations through App Store + Shortcuts. Strong integration potential exists for a Spanish/Quechua AAC content library that complements existing apps.

Wedge: a Spanish/Quechua-localized AAC app with offline mode + SLP-collaboration is structurally absent in LATAM. ARASAAC owns the symbol library but does not produce a production app.

## Eye-tracking for assessment / communication

Two distinct uses: (a) diagnostic biomarker; (b) access method for nonverbal communication.

| Device / system | Purpose | Price (USD) | Evidence | LATAM |
|---|---|---|---|---|
| Tobii eye trackers (T120, X-series, Pro) | Research/clinical | $5,000–$30,000+ | Multiple validation studies | Distributor-dependent |
| EarliPoint Evaluation (EarliTec, Tobii-based) | FDA-cleared autism diagnostic aid 16-30 mo | n/r (clinic-billed) | Jones 2023 sens 71-78%, spec 81-85% | US only |
| Tobii Dynavox + I-Series (eye gaze) | Communication access | included in $11K-$20K SGD | Decades of access-method use | Distributor |
| WebGazer.js | Browser-based webcam eye tracking | $0 (open source) | Validated for early-childhood looking-time tasks (Steffan 2024); ASD biomarker reproduction not yet demonstrated | Universal |
| Hyperscan / Smart Eye consumer SDKs | iOS/Android face tracking | varies | Not autism-specific | Universal |

Evidence:
- [jones2023-eye-tracking-jama-asd] — Pivotal trial behind EarliPoint FDA clearance; n=475 toddlers.
- [keehn2024-eye-tracking-primary-care] — Composite biomarker + PCP integration: sens 90.7%, spec 86.7%.
- [wang2024-eye-tracking-novel-metrics] — Novel AOI metrics (AVC, FAS) outperform fixation-time in n=39 ASD vs non-ASD.
- [jones2022-geopref-tobii-validation] — Large-scale Tobii GeoPref test in 1,863 toddlers; PPV 86-100%, sensitivity ~20% (subtype identifier).
- [earlitec2023-fda-510k] — FDA 510(k) regulatory file.

Wedge: a webcam-based pre-screening triage that flags families for in-person assessment is the realistic LATAM angle. Cannot make diagnostic claims (it's not FDA-cleared and accuracy is lower). Worth a pilot in Peru where pediatrician autism training is uneven.

## Social robots

Small social-skills effect; per-unit cost makes scaling unaffordable. Evidence is platform-fragmented.

| Robot | Origin | Price (USD) | Evidence | Adoption |
|---|---|---|---|---|
| QTrobot (LuxAI) | Luxembourg | Home $1,977 + $149/mo; Pro ~$10,000 | Costa 2018 n=11; ongoing 12-month n=190 5-EU-country RCT | EU schools; some US |
| NAO (Aldebaran/SoftBank) | France/Japan | $9,000–$16,000 | Bulk of Kouroupa 2022 meta-analysis; Aldebaran bankrupt 2025 → Maxvision (CN) acquired | EU/JP/US universities |
| Milo (RoboKind) | US | ~$5,000–$10,000 (incl. subscription) | Anecdotal/observational | US schools (HB418 Texas) |
| Kaspar (U Hertfordshire) | UK | research only | NIHR feasibility trial n=40 | Research; not commercial |
| Pepper (SoftBank) | Japan | $1,800 (consumer JP) / $25K-$32K (US enterprise) | Production stopped 2020 | Discontinued |
| Leka | France | $499–$699 (Indiegogo era) | Limited published | Discontinued production |
| Buddy (Blue Frog Robotics) | France | n/r consumer | Marketing; limited peer-reviewed | EU schools |

Evidence:
- [kouroupa2022-social-robots-meta-analysis] — Meta-analysis k=12 RCTs: social skills g=0.35 (95% CI 0.09-0.61); emotional, motor null. Younger children, clinic settings benefit most.
- [costa2018-qtrobot-attention] — n=11; QTrobot increases attention, reduces stereotypy in lab.
- [wood2019-kaspar-feasibility] — NIHR-funded feasibility RCT n=40; literature dominated by single case reports.

LATAM-specific work:
- JARI robot proof-of-concept in Lima (Huancayo) for ASD social interaction.
- Mexico/Brazil open-source social-robot research.
- Colombia participatory-design case study with autism community.

None reached commercial deployment. Per-unit cost vs LATAM income makes social robots unaffordable for families and most schools.

Wedge: screen-based avatars deliver ~70%+ of the social-skills training value at near-zero marginal cost. Avatar/embodied-conversational-agent UX is the realistic substitute and addresses the scaling failure of physical robots.

## VR / AR therapy

Most credibly evidenced commercial product (Floreo) sits at FDA Breakthrough + TAP + De Novo submission stage as of April 2026. Evidence base "in its infancy" overall.

| Product | Hardware | Price (USD) | Evidence | LATAM |
|---|---|---|---|---|
| Floreo | Quest 3 ($500) or iOS/Cardboard | School/clinic tiered subscription; classroom bundle ~$250 setup | FDA Breakthrough Device, TAP Program, pivotal RCT (Cortica 17-center), De Novo submitted Apr 2026 | None |
| Quest-based generic apps | Quest 3 ($500) | varies | Yang 2025 systematic review: positive social effects in HFA; immersive vs nonimmersive splits | Quest 3 sold in MX, PE; gray market in others |
| WebXR / browser-based | Any device with browser | $0 | Limited autism-specific evidence | Universal |

Evidence:
- [yang2025-vr-autism-systematic-review] — 14 studies n=279; positive social-skills effect; HFA benefits more than LFA; immersive better for complex skills, nonimmersive for basic.
- [ravindran2019-floreo-joint-attention-pilot] — n=12; 95% headset tolerance in severe sample; feasibility only.
- [floreo2025-cortica-rct-aim] — Cortica multisite RCT (Floreo VR + ABA, 12 weeks); significant AIM communication improvement.

Wedge: 2D web/mobile delivery of structured social-scenario practice (turn-taking, emotion recognition) reproduces nonimmersive VR's evidence base without hardware. The protocol is the active ingredient, not the immersion. LATAM hardware barrier is severe (Quest 3 ~USD $500 + content + import duties exceeds typical budget for autism families in PE/EC).

## Smart toys with autism positioning

Heterogeneous category. Most claims are marketing.

| Product | Type | Price (USD) | Evidence | Notes |
|---|---|---|---|---|
| Cosmo by Filisia | Multi-sensory accessibility switches (Cosmo Dots) | Learning System $1,699 | UK assistive-tech recognition; no RCTs | Niche; Greek/UK origin |
| Yoto Player | Screen-free audio | $80–$110 | Anecdotal autism use | UK origin; widely available |
| Toniebox (Tonies) | Screen-free figure-based audio | $80–$100 | Anecdotal | DE origin; widely available |
| LeapFrog | Educational toys | $20–$80 | Generic preschool ed; not autism-specific | Walmart/Target |
| Beba | Sensory toys | varies | Marketing only | Specialty |

Evidence: None pooled in peer-reviewed literature. Parent communities recommend Yoto/Tonies for routine, predictability, screen-time reduction.

Wedge: software cannot substitute for the tactile/screen-free benefit, but can provide the routine-building scaffold (visual schedules tied to audio sessions).

## Adaptive switches and access methods

Mature category serving severe physical disability + ASD with motor co-morbidity.

| Product | Type | Price (USD) |
|---|---|---|
| AbleNet Specs Switch | Wearable proximity switch | ~$100 |
| AbleNet BIG Red switch | Large activation surface | ~$70 |
| AbleNet Buddy Button IC | Touch switch | ~$60 |
| AbleNet PowerLink 4 | Wireless control unit | ~$300 |
| Microsoft Adaptive Hub | Hub + buttons | $99 |
| Microsoft Adaptive Joystick | Custom controller | $79.99 |
| Inclusive Technology switches | Various | $30–$200 |

Microsoft Adaptive Hub (released March 2024) lowered the cost of adaptive computing dramatically. 5x 3.5mm jacks accept third-party AbleNet/Inclusive switches. Wireless to Surface devices and other Bluetooth hosts. LATAM availability via Microsoft Store.

Wedge: very limited software wedge — switches exist; the gap is content and triggers exposed by autism/special-ed apps. A switch-aware AAC or schedule app is a software addition layer.

## Brain-computer interfaces (research stage)

Far-future for autism intervention as of 2026-05-02.

| Product | Type | Price (USD) | Status |
|---|---|---|---|
| OpenBCI Cyton/Ganglion | Research EEG | $499–$2,000 | Research-only; community use |
| Neurable MW75 Neuro / Neuro LT | Consumer EEG headphones | $499–$699 | Consumer focus product (focus tracking); not autism |
| NextMind | Consumer BCI headband | discontinued | Acquired by Snap 2022; product discontinued |
| Emotiv EPOC X | Research EEG | $849+ | Research |
| Muse S | Meditation EEG headband | $399 | Wellness, not autism |

Evidence:
- [khoury2025-wearable-asd-stress-systematic] cites general findings: EEG-based BCI shows positive effects on ASD behavior + brain activity in 11 of 24 reviewed studies (45.8%); large-scale validation absent.

Wedge: Mark as far-future. No commercial BCI product is positioned for autism today; consumer products (Muse, Neurable) are wellness-coded.

# Geographic availability synthesis (LATAM)

| Category | PE | MX | CO | AR | EC | CL |
|---|---|---|---|---|---|---|
| Apple Watch / Garmin / consumer wearables | Available | Available | Available | Restricted FX | Limited | Available |
| Empatica EmbracePlus | Import only | Import only | Import only | Import only | Import only | Import only |
| Tobii Dynavox SGD | Reseller-dependent (high tariff) | Reseller | Reseller | Reseller | None | Reseller |
| iPad + Proloquo2Go | App Store available | App Store | App Store | App Store | App Store | App Store |
| Loop Quiet earplugs | Limited | Available | Limited | Limited | Limited | Limited |
| Bose QC headphones | Available (premium price) | Available | Available | Restricted FX | Available | Available |
| Quest 3 | Gray market | Available | Gray market | Restricted FX | Gray market | Available |
| QTrobot/NAO/Milo | None | None | None | None | None | None |
| EarliPoint diagnostic | None | None | None | None | None | None |

# Integration-friendly hardware (where a software hook fits)

Three categories where the hardware ecosystem actually exposes integration surface and a wellness/education app can plug in:

1. Consumer wearables (Apple Watch / Garmin / Oura / WHOOP) via HealthKit, Connect IQ, Cloud APIs. HRV + sleep + activity data are accessible. Realistic LATAM hook: pull HRV trends + sleep latency to inform a behavioral intervention rather than generate a clinical prediction.
2. iPad-based AAC (Proloquo2Go, TouchChat, TD Snap) and the underlying ARASAAC symbol library. Symbol exchange formats (OBF, OBZ — Open Board Format) and iOS Shortcuts allow companion apps. Wedge: Spanish/Quechua content + caregiver-collaboration layer.
3. Microsoft Adaptive Hub + AbleNet switches via standard 3.5mm switch input + Bluetooth keyboard/mouse mapping. A switch-accessible content app is straightforward to build.

# Open questions

- Does LATAM have any autism-specific dedicated wearable distributor or reseller? (Not found as of 2026-05-02; worth verifying with COFEPRIS/DIGEMID listings.)
- What is the realistic per-unit + cloud cost of EmbracePlus when sold to research customers in 2026? (Public pricing absent; sales engagement required.)
- Does WebGazer.js plus the Wang 2024 AVC/FAS metrics reproduce the EarliPoint biomarker performance in a webcam setting? (Untested; would require pilot.)
- Does Floreo's De Novo (April 2026) clear, and does that change reimbursement/payor reasoning in US that LATAM payors might mirror?
- What per-individual data volume is required to bootstrap a person-dependent meltdown-prediction model from consumer-wearable HRV (no EDA)? (Goodwin's E4 work is the only baseline.)
- Aldebaran bankruptcy → Maxvision NAO future: does the platform survive 2026-2028 or do schools that bought NAO lose their content path?

# Builder takeaways

- Hardware as a category is OUT OF SCOPE for our build. This map is awareness for partnership and integration decisions.
- Three integration-friendly categories are worth a software hook:
  1. Consumer wrist wearables via HealthKit / Connect IQ — HRV trending and sleep-latency capture without medical claim.
  2. iPad-based AAC and ARASAAC symbol library — Spanish/Quechua content, caregiver-collaboration, offline mode is the unfilled LATAM gap.
  3. Microsoft Adaptive Hub + AbleNet switches — content layer for switch-accessible learning/wellness sessions.
- Three categories software can effectively REPLACE for LATAM economics:
  1. Social robots — embodied avatars and screen-based social-scenario practice deliver most of the meta-analytic benefit at near-zero marginal cost.
  2. VR for nonimmersive social-skills training — 2D web reproduces the protocol; the immersion is not the active ingredient for LFA / cost-sensitive deployments.
  3. Tinted lenses, weighted blankets/vests, fidget toys — replace the unsupported claim with evidence-based behavioral content (sleep routines, sensory-environment mapping, attention-strategy training).
- Categories where hardware is irreplaceable and software has no wedge:
  1. AAC for severe motor impairment (eye-gaze SGDs, switch arrays).
  2. Noise reduction (Loop, Bose, Flare).
  3. Diagnostic eye-tracking (Tobii hardware required for the cleared biomarker).
- Honest gaps:
  - Wearable meltdown prediction is largely unproven outside small-team pilots; person-dependent only; no consumer-wearable replication.
  - LATAM autism families do not own EmbracePlus, QTrobot, EarliPoint, NAO, Milo. They do own iPhones/Androids, possibly Apple Watch, possibly an iPad. Build for what exists.
