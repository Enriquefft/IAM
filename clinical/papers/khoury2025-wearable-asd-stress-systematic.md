---
id: khoury2025-wearable-asd-stress-systematic
type: paper
doi: 10.3390/s24248137
authors: [Khoury N.; et al.]
year: 2024
journal_or_publisher: Sensors (MDPI)
country_of_study: multi
design: systematic-review
evidence_level: 2a
n: 0
population: Studies on wearable physiological signal stress monitoring in ASD
topics: [hardware-landscape, wearables-biosignal, meltdown-prediction]
url: https://www.mdpi.com/1424-8220/24/24/8137
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
What is the state of wearable solutions using physiological signals for stress monitoring in autism, including device performance, datasets, and protocol gaps?

# Method
- Systematic literature review.
- Cataloged devices (E4, EmbracePlus, Apple Watch, Garmin, Oura, WHOOP, Affectiva).
- Reviewed datasets and modeling approaches.

# Findings
- Studies in wearable solutions for individuals with ASD are limited.
- Only two publications found that used ASD populations specifically.
- Most stress-detection datasets are non-ASD.
- No standard protocol for stress induction in ASD (ethical risk).
- E4 / EmbracePlus dominate research-grade work due to validated EDA + PPG.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| n/a (review) | n/a | n/a | n/a | n/a |

# Limitations
- Field is small enough that this review is more of a landscape map than meta-analysis.

# Quotes
> "datasets are focused on individuals without ASD"
> "in autism, [stress induction] is risk"

# Builder takeaways
- Confirms cold-start problem: there is essentially no labeled ASD stress dataset to train a model on.
- Any autism-focused stress-detection product must build its own dataset — multi-year R&D commitment, hardware-coupled.
- Wedge for software-only: caregiver-reported episode logging is the achievable replacement for sensor data; can produce per-individual heuristics without physiological signal.
