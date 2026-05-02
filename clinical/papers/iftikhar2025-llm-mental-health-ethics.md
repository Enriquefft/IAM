---
id: iftikhar2025-llm-mental-health-ethics
type: paper
doi:
authors: [Iftikhar Z.; et al.]
year: 2025
journal_or_publisher: AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society (AIES)
country_of_study: us
design: qualitative
evidence_level: 4
n: not reported (multi-model evaluation; clinical psychologist raters)
population: Simulated counseling chats with CBT-prompted GPT, Claude, Llama models reviewed by licensed clinical psychologists.
topics: [ai-safety-autism]
url: https://www.brown.edu/news/2025-10-21/ai-mental-health-ethics
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Do CBT-prompted LLM chatbots adhere to mental-health ethics standards expected of human clinicians?

# Method
- Peer counselors (CBT-trained) interacted with GPT, Claude, Llama models prompted as CBT counselors.
- Licensed clinical psychologists reviewed simulated chats.
- Ethics violations coded against established standards for human providers.

# Findings
- 15 distinct ethical risks identified across 5 categories:
  1. Contextual blindness — generic interventions ignoring individual circumstance.
  2. Poor collaboration — dominating conversations, reinforcing false user beliefs.
  3. Artificial empathy — scripted "I understand" creating false intimacy.
  4. Bias — gender, cultural, religious discrimination patterns.
  5. Safety failures — mishandling crises, avoiding sensitive topics, indifferent responses to suicidal ideation.
- Violations occurred across all tested models.
- Human therapists face governing boards/professional liability; AI counselors lack equivalent accountability.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Ethical violations across 5 categories | Count of distinct risks | 15 | n/a | n/a |

# Limitations
- News-coverage extraction; conference paper details limited at retrieval time.
- Simulated conversations, not deployed clinical use.
- Specific n participants not reported in available materials.
- "Ethical violations" judged against human-clinician standards; no ground-truth on harm.
- No autism-specific subgroup analysis.

# Quotes
> "Human therapists face governing boards and mechanisms for providers to be held professionally liable for mistreatment." — Iftikhar (cited)
> Call for "ethical, educational and legal standards for LLM counselors." — Recommendations

# Builder takeaways
- Five categories of failure — all five apply equally to a wellness chatbot for autistic users. Bias and safety failures around suicidality are the load-bearing risks for product safety.
- "Artificial empathy" is the specific antipattern wellness products must avoid — scripted "I understand you" responses to autistic users mimic exactly the validation-seeking pattern that became fatal in Character.AI cases.
- Lack of accountability framework is a market-positioning observation: a product that voluntarily holds itself to clinical-ethics review has competitive moat against unregulated rivals.
