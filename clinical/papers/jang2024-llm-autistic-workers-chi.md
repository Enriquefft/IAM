---
id: jang2024-llm-autistic-workers-chi
type: paper
doi: 10.1145/3613904.3642894
authors: [Jang J.; Moharana S.; Carrington P.; Begel A.]
year: 2024
journal_or_publisher: Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)
country_of_study: us
design: qualitative
evidence_level: 4
n: 11
population: 11 autistic adults; recruited at Carnegie Mellon University. Focus on workplace communication assistance.
topics: [ai-chatbots-for-autism]
url: https://dl.acm.org/doi/10.1145/3613904.3642894
access: paywalled
retrieved: 2026-05-02
confidence: medium
---

# Question
How do autistic adults experience LLM (GPT-4) chatbots vs. a disguised human counselor for workplace communication advice?

# Method
- 11 autistic adult participants.
- Compared two advice sources: GPT-4-based chatbot and a human career counselor specializing in autism (disguised as a chatbot).
- Within-subjects comparison; qualitative analysis of preferences and reasoning.
- Independent professional review of LLM outputs.

# Findings
- Participants overwhelmingly preferred the GPT-4 chatbot to the disguised counselor.
- Preference driven by format (concise bullet-point answers) rather than content quality.
- Participant quote: "I think, honestly, with my workplace…it's the only thing I trust because not every company or business is inclusive."
- Professional reviewer judged some chatbot answers as suboptimal or harmful for autistic workers (e.g., generic advice to "approach coworkers to make friends").
- Trust in non-human source linked to perceived non-judgmental nature.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Source preference | Count preferring chatbot | overwhelming majority | n/a | n/a |

# Limitations
- n=11; CMU-area recruitment.
- Single-session interaction; no long-term outcomes.
- Within-subjects (no independent control).
- LLM advice quality judged by one professional.
- Workplace context only; not clinical/wellness.

# Quotes
> "It's the only thing I can trust because not every company or business is inclusive." — Participant
> Professional noted some LLM advice (e.g., "approach coworkers to make friends") was inappropriate for autistic workers. — Findings

# Builder takeaways
- Autistic adults prefer chatbots over humans BECAUSE chatbots are non-judgmental, not because the advice is better. This is a design constraint and a product wedge simultaneously.
- "Concise, bullet-point" is the autistic-preferred format. Long therapeutic prose loses to terse structure.
- The trust pattern is exploitable for harm by bad-faith actors: autistic users will accept advice from chatbots they would refuse from humans. Build with this asymmetry in mind.
- Generic "be more social" suggestions are the canonical failure case — the model needs to recognize autistic communication preferences as valid, not deficient.
