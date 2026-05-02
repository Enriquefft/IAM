---
slug: social-robots-autism
status: draft
last_reviewed: 2026-05-02
related_topics: [ai-chatbots-for-autism, ai-safety-autism, hardware-landscape]
---

# Summary

Meta-analytic pooled evidence supports a **small, statistically significant social-skills benefit** of social-robot interventions for autistic children: Hedges g = 0.35 (95% CI 0.09–0.61) across 12 RCTs (n=346) in [kouroupa2022-social-robots-meta-analysis]. Emotional and motor outcomes are null. This effect is **almost entirely lab-bound** (clinic g=0.57; home and school g≈null) and **almost entirely Wizard-of-Oz** (80% of trials had a human therapist remote-operating the robot). When robot is properly compared to identical content delivered by a human therapist ([holeva2022-nao-rct-children], n=51), the robot adds satisfaction/novelty but no clinically meaningful superiority. The largest 2025 RCT ([david2025-robot-lab-to-reality], n=132 across efficacy + effectiveness arms) is framed as **non-inferiority** — robot equivalent to conventional treatment, with engagement increase as the only differentiator. Per-unit costs (QTrobot Home USD $1,977 + $149/mo; NAO USD $9,000–$16,000; Milo USD $5,000–$10,000) make scaling unaffordable for LATAM family/school markets. Confidence: **low to medium** — meta-analyses exist, but most underlying RCTs are weak (95% lacked blinded assessors per [kouroupa2022-social-robots-meta-analysis]) and replication across labs is sparse.

# Evidence by platform

## NAO (Aldebaran/SoftBank)

- Bulk of [kouroupa2022-social-robots-meta-analysis] underlying RCTs (17 of ~40 included studies).
- [holeva2022-nao-rct-children] — RCT n=51, ages 6–12, IQ>70. Greek site. 21 sessions of TOM+ABA-based intervention with NAO co-therapist vs human-only. **Both arms improved**. CARS-2 change <4.5pt clinical-significance threshold in both. Between-group differences "minimal." Robot group higher satisfaction. **No clinical superiority**.
- Aldebaran (NAO maker) declared bankruptcy 2025; acquired by Maxvision (CN). Platform continuity uncertain through 2026–2028.

## QTrobot (LuxAI)

- [costa2018-qtrobot-attention] — Within-subject n=11, lab. QTrobot vs human: significant attention increase, stereotypy decrease in QTrobot condition. **Single small lab study**; no follow-up.
- 12-month at-home RCT (LuxAI/LIH/Birmingham, n=190 across 5 EU countries) underway as of 2026; results pending.
- Pricing: Home USD $1,977 + $149/mo; Pro ~USD $10,000.

## Kaspar (University of Hertfordshire)

- [wood2019-kaspar-feasibility] — NIHR-funded feasibility RCT n=40. Kaspar interactions associated with turn-taking, collaborative skills in qualitative observation. Authors themselves note: "the literature regarding the use of social robots in interventions with children with autism is currently reliant on single case reports."
- Research-only; not commercially available. Demonstrates how single-team-program-bound the field is.

## Milo (RoboKind)

- US schools (Texas HB418 funded deployments). Anecdotal/observational reports cited in industry; not represented in RCT-level [kouroupa2022-social-robots-meta-analysis] pool.
- ~USD $5,000–$10,000 incl. subscription.

## Pepper (SoftBank), Leka, Buddy

- Pepper: production stopped 2020. Leka: discontinued. Buddy: limited peer-reviewed evidence.
- Discontinuations underscore sustainability problem of consumer/educational social-robot platforms.

## Jibo (modified for research)

- [scassellati2018-jibo-in-home-robot] — n=12 30-day in-home single-arm case series. All 12 caregiver-reported improvement on responsiveness, conversation initiations, eye contact. First "autonomous" (vs Wizard-of-Oz) in-home deployment for autism. **Evidence-level 4** (single-arm, caregiver-report, novelty bias). Often cited as the strongest in-home robot evidence; n=12 without control is the actual ceiling.
- Jibo as consumer product was discontinued; reanimation attempts intermittent.

## Cross-platform generalist

- [david2025-robot-lab-to-reality] — Two parallel RCTs (n=69 efficacy, n=63 effectiveness). Robot-assisted therapy **equivalent** to conventional treatment in both clinic and school/home settings. Engagement higher with robot. **Non-inferiority is the actual frame** — robot ≠ better than human therapy, just equally engaging. Author conflicts include robot-platform stakeholders.

# Effect-size summary

| Outcome | Source | Effect | 95% CI | Setting |
| --- | --- | --- | --- | --- |
| Combined (12 RCTs) | [kouroupa2022-social-robots-meta-analysis] | g = 0.33 | 0.08–0.57 | Pooled |
| Social outcomes (k=7) | [kouroupa2022-social-robots-meta-analysis] | g = 0.35 | 0.09–0.61 | Pooled |
| Emotional outcomes (k=2) | [kouroupa2022-social-robots-meta-analysis] | g = 0.63 | -1.43–2.69 | n.s. |
| Motor outcomes (k=3) | [kouroupa2022-social-robots-meta-analysis] | g = -0.10 | -1.08–0.89 | n.s. |
| Clinic setting | [kouroupa2022-social-robots-meta-analysis] | g = 0.57 | 0.16–0.98 | Lab |
| Home / school setting | [kouroupa2022-social-robots-meta-analysis] | ≈null / negative | wide | Real world |
| Robot vs identical-human-content | [holeva2022-nao-rct-children] | "minimal" between-group diff | n.r. | Clinic |
| Robot vs conventional treatment | [david2025-robot-lab-to-reality] | equivalent (non-inferiority) | n.r. | Both |
| Caregiver-reported improvement (in-home, autonomous) | [scassellati2018-jibo-in-home-robot] | 12/12 improved | n/a | Home |
| QTrobot attention/stereotypy (lab) | [costa2018-qtrobot-attention] | sig. (within-subject) | n.r. | Lab |

# Replication status

- **NAO**: multiple labs, but most are single-arm or share methodology. [holeva2022-nao-rct-children] is the cleanest robot-vs-human-content comparison and shows null superiority.
- **QTrobot**: one lab (LuxAI ecosystem) with [costa2018-qtrobot-attention]; pending [costa-12month-rct] would be the first multi-country replication.
- **Kaspar**: one lab (Hertfordshire); not replicated externally.
- **Jibo**: one lab (Yale/Scassellati); the [scassellati2018-jibo-in-home-robot] design has not been replicated.
- **Across-platform**: [kouroupa2022-social-robots-meta-analysis] aggregates but the pooled estimate is dominated by NAO; cross-platform replication of any single protocol is rare.

The field's evidence pattern is: single-team, single-platform, lab-based, small n, Wizard-of-Oz. Cross-team replication is the missing pillar.

# Lab-to-real-world gap

- [kouroupa2022-social-robots-meta-analysis]: setting moderator significant. Clinic g=0.57 (sig); home and school effects null/negative.
- [david2025-robot-lab-to-reality] effectiveness arm (n=63, school/home, 5 sessions): equivalent to conventional treatment, but the comparator is conventional treatment — not a no-treatment control. The community-setting result is "robot does not underperform real care," not "robot replaces real care."
- [scassellati2018-jibo-in-home-robot] is the in-home case series most often cited; n=12 without control means novelty/expectancy bias is undistinguished from causal effect.
- 80% of [kouroupa2022-social-robots-meta-analysis]-included trials use Wizard-of-Oz operation. The "robot autonomy" assumed by consumer-marketing pitches is largely unsupported.
- Median follow-up 10 weeks across the meta-analysis. No multi-year durability data.

# Open questions

- Does the [kouroupa2022-social-robots-meta-analysis] pooled g=0.35 hold in fully-autonomous (non-Wizard-of-Oz) deployments? Almost no published trials test this.
- Does the 12-month QTrobot RCT (LuxAI/LIH/Birmingham, n=190) replicate the small lab effect at home over a year? Pending.
- Aldebaran bankruptcy → does NAO survive 2026–2028 as a research/educational platform under Maxvision? Schools that bought NAO face content-path uncertainty.
- Does engagement increase ([david2025-robot-lab-to-reality]) translate to durable behavioral change beyond the intervention period?
- For LATAM: is there ANY locally-validated social-robot trial in PE/MX/CO/AR/EC/CL? (Not as of 2026-05-02. JARI in Lima is proof-of-concept; Mexico/Brazil/Colombia have small participatory-design work but no efficacy trials.)
- Is the engagement effect specific to embodied robots, or do screen-based avatars/embodied conversational agents capture most of it at near-zero marginal cost?
- Does ABA-derived robot content ([holeva2022-nao-rct-children]) raise the same neurodiversity-led concerns as human-delivered ABA (see [yu2020-aba-meta], [kupferstein2018-aba-ptsd], [mathur2024-aba-neurodiversity])? No published study addresses this.

# Builder takeaways

- **Hardware is OUT OF SCOPE for our build** (per [hardware-landscape]). This topic exists to inform the substitution decision, not to motivate a robot purchase.
- **Robots add engagement, not clinical superiority.** Every well-controlled comparison ([holeva2022-nao-rct-children], [david2025-robot-lab-to-reality]) shows the robot matches the human comparator on outcomes and beats it on engagement/satisfaction. For a wellness/education product, **engagement is a legitimate goal but cannot be marketed as clinical effect.**
- **Lab effects do not generalize.** Clinic g=0.57, home/school ≈null. Any product claim built on social-robot evidence must specify the setting; LATAM home/school is the null-evidence end of the distribution.
- **Wizard-of-Oz is the actual mechanism in 80% of the literature.** "Autonomous robot helps autistic child" headlines almost always describe a remote human therapist. Be honest in any cited claim.
- **Per-unit cost gates LATAM.** USD $2,000–$16,000 per robot is unaffordable for PE/MX/CO/EC families; school deployments require government or grant funding that doesn't yet exist.
- **Software substitution is viable for the meta-analytic effect.** The effective ingredients are: structured turn-taking, predictable cues, constrained social-skills practice, Wizard-of-Oz human supervision. **Screen-based avatars + structured social-scenario practice + parent/professional-mediated sessions reproduce these without hardware.** This is the wedge for a software product targeting the same use case in LATAM.
- **Avoid the "robot/avatar friend" framing.** For the same reasons in [ai-chatbots-for-autism] and [ai-safety-autism]: parasocial dependency is a documented harm vector, and the autistic-led commentary ([asan2025-no-generative-ai-plain-language]) is skeptical of AI personas.
- **Younger children show larger effects** ([kouroupa2022-social-robots-meta-analysis], age moderator p=.02). For a software substitute, lean younger in the primary product persona.
- **Robot content is mostly ABA-derived.** Any social-robot evidence cited as supporting our product comes with the implicit ABA-protocol caveat. Neurodiversity-affirming alternatives are the responsible product framing for LATAM where ABA debate is active.
- **Honest marketing frame for our software:** "We deliver structured social-skills practice with predictable cues, drawing on the same protocols evaluated in social-robot trials, without the per-device cost or the documented lab-to-real-world gap. The evidence base for these protocols is small, mostly clinic-bound, and not yet locally validated in LATAM."
