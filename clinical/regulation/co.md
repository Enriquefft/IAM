---
jurisdiction: CO
last_reviewed: 2026-05-02
---

# Status

Research file, not legal advice. Colombian legal counsel required before launch. SIC has issued substantive guidance on minors' data; SaMD-specific guidance from INVIMA is partial. Open questions flagged inline.

# Data protection

## Primary laws
- **Ley Estatutaria 1581 de 2012** — General data protection. <https://esdegue.edu.co/sites/default/files/Normatividad/LEY%20TRATAMIENTO%20DE%20DATOS%20-%20LEY%201581%20DE%202012.pdf>.
- **Decreto Reglamentario 1377 de 2013** (consolidated into Decreto Único Reglamentario 1074 de 2015). <https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53646>.
- Authority: **SIC** — Superintendencia de Industria y Comercio, Delegatura para la Protección de Datos Personales.
- Constitutional anchor: art. 15 Constitución (habeas data) + Sentencia C-748/2011 (constitutionality of Ley 1581).

## Sensitive data and health
- Ley 1581 art. 5 — `datos sensibles`: data affecting privacy or whose misuse may produce discrimination; explicitly includes data about health, sexual life, and biometrics.
- Ley 1581 art. 6 — processing sensitive data is **prohibited** except with express authorization of the holder; for vital interest of the holder or a third party; for nonprofit organizations processing exclusively members' data; for judicial proceedings; or for medical/sanitary purposes when subject is unable to give consent and data is used by a health professional under confidentiality. **Wellness apps do not benefit.**

## Children and minors — the unique Colombian rule
- Ley 1581 art. 7: processing personal data of minors (NNA — niños, niñas y adolescentes) is **prohibited** except when (a) it serves their best interest, (b) it respects their fundamental rights, and (c) the legal representative consents.
- **The minor must first be heard** ("derecho a ser escuchado"). Their opinion must be evaluated taking into account maturity, autonomy, and capacity to understand. Legal representative then authorizes.
- SIC Concepto and FAQ confirm this applies to all NNA (under 18). No digital age threshold splits this. Source: <https://www.sic.gov.co/content/%C2%BFlos-datos-personales-de-los-ni%C3%B1os-ni%C3%B1as-y-adolescentes-tienen-alguna-protecci%C3%B3n-especial>.
- **Practical implication for an autism app:** parental authorization is mandatory for a minor user; you must also build in an age-appropriate disclosure mechanism for the child's "ser escuchado" right. This is harder than the US/EU model.

## Database registration
- Decreto 1074 de 2015 — controllers must register databases with the Registro Nacional de Bases de Datos (RNBD) when company has total assets above thresholds (currently ~610,000 UVT in 2025).

## Penalties
- Ley 1581 art. 23: SIC may impose fines up to 2,000 SMMLV (~COP 2.6 billion in 2025), suspend/close treatment activities, and order corrective measures.
- Active enforcement; SIC publishes annual enforcement reports.

# Medical device classification

## Authority and primary instruments
- **INVIMA** — Instituto Nacional de Vigilancia de Medicamentos y Alimentos.
- **Decreto 4725 de 2005** — Régimen de registros sanitarios, permiso de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano. <https://www.invima.gov.co/sites/default/files/el-instituto/Decreto-4725-de-2005.pdf>.

## Risk classes
- Decreto 4725 art. 5 establishes 4 classes by risk:
  - **Clase I** — low risk.
  - **Clase IIa** — moderate-low risk.
  - **Clase IIb** — moderate-high risk.
  - **Clase III** — high risk.
- Classification rules in Anexo of Decreto 4725; intended purpose drives classification.

## Software as a Medical Device
- Decreto 4725 art. 6–7: software is considered a medical device based on use, application, and intended purpose declared by the manufacturer.
- INVIMA has not issued a public dedicated SaMD guidance equivalent to FDA's or MDCG 2019-11. Practice: align with IMDRF rules and submit Class I notification or Class II/III sanitary registration as appropriate.
- Open question: INVIMA fast-track / novel-software pathway — being developed; no published rule as of last review.

## Wellness / education boundary in Colombia
The line is drawn by intended purpose. INVIMA jurisdiction triggers when the software is intended for diagnosis, prevention, monitoring, prediction, prognosis, treatment, alleviation, or compensation of disease/injury/disability.

### Disqualifying claims (push into INVIMA registration)
- "Diagnóstico de autismo" — SaMD.
- "Tratamiento de TEA" — SaMD.
- "Detección automática de crisis sensoriales" — SaMD.
- "Reduce síntomas TEA" — SaMD.
- Screening / tamizaje claims — SaMD.

### Likely-wellness claims
- "Apoyo educativo familiar" — wellness/education.
- "Documentación de lo que el usuario muestra" (passive log for personal reflection) — wellness.
- "Aprendizaje y rutinas" — wellness/education.

### Boundary cases
- "Recomienda consulta con profesional" — likely permissible if generic guidance, not clinical decision support (Open question; no Colombian guidance directly addresses this).

# Disability and autism — substantive rights framework

## Ley 1346 de 2009 — Convención de la ONU
- Approves UN CRPD in domestic law. <https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/dij/ley%201346%20de%202009.pdf>.
- Substantive obligation re: accessibility (CRPD art. 9), education (art. 24), and information access.

## Ley 1996 de 2019 — Capacidad legal
- Regimen de capacidad legal de las personas con discapacidad mayores de edad. <https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=86165>.
- Restores full legal capacity to all adults with disabilities — eliminates `interdicción`. Introduces `apoyos` and `salvaguardias`.
- Apoyo provider must respect will and preferences; cannot exert undue influence (manifested by fear, aggression, threat, deception, manipulation).
- **Implication for a B2C app aimed at autistic adults:** they consent for themselves; supports may be configured but cannot override.

## Ley 1618 de 2013 — Estatutaria de discapacidad
- Operationalizes Ley 1346 — obligations on accessibility, inclusion, etc.
- Art. 14 — TIC accessibility: digital products must comply with accessibility standards adopted by MinTIC.
- Resolución MinTIC 1519 de 2020 — adopts WCAG 2.1 AA (Norma NTC 5854) for State entities' web content.

## Autism-specific
- No dedicated TEA national law equivalent to PE Ley 30150 / MX LGAPPCEA / CL Ley 21.545. Coverage operates through general disability and CRPD framework.
- POS (Plan Obligatorio de Salud) coverage for TEA-related services is partial; coverage requirements have been litigated extensively.
- Open question: legislative proposals for a Colombian Ley TEA have been introduced multiple times; status as of 2026-05 is `Open question`.

## Consent and minors
- Código Civil and Código de Infancia y Adolescencia (Ley 1098 de 2006) — minors act through parents/guardians; adolescents have evolving capacity.
- For health interventions: parental consent + adolescent assent appropriate to maturity. Sentencia T-477/95 set the doctrine.
- For data: Ley 1581 art. 7 (above) — "ser escuchado" requirement.

# Accessibility / education

- Ley 1618 de 2013 art. 14 + Resolución MinTIC 1519 de 2020 — WCAG 2.1 AA for State digital content.
- NTC 5854 — Colombian technical standard for web accessibility (WCAG 2.0/2.1 aligned).
- Private sector apps not yet directly covered, but procurement specs to public buyers (MinSalud, MinEducación, secretarías regionales) will require WCAG 2.1 AA.
- Education sector: Decreto 1421 de 2017 — atención educativa a estudiantes con discapacidad; PIAR (Plan Individual de Ajustes Razonables) framework.

# Marketing & advertising claims

## Authority
- SIC — Superintendencia de Industria y Comercio (consumer protection + advertising).
- INVIMA — health-product advertising oversight (when product is regulated).
- Estatuto del Consumidor (Ley 1480 de 2011).

## Rules
- Ley 1480 art. 5.13 + 30 — `publicidad engañosa` is prohibited; `responsabilidad solidaria` between manufacturer and retailer.
- Health claims by non-registered products are violations of both Estatuto del Consumidor and Decreto 4725 (and Ley 9 de 1979).
- Children-targeted advertising — Ley 1098 art. 47 mandates protection from advertising that exploits minors or violates dignity.

## Concrete rules for the autism wellness/education app
- No diagnostic, therapeutic, or screening claims about TEA without INVIMA registration.
- No use of identifiable child imagery without verifiable parental authorization (Ley 1581 + Ley 1098).
- Must register database with RNBD if asset thresholds met.
- Must respect "ser escuchado" right when collecting data from a minor user.

# Sources
- [Ley 1581 de 2012](https://esdegue.edu.co/sites/default/files/Normatividad/LEY%20TRATAMIENTO%20DE%20DATOS%20-%20LEY%201581%20DE%202012.pdf) — retrieved 2026-05-02
- [Decreto 1377 de 2013](https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53646) — retrieved 2026-05-02
- [SIC — protección NNA](https://www.sic.gov.co/content/%C2%BFlos-datos-personales-de-los-ni%C3%B1os-ni%C3%B1as-y-adolescentes-tienen-alguna-protecci%C3%B3n-especial) — retrieved 2026-05-02
- [Decreto 4725 de 2005 — INVIMA](https://www.invima.gov.co/sites/default/files/el-instituto/Decreto-4725-de-2005.pdf) — retrieved 2026-05-02
- [Ley 1346 de 2009](https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/dij/ley%201346%20de%202009.pdf) — retrieved 2026-05-02
- [Ley 1996 de 2019 — capacidad legal](https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=86165) — retrieved 2026-05-02
- [Ley 1618 de 2013 — Estatutaria de discapacidad](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081) — retrieved 2026-05-02
