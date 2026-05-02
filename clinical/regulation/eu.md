---
jurisdiction: EU
last_reviewed: 2026-05-02
---

# Status

Research file, not legal advice. EU legal counsel required before launch (member-state-by-member-state for some items). The EU's regime is the most prescriptive — MDR for devices, GDPR for data, AI Act layered on top of both, plus the European Accessibility Act now in force. Wellness/SaMD line is materially clearer here than in LATAM thanks to MDCG 2019-11 (rev. 1, 2025).

# Data protection

## GDPR
- **Regulation (EU) 2016/679 — General Data Protection Regulation.** Applies extraterritorially when targeting EU data subjects (Art. 3).
- Health data: **Article 9** — special category. Processing prohibited unless specific exception (explicit consent, vital interest, etc.).
- Lawful bases (Art. 6) + Art. 9 exception combined are required for any health-data processing.

## Article 8 — Children's digital consent (Information Society Services)
- Default age **16** for direct consent to ISS where consent is the lawful basis.
- Member states may lower to **13** — and many have. Below that age, parental authorization required.

### Member state digital age of consent (current, complete)
- **13:** Belgium, Denmark, Estonia, Finland, Latvia, Malta, Portugal, Sweden (and UK pre-Brexit, retained 13 under UK GDPR)
- **14:** Austria, Bulgaria, Cyprus, Italy, Lithuania, Spain
- **15:** Czech Republic, France, Greece
- **16:** Croatia, Germany, Hungary, Ireland, Luxembourg, Netherlands, Poland, Romania, Slovakia, Slovenia
- Source: <https://euconsent.eu/digital-age-of-consent-under-the-gdpr/>.
- This is **only** when consent is the lawful basis for processing under GDPR. Other lawful bases (legitimate interests, contractual necessity) operate under different rules.
- Practical implication for an autism wellness app: build a configurable threshold per market.

## Penalties
- Up to €20M or 4% of global annual turnover, whichever higher (Art. 83).
- Member-state DPAs and EDPB very active in children's-data and health-data enforcement.

# Medical device classification

## MDR — Regulation (EU) 2017/745
- In force since 2021-05-26 (Date of Application).
- Replaces MDD (Directive 93/42/EEC) and AIMDD (90/385/EEC). Major scope expansion.
- Classification rules in Annex VIII; risk classes I, IIa, IIb, III.
- Notified Body involvement required for Class IIa, IIb, III.

### Software classification
- **MDCG 2019-11 — Qualification and Classification of Software in Regulation (EU) 2017/745 — MDR and Regulation (EU) 2017/746 — IVDR**. Revised Rev. 1 published **2025-06-17**. Source: <https://health.ec.europa.eu/latest-updates/update-mdcg-2019-11-rev1-qualification-and-classification-software-regulation-eu-2017745-and-2025-06-17_en>.
- Defines `Medical Device Software (MDSW)` = software intended to be used, alone or in combination, for a purpose specified in the MDR Art. 2(1) definition of medical device.
- **MDCG 2019-11 Rule 11** (MDR-specific) classifies most clinical-decision-support and software-driven-diagnosis as Class IIa, with upgrades to IIb or III if the information drives critical decisions. **This is the binding rule for SaMD in EU.**

### Wellness / education boundary in EU
- MDR Recital 19: software for general purposes, even when used in a healthcare setting, **or software intended for lifestyle and well-being purposes**, is **not a medical device**.
- MDCG 2019-11 (rev. 1, 2025) provides explicit examples to delineate the line. Apps that track nutrition for weight management, inform users of heart rate, or support fitness/well-being are **not** MDSW. Apps providing information for the treatment or diagnosis of a disease or condition are MDSW.
- **Annex XVI** (non-medical-purpose products covered by MDR despite no medical purpose) — narrowly listed (e.g., cosmetic contact lenses, dermal fillers, liposuction equipment). Generally not relevant for an autism wellness/education app.

### Disqualifying claims (push into MDSW)
- "Diagnoses autism" → MDSW, Class IIa minimum.
- "Treats autism" → MDSW.
- "Detects meltdowns from biosignals" (marketed as detection of clinical event) → MDSW.
- "Reduces autism symptoms" → MDSW.
- "Screens for autism" → MDSW (screening = early diagnosis under MDR definition).

### Likely-wellness claims
- "Helps your child learn / supports family routines / educational content" → not MDSW.
- "Documents what the user shows you" (passive log for parent reflection) → not MDSW.
- "Promotes well-being and family communication" → not MDSW.

### Practical: app stores
- The European Commission has confirmed that app stores and developers fall under MDR for medical-purpose apps. Source: <https://www.osborneclarke.com/insights/eu-confirms-app-stores-and-developers-are-subject-medical-device-laws>. CE-marking and Notified Body certification expected before market access for MDSW.

# EU AI Act — Regulation (EU) 2024/1689

## Key dates
- Published OJ 2024-07-12. **Article 5 prohibitions in force 2025-02-02.** General-purpose AI obligations 2025-08-02. High-risk AI obligations 2026-08-02 (most). Full application 2027-08-02 for some provisions.

## Article 5 prohibitions relevant to a children's wellness app
- **Art. 5(1)(a):** AI systems deploying subliminal techniques or purposefully manipulative/deceptive techniques materially distorting behavior, causing significant harm. **Prohibited.**
- **Art. 5(1)(b):** AI systems exploiting vulnerabilities based on **age, disability, or specific socio-economic circumstances**. **Prohibited.** Source: <https://artificialintelligenceact.eu/article/5/>.
- An AI system serving autistic children (vulnerability based on age + disability) carries explicit Art. 5(1)(b) risk if its design distorts behavior with significant harm. Strong design-for-trust posture and harm-prevention review required.

## Article 6 + Annex III — high-risk classification
- AI systems used in **education and vocational training** (Annex III(3)) — including those determining access, evaluating learning outcomes, assessing learning behavior — are classified high-risk.
- AI in **healthcare** is high-risk via the MDR safety-component pathway (Art. 6(1)).
- A pure educational AI tool for autistic children that influences educational outcomes/pathways may be high-risk under Annex III(3) — full conformity assessment required.
- A non-decision-influencing AI (e.g., AI that explains content but doesn't track or grade) may be limited-risk.

## Limited-risk transparency obligations
- AI systems intended to interact with natural persons (chatbots, conversational agents) must inform users they are interacting with AI (Art. 50). Particularly important for an app where the child may be the direct user.

# Accessibility / education

## European Accessibility Act (EAA) — Directive (EU) 2019/882
- **Enforcement date: 2025-06-28**. New products and services placed on market after this date must comply.
- Existing products/services on market before 2025-06-28 have until **2030-06-28**.
- Applies to e-commerce, banking, transport, telecommunications, e-readers, and many digital services for consumers.
- Penalties: **up to €100,000 or 4% of annual revenue** depending on member state.
- Source: <https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en>.
- Practical: an autism wellness/education app sold to consumers in any EU member state must meet EN 301 549 (which references WCAG 2.1 AA, with parts moving to WCAG 2.2).

## Web Accessibility Directive 2016/2102
- Public-sector websites/apps must meet EN 301 549 / WCAG 2.1 AA. Predates EAA; remains in force for State entities.

## Education
- Education is a member-state competence; EU sets framework via European Strategy for the Rights of Persons with Disabilities 2021–2030.
- CRPD ratified by EU and all member states.

# Marketing & advertising claims

## Authority
- Member-state market-surveillance authorities for MDR.
- National DPAs for GDPR.
- AI Act enforcement: AI Office (EU level) + national competent authorities.
- Consumer protection: national consumer authorities; CPC Network for cross-border.

## Rules
- **Unfair Commercial Practices Directive 2005/29/EC** — misleading practices prohibited.
- Health-claim regulation: limited to authorized claims for foods (Reg 1924/2006); device claims only for CE-marked devices; therapeutic claims only for authorized medicines.
- Audiovisual Media Services Directive 2018/1808 — protections for minors in advertising.
- **Digital Services Act (DSA)** — Reg (EU) 2022/2065 — applies to online platforms. Targeted advertising to minors based on profiling: **prohibited** (Art. 28).
- Digital Markets Act (DMA) — relevant if integrating with gatekeepers' app stores.

## Concrete rules for the autism wellness/education app
- No diagnostic/therapeutic/screening claims about autism without CE marking as MDSW (Class IIa+).
- Cannot rely on subliminal/manipulative design or design that exploits child/disability vulnerabilities (AI Act Art. 5).
- If AI is used in educational outcome influence, prepare for high-risk conformity assessment by 2026-08-02.
- Must comply with EAA accessibility (WCAG 2.1 AA / EN 301 549) for products placed on EU consumer market after 2025-06-28.
- No targeted advertising to minors based on profiling (DSA Art. 28).
- GDPR Art. 8 digital age of consent varies by member state — operationalize 13–16 thresholds.

# Sources
- [GDPR Art. 8](https://gdpr-info.eu/art-8-gdpr/) — retrieved 2026-05-02
- [Digital age of consent — euConsent compilation](https://euconsent.eu/digital-age-of-consent-under-the-gdpr/) — retrieved 2026-05-02
- [MDCG 2019-11 rev. 1 (2025) update](https://health.ec.europa.eu/latest-updates/update-mdcg-2019-11-rev1-qualification-and-classification-software-regulation-eu-2017745-and-2025-06-17_en) — retrieved 2026-05-02
- [MDCG 2019-11 (original)](https://health.ec.europa.eu/system/files/2020-09/md_mdcg_2019_11_guidance_en_0.pdf) — retrieved 2026-05-02
- [MDR — Regulation (EU) 2017/745](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745) — retrieved 2026-05-02
- [MDR coverage of app stores (Osborne Clarke)](https://www.osborneclarke.com/insights/eu-confirms-app-stores-and-developers-are-subject-medical-device-laws) — retrieved 2026-05-02
- [EU AI Act Article 5](https://artificialintelligenceact.eu/article/5/) — retrieved 2026-05-02
- [EU AI Act Annex III](https://artificialintelligenceact.eu/annex/3/) — retrieved 2026-05-02
- [European Accessibility Act enforcement](https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en) — retrieved 2026-05-02
- [EAA — Bird & Bird guidance](https://www.twobirds.com/en/insights/2025/eu-accessibility-deadline--the-european-accessibility-act-comes-into-force) — retrieved 2026-05-02
- [Children's vulnerability under AI Act (5Rights)](https://5rightsfoundation.com/ai-systems-that-exploit-the-vulnerabilities-of-children-are-now-illegal-in-the-eu/) — retrieved 2026-05-02
