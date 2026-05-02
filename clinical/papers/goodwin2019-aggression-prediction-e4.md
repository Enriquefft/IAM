---
id: goodwin2019-aggression-prediction-e4
type: paper
doi: 10.1002/aur.2151
authors: [Goodwin M.S.; Mazefsky C.A.; Ioannidis S.; Erdogmus D.; Siegel M.]
year: 2019
journal_or_publisher: Autism Research
country_of_study: us
design: cohort
evidence_level: 2b
n: 20
population: Youth ages 6-17 (M=10.8) with ASD on inpatient psychiatric units; 85% minimally/non-verbal; mean non-verbal IQ 66.1
topics: [hardware-landscape, wearables-biosignal, meltdown-prediction]
url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6988899/
access: open
retrieved: 2026-05-02
confidence: medium
---

# Question
Can physiological and motion data from a wrist-worn biosensor predict aggressive behavior in youth with profound autism in a naturalistic inpatient setting?

# Method
- Empatica E4 wristband worn during 69 observation sessions totaling 87 hours.
- Signals: blood volume pulse (64 Hz), inter-beat-interval, electrodermal activity (4 Hz), 3-axis accelerometry (32 Hz).
- Concurrent behavioral coding by trained observers across 548 aggressive episodes (hitting, kicking, biting, scratching, throwing).
- Ridge-regularized logistic regression with 5-fold cross-validation, repeated 5 times.
- Prediction window: 3 minutes of antecedent data → predict aggression in next 1 minute.

# Findings
- Person-dependent models: average AUC 0.84 (range 0.69–0.99, SD 0.10).
- Global (cross-person) model: AUC 0.71.
- 30% spread between best and worst per-person model performance.
- 60-second prediction lead time was achievable with usable physiological signal.

# Effect sizes
| Outcome | Measure | Effect | 95% CI | p |
| --- | --- | --- | --- | --- |
| Aggression prediction (person-dependent) | AUC | 0.84 | n/r | n/r |
| Aggression prediction (global) | AUC | 0.71 | n/r | n/r |

# Limitations
- Inpatient psychiatric sample with severe profile — generalizability to outpatient or higher-functioning ASD unknown.
- Single site.
- Class imbalance and per-participant aggression frequency varied 1–130 episodes; risks of overfitting acknowledged.
- No prospective real-time deployment; offline post hoc modeling only.
- No replication by independent group as of 2026-05-02.

# Quotes
> "aggression to others can be predicted 1 minute before it occurs using 3 minutes of prior biosensor data with an average area under the curve (AUC) of 0.71 for a global model and 0.84 for person-dependent models." — Abstract
> "even 60 seconds of warning may be a sufficient amount of time to triage attention, rearrange the environment to make it safer, provide redirection, calm the individual directly, or promote other self-management supports." — Discussion

# Builder takeaways
- Strongest published evidence for biosignal-based meltdown prediction in autism, but person-dependent models only — global models drop to 0.71 AUC. Cold-start problem is severe.
- Requires medical-grade EDA + PPG + accelerometry. Apple Watch / Garmin lack EDA; signal floor is lower.
- A pure-software wellness app cannot reproduce this signal without hardware. Integration with E4 / EmbracePlus is the only path; LATAM availability is poor (E4 sunset; EmbracePlus US/EU only).
- Wedge: parent/caregiver journaling that captures contextual antecedents (sleep debt, schedule disruption, sensory triggers) is achievable software-only and can rival many of the predictive features without the wearable.
