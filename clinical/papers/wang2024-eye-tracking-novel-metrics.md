---
id: wang2024-eye-tracking-novel-metrics
type: paper
doi: 10.3389/fpsyt.2024.1518180
authors: [Wang Y.; Kwong K.; Liu T.; Kong J.]
year: 2024
journal_or_publisher: Frontiers in Psychiatry
country_of_study: us
design: case-control
evidence_level: 3
n: 39
population: High-risk children 18-84 months (22 ASD, 17 non-ASD)
topics: [hardware-landscape, eye-tracking, screening]
url: https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1518180/full
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Do novel area-of-interest based eye-tracking metrics (ASC, FAS, AVC) discriminate ASD from non-ASD in toddlers/preschoolers better than traditional fixation/pupil metrics?

# Method
- Case-control comparison; 22 ASD vs 17 non-ASD children, ages 18-84 months.
- Two video stimuli: joint attention scene; alphabet face.
- Metrics: AOI Switch Counts (ASC), Favored AOI Shifts (FAS), AOI Vacancy Counts (AVC).
- Compared to traditional fixation time and pupil metrics.

# Findings
- AVC: sensitivity 88-100%, specificity 80-88% (cutoff 0.305-0.306).
- FAS: sensitivity 91%, specificity 72%.
- ASC: sensitivity 71%, specificity 64%.
- Traditional metrics (fixation time, pupil size) showed no significant differences.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| AVC sens/spec | proportion | 88-100% / 80-88% | n/r | n/r |
| FAS sens/spec | proportion | 91% / 72% | n/r | n/r |

# Limitations
- Small sample.
- Limited ethnic diversity.
- High-risk cohort only — doesn't establish general-population screening utility.

# Quotes
> "AVC demonstrated strongest performance: sensitivity 88-100% and specificity 80-88%"

# Builder takeaways
- Open-source candidate metrics outperform traditional fixation duration. Implementable on top of any eye-tracking pipeline including webcam.
- Worth re-implementation in future eye-tracking screener experiments using WebGazer.js.
