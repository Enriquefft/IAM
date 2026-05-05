# business/

Market analysis, competitive landscape, positioning, personas, problems, pricing. Claims about the world — they must be falsifiable.

Clinical/scientific evidence does **not** live here. It lives in `clinical/` (papers, intervention efficacy, AAC standards, regulation). When business research needs a clinical fact (e.g., "PECS works"), link to a `clinical/topics/<slug>.md` or paper ID — do not restate.

## Rules

- **Cite sources inline.** URL + retrieval date, or reference to an interview/dataset. Unsourced numbers are opinions, not research.
- **Separate fact, estimate, and opinion.** Mark estimates (`Estimate:`) and opinions (`View:`) explicitly. Do not blend with observed data.
- **Refresh or remove on rot.** Dead links and outdated numbers dressed as current are worse than silence.
- **Research informs, does not decide.** Decisions live in `company/` (org-level) or `product/<product>/` (product-level). A research doc that ends with a commitment is misfiled.

## File choice

- Competitor → `research/competitors/<slug>.md`. One file per competitor. Use the competitor schema below.
- Market sizing → `research/market.md`.
- Persona or buyer archetype → `research/personas.md` (one file, sections per persona).
- Problem statement → `research/problems.md`.
- Pricing model analysis → `research/pricing.md`.
- Positioning → `research/positioning.md`.
- Day-in-life task map / non-clinical workflow per persona → `research/workflows.md` (one file, sections per persona).
- Extending an existing topic → edit the existing file. Do not spawn `-v2`.

## Competitor file schema

```markdown
---
slug: <kebab-case-name>
name: <Display Name>
url: <homepage>
hq_country: <ISO>
markets_served: [ISO, ISO]
founded: <YYYY>
funding_stage: <bootstrapped|seed|series-a|series-b+|public|unknown>
last_reviewed: 2026-MM-DD
target_users: [tea-kid, parent, professional]   # any subset of the three personas
clinical_claim_level: <wellness|clinician-tool|samd|unknown>
---

# What it is
2–4 sentences. Concrete: what the user sees, not marketing copy.

# Pricing
- Tier name — price (currency, billing cadence) — what is included.
- `Estimate:` markers where pricing is opaque.

# Features
- Bullet list of substantive capabilities. Skip generic ("modern UI", "secure").

# Strengths
- Bullet.

# Weaknesses / gaps
- Bullet. Where they leave the user underserved — these are our wedges.

# Evidence base
- Linked clinical evidence, if any. If purely marketing, say so.

# Geographic / language coverage
- Languages supported. Localization quality (true L10n vs MT).
- Where they are sold or available.

# Sources
- [link] — retrieved YYYY-MM-DD
```
