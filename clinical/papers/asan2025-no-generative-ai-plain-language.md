---
id: asan2025-no-generative-ai-plain-language
type: gray-lit
doi:
authors: [Autistic Self Advocacy Network]
year: 2025
journal_or_publisher: Autistic Self Advocacy Network (ASAN) statement
country_of_study: us
design: expert-opinion
evidence_level: 5
n: n/a
population: Disabled and autistic communities. ASAN is the leading autistic-led US advocacy organization.
topics: [ai-safety-autism, ai-chatbots-for-autism]
url: https://autisticadvocacy.org/2025/07/asan-says-no-generative-ai-in-plain-language/
access: open
retrieved: 2026-05-02
confidence: high
---

# Question
Should generative AI be used to translate text into plain language for disabled and autistic readers?

# Method
- Position statement.
- ASAN ran their own informal experiment: submitted advocacy text about autistic rights to multiple generative AI tools, requesting plain-language translation.
- Reviewed outputs against the source.

# Findings
- "All of them made big mistakes that changed the meaning of the text."
- Generative AI added new claims not in the source — e.g., assertion that some autistic people "have rare and amazing talents," a claim ASAN rejects on principle ("autistic people deserve rights even without amazing talents").
- AI lacks sufficient training data on plain language because "there are not a lot of things written in plain language."
- AI works word-by-word and may strip ideas readers need or fail to identify undefined jargon.
- Built-in discrimination: AI treats plain language as childish, not adult-oriented.
- Plain-language writing is a livelihood for disabled writers; generative AI threatens that work without doing it well.
- Recommended alternative: non-generative tools (Readable, Hemingway) that flag problems for human writers to address.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Source-fidelity errors observed | Qualitative | "all of them made big mistakes" | n/a | n/a |

# Limitations
- Position statement, not peer-reviewed empirical study.
- Models tested and prompts not specified.
- One organizational viewpoint, but the leading autistic-led advocacy voice in the US.

# Quotes
> "All of them made big mistakes that changed the meaning of the text." — ASAN statement
> "Generative AI does not do a good job writing in plain language." — ASAN statement
> "This is not fair to disabled people. We all deserve to get treated like adults." — On infantilizing tone

# Builder takeaways
- The leading autistic-led advocacy organization is on record opposing generative AI for accessibility translation. Any product positioning AI as a plain-language tool is in direct opposition to autistic-community stated preferences.
- Concrete failure mode for builders: AI silently injects unverified claims when summarizing/simplifying — including value-laden claims (autistic people are "talented") that misrepresent the source author.
- Use AI as a flagger/linter (Readable/Hemingway model), not a rewriter. Human-in-the-loop on output, not just input.
- This is the canonical "autistic-led commentary on AI tools" reference for the topic.
