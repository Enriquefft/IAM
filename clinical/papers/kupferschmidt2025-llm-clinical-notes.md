---
id: kupferschmidt2025-llm-clinical-notes
type: paper
doi:
authors: [Kupferschmidt K.L.; O'Doherty K.; Skorburg J.A.]
year: 2025
journal_or_publisher: AIES 2025 (arXiv:2509.04340)
country_of_study: ca
design: qualitative
evidence_level: 4
n: 20 occupational therapists (30 interviews)
population: Pediatric occupational therapists at KidsAbility (Ontario, Canada); 10 piloted Microsoft CoPilot + custom Llama 3 8B fine-tuned on historical SOAP notes.
topics: [llm-for-clinicians]
url: https://arxiv.org/html/2509.04340
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Why do LLM tools fail to reduce clinical documentation burden in pediatric rehabilitation despite technical capability?

# Method
- Qualitative case study at KidsAbility (pediatric rehab, Canada).
- 20 OT participants; 30 semi-structured interviews across three programs.
- 10 OTs piloted two AI scribes: enterprise Microsoft CoPilot and a custom Llama 3 8B fine-tuned on historical SOAP notes.
- Thematic analysis (Braun & Clarke six-phase).
- Applied FITT framework (Fit between Individuals, Tasks, Technology).

# Findings
- Four themes:
  1. Workflow heterogeneity — documentation practices vary by clinician experience, program, setting; school-based therapists rarely write structured scratch notes.
  2. SOAP notes are not the bottleneck — burden stems from systemic inefficiencies (org policy, EHR design), not note authoring.
  3. Clinician autonomy — practitioners value control over documentation reflecting professional identity.
  4. Mutual learning required — clinicians produced over-formatted inputs to compensate, increasing workload.
- Error types observed:
  - Miscategorization (content placed in wrong SOAP section).
  - Clinical inaccuracies (e.g., transformed "anxious" to "has anxiety").
  - Omissions of critical information.
  - Semantic shifts changing clinical meaning.
- "Random information" not present in inputs occasionally generated.
- No quantified hallucination rate reported.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Time savings | Quantified? | not reported | n/a | n/a |
| Error rate | Quantified? | not reported (qualitative themes only) | n/a | n/a |

# Limitations
- Single-site case study; n=20 OTs.
- Pilot only; no controlled before/after measurement.
- One language (English); Canadian pediatric rehab context.
- arXiv/AIES paper; not yet a journal-level evidence.
- Does not measure patient outcomes from notes.

# Quotes
> "I don't think it's our ability to write, it's the amount of things we have to do." — Clinician participant
> "Responsible deployment in healthcare needs to start with better understanding of the people, practices, and systems these tools support." — Conclusion
> "I've always lived with templates outside of the clinical record because they've been most efficient for me." — Clinician on autonomy

# Builder takeaways
- For SLP/OT/psych documentation tools: writing the note is not the bottleneck — the system around it is. Building a "better SOAP note generator" misses the actual constraint.
- Heterogeneity across clinicians/sites/programs means a one-size template fails. Wellness/education products must let practitioners shape format, not impose AI's preferred shape.
- Clinical inaccuracy types are concrete and predictable: "anxious"→"has anxiety" is the diagnostic-language drift that turns wellness language into accidentally diagnostic language. Build a linter for this exact failure class.
- The product's value is not "AI writes the note" — it is "AI handles the orchestration around the note" (scheduling, billing prep, parent-facing summaries).
