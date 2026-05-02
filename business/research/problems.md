---
slug: problems
status: draft
last_reviewed: 2026-05-02
geographic_focus: [PE, MX, CO, AR, EC, CL]
anchor_geographies: [US, EU]
product_scope: wellness-education-only
ranking_method: severity-x-frequency-x-software-tractability
---

# Method

Problems are ranked by an internal weighting of (a) **severity** to the person experiencing them, (b) **frequency** across the population, and (c) **software tractability within wellness/education scope** (no clinical claims, no SaMD path). `wedge_potential` is the synthesis of these three.

Each problem links to who experiences it (cross-references [personas.md](./personas.md)), gives a current workaround, and cites evidence inline. `Estimate:` and `View:` flags follow [business/CLAUDE.md](../CLAUDE.md).

Problems where the only honest answer is "fund a public-health program / change a law / train more clinicians" are listed but tagged `wedge_potential: low` because software cannot solve them.

---

# 1. Diagnostic delay: 22-month gap between first parental concern and formal diagnosis (LATAM)

- **Who:** Parent 2a (first-time post-diagnosis), Kid 1a (preschooler).
- **Severity:** High. The gap means missing the strongest-evidence early-intervention window. Kids with earlier diagnosis can begin OT/SLP before age 3.
- **Frequency:** Very high. Documented in 6-country LATAM cohort (Argentina, Brazil, Chile, Dominican Republic, Uruguay, Venezuela): mean parental concern 22 months → mean diagnosis 46 months ([Montiel-Nava et al. 2024](https://journals.sagepub.com/doi/10.1177/13623613221147345)). Peru hospital sample: mean diagnosis 3.83 yrs, n=120 ([Rebagliati 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC11149770/)). CONADIS Peru registered ASD cases: 4 (2001) → 836 (2011) → 8,835 (2021) — `View:` underdiagnosis is severe; even at 0.6% prevalence (Lancet Psychiatry GBD 2024 Tropical LATAM age-standardized estimate) Peru should have 200,000+ autistic individuals; <5% are registered.
- **Current workaround:** Parents shop hospital → hospital, often paying private (in PE, only 26.7% of one cohort had received private therapy — most are stuck in the public queue). WhatsApp groups recommend private psychologists or pediatric neurologists.
- **Evidence:** Peru historical/legal context [PMC 11300681](https://pmc.ncbi.nlm.nih.gov/articles/PMC11300681/); LATAM diagnosis age [SAGE 2024](https://journals.sagepub.com/doi/10.1177/13623613221147345); Latinx US-context barriers [PMC 9584143](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/) (Hispanic/Latinx US children diagnosed ~2.5 years later than non-Hispanic white).
- **wedge_potential: medium.** Software cannot deliver a diagnosis (out of wellness/education scope and would trip MD-classification rules), but it **can** (i) provide validated early-flag screening (M-CHAT-R Spanish has validated versions per [evidence map ScienceDirect 2023](https://www.sciencedirect.com/science/article/abs/pii/S175094672300017X)), (ii) hand parents a structured first-week-after-concern action plan, (iii) reduce the noise so the right family reaches the right pediatric neurologist faster.

---

# 2. AAC abandonment: ~50% of devices/apps are abandoned, primarily because the family is not trained as a communication partner

- **Who:** Kid 1a (minimally verbal preschooler) + Kid 1d (profoundly disabled), Parent 2a, Professional 3a (SLP).
- **Severity:** Critical. AAC is the difference between "communicates wants and needs" and "doesn't". Abandonment locks the kid out of their own voice.
- **Frequency:** Up to ~50% of AAC users abandon or under-use devices ([Tandfonline 2023 review](https://www.tandfonline.com/doi/full/10.1080/07434618.2023.2199859); [Ohio State thesis on parent training and AAC](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=osu1523887662780829&disposition=inline)). Five-theme barrier framework: Stakeholder Knowledge, Attitudes/Stigma, Resources, User Engagement, Device Fit ([PMC 11197385](https://pmc.ncbi.nlm.nih.gov/articles/PMC11197385/)). Specifically: parents remain untrained communication partners, do not create communication opportunities at home, and devices fall out of use even in families "intensely committed" to AAC.
- **Current workaround:** Free AAC apps (LetMeTalk, SymboTalk free tier — both ARASAAC-based) get installed and abandoned. Premium options (Proloquo2Go ~USD 250, AssistiveWare) are bought and abandoned at the same rate.
- **Evidence:** [CHLA awareness study](https://www.chla.org/blog/experts/research-and-breakthroughs/study-reveals-wide-gap-awareness-aac-devices-children-autism); [Tandfonline 2023](https://www.tandfonline.com/doi/full/10.1080/07434618.2023.2199859); [Beating the Odds in AAC Device Abandonment (Medbridge)](https://www.medbridge.com/blog/beating-the-odds-in-aac-device-abandonment); SymboTalk/EC+ Spanish-speaking pilot [ScienceDirect 2025](https://www.sciencedirect.com/science/article/abs/pii/S0214460325000142).
- **wedge_potential: high.** The wedge is not a "better symbol set" — ARASAAC already exists and is free. The wedge is **family-as-co-user**: short daily prompts to the parent ("today, intentionally pause before handing them the cup so they can request it"), automatic logging of what the kid actually used so the SLP can see it next session, and pictogram personalization that addresses LATAM dialect variance (carro/auto/coche, etc.). Wellness/education framing fits: this is communication coaching, not a clinical claim.

---

# 3. Caregiver mental load: ~45% of caregivers of autistic children show clinically significant depression; mothers disproportionately affected

- **Who:** Parent 2a + 2b + 2c (all subtypes; mothers carry it).
- **Severity:** High. Pooled prevalence of depression among caregivers of autistic children = **45%** (n=13,853 across 40 studies, [ScienceDirect 2024 meta-analysis](https://www.sciencedirect.com/science/article/abs/pii/S088259632400438X)). Highest in Europe (54%) and Eastern Mediterranean (53%); LATAM not separately quantified — `Estimate:` similar or higher given sparser support systems. Mothers report higher rates of depression, anxiety, and caregiver strain than fathers ([Springer 2025 chronic stress study](https://link.springer.com/article/10.1007/s10803-025-06736-9)).
- **Frequency:** ~half of all caregivers, by definition.
- **Current workaround:** WhatsApp peer support groups (large in PE/MX/AR/CO), occasional individual therapy if affordable, parent-association events (ASPAU PE, Brincar AR, FESPAU ES). Mindfulness-based interventions show benefit in systematic reviews ([SAGE 2024](https://journals.sagepub.com/doi/10.1177/21582440241235033)) but are rarely accessible.
- **Evidence:** Parental burden multicentre [PMC 6080067](https://pmc.ncbi.nlm.nih.gov/articles/PMC6080067/); QoL and shared childcare arrangement effect [Acta Biomedica 2024](https://mattioli1885journals.com/index.php/actabiomedica/onlinefirst/view/17719); employment / earnings implications [PMC 3356150](https://pmc.ncbi.nlm.nih.gov/articles/PMC3356150/); economic burden review [PMC 7034397](https://pmc.ncbi.nlm.nih.gov/articles/PMC7034397/).
- **wedge_potential: medium.** Software for parent mental health is a crowded category (Calm, Headspace, BetterHelp). The autism-specific wedge is (i) sleep / regulation content built around the *parent's* nights interrupted by the kid's sleep disruption and meltdowns, (ii) brief mindfulness/CBT modules tied to specific daily-life triggers (school pickup meltdown, food refusal, family judgement), (iii) peer-matched support that does not require the parent to retell the story to a non-autism-aware therapist. Wellness framing is clean.

---

# 4. Parent post-diagnosis chaos: no structured "what to do this week" for the 22 months the family is on the waitlist

- **Who:** Parent 2a (first-time post-diagnosis).
- **Severity:** High. The family is in maximum information overload + grief + practical paralysis, and the public system response is "waitlist". They will install 5–15 apps in 2 weeks looking for a structured response.
- **Frequency:** Every newly diagnosed family in LATAM. Reddit r/AutismParenting + Spanish-language WhatsApp groups recurringly surface the same question: "diagnóstico recién, ¿qué hago primero?" (qualitative signal — [PMC 12189136 thematic Reddit analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12189136/) / [PMC 12167272 Reddit motherhood qualitative](https://pmc.ncbi.nlm.nih.gov/articles/PMC12167272/)).
- **Current workaround:** Google + WhatsApp peer recommendations + ASPAU/Brincar/FESPAU intro materials + Autism Speaks Spanish materials (note Autism Speaks is contested — see [personas.md §1c, §2c](./personas.md)). A handful of Spanish-language parent-coaching telepractice studies exist ([SAGE 2022](https://journals.sagepub.com/doi/10.1177/01626434211033604); [Frontiers WHO Caregivers Skills Training rural telehealth 2022](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.909947/full)) but they are research deployments, not consumer products.
- **Evidence:** LATAM care gap close to 100% in [LMIC scoping review PMC 9277121](https://pmc.ncbi.nlm.nih.gov/articles/PMC9277121/); diagnostic-to-treatment time interval predicts higher economic burden [PMC 8662780](https://pmc.ncbi.nlm.nih.gov/articles/PMC8662780/).
- **wedge_potential: high.** This is the moment the parent has highest willingness to pay (see [personas.md §2a](./personas.md)). A **30-day post-diagnosis program** in Spanish, anchored in the WHO Caregivers Skills Training evidence base (already validated for delivery by non-specialists in low-resource settings — [Frontiers 2022](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.914750/full)) is a defensible wellness/education product. Not a treatment claim. A "what to do today" program.

---

# 5. School-home discontinuity: kid lives in two worlds with no shared vocabulary, no shared schedule, no shared regulation strategy

- **Who:** Kid 1b (school-age verbal), Parent 2b, Professional 3d (special-ed/inclusion teacher), Professional 3a (school SLP).
- **Severity:** Medium-high. Causes regression on weekends/holidays, undoes school-side gains, makes parents feel shut out of progress. Inclusion teachers feel unprepared for autism-specific support ([PMC 9443958](https://pmc.ncbi.nlm.nih.gov/articles/PMC9443958/)).
- **Frequency:** Universal for school-age autistic kids in inclusion or CEBE settings. PE specifically: SAANEE provides itinerant support to inclusion teachers but operates remotely and is understaffed ([MINEDU VRM 139-2020](https://repositorio.minedu.gob.pe/handle/20.500.12799/9707)).
- **Current workaround:** "Cuaderno viajero" (paper notebook that travels with the kid between school and home), WhatsApp messages between teacher and parent, ad-hoc daily report sheets the teacher fills by hand.
- **Evidence:** Teachers of autistic students experience higher burnout than teachers of students with EBD or ID ([Sciencedirect 2017](https://www.sciencedirect.com/science/article/abs/pii/S1750946717300028); [Brunsting et al. SAGE 2025](https://journals.sagepub.com/doi/abs/10.3102/00346543251332919); [Tandfonline 2024 review](https://www.tandfonline.com/doi/full/10.1080/08856257.2024.2351702)). Visual schedules are evidence-based across both contexts ([ASAT](https://asatonline.org/for-parents/learn-more-about-specific-treatments/activity-schedules/)).
- **wedge_potential: high.** Shared visual schedule + shared symbol set (ARASAAC) + lightweight asynchronous "today's wins / today's hard moments" log between teacher and parent. Wellness/education framing fits naturally. Teacher pays nothing or near-nothing; parent pays. The parent's willingness to pay carries the model.

---

# 6. Sensory regulation crises: 90–95% of autistic kids have sensory processing differences, with daily impact on sleep, eating, dressing, transitions

- **Who:** Kid 1a, 1b, 1d; Parent 2a/2b; Professional 3b (OT).
- **Severity:** High at the moment of crisis (meltdown, refusal to eat, refusal to wear school uniform, sleep failure). Cumulative severity = autistic burnout for the kid + caregiver burnout for the parent ([Raymaker 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7313636/)).
- **Frequency:** Daily for most families. 69–95% of autistic children report sensory processing challenges ([Frontiers 2022 caregiver strategies](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.905154/full)).
- **Current workaround:** OT advice (when accessible), parent-built sensory kits, headphones, weighted blankets. Sensory profiles are tracked on paper in OT clinics; little continuity to home.
- **Evidence:** Sensory modulation difficulties limit ADLs (eating, sleeping, dressing, toileting, hygiene) and leisure participation ([Frontiers 2022](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.905154/full)); sensory over-responsivity narrative review [PMC 9601143](https://pmc.ncbi.nlm.nih.gov/articles/PMC9601143/).
- **wedge_potential: medium.** Sensory regulation is core to OT scope and a clinical claim is risky (sensory integration therapy effectiveness is contested — see [SenITA RCT NBK 581602](https://www.ncbi.nlm.nih.gov/books/NBK581602/)). The wellness wedge is **environmental tracking and prediction** ("which days had meltdowns, what preceded them, what helped") rather than treatment. The same data product helps the OT plan sessions.

---

# 7. Documentation burden on professionals: SLP/OT/teachers spend 30–50% of work time on paperwork that is not clinically additive

- **Who:** Professional 3a (SLP), 3b (OT), 3c (psychologist), 3d (teacher), 3f (clinic owner).
- **Severity:** Medium for the professional individually. High at system level: it is the strongest predictor of burnout and exit ([Pubs ASHA 2023](https://pubs.asha.org/doi/10.1044/2022_LSHSS-22-00047)).
- **Frequency:** Daily.
- **Current workaround:** Word + Google Docs + WhatsApp PDFs to parents. In LATAM private practice almost no clinic uses an integrated EMR for outpatient pediatric therapy.
- **Evidence:** US schools survey 2024 — mean caseload 49 students, ~60% of SLPs at 41–50 caseload perceive it unmanageable ([ASHA Caseload and Workload portal](https://www.asha.org/practice-portal/professional-issues/caseload-and-workload/)); 818-OT survey on confidence with autism [PubMed 24118044](https://pubmed.ncbi.nlm.nih.gov/24118044/); SLP burnout review [PMC 7732050](https://pmc.ncbi.nlm.nih.gov/articles/PMC7732050/).
- **wedge_potential: medium.** Real but the buyer is the clinic, and LATAM clinics are not used to per-seat SaaS. Pricing pressure is heavy. `View:` better as a value-add inside a parent-paid product than as a standalone professional SaaS.

---

# 8. Adolescent autonomy: teens reject parent-installed "autism apps" and lack identity-affirming digital spaces in Spanish

- **Who:** Kid 1c (verbal teen with masking), Parent 2c.
- **Severity:** Medium individually but compounds into autistic burnout, mental health crises, school refusal, and self-harm risk in the worst cases ([Raymaker 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7313636/); masking and burnout [Autism Spectrum News](https://autismspectrumnews.org/preventing-the-hidden-burnout-crisis-in-autistic-women-and-girls/); [Ali, Mandy, Happé SAGE 2026 qualitative on autistic burnout](https://journals.sagepub.com/doi/10.1177/13623613261422117)).
- **Frequency:** Increasing as the late-diagnosed-girls cohort grows; under-quantified in LATAM specifically.
- **Current workaround:** Reddit, Discord, TikTok (English-dominant), occasional Spanish-language autistic creator presence. Almost no Spanish-language identity-affirming structured content.
- **Evidence:** UK James Lind Alliance autism research priorities #1 and #2 are mental health interventions for autistic people ([PMC 4230972](https://pmc.ncbi.nlm.nih.gov/articles/PMC4230972/)); ASAN's position on assent / autonomy / consent ([ASAN](https://autisticadvocacy.org/)); social skills app meta-analysis showing digital interventions can match face-to-face but only 4.9% of "autism apps" have clinical evidence ([PMC 7670840](https://pmc.ncbi.nlm.nih.gov/articles/PMC7670840/); [Springer review of behaviour change procedures](https://link.springer.com/article/10.1007/s40489-021-00271-w)).
- **wedge_potential: high.** Spanish-language, neurodiversity-affirming, **non-surveilling** wellness app for autistic teens (regulation toolkit + identity content + peer matching). Direct buying signal exists in this subtype ([personas.md §1c](./personas.md)). Free + low-cost subscription. Hard product because "by us, for us" requires autistic team involvement (participatory design, [Pellicano / Den Houting 2021 SAGE](https://journals.sagepub.com/doi/abs/10.1177/1362361320951696)).

---

# 9. AAC / education content lacks LATAM dialect awareness and Indigenous-language coverage

- **Who:** Kid 1a, 1b; Parent 2a, 2b; Professional 3a (SLP).
- **Severity:** Medium. Pictograms with mismatched Spanish labels (e.g., "coche" for a Peruvian kid who only knows "carro") cause confusion and undermine AAC adoption.
- **Frequency:** Universal across LATAM Spanish AAC users.
- **Current workaround:** SLP manually edits labels in app or prints custom cards. Most apps use peninsular Spanish defaults.
- **Evidence:** ARASAAC is the dominant Spanish symbol set, license is CC ([ARASAAC](https://old.arasaac.org/aac.php)); SymboTalk/EC+ pilot in Spanish ([ScienceDirect 2025](https://www.sciencedirect.com/science/article/abs/pii/S0214460325000142)); evidence map of Spanish-language tools shows fragmentary validation ([ScienceDirect 2023](https://www.sciencedirect.com/science/article/abs/pii/S175094672300017X)). `Estimate:` <1% of available autism digital content addresses Quechua/Aymara/Guaraní households.
- **wedge_potential: medium.** Strong differentiator vs Proloquo / SymboTalk / LetMeTalk. Lower stand-alone severity, but as part of a broader AAC product it is meaningful LATAM positioning.

---

# 10. Stigma and parental shame in LATAM: family criticism and public judgement reduce help-seeking

- **Who:** Parent 2a, 2b; Kid 1a–1d (downstream).
- **Severity:** High socially, medium operationally.
- **Frequency:** Documented across Latinx samples, both in LATAM and in US-Latinx caregivers ([PMC 8740628 systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8740628/); [PMC 9584143](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/)). Cultural framing of behavior as "mala crianza" delays diagnosis and isolates the family.
- **Current workaround:** WhatsApp groups for emotional support; ASPAU/Brincar/FESPAU community events; some parents hide diagnosis from extended family.
- **Evidence:** [Autism Speaks Spanish-language stigma post (advocacy framing)](https://www.autismspeaks.org/blog/navigating-autism-and-stigma-hispanic-community); [PMC 8740628](https://pmc.ncbi.nlm.nih.gov/articles/PMC8740628/).
- **wedge_potential: low–medium.** Software cannot solve stigma directly. A wellness product can include parent scripting ("how to talk to grandparents about diagnosis"), peer support, and community storytelling. Adjacent to product 4 (post-diagnosis 30-day program).

---

# 11. Adult services cliff: 84–96% of autistic adults in LATAM receive zero hours per week of services

- **Who:** Kid 1c grown up; Parent 2c; the autistic adult themself.
- **Severity:** Catastrophic at the individual level.
- **Frequency:** Near-universal in LATAM.
- **Current workaround:** Family carries everything. Some employment/transition programs in AR ([Brincar AR](https://www.brincar.org.ar/)), MX, BR. PE: essentially none in the public system.
- **Evidence:** [Use of allied-health services and medication among adults with ASD in Latin America (PubMed 34338424)](https://pubmed.ncbi.nlm.nih.gov/34338424/) — 84.4–95.9% of LATAM autistic adults receive zero hours/week of services.
- **wedge_potential: low.** Adult services require workforce expansion + insurance reform + employment programs. Software can support transition curricula and adult independent-living tooling, but the gap is structural.

---

# 12. Inclusion-classroom teacher unprepared, no training pipeline in Spanish

- **Who:** Professional 3d (inclusion teacher), Kid 1b, Parent 2b.
- **Severity:** Medium individually, high at population scale (most LATAM autistic kids in inclusion school have a teacher who has had 0–8 hours of autism-specific training, `Estimate:`).
- **Frequency:** Universal in inclusion classrooms.
- **Current workaround:** SAANEE in PE; teacher self-directs Google + YouTube; Brincar AR free training campus (>20 free courses); FESPAU ES materials.
- **Evidence:** [PMC 9443958 barriers to inclusion](https://pmc.ncbi.nlm.nih.gov/articles/PMC9443958/); [Frontiers 2025 teacher knowledge / attitudes](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1630710/full); LMIC non-specialist delivery scoping reviews [PMC 9277121](https://pmc.ncbi.nlm.nih.gov/articles/PMC9277121/), [PMC 10440606](https://pmc.ncbi.nlm.nih.gov/articles/PMC10440606/).
- **wedge_potential: medium.** Free/low-cost teacher training in Spanish, anchored in evidence-based practices (NCAEP 28 EBPs), with WhatsApp-friendly delivery. Hard to monetize directly; could be loss-leader to school-home product (#5).

---

# 13. Out-of-pocket therapy spend pushes LATAM families into precarity

- **Who:** Parent 2a, 2b.
- **Severity:** High economically. Implications for parental employment (mothers leave the workforce, [PMC 3356150](https://pmc.ncbi.nlm.nih.gov/articles/PMC3356150/)).
- **Frequency:** Most middle-class LATAM families using private therapy.
- **Current workaround:** Pay until they cannot, then drop to public waitlist. AR uses judicial amparo to force obras sociales coverage ([Amparando Salud](https://amparandosalud.com.ar/amparo-por-autismo/)).
- **Evidence:** Family economic costs 5–12% of income in US/EU samples ([PMC 7034397](https://pmc.ncbi.nlm.nih.gov/articles/PMC7034397/)); time-to-treatment predicts higher burden [PMC 8662780](https://pmc.ncbi.nlm.nih.gov/articles/PMC8662780/); LATAM out-of-pocket gap not separately quantified — `Estimate:` higher than US share given thinner public coverage.
- **wedge_potential: low.** Software cannot reduce therapy prices. Can substitute *some* hours via parent-mediated intervention, which is a real wedge but folds into problems #2 and #4.

---

# 14. Clinical evidence base for "autism apps" is thin: only ~5% have any actual evidence

- **Who:** Parent 2a (deciding what to install), Professional 3a–3f (recommending), every player in the market.
- **Severity:** Indirect. Drives churn, distrust, and wasted parent spend.
- **Frequency:** Pervasive — only **4.9% of 700 apps labelled "Autism Apps" had any clinical evidence** ([Springer review](https://link.springer.com/article/10.1007/s40489-021-00271-w)).
- **Current workaround:** Therapist recommendations, peer recommendations.
- **Evidence:** As above; also general systematic literature reviews of mobile apps for autism [JMIR Mental Health 2021](https://mental.jmir.org/2021/9/e20892); [MDPI Sensors 2023 review of usability and software design](https://www.mdpi.com/1424-8220/23/14/6260).
- **wedge_potential: medium.** Not a product per se, but a **defensible positioning** — "we can show you the evidence behind every screen". Pairs with [clinical/](../../clinical/) discipline as evidence layer. Differentiator vs the noise.

---

# Cross-cutting observations

- The **highest-leverage wedges** all sit at the intersection of **parent + kid + professional** (problems #2, #4, #5). Single-actor products lose because LATAM autism care is held together by the family doing translation work between actors.
- **Wellness/education framing is sufficient** for all top-ranked wedges. Nothing in the top 5 requires a SaMD pathway.
- LATAM-specific data is sparse. Most numbers cited are US/EU anchors. Primary research with LATAM parents and professionals is the next step (interviews + structured WhatsApp-group analysis with permission). Flagged in [personas.md § Open questions](./personas.md#open-questions).

# Open questions

- True LATAM out-of-pocket therapy spend per family per month, by country.
- True LATAM AAC adoption and abandonment rates (no published data found).
- Quantified Spanish-language autism app market size and CAC/LTV benchmarks.
- Whether SAANEE (PE) or equivalents in MX/CO/AR/CL would partner on a school-home product.
- Whether Argentine obras sociales coverage of digital wellness products under Ley 27.043 is enforceable today (legal research needed).
