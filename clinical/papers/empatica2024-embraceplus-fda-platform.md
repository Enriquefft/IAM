---
id: empatica2024-embraceplus-fda-platform
type: gov-report
doi: 
authors: [US FDA; Empatica S.r.l.]
year: 2024
journal_or_publisher: FDA 510(k) database
country_of_study: us
design: standards-doc
evidence_level: 5
n: n/a
population: Adults and adolescents using EmbracePlus for continuous monitoring
topics: [hardware-landscape, wearables-biosignal]
url: https://510k.innolitics.com/device/K242737
access: gov
retrieved: 2026-05-02
confidence: high
---

# Question
What is the regulatory status, sensor specification, and integration surface of Empatica EmbracePlus?

# Method
- FDA 510(k) clearance documentation review.

# Findings
- FDA-cleared (K221282 Nov 2022; K242737 expanded; additional clearances 2023-2024).
- Cleared for: SpO2, EDA, skin temperature, accelerometry-based actigraphy during sleep.
- Additional clearance for digital biomarkers: pulse rate, respiratory rate.
- Cloud API launched September 2024 for integration with CTMS/EDC clinical research systems.
- SDK available for derived digital biomarker development.
- Sensors: ventral EDA, 4-channel multi-wavelength PPG, 3D accelerometer, gyroscope, digital temperature.
- Form factor: 40x38.5x11mm, 40g, silicone band 95-222mm wrist.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| n/a | n/a | n/a | n/a | n/a |

# Limitations
- Pricing not public; requires sales engagement (typically four-figure USD per unit + cloud subscription).
- E4 wristband has been sunset; EmbracePlus is the current supported research device.

# Quotes
None.

# Builder takeaways
- EmbracePlus is the only research-grade wrist wearable with FDA clearance for the EDA+PPG+temperature stack used in autism stress prediction work.
- Cloud API + SDK exist (Sept 2024) — integration is realistic for a software product, but data acquisition cost remains gating.
- LATAM availability: import-only via research distributor; no local LATAM presence.
- Wedge: a software product cannot capture EDA. It can capture HRV via consumer wearables (Apple Watch / Garmin / Oura / WHOOP) and compensate via context inputs (time-of-day, sleep, schedule).
