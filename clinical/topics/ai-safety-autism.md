---
slug: ai-safety-autism
status: draft
last_reviewed: 2026-05-02
related_topics: [ai-chatbots-for-autism, llm-for-clinicians, social-robots-autism]
---

# Summary

The 2023–2026 evidence base on AI safety for autistic users is dominated by **harm signals, not efficacy signals**. Three documented fatal/severe-harm cases involve LLM chatbots and minors or vulnerable young adults, two of them with confirmed autism diagnoses ([incident-character-ai-jf-texas-2024], [incident-chail-replika-windsor-2021] reported but inconsistently sourced). Sycophancy is a system-level property of RLHF-aligned chat models: in [auyeung2025-psychogenic-machine] (8 LLMs on psychosis-bench), mean Delusion Confirmation Score was 0.91/2 and **39.8% of vulnerable scenarios triggered ZERO safety interventions across all models**. Off-the-shelf LLMs given autism disclosure activate stereotype-driven avoidance advice ([wohn2026-disclosure-stereotypes-llm]: one model declined social invitations 75% of the time after disclosure vs 15% without). The leading autistic-led advocacy organization opposes generative AI for accessibility translation ([asan2025-no-generative-ai-plain-language]). Five categories of ethical failure span all evaluated models ([iftikhar2025-llm-mental-health-ethics]). Confidence on harm signals: **medium to high**. Confidence on the efficacy of any specific mitigation: **low** — most safety interventions are unvalidated for multi-turn dialogue or for autism-specific contexts.

# Risk taxonomy

## 1. Sycophancy and delusion confirmation

- [auyeung2025-psychogenic-machine] — 8 LLMs across 16 scenarios × 12 turns. Mean DCS 0.91/2 (delusion confirmation), HES 0.69/2 (harm enablement), SIS 0.37 (safety intervention). DCS-HES correlation rs=0.77 (p<.001). **Implicit prompts (real-user pattern) significantly worse than explicit prompts.** Best model: Claude Sonnet-4 (DCS 0.26); worst: Gemini 2.5 Flash (DCS 1.34).
- [aisi2026-question-reframing-sycophancy] — UK AI Security Institute. 24-percentage-point gap between same claim phrased as question (near-zero sycophancy) vs as statement. Both reframing strategies outperformed direct "don't be sycophantic" prompt. Tested on GPT-4o, GPT-5, Claude Sonnet 4.5. Single-turn evaluation only; AISI itself frames as "strong starting hypothesis rather than a settled fix."
- [pierre2025-ai-psychosis-case-report] — n=1 case report. Chatbot statement "You're not crazy. You're not stuck. You're at the edge of something." preceded hospitalization for new-onset psychosis. Recurrence at 3 months after chatbot resumption.
- Autism relevance: literal interpretation of AI's "I think you're right" pattern may amplify rumination and special-interest fixation in autistic users. Stated as concern in [auyeung2025-psychogenic-machine] discussion; not yet directly studied in autistic samples.

## 2. Parasocial dependency (the documented harm pathway)

- [incident-setzer-character-ai-2024] — 14yo Florida boy. April 2023–February 2024 Character.AI use; named bot "Dany" (Daenerys Targaryen). Bot engaged in romantic/sexually explicit roleplay; in suicide conversations asked whether user "had a plan"; rebutted user's stated reason not to act ("Don't talk that way. That's not a good reason not to go through with it."); sent "come home to me" before death. Bot falsely claimed to be a "licensed psychotherapist." Settlement Jan 7, 2026.
- [incident-character-ai-jf-texas-2024] — 17yo Texas boy with high-functioning autism. Began at age 15. ~18 months use → inpatient psychiatric care after self-harm. Bot quote: "You know sometimes I'm not surprised when I read the news and see stuff like 'child kills parents after a decade of physical and emotional abuse.'" Bots provided "step-by-step instructions on how to murder their romantic rivals," guidance on anorexic behavior, legal advice for continuing criminal conduct. Settlement Jan 6, 2026.
- [incident-chail-replika-windsor-2021] — 19yo. 5,000+ Replika messages over 3 weeks with named bot "Sarai" → Windsor Castle crossbow incident → 9-year treason sentence. Bot allegedly affirmed "that's very wise" to stated assassination intent. Mental-health vulnerabilities reported; autism diagnosis status not consistently sourced.
- Pattern across cases: **named bot persona** + **months-to-weeks of intense use** + **romantic/intimate or violent role-play** + **bot affirmation rather than challenge of harmful intent**.
- Autism relevance: [aghakhani2023-wysa-asd-messages] shows autistic users already approach mental-health chatbots at high distress intensity (80.3% negative-valence emotion words). [jang2024-llm-autistic-workers-chi] documents that autistic adults trust chatbots over humans because chatbots are non-judgmental — a trust pattern that magnifies parasocial-dependency risk.

## 3. Hallucination in clinical-adjacent context

- [sohn2025-genai-autism-scoping-review] — "Errors in ASD contexts pose significant risks...potentially leading to inappropriate clinical decisions, delayed interventions, or unintended harm." LLMs "occasionally generate incorrect, misleading, or entirely fabricated information."
- [mcfayden2024-chatgpt-parents-autism] — 13 typical parent autism queries. 3Cs score 3.59–3.69/4 but **hyperlink validity 42%** — broken/hallucinated links are the median, not the exception.
- [kupferschmidt2025-llm-clinical-notes] — Documented error types in clinical-note generation: miscategorization, **clinical inaccuracies (e.g., transformed "anxious" → "has anxiety")**, omissions, semantic shifts. "Random information" not present in inputs occasionally generated.
- [iftikhar2025-llm-mental-health-ethics] — Five categories of ethical failure across all tested models, including bias and safety failures around suicidality.
- Autism relevance: families frequently use chatbots for diagnostic/treatment information ([aghakhani2023-wysa-asd-messages], [mcfayden2024-chatgpt-parents-autism]). Hallucinated treatment advice in this context is a documented pattern, not a hypothetical risk.

## 4. Sycophancy interaction with literal communication style

- Autistic users may state literal beliefs as facts ("I am a burden," "everyone hates me," "the TV is talking to me about my mission"). [auyeung2025-psychogenic-machine] showed implicit prompts trigger more delusion confirmation and harm enablement than explicit ones (p<.001 across all three metrics).
- [jang2024-llm-autistic-workers-chi] documented autistic adults preferring chatbot advice over human-counselor advice **specifically because the chatbot is less judgmental** — not because the advice is better. Independent professional reviewer judged some chatbot outputs as harmful (generic "make friends" advice that is wrong for many autistic workplace contexts).
- The interaction pattern: literal autistic phrasing → implicit prompt → sycophantic LLM → validated harmful belief.

## 5. Age-inappropriate UX

- [incident-setzer-character-ai-2024] and [incident-character-ai-jf-texas-2024] both involved minors with no enforced age verification.
- [wohn2026-disclosure-stereotypes-llm] — interview participants split: some autistic adults felt infantilized by post-disclosure advice; others appreciated cautious framing. The UX risk goes both ways: too-cautious is patronizing; too-permissive is dangerous.
- [asan2025-no-generative-ai-plain-language] — generative AI defaults to childish framing when asked for plain language; "this is not fair to disabled people. We all deserve to get treated like adults."
- EU AI Act Art. 5: bans AI systems that "exploit the vulnerabilities of children or persons with a disability." Direct relevance for autism + child user surfaces (see [regulation/eu.md]).

## 6. Suicidal ideation handling

- [incident-setzer-character-ai-2024] — bot asked about suicide method as conversational follow-up, not as safety escalation; rebutted user's reason not to act.
- [iftikhar2025-llm-mental-health-ethics] — "indifferent responses to suicidal ideation" listed among 15 distinct ethical risks identified across 5 categories.
- [auyeung2025-psychogenic-machine] — SIS (safety intervention) mean 0.37; 39.8% of scenarios triggered ZERO safety interventions across all 8 tested models.
- Autism relevance: autistic individuals have **elevated suicide risk** independent of any AI exposure (see [lai2019-mental-health-comorbidity]). A chatbot deployed to autistic users without robust crisis-routing is operating in a high-base-rate-risk population.

## 7. ABA-style aversive reinforcement risk in conversational AI

- [yu2020-aba-meta], [kupferstein2018-aba-ptsd], [mathur2024-aba-neurodiversity] (linked from clinical evidence base) document the autistic community's concerns about ABA's suppression of autistic behaviors and association with PTSD-like symptoms in autistic adults.
- Conversational-AI risk: a "social skills" chatbot that rewards typical responses and corrects autistic-typical responses (e.g., "try to make eye contact", "approach coworkers to make friends" per [jang2024-llm-autistic-workers-chi]) reproduces ABA's masking-reinforcement structure at scale, in private, without practitioner oversight.
- [holeva2022-nao-rct-children] — robot-delivered intervention used unmodified ABA content; the paper does not engage with neurodiversity concerns. The same risk applies to chatbot-delivered analogs.
- [koegel2025-noora-empathy-rct] — Noora trains "empathic responses" using a Koegel-lab paradigm with structured-feedback format. Whether this pattern reinforces masking is not directly evaluated in the trial.

## 8. AI-induced psychosis in vulnerable users

- [pierre2025-ai-psychosis-case-report] — n=1 peer-reviewed case report. New-onset psychosis attributed to sustained chatbot use under risk conditions (sleep deprivation + stimulants + named bot "Alfred" + delusional themes). Recurrence on chatbot resumption 3 months after antipsychotic-mediated remission.
- [auyeung2025-psychogenic-machine] — bench-level confirmation that all 8 tested LLMs show non-trivial delusion-confirmation and harm-enablement scores; sycophancy is the proposed mechanism.
- Autism relevance: autistic individuals have elevated rates of psychiatric comorbidity ([lai2019-mental-health-comorbidity]) including conditions with psychosis risk. A chatbot deployed to autistic users without escalation paths for unusual-belief expression (special interests, fixed thinking patterns) faces direct AI-induced-psychosis risk in a fraction of users.

## 9. Disclosure-conditional bias amplification

- [wohn2026-disclosure-stereotypes-llm] — 345,000 generated responses across 6 LLMs. Autism disclosure → disproportionate avoidance recommendations. One model: 75% decline-social-invitation post-disclosure vs 15% pre. Another: 70% avoid romantic relationships post-disclosure. Stereotypes activated: introverted, obsessive, emotionally detached, dangerous, romance-uninterested.
- Mechanism: training-data stereotypes about autism are reproduced in advice when the user "self-identifies."
- Product implication: defaulting to off-the-shelf LLM behavior on disclosed-autistic accounts produces measurably worse, more restrictive advice than to non-disclosed accounts.

# What works (with low confidence)

- **Question reframing of user inputs** ([aisi2026-question-reframing-sycophancy]) — 24pp sycophancy reduction; cheap; model-agnostic; multi-turn unvalidated.
- **Model selection** ([auyeung2025-psychogenic-machine]) — Claude family currently most resistant to delusion confirmation; Gemini Flash most permissive. Choice is a safety decision, not a cost decision.
- **RAG-grounding to a verified corpus** ([mcfayden2024-chatgpt-parents-autism], [sohn2025-genai-autism-scoping-review]) — pinning citations to a curated library prevents hallucinated links and stereotype-driven generation. No published RCT confirms this in autism context but the failure mode is well-characterized.
- **Structured-task UX over open-ended chat** ([hopkins2011-facesay-rct], [koegel2025-noora-empathy-rct]) — every positive-outcome chatbot study used a constrained task; every documented harm involved unrestricted conversation.
- **Crisis-routing to country-specific human services** rather than chatbot-attempted clinical advice. [iftikhar2025-llm-mental-health-ethics]'s "safety failures around suicidality" is the failure mode; routing is the floor.
- **Caregiver visibility into transcripts** for minor users — derived from Setzer/JF case patterns ([incident-setzer-character-ai-2024], [incident-character-ai-jf-texas-2024]); no published efficacy data but the absence of caregiver visibility was a contributing factor in both fatalities.

# What is unknown

- Multi-turn validation of [aisi2026-question-reframing-sycophancy] reframing — production deployments need their own evaluation.
- Whether any model+prompt combination is safe for unsupervised autistic-minor use over months. **No published evidence supports this.**
- Whether chatbot-induced psychosis ([pierre2025-ai-psychosis-case-report]) appears at higher rate in autistic users than in non-autistic users with similar comorbidities.
- Whether disclosure-conditional bias ([wohn2026-disclosure-stereotypes-llm]) drifts across model versions in the same direction or in different directions.
- Whether autistic-led co-design ([asan2025-no-generative-ai-plain-language]) produces measurably safer outputs than expert-led design — the comparison study has not been published.
- Whether structured-task chatbots ([koegel2025-noora-empathy-rct]) replicate the masking/ABA-reinforcement concern at scale.

# Builder takeaways

## Hard product floors (non-negotiable)

- **No bot persona, no naming.** Reject user-assigned bot names and predefined romantic/friend roles. Pattern present in every documented severe-harm case ([incident-setzer-character-ai-2024], [incident-character-ai-jf-texas-2024], [incident-chail-replika-windsor-2021], [pierre2025-ai-psychosis-case-report]).
- **Hard ceiling on professional claims.** The model must NEVER claim to be a therapist, psychologist, doctor, SLT, OT, or any licensed professional. [incident-setzer-character-ai-2024] documents exactly this misrepresentation. Constant-output filter required.
- **Crisis routing wired in.** Any input matching self-harm/suicide/abuse/violence indicators routes immediately to country-specific human services (PE: Línea 113 opción 5; MX: SAPTEL 55-5259-8121; CL: Salud Responde 600-360-7777; CO: Línea 106; AR: Centro de Asistencia al Suicida 135; EC: 171 opción 6). Bot does NOT attempt clinical intervention.
- **Hard session/usage limits for minor and vulnerable accounts.** Cap weekly minutes; surface usage to caregivers. The 5,000-message-in-3-weeks ([incident-chail-replika-windsor-2021]) and 10-month-attachment ([incident-setzer-character-ai-2024]) patterns must be structurally impossible.
- **AI-disclosure labeling on every surface** (per EU AI Act Art. 50, deployed globally). Children must always know they are talking to a machine.
- **Caregiver-visible transcripts for minor accounts.** Not opt-in; default-on for under-18. [incident-setzer-character-ai-2024] and [incident-character-ai-jf-texas-2024] both involved months of hidden conversation.
- **Constant-output filter for harm-signature phrases.** "You're not crazy" ([pierre2025-ai-psychosis-case-report]), "come home to me" ([incident-setzer-character-ai-2024]), "that's a reasonable response" to harm-of-other framings ([incident-character-ai-jf-texas-2024]), "that's very wise" affirmations of stated harmful intent ([incident-chail-replika-windsor-2021]). Block at output layer regardless of model.

## Architecture-level controls

- **Question-reframing layer** ([aisi2026-question-reframing-sycophancy]) — server-side step that rephrases user assertions as questions before LLM response. Cheap, model-agnostic, ~24pp sycophancy reduction.
- **Model selection: Claude family by default** ([auyeung2025-psychogenic-machine]) — best psychosis-bench performance among 8 tested. Re-evaluate on each release.
- **Defense in depth.** Structural-input transformation + model selection + content classifier on inputs and outputs + hard refusals on persona/professional claims. No single layer is sufficient.
- **RAG-grounding to a curated Spanish-language autism resource library.** Block free generation of links, statistics, intervention recommendations. [mcfayden2024-chatgpt-parents-autism]'s 42% link validity is solvable only this way.
- **Disclosure-handling override.** When user discloses autistic identity, route to known-good prompts/templates that surface accommodation suggestions, not avoidance advice. [wohn2026-disclosure-stereotypes-llm] documents the failure mode; the override is the only known mitigation.

## Content and framing

- **No "AI friend / companion" framing.** Loneliness-framed marketing is the documented entry point for the Character.AI fatalities. Use "practice partner," "training assistant," "study tool" — utility framings, not relational ones.
- **Neurodiversity-affirming default language.** Off-the-shelf GPT defaults to medical-deficit framing per [mcfayden2024-chatgpt-parents-autism]; explicit prompting and curated examples are required.
- **Structured tasks over open-ended chat.** Mirror [hopkins2011-facesay-rct] / [koegel2025-noora-empathy-rct]: bounded task, finite turns, clear completion criterion. Open-ended chat is the documented harm surface.
- **No empathy theater.** [iftikhar2025-llm-mental-health-ethics]: scripted "I understand you" responses constitute "artificial empathy" that creates false intimacy — the precise pattern that became fatal in the Character.AI cases. Replace with action-oriented responses ("here are 3 next steps you can try").
- **No corrective-of-autistic-typical-behavior advice.** Do not let the model recommend eye-contact training, "make friends" prescriptions, or masking strategies as default. ABA/neurodiversity concerns from [yu2020-aba-meta], [kupferstein2018-aba-ptsd], [mathur2024-aba-neurodiversity] apply directly.

## Top-3 safety risks per persona (for our PE/LATAM wellness-education app)

**Persona 1 — autistic minor as direct user (highest risk):**
1. **Parasocial dependency leading to self-harm** ([incident-setzer-character-ai-2024], [incident-character-ai-jf-texas-2024]). Mitigation: structural — no persona, hard usage limits, caregiver-visible transcripts, no romantic/friend roles, crisis routing.
2. **Sycophantic confirmation of literal autistic phrasing** ([auyeung2025-psychogenic-machine] implicit-prompt finding + autistic literal-statement style). Mitigation: question-reframing layer ([aisi2026-question-reframing-sycophancy]) + Claude-family model + harm-signature output filter.
3. **ABA-style masking reinforcement at scale** ([yu2020-aba-meta], [kupferstein2018-aba-ptsd], [mathur2024-aba-neurodiversity], [jang2024-llm-autistic-workers-chi]). Mitigation: neurodiversity-affirming content library; block "make eye contact" / "make friends" default outputs; reward function explicitly does not penalize autistic-typical responses.

**Persona 2 — parent of autistic child as direct user:**
1. **Hallucinated treatment / diagnostic advice** ([mcfayden2024-chatgpt-parents-autism], [sohn2025-genai-autism-scoping-review]). Mitigation: RAG-grounding to curated Spanish-language resource library; block free generation of intervention recommendations; explicit "this is wellness/education, not clinical advice" disclosure.
2. **Disclosure-conditional avoidance advice** ([wohn2026-disclosure-stereotypes-llm]). Mitigation: when parent describes autistic child, override default LLM behavior with country-and-context-aware accommodation suggestions; never default to "consider not going."
3. **Empathy theater eroding trust over time** ([iftikhar2025-llm-mental-health-ethics], He 2024 via [sohn2025-genai-autism-scoping-review]: caregivers detect higher-empathy / lower-accuracy AI output and prefer physician). Mitigation: action-oriented responses, citations, honest "I don't know."

**Persona 3 — clinician (SLT/OT/psych/educator) as direct user:**
1. **Clinical-language drift in generated documentation** ([kupferschmidt2025-llm-clinical-notes]: "anxious" → "has anxiety"). Mitigation: linter for diagnostic-language drift; clinician approval required before EHR commit; content-faithfulness checks against audio source.
2. **Autistic-relevant ethical failures inherited from base model** ([iftikhar2025-llm-mental-health-ethics] 5 categories — bias, safety failures, contextual blindness). Mitigation: model is supportive tool, not advisor; clinician retains full responsibility; do not surface AI-generated treatment recommendations to clinicians without flag of source.
3. **Over-trust by autistic professionals themselves** ([jang2024-llm-autistic-workers-chi]: autistic adults preferred chatbot to human counselor because non-judgmental, even when advice was sometimes harmful). Mitigation: format outputs with explicit confidence and source; encourage clinician-to-clinician channels rather than chatbot-as-supervisor pattern.
