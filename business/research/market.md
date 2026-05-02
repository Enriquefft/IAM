---
slug: market
title: Autism wellness/education market sizing — LATAM primary, US/EU benchmark
last_reviewed: 2026-05-02
geos_primary: [PE]
geos_secondary: [MX, CO, AR, EC, CL]
geos_anchor: [US, EU, ES]
archetypes_modeled: [parent-pay-app, professional-saas, school-clinic-saas]
horizon: annual run-rate, current dollars
currency: USD
status: living-document
---

# Scope

Three product archetypes, six LATAM geos plus three anchors. Each archetype × geo derives an eligible population, a reachable share, an ARPU range, and TAM/SAM/SOM in USD/year, with explicit assumptions and a sensitivity flag.

- **Archetype A — parent-pay app**: B2C subscription consumed by the household of an autistic child or by parents seeking wellness/education content. Wellness only, not SaMD.
- **Archetype B — professional SaaS**: per-seat subscription for psychologists, SLTs (fonoaudiólogos), OTs, special-ed teachers; tools for content delivery, parent communication, progress tracking. Not a clinical decision system.
- **Archetype C — school/clinic SaaS**: per-classroom or per-student bulk license sold to special-ed schools (EBE in PE, EBE/CAM in MX), inclusive-ed regular schools, and ABA / interdisciplinary clinics.

# Comparative table

All figures USD/year, 2026 run-rate, full-uptake basis for TAM. SAM is realistic addressable share of TAM at our positioning. SOM is a year-3 capture of SAM. See per-geo sections for derivation and citations.

| Geo | Archetype | Eligible pop (units) | TAM (USD/yr) | SAM (USD/yr) | SOM y3 (USD/yr) | ARPU low–high (USD/yr) |
|---|---|---|---|---|---|---|
| PE | A parent-pay | 215,000 children | 7.7M | 1.7M | 200k | 36–60 |
| PE | B prof SaaS | 32,000 prof | 6.1M | 1.2M | 120k | 96–240 |
| PE | C school/clinic | 907 EBE schools + ~3,000 inclusive | 2.1M | 600k | 60k | 240–600/classroom |
| MX | A parent-pay | 295,000 children | 14.2M | 3.5M | 350k | 48–72 |
| MX | B prof SaaS | 147,000 prof | 35.3M | 7.0M | 700k | 120–300 |
| MX | C school/clinic | ~7,000 CAM/USAER + ~10,000 inclusive | 6.4M | 1.9M | 190k | 360–720/classroom |
| CO | A parent-pay | 60,000 dx + ~250,000 latent | 11.2M | 2.6M | 260k | 36–60 |
| CO | B prof SaaS | ~38,000 prof | 9.1M | 1.8M | 180k | 96–240 |
| CO | C school/clinic | ~6,000 sedes inclusive | 2.2M | 660k | 65k | 300–600/classroom |
| AR | A parent-pay | 350,000 children | 16.8M | 4.2M | 420k | 48–84 |
| AR | B prof SaaS | ~70,000 prof | 16.8M | 3.4M | 340k | 120–360 |
| AR | C school/clinic | ~3,500 esc esp | 1.4M | 420k | 42k | 300–600/classroom |
| EC | A parent-pay | 70,000 children | 2.5M | 580k | 60k | 30–48 |
| EC | B prof SaaS | ~7,000 prof | 1.3M | 250k | 25k | 96–240 |
| EC | C school/clinic | ~600 esc esp | 220k | 65k | 6k | 240–480/classroom |
| CL | A parent-pay | 65,000 children | 4.4M | 1.3M | 130k | 60–96 |
| CL | B prof SaaS | ~16,000 prof | 5.8M | 1.4M | 140k | 180–480 |
| CL | C school/clinic | ~2,200 esc dif | 1.1M | 320k | 32k | 360–720/classroom |
| **LATAM-6 totals** | A | ~1.05M children | **56.8M** | **13.9M** | **1.42M** | — |
| **LATAM-6 totals** | B | ~310k prof | **74.4M** | **15.0M** | **1.51M** | — |
| **LATAM-6 totals** | C | — | **13.4M** | **3.96M** | **395k** | — |
| US | A parent-pay | 2.1M children dx | 504M | 126M | 12.6M | 60–120 |
| EU | A parent-pay | 3.5M children est | 525M | 105M | 10.5M | 36–96 |
| ES | A parent-pay | 78,063 students dx | 4.7M | 940k | 94k | 36–96 |

`View:` LATAM-6 fully addressable parent-pay TAM at saturation is **USD 56.8M/year**. The sober realistic SAM is **USD 13.9M/year**. The "where the money actually is" view is at the bottom.

`Estimate:` All figures derived in the per-geo sections below. Anchors (US/EU/ES) included for benchmark only — not a market we can serve from Lima.

# Method and assumption ladder

1. **Eligible population.** Number of autistic children 0–17 in geo. Where a national prevalence study exists, use it. Where it does not, apply WHO 1/100 (range 0.6–1.8% across geos) to UN/national child population.
2. **Reachable share.** For parent-pay: smartphone-equipped, household above subsistence, parent recognizes condition (LATAM diagnosis gap is ~70–97%). For professional SaaS: practicing professionals working with developmental disabilities, not the entire psychology census. For school/clinic: schools with special-ed enrollment or ABA/interdisciplinary clinics.
3. **ARPU.** Benchmarked against [pricing.md](./pricing.md). LATAM consumer-app willingness-to-pay is materially below US: median LATAM mobile health ARPU is **USD 0.06–0.09 per install** vs **USD 0.44 14-day for global health & fitness** ([RevenueCat 2025](https://www.revenuecat.com/state-of-subscription-apps-2025/), retrieved 2026-05-02).
4. **TAM = eligible pop × ARPU max.** **SAM = realistic reachable × ARPU mid.** **SOM = SAM × y3 capture (8–12% in primary geo, 2–5% secondary).**
5. **Sensitivity.** For each archetype × geo, the assumption that, if revised one band, moves SAM the most.

# Per-geo data

## Peru (primary launch)

### Demographics
- **Total population 2024**: 34,038,000 ([INEI 2024](https://www.gob.pe/en/institucion/inei/noticias/987317-al-2024-la-poblacion-peruana-proyectada-alcanza-los-34-millones-de-habitantes), retrieved 2026-05-02).
- **Children 0–17**: 9,770,000 (28.7% of population) ([INEI 2024](https://www.gob.pe/en/institucion/inei/noticias/1006842-el-28-7-de-la-poblacion-total-del-pais-es-menor-de-edad), retrieved 2026-05-02).
  - 0–5 yr: ~3.37M; 6–11: ~3.23M; 12–17: ~3.20M.

### Autism prevalence
- **No national prevalence study.** WHO global anchor 1/160 (62 per 10,000) yields ~204,818 persons all ages, ~58,000 children — but this is the floor, not the ceiling.
- **`Estimate:` Apply 2.2% (midpoint of LATAM urban estimates Chile 1.95% / Mexico 0.87% / Colombia 0.14% diagnosed) to children 0–17 = 215,000 autistic children.** Diagnosed population is ~3% of that (~6,500); 97% gap ([Defensoría del Pueblo via Infobae 2024](https://www.infobae.com/peru/2024/04/02/el-97-de-personas-autistas-en-peru-no-estarian-diagnosticadas-por-falta-de-acceso-a-servicios-de-salud/), retrieved 2026-05-02).
- INSN Breña reports 40% of consulta externa pediátrica is now TEA-related ([INSN 2024](https://www.gob.pe/institucion/insn/noticias/928068-atenciones-por-autismo-en-el-insn-se-elevan-40-de-la-poblacion-por-consulta-externa-es-por-tea), retrieved 2026-05-02).

### Professional supply
- **~30,000 psychologists** registered with Colegio de Psicólogos del Perú (CPSP) ([CPSP padrón](https://www.cpsp.pe/colegiados/), retrieved 2026-05-02).
- **2,074 psychologists in public schools** for 6.87M public-school students; 1 per 3,313 ([La República 2023](https://data.larepublica.pe/sociedad/2023/08/08/psicologos-en-colegios-casi-el-98-de-instituciones-educativas-nacionales-no-cuentan-con-al-menos-un-psicologo-salud-mental-colegios-minedu-peru-109648), retrieved 2026-05-02).
- **4,489 special-ed teachers** in 907 EBE institutions; 25,510 EBE-enrolled students 2022 (MINEDU ESCALE, citation in [PIRKA Consultoría](https://pirka.pe/educacion-de-personas-con-discapacidad-en-el-peru/), retrieved 2026-05-02).
- **`Estimate:` Practicing developmental/clinical psychologists serving children = 32,000** (psychologists + SLTs/fonoaudiólogos + special-ed teachers, after deduplication). BCBAs in Peru: <10 (regional context: Argentina has 1, Costa Rica 1; [Regulation of Behavior Analysis in 15 LATAM Countries 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12209086/), retrieved 2026-05-02).

### Economic and tech context
- **GDP per capita PPP**: USD 20,116 ([IMF / Wikipedia 2026 estimate](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02).
- **Smartphone penetration**: 94.8% of households (Erestel 2024); 99% Lima Metropolitana, 84.8% rural ([OSIPTEL 2024](https://www.osiptel.gob.pe/portal-del-usuario/noticias/erestel-el-91-9-de-hogares-peruanos-cuenta-con-telefonos-inteligentes-o-smartphones/), retrieved 2026-05-02).
- **Health spend as % GDP**: 6.9% (2023 estimate, [TheGlobalEconomy via World Bank](https://www.theglobaleconomy.com/rankings/health_spending_as_percent_of_gdp/Latin-Am/), retrieved 2026-05-02). Out-of-pocket: ~28% of CHE.
- **Public payer for autism**: Ley N° 30150 (2014) entitles SIS-affiliated TEA to preferential care; Plan Nacional TEA 2019–2021 designates services. `View:` Reimbursement is largely aspirational on paper. Plan TEA scope shrank in execution; the 97% diagnostic gap is itself proof. Do not model B2G2C reimbursement as a near-term revenue line.

### Archetype derivations (PE)

**A — parent-pay**
- Eligible: 215,000 autistic children
- Reachable: 215,000 × 95% smartphone × 50% household-can-pay (above subsistence; LATAM ARPU caveat) × 100% parent reach (consumer marketing) = **102,000 households**
- ARPU range: USD 36–60/year (LeeLoo annual USD 59.99; Otsimo annual ~USD 60–72 in LATAM; below US benchmark — see [pricing.md](./pricing.md))
- **TAM: 215,000 × USD 36 = USD 7.7M/year**
- **SAM: 102,000 × USD 16/yr (blend includes freemium-only users) = USD 1.7M/year**
- **SOM y3: 12% capture = USD 200k/year**
- **Sensitivity**: ARPU. A drop from USD 36→24 collapses SAM by a third. WTP is the binding constraint, not user count.

**B — professional SaaS**
- Eligible: 32,000 practicing developmental professionals
- Reachable: 32,000 × 80% smartphone-active × 50% open to SaaS = **12,800 seats**
- ARPU range: USD 96–240/year (Peruvian psychologist pricing tolerance; SimplePractice US benchmark USD 348–1,188 is unrealistic — see [pricing.md](./pricing.md))
- **TAM: 32,000 × USD 192 = USD 6.1M/year**
- **SAM: 12,800 × USD 96 = USD 1.2M/year**
- **SOM y3: 10% = USD 120k/year**
- **Sensitivity**: Reachable share. Practitioners outside Lima have lower digital-tool adoption.

**C — school/clinic SaaS**
- Eligible: 907 EBE institutions + estimated 3,000 inclusive-ed schools serving ≥5 TEA students = ~3,907 buyer entities
- Reachable: 50% private + ~10% public (procurement velocity is the limit) = **~700 sites**
- ARPU range: USD 240–600/classroom/year
- **TAM: 3,907 × USD 540 = USD 2.1M/year**
- **SAM: 700 × ~USD 870 (multi-classroom average, 2 classrooms) = USD 600k/year**
- **SOM y3: 10% = USD 60k/year**
- **Sensitivity**: Public procurement (SEACE) cycles. Add 12–18 months to revenue for any public deal.

## Mexico (secondary, large)

### Demographics
- **Total population 2024**: ~130M; **0–14 share**: 27.8% ([Wikipedia / INEGI ENADID](https://en.wikipedia.org/wiki/Demographics_of_Mexico), retrieved 2026-05-02).
- **`Estimate:` Children 0–17**: ~38M (extrapolating 0–14 base + 12–17 roll-forward).

### Autism prevalence
- **1 in 115 children** (Fombonne et al. 2016, León survey, the only Mexican prevalence study) ([Mexico Business News 2024](https://mexicobusiness.news/health/news/addressing-autisms-rise-diagnosis-gaps), [Springer 2016](https://link.springer.com/article/10.1007/s10803-016-2696-6), retrieved 2026-05-02).
- **`Estimate:` Autistic children 0–17**: 38M / 115 = **~330,000**, of which dx population may be ~30%.

### Professional supply
- **147,000 practicing psychologists** in 2023 ([Statista 2023](https://www.statista.com/statistics/1328471/number-practicing-psychologists-mexico/), retrieved 2026-05-02). Mexico has the largest absolute psychologist labor pool in Spanish-speaking LATAM.
- BCBAs: handful nationally; Spanish-language ABA professionalization still informal.

### Economic and tech context
- **GDP per capita PPP**: USD 26,643 ([IMF/Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02).
- **Smartphone penetration**: high (Mexico is 21.2% of LATAM smartphone market by units, [Counterpoint Q4 2024](https://www.counterpointresearch.com/insight/latam-smartphone-market-q4-2024/), retrieved 2026-05-02).
- **Health spend as % GDP**: 6.15% ([TheGlobalEconomy](https://www.theglobaleconomy.com/rankings/health_spending_as_percent_of_gdp/Latin-Am/), retrieved 2026-05-02). Out-of-pocket ~41% — among the highest in LATAM.
- **Public payer for autism**: IMSS-BIENESTAR succeeded INSABI (May 2023) which succeeded Seguro Popular ([Coneval 2023](https://www.coneval.org.mx/EvaluacionDS/PP/CEIPP/IEPSM/Documents/E_Derecho_Salud_2023.pdf), retrieved 2026-05-02). Specific autism-pathway coverage is undefined; CAM/USAER (special-ed) is the only structured public response.

### Archetype derivations (MX)

**A — parent-pay**
- Eligible: 295,000 autistic children (use 0.87% × ~34M effective 0–14 cohort, narrower than 0–17 derived 330k figure to be conservative)
- Reachable: 295,000 × 90% smartphone × 55% household can pay = **146,000**
- ARPU: USD 48–72/yr (slightly above PE; Otsimo MX-equivalent pricing)
- **TAM: 295,000 × USD 48 = USD 14.2M/year**
- **SAM: 146,000 × USD 24 = USD 3.5M/year**
- **SOM y3 (secondary geo, 4% capture): USD 350k/year**
- **Sensitivity**: Reachable household share; income inequality is wider in MX than PE.

**B — professional SaaS**
- Eligible: 147,000 psychologists (national); `Estimate:` 60% in private/mixed practice = 88,000
- Reachable: × 60% serving developmental cases × 60% open to SaaS = **31,700 seats**
- ARPU: USD 120–300/yr
- **TAM: 88,000 × USD 240 = USD 21.1M/year (using addressable, not gross 35.3M)**
- **SAM: 31,700 × USD 220 = USD 7.0M/year**
- **SOM y3: 4% = USD 700k/year**
- **Sensitivity**: SaaS adoption among independent practitioners; competitor density (Doctoralia, NubeMD already entrenched in clinic admin).

**C — school/clinic SaaS**
- Eligible: ~17,000 buyer entities (CAM + USAER + private clinics)
- Reachable: 30% (large country, fragmented procurement)
- ARPU: USD 360–720/classroom
- **TAM: USD 6.4M/year**
- **SAM: USD 1.9M/year**
- **SOM y3: 4% = USD 190k/year**
- **Sensitivity**: SEP procurement is essentially closed to non-SEP-aligned vendors. Private school chain consolidation is the realistic SOM lever.

## Colombia (secondary)

### Demographics
- **`Estimate:` Children 0–17**: ~14M (DANE projections; under-12 = 9.34M = 17.7% of pop, [SUIN/ICBF](https://portalsuin.icbf.gov.co/sites/suin/Pages/poblacion_ni%C3%B1os_ni%C3%B1as_Colombia.aspx), retrieved 2026-05-02).
- Total pop ~52M.

### Autism prevalence
- **0.137% diagnosed** (13.788/10,000) in children 4–14 in 2022, growing fast ([García-Zambrano et al. 2024 J Autism Dev Disord](https://link.springer.com/article/10.1007/s10803-024-06534-9), retrieved 2026-05-02). 23,959 children formally receiving services 2022. Diagnosis is the bottleneck.
- **`Estimate:` Real prevalence 1–1.5%** consistent with regional benchmarks → ~140,000–210,000 autistic children. Diagnosed pool ~30,000–60,000 today.

### Professional supply / education
- **217,511 students with disability** enrolled nationally 2024 ([Mineducación 2024](https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/427413:Mas-de-217-mil-estudiantes-con-discapacidad-hoy-aprenden-en-las-aulas-del-pais), retrieved 2026-05-02). COP 114,338M (~USD 28M) destined for SGP attention, FY2024.
- **`Estimate:` Practicing psychologists**: ~40,000 nationally; ~6,000 in inclusive-ed support roles.

### Economic and tech context
- **GDP per capita PPP**: USD 23,576 ([IMF/Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02).
- **Health spend as % GDP**: 9.16% ([TheGlobalEconomy](https://www.theglobaleconomy.com/rankings/health_spending_as_percent_of_gdp/Latin-Am/), retrieved 2026-05-02). Out-of-pocket ~14% — best in region.
- **Public payer for autism**: POS theoretically covers TEA therapies via EPS; in practice tutela (constitutional protection) is the standard pathway, with multiple 2024 Constitutional Court rulings (T-461/24, others) ordering EPS coverage of therapies, transport, and ancillary supports ([Corteconstitucional T-461-24](https://www.corteconstitucional.gov.co/relatoria/2024/t-461-24.htm), retrieved 2026-05-02). `View:` Litigation-driven coverage is real revenue for ABA centers but not addressable by a wellness/education app.

### Archetype derivations (CO)

**A — parent-pay**
- Eligible (addressable): ~310,000 children with caregivers aware of TEA (formally dx + suspected)
- Reachable: × 85% smartphone × 60% household can pay = **158,000**
- ARPU: USD 36–60/yr
- **TAM: USD 11.2M/year**
- **SAM: USD 2.6M/year**
- **SOM y3 (4%): USD 260k/year**
- **Sensitivity**: Diagnosis penetration. Each percentage point of dx growth adds ~USD 110k to SAM.

**B — professional SaaS**
- Eligible: ~38,000 practitioners
- Reachable: × 50% = **19,000 seats**
- ARPU: USD 96–240/yr
- **TAM: USD 9.1M/year**
- **SAM: USD 1.8M/year**
- **SOM y3 (4%): USD 180k/year**

**C — school/clinic SaaS**
- Eligible: ~6,000 sedes inclusive
- ARPU: USD 300–600
- **TAM: USD 2.2M/year — SAM USD 660k — SOM y3 USD 65k**

## Argentina (secondary)

### Demographics
- **Total pop 2022 census**: 46,044,703 ([INDEC](https://www.indec.gob.ar/)). Under-15: 20%.
- **`Estimate:` Children 0–17**: ~10.8M.

### Autism prevalence
- **148,710 disability certificates for TEA** registered nationally — fragmentary, undercount ([Infobae 2026-03-30](https://www.infobae.com/salud/ciencia/2026/03/30/organizaciones-y-familias-exigen-estadisticas-oficiales-sobre-autismo-en-argentina-que-propone-el-documento/), retrieved 2026-05-02).
- Encuesta Azul: **1 in 31** family-reported in survey work; +400% diagnosis growth since 2000 ([El Argentino 2025](https://elargentinodiario.com.ar/zona-destacada/16/04/2025/autismo-en-aumento-el-diagnostico-crecio-un-400-desde-el-ano-2000/), retrieved 2026-05-02).
- **`Estimate:` 350,000 autistic children 0–17** (3.2% if Encuesta Azul accurate; 1.4% if intermediate).

### Professional supply
- **`Estimate:` 70,000 psychologists** (Argentina has the world's highest psychologist density per capita; multiple distritos, FEPRA federation).
- **1 BCBA, 1 BCaBA, 1 RBT** as of April 2023 ([PMC behavior analysis regulation 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12209086/), retrieved 2026-05-02).

### Economic and tech context
- **GDP per capita PPP**: USD 33,187 ([IMF/Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02). FX volatility is a hard constraint on USD pricing.
- **Health spend as % GDP**: 9.89%.
- **Public payer**: **Ley 24.901 + Ley 27.043** mandate full coverage of TEA prestaciones by obras sociales and prepagas — uniquely in LATAM, this is enforceable and routinely litigated successfully ([Argentina.gob.ar TEA derechos](https://www.argentina.gob.ar/noticias/autismo-tus-derechos), [moretti-zanini.com.ar](https://www.moretti-zanini.com.ar/cobertura-legal-del-autismo-en-argentina/), retrieved 2026-05-02). `View:` Argentina is the **only LATAM country with a real B2G2C payer pathway**, but currency risk and the macro environment make it commercially treacherous. Price in pesos with monthly FX adjustment, or it is a money-losing book.

### Archetype derivations (AR)

**A — parent-pay**
- Eligible: 350,000 children
- Reachable: × 90% × 55% = **173,000**
- ARPU: USD 48–84/yr (higher tolerance because obras sociales reimbursement; LATAM RevenueCat note: AR/UY are the highest LATAM ARPU)
- **TAM: USD 16.8M/year — SAM: USD 4.2M — SOM y3 (4%): USD 420k**
- **Sensitivity**: FX. A peso devaluation of 30% prices the app out of reach unless localized.

**B — professional SaaS**: TAM USD 16.8M / SAM USD 3.4M / SOM USD 340k (USD 240 ARPU)
**C — school/clinic SaaS**: TAM USD 1.4M / SAM USD 420k / SOM USD 42k

## Chile (secondary)

### Demographics
- **Total pop 2024 census**: 18,480,432; under-14 17.7% = ~3,270,000 ([INE Censo 2024](https://www.ine.gob.cl/sala-de-prensa/prensa/general/noticia/2025/03/28/the-first-results-of-the-2024-census-18-480-432-people-enumerated-in-chile-and-an-increasing-trend-in-population-aging), retrieved 2026-05-02).
- **`Estimate:` Children 0–17**: ~3.7M.

### Autism prevalence
- **1.95% (1 in 51)** — Santiago urban study, 4:1 male:female ([Yáñez et al. 2021 Andes Pediatr](https://www.scielo.cl/scielo.php?pid=S2452-60532021000400519&script=sci_arttext), retrieved 2026-05-02). Highest measured in LATAM.
- **`Estimate:` Autistic children 0–17**: ~72,000 (1.95% × 3.7M); diagnosed pool larger as fraction than other LATAM geos.

### Professional supply
- **`Estimate:` ~16,000 psychologists** (Chile has well-organized colegio professional bodies).

### Economic and tech context
- **GDP per capita PPP**: USD 37,336 (highest in LATAM-6) ([IMF/Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02).
- **Health spend as % GDP**: 9.36%.
- **Public payer**: **Ley 21.545 (Ley TEA, March 2023)** establishes TEA rights in health, education, social inclusion ([BCN Ley 21545](https://www.bcn.cl/leychile/navegar?idNorma=1190123), retrieved 2026-05-02). GES/AUGE has not added TEA as a guaranteed pathology. `View:` Ley TEA is rights-framework, not a reimbursement code. Clinics still bill privately or via Isapres.

### Archetype derivations (CL)

**A — parent-pay**
- Eligible: 65,000 (use 1.8% conservative)
- Reachable: × 95% × 70% = **43,000**
- ARPU: USD 60–96/yr (highest LATAM tolerance; Isapre middle class)
- **TAM: USD 4.4M — SAM: USD 1.3M — SOM y3 (4%): USD 130k**

**B — professional SaaS**: TAM USD 5.8M / SAM USD 1.4M / SOM USD 140k
**C — school/clinic SaaS**: TAM USD 1.1M / SAM USD 320k / SOM USD 32k

## Ecuador (secondary, smallest)

### Demographics
- **Total pop 2024**: 17.9M (INEC); **children 0–17**: ~6.79M (Censo 2022) ([INEC Censo](https://www.censoecuador.gob.ec/), [Boletín técnico INEC 2024](https://www.ecuadorencifras.gob.ec/documentos/web-inec/Poblacion_y_Demografia/Proyecciones_Poblacionales/censo_2022/revision_2024/Boletin_tecnico_proy_rev2024.pdf), retrieved 2026-05-02).

### Autism prevalence
- **No national prevalence study.** ITEA screening tool released 2023 ([Universidad Andina](https://www.uasb.edu.ec/se-lanza-el-primer-instrumento-de-tamizaje-para-autismo-en-ecuador-y-america-latina/), retrieved 2026-05-02). MSP registered 1,258 dx in 2016. Diagnosis costs: 46% of Guayaquil families, 24% of Quito families spent >USD 1,000 reaching diagnosis ([SciELO Ecuador](https://revecuatneurol.com/magazine_issue_article/autismo-ecuador-grupo-social-espera-atencion-autism-ecuador-social-group-waiting-attention/), retrieved 2026-05-02).
- **`Estimate:` 1.0% × 6.79M children = 68,000 autistic children.** Diagnosed pool 5–10% of true prevalence.

### Economic and tech context
- **GDP per capita PPP**: USD 17,720 (lowest in target geos, [IMF/Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)_per_capita), retrieved 2026-05-02). Dollarized economy, no FX risk.
- **Health spend as % GDP**: 9.02%.
- **Public payer**: MSP via Carnet de Discapacidad ([CONADIS](https://www.consejodiscapacidades.gob.ec/), retrieved 2026-05-02). 59.4% of dx children obtain it. Ley Orgánica de Discapacidades 2024 promises medication and técnica ayudas free; autism therapy is not enumerated.

### Archetype derivations (EC)

**A — parent-pay**
- Eligible: 70,000 children
- Reachable: × 80% × 35% = **20,000** (lower household income)
- ARPU: USD 30–48/yr
- **TAM: USD 2.5M — SAM: USD 580k — SOM y3 (3%): USD 60k**

**B — professional SaaS**: TAM USD 1.3M / SAM USD 250k / SOM USD 25k
**C — school/clinic SaaS**: TAM USD 220k / SAM USD 65k / SOM USD 6k

## Anchors (US / EU / Spain) — benchmark only

These are **not** target launch geos; included so that LATAM numbers can be read against the global market.

### United States
- Children 0–17: ~73M (Census 2024 estimate, [Census](https://www.census.gov/newsroom/press-releases/2024/population-estimates-age-sex.html), retrieved 2026-05-02).
- **Autism prevalence: 1 in 36** (2.8%) 8-year-olds ([CDC ADDM 2023 MMWR](https://www.cdc.gov/media/releases/2023/p0323-autism.html), retrieved 2026-05-02). Update via HHS 2025: **1 in 31** ([HHS 2025](https://www.hhs.gov/press-room/autism-epidemic-runs-rampant-new-data-shows-grants.html), retrieved 2026-05-02).
- **`Estimate:` 2.1M autistic children** (using 1/36).
- GDP per capita PPP: USD 94,430.
- ARPU benchmark: USD 60–120/yr (Speech Blubs USD 59.99/yr to USD 14.49/mo; Otsimo similar; Goally USD 369 device+app annual).
- **TAM A parent-pay: ~USD 504M/yr**; SAM ~USD 126M; SOM y3 if we sold from Lima: 0%. Listed as anchor.

### European Union
- Children 0–17: ~80.9M (449.3M total × 18%, [Eurostat 2024](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250707-1), retrieved 2026-05-02).
- **`Estimate:` Autism prevalence: 0.8–1.4%** (ASDEU registry vs population studies, [Autism Europe](https://www.autismeurope.org/about-autism/prevalence-rate-of-autism/), retrieved 2026-05-02).
- **`Estimate:` 880,000–3,500,000 autistic children**; midpoint 2.0M.
- GDP per capita PPP: USD 67,957.
- ARPU benchmark: USD 36–96/yr (more price-sensitive than US, country fragmentation).
- TAM A parent-pay: ~USD 525M/yr at midpoint × USD 60 → SAM ~USD 105M.

### Spain
- Children 0–17: ~7.5M (extrapolated from INE birth statistics, [INE 2024](https://www.ine.es/dyngs/Prensa/en/MNP2024.htm), retrieved 2026-05-02).
- **78,063 students dx with autism** in non-university education 2022–23 (0.94% of all students), +310% over decade ([Autismo España informe 04/24](https://autismo.org.es/wp-content/uploads/2024/04/2024_Informe_DatosAlumnadoNoUniversitario_Curso2022-2023_AutismoEspana.pdf), retrieved 2026-05-02).
- GDP per capita PPP: USD 59,187.
- ARPU benchmark: USD 36–96/yr.
- TAM A: USD 4.7M/yr → SAM 940k → SOM 94k. Spain is **the natural Spanish-language anchor for content reuse** but the in-country revenue is small relative to the localization cost. The strategic value of Spain is **content quality validation** and **EU market entry CV-building**, not revenue.

# Sensitivity summary (which assumption matters most per archetype)

| Archetype | Top sensitivity | Why |
|---|---|---|
| A parent-pay | **ARPU** (not user count) | LATAM households can install the app; the question is whether they pay USD 4 or USD 0 a month. ARPU range 36→24 collapses SAM by a third. |
| B professional SaaS | **Reachable share** | Not every psychologist serves TEA cases; not every TEA-serving psychologist will adopt SaaS. Adoption velocity is the binding constraint. |
| C school/clinic SaaS | **Procurement velocity** | Public sector contracts add 12–18 months to revenue. Private chains consolidate buying decisions but are few. |

# What changes the picture

- **Diagnosis penetration in PE/CO/EC.** Each percentage point of formal dx in the eligible pool roughly doubles addressable parent-pay users in the short term (parents only seek help once labeled).
- **Insurance / obras sociales pathway in AR.** Without the FX problem, AR would be the highest-revenue geo per capita for a digital therapeutic. Wellness/education positioning sidesteps the reimbursement code question.
- **Public-school inclusive-ed budgets.** PE Plan TEA, CO SGP, MX CAM/USAER. These are the C-archetype lever; deal sizes USD 5k–50k per regional contract; sales cycle 12–24 months.
- **AI-driven content generation.** Reduces marginal cost of Spanish-LATAM localization to near zero — a **structural reason LATAM SaaS economics are improving in 2026** (RevenueCat: LATAM has the highest median MRR growth of any geography in 2024).

# Where the money actually is — summary view

`View:` LATAM-6 fully addressed gives a **~USD 145M/year combined TAM across the three archetypes**, of which **~USD 33M is realistic SAM** and **~USD 3.3M is achievable SOM by year 3**. That is real but not VC-backable on its own.

The bankable thesis has three legs:
1. **Parent-pay LATAM at low ARPU + high volume** as the wedge (~USD 1.4M ARR achievable y3 across LATAM-6). This funds product development.
2. **Professional SaaS** as the durable revenue line (~USD 1.5M ARR y3) — psychologists pay because the tool is a workflow improvement, not a wellness purchase.
3. **Spain + EU expansion in y4–5** as the multiplier. The same content library serving 215k autistic kids in Peru also serves 78k in Spain at 2× ARPU — **the SAM multiplier from going EU-first-after-LATAM-product-validation is roughly 8–10×**.

The trap to avoid: pricing US ARPU into LATAM. Otsimo, Speech Blubs, Goally all monetize at LATAM-equivalent of USD 5/mo or less in the markets they sell into; aspirational USD 14.99/mo monthly tiers exist on the page, but the actual paying user pays the annual at USD 4.99/mo equivalent. See [pricing.md](./pricing.md) for the full benchmark sweep.
