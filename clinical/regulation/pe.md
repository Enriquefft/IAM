---
jurisdiction: PE
last_reviewed: 2026-05-02
---

# Status

This file is research, not legal advice. Local Peruvian legal counsel is required before launch. Several boundaries below are ambiguous in primary text and rely on regulator practice; flagged as `Open question` where so.

# Data protection

## Primary law and regulator
- Ley N° 29733 — Ley de Protección de Datos Personales (LPDP). Published 2011-07-03. Constitutional anchor: Constitución Política, art. 2.6. Canonical text: <https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23>.
- Reglamento vigente: Decreto Supremo N° 016-2024-JUS, published 2024-11-30 in El Peruano. Replaces the 2013 Reglamento (DS 003-2013-JUS). Entry into force: 2025-03-29 (120 days after publication).
- Authority: Autoridad Nacional de Protección de Datos Personales (ANPDP), within the Ministerio de Justicia y Derechos Humanos. LPDP art. 32–34.

## Sensitive data and health
- LPDP art. 2.5: health information ("información relacionada a la salud") is `dato sensible`. Sexual life, biometrics-as-identifier, ethnic origin, religion, political opinion, union affiliation are all sensitive.
- LPDP art. 13.6: processing sensitive data requires **written consent**, even where a public-interest legal basis exists.
- LPDP art. 14.6: consent exception for health data when necessary for medical diagnosis/treatment by a licensed health professional bound by professional secrecy, or for epidemiological studies with proper anonymization. **A wellness/education app is not a health-care setting and does not benefit from this exception.**

## Children and minors (post-2024 Reglamento)
- DS 016-2024-JUS introduces a digital age threshold:
  - **Under 14:** parental/guardian consent required to process personal data.
  - **14 and over:** the adolescent may consent directly, provided information is delivered in language they can understand.
- Consent is prohibited entirely where the underlying good/service has its own age restriction.
- Online consent flows must include "reasonable identity verification efforts" — the Reglamento does not prescribe a specific mechanism (Open question on what passes regulator inspection).
- Collection of "family group data" of children without parental consent is prohibited.
- LPDP art. 13.3 (still in force): minors and adolescents otherwise exercise their LPDP rights through legal representatives.

## New 2024 controller obligations relevant to a wellness/education app
- Mandatory Data Protection Officer (DPO). Phased timeline 1–4 years depending on annual sales (smallest entities last). Source: IAPP summary <https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per->.
- Documented security policies with dated versions; access controls; secure equipment maintenance.
- 48-hour breach notification to ANPDP and to affected individuals (limited exceptions).
- Neural data newly classified as sensitive — relevant if the product ever incorporates EEG, eye-tracking-derived inferences, or similar biosignals.
- International transfers: only to jurisdictions with adequate protection, or via standard contractual clauses, model clauses, or recognized Codes of Conduct.
- Right to data portability: 6-month transition after Reglamento entry into force (so portable from ~2025-09-29).
- Direct-consent rule for advertising/commercial prospection on first contact; if denied, no further attempts.

## Penalties
- LPDP art. 39: leves up to 5 UIT, graves 5–50 UIT, muy graves 50–100 UIT (1 UIT = S/ 5,350 in 2025; check annual update). Maximum exposure ~S/ 535,000 per very-serious infraction.
- Open question: aggregation rules and recidivism multipliers under DS 016-2024-JUS — not fully extracted in available secondary sources.

# Medical device classification

## Authority and primary instruments
- DIGEMID — Dirección General de Medicamentos, Insumos y Drogas, MINSA. <https://www.digemid.minsa.gob.pe/>.
- Ley N° 29459 — Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios (2009).
- Reglamento general: Decreto Supremo N° 016-2011-SA — Reglamento para el Registro, Control y Vigilancia Sanitaria de Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios. <https://www.digemid.minsa.gob.pe/Archivos/Normatividad/2011/DS_016-2011.pdf>.
- Clasificación específica: **Decreto Supremo N° 003-2020-SA** — Reglamento que establece las Reglas de Clasificación y los Principios Esenciales de Seguridad y Desempeño de los Dispositivos Médicos. Published 2020-02-05; entered into force 6 months later (2020-08-05). Three títulos, 10 artículos, 2 disposiciones complementarias, 2 anexos. Aligned with IMDRF / ex-GHTF guidance. <https://busquedas.elperuano.pe/normaslegales/aprueban-reglamento-que-establece-las-reglas-de-clasificacio-decreto-supremo-n-003-2020-sa-1853029-4/>.
- Resolución Ministerial 234-2017/MINSA — supplemental classification criteria.

## Risk classes
- **Clase I** — bajo riesgo. Notificación / registro simplificado. Few weeks.
- **Clase II** — riesgo moderado. Full evaluation. ~6–12 months.
- **Clase III** — alto riesgo. Full evaluation. ~6–12 months.
- **Clase IV** — riesgo crítico. Most stringent.
- (Peru's four-class scheme is the IMDRF model, not the EU/FDA three-class system.)

## Software as a Medical Device (SaMD)
- Under DS 003-2020-SA Peru aligns with IMDRF: **autonomous software intended for one or more medical purposes is a dispositivo médico activo** and must be classified per the same risk rules.
- Software embedded in or controlling a medical device is treated as part of that device.
- Open question: Peru has issued no public guidance dedicated to mobile health apps or SaMD analogous to FDA "General Wellness" or MDCG 2019-11. Practice is to read the IMDRF rules directly.

## Wellness / education boundary in Peru — where the line sits
The legal hook is the **intended purpose** declared by the manufacturer. If the declared purpose is medical (diagnosis, prevention, monitoring, prediction, prognosis, treatment, alleviation of disease/injury/disability, or replacement/modification of anatomy or physiological process), it is a dispositivo médico — irrespective of whether the app is "just an app." If the declared purpose is non-medical (lifestyle, education, general well-being, documentation for personal reflection), it falls outside DIGEMID's medical-device regime.

Peru does **not** publish a wellness-specific safe harbor. The line is drawn entirely by your intended-purpose statement and your marketing claims. INDECOPI will police whether your claims match what the product actually does (see below).

### Disqualifying claims (would push the product into DIGEMID registration)
- "Diagnostica autismo" / "Diagnoses autism" — SaMD. Class II or III likely.
- "Trata el autismo" / "Treats autism" — SaMD.
- "Detecta crisis sensoriales / meltdowns a partir de biosignales" — SaMD if marketed as detection of a medical event.
- "Reduce los síntomas del TEA" — SaMD.
- "Sustituye terapia ABA / fonoaudiología" — SaMD.
- "Predice regresiones del desarrollo" — SaMD.
- Any claim of clinical validity, accuracy, sensitivity/specificity for a clinical condition — SaMD.

### Likely-wellness claims (still need INDECOPI review for truthfulness, see Marketing section)
- "Ayuda a tu hijo a aprender" / "Helps your child learn" — wellness/education, provided no medical-outcome claim.
- "Documenta lo que el usuario te muestra" (passive log for parent reflection) — wellness/education.
- "Apoya la rutina familiar" — wellness.
- "Educa a la familia sobre estrategias de comunicación" — education content, not a medical claim.
- Tracking activity, mood self-report, sleep — wellness, provided no diagnostic threshold and no disease claim.

### Boundary cases
- "Detecta señales de alerta de TEA" — Open question. Tamizaje/screening claims sit in a gray zone. Ley 21.545 in Chile and Peru's MINSA tamizaje guidance treat early-warning detection as a clinical activity. Recommendation: do not make screening claims in Peru without DIGEMID consultation.
- Recommending a clinician consult after observing a behavior pattern — likely permissible if framed as generic guidance, not as a clinical decision-support output (Open question; FDA 2026 guidance allows this for general wellness; no direct Peruvian analogue).

# Disability and autism — substantive rights framework

## Ley N° 30150 — Personas con TEA
- Published 2014-01-08. <https://www.leyes.congreso.gob.pe/Documentos/Leyes/30150.pdf>.
- Establishes legal framework for early detection, early intervention, integrated education, vocational training, and labor/social inclusion of people with TEA. Anchored in Constitución art. 7 and Ley 29973.
- Right to non-discrimination, including in private health insurance contracting.
- SIS-affiliated TEA persons get preferential care.
- Reglamento: DS 001-2015-MIMP and Plan Nacional para Personas con TEA.
- Lead body: Ministerio de la Mujer y Poblaciones Vulnerables (MIMP) drafts the Plan Nacional.

## Ley N° 29973 — Persona con Discapacidad
- Published 2012-12-24. <https://www.leyes.congreso.gob.pe/documentos/leyes/29973.pdf>.
- CONADIS (Consejo Nacional para la Integración de la Persona con Discapacidad) — implementing/oversight body.
- **Art. 23 — TIC accessibility:** MTC, in coordination with CONADIS, must promote access to ICT. Public and private entities, higher-education institutions, and persons providing consumer-information services through web portals must implement accessibility for different disability types. **This applies to private commercial providers, not only the State.**
- Art. 15 — right of access to spaces and services in equal conditions, autonomously and safely.
- Open question: enforcement against pure-play apps has been weak; CONADIS guidance on mobile-app accessibility specifically is not published as of last review.

## Consent and minors (intersection with health/clinical research)
- Civil Code (Código Civil) art. 42 onward — capacity rules. Minors act through legal representatives; adolescents have limited capacity.
- Código de los Niños y Adolescentes (Ley 27337) — best-interest principle (art. IX, Título Preliminar). Right to be heard scaled to maturity.
- For health interventions: consent is given by patria potestad holders (parents/guardians); the minor's assent is required when developmentally appropriate. No statutory "Gillick competence" doctrine; clinicians use professional judgment.
- For data processing in a wellness app aimed at minors: see Data Protection section above. Under-14 requires parental consent; 14+ may consent directly.

# Accessibility / education

## Web and ICT accessibility
- Ley 29973 art. 23 — substantive obligation (see above).
- Resolución Ministerial 126-2009-PCM — referenced WCAG-aligned accessibility for State websites. Not formally updated to WCAG 2.1/2.2 as a national binding standard.
- NTP-ISO/IEC 40500:2012 — Peruvian Technical Standard adopting WCAG 2.0 by reference. Voluntary unless cited in a procurement spec.
- Open question: no published binding national obligation for private-sector mobile apps to meet WCAG 2.2. Best practice: meet WCAG 2.2 AA voluntarily; document for procurement readiness.

## Education sector
- Ley General de Educación 28044 — inclusive education obligation.
- Ministerio de Educación (MINEDU) — Servicios de Apoyo y Asesoramiento para la Atención a las Necesidades Educativas Especiales (SAANEE).
- Procurement of education software in public schools requires registration on Catálogo Electrónico de Acuerdos Marco (PERÚ COMPRAS) and may impose accessibility specs case-by-case.

# Marketing & advertising claims

## Authority
- INDECOPI — Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual.
- Comisión de Fiscalización de la Competencia Desleal (CCD).

## Governing rules
- **Decreto Legislativo N° 1044 — Ley de Represión de la Competencia Desleal.**
  - Art. 8 — actos de engaño (deceptive acts).
  - Art. 17 — publicidad que viola normas imperativas. **Critical for health: art. 119 of Ley General de Salud (Ley 26842) prohibits offering treatments whose efficacy has not been scientifically proven.**
- Código de Protección y Defensa del Consumidor (Ley 29571) — art. 1.1.b, 32 (children as specially-vulnerable population), 80 (minors in commercial environments).
- INDECOPI 2025: 1,400+ open investigations for unfair competition; aggressive posture on health and digital claims. Source: <https://www.infobae.com/peru/2025/10/17/indecopi-inicia-mas-de-1400-investigaciones-por-competencia-desleal-y-advierte-sobre-publicidad-enganosa-en-redes-sociales/>.

## Concrete rules for a wellness/education app targeting families with autistic children
- Cannot claim therapeutic, diagnostic, or curative effect on TEA without DIGEMID registration AND scientific substantiation (art. 119 Ley 26842 + art. 17 DL 1044).
- Cannot use child testimonials or imagery without verified parental consent.
- Cannot advertise children-targeted services that exploit vulnerability (Código del Consumidor).
- Cannot use the words "diagnóstico", "tratamiento", "cura", "terapia clínica", "intervención clínica" to describe app outputs unless registered as a dispositivo médico.
- Maximum advertising fines: into the millions of soles for serious cases (per public INDECOPI casework).

# Sources
- [Ley 29733 LPDP — texto oficial](https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23) — retrieved 2026-05-02
- [Ley 29733 actualizada (LP)](https://lpderecho.pe/ley-proteccion-datos-personales-ley-29733-actualizada/) — retrieved 2026-05-02
- [DS 016-2024-JUS — IAPP analysis](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-) — retrieved 2026-05-02
- [Reglamento LPDP 2013 (legacy)](https://www.smv.gob.pe/Uploads/Reglamento_LPDP.pdf) — retrieved 2026-05-02
- [DS 016-2011-SA reglamento de productos farmacéuticos y dispositivos médicos](https://www.digemid.minsa.gob.pe/Archivos/Normatividad/2011/DS_016-2011.pdf) — retrieved 2026-05-02
- [DS 003-2020-SA reglas de clasificación de dispositivos médicos](https://busquedas.elperuano.pe/normaslegales/aprueban-reglamento-que-establece-las-reglas-de-clasificacio-decreto-supremo-n-003-2020-sa-1853029-4/) — retrieved 2026-05-02
- [DIGEMID — Dispositivos Médicos](https://www.digemid.minsa.gob.pe/webDigemid/registro-sanitario/dispositivos-medicos/) — retrieved 2026-05-02
- [ABC de la regulación de Dispositivos Médicos en Perú (PRC&P, 2024)](https://blog.prcp.com.pe/wp-content/uploads/2024/04/Sobre-el-ABC-de-la-regulacio%CC%81n-de-Dispositivos-Me%CC%81dicos-en-Peru%CC%81-.pdf) — retrieved 2026-05-02
- [Ley 30150 TEA](https://www.leyes.congreso.gob.pe/Documentos/Leyes/30150.pdf) — retrieved 2026-05-02
- [Ley 29973 Persona con Discapacidad](https://www.leyes.congreso.gob.pe/documentos/leyes/29973.pdf) — retrieved 2026-05-02
- [INDECOPI — investigaciones por competencia desleal 2025](https://www.infobae.com/peru/2025/10/17/indecopi-inicia-mas-de-1400-investigaciones-por-competencia-desleal-y-advierte-sobre-publicidad-enganosa-en-redes-sociales/) — retrieved 2026-05-02
- [INDECOPI — riesgos en línea para niños 2025](https://larepublica.pe/economia/2025/08/16/dia-del-nino-indecopi-alerta-sobre-riesgos-en-linea-para-ninos-por-apuestas-y-publicidad-invasiva-asi-puedes-denunciarlo-evat-994848) — retrieved 2026-05-02
