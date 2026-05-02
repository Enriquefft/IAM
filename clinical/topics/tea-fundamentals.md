---
slug: tea-fundamentals
status: stable
last_reviewed: 2026-05-02
related_topics: [pecs-evidence, aac-symbol-systems]
---

# Summary
Autism spectrum disorder (ASD; TEA in Spanish) is a neurodevelopmental condition codified by two convergent but distinct taxonomies: **DSM-5-TR** ([first2022-dsm5tr-overview], used by US private practice and research) requires *all three* social-communication deficits + restricted/repetitive behaviors with severity-level specifier (Levels 1–3); **ICD-11** ([greaveslord2022-icd11-asd], operative in WHO-aligned LATAM public systems including Peru, Mexico, Colombia, Chile) replaces severity levels with intellectual-development and functional-language qualifiers and makes atypical sensory response a core diagnostic feature for the first time. Global prevalence is roughly **1 in 127 by GBD 2021 modeling** ([santomauro2025-gbd-2021-autism]) but **1 in 31 by 2022 US active surveillance** ([shaw2025-addm-2022]) — the ~4× gap is methodology, not biology. **LATAM has near-zero population-based data**: only Mexico ([fombonne2016-leon-mexico], 0.87%), Chile ([romanurrestarazu2025-chile-bayesian], 1.31%), and Brazil ([paula2011-brazil-pdd], 0.27%) have community-based prevalence estimates; Peru, Colombia, Ecuador, and Argentina have only administrative-registry counts. **Median LATAM diagnostic delay is ~24 months** ([montielnava2024-latam-diagnosis-age]) with diagnosis at ~46 months, missing the 0–3 evidence-based intervention window for most children. **Comorbidities are the rule, not the exception**: ADHD ~28%, anxiety ~20%, sleep problems ~70%, GI symptoms ~50%, intellectual disability ~35%, epilepsy ~10%, motor coordination impairment ~70%, alexithymia ~50% ([lai2019-mental-health-comorbidity], [schwichtenberg2022-sleep-asd], [holingue2023-gi-symptoms], [talantseva2023-three-level-meta], [liu2022-epilepsy-asd], [kangaranifarahani2024-motor], [kinnaird2019-alexithymia]). Sex ratio inflated to 4:1 by detection bias; true ratio is closer to 3:1 and shrinking with improved detection ([loomes2017-mf-ratio], [shaw2025-addm-2022]). Sensory atypicality affects ~90% of autistic users ([morimoto2021-sensory-asd], [green2016-sensory-dsm5]). Roughly **1 in 3 autistic children remain minimally verbal** through school age ([tagerflusberg2013-minimally-verbal], [norrelgen2015-minimally-verbal]) — the AAC market floor.

# Evidence

## DSM-5-TR vs ICD-11 — billing and product framing

### DSM-5-TR (APA, March 2022)
- [first2022-dsm5tr-overview] — DSM-5-TR clarified Criterion A wording: "as manifested by **all** of the following" (A1 deficits in social-emotional reciprocity + A2 deficits in nonverbal communicative behaviors + A3 deficits in developing/maintaining/understanding relationships). Specifier expanded from "another disorder" to "another problem" — captures sub-threshold co-occurring difficulties without requiring separate diagnosis.
- DSM-5 retains Criterion B restricted/repetitive behaviors with four sub-domains: B1 stereotyped/repetitive motor/object use, B2 insistence on sameness, B3 restricted interests, **B4 hyper- or hypo-reactivity to sensory input** (added by DSM-5; ICD-10 had no sensory criterion).
- [weitlauf2014-dsm5-levels] — DSM-5 specifies three severity levels by support need:
  - **Level 1** — "requiring support": noticeable impairments without supports; rigid behaviors interfere in one or more contexts; difficulty switching activities or organizing/planning.
  - **Level 2** — "requiring substantial support": marked deficits in verbal/nonverbal social communication apparent even with supports; restricted/repetitive behaviors frequent enough to be obvious; distress changing focus.
  - **Level 3** — "requiring very substantial support": severe deficits in verbal/nonverbal social communication causing severe functional impairment; very limited initiation; minimal response to social overtures from others; extreme difficulty coping with change.
- Levels are clinical heuristics, not standardized scales; only 24.7% of clinic-sample children classified consistently across symptom + cognitive + adaptive domains in [weitlauf2014-dsm5-levels].

### ICD-11 (WHO, January 2022)
- [greaveslord2022-icd11-asd] — Replaces DSM severity levels with two qualifiers:
  - **Intellectual development qualifier**: Mild / Moderate / Severe / Profound / Provisional.
  - **Functional language qualifier**: (i) mild or no impairment, (ii) impaired (single words / simple phrases), (iii) complete or near-complete absence.
- Sensory atypicality elevated to a core diagnostic feature (parity with DSM-5 B.4).
- No fixed feature count required; clinical judgment integrates persistent social-communication deficits, restricted/repetitive patterns, and functional impairment.
- Explicitly accommodates late-presenting (adolescent/adult) autism and recognizes regression as rare after age 3.
- Does not recognize a separate Social (Pragmatic) Communication Disorder; encoded via the language qualifier instead.

### Billing implications
- LATAM public systems (MINSA-Peru, IMSS-Mexico, FONASA-Chile, ADRES-Colombia) bill on ICD-11 codes. ASD code: **6A02**.
- US private payers and research grants reference DSM-5-TR (ICD-10-CM crosswalk: F84.0 autistic disorder).
- Product copy targeting LATAM clinicians: ICD-11 terminology, language qualifier as the primary axis. Product copy targeting US payers / parents: DSM-5-TR Level 1/2/3 terminology, with the explicit caveat that levels are not standardized scales ([weitlauf2014-dsm5-levels]).

## DSM-5 levels and product-need implications
- **Level 1** typically aligns with cognitively-able autistic users who benefit from executive-function scaffolds, social-communication coaching, sensory accommodations, and emotion-labeling supports. Standard mainstream UI works with sensory and timing adjustments.
- **Level 2** typically aligns with users who benefit from low-tech AAC + visual schedules + structured routines. UI needs simplified language, predictable navigation, and sensory-low defaults.
- **Level 3** typically aligns with minimally-verbal users with high support needs. AAC is foundational, not adjunct; UI needs single-tap actions, no time pressure, motor-tolerant targets.
- [weitlauf2014-dsm5-levels] cautions: a Level-1 user can have severe adaptive deficits; a Level-3 user can have intact cognition. Personalization must read functional dimensions (communication, sensory, motor, executive function) directly, not from level alone.

## Global prevalence

| Source | Year | Method | Population | Rate |
| --- | --- | --- | --- | --- |
| [santomauro2025-gbd-2021-autism] | GBD 2021 | DisMod-MR Bayesian meta-regression, 204 countries | All ages global | **1 in 127** (~0.79%) age-standardized; 61.8M autistic globally |
| [who2025-fact-sheet-autism] | 2025 update | Cites GBD 2021 | All ages global | 1 in 127 (consensus reference) |
| [shaw2025-addm-2022] | 2022 surveillance | Active record review, 16 sites | US 8-year-olds | **1 in 31** (32.2 per 1,000); 1 in 27 boys |
| [maenner2023-addm-2020] | 2020 surveillance | Active record review, 11 sites | US 8-year-olds | 1 in 36 (27.6 per 1,000) |
| [talantseva2023-three-level-meta] | 1994–2019 pooled | Three-level meta-analysis, 85 articles | Children, 29 countries | **0.72%** global pooled; North America 1.01%, Europe 0.73%, Asia 0.41%; LATAM data insufficient for pooled estimate |
| [issac2025-systematic-children] | 2008–2024 pooled | PRISMA meta-analysis, 66 studies | Children global | 0.77% overall, 1.14% boys |

- The **GBD 2019 → 2021 jump (1 in 271 → 1 in 127)** is methodological: GBD 2021 excluded passive case-finding and required active ascertainment; not a true incidence rise.
- The **US 1-in-31 vs global 1-in-127 gap** reflects active surveillance vs modeled estimates with sparse LMIC inputs — not a 4× true biological difference.
- Tropical Latin America age-standardized rate per [santomauro2025-gbd-2021-autism]: **614.5 per 100,000 (~0.61%)** — best available regional aggregate; insufficient for country-level estimates.

## LATAM prevalence per country

| Country | Best primary source | Rate | Method | Confidence |
| --- | --- | --- | --- | --- |
| **MX** | [fombonne2016-leon-mexico] | 0.87% (95% CI 0.62–1.10) | Two-stage SRS-screened community sample, León 8-year-olds (n=12,116) | Medium — single city, 2016 |
| **CL** | [romanurrestarazu2025-chile-bayesian] | 1.31% Bayesian projected (1 in 76) | School-EHR linkage of 3.06M school-age children + Araucanía Sur clinical validation | High — largest LATAM study to date |
| **CL (toddler)** | [yanez2021-chile-santiago] | 1.95% (95% CI 0.81–4.63) | M-CHAT + ADOS-2 in 18–30 month Santiago well-child clinic visits | Medium — small n (272) |
| **BR** | [paula2011-brazil-pdd] | 0.27% (95% CI 0.18–0.37) | Three-phase community study, single small town (Atibaia) | Medium — pilot, 2011 vintage, pre-DSM-5 |
| **AR** | [montenegro2022-argentina] | No prevalence study; caregiver-survey trends only | Network-recruited online surveys 2015 (n=763) and 2020 (n=422) | Medium — convenience sample |
| **EC** | [dekkers2015-quito-ecuador] | 0.11% diagnosed + 0.21% suspected = 0.32% in regular schools (Quito only) | School survey, 161 schools, n=51,453 | Medium — explicitly under-detection floor; rural rates lower |
| **EC** | [buffle2024-ecuador-journey] | n/a (diagnostic-journey study, not prevalence) | Online caregiver survey n=767; 31% diagnosed before 36 months, 67% private-pay | High — best ECU access-pathway data |
| **CO** | [garciazambrano2024-colombia-sispro] | 0.138% (13.788 per 10,000) administrative; 7× urban-rural gradient | SISPRO national health registry, ages 4–14, 2022 | Medium — administrative undercount, ~1/10 of Chile clinical projection |
| **PE** | None | n/a — **zero population-based studies** ([baquerizosedano2024-peru-history]) | National Registry growth: 4 (2001) → 836 (2011) → 8,835 (2021); Defensoría 2023 estimate ~204,818 (97% undiagnosed) using outdated WHO 1/160 baseline | Low — extrapolation only |
| **PE clinical** | [delacernaluna2024-peru-rebagliati] | n/a (cohort description) | n=120 children at EsSalud's Hospital Rebagliati, 2022; mean diagnosis age 3.83 yr; 78.4% no disability certificate | Medium — single best-resourced public hospital |

- **Pattern across LATAM**: Administrative-registry rates run ~1/3 to 1/10 of clinical/community-survey rates ([romanurrestarazu2025-chile-bayesian] showed Chilean school records at 0.46% vs Bayesian projection at 1.31%; [garciazambrano2024-colombia-sispro] ~0.14% vs Mexico's community-survey 0.87%).
- **Peru is the LATAM data desert**: zero published prevalence studies; all numbers in advocacy use are WHO-derived extrapolations on Peruvian census.

## Sex / gender ratio + lost-girls gap

| Source | Sample | Reported M:F |
| --- | --- | --- |
| [loomes2017-mf-ratio] | 54-study meta-analysis pooled n=53,712 ASD | Pooled 4.20:1; high-quality subset 3.32:1 — **true ratio ~3:1, not 4:1** |
| [santomauro2025-gbd-2021-autism] | GBD 2021 modeled global | **2.1:1** age-standardized prevalence (lowest published) |
| [shaw2025-addm-2022] | US 2022 surveillance, 8-year-olds | 3.4:1 (49.2 vs 14.3 per 1,000) — narrowing from older 4:1 |
| [maenner2023-addm-2020] | US 2020 surveillance | 3.8:1 |
| [talantseva2023-three-level-meta] | Pooled 1994–2019 | 4.3 ± 1.5 (SD); Asperger subtype 9.7:1; PDD-NOS 7.0:1 |
| [romanurrestarazu2025-chile-bayesian] | Chile school registry | 6:1 in school records → 4.18:1 with EHR linkage |
| [fombonne2016-leon-mexico] | León community survey | 80.6% male (~4:1) |
| [yanez2021-chile-santiago] | Santiago toddler clinics | 4:1 |
| [dekkers2015-quito-ecuador] | Quito schools | 4.7:1 |
| [delacernaluna2024-peru-rebagliati] | Lima EsSalud cohort | 3.8:1 (79.2% male) |

- **Lost-girls gap mechanism** ([loomes2017-mf-ratio], [defensoria2023-peru-autism-barriers]): girls meeting criteria are less likely to be referred for assessment, less likely to be diagnosed when assessed, and more likely to mask. School-record ratios (6:1 in Chile, [romanurrestarazu2025-chile-bayesian]) inflate vs clinical assessment ratios (4.18:1 same population, same study) inflate vs population-modeled ratios (2.1:1, [santomauro2025-gbd-2021-autism]).
- LATAM-specific: Peruvian Defensoría ([defensoria2023-peru-autism-barriers]) explicitly flags women's diagnostic barriers; 81% of MINSA-treated patients in 2019 were male — over-representation vs the true ~3:1 baseline.

## Comorbidities

| Comorbidity | Prevalence in ASD | Source | Notes |
| --- | --- | --- | --- |
| **ADHD** | 28% (95% CI 25–32) | [lai2019-mental-health-comorbidity] | Highest psychiatric comorbidity. Clinical samples report higher than population samples. |
| **Anxiety disorders** | 20% (17–23) | [lai2019-mental-health-comorbidity] | CBT adapted for ASD has clinician-rated g=0.88, parent g=0.40, child g=0.25 ([sharma2021-cbt-anxiety-meta]). |
| **Depressive disorders** | 11% (9–13) | [lai2019-mental-health-comorbidity] | Likely under-detected in minimally-verbal and ID populations. |
| **Sleep problems** | ~70% (M=71.4%, SD 15.9, range 37–93%) | [schwichtenberg2022-sleep-asd] | Sleep-onset insomnia ~65%, night waking 47.7%, OSA ~23%, parasomnias 46.8%. Confirmed via wearable cohort ([dinstein2026-simons-sleep-project]): autistic adolescents have longer sleep-onset latencies than siblings. |
| **GI symptoms** | ~50% (range 4.2–96.8% across studies, median 46.8%) | [holingue2023-gi-symptoms] | Constipation 32.3%, abdominal pain 21.2%, food refusal 19.3%. Parent uncertainty on subjective symptoms is much higher with co-occurring ID (OR 5.42 for abdominal-pain uncertainty). |
| **Intellectual disability** (IQ ≤70) | 35–40% | [shaw2025-addm-2022] (US 2022: 39.6%); [maenner2023-addm-2020] (US 2020: 37.9%); [talantseva2023-three-level-meta] (global pooled: 34.9% ± 13.5); [fombonne2016-leon-mexico] (~33% MX); [delacernaluna2024-peru-rebagliati] (mild ID 48.1%, moderate 37.0% in subsample n=27) | ID is unevenly distributed across racial/ethnic groups in US ADDM data (Black 52.8%, White 32.7%) — reflects access pathway, not biology. |
| **Epilepsy** | ~10% | [liu2022-epilepsy-asd] | Higher in adults than children, higher in females, higher with ID, higher in lower-HDI countries. WCAG 2.3.1 photosensitive-seizure guidelines apply to all autism-targeted UI. |
| **Motor coordination impairment** | 50–88% (DCD-consistent pattern) | [kangaranifarahani2024-motor] | Only 15.1% receive co-occurring DCD diagnosis — large under-recognition gap. Affects gross motor, fine motor, visuomotor coordination. |
| **Alexithymia** | ~50% (range 33–63%) | [kinnaird2019-alexithymia] | Risk ratio 6.50 vs neurotypical (4.9%). Common, not universal. Drives much of the apparent emotional-recognition deficit historically attributed to autism. |
| **PDA profile** | ~7% within ASD clinical samples | [onions2015-pda-disco] | Not a recognized DSM-5-TR or ICD-11 diagnosis; UK research-only construct. |

- **Stacking matters**: most autistic users will have ≥2 of the above. Lai et al. found at least 1 psychiatric comorbidity in ~78% of autistic individuals across studies ([lai2019-mental-health-comorbidity]).
- **Sleep × sensory × GI × anxiety form a feedback loop** ([morimoto2021-sensory-asd]): atypical sensory profiles correlate with all of the above plus self-injury and behavior problems.

## Age of diagnosis

| Source | Population | Median / mean age at diagnosis |
| --- | --- | --- |
| [vanthof2021-age-diagnosis] | 56 studies, 40 countries pooled | Mean 60.48 months (range 30.90–234.57); child-only studies mean 43.18 months |
| [shaw2025-addm-2022] | US 2022 ADDM | Median 47 months (range 36 mo California → 69.5 mo Texas-Laredo) |
| [maenner2023-addm-2020] | US 2020 ADDM | Median 49 months; children with ID 43 mo vs without ID 53 mo |
| [montielnava2024-latam-diagnosis-age] | 6-country LATAM (AR, BR, CL, DO, UY, VE), n=2,520 caregivers | Median 46 months (concern at 22 mo → diagnosis at 46 mo = **24-month diagnostic delay**); Brazil 60 months |
| [fombonne2016-leon-mexico] | MX León cohort | Mean diagnostic delay 41.8 months from first concern (23.8 mo) |
| [delacernaluna2024-peru-rebagliati] | PE EsSalud cohort | Mean 3.83 years (~46 months) |
| [buffle2024-ecuador-journey] | EC caregivers n=767 | 31% diagnosed before 36 months; 38% ages 3–4; 12% ages 5–6 |
| [montenegro2022-argentina] | AR caregivers | Diagnosed before age 3: 66.4% (2015) → 77.2% (2020) — improving |

- **Distribution shape**: Right-skewed with a long adult tail. Modal early diagnosis cluster at ages 3–5; substantial late-childhood and adult-diagnosed minorities ([vanthof2021-age-diagnosis] global mean 60.48 months reflects this tail).
- **LATAM diagnostic delay is structural** ([montielnava2024-latam-diagnosis-age]): 24-month median gap from concern to confirmation; predictors of *later* diagnosis are older age at presentation, better language abilities, and public (vs private) health coverage. Peru and Mexico show the longest delays (40+ months mean) in published cohort data.
- **Result**: most LATAM children miss the 0–3 evidence-based intervention window. The 12–24 month period — when caregivers first notice atypical development ([buffle2024-ecuador-journey] peak detection 47%) — is the highest-leverage but least-served stage.

## Sensory profile (DSM-5 B.4 / ICD-11 core feature)

| Source | Sample | Finding |
| --- | --- | --- |
| [green2016-sensory-dsm5] | n=188 (116 ASD, 72 SEN-non-ASD), ages 10–14 | **92% of ASD vs 67% of SEN-non-ASD** show atypical DSM-5 sensory behaviors. Sensory dysfunction correlates with autism severity and behavior problems; independent of IQ. |
| [morimoto2021-sensory-asd] | Review chapter, all ages | ~**90% of ASD children** have atypical sensory characteristics. Auditory hypersensitivity 15–100% (heterogeneous). Three primary modalities: auditory (hypersensitivity, filtering deficits, abnormal startle), visual (hypersensitivity to flashing, enhanced peripheral, spatial-frequency dissociations), tactile (hyper/hypo-responsiveness, atypical affective touch). |

- DSM-5 frames sensory atypicality as **hyper- *or* hypo-reactivity**: the same individual can be hyper-reactive to sound and hypo-reactive to pain. Profiles are commonly mixed across modalities (Dunn's Four-Quadrant Model: low-registration, sensation-seeking, sensory-sensitive, sensation-avoiding).
- Hyper- vs hypo- prevalence breakdown is not cleanly reported in either [green2016-sensory-dsm5] or [morimoto2021-sensory-asd] — see Open questions.
- Sensory comorbidity drivers: anxiety, sleep disturbance, GI symptoms, attention problems, self-injury, behavioral problems all correlate with sensory dysregulation ([morimoto2021-sensory-asd]).

## Communication profile spectrum

- **DSM-5-TR Criterion A** requires deficits across all three social-communication subdomains (reciprocity, nonverbal communication, relationships); does *not* prescribe a verbal/nonverbal split.
- **ICD-11 functional language qualifier** ([greaveslord2022-icd11-asd]) operationalizes the spectrum into three bands directly useful for AAC product segmentation:
  - (i) Mild or no language impairment.
  - (ii) Impaired functional language (single words / simple phrases).
  - (iii) Complete or near-complete absence of functional spoken language.
- **Minimally-verbal fraction**:
  - [tagerflusberg2013-minimally-verbal] — **~30% of school-age autistic children remain minimally verbal** after years of intervention (vs older >50% estimates). Heterogeneous group: no spoken language, fixed words/phrases, primarily echolalic, AAC users.
  - [norrelgen2015-minimally-verbal] — Swedish preschool early-intervention cohort n=165, ages 4–6: 15% nonverbal + 10% minimally verbal = **25% combined**; later preschool samples 25–44%.
- **AAC implications**: roughly 1 in 3–4 autistic children needs an alternative or augmentative communication path. See [pecs-evidence](pecs-evidence.md) and [aac-symbol-systems](aac-symbol-systems.md) for modality choice.
- **LATAM-specific**: [montielnava2024-latam-diagnosis-age] found better language abilities associated with *later* diagnosis — children with intact speech are missed by triage. Latin American minimally-verbal-at-school-entry rate is plausibly higher than the canonical 25–30% given delayed early intervention, but no LATAM-specific cohort has measured this.

## Glossary

| Term | Definition | Evidence anchor |
| --- | --- | --- |
| **Stimming** | Self-stimulatory behavior: repetitive movement, sound, or object manipulation (rocking, hand-flapping, spinning, vocalizing). DSM-5 Criterion B1 lists as restricted/repetitive behavior; the autistic community frames as self-regulation. ICD-11 declines to list specific stim exemplars as required ([greaveslord2022-icd11-asd]). | [greaveslord2022-icd11-asd], [mathur2024-aba-neurodiversity] |
| **Masking / camouflaging** | Conscious or unconscious suppression of autistic traits to fit neurotypical expectations: forced eye contact, scripted responses, suppressed stims, mimicking peers. Drives lost-girls gap ([loomes2017-mf-ratio]) and adult-female under-diagnosis. Energetically costly; associated with autistic burnout, anxiety, depression. | [loomes2017-mf-ratio], [defensoria2023-peru-autism-barriers] |
| **Meltdown vs tantrum** | Tantrum is goal-directed behavior responsive to attention/reward contingencies; meltdown is a neurological overload response (sensory, cognitive, social) that is *not* under conscious control and is *not* responsive to consequences. Meltdowns require de-escalation (reduce input, safe space) not behavioral correction. The distinction matters for product copy: never describe an autistic meltdown as a "tantrum." | [morimoto2021-sensory-asd] (sensory load → behavioral dysregulation pathway); not a discrete-construct study |
| **Executive function** | Cognitive processes that coordinate goal-directed behavior: working memory, inhibition, cognitive flexibility, planning, task initiation, organization. Executive dysfunction is a transdiagnostic feature of autism (especially Level 1 / DSM-5 social-but-organized-impaired profile per [weitlauf2014-dsm5-levels]). Visual schedules and external cueing are the canonical accommodation. | [weitlauf2014-dsm5-levels] |
| **Theory of mind (ToM)** | Capacity to attribute mental states (beliefs, desires, intentions) to self and others. Differences in ToM tasks documented in autism since 1985; modern framing (especially neurodiversity-aligned) reframes as bidirectional: *double-empathy problem* — autistic and neurotypical people both struggle to read each other. Not a sole or universal feature; alexithymia (50% comorbidity, [kinnaird2019-alexithymia]) is now understood to drive much of what was historically attributed to ToM deficits. | [kinnaird2019-alexithymia], [mathur2024-aba-neurodiversity] |
| **Alexithymia** | Difficulty identifying and describing one's own emotional states. Prevalence in ASD ~50% vs ~5% in neurotypical (RR 6.50, [kinnaird2019-alexithymia]). Common but not universal in autism. Direct product implication: emotion-labeling features need scaffolds (visual scales, body-map prompts) rather than open self-report. | [kinnaird2019-alexithymia] |
| **Special interests** | Intense, focused, often highly specialized interests sustained over time. DSM-5 Criterion B3. Source of expertise, identity, and joy in autistic users; the deficit-framed term "restricted interests" is being replaced by "focused interests" or "special interests" in neurodiversity-aligned writing. | [mathur2024-aba-neurodiversity] |
| **Echolalia** | Repetition of others' speech, immediate or delayed; can be communicative (functional script use, gestalt language processing) or non-communicative. ICD-11 declines to list as a required diagnostic exemplar ([greaveslord2022-icd11-asd]). Once treated as pathological in older ABA protocols; modern frame recognizes communicative function. | [greaveslord2022-icd11-asd] |
| **AAC user** | A person who uses augmentative or alternative communication: any modality replacing or supplementing speech. Includes low-tech (PECS picture cards, communication books), mid-tech (single-message buttons), high-tech (speech-generating devices, tablet apps like Proloquo2Go). Roughly 1 in 3 autistic children meets the floor for considering AAC ([tagerflusberg2013-minimally-verbal], [norrelgen2015-minimally-verbal]). See [aac-symbol-systems](aac-symbol-systems.md) and [pecs-evidence](pecs-evidence.md). | [tagerflusberg2013-minimally-verbal], [norrelgen2015-minimally-verbal] |
| **Neurodiversity vs medical model** | Two coexisting framings. **Medical model**: autism is a disorder requiring diagnosis, intervention, and (historically) remediation toward neurotypical norms. **Neurodiversity model**: autism is a natural variation in human cognition; impairment is largely caused by misfit between autistic minds and a neurotypical-designed environment ([mathur2024-aba-neurodiversity]). Reform-era ABA and most contemporary autism research integrate both: support the user without pathologizing identity. Product positioning that mocks neurodiversity loses the autistic-adult and parent-advocate market; product positioning that denies clinical reality loses the access-to-services population. | [mathur2024-aba-neurodiversity], [kupferstein2018-aba-ptsd] |
| **PDA profile** | Pathological Demand Avoidance / Pervasive Drive for Autonomy. UK clinical research construct; not in DSM-5-TR or ICD-11. ~7% within ASD clinical samples ([onions2015-pda-disco]). Distinguishing features: extreme demand avoidance via social strategies (distraction, negotiation, role-play, panic), socially shocking behavior. Demand-framed UX patterns (offering choices rather than commands; rephrasing tasks) reduce demand-load. Product copy must not claim to "treat PDA" — it lacks diagnostic standing. | [onions2015-pda-disco] |

# Open questions
- **Peru prevalence**: zero population-based studies. Is the Defensoría 2023 estimate of ~204,818 (97% undiagnosed) credible? It uses outdated WHO 1/160 baseline; current GBD 2021 1/127 would yield ~270,000, current Chile-projected 1.31% would yield ~430,000. This is a primary-research opportunity for academic partnership.
- **LATAM-wide adult ASD prevalence**: every published LATAM number is for children. Adult prevalence is unknown across the region. Late-diagnosed adult populations are growing fast in Argentina ([montenegro2022-argentina]) but unmeasured.
- **Hyper- vs hypo-sensory split**: aggregate "atypical sensory profile" is ~90%, but per-modality and per-direction (hyper vs hypo) prevalence is not cleanly meta-analyzed. Dunn quadrant distribution within autistic population would be useful for product personalization defaults.
- **Minimally-verbal LATAM rate**: canonical 25–30% is from US/Sweden cohorts in well-resourced early-intervention systems. LATAM rate is plausibly higher given diagnostic delay; not measured.
- **Sex ratio in LATAM**: every LATAM study reports clinical/registry samples (4:1 to 6:1). Population-modeled ratio (true biology) is closer to 2.1:1 ([santomauro2025-gbd-2021-autism]). The implied LATAM lost-girls gap is ~50% of female cases never reaching diagnosis — quantification is missing.
- **Comorbidity rates in LATAM**: all comorbidity meta-analyses ([lai2019-mental-health-comorbidity], [liu2022-epilepsy-asd]) are dominated by US/EU clinical samples. Whether LATAM rates differ (lower because of undiagnosis, higher because of access barriers compounding) is unmeasured.
- **DSM-5 levels in LATAM clinical practice**: Peruvian/Mexican/Colombian clinicians use ICD-11 codes for billing but commonly reference DSM levels in clinical reports. Level distribution in LATAM cohorts (vs US ADDM) is undocumented.
- **PDA in LATAM**: zero published Spanish-language PDA evidence. Construct may not transfer; or may be subsumed under behavioral diagnoses.

# Builder takeaways

## Market sizing for PE / LATAM
- **Use 1.31% (Chile Bayesian projection, [romanurrestarazu2025-chile-bayesian]) as the working LATAM children prevalence** when modeling addressable market. Administrative-registry rates (Colombia 0.14%, Peru's 8,835 registered) capture only the diagnosed minority — your product reaches the larger undiagnosed population via parent-driven discovery.
- **Peru-specific**: ~270K–430K autistic children depending on which prevalence anchor is chosen. ~95% have no formal diagnosis ([defensoria2023-peru-autism-barriers]). The market is the parent / school / wellness adjacent surface, not the diagnosed-and-billing-MINSA surface.
- **Concentrate first launch in Lima**: services and diagnostic capacity are Lima-concentrated ([baquerizosedano2024-peru-history]). Outside-Lima families are even more under-served — reachable only via mobile / asynchronous channels.

## Product positioning
- **Lead with ICD-11 language qualifier (mild / impaired / absent functional language) for LATAM clinician-facing copy**. Translates directly to AAC need. DSM-5 Levels 1/2/3 confuse LATAM public-system users and are themselves unstandardized ([weitlauf2014-dsm5-levels]).
- **Do not segment by Level alone**. Read functional dimensions (communication, sensory, motor, executive function, alexithymia) directly. A user labeled Level 1 may have severe adaptive deficits; a user labeled Level 3 may have intact cognition.
- **Diagnostic-status-agnostic product wins LATAM**. A wellness/education product that works without a diagnosis bypasses the 24-month LATAM diagnostic delay ([montielnava2024-latam-diagnosis-age]) and the ~95% Peruvian undiagnosed population ([defensoria2023-peru-autism-barriers]).

## Default accommodations
- **Sensory-low defaults**: ~90% of autistic users have atypical sensory profiles ([green2016-sensory-dsm5], [morimoto2021-sensory-asd]). Calm color palette, no auto-play sound, loudness ceiling, no high-frequency flicker (WCAG 2.3.1 photosensitive guidelines apply because of ~10% epilepsy comorbidity, [liu2022-epilepsy-asd]).
- **Motor-tolerant UI**: ~70% have some motor coordination difficulty ([kangaranifarahani2024-motor]). No drag-and-drop, no multi-finger gestures, no time-pressured precision; touch targets ≥48dp; long dwell times.
- **Alexithymia-aware emotion features**: ~50% can't reliably name their emotions ([kinnaird2019-alexithymia]). Use visual scales, body-map prompts, externalized cues — not free-text "how do you feel?".
- **Sleep / GI / anxiety considerations integrated**: not opt-in features — these affect the majority of autistic users ([schwichtenberg2022-sleep-asd], [holingue2023-gi-symptoms], [lai2019-mental-health-comorbidity]).

## Honest copy
- ASD prevalence is **1 in 31 in active US surveillance** ([shaw2025-addm-2022]) **vs 1 in 127 in GBD 2021 modeling** ([santomauro2025-gbd-2021-autism]). Cite the appropriate source for the audience. Never present "1 in 36" or "1 in 100" without anchor — both are misleading after 2025.
- True sex ratio is closer to 3:1 ([loomes2017-mf-ratio], [shaw2025-addm-2022]) and likely 2:1 in population-modeled estimates ([santomauro2025-gbd-2021-autism]). Marketing that defaults to "boys with autism" reinforces the lost-girls gap and misses ~25–40% of the addressable user base.
- **Don't claim to "treat" autism** under wellness/education positioning; describe what the product *supports* (communication, regulation, learning, family routines).
- **Don't claim to address PDA** ([onions2015-pda-disco]) — no diagnostic standing in DSM-5-TR or ICD-11.

## Distribution and partnership angles for PE
- Existing Peruvian institutions per [baquerizosedano2024-peru-history]: Centro Ann Sullivan (founded 1979, ABA + functional curriculum), ASPAU-Peru (parent advocacy), CONADIS (disability registry), MINSA + EsSalud public systems. ASAU and Centro Ann Sullivan are the highest-leverage distribution partners.
- 36% of Peruvian referrals come via medical doctors, 27% via teachers ([fombonne2016-leon-mexico] is MX but mirror pattern). Channel strategy follows.
- 78.4% of Peruvian autistic children at EsSalud's flagship hospital lack disability certificates ([delacernaluna2024-peru-rebagliati]) — meaning families miss legal protections under Law 30150. An information/navigation product around disability certification is a credible side-product.

## Cross-product-line implications
- **AAC line**: 25–30% of autistic children are minimally verbal ([tagerflusberg2013-minimally-verbal], [norrelgen2015-minimally-verbal]). LATAM rate likely higher. See [pecs-evidence](pecs-evidence.md), [aac-symbol-systems](aac-symbol-systems.md).
- **Wellness / regulation line**: sensory + sleep + GI + anxiety + alexithymia stack hits the majority of autistic users.
- **Family-support line**: 34%+ of Argentine families have ≥1 member who stopped working to care ([montenegro2022-argentina]). Caregiver-load reduction has measurable economic value.
- **Adult line**: late-diagnosed adults are a growing, almost-unserved LATAM segment. ICD-11's adult-onset accommodation ([greaveslord2022-icd11-asd]) provides clinical rationale.
