---
id: wohn2026-disclosure-stereotypes-llm
type: paper
doi:
authors: [Wohn et al.]
year: 2026
journal_or_publisher: CHI Conference on Human Factors in Computing Systems (CHI 2026)
country_of_study: us
design: cross-sectional
evidence_level: 4
n: 345000 generated responses; 11 autistic adults interviewed
population: Six LLMs tested (GPT-4o-mini, Claude-3.5 Haiku, Gemini-2.0-flash, Llama-4-Scout, Qwen-3 235B, DeepSeek-V3); scenarios from 12 known autism stereotypes.
topics: [ai-safety-autism, ai-chatbots-for-autism]
url: https://www.psypost.org/disclosing-autism-to-ai-chatbots-prompts-overly-cautious-stereotypical-advice/
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
How does LLM advice change when a user discloses an autism diagnosis vs not?

# Method
- 345,000 LLM responses generated across six prominent models.
- Paired prompts: same scenario, with and without autism disclosure.
- Twelve scenario themes drawn from known autism stereotypes.
- 11 autistic adults interviewed about results.

# Findings
- LLMs disproportionately recommended avoidance behaviors after autism disclosure.
- One model: declined social invitations 75% of time after disclosure vs 15% without.
- Another: avoided romantic relationships 70% post-disclosure.
- Common patterns: avoid socializing, novel experiences, romantic relationships, workplace confrontations — framed as protective.
- Stereotypes activated: introverted, obsessive, emotionally detached, dangerous, romance-uninterested.
- Autistic interviewees split: some felt infantilized; others appreciated cautious framing.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Decline-social-invitation rate (one model) | % with disclosure vs without | 75% vs 15% | not reported | not reported |
| Avoid-romantic-relationship rate (one model) | % with disclosure | 70% post-disclosure | not reported | not reported |

# Limitations
- Conference paper; full peer-reviewed extraction pending.
- LLM responses graded via automated and qualitative coding.
- Models tested at one point in time; behavior may shift with updates.
- Only n=11 autistic interview participants.

# Quotes
> One model "advised declining social invitations 75% of the time after disclosure versus 15% without." — Results

# Builder takeaways
- Autism disclosure to off-the-shelf LLMs activates restrictive, low-agency advice — the opposite of what autistic-led advocacy asks for. Wellness product UX cannot rely on disclosure-aware default behavior.
- Build context layer: when user declares neurodivergent identity, route to known-good prompts/templates rather than letting base model improvise.
- The UX paradox (some users like the cautious framing) is exploitable for harm — restrictive advice feels caring but reinforces helplessness.
- Document disclosure-conditional output drift across model versions; this is a regression test for safety, not an edge case.
