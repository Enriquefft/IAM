---
jurisdiction: MX
last_reviewed: 2026-05-02
---

# Status

Research file, not legal advice. Mexican legal counsel required before launch. The SaMD/wellness boundary in Mexico is in active regulatory transition (NOM-241-SSA1-2025 published; SaMD-specific guidance evolving since the 2023 working group). Several items flagged `Open question`.

# Data protection

## Two parallel laws
Mexico runs a split system:
- **LFPDPPP** — Ley Federal de Protección de Datos Personales en Posesión de los Particulares (2010). Applies to private-sector controllers (any commercial wellness app falls here). <https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf>.
- **LGPDPPSO** — Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (2017). Applies to public sector entities (relevant if selling to a public school, IMSS, INSABI/IMSS-Bienestar). <https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf>.
- Authority: **INAI** (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales). 2024–2025 reform: INAI being subsumed/replaced by an Anti-Corruption-and-Transparency Secretariat per constitutional reform; Open question on final status as of 2026-05.

## Sensitive data and health
- LFPDPPP art. 3.VI defines `datos personales sensibles`: those whose misuse could cause discrimination or grave risk; explicitly includes "estado de salud presente y futuro", genetic information, religious/philosophical/moral beliefs, union affiliation, political opinions, sexual preference, racial/ethnic origin.
- LFPDPPP art. 9: processing sensitive data requires **express and written consent** (handwritten signature, electronic signature, or other authentication mechanism).
- LFPDPPP art. 10.II: consent exception for medical care/diagnosis when subject is unable to consent — narrowly read; does not cover wellness apps.

## Children
- LFPDPPP art. 8 (last paragraph) and Reglamento art. 14 — minors and persons under guardianship: consent must follow civil-law representation rules. Practical effect: parental consent needed; no specific digital age threshold like GDPR Article 8.
- General Law on Rights of Children and Adolescents (LGDNNA) — requires safeguarding the principio del interés superior del niño; INAI has issued guidelines on processing children's data in the educational/online context but they are non-binding orientations.
- LGDNNA art. 76 — special protections for children's image and personal data.

## Health data exception
- Treatment for medical care, prevention, diagnosis, treatment, or health-services management is permitted under both laws when the data subject cannot consent and treatment is by health professionals bound by professional secrecy (LFPDPPP art. 10.II; Ley General de Salud). **Wellness app providers are not health-care providers and do not benefit.**

## Penalties
- LFPDPPP art. 64–65: fines from 100 to 320,000 días de salario mínimo for serious violations; doubled if sensitive data is involved (so up to 640,000 days). At 2025 UMA (~$113.14/day) the maximum exposure exceeds MX$72M.
- Criminal sanctions for data theft for profit involving sensitive data: up to 6 years in prison (Código Penal Federal, refs in LFPDPPP).

# Medical device classification

## Authority and primary instruments
- **COFEPRIS** — Comisión Federal para la Protección contra Riesgos Sanitarios.
- Ley General de Salud (LGS) — articles 194 onward on insumos para la salud.
- Reglamento de Insumos para la Salud (RIS) — article 83 establishes risk classes.
- **NOM-241-SSA1-2025** — Buenas Prácticas de Fabricación de Dispositivos Médicos. Section 11.16 introduces specific provisions for SaMD production lines. <https://consultorsalud.com.mx/cofepris-fabricacion-dispositivos-medicos/>.

## Risk classes (3-tier, FDA-style)
- **Clase I** — low risk. Notification only.
- **Clase II** — moderate risk. Sanitary registration required.
- **Clase III** — high risk. Sanitary registration + clinical evidence.

## Software as a Medical Device
- COFEPRIS established a SaMD Working Group; revised SaMD definition published July 2023. Software qualifies as a dispositivo médico when it has one or more medical purposes regardless of whether it is hardware-attached. First innovative SaMD authorizations granted in 2024.
- Source: <http://www.thema-med.com/es/2024/06/21/messico-prime-autorizzazioni-di-innovativi-software-as-a-medical-device-samd/> and <https://saluddigital.com/big-data/la-regulacion-de-software-y-aplicaciones-medicas-y-los-avances-de-la-cofepris-en-mexico/>.
- Open question: a published, English/Spanish SaMD guidance comparable to FDA "General Wellness" or MDCG 2019-11 has not yet been issued. Practitioners apply IMDRF rules and prior COFEPRIS criteria for Disposiciones Administrativas case-by-case.

## Wellness / education boundary in Mexico
The boundary is set by the manufacturer's intended-use statement (LGS art. 262 — definition of dispositivo médico; depends on `finalidad` declared). Mexico has begun explicit SaMD regulation but has **not** published a wellness safe-harbor analogous to FDA's 2019/2026 General Wellness policy.

### Disqualifying claims (would require COFEPRIS sanitary registration as SaMD)
- "Diagnostica autismo" — SaMD, likely Clase II.
- "Tratamiento del trastorno del espectro autista" — SaMD.
- "Detecta meltdowns mediante biosignales" — SaMD.
- "Reduce los síntomas de TEA en X%" — SaMD plus efficacy-claim regulation under LGS.
- Screening, tamizaje, prediction of clinical outcomes — SaMD.

### Likely-wellness claims
- "Apoyo educativo y de comunicación familiar" — wellness/education.
- "Documenta el comportamiento que el niño te muestra para tu reflexión personal" — wellness; not medical reasoning.
- "Aprendizaje y rutinas familiares" — wellness/education.

### Boundary cases
- COFEPRIS' enforcement against pure wellness/education apps has been limited but they have explicit jurisdiction over health claims through PUBLICIDAD (Reglamento de la Ley General de Salud en Materia de Publicidad). See Marketing section.

# Disability and autism — substantive rights framework

## Ley General para la Atención y Protección a Personas con la Condición del Espectro Autista
- Published in DOF 2015-04-30; in force 2015-05-01. <https://www.diputados.gob.mx/LeyesBiblio/pdf/LGAPPCEA_270516.pdf>.
- Purpose: integration and inclusion of people with autism via constitutional and treaty rights.
- Establishes rights to clinical evaluation, specialized therapies, education, employment support, cultural/recreational activities.
- Creates the Comisión Intersecretarial para la Atención y Protección de las Personas con la Condición del Espectro Autista.
- **Important:** The Supreme Court (SCJN 2016) declared invalid the article on "certificados de habilitación" used to authorize work for autistic persons — those provisions are unenforceable.

## Ley General para la Inclusión de las Personas con Discapacidad (2011)
- CONADIS Mexico — Consejo Nacional para el Desarrollo y la Inclusión de las Personas con Discapacidad.
- Art. 32 — accessibility of physical and digital environments.

## Consent and minors
- Civil Codes (federal and state): minors act through parents or guardians; adolescents 12+ have right to be heard.
- LGDNNA art. 71–73: clinical interventions on children require parental consent + minor's consent appropriate to maturity. No statutory digital-age-of-consent.

# Accessibility / education

- LGS and LFPDPPP have no app-accessibility-specific mandate.
- Norma Mexicana NMX-I-292-NYCE-2018 — adopts ISO/IEC 40500:2012 (WCAG 2.0). Voluntary.
- Federal procurement (Ley de Adquisiciones del Sector Público) may require accessibility specs project-by-project.
- Education: SEP — Secretaría de Educación Pública. Programa Nacional de Educación Inclusiva. Procurement of digital tools for public schools may require accessibility specs.

# Marketing & advertising claims

## Authority
- COFEPRIS — health advertising oversight under Reglamento de la Ley General de Salud en Materia de Publicidad (RLGSMP).
- **PROFECO** — Procuraduría Federal del Consumidor — under LFPC (Ley Federal de Protección al Consumidor) for general consumer-protection claims.
- IFT (Instituto Federal de Telecomunicaciones) — broadcasting/online advertising oversight where relevant.

## Health-related claims
- LGS art. 300–310 + RLGSMP: health-related advertising is regulated. Claims of therapeutic, prophylactic, rehabilitative, or detection effect for a disease are restricted to authorized health products with sanitary registration. Products without registration cannot make such claims; doing so is a sanitary infraction.
- "Engaño" / misleading practice under LFPC art. 32 — generally prohibited; consumer protection class actions possible.

## Children-targeted advertising
- LFPC art. 76 BIS — special protections in e-commerce.
- LGDNNA — protections for image/identity of minors. NOM-051-SCFI/SSA1-2010 (food-labeling reform) restricts advertising of products with specific child-directed marketing — narrow scope, but indicative of regulator posture.
- Open question: there is no comprehensive child-online-advertising rule equivalent to COPPA. INAI guidance fills part of the gap but is non-binding.

## Concrete rules for the autism wellness/education app
- Cannot claim to "diagnose", "treat", "cure", or "screen for" TEA without COFEPRIS sanitary registration.
- Cannot use child testimonials/imagery without verifiable parental consent.
- Should describe outputs as "educational content", "documentation tools", "family-routine support" — not "intervention", "therapy", "screening".

# Sources
- [LFPDPPP — texto vigente](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf) — retrieved 2026-05-02
- [LGPDPPSO — texto vigente](https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf) — retrieved 2026-05-02
- [Ley General TEA (LGAPPCEA)](https://www.diputados.gob.mx/LeyesBiblio/pdf/LGAPPCEA_270516.pdf) — retrieved 2026-05-02
- [DOF Decreto LGAPPCEA](https://www.dof.gob.mx/nota_detalle.php?codigo=5390948&fecha=30/04/2015) — retrieved 2026-05-02
- [COFEPRIS NOM-241-SSA1-2025](https://consultorsalud.com.mx/cofepris-fabricacion-dispositivos-medicos/) — retrieved 2026-05-02
- [COFEPRIS SaMD authorizations 2024 (Thema)](http://www.thema-med.com/es/2024/06/21/messico-prime-autorizzazioni-di-innovativi-software-as-a-medical-device-samd/) — retrieved 2026-05-02
- [SaludDigital — regulación SaMD COFEPRIS](https://saluddigital.com/big-data/la-regulacion-de-software-y-aplicaciones-medicas-y-los-avances-de-la-cofepris-en-mexico/) — retrieved 2026-05-02
