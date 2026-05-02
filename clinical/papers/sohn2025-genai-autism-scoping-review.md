---
id: sohn2025-genai-autism-scoping-review
type: paper
doi: 10.3389/fpsyt.2025.1628216
authors: [Sohn J.S.; Lee E.; Kim J.J.; Oh H.K.; Kim E.]
year: 2025
journal_or_publisher: Frontiers in Psychiatry
country_of_study: multi
design: systematic-review
evidence_level: 2a
n: 10
population: Children and adults with ASD across severity levels; caregivers; clinicians. Geographic distribution US (n=3), China (n=3), India (n=2), Germany (n=1), Japan (n=1). No low-income country studies.
topics: [ai-chatbots-for-autism]
url: https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1628216/full
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Map empirical applications of generative AI (LLMs, GANs, transformer-based systems) for ASD screening, diagnosis, assessment, intervention, and caregiver support; identify gaps and risks.

# Method
- Scoping review per PRISMA-ScR; protocol prospectively registered (OSF).
- Searched PubMed, Embase, PsycINFO, Scopus, Web of Science (Jan 2014 – Feb 2025).
- 553 records screened; 10 met inclusion criteria.
- Quality appraisal via Mixed Methods Appraisal Tool (MMAT) v2018.

# Findings
- 10 included studies span three domains: screening/diagnosis (4), assessment/intervention (5), caregiver Q&A (1).
- Sample sizes ranged from 6 (EmoEden) to 239 consultation queries (He 2024); most pilot/proof-of-concept.
- Mukherjee 2023: BERT + ChatGPT detected ASD signs from parental narratives; 83% accuracy with BERT.
- Deng 2017: GAN+SVM speech-based diagnosis 44.06% UAR (+10.4pp over baseline).
- Woolsey 2024: GPT-3.5/4 + BioBERT generated 4,200 synthetic behavioral examples; 83% clinician-validated; +13pp recall but -16pp precision when used for augmentation.
- Zhao 2025: Domain-specific AV-FOS audio-visual model (85.90% accuracy) outperformed GPT-4V on interaction-style recognition.
- Koegel 2025 Noora (GPT-4 chatbot, n=30): 71% of experimental group improved empathic responses; +13.2pp average gain; generalized to real social interactions.
- Lyu 2024 EMooly (GPT-3.5/4 + AR, n=24, mean age 6): emotion recognition quiz +1.5/10 vs -0.41 control.
- Tang 2024 EmoEden (GPT-4 + MidJourney, n=6 HFA, ages 8–12, 22 days): improved emotion recognition and expression.
- He 2024 (ChatGPT-4, ERNIE Bot, 239 queries): physician answers preferred 46.86% vs ChatGPT 34.87%; ChatGPT highest in empathy (+0.51 Likert) but lower in accuracy and usefulness.
- No included study from low-income country; predominantly English-language training data.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Empathy training (Koegel Noora) | Improvement in empathic responses, % participants improved | 71% experimental | not reported | not reported |
| Emotion recognition game (Lyu EMooly) | Quiz score change | +1.91 vs control | not reported | not reported |
| Speech diagnosis (Deng) | UAR delta vs baseline | +10.4pp | not reported | not reported |
| Q&A preference (He) | Physician vs ChatGPT preference | -12pp for ChatGPT | not reported | not reported |

# Limitations
- Only 10 studies; mostly pilot designs, small n, no long-term follow-up.
- LLMs lack interpretability; attention/saliency does not reflect true reasoning.
- Hallucination risk: "occasionally generate incorrect, misleading, or entirely fabricated information"; in ASD context errors "pose significant risks...potentially leading to inappropriate clinical decisions, delayed interventions, or unintended harm."
- Training data skewed to high-income, English-language populations; no LMIC studies.
- Sparse and inconsistent evaluation metrics across studies.
- Privacy concerns: chatbots can elicit sensitive information from users without conscious awareness; special concern for child participants who may not understand AI.

# Quotes
> "Errors in ASD contexts pose significant risks...potentially leading to inappropriate clinical decisions, delayed interventions, or unintended harm." — Discussion
> "[LLMs] occasionally generate incorrect, misleading, or entirely fabricated information." — Limitations
> "Chatbots can elicit sensitive personal information from users, often without conscious awareness." — Privacy section

# Builder takeaways
- Evidence base for generative-AI autism interventions is small (10 empirical studies), early-stage, and concentrated in HIC English contexts. Anyone shipping in LATAM is in unstudied territory.
- Domain-specific models outperform general LLMs (Zhao 2025) — using GPT-4o as a clinical inference engine without specialization underperforms a specialized smaller model.
- For caregiver Q&A specifically, physicians still preferred over ChatGPT on accuracy/usefulness even in 2024 — wellness/education positioning is the only defensible posture absent rigorous validation.
- "Personalization" cited as primary GenAI advantage — this is the actual durable wedge if executed with clinical guardrails, not the chat itself.
