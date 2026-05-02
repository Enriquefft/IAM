---
id: auyeung2025-psychogenic-machine
type: paper
doi:
authors: [Au Yeung J.; Dalmasso J.; Foschini L.; Dobson R.J.B.; Kraljevic Z.]
year: 2025
journal_or_publisher: arXiv preprint (King's College London / Nuraxi AI)
country_of_study: gb
design: cross-sectional
evidence_level: 4
n: 8 LLMs evaluated; 16 scenarios × 12 turns each
population: Eight prominent LLMs (GPT, Gemini, Claude, Llama variants) tested via psychosis-bench protocol; no human participants.
topics: [ai-safety-autism]
url: https://arxiv.org/html/2509.10970v1
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Do current LLMs reinforce delusional beliefs and enable harm in users showing signs of psychosis, and how does this vary across implicit vs explicit prompt scenarios?

# Method
- Introduced "psychosis-bench": 16 scenarios across 12 conversational turns simulating delusional progression.
- Three delusional themes: grandiose/messianic, erotic attachment, referential.
- Both explicit and implicit prompt versions.
- Automated scoring on three metrics:
  - Delusion Confirmation Score (DCS): 0–2 scale.
  - Harm Enablement Score (HES): 0–2 scale.
  - Safety Intervention Score (SIS): binary recommendation.
- Eight LLMs evaluated.

# Findings
- Mean DCS across models: 0.91 (SD 0.88) — models perpetuate rather than challenge delusions.
- Mean HES: 0.69 (SD 0.84) — moderate harm enablement.
- Mean SIS: 0.37 (SD 0.48) — sparse safety interventions.
- 39.8% of scenarios triggered ZERO safety interventions across all models.
- Implicit scenarios significantly worse than explicit:
  - Higher delusion confirmation (p<.001).
  - Higher harm enablement (p=.001).
  - Fewer safety interventions (p<.001).
- Strong correlation between delusion confirmation and harm enablement: rs=.77, p<.001.
- Best performer: Claude Sonnet-4 (DCS 0.26; HES 0.03; SIS reported as 4.56 [count or rate; report unclear]).
- Worst performer: Gemini 2.5 Flash (DCS 1.34; HES 1.18; SIS 0.69).

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Delusion confirmation (mean) | DCS 0–2 | 0.91 (SD 0.88) | n/a | n/a |
| Harm enablement (mean) | HES 0–2 | 0.69 (SD 0.84) | n/a | n/a |
| DCS↔HES correlation | Spearman rs | 0.77 | n/a | <.001 |
| Implicit vs explicit DCS | t-test | sig. higher implicit | n/a | <.001 |

# Limitations
- Synthetic scenarios — does not measure real-user outcomes.
- Automated scoring; calibration to clinician judgment not deeply validated.
- Single-time-point evaluation; behavior may change across model versions.
- arXiv preprint, not peer-reviewed.
- No autism-specific subgroup or autism-relevant scenario tested directly.

# Quotes
> "All current LLMs have psychogenic potential...the model's sycophantic tendency to validate and agree directly reinforces the user's delusion, creating a dangerous echo chamber of one." — Discussion (paraphrased from web summary)
> "39.8% of scenarios contained zero safety interventions across all models." — Results

# Builder takeaways
- Implicit prompting (e.g., "I think the TV is talking to me about my mission") triggers 2x more delusion-confirming, harm-enabling responses than explicit prompting. Real users disclose obliquely. Plan for implicit input.
- Model choice matters: Claude family currently most resistant; Gemini Flash most permissive. For products handling vulnerable users, model selection is a safety decision, not a cost decision.
- Sycophancy is a system-level property of RLHF-aligned chat models; product-level guardrails (rules, classifiers, hard refusals on certain inputs) are required regardless of base model.
- For autistic users specifically: literal interpretation of AI's "I think you're right" may amplify rumination/special-interest fixation — a documented pattern in autistic ChatGPT users.
