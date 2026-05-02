---
jurisdiction: US
last_reviewed: 2026-05-02
---

# Status

Research file, not legal advice. US legal counsel required before launch. The US has the most-detailed wellness-app safe harbor (FDA General Wellness Policy 2026 update). The U.S. patchwork is severe: federal sectoral laws (HIPAA, COPPA, FTC Act, Section 504, IDEA, ADA) layered on state privacy laws (CCPA/CPRA, etc.). Highlights below focus on what a B2C wellness/education app for autism families must navigate.

# Data protection

## HIPAA — when it does NOT apply
- HIPAA Privacy Rule + Security Rule apply only to **Covered Entities** (health plans, health-care providers conducting electronic transactions, health-care clearinghouses) and their **Business Associates**.
- A direct-to-consumer wellness/education app sold to families on iOS/Android, with no covered-entity contract, is **not** a Covered Entity nor a Business Associate. HIPAA does not apply to its data.
- HHS guidance on access right + health apps confirms: once health information is received from a covered entity at the individual's direction by an unaffiliated app, HIPAA protections cease. Source: <https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html>.
- Implication: a B2C autism wellness app is HIPAA-exempt. **This is not a free pass — see FTC + COPPA + state laws below.**
- **Trigger to enter HIPAA scope:** B2B sales to a school district/clinic where the app processes data on the entity's behalf (Business Associate Agreement required), or building a tele-health-style integration with a covered provider.

## FTC Act + Health Breach Notification Rule (HBNR)
- **FTC Health Breach Notification Rule** — final amendments effective 2024-07-29. Now explicitly covers makers of health apps, connected devices, and similar products that handle PHR identifiable health information. <https://www.federalregister.gov/documents/2024/05/30/2024-10855/health-breach-notification-rule>.
- Definition of "breach" expanded: includes any **unauthorized disclosure** of PHR data — not just cybersecurity incidents. Voluntary sharing with third-party advertisers without explicit per-disclosure consent triggers HBNR (see GoodRx, Premom enforcement actions).
- Notification obligations:
  - Affected individuals: without unreasonable delay; within 60 calendar days.
  - FTC: directly if breach affects 500+ people.
- FTC Act §5 — unfair/deceptive practices. FTC has aggressively used §5 against health app misrepresentations and against children's-data violations even outside COPPA.

## COPPA — under-13 children
- **Children's Online Privacy Protection Act of 1998** + 16 CFR Part 312. <https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312>.
- Applies to operators of websites/online services (including apps) that are (a) directed to children under 13, OR (b) have actual knowledge of collecting personal information from a child under 13.
- Verifiable parental consent (VPC) required before collecting PI from under-13s. Sliding-scale of acceptable VPC methods per FTC rule (credit card transaction, government ID, video conference, knowledge-based authentication, etc.).
- Privacy notices in plain language; right of parental access and deletion.
- A wellness/education app aimed at autistic children **almost certainly** will be deemed "directed to children" under FTC's totality-of-circumstances factors (subject matter, visual content, age of models, language). Plan COPPA-compliant from day one.
- 2026 final rule update (FTC) tightens definitions of "personal information" (incl. biometric identifiers) and limits indefinite data retention.
- **COPPA 2.0 / KOSA bills** — repeatedly reintroduced; not yet enacted (Open question).

## State privacy laws
- **CCPA / CPRA (California)** — age 13–16 opt-in for "selling/sharing"; under-13 needs parental opt-in. Sensitive Personal Information category includes health data.
- **VCDPA (Virginia), CPA (Colorado), CTDPA (Connecticut), UCPA (Utah), TDPSA (Texas), MCDPA (Montana), NHPA (NH), NJDPA, DDPA (Delaware), OCPA (Oregon), TIPA (Tennessee), IDPA (Indiana), MNCDPA (Minnesota), KCDPA (Kentucky), MDPA (Maryland), RIDPA (Rhode Island)** — 20+ states with comprehensive privacy laws by 2026; most have heightened obligations for sensitive (incl. health) data and minors.
- **Maryland Online Data Privacy Act (MODPA)** — strict data-minimization; bans sale of minors' data; effective 2025-10.
- **Children's Code (California Age-Appropriate Design Code)** — partially enjoined but signals pattern. New York Child Data Protection Act (effective 2025-06).
- Health-data state laws: **Washington My Health My Data Act** (effective 2024-03; 2024-06 for small businesses) — applies to all consumer health data including mental health and reproductive; broader than HIPAA; private right of action.

## Sector-specific federal laws relevant to autism families
- **FERPA** — Family Educational Rights and Privacy Act. Applies to schools receiving Department of Education funding. If product is used in classrooms with student records, FERPA applies (handled by the school, not the app — but the app must support parental review/correction rights).
- **PPRA** — Protection of Pupil Rights Amendment. Restricts collection of certain sensitive student information without parental consent.

# Medical device classification

## Authority and primary instruments
- **FDA** — Food and Drug Administration; CDRH (Center for Devices and Radiological Health).
- **Federal Food, Drug, and Cosmetic Act** (FDCA), §201(h) defines "device".
- **21st Century Cures Act 2016** — §3060 amended FDCA to exclude certain software functions (general wellness, EHR/admin, certain CDS) from device definition.

## Device classes
- Three FDA classes:
  - **Class I** — low risk (e.g., bandages, surgical instruments). Most exempt from premarket notification.
  - **Class II** — moderate risk (e.g., powered wheelchairs). Requires 510(k) premarket notification typically.
  - **Class III** — high risk (e.g., implantable defibrillators). Requires PMA (premarket approval).

## Software / SaMD
- FDA recognizes SaMD as `software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device`.
- Pediatric autism diagnosis aids: example FDA-cleared device — **Canvas Dx** (Cognoa) — De Novo authorization 2021. <https://www.health.ny.gov/health_care/medicaid/ebbrac/meetings/2024/docs/2024-11-21_canvas_rpt.pdf>. Demonstrates that diagnostic claims about autism = medical device territory.

## **General Wellness Policy — 2026 update (the safe harbor)**
- **FDA "General Wellness: Policy for Low Risk Devices"** — final guidance issued 2026-01-06; supersedes 2019-09-27 version. Source PDF expected at <https://www.fda.gov/media/90652/download> (verify post-publication URL).
- Two-factor enforcement-discretion test:
  1. Product is intended **only** for general wellness use; AND
  2. Product presents a **low risk** to user safety (noninvasive, no implant, no risky technology like lasers/radiation).
- General wellness use categories per 2019/2026 guidance:
  - **Maintaining a general state of health**: weight management, physical fitness, relaxation/stress management, mental acuity, self-esteem, sleep management, sexual function.
  - **Associated with general wellness for chronic disease/condition that is well-understood and accepted**: claims like "may reduce the risk of chronic disease X if user maintains a healthy lifestyle" are okay if framed as risk-modulation through lifestyle.
- 2026 update: explicitly extends enforcement discretion to certain physiological-parameter sensors (blood pressure, oxygen saturation, glucose, HRV) when used **solely for wellness** and noninvasive. Source: <https://www.troutman.com/insights/fdas-2026-guidance-on-general-wellness-devices-policy-for-low-risk-devices/>.

### What FDA will enforce against (disqualifying claims)
- Reference to a **specific disease or diagnostic threshold**.
- Implies medical use, guides clinical decision-making, or substitutes for an FDA-authorized device.
- Includes alarms directing medical management.
- "Intended for the management of a disease or condition."

### Concrete autism examples
- "Diagnoses autism" → SaMD (Canvas Dx-style; De Novo or 510(k) required).
- "Treats autism" → SaMD.
- "Helps your child learn / supports family routines" → general wellness; outside FDA enforcement.
- "Detects meltdowns from biosignals" (marketed as detection of an event with clinical significance) → almost certainly SaMD.
- "Documents what the user shows you" (passive log for parent reflection) → general wellness; outside FDA enforcement.
- "Promotes relaxation, mindfulness, meditation; reduces stress, fatigue, isolation" → wellness; explicit FDA examples for mental wellness fall here. Source: <https://hooperlundy.com/fdas-new-digital-health-guidance-signal-shift-for-wellness-devices-and-cds/>.

### Important boundary nuance
- The 2026 guidance allows products to **inform users that "evaluation by a healthcare professional may be appropriate"** without identifying specific diseases, characterizing output as abnormal/diagnostic, providing clinical thresholds, or providing ongoing alerts intended to manage a condition. This is the safe path for an autism wellness app to nudge toward a clinician without becoming a SaMD.

## FDA mental-health digital devices guidance
- FDA's 2024+ work via Digital Health Advisory Committee on AI-enabled digital mental health devices and wellness products. <https://www.fda.gov/media/189391/download>.
- Categories of FDA-authorized digital mental health SaMD: CBT software, VR behavioral therapy, digital therapeutics for ADHD, biofeedback devices, **pediatric ASD diagnosis aids** (Canvas Dx), attention-task recorders.

# Disability and autism — substantive rights framework

## ADA — Americans with Disabilities Act
- **Title II** — public entities including public schools, state/local government services. Effective accessibility for digital services (DOJ 2024 final rule mandates WCAG 2.1 AA for state/local government web/mobile content; 2026/2027 deadlines depending on size).
- **Title III** — public accommodations. Courts split on whether websites/apps are "places of public accommodation" — Eleventh and Ninth Circuit split persists. Most large platforms comply with WCAG 2.1 AA defensively.

## Section 504 of the Rehabilitation Act of 1973
- Applies to recipients of federal funding (incl. nearly all public schools and many universities). Free Appropriate Public Education (FAPE) for students with disabilities. ED OCR enforcement.
- 504 plans common for autistic students who don't qualify under IDEA. Assistive technology as accommodation.

## IDEA — Individuals with Disabilities Education Act
- Federal special-education statute. IEP (Individualized Education Program) requirement. Specific autism eligibility category.
- 34 CFR Part 300. Includes assistive-technology device + assistive-technology service provisions (§300.105–§300.106).
- IEP teams may include AAC and other tech as necessary related services.

## Combined Autism Care Act of 2024 (CARES Act of 2024)
- Reauthorization of the Autism CARES Act funding research, training, services. Federal funding pipeline relevant for grants/partnerships.

## Consent and minors
- Federal level: handled via state law plus COPPA/HIPAA/FERPA frameworks.
- State level: highly variable (e.g., California allows minors 12+ to consent to mental health treatment; other states require parental).
- For a B2C app: parental consent recommended for all minor data; under-13 mandatory under COPPA.

# Accessibility / education

- Section 508 — federal procurement accessibility (ICT Refresh — adopts WCAG 2.0 AA; modernization to WCAG 2.1/2.2 in progress).
- ADA Title II 2024 final rule — WCAG 2.1 AA for state/local government web/mobile.
- ADA Title III — courts apply WCAG 2.1 AA as de facto standard via consent decrees.
- IDEA + Section 504 — assistive technology and accessible educational materials (AEM).

# Marketing & advertising claims

## Authority
- FTC — primary; deceptive/unfair practices; CO-PPA enforcement.
- FDA — health claims for regulated products.
- State AGs — consumer protection enforcement; very active in children/health space (TX, NY, CA, MA).

## Rules
- FTC Endorsement Guides — testimonial requirements. Updated 2023.
- CO-PPA 16 CFR 312.4 — child-directed advertising rules.
- COPPA + state laws — limits on targeted ads to minors.
- Health claims must be substantiated (`competent and reliable scientific evidence` standard for non-drug products).

## Concrete rules for the autism wellness/education app
- Cannot claim diagnosis, treatment, or detection of autism without FDA clearance/authorization.
- Cannot serve targeted ads to known under-13 users; minimal data collection per COPPA.
- Endorsements/testimonials from parents must reflect typical experience or be disclosed otherwise.
- Plan for state-by-state privacy compliance (especially CA, WA, MD, NY, CO, CT) — this is operationally significant.

# Sources
- [FDA — General Wellness Policy 2026 (Troutman analysis)](https://www.troutman.com/insights/fdas-2026-guidance-on-general-wellness-devices-policy-for-low-risk-devices/) — retrieved 2026-05-02
- [FDA — General Wellness 2026 update (Faegre Drinker)](https://www.faegredrinker.com/en/insights/publications/2026/1/key-updates-in-fdas-2026-general-wellness-and-clinical-decision-support-software-guidance) — retrieved 2026-05-02
- [FDA digital mental health devices guidance (PDF)](https://www.fda.gov/media/189391/download) — retrieved 2026-05-02
- [FDA wellness / CDS digital health guidance shift (Hooper Lundy)](https://hooperlundy.com/fdas-new-digital-health-guidance-signal-shift-for-wellness-devices-and-cds/) — retrieved 2026-05-02
- [Canvas Dx ASD diagnostic aid (NY DOH report)](https://www.health.ny.gov/health_care/medicaid/ebbrac/meetings/2024/docs/2024-11-21_canvas_rpt.pdf) — retrieved 2026-05-02
- [HHS — Access right + health apps + APIs](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html) — retrieved 2026-05-02
- [FTC HBNR final rule](https://www.federalregister.gov/documents/2024/05/30/2024-10855/health-breach-notification-rule) — retrieved 2026-05-02
- [FTC HBNR 2024 update](https://www.ftc.gov/business-guidance/blog/2024/04/updated-ftc-health-breach-notification-rule-puts-new-provisions-place-protect-users-health-apps) — retrieved 2026-05-02
- [eCFR 16 CFR Part 312 — COPPA](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312) — retrieved 2026-05-02
- [CRS — Rights of Students with Disabilities (IDEA, 504, ADA)](https://www.congress.gov/crs-product/R48068) — retrieved 2026-05-02
