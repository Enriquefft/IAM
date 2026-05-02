---
slug: llm-for-clinicians
status: draft
last_reviewed: 2026-05-02
related_topics: [ai-chatbots-for-autism, ai-safety-autism]
---

# Summary

The strongest LLM-for-clinician evidence sits in **ambient AI scribes** for adult ambulatory and pediatric medical visits: [olson2025-ambient-ai-scribe-burnout] (n=263, OR 0.26 for burnout, p<.001) and [pelletier2025-pediatric-ai-scribe] (n=84, -2.8 min/appt, -1.5 hrs/week, burnout 54.9% → 33.3%). Both used Abridge; both are pre/post designs without control arms; both exclude SLT/OT/psych pediatric autism workflows. Qualitative evidence ([kupferschmidt2025-llm-clinical-notes]) reveals that **note-writing is not the bottleneck** in pediatric rehab — orchestration around the note (workflow heterogeneity, EHR design, organizational policy) is. LLM error patterns are concrete and predictable: miscategorization, **diagnostic-language drift ("anxious" → "has anxiety")**, omissions, semantic shifts, and occasional fabrication. For autism-specific clinician use (IEP drafting, parent translation aids, session note generation, multilingual reports), **no published efficacy evidence exists**. Confidence: **medium** for general-medicine ambient scribes; **low** for pediatric SLT/OT/psych applications; **none** for autism-specific use.

# Evidence by use case

## Ambient AI scribes for documentation

- [olson2025-ambient-ai-scribe-burnout] — Cohort n=263 ambulatory clinicians at 6 US health systems, Feb–Oct 2024. Abridge ambient scribe.
  - Burnout: 51.9% → 38.8% (OR 0.26; 95% CI 0.13–0.54; p<.001). 74% reduction in burnout odds.
  - Cognitive task load: -2.64 (10pt scale, p<.001).
  - After-hours documentation: -0.90 hrs/week (p<.001).
  - Patient attention focus: +2.05 (p<.001).
  - **No control arm**; convenience sample with self-selection toward technology adopters.
- [pelletier2025-pediatric-ai-scribe] — Cohort n=84 pediatric providers (medical specialties: cardiology, endo, GI, allergy, derm, ortho, neph, neuro, psychiatry, sports). 6-month pretest-posttest with ITSA.
  - Documentation time: -2.8 min/appt (95% CI 2.1–3.5).
  - ITSA: 20.9% time savings post-adoption (95% CI 17.2–24.6).
  - Weekly savings: 1.5 hrs/provider.
  - NASA-TLX: mental demand -6.9, temporal demand -8.0, effort -7.0 (all p<.001).
  - Mini-Z burnout: 54.9% → 33.3% (p=.01).
  - Caregiver likelihood-to-recommend: 92.3% → 94.3% (p=.01).
  - **No control arm**; one health system; medical specialties not therapeutic disciplines.

## Why scribes don't always work in pediatric rehab

- [kupferschmidt2025-llm-clinical-notes] — Qualitative study, 20 OTs at KidsAbility (Ontario, Canada), 30 interviews; 10 piloted Microsoft CoPilot + custom Llama 3 8B fine-tuned on historical SOAP notes.
  - **Workflow heterogeneity** — documentation practices vary by clinician experience, program, setting; school-based therapists rarely write structured scratch notes.
  - **SOAP notes are not the bottleneck** — burden is systemic (org policy, EHR design), not authoring time.
  - **Clinician autonomy** — practitioners value control over documentation reflecting professional identity; AI-imposed format is rejected.
  - **Mutual learning required** — clinicians produced over-formatted inputs to compensate, increasing workload.
  - **Error types** documented: miscategorization (content in wrong SOAP section), clinical inaccuracies ("anxious" → "has anxiety"), omissions, semantic shifts, occasional fabrication.

## IEP drafting, parent translation, multilingual reports

- **No published RCT or cohort** evaluating LLM-assisted IEP drafting, parent translation aids, or multilingual report generation for autism contexts as of 2026-05-02.
- [mcfayden2024-chatgpt-parents-autism] — Tangentially relevant: GPT-4 responses to typical parent autism queries were correct (3Cs 3.59–3.69/4) but with **42% link validity, 0% actionability on basic info**, defaulted to medical-deficit framing. Implies that off-the-shelf LLM-generated parent-facing content needs RAG-grounding and curation.
- [asan2025-no-generative-ai-plain-language] — ASAN documented generative AI's failure mode in plain-language translation: invented value-laden claims (e.g., autistic people have "rare and amazing talents"), changed source meaning, defaulted to childish framing. Recommended posture: AI as flagger/linter, not rewriter. **The leading autistic-led advocacy organization opposes generative-AI use for accessibility translation.** This is the canonical reference for parent-facing plain-language tools.
- [koegel2025-noora-empathy-rct] — While targeted at autistic users, the system was built and deployed by Stanford clinicians (Koegel lab) — demonstrates that an LLM as a structured-trial tool delivered by clinicians is a viable use case. n=30, +13.2pp empathic response gain, generalized to natural conversation. Author conflict of interest.

## Direct chatbot consultation for clinicians

- [iftikhar2025-llm-mental-health-ethics] — CBT-prompted GPT/Claude/Llama reviewed by licensed clinical psychologists. **15 distinct ethical risks across 5 categories** (contextual blindness, poor collaboration, artificial empathy, bias, safety failures). Across all tested models. "Human therapists face governing boards and mechanisms for providers to be held professionally liable for mistreatment." AI counselors lack equivalent accountability.
- [jang2024-llm-autistic-workers-chi] — n=11 autistic adults (workplace use case, not clinical, but informative): preferred GPT-4 to disguised human counselor for **format and non-judgmental tone**, not advice quality. Independent professional judged some chatbot outputs harmful (generic "make friends" advice). Has direct implications for autistic clinicians using LLMs as advisors.

# Effect-size summary

| Use case | Source | Effect | Confidence |
| --- | --- | --- | --- |
| Burnout (ambulatory) | [olson2025-ambient-ai-scribe-burnout] | 51.9% → 38.8% (OR 0.26) | Medium |
| Documentation time (pediatric medical) | [pelletier2025-pediatric-ai-scribe] | -2.8 min/appt; -1.5 hrs/week | Medium |
| Burnout (pediatric medical) | [pelletier2025-pediatric-ai-scribe] | 54.9% → 33.3% | Medium |
| Cognitive load (pediatric medical) | [pelletier2025-pediatric-ai-scribe] | NASA-TLX -6.9 to -8.0 | Medium |
| Documentation in pediatric rehab (SLT/OT) | [kupferschmidt2025-llm-clinical-notes] | Qualitative themes, not quantified | Low |
| IEP drafting / parent translation / autism reports | None | None | None |
| Direct LLM clinical consultation (CBT) | [iftikhar2025-llm-mental-health-ethics] | 15 ethical risks across 5 categories | Medium (negative) |

# Open questions

- **Does ambient-scribe time savings transfer to pediatric SLT/OT/psych autism workflows?** No published study. Pediatric medical (Pelletier) is not pediatric therapeutic.
- Is there ANY published evaluation of LLM-assisted IEP drafting? Not as of 2026-05-02.
- Does Spanish-language ambient scribe performance match English-language? No published comparison; Spanish-language clinical-note generation is largely unevaluated.
- Does LLM-assisted parent translation (clinician-facing summary → parent-facing Spanish/Quechua plain language) improve comprehension? Untested. ASAN's position implies the answer is "not without strong human-in-loop."
- What is the long-term effect of LLM scribes on clinician documentation quality? [kupferschmidt2025-llm-clinical-notes] notes clinicians produced over-formatted inputs to compensate — suggests degradation of clinician's own writing skill possible; not yet measured.
- Does the [kupferschmidt2025-llm-clinical-notes] failure pattern (workflow heterogeneity, autonomy concerns) generalize to PE/MX/CO/AR/EC/CL clinical contexts? Almost certainly yes — local workflow heterogeneity is greater, not less, than Canadian pediatric rehab.
- Liability framework: in PE/LATAM, who is liable when an AI-generated note contains a clinical error that affects care? No regulatory guidance specific to AI clinical documentation in any LATAM jurisdiction as of 2026-05-02 (see [regulation/pe.md], [regulation/mx.md], [regulation/cross-cutting.md]).
- For autism-specific clinical use: does fine-tuning on autism-relevant note corpora (vs general medical) reduce diagnostic-language drift? Untested.

# Builder takeaways

## What a wellness-education app can offer clinicians

- **Ambient scribe is the highest-evidence, highest-value use case.** ~1.5 hrs/week reclaimed ([pelletier2025-pediatric-ai-scribe]) is concrete and marketable. But: no autism-specific or SLT/OT/psych-specific evidence; do not extrapolate effect sizes blindly.
- **The product's value is orchestration, not the note itself** ([kupferschmidt2025-llm-clinical-notes]). Build the surface around the note: scheduling, billing prep, parent-facing summaries, IEP scaffolding, session-plan templates, multilingual handouts. The note generator alone solves the wrong problem.
- **Workflow heterogeneity means no single template wins.** Let clinicians define their own format; AI populates within their structure, not its preferred shape. Imposing AI's note layout was a documented failure mode in [kupferschmidt2025-llm-clinical-notes].
- **Diagnostic-language drift is the load-bearing safety failure** in clinical documentation. Build a linter for "anxious → has anxiety", "low energy → depression", "stim → SIB", "echolalia → speech delay" — concrete drift patterns that turn wellness-education language into accidentally-diagnostic claims that exceed our scope and create liability exposure.
- **Citations and source attribution per claim.** [mcfayden2024-chatgpt-parents-autism]'s 42% link validity is the failure mode; pin all clinical claims to a curated corpus (peer-reviewed papers, professional society guidelines, our own clinical/ topic files).

## What a wellness-education app should NOT offer clinicians

- **Direct clinical consultation** — [iftikhar2025-llm-mental-health-ethics] documented 15 distinct ethical risks across 5 categories on CBT-prompted models. The clinician is the accountability layer; the AI must not replace clinical judgment.
- **Autism diagnosis assistance** — [sohn2025-genai-autism-scoping-review] notes that hallucination errors "in ASD contexts pose significant risks...potentially leading to inappropriate clinical decisions, delayed interventions, or unintended harm." This is out of scope for a wellness-education app under PE/MX/EU/US regulation.
- **Treatment recommendation generation** — same scope concern; same hallucination risk.
- **Plain-language translation without human-in-loop.** [asan2025-no-generative-ai-plain-language] is on record opposing this exact use case. Position as flagger/linter, not rewriter.

## PE/LATAM-specific implications

- **Spanish-language ambient scribe is the unfilled gap.** Pelletier and Olson tested English-language Abridge in US health systems. No published evaluation of equivalent performance in Spanish-language clinical workflows. Building this for PE/MX/CO/AR/EC/CL clinicians is a defensible product wedge with documented user demand (clinician burnout is universal; documentation burden in Spanish is heavier given less mature templating).
- **Multilingual parent-facing summaries** (Spanish ↔ Quechua, Spanish ↔ K'iche', etc.) are an underserved use case. ASAN-aware positioning: AI assists clinician-authored summaries, never generates from scratch without clinician approval.
- **IEP / PEI (Programa Educativo Individualizado) / PIE (Programa de Integración Escolar) drafting** is a real workflow burden in PE/MX/CL. No published evidence; this is a research-and-build territory, not a transfer-from-US territory.
- **Liability framework absent.** No PE/MX regulator has yet published guidance on AI clinical documentation. The product must hold clinician approval as a hard gate before any document leaves the platform — both as safety floor and as defensive posture against future regulation.
- **Pricing pressure is real.** PE/MX clinicians cannot pay USD $200–$500/month for an AI scribe at US/EU pricing. Reaching effective price points requires either lower-cost LLM infrastructure (open-source models with our own fine-tuning, per [kupferschmidt2025-llm-clinical-notes]'s Llama 3 8B example) or productized B2B-via-clinic-network distribution.

## Honest framing for clinician-facing marketing

- "Time savings on documentation are real and measurable in adult and pediatric medical contexts (Olson 2025, Pelletier 2025). We do not yet have published evidence for SLT/OT/psych pediatric autism workflows specifically — including ours. Our product is built to assist clinician judgment and clerical workflow, not to replace either. The clinician retains full clinical authority and accountability. We do not generate diagnostic claims, treatment recommendations, or autonomous parent-facing communications."
