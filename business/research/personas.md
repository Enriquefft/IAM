---
slug: personas
status: draft
last_reviewed: 2026-05-02
geographic_focus: [PE, MX, CO, AR, EC, CL]
anchor_geographies: [US, EU]
product_scope: wellness-education-only
personas: [tea-kid, parent, professional]
---

# Scope

Three personas: the autistic person (child/teen), the parent/caregiver, the professional. Each has subtypes; subtypes do **not** share needs, willingness to pay, or decision flow. LATAM data is sparse for almost every claim; US/EU figures are flagged as anchors when used.

Product scope is **wellness/education only**. Anything requiring a clinical claim (diagnosis, treatment effect, SaMD) is out of frame and should not appear here as a wedge.

# Persona 1 — Autistic kid / teen (`tea-kid`)

The trap to avoid is "kid is the user, parent is the buyer". For preschoolers that is mostly true. By age 9–10 it is partially false. By age 13+ it is increasingly false in ways that matter for retention, ethics, and product design. Autistic self-advocacy literature is explicit that **assent** (the person, including pre-verbal/minimally verbal kids, voluntarily agreeing) is distinct from **consent** (legal guardian agreement) and that ignoring assent is one of the documented harms of historical interventions (Adventure Learning Center, 2024 / ASAN, 2021).

## Subtypes

### 1a. Minimally verbal / nonspeaking preschooler (~2–6 yrs)
- **Daily life:** Routines anchored by parents and (if accessible) PRITE / early-intervention sessions. Communication often via gestures, leading caregiver by hand, picture exchange, or AAC. Sensory profile drives nearly every transition (clothing, food textures, sound, fluorescent lighting). 90–95% of autistic individuals show sensory processing differences (Frontiers, 2022 review). Sleep often disrupted.
- **Primary needs:** A way to express want / refuse / ask for help; predictable visual structure for transitions (visual schedules are listed by the National Clearinghouse on Autism Evidence and Practice as one of 28 evidence-based practices, ASAT, 2024); regulation tools (sensory breaks, deep pressure, calm spaces).
- **Current tools:** PECS binders, low-/mid-tech AAC apps (LetMeTalk free, SymboTalk free tier, Proloquo2Go ~USD 250 one-time), printed pictograms ([ARASAAC](competitors/arasaac.md), CC BY-NC-SA, the de facto Spanish-language symbol set across Iberoamerica). Up to **~50% of AAC implementations are abandoned or under-used** — primarily because of training gaps in the family, not the device itself (Tandfonline, 2023; Ohio State thesis, 2018).
- **Willingness/ability to pay:** Zero direct. Parent or institution buys.
- **Gatekeepers:** Parent, SLP/OT, special-ed teacher, sometimes pediatric neurologist.
- **Decision flow:** Therapist or parent forum recommends → parent installs → success/failure depends on whether the parent is trained as a communication partner.
- `View:` the wedge here is not a "better PECS" — it is solving the AAC abandonment crisis by treating the parent as a co-user from day one.

### 1b. Verbal school-age child (~6–11 yrs)
- **Daily life:** School day in either inclusion classroom (Peru: with SAANEE itinerant support for ASD level 1–2, MINEDU VRM 139-2020) or CEBE for higher-support needs. Afternoon often = stacked private therapies (SLP, OT, psychology) when family can pay. Sensory regulation and homework execution are daily flashpoints.
- **Primary needs:** Academic differentiation, social/emotional vocabulary, executive function scaffolding, predictable routines across home–school transitions.
- **Current tools:** Some interaction with parent's tablet (visual schedules, ad-hoc apps), school-issued worksheets, paper schedules. Almost no continuity between school SAANEE plan and home.
- **Willingness/ability to pay:** Pester power exists. Direct buying does not.
- **Gatekeepers:** Parent + classroom teacher + SAANEE coordinator (PE) / equivalent inclusion team.
- **Decision flow:** Often gifted/installed by parent without child input. Retention is poor when the child has no agency over content. Color preferences are atypical (kids with ASD over-represent green/brown preferences, under-represent yellow due to hyper-sensory response — ScienceDirect, 2016) — design assumptions inherited from neurotypical kids' apps fail.

### 1c. Verbal teen with masking / "high-functioning" profile (~12–18 yrs)
- **Daily life:** Mainstream secondary school. Heavy social load. Often undiagnosed or late-diagnosed, especially girls — masking is one of the strongest predictors of delayed diagnosis in girls and AFAB individuals (Autism Spectrum News, 2024). Cycles of apparent functioning followed by autistic burnout — defined by Raymaker et al. 2020 as "chronic exhaustion, loss of skills, and reduced tolerance to stimulus" stemming from cumulative load + barriers to support.
- **Primary needs:** Identity vocabulary; private space to process being autistic; tools to manage sensory/social load **on their own terms**, not parent-imposed; peer connection (often online, often special-interest mediated).
- **Current tools:** Reddit (r/aspergirls, r/autism), Discord servers, TikTok creators, sometimes journaling apps. Parent-imposed "autism apps" are typically rejected.
- **Willingness/ability to pay:** **Direct buying signal exists** for the first time — small in-app purchases with parent's card, freemium subscriptions on phone they own. Pay only when product respects autonomy and does not feel like surveillance.
- **Gatekeepers:** Mostly self. Parent gates only the payment.
- **Decision flow:** Discovers via peer/online community → tries free → asks parent for pay tier → parent often agrees because it is cheaper than missed therapy.
- `View:` wellness/education app for autistic teens **must read as "for me, by us"**, not "for my parent's anxiety". Anything that screen-time-reports to parents fails this group on first principles.

### 1d. Profoundly disabled child / co-occurring intellectual disability
- **Daily life:** Heavy ADL support. Self-injurious behavior episodes are not rare. Specialized centers (CEBE in PE) or, more often, home with caregiver. Reddit `r/AutismParenting` qualitative signal: parents describe being "overwhelmed and terrified for their children's future" (Today, 2025 — qualitative signal, not data).
- **Primary needs:** Communication of pain/discomfort, behavioral antecedent tracking, caregiver respite.
- **Current tools:** Whatever the family can stitch together. Heavy reliance on the primary caregiver's memory.
- **Decision flow:** Parent / institutional buyer. Child is not the user of administrative tooling but is the user of any AAC or sensory-regulation surface.

## Geographic notes — `tea-kid`

- Spanish-language UI is non-negotiable for PE/MX/CO/AR/EC/CL. [ARASAAC](competitors/arasaac.md) is the de facto symbol set; building on it (CC BY-NC-SA, non-commercial) is table stakes for a free tier, not a feature — commercial use requires separate licensing.
- Quechua / Aymara / Guaraní content effectively does not exist commercially. `Estimate:` <1% of available autism digital content addresses Indigenous-language households in PE/EC/BO/PY.
- Latino children in the US are diagnosed ~2.5 years later than non-Hispanic white children (PMC, 2014). LATAM studies show first parental concern at ~22 months but diagnosis at ~46 months (Montiel-Nava et al., 2024 — six-country LATAM study). In Peru specifically, hospital sample: mean age at diagnosis 3.83 years (Rebagliati Hospital, n=120, 2022).

# Persona 2 — Parent / primary caregiver

In ~85–90% of cases the primary caregiver is the mother (consistent across LATAM and US/EU samples). Fathers more often report stress secondary to the mother's mental health and lack of confidence (PMC, 2024). Three subtypes that do not share needs:

## Subtypes

### 2a. First-time post-diagnosis parent (kid 2–5 yrs, diagnosis <12 months ago)
- **Daily life:** Acute information overload + grief cycle + chasing referrals. Reddit qualitative signal: top recurring themes are barriers to obtaining diagnosis, sensory differences, navigating partner relationships, waitlists for services (PMC, 2025 thematic Reddit analysis — qualitative signal).
- **Primary needs:** (1) Trustworthy, non-aspirational, non-cure-marketing information in Spanish, (2) what to do **today** while on a 6–24 month waitlist (LATAM waitlists from 22→46 month gap, Montiel-Nava 2024; Peru-specific OT therapy median wait 8 months once in system, Rebagliati 2022), (3) screening/red-flag clarity, (4) emotional regulation for themselves.
- **Current tools:** Google. Facebook groups (large, Spanish-language ASPAU Perú, EITA, Brincar AR, Autismo Diario). YouTube. Autism Speaks Spanish-language materials (note: Autism Speaks is contested — ASAN and 60+ disability orgs condemned its messaging in 2009; ~1% of its budget historically went to family supports per ASAN; Wikipedia / ASAN sources). Mexican parents particularly cite WhatsApp groups.
- **Willingness/ability to pay:** **Highest of any subtype** in the first 6–12 months post-diagnosis. Anchored to private SLP/OT/psychology session prices: Mexico ~USD 8–10/hr (Tuman 2008, dated — `Estimate:` PE 2026 ~USD 15–40/hr in Lima private practice), USD ~120/hr ABA US benchmark. Pay USD 5–20/month for an app readily if it credibly reduces the chaos. Charity for free tier exists for low-income families and is a defensible business model in LATAM.
- **Gatekeepers:** Pediatrician, neurologist (in PE: pediatric neurology is the dominant diagnostic gateway, often one of the few professionals trusted), partner, extended family (especially grandmothers).
- **Decision flow:** Diagnosis day → Google + WhatsApp group recommendations → install 5–15 apps in 2 weeks → keep 1–2.

### 2b. Experienced parent of school-age kid (kid 6–11 yrs)
- **Daily life:** Logistics dominated. Driving 3–6 therapy sessions/week + school + home routines + IEP/PEI meetings + insurance / SIS (Peru) appeals. Caregiver mental health: pooled prevalence of depression among caregivers of autistic children = **45%** (n=13,853 across 40 studies, ScienceDirect 2024 meta-analysis). Mothers report higher rates than fathers across studies. Mothers of autistic children are less likely to be employed and earn less than mothers of non-disabled children (PMC, 2012). Family economic costs typically 5–12% of family income (literature reviews summarized in PMC 2020, US/EU samples — `Estimate:` LATAM share is higher because public coverage gaps push more spend out-of-pocket).
- **Primary needs:** Operational coordination across school + multiple therapists, behavior data tracking (so they can tell the next professional something useful), regression / progress visibility, advocacy ammunition for insurance/school.
- **Current tools:** WhatsApp threads with each therapist, paper notebooks ("cuaderno viajero" between school and home), spreadsheets, school-issued reports, SIS/CONADIS paperwork in physical folders. Documentation is duplicated 3–5 times across actors.
- **Willingness/ability to pay:** Lower per-month than 2a but higher LTV. Will pay for time savings and for evidence to take to the next IEP/SIS meeting. Sensitive to "another login".
- **Gatekeepers:** Self + partner. Therapist team has heavy influence on what gets adopted.
- **Decision flow:** Trial after a therapist or trusted parent peer recommends. Will not adopt anything that creates more typing.

### 2c. Parent of autistic adolescent / young adult (kid 12–25 yrs)
- **Daily life:** "Services cliff" hits hard. In LATAM, **84.4–95.9% of autistic adults receive zero hours per week of services** (Lai et al., LATAM allied-health survey, PubMed 2021). Argentina has the strongest legal framework (Ley 27.043, comprehensive coverage including transition supports) but enforcement varies; parents resort to judicial amparos (Amparando Salud, AR). In PE, post-21-yrs services are essentially nonexistent in the public system.
- **Primary needs:** (1) Autonomy/independence skills curriculum for the teen, (2) identity-affirming content the teen will accept, (3) future-planning (housing, guardianship, employment), (4) help releasing control to the teen.
- **Current tools:** Asociación de padres parents' networks (TGD-Padres AR, ASPAU PE, Brincar AR, FESPAU/Autismo España ES). Few digital tools; most US transition curricula (JobTIPS, etc.) are not localized to LATAM legal/employment realities.
- **Willingness/ability to pay:** Moderate. Decision is increasingly made jointly with or deferred to the teen.
- **Gatekeepers:** Self, partner, the teen.
- **Decision flow:** Often searches for "qué hacer cuando mi hijo TEA cumpla 18" → support groups → almost no software answer exists.

## Geographic notes — parent

- **Stigma:** Disabilities and mental health carry strong stigma in Latin American culture, frequently associated with parenting style ("no es un buen padre / madre") — caregivers describe being judged for the child's behavior in public (PMC 2022 systematic review of Latinx parental perceptions). This is a buying barrier (parents hide diagnosis from extended family) and a content opportunity (apps that help parents respond to family criticism).
- **Public-vs-private:** PE has SIS coverage on paper (Ley 30150 + 2019 National Plan) but waitlists at hospital level put OT at median 8 months and SLP 3.5 months after diagnosis (Rebagliati 2022). Only 26.7% of one Peru hospital cohort had received private (paid) therapy — the rest are dependent on the public queue. AR Ley 27.043 mandates obras sociales coverage; MX has fragmented public/private; CO has POS coverage with appeal-driven access.
- **Language:** Even within Spanish, dialects matter for AAC (e.g., "carro" PE/CO vs "auto" AR/CL/UY vs "coche" MX/ES). One pictogram label ≠ one Spanish.

# Persona 3 — Professional

There is no single "autism professional". Six subtypes with different workflows, software stacks, and willingness to pay. LATAM-specific professional data is thin; most numbers below come from US/EU studies and are flagged.

## Subtypes

### 3a. SLP / Fonoaudiólogo (school- or clinic-based)
- **Workflow:** Caseload-driven. US benchmark: mean caseload 49 students, ~60% of SLPs at caseload 41–50 perceive it unmanageable (ASHA 2024 Schools Survey). Documentation = primary stressor, repeatedly cited (ASHA portal; PMC 2020 review). Burnout: SLPs in school-based US sample report high emotional exhaustion (Pubs ASHA 2023 cross-sectional, n=453).
- **Software they use:** Word/Google Docs for reports; spreadsheets for goals; Boom Cards / TPT (US) for materials; in LATAM, mostly self-made PowerPoints + WhatsApp PDFs to parents; AAC apps as part of session content.
- **Pain points:** Documentation burden, parent communication outside hours, lack of localized materials in Spanish, no integrated way to track goals across 30+ kids.
- **Willingness to pay:** Out-of-pocket for materials is normal in US (TPT spend USD ~50–200/yr per teacher per year, `Estimate:`). In LATAM private practice, pays personally for tools that save report-writing time. Clinic / school as buyer is much harder (procurement cycles, no purchase order culture for SaaS in PE/MX education sector).
- **Decision flow:** Peer recommendation in WhatsApp / Facebook professional groups → free trial → pays personally if it saves >2 hr/week.

### 3b. OT / Terapeuta ocupacional
- **Workflow:** Sensory integration sessions, ADL training, school environment consultation. Studies show OTs lack confidence with autism specifically — half of OTs surveyed reported lacking confidence at least sometimes; ASD-specific experience is the predictor (PubMed 2013, n=818 OTs).
- **Software they use:** Similar to SLP. Heavy on visual / printable resource libraries. Sensory profiles tracked on paper.
- **Pain points:** Sensory profile interpretation across home and school, families not following through on environmental recommendations, lack of LATAM-relevant continuing education.
- **Willingness to pay:** Similar to SLP.

### 3c. Psychologist / clinical psychologist (private practice or clinic)
- **Workflow:** Diagnostic evaluation (ADOS, ADI-R when available — neither is reliably available outside major LATAM cities; `Estimate:` <50 ADOS-2 certified evaluators across all of Peru, requires verification), parent counseling, child therapy (often play-based or CBT-adapted).
- **Pain points:** Diagnostic instrument access and Spanish validation (only a few autism screening/diagnostic tools have validated Spanish versions — ScienceDirect 2023 evidence map), parent expectation management, scope creep into family therapy.
- **Willingness to pay:** Highest of the professional subtypes for diagnostic / assessment software because the per-evaluation revenue is high (PE private psicodiagnóstico TEA `Estimate:` USD 200–600 per full eval).

### 3d. Special-ed teacher (CEBE in PE / equivalent) and inclusion teacher (regular classroom)
- **Workflow:** Inclusion teachers manage 25–35 kids with one or two on the spectrum and feel unprepared (PMC 2022 — barriers to inclusion). Special-ed teachers in CEBE manage smaller groups but with higher support needs. PE's SAANEE provides itinerant support but is chronically understaffed (qualitative signal from MINEDU regional capacity-building reports).
- **Burnout:** Teachers of autistic students report higher burnout than teachers of students with EBD or ID (Sciencedirect 2017; Saudi-context Frontiers 2024 with similar finding). The interaction of inclusion mandate + lack of training is the strongest predictor (Tandfonline 2024 review; Brunsting et al. SAGE 2025 synthesis of 29 studies 2013–2023).
- **Software they use:** Almost none in LATAM public schools. Some inclusion teachers self-fund Canva subscriptions for materials.
- **Willingness to pay:** Teacher pays personally, school does not. Very price-sensitive (LATAM public-school teacher salaries ~USD 400–900/month typical range, `Estimate:`).

### 3e. BCBA / behavior analyst
- **Workflow:** Concentrated in US/CA market — US has ~74,000 BCBAs (BACB 2024). LATAM BCBA presence is small and concentrated in private clinics in CDMX, BA, Lima, Bogotá. `Estimate:` <100 BCBAs total across PE/CO/EC.
- **Pain points:** Documentation (CPT codes, billing) is US-specific; in LATAM, BCBAs operate more like private therapists and document for parent-facing reports.
- **Position in market:** Controversial — neurodiversity-affirming community (ASAN, large segments of autistic adult community) opposes traditional ABA; survey research links ABA exposure to elevated PTSD-symptom rates (Kupferstein 2018, contested but widely cited). For a wellness/education product, deliberately staying neutral or distancing from ABA framing is defensible positioning.

### 3f. Private practice owner / clinic director
- **Workflow:** Above all of 3a–3e. Buyer for the team. Pain points: scheduling, billing (insurance/private mix), parent communication at scale, demonstrating outcomes.
- **Willingness to pay:** Per-seat SaaS is feasible; price points USD 20–80/seat/month are typical for LATAM clinic management software (`Estimate:`, market is fragmented and opaque).

## Geographic notes — professional

- BCBA-style ABA-centric tools assume a US insurance/billing context that does not map onto LATAM. Building LATAM-first means optimizing for cash-pay private practice + small-clinic workflows.
- Spanish-language professional development for autism is scarce; TGD-Padres AR, ASPAU PE, Brincar AR, FESPAU ES, Autismo España all run their own training because the formal university curricula lag.
- Documentation in PE/MX/CO clinical practice is largely **paper or Word-doc-by-WhatsApp**. There is no LATAM-dominant EMR for outpatient pediatric therapy. This is an opening but also a market-readiness risk: clinics are not used to paying per-seat for software.

# Cross-persona buying-flow summary

| Buyer | User | Convincer | Killer objection |
|---|---|---|---|
| Parent (2a) | Kid (1a/1b) | Therapist + WhatsApp peer | "Just another app, my kid won't use it" |
| Parent (2b) | Self + kid | Time savings, IEP/SIS evidence | "More typing" |
| Parent (2c) | Teen + self | Teen accepts it; transition relevance | "My teen rejects anything I install" |
| Teen (1c) | Self | Peer / online creator + autonomy framing | "Reports my behavior to my parents" |
| Professional (3a–3f) | Self + caseload | Peer in professional WhatsApp; saves report time | "Doesn't fit my workflow / not in Spanish" |
| Clinic director (3f) | Team | Throughput / parent comms + outcomes | "Per-seat SaaS is not how we buy software" |

# Open questions

- Quantified BCBA / SLP / OT counts per LATAM country — not found in published sources, would require gray-literature scraping of professional registries (Colegio de Tecnólogos Médicos PE; Colegio de Psicólogos PE; equivalents per country).
- Quantified out-of-pocket monthly therapy spend for autism in PE/MX/CO at the cohort level — not in tree.
- Validated willingness-to-pay numbers for autism software in LATAM — `View:` need primary research; secondary literature does not answer it.
- ADOS-2 / ADI-R certified evaluator counts per LATAM country — open.
- Whether SAANEE PE actually has bandwidth for any digital integration — open.

# Sources

- Caregiver burden and depression meta-analysis: [Global prevalence of depression in caregivers of children with autism (ScienceDirect, 2024)](https://www.sciencedirect.com/science/article/abs/pii/S088259632400438X) — retrieved 2026-05-02.
- Caregiver burden multicentre study: [Parental Burden and its Correlates in Families of Children with ASD (PMC, 2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6080067/) — retrieved 2026-05-02.
- Mother-father stress dyads: [Psychological distress in parents of children with ASD: 683 mother-father dyads (ScienceDirect)](https://www.sciencedirect.com/science/article/abs/pii/S0882596322000380) — retrieved 2026-05-02.
- Parental employment impact: [Implications of Childhood Autism for Parental Employment and Earnings (PMC, 2012)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3356150/) — retrieved 2026-05-02.
- Family economic burden literature review: [Economic Burden of Childhood Autism Spectrum Disorders (PMC, 2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7034397/) — retrieved 2026-05-02.
- Autistic burnout definition: [Raymaker et al. 2020, Defining Autistic Burnout (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7313636/) — retrieved 2026-05-02.
- LATAM age-of-diagnosis study: [Montiel-Nava et al. 2024, Age of autism diagnosis in LAC countries (SAGE)](https://journals.sagepub.com/doi/10.1177/13623613221147345) — retrieved 2026-05-02.
- Peru hospital cohort data: [Characteristics of children with ASD in pediatric rehabilitation at a referral hospital in Peru (PMC, 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11149770/) — retrieved 2026-05-02.
- Peru autism historical/legal account: [Brief historical account of autism in Peru (PMC, 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11300681/) — retrieved 2026-05-02.
- Sensory processing prevalence: [Caregiver Strategies to Sensory Features for Children With Autism (Frontiers, 2022)](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.905154/full) — retrieved 2026-05-02.
- Visual schedules evidence: [ASAT — Visual Activity Schedules](https://asatonline.org/for-parents/learn-more-about-specific-treatments/activity-schedules/) — retrieved 2026-05-02.
- AAC abandonment rates: [Rethinking device abandonment: a capability approach (Tandfonline, 2023)](https://www.tandfonline.com/doi/full/10.1080/07434618.2023.2199859) — retrieved 2026-05-02.
- Parent training and AAC: [The Effect of Parent Training on AAC Device in the Home Environment (Ohio State thesis)](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=osu1523887662780829&disposition=inline) — retrieved 2026-05-02.
- LMIC autism services gap: [Responding to Autism in LMIC: What to Do and What Not to Do (PMC, 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9688501/) — retrieved 2026-05-02.
- Latinx caregivers diagnosis barriers: [Understanding Barriers to Receiving Autism Diagnoses for Hispanic and Latinx Families (PMC, 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/) — retrieved 2026-05-02.
- Latinx parental perception systematic review: [Parental Perceptions of ASD in the Latinx and Black Sociocultural Context (PMC, 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8740628/) — retrieved 2026-05-02.
- Adults in LATAM service gap: [Use of allied-health services and medication among adults with ASD in Latin America (PubMed)](https://pubmed.ncbi.nlm.nih.gov/34338424/) — retrieved 2026-05-02.
- Argentina TGD-Padres / Ley 27.043: [TGD Padres TEA — Grupo Promotor](https://tgd-padres.com.ar/tgdpadre.html) — retrieved 2026-05-02.
- Argentina amparo legal route: [¿Qué hacer si la obra social deniega prestaciones por autismo? (Amparando Salud)](https://amparandosalud.com.ar/amparo-por-autismo/) — retrieved 2026-05-02.
- Peru Ley 30150: [Ley N° 30150 (vLex Perú)](https://vlex.com.pe/vid/ley-n-30150-ley-578579046) — retrieved 2026-05-02.
- ASPAU Perú: [ASPAU Perú](https://www.autismoaspauperu.com/) — retrieved 2026-05-02.
- Autism Speaks controversy: [Autism Speaks (Wikipedia)](https://en.wikipedia.org/wiki/Autism_Speaks) — retrieved 2026-05-02.
- ASAN: [Autistic Self Advocacy Network](https://autisticadvocacy.org/) — retrieved 2026-05-02.
- ASAN ABA position / assent vs consent: [Teaching Assent to Build a Foundation for Consent (Adventure Learning Center, 2024)](https://adventurelearningcenter.org/teaching-assent-to-build-a-foundation-for-consent-why-it-matters-for-autistic-people/) — retrieved 2026-05-02.
- Autism research community priorities (UK JLA): [Pellicano et al., What should autism research focus upon? (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4230972/) — retrieved 2026-05-02.
- SLP burnout / caseload: [School-Based SLPs' Stress and Burnout (Pubs ASHA, 2023)](https://pubs.asha.org/doi/10.1044/2022_LSHSS-22-00047) — retrieved 2026-05-02.
- SLP caseload and workload: [ASHA — Caseload and Workload](https://www.asha.org/practice-portal/professional-issues/caseload-and-workload/) — retrieved 2026-05-02.
- OT confidence with autism: [OT services for people with autism (PubMed, 2013)](https://pubmed.ncbi.nlm.nih.gov/24118044/) — retrieved 2026-05-02.
- Sped-ed teacher burnout synthesis: [Brunsting et al., Burnout and Occupational Wellbeing of Special Education Teachers (SAGE, 2025)](https://journals.sagepub.com/doi/abs/10.3102/00346543251332919) — retrieved 2026-05-02.
- Spanish-language screening tools evidence map: [Evidence map of Spanish language parent- and self-report tools for ASD (ScienceDirect, 2023)](https://www.sciencedirect.com/science/article/abs/pii/S175094672300017X) — retrieved 2026-05-02.
- ARASAAC: [ARASAAC — ¿Qué son los SAAC?](https://old.arasaac.org/aac.php) — retrieved 2026-05-02.
- BACB credential counts: [BACB](https://www.bacb.com/) — retrieved 2026-05-02.
- Reddit autism parenting thematic analysis: [An Exploratory Network Analysis of Discussion Topics About Autism Across Subreddit Communities (PMC, 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12189136/) — retrieved 2026-05-02.
- Reddit autistic motherhood qualitative: [Autistic Women's Experience of Motherhood: A Qualitative Analysis of Reddit (PMC, 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12167272/) — retrieved 2026-05-02.
- Masking and late diagnosis in girls/women: [Preventing the Hidden Burnout Crisis in Autistic Women and Girls (Autism Spectrum News)](https://autismspectrumnews.org/preventing-the-hidden-burnout-crisis-in-autistic-women-and-girls/) — retrieved 2026-05-02.
- UI design preferences for autistic users: [Developing User Interface Design Application for Children with Autism (ScienceDirect, 2016)](https://www.sciencedirect.com/science/article/pii/S1877042816000471) — retrieved 2026-05-02.
- Telehealth caregiver coaching for Latinx families: [Yllades et al., Parent Coaching via Telepractice for Children From Latinx Backgrounds With ASD (SAGE, 2022)](https://journals.sagepub.com/doi/10.1177/01626434211033604) — retrieved 2026-05-02.
- Brincar Argentina: [Fundación Brincar por un Autismo Feliz](https://www.brincar.org.ar/) — retrieved 2026-05-02.
- Peru SAANEE / CEBE structural overview: [Servicios de apoyo para la inclusión educativa — agentes educativos peruanos (Redalyc)](https://www.redalyc.org/journal/4536/453676307010/html/) — retrieved 2026-05-02.
