# clinical/

Healthtech evidence layer: autism science, intervention efficacy, AAC standards, accessibility, sensory/biosignal landscape, regulation. Primary reader is Claude Code — optimize for grep, structured frontmatter, and atomic facts over prose.

Scope is **wellness / education only** for our products. Clinical-claim or SaMD ambitions are out of scope today; this folder still tracks the evidence so we can re-evaluate.

## Layout

- `papers/<id>.md` — one file per primary source (peer-reviewed paper, gov report, gray literature, standards doc). PDFs are not stored. Each file is the structured extract.
- `topics/<slug>.md` — synthesis pages on a topic (e.g., `pecs-evidence.md`, `early-intervention.md`, `aac-symbol-systems.md`). Cite papers by `id`. Never restate a finding that already lives in a paper file — link by ID.
- `regulation/<jurisdiction>.md` — per-country regulatory map. One file per jurisdiction: `pe.md`, `mx.md`, `co.md`, `ar.md`, `ec.md`, `cl.md`, `us.md`, `eu.md`. Cross-cutting comparisons live in `topics/regulation-comparison.md`.
- `sources.md` — flat index of all paper IDs with one-line summaries. Generated/maintained as new papers land. Used to avoid duplicate ingestion.

## Hard rules

- **One paper, one file.** ID format: `<firstauthor><year>-<short-slug>` (e.g., `dawson2010-esdm-rct`). Lowercase, hyphenated. Stable forever — never rename.
- **No PDFs in tree.** Extract structured facts; cite the URL/DOI. If the source is paywalled, mark `access: paywalled` and capture what the abstract + open citations report.
- **Evidence level explicit.** Every paper file declares `evidence_level` (Oxford CEBM 2011: 1a/1b/2a/2b/3/4/5) and `design`. Topic syntheses weight by these.
- **Atomic facts.** Use bullet lists. One claim per bullet. Effect sizes with CI and units. Quotes verbatim with locator (page, paragraph, section).
- **Confidence tag.** Every paper file declares `confidence: high|medium|low` based on design quality + replication status. Topic pages inherit and may downgrade.
- **No paraphrasing across files.** If two topics need the same fact, both link to the same paper ID.
- **Builder takeaways are explicit and last.** Each paper file ends with `## Builder takeaways` — what this means for someone building products. Keep them honest: if the paper has no builder relevance, write `None`.

## Paper file schema

```markdown
---
id: <firstauthor><year>-<slug>
type: paper                    # paper | gov-report | gray-lit | standard | guideline
doi: <doi-or-empty>
authors: [Last F.; Last F.]
year: <YYYY>
journal_or_publisher: <name>
country_of_study: <ISO codes or "multi">
design: <RCT|cohort|case-control|cross-sectional|case-series|case-report|systematic-review|meta-analysis|guideline|expert-opinion|qualitative|standards-doc>
evidence_level: <1a|1b|2a|2b|3|4|5>
n: <integer or "n/a">
population: <one-line description; ages, diagnosis, level if relevant>
topics: [topic-slug, topic-slug]
url: <canonical url>
access: <open|paywalled|gov>
retrieved: 2026-MM-DD
confidence: <high|medium|low>
---

# Question
What the study set out to answer. One paragraph max.

# Method
Design, intervention/exposure, comparator, outcomes, measurement instruments. Bullets.

# Findings
- Atomic fact with effect size + CI + p where reported.
- Atomic fact ...

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |

# Limitations
- Bullet. Be honest about generalizability, sample, conflicts of interest.

# Quotes
> "Verbatim text." — p. X / §Y

# Builder takeaways
- What this means for product. Be specific. If none, write `None`.
```

## Topic file schema

```markdown
---
slug: <topic-slug>
status: <draft|stable>
last_reviewed: 2026-MM-DD
related_topics: [slug, slug]
---

# Summary
2–4 sentences. What is true, with evidence-weight qualifier (e.g., "Strong evidence from multiple RCTs that...", "Mixed evidence...", "Expert consensus only — no RCTs").

# Evidence
- [paper-id] — one-line takeaway from that paper.

# Open questions
- What is unresolved. Each item is researchable.

# Builder takeaways
- Product implications across the body of evidence.
```

## Regulation file schema

```markdown
---
jurisdiction: <ISO country code or "EU"|"GLOBAL">
last_reviewed: 2026-MM-DD
---

# Data protection
- Law name + article references. Link to canonical text.
- Children-specific provisions.
- Lawful bases for health data.

# Medical device classification
- Authority (e.g., DIGEMID for PE, COFEPRIS for MX).
- Risk class definitions and thresholds.
- Wellness/education exemption boundaries — where the line is.

# Accessibility / education
- WCAG / national accessibility law. Procurement implications.

# Marketing & advertising claims
- Restrictions on health claims, child-targeted advertising, testimonials.

# Sources
- [link] — retrieved YYYY-MM-DD
```

## Sources

Cite inline with full URL + retrieval date. No bibliographic registry — paper files themselves are the registry.

## Language

English. Spanish-only sources (ARASAAC, MX/CO/PE regulation) cited in original; structured extract in English.
