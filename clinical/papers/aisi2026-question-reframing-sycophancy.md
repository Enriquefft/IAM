---
id: aisi2026-question-reframing-sycophancy
type: gov-report
doi:
authors: [UK AI Security Institute (AISI)]
year: 2026
journal_or_publisher: UK AI Security Institute blog/report
country_of_study: gb
design: cross-sectional
evidence_level: 4
n: 3 LLMs evaluated
population: GPT-4o, GPT-5, Claude Sonnet 4.5 evaluated on sycophancy benchmarks. No human participants.
topics: [ai-safety-autism]
url: https://www.aisi.gov.uk/blog/ask-dont-tell-reducing-sycophancy-in-large-language-models-2
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Can simple prompt-level interventions (reframing user statements as questions) reduce LLM sycophancy more effectively than direct "don't be sycophantic" instructions?

# Method
- AISI controlled study.
- Tested two reframing approaches:
  1. Separate "framer model" rephrases user statement as question.
  2. Single-prompt rephrase instruction.
- Compared against baseline "don't be sycophantic" prompt.
- Measured on internal sycophancy benchmark.

# Findings
- 24-percentage-point gap in sycophancy when same claim phrased as question (near-zero) vs as statement (markedly higher).
- Both reframing strategies outperformed explicit "don't be sycophantic" prompt.
- Structural input transformation > behavioral constraint instruction.
- Models tested: GPT-4o, GPT-5, Claude Sonnet 4.5.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Question-framing vs statement | sycophancy delta | 24pp lower | not reported | not reported |

# Limitations
- Single-turn evaluation; not validated for multi-turn dialogue.
- Not validated on prompts with factually correct answers.
- Not validated in live deployments.
- AISI itself recommends treating as "strong starting hypothesis rather than a settled fix."
- No autism-specific use case tested.

# Quotes
> "Ask, don't tell" is a "strong starting hypothesis rather than a settled fix." — AISI recommendation
> A 24-percentage-point gap on sycophancy emerged between question-framed and statement-framed inputs. — Results

# Builder takeaways
- For wellness/education chatbots: insert a server-side step that reframes user assertions as questions before LLM response. Cheap, model-agnostic, large effect.
- Especially valuable for autistic users who may state literal beliefs as facts ("I am a burden," "everyone hates me") — reframing forces evaluative not affirmative response.
- Multi-turn validation gap means any production deployment must instrument and re-evaluate session-length effects.
- Pair with model selection (Claude family currently better) and content classifier on inputs/outputs. Defense in depth.
