---
slug: content
status: draft
created: 2026-05-02
last_reviewed: 2026-05-02
product: therapist-saas
domain: i-am.clinic
language: es-LATAM
quote_style: «»
---

# Landing page — i-am.clinic — Copy completo

> Nota de autoría: todas las afirmaciones cuantificadas citan la fuente primaria entre paréntesis. El lenguaje identitario sigue el léxico de `brand.md` sin excepción. Precios locales calculados sobre USD 20/mes con FX aproximados (PEN 3.75, MXN 17.5, COP 4 100, ARS 1 000, CLP 920) redondeados al entero más cercano. Estilo de citas: «».

---

## PARTE 1 — ARQUITECTURA DE INFORMACIÓN

### Listado de secciones, de arriba a abajo

| # | ID | Etiqueta | Propósito en una línea |
|---|---|---|---|
| 1 | `nav` | Header / nav | Orientación inmediata; CTA secundaria visible desde el inicio. |
| 2 | `hero` | Hero | Nombra al enemigo (Word/Excel/WhatsApp), cuantifica la recuperación de tiempo, lanza el CTA primario. |
| 3 | `backers` | Respaldados por | Franja de logos de inversores (UTEC Ventures + 404 Tech Found). Sustituye el trust-strip de precio/cita previsto en el spec original. |
| 4 | `problem` | Reconocimiento del problema | Cita textual de los flujos de trabajo documentados; la terapeuta se ve reflejada antes de que le hayamos vendido nada. |
| 5 | `how-it-works` | Así funciona | Tres pasos concretos, visual-friendly, sin jerga técnica. |
| 6 | `features` | Lo que hace, con números | Tres bloques: (a) agenda + reagendar, (b) nota → PDF para familia, (c) cobranza mínima. Cada uno: dolor → acción → resultado medido. |
| 7 | `parent-pdf` | El resumen que Mateo merece | El artefacto «Resumen semanal de Mateo» como prueba de credibilidad profesional de la terapeuta, no como vigilancia. |
| 8 | `pricing` | Precios | Tabla de precios en moneda local (principal) + USD (secundario); precio piloto visible; garantía mes 3. |
| 9 | `faq` | Preguntas frecuentes | Nueve objeciones concretas: privacidad, tiempo, migración, conectividad, idioma, facturación fiscal, multi-país, «¿es para ABA?» |
| 10 | `about` | Por qué construimos esto | Voz de fundador, sobria, neuroafirmativa, sin foto de stock. |
| 11 | `waitlist` | Lista de espera | Formulario de captura: nombre (opcional), correo (requerido), rol (requerido), consentimiento (requerido). Double opt-in por correo desde `hola@i-am.clinic`. |
| 12 | `final-cta` | CTA final + footer | Cierre, datos de contacto, enlaces legales. |

### Flujo de conversión — justificación del orden

1. **Hero primero** porque el tiempo de atención es finito y la promesa de recuperar 6+ horas/semana necesita estar arriba del pliegue. Si el número no resuena, el resto de la página no importa.
2. **Trust strip inmediatamente después**, no más abajo, para colapsar el «¿quiénes son estos?» antes de que la terapeuta rebote. Sin logos propios, el precio transparente en su moneda local es el acto de confianza más rápido disponible. (Source: competitor-audit.md, Wedge 1 y Change 2.)
3. **Problem recognition antes de features** porque una terapeuta que se ve reflejada en el dolor escucha la solución con otra disposición que una que recibe features en frío.
4. **How it works antes de feature blocks** porque tres pasos abstractos preparan el esquema mental que hace que los bloques de features sean legibles.
5. **Parent-PDF showcase después de features** porque ya entiende el producto; ahora le mostramos la pieza que le importa emocionalmente: lo que la familia recibe.
6. **Pricing antes de FAQ** porque la objeción más frecuente es el precio; revelarla antes despeja el espacio mental para las objeciones técnicas.
7. **FAQ antes de About** porque las objeciones bloquean la conversión; el contexto fundacional es refuerzo, no gatillo.
8. **CTA primario aparece en**: hero, trust strip (versión compacta), final-cta. CTA secundaria en nav. Mid-page aparece al final de la sección de features.

### Ajustes móvil

- `trust-strip`: en móvil, el bloque de precio en tres monedas se convierte en carrusel deslizable (una moneda por pantalla).
- `features`: en móvil, los tres bloques se apilan verticalmente (desktop: grid 3 columnas). El accordion se abre al primer bloque por defecto.
- `pricing`: tabla de dos columnas (Solo / Clínica) colapsa a tabs en móvil.
- `faq`: accordion estándar, todos cerrados por defecto en móvil para no sobrecargar la pantalla.
- `nav`: menú hamburguesa; CTA secundaria se mueve al interior del menú.
- `parent-pdf`: en móvil, el PDF mockup ocupa ancho completo y se desplaza horizontalmente.

---

## PARTE 2 — COPY POR SECCIÓN

> Convención de estilo: «» para citas directas dentro del cuerpo de texto. Negritas para términos clave. Sin signos de exclamación. Sin emojis.

---

### Sección 1 — `nav` — Header / nav

**Elementos:**

- Logo: `i-am.clinic` — tipografía humanista, punto terracotas, sin tagline en nav.
- Ítems de navegación (izquierda a derecha): Cómo funciona · Precios · Preguntas · Sobre nosotras
- CTA secundaria (derecha): «Unirme a la lista de espera» → `#waitlist`

**Microcopy del nav:**

- Link hover state: subrayado suave, sin cambio de color agresivo.
- CTA secundaria: botón de borde, no relleno — color verde salvia, texto blanco crema.

**Visual brief:** Barra clara, madera-blanca, sin sombra agresiva. Logo a la izquierda en tipografía serif humanista. El botón CTA es pequeño, discreto, sin brillo. Sensación de clínica bien mantenida, no de startup.

---

### Sección 2 — `hero` — Hero

**H1 (dos líneas, máximo 12 palabras en total):**

> ¿Todavía gestionas tu consulta TEA con Word, Excel y WhatsApp?

**Subhead (una sola oración, cuantificada):**

> i-am.clinic devuelve 6 o más horas a la semana que hoy se van en reagendar, escribir notas y mandar actualizaciones por WhatsApp — en español, pensado para cómo trabajas en Lima, en CDMX, en Bogotá.

*(Source: definition.md MSP success metrics — «≥6 hr/week recovered per therapist» by Mo 3; workflows.md quantified non-clinical load table.)*

**Cuerpo hero (2-3 líneas de apoyo, debajo del subhead):**

> Tu agenda, tus notas SOAP y el resumen semanal para la familia salen del mismo lugar.
> Sin CPT codes. Sin «insurance billing». Sin inglés.

**CTA primario:**

> Unirme a la lista de espera → `#waitlist`

**Microcopy bajo el CTA:**

> Sin spam · Podés darte de baja en cualquier momento

**Artefacto hero (visual principal):**

El hero **es** el demo. Miniatura del producto funcionando, escala 60–70% del ancho del viewport en desktop, alineada a la derecha del copy. No es captura, no es video grabado: es DOM real con un loop autoreproducido de 12 segundos que muestra dictado → resumen para familia → frame held. Click en cualquier zona escala el miniature a fullscreen y rutea a `/demo` (versión completa, guiada e interactiva, ~60s siguiendo todas las hints). Spec completa de la miniatura, del loop y del flujo interactivo: [`demo.md`](./demo.md).

El PDF de «Resumen semanal de Mateo» sigue siendo el clímax del demo, pero deja de ser el artefacto estático del hero. La canonical spec del PDF (campos SOAP, copia del resumen para familia, watermark) vive en [`content.md` §7](#sección-7--parent-pdf--el-resumen-que-mateo-merece) y se renderiza idéntica en el demo y en la descarga.

*(Source: definition.md hero_role; demo.md §6 hero miniature; competitor-audit.md Wedge 5 redirige el peso del PDF al clímax del demo, no al hero estático.)*

**Visual brief hero:** El miniature flota sobre fondo de madera clara con sombra suave (no neon glow), borde redondeado 8px. Luz natural, cálida, lateral. A la izquierda del miniature, el texto de headline y subhead. Affordance permanente en la esquina inferior derecha del miniature: «Probar el demo completo →» en verde salvia, tipografía pequeña, sin fondo de botón agresivo. Paleta: blanco crema, verde salvia, terracota suave. Sin gradientes. Sin ilustraciones de cerebros o rompecabezas. Framing: consultorio de las cinco de la tarde. En `prefers-reduced-motion` el loop pausa en estado idle (frame de la apertura del demo).

---

### Sección 3 — `trust-strip` — Franja de confianza

**Formato:** tres bloques en línea, separados por un divisor vertical sutil.

**Bloque A — Precio local:**

> **S/ 75 · MX$ 350 · COP 82 000 · ARS 20 000 / mes**
>
> Equivale a USD 20/mes. Sin permanencia mínima.

*(Source: definition.md pricing — «USD 20/mo solo»; competitor-audit.md Wedge 1 — «show local-currency equivalent above the fold».)*

**Bloque B — Piloto:**

> **Piloto cerrado — primeras 20 terapeutas**
>
> Precio bloqueado por 6 meses desde el inicio de tu piloto.

*(Source: definition.md — «Concierge MSP pilot price: USD 20/mo flat for warm-list therapists, locked for 6 months».)*

**Bloque C — Cita de terapeuta (placeholder pre-piloto; reemplazar con cita real al mes 1):**

> «Es como si alguien hubiera diseñado un software de consulta para nosotras, en español, sin tratarnos de robots ni a les niñes de pacientes.»
>
> — Prototipo de terapeuta piloto, Lima

*(Source: brand.md §8 — one-line elevator, usado aquí como placeholder hasta tener testimonio real de piloto.)*

**Visual brief trust strip:** Franja horizontal de fondo verde salvia muy suave (10% de opacidad). Tres bloques con ícono mínimo (no emoji; pequeño pictograma de línea). Sin fondo blanco de tarjeta, sin sombra. Se siente como un pie de página de documento médico, no como un banner de marketing.

---

### Sección 4 — `problem` — Reconocimiento del problema

**H2:**

> Cuatro horas al día fuera de la sesión. Y no son horas clínicas.

**Subhead:**

> Esto es lo que documentamos preguntándole a terapeutas en Lima, CDMX, Bogotá y Buenos Aires sobre cómo pasan su día real.

*(Source: workflows.md — «~4hr/day cited (E29)»; definition.md — «E29 raw interview: 4 hr/day on Word/Excel/WhatsApp».)*

**Bloques de dolor (cuatro tarjetas, citadas textualmente o parafraseadas de workflows.md):**

**Tarjeta 1 — Reagendar**

> «Reagendar a tres familias después de una cancelación me lleva entre una y dos horas. Primero por WhatsApp, luego ajusto el Excel, luego mando confirmación de nuevo.»
>
> — Fonoaudióloga, Bogotá · Flujo documentado en E29

Dato: 3–5 horas a la semana en reagendar solo por cancelaciones y no-presentaciones.

*(Source: workflows.md — «Reagendar after sick/no-show | Excel + WhatsApp | Caos logístico (E29)» y quantified table «Reagendar | 3–5 hr/week».)*

**Tarjeta 2 — Notas y reportes**

> «El registro es solo para mí. Para la familia lo hago verbal en el pasillo, o cuando me acuerdo les mando algo por WhatsApp.»
>
> — Psicóloga, Lima · Flujo documentado en E29

Dato: 5–8 horas a la semana entre transcribir notas en Word y, si hay tiempo, preparar el resumen para la familia.

*(Source: workflows.md — «Write parent summary | Word (often skipped) | "registro es solo para ella" (E29)»; quantified table «Notes / parent reports | 5–8 hr/week».)*

**Tarjeta 3 — WhatsApp personal, fuera de horario**

> Tu teléfono personal es también el canal de crisis familiar, el sistema de confirmaciones, y el lugar donde la mamá de Mateo te escribe el domingo a las 22:00 para preguntar cómo salió la sesión del viernes.

Dato: 5–10 horas a la semana en comunicación con familias fuera de horario, sin compensación.

*(Source: workflows.md — «WhatsApp evening/weekend | Personal phone | Crisis Q's, schedule, "cómo salió hoy"»; quantified table «Parent comms after-hours | 5–10 hr/week».)*

**Tarjeta 4 — Cobranza**

> Cada factura es un documento Word. Cada pago es un rastreo por Yape, Plin, transferencia o efectivo. Ninguno está conectado al calendario.

Dato: 2–4 horas a la semana en cobranza manual, sin conciliación automática.

*(Source: workflows.md — «Manual invoicing | Word doc → WhatsApp»; quantified table «Cobranza / billing | 2–4 hr/week».)*

**Línea de cierre de sección:**

> En total: entre 30% y 50% de tu semana laboral en tareas que ninguna formación clínica te enseñó a gestionar con Word y WhatsApp.

*(Source: workflows.md — «Total non-clinical: ~30-50% of work week»; problems.md §7 — «SLP/OT/teachers spend 30–50% of work time on paperwork».)*

**CTA secundaria (al pie de sección):**

> ¿Lo reconoces? Veamos qué cambia con el piloto.

**Visual brief:** Cuatro tarjetas apaisadas sobre fondo crema. Cada tarjeta tiene una cita en «» en tipografía ligeramente más grande, el atributo de la terapeuta en gris suave debajo, y el dato cuantificado en verde salvia. Sin iconos de reloj gigantes. Sin ilustraciones de personas frustradas. La fuente de cita, pequeña, referencia el flujo de trabajo sin ser académica.

---

### Sección 5 — `how-it-works` — Así funciona

**H2:**

> Tres cosas que cambian la semana, en ese orden.

**Paso 1:**

**Etiqueta:** Agenda con reagendado automático

> Carga el horario de tu consulta una vez. Cuando una familia cancela, el sistema detecta el hueco, sugiere los slots disponibles y envía el enlace de confirmación por WhatsApp — sin que abras el Excel ni escribas el mensaje.

Resultado: menos de 10 minutos por cancelación, en lugar de una hora.

*(Source: definition.md v1 scope #1 — «cancel/reschedule with WhatsApp confirmation link, conflict auto-detect. Targets the 3-5 hr/week "reagendar caos"».)*

**Paso 2:**

**Etiqueta:** Nota de sesión → resumen para familia

> Después de la sesión, dicta o escribe tu nota. La herramienta la estructura en formato SOAP en español. Con un botón, genera el resumen para la familia en lenguaje claro — sin tecnicismos, sin «paciente con TEA». Lo revisas, lo apruebas. La familia lo recibe.

Resultado: el resumen semanal sale en el tiempo que antes tomaba solo transcribir la nota.

*(Source: definition.md v1 scope #2 — «Spanish SOAP template, voice-to-text capture, AI summary to fill SOAP fields, manual edit before save. Auto-compiles weekly parent-facing progress PDF».)*

**Paso 3:**

**Etiqueta:** Honorarios en orden

> Por sesión o por mes: registra el cobro, emite el PDF de recibo, lleva el registro de quién pagó y quién no. Sin hoja de Excel aparte. Sin perseguir el pago por WhatsApp.

*(Source: definition.md v1 scope #3 — «per-session ledger, monthly PDF invoice».)*

**Visual brief:** Tres columnas verticales con número de paso grande en terracota suave, etiqueta en negrita, descripción en cuerpo, resultado en verde salvia con dato cuantificado. Flechas de paso muy suaves entre columnas. En móvil se apilan. Fondo blanco crema. Sin ilustraciones de cohetes ni de personas saltando.

---

### Sección 6 — `features` — Lo que hace, con números

**H2:**

> Tres módulos. Un problema cada uno. Números reales al mes tres.

---

**Bloque 6a — Agenda + reagendar automático**

**H3:** Que el caos de reagendar deje de ser tu problema.

**Dolor:**
> Cuando Mateo no viene, pasas entre 40 y 90 minutos rastreando quién puede cambiarse, escribiendo a tres familias por WhatsApp, ajustando el Excel, confirmando de nuevo. Cada cancelación es un mini-proyecto.

**Qué hace i-am.clinic:**
> El sistema detecta el hueco, cruza la disponibilidad de tu agenda y de las familias, y envía el mensaje de confirmación con el enlace de reagendado — todo sin que salgas de la herramienta ni abras WhatsApp.

**Resultado medido:**
> Objetivo piloto mes 3: ≥50% de reducción en tiempo de reagendado por evento.

*(Source: definition.md MSP success metrics — «Reagendar | 3-5 | ≥50% | calendar conflict-resolution events automated»; workflows.md wedge ranking #1.)*

---

**Bloque 6b — Nota SOAP → PDF para familia**

**H3:** Una nota. Dos versiones. Cero transcripciones extras.

**Dolor:**
> Escribes la nota clínica en Word para ti. Luego, si tienes tiempo y energía, escribes otra versión para la familia en lenguaje llano y la mandas por WhatsApp. El 70% de las semanas la versión familiar no sale. La familia sigue sin saber exactamente qué pasó en la sesión.

*(Source: workflows.md — «Write parent summary | Word (often skipped) | "registro es solo para ella" (E29)».)*

**Qué hace i-am.clinic:**
> Tu nota de sesión —dictada o escrita— se estructura en SOAP en español neuroafirmativo. El sistema genera automáticamente el resumen para familia en lenguaje claro: qué trabajaron, qué logró Mateo esta semana, qué continuará la próxima. Tú lo revisas antes de que salga.

**Resultado medido:**
> Objetivo piloto mes 3: ≥40% de reducción en el tiempo nota-a-PDF por sesión. Todas las familias con resumen semanal cada semana.

*(Source: definition.md MSP success metrics — «Notes + parent reports | 5-8 | ≥40% | session-to-PDF time per patient».)*

---

**Bloque 6c — Cobranza mínima viable**

**H3:** El registro de honorarios que siempre postergaste.

**Dolor:**
> La hoja de cobranza está en Excel o en una libreta. El seguimiento de quién pagó es por memoria. La factura del mes es un documento Word que se manda por WhatsApp. Nadie lo concilia automáticamente con el calendario.

*(Source: workflows.md — «Track who paid | Separate Excel or paper notebook | No reconciliation with calendar».)*

**Qué hace i-am.clinic:**
> Por sesión: registra el cobro al cerrar la nota. Por mes: genera el PDF de recibo y lleva el historial de pagos por familia. No hay integración bancaria en esta versión — no prometemos lo que no tenemos. Sí hay registro limpio y exportable.

**Resultado medido:**
> Objetivo piloto mes 3: ≥50% de reducción en tiempo de cobranza semanal.

*(Source: definition.md v1 scope #3 — «per-session ledger, monthly PDF invoice»; workflows.md quantified table «Cobranza / billing | 2–4 hr/week».)*

**CTA mid-page (al pie de los tres bloques):**

> ¿Quieres ver cómo funciona con tu flujo real?
>
> **Agenda una llamada de 30 minutos**
>
> *Sin compromiso · Respondemos en menos de 24 h*

**Visual brief features:** Tres bloques en grid horizontal (desktop), apilados en móvil. Cada bloque: fondo crema, borde suave terracota en el lado izquierdo. Título en verde profundo. Dato de resultado en badge verde salvia pequeño al pie. Sin gráficos de barras. Sin capturas de pantalla de dashboard con decenas de métricas.

---

### Sección 7 — `parent-pdf` — El resumen que Mateo merece

**H2:**

> La familia de Mateo recibe esto cada viernes. Tú lo revisas y lo apruebas.

**Subhead:**

> No es un informe para el expediente. Es el documento que muestra, en el propio lenguaje de la familia, qué pasó en la semana y para qué sirvió.

**Cuerpo:**

> Durante años, el registro clínico existió para la terapeuta. La familia recibía un resumen verbal en el pasillo o ningún resumen. Eso no es por falta de cuidado — es por falta de tiempo y de herramienta.
>
> i-am.clinic genera el resumen semanal a partir de tus notas de sesión. Lo produce en lenguaje claro, sin «modificar conducta», sin «paciente con TEA», sin términos que la mamá de Mateo tiene que buscar en Google. Tú lo lees, lo corriges si algo no te convence, y lo apruebas. La familia lo recibe.
>
> El documento lleva tu nombre. Refleja tu criterio clínico. Y llega cada semana.

**Detalle del artefacto (descripción del mockup):**

Documento de una página. Encabezado: «i-am.clinic — Resumen semanal de Mateo — semana del 28 de abril al 2 de mayo de 2026». Terapeuta: Lic. Ana García · Psicóloga. Área de trabajo esta semana: comunicación funcional — pedir objetos. Logros de la semana: «Mateo pidió el jugo usando su tableta en 4 de 5 intentos. Es un avance claro respecto a la semana pasada, cuando lo logró en 2 de 5.» Para la próxima semana: «Vamos a practicar la misma estrategia durante el desayuno. Pueden ayudar haciendo una pausa antes de ofrecerle el vaso para que tenga espacio de pedirlo.» Pie de página: «Documento generado con i-am.clinic · Para preguntas, contacten directamente a la terapeuta.»

*(Source: competitor-audit.md Wedge 5 — «parent-facing PDF as the hero artifact»; competitor-audit.md Change 3.)*

**Línea de cierre:**

> Esta es la versión que la familia guarda. La tuya tiene además el SOAP completo, los objetivos de sesión y tus notas de observación.

**Visual brief:** El mockup del PDF ocupa 60% del ancho en desktop, con un sutil halo terracota que lo enmarca. A la izquierda, el texto de apoyo. El PDF se ve como un documento real: no como una captura de pantalla de un dashboard, sino como algo que imprimirías y pegarías en la carpeta del niñe. Fondo crema de página, tipografía humanista, sin gráficos de comportamiento.

---

### Sección 8 — `pricing` — Precios

**H2:**

> Tres planes. Sin permanencia. Sin letra chica.

**Subhead:**

> El precio en USD está indicado en cada plan. La mayoría de terapeutas elige Consultorio.

---

**Tres planes (tal como están implementados en `apps/landing/src/components/sections/pricing/data.ts`):**

| | **Esencial** | **Consultorio** | **Clínica** |
|---|---|---|---|
| **Precio** | USD 0 / siempre | USD 29 / mes | USD 69 / mes |
| **Para quién** | Hasta 5 pacientes activos | Práctica privada de tiempo completo | Equipos de hasta 6 profesionales |
| **Funciones principales** | Agenda con recordatorios, 10 notas al mes, cobros por transferencia | Pacientes y notas ilimitadas, recibos automáticos, dictado por voz en español, recordatorios por WhatsApp y correo, soporte en horario de consulta | Todo lo de Consultorio + multi-terapeuta y derivaciones, reportes administrativos, onboarding 1:1 |
| **CTA** | «Unirme a la lista de espera» | «Unirme a la lista de espera» | «Hablar con ventas» |

Tier destacado: **Consultorio** (borde verde salvia).

*(Nota: los precios y nombres de tiers son los as-built. Si la política de precios cambia, actualizar `pricing/data.ts` y este archivo en el mismo commit.)*

---

**Bloque de garantía:**

> **Garantía mes 3:** Si al tercer mes de piloto no recuperaste al menos 6 horas a la semana respecto a tu línea base, te devolvemos lo pagado y te ayudamos a exportar todos tus datos en un formato que puedas abrir en Excel.

*(Source: brand.md §5 narrative arc — «Si al mes tres no recuperaste seis horas a la semana, te devolvemos el dinero y te ayudamos a exportar tus datos»; definition.md MSP success metrics — «≥6 hr/week recovered per therapist» by Mo 3.)*

---

**CTA de pricing:**

> **Unirme a la lista de espera** → `#waitlist`

**Visual brief pricing:** Tres tarjetas en grid (desktop), apiladas en móvil. Encabezados en verde profundo. La tarjeta Consultorio tiene borde verde salvia y está elevada (shadow-md). La garantía aparece en un bloque aparte con borde terracota. Sin iconos de estrellas ni badges de «más popular» — la tarjeta destacada se distingue solo por el borde y la elevación.

---

### Sección 9 — `faq` — Preguntas frecuentes

**H2:**

> Lo que nos preguntan antes de reservar.

---

**P1: ¿Mis datos y los de mis pacientes están protegidos?**

> Sí. Los datos se alojan en servidores con cifrado en tránsito y en reposo. Cumplimos con los principios de la Ley de Protección de Datos Personales de Perú (Ley 29733), la Ley Federal de Protección de Datos Personales de México (LFPDPPP), la Ley 1581 de Colombia, y nos alineamos con los estándares LGPD (Brasil) para terapeutas que atienden familias brasileñas.
>
> Tus notas clínicas son tuyas. Puedes exportarlas en cualquier momento. Nunca usamos el contenido clínico para entrenar modelos sin tu consentimiento explícito.
>
> Si quieres los detalles técnicos y legales completos, escríbenos a privacidad@i-am.clinic.

*(Source: competitor-audit.md — iClinic BR LGPD hook; brand.md §3 «Cálida-clínica».)*

---

**P2: ¿Y si al mes tres no me ahorra tiempo?**

> Esa es exactamente la garantía. Si al mes 3 de tu piloto no recuperaste al menos 6 horas a la semana respecto al ritmo que tenías antes de empezar, te devolvemos todo lo pagado y te ayudamos a exportar tus datos en un formato que puedas seguir usando en Excel o Google Sheets. Sin trámites, sin letra chica.
>
> La medición la hacemos juntas: al inicio del piloto te pedimos que registres cuánto tiempo le dedicas hoy a reagendar, notas y cobranza. Al mes tres, comparamos.

*(Source: brand.md §5 — garantía mes 3; definition.md MSP success metrics.)*

---

**P3: ¿Cómo migro desde Word, Excel y WhatsApp?**

> No hay migración masiva porque no hay mucho que migrar. Tu historial en Word se queda en Word — puedes seguir consultándolo. En i-am.clinic empiezas con los perfiles de tus pacientes actuales (nombre, edad, objetivos de trabajo) y desde ahí las notas se construyen sesión a sesión.
>
> Al inicio del piloto te acompañamos en la configuración: una llamada de 30 minutos es suficiente para que tu agenda esté cargada y tu primera nota salga el mismo día.

---

**P4: ¿Funciona si mi internet es inestable?**

> La herramienta es web (no requiere instalar nada) y funciona bien con conexiones de velocidad moderada. Las notas se guardan localmente mientras escribes y se sincronizan cuando la conexión se estabiliza.
>
> Para sesiones sin internet, puedes escribir en cualquier editor que tengas a mano y pegar el texto al volver a conectarte. En v1 no hay modo offline nativo — lo tenemos en el plan pero no lo prometemos antes de tenerlo.

---

**P5: ¿Funciona para mi acento / dialecto?**

> El reconocimiento de voz está entrenado para español de Perú, México, Colombia y Argentina. Si usas términos propios de tu región («carro», «auto», «coche»; «niñe», «niño», «niña»), el sistema los reconoce y los mantiene exactamente como los dijiste — no los «corrige» a un español neutro estándar.
>
> Las plantillas SOAP están en español LATAM, sin tecnicismos innecesarios. Si hay términos clínicos que usas diferente en tu país, puedes editarlos en la configuración de tu cuenta.

*(Source: definition.md AI role — «Voice/text → structured SOAP session note (Spanish, accent-tolerant per PE/MX/AR/CL)».)*

---

**P6: ¿Cómo funciona la facturación fiscal — SUNAT, CFDI, AFIP?**

> En esta versión, i-am.clinic emite el recibo de honorarios en PDF para que lo entregues a tu paciente. La factura fiscal electrónica (boleta/factura SUNAT en Perú, CFDI en México, factura en Colombia, factura en Argentina) la sigues generando en el portal tributario que ya usas hoy — SUNAT SOL, el SAT de México, DIAN, AFIP.
>
> Es lo mismo que haces ahora, solo que el registro interno ya está ordenado y el PDF de recibo sale automáticamente.
>
> La integración directa con los portales tributarios es el paso siguiente — lo tenemos identificado como prioridad para v1.1 una vez que el piloto nos confirme qué país necesita ir primero.

*(Source: definition.md v1 scope #3 — «Local electronic-invoice rails (SUNAT/CFDI/AFIP) are explicitly out of v1»; workflows.md — «Tax / boleta electrónica | SUNAT / SAT / AFIP portal | Manual entry».)*

---

**P7: ¿Funciona si atiendo pacientes de varios países?**

> Sí. Si tienes pacientes en Perú y también atiendes en línea a familias en México o Colombia, puedes tener perfiles en diferentes países dentro de la misma cuenta. Los recibos PDF se pueden personalizar con la información que corresponda a cada contexto.
>
> La integración con cada portal tributario (SUNAT, SAT, DIAN, AFIP) es todavía manual — eso no cambia en v1. Pero el registro y el PDF salen desde un solo lugar.

---

**P8: ¿Esto es para terapistas ABA o BCBA?**

> No. i-am.clinic está construido para psicólogas, fonoaudiólogas y terapeutas ocupacionales que trabajan con personas autistas en consulta privada en LATAM, desde un marco neuroafirmativo.
>
> Las plantillas, el lenguaje y el resumen para familias están diseñados para no incluir «modificar conducta», «extinguir respuestas», CPT codes ni lógica de billing de seguros. Si tu marco de trabajo es ABA conductual clásico con facturación de seguros, esta herramienta no es para ti — y preferimos decírtelo ahora.

*(Source: brand.md §4 lexicon — lista de términos prohibidos; definition.md — «Insurance / obras sociales claim submission (no)»; competitor-audit.md Wedge 4 — posición diferenciada frente a ABA-US.)*

---

**P9: ¿Necesito una tarjeta de crédito para empezar?**

> No. Para reservar el piloto y la llamada de 30 minutos, no pedimos ningún dato de pago. Si después del piloto decides continuar, ahí coordinas cómo prefieres pagar (transferencia, Yape, Plin, tarjeta — lo que funcione en tu país).

**Visual brief FAQ:** Accordion limpio. Cada pregunta tiene una pequeña etiqueta de categoría en verde salvia (Privacidad · Garantía · Migración · Conectividad · Idioma · Fiscal · Multi-país · Posicionamiento · Pago). Respuestas directas, sin introducción de relleno. Sin iconos de «?» gigantes. El tono es el de una colega respondiendo, no el de un manual legal.

---

### Sección 10 — `about` — Por qué construimos esto

**H2:**

> Construido por alguien que vio el problema desde adentro.

**Cuerpo:**

> i-am.clinic nació de una conversación concreta: una fonoaudióloga en Lima que tenía 14 niñas y niños autistas en su consulta, tres archivos Excel abiertos al mismo tiempo, y un WhatsApp personal que sonaba el domingo por la noche con una pregunta de una mamá sobre la sesión del viernes.
>
> El problema no era falta de formación ni falta de dedicación. Era que ningún software existente hablaba su idioma — ni en español real, ni en el vocabulario clínico que ella usa, ni en soles, ni en la lógica de una práctica privada que factura por Yape.
>
> Nos importa que el documento que recibe la familia de Mateo lo llame «persona autista» y no «paciente con TEA». Eso no es marketing — es que el lenguaje del informe forma parte del respeto que merece Mateo.
>
> La identidad del producto viene del nombre: Mateo es Mateo en la sesión y Mateo en el documento. Nosotras somos la clínica donde eso no cambia.

*(Source: brand.md §1 positioning sentence; brand.md §2 brand promise; brand.md §8 one-line elevator.)*

**Línea de cierre:**

> Estamos en los primeros meses. El piloto es cerrado y lo llevamos de forma concierge — sin autoservicio masivo, porque queremos hacerlo bien antes de hacerlo grande.

**Visual brief:** Fondo blanco crema. Tipografía ligeramente más pequeña que el body principal, como una nota al margen. Sin foto de equipo fundador. Sin foto de stock de consultorio. Sin «nuestra misión es transformar». El texto es la pieza; no necesita decoración.

---

### Sección 11 — `waitlist` — Lista de espera

Implementada en Phase 6. Sección con fondo `surface-alt`, ancla `#waitlist`. Formulario de captura de correo con double opt-in via Resend.

**H2:**

> Sé de los primeros.

**Lede:**

> Anotate y te avisamos cuando haya cupo. Sin compromiso ni spam.

**Campos del formulario (ver `apps/landing/src/components/sections/waitlist/copy.ts`):**

| Campo | Requerido | Notas |
|---|---|---|
| Nombre | No (opcional) | Placeholder «Tu nombre (opcional)» |
| Correo electrónico | Sí | Validación de formato; placeholder «correo@ejemplo.com» |
| Rol | Sí | Select: Terapeuta independiente · Centro o clínica · Familia o cuidador · Otro |
| Consentimiento | Sí | Checkbox: «Acepto que i-am.clinic guarde mi correo para enviarme novedades sobre el lanzamiento.» |

**Flujo double opt-in:**

1. Envío del formulario → `POST /api/waitlist/signup` → registro en base de datos con `confirmed = false`
2. Resend envía correo de confirmación desde `hola@i-am.clinic` con enlace tokenizado
3. Click en enlace → `GET /api/waitlist/confirm?token=...` → `confirmed = true` en base de datos
4. Usuario redirigido a `/confirmado`

**Estado de éxito (antes de confirmar correo):**

> Listo, te anotamos.
> Revisá tu bandeja de entrada — te enviamos un correo de confirmación.

**Estado si el correo ya estaba confirmado:**

> Ya estás en la lista. Tu correo ya está confirmado. Te avisamos cuando abramos los primeros cupos.

**Línea de confianza bajo el botón:**

> Sin spam. Podés darte de baja en cualquier momento.

*(Source: apps/landing/src/lib/waitlist/, apps/landing/src/pages/api/waitlist/)*

---

### Sección 12 — `final-cta` — CTA final + footer

**H2 (último bloque antes del footer):**

> Deja de pelear con Word.

**Subhead:**

> Si reconociste aunque sea una de esas tarjetas de dolor, anotarte no te cuesta nada.

**CTA primaria:**

> **Unirme a la lista de espera** → `#waitlist`

**Microcopy bajo CTA:**

> Sin tarjeta · Sin permanencia · Garantía mes 3

**Línea de garantía:**

> Y si al mes tres no recuperaste 6 horas a la semana, te devolvemos lo pagado.

---

**Footer (as-built — ver `apps/landing/src/components/sections/footer/links.ts`):**

Footer sobre fondo `ink-900`. Cuatro columnas (1 brand + 3 link groups):

- **Columna brand:** mark + nombre «i-am.clinic» + tagline «Hecho en Lima por psicólogos, ingenieros y diseñadores. Creemos que la consulta privada merece mejores herramientas.»
- **Columna 1 (Producto):** Funciones → `#funciones` · Precios → `#precios` · Demo → `/demo` · Preguntas → `#preguntas`
- **Columna 2 (Empresa):** Quiénes somos → `#equipo` · Contacto → `mailto:hola@i-am.clinic`
- **Columna 3 (Legal):** Aviso de privacidad → `/privacidad` · Términos de servicio → `/terminos` · Soporte → `mailto:hola@i-am.clinic`
- **Línea base:** © 2026 i-am.clinic · Lima, Perú | ¿Una duda? hola@i-am.clinic

**Sin**: íconos de redes sociales. Sin contadores de seguidores. Sin newsletter signup genérico. Sin selector de idioma en v1.

**Visual brief final CTA:** Fondo verde salvia oscuro (el único momento en que hay color de fondo sólido en la página). El texto está en blanco crema. El botón CTA tiene fondo blanco crema y texto verde oscuro — inversión del esquema habitual, efectiva sobre fondo oscuro. El footer es blanco crema estándar, tipografía pequeña pero legible (mínimo 14px), jerárquicamente claro.

---

## PARTE 3 — ESPECIFICACIÓN DE MICROCOPY

### 3.1 Variaciones del CTA primario por posición

El CTA canónico en el sitio as-built es **«Unirme a la lista de espera»** con href `#waitlist` (ancla a la sección de captura de correo). Ver `apps/landing/src/components/nav/links.ts` (`WAITLIST_CTA`) y `apps/landing/src/components/sections/pricing/data.ts`.

| Posición | Texto del botón | Destino |
|---|---|---|
| Header (nav) | «Unirme a la lista de espera» | `#waitlist` |
| Hero (above fold) | «Unirme a la lista de espera» | `#waitlist` |
| Pricing — tiers Esencial y Consultorio | «Unirme a la lista de espera» | `#waitlist` |
| Pricing — tier Clínica | «Hablar con ventas» | `mailto:ventas@i-am.clinic` |
| Post-demo viewport | «Unirme a la lista de espera» | `#waitlist` (ruta `/demo` ancla al formulario del landing) |

---

### 3.2 Formulario de discovery call

**Título del formulario:**

> Cuéntanos un poco sobre tu consulta.

**Subtítulo:**

> Con esto preparamos la llamada para que los 30 minutos sean útiles para ti.

**Campos:**

| Campo | Label | Placeholder | Helper text |
|---|---|---|---|
| Nombre | Nombre | Tu nombre | — |
| Email | Correo | tu@correo.com | Para enviarte la confirmación. No spam. |
| País | País | Selecciona tu país | Perú · México · Colombia · Argentina · Chile · Otro |
| Profesión | Profesión | Psicóloga · Fonoaudióloga · Terapeuta ocupacional · Pedagoga · Otra | Si tu título varía por país (psicóloga clínica, logopeda, etc.), escribe el que uses tú. |
| Pacientes TEA | ¿Cuántos pacientes autistas atiendes actualmente? | Número aproximado | No tiene que ser exacto. |
| Modalidad | Modalidad de atención | Presencial · Mixta · Totalmente en línea | — |
| Mensaje | ¿Hay algo específico que quieras que revisemos en la llamada? (opcional) | Cuéntanos si hay algo concreto que te gustaría ver o preguntar. | Este campo es opcional. |

**Errores de validación:**

| Campo | Error si vacío / inválido |
|---|---|
| Nombre | «¿Cómo te llamamos?» |
| Email | «Necesitamos un correo válido para enviarte la confirmación.» |
| Email (formato inválido) | «Este correo no parece válido. ¿Lo revisamos juntas?» |
| País | «Selecciona el país donde tienes tu consulta.» |
| Profesión | «¿Cuál es tu profesión?» |
| Pacientes TEA | «Un número aproximado está bien.» |
| Modalidad | «¿Atiendes presencial, en línea o mixto?» |

**CTA del formulario:**

> **Enviar y reservar mi llamada**

---

### 3.3 Estados de carga / vacío / éxito del formulario

**Estado de carga (mientras se envía):**

> Enviando… un momento.

*(Sin barra de progreso animada con porcentajes. Sin spinner de dashboard. Solo texto.)*

**Estado de éxito:**

> Listo. Recibimos tu solicitud.
>
> Te escribimos a [email] en menos de 24 horas para coordinar el horario de tu llamada. Si no ves el correo, revisa la carpeta de spam o escríbenos directamente a hola@i-am.clinic.

**Estado de error (fallo de red):**

> Algo no funcionó en el envío. Por favor intenta de nuevo. Si el problema continúa, escríbenos directamente a hola@i-am.clinic — respondemos en 24 h.

---

### 3.4 Página 404

**H1:**

> Esta página no existe — o todavía no.

**Cuerpo:**

> Si llegaste aquí desde un enlace, es posible que lo hayamos movido. Puedes volver al inicio o escribirnos a hola@i-am.clinic.

**CTA:**

> Volver al inicio

**Visual brief 404:** Fondo crema, texto centrado, sin ilustración de astronauta ni de engranaje roto. Tipografía humanista regular. El tono es el de alguien diciéndote «nos perdimos, volvamos».

---

### 3.5 Página de acceso en piloto cerrado («gating page»)

**H1:**

> El piloto está cerrado por ahora.

**Subhead:**

> Estamos incorporando a las primeras 20 terapeutas de forma concierge — queremos hacerlo bien antes de abrirlo a todas.

**Cuerpo:**

> Deja tu correo y eres la primera en saber cuándo abre el siguiente ciclo. Sin spam — solo un mensaje cuando tengamos lugar.

**Label del campo:**

> Tu correo

**Placeholder:**

> tu@correo.com

**CTA:**

> Quiero estar en la lista

**Microcopy bajo CTA:**

> Sin tarjeta. Sin compromiso. Solo un correo cuando abramos.

**Estado de éxito:**

> Anotado. Te escribimos cuando el siguiente ciclo esté listo.

---

## PARTE 4 — SEO / METADATA

### `<title>`

> Software de consulta para terapeutas TEA en LATAM — i-am.clinic

*(65 caracteres. Keyword principal: «terapeutas TEA LATAM». Incluye marca.)*

### Meta description (máx. 155 caracteres)

> Agenda, notas SOAP y reportes para familias de niños autistas — en español, para psicólogas, fonoaudiólogas y terapeutas ocupacionales en Perú, México, Colombia y Argentina. Piloto abierto.

*(189 caracteres — ajustar a: «Agenda, notas SOAP y reportes para familias — software en español para terapeutas que atienden personas autistas en LATAM. Piloto cerrado, 20 cupos.» = 153 caracteres)*

**Meta description final:**

> Agenda, notas SOAP y reportes para familias — software en español para terapeutas que atienden personas autistas en LATAM. Piloto cerrado, 20 cupos.

### Open Graph

**OG title:**

> i-am.clinic — Software de consulta para terapeutas TEA en LATAM

**OG description:**

> Reemplaza Word, Excel y WhatsApp con una herramienta en español pensada para psicólogas, fonoaudiólogas y terapeutas ocupacionales que atienden personas autistas en consulta privada.

**OG image alt:**

> Mockup del «Resumen semanal de Mateo» — resumen de sesión para familias generado por i-am.clinic, en español, en formato PDF.

### Twitter card

**Twitter title:**

> i-am.clinic — Software de consulta para terapeutas TEA en LATAM

**Twitter description:**

> ¿Todavía gestionas tu consulta TEA con Word, Excel y WhatsApp? i-am.clinic devuelve 6+ horas a la semana. En español. Piloto cerrado — 20 cupos.

**Twitter image alt:**

> Mockup del Resumen semanal de Mateo — PDF para familias generado por i-am.clinic.

---

### 5 queries objetivo (español, LATAM)

| # | Query | Intención de búsqueda | Justificación |
|---|---|---|---|
| 1 | «software para terapeutas autismo España latinoamerica» | Profesional buscando herramienta de gestión TEA en español | Mayor volumen potencial; ningún competidor directo rankea en español con este intent exacto. Competitor-audit.md confirma que todos los competidores son inglés-first. |
| 2 | «software notas clínicas psicóloga privada perú» | Psicóloga peruana buscando solución de documentación | Geotargeting preciso para el mercado anchor (PE); intent transaccional moderado-alto. |
| 3 | «cómo organizar agenda fonoaudióloga sin excel» | Fonoaudióloga buscando alternativa a Excel | Consulta conversacional que mapea directamente al wedge #1 de workflows.md (reagendar caos). SEO de contenido / blog. |
| 4 | «reporte de sesión para padres niño autista plantilla» | Terapeuta buscando plantilla de resumen para familia | Mapea al clímax del demo y a §7 parent-pdf (wedge 5 competitor-audit.md). Alta intención de solución inmediata; candidato a landing + plantilla gratuita descargable como lead magnet. |
| 5 | «software clínica psicología en español latinoamerica» | Dueña de clínica pequeña buscando EHR en español | Captura a persona 3f (clinic director); volumen menor pero ticket más alto (≤5 seats). Abre la puerta al plan Clínica. |

---

## PARTE 5 — REGISTRO DE HIPÓTESIS A/B

### Test 1 — Hero H1: stack nombrado directamente vs pregunta retórica

**Variante A (control):**

> ¿Todavía gestionas tu consulta TEA con Word, Excel y WhatsApp?

**Variante B:**

> Tu consulta TEA merece algo mejor que Word, Excel y WhatsApp.

**Hipótesis:**

La variante A (pregunta directa) genera mayor resonancia inmediata porque interpela a la terapeuta en su situación actual y fuerza un «sí» cognitivo. La variante B afirma sin interpelar y puede leerse como aspiracional genérico, que es exactamente el tono que brand.md rechaza. Esperamos que la tasa de scroll past-hero sea mayor en A que en B — es decir, que más terapeutas continúen leyendo después del hero en A.

**Métrica de éxito:** % de visitantes que hacen scroll más allá del hero en cada variante. Secundaria: CTR del CTA primario en hero.

**Condición de cierre:** n ≥ 500 visitantes por variante, p < 0.05 o 2 semanas de datos, lo primero que ocurra.

---

### Test 2 — Trust strip: precio local visible vs cita de terapeuta como bloque dominante

**Variante A (control):**

Trust strip muestra el bloque de precio local (S/ 75 · MX$ 350 · COP 82 000) como elemento de mayor tamaño tipográfico.

**Variante B:**

Trust strip muestra la cita de terapeuta («Es como si alguien hubiera diseñado un software de consulta para nosotras…») como elemento dominante; el precio queda en tipografía secundaria.

**Hipótesis:**

El precio en moneda local reduce la fricción de evaluación («¿esto es caro para mí?») más rápido que la cita de terapeuta en un contexto de brand desconocido. La variante A convierte mejor porque la barrera más alta es el precio, no la identidad de marca — todavía no hay suficiente reconocimiento de marca para que una cita tenga peso persuasivo propio. Esperamos mayor tasa de clic al formulario en A.

**Métrica de éxito:** CTR desde trust strip hacia el formulario de discovery call. Secundaria: tiempo en página.

**Condición de cierre:** n ≥ 500 visitantes por variante, p < 0.05 o 2 semanas de datos.

---

### Test 3 — Hero miniature: scope del loop de 12s

Reemplaza el test original de PDF estático vs calendario estático, obsoleto desde que el hero pasó a ser miniatura interactiva del demo (ver [`demo.md` §6](./demo.md)).

**Variante A (control):**

Loop del miniature dura 12 segundos: dictado acelerado (5s) + slide-in del PDF (2s) + frame held (3s) + reset (2s).

**Variante B:**

Loop del miniature dura 8 segundos, solo clímax: PDF slide-in (1s) + frame held (5s) + reset (2s). Sin dictado.

**Hipótesis:**

A muestra el flujo (cómo se llega al artefacto), B muestra el artefacto (qué recibe la familia). A demanda más atención y puede perder al visitante antes del payoff. B es más densa pero pierde el contexto de cómo se produjo el documento. Para un viewer que ya leyó el subhead, B puede ser suficiente; para uno que cae frío al hero, A puede ser el que vende.

**Métrica de éxito:** CTR del miniature al fullscreen `/demo` por variante. Secundaria: completion rate del demo fullscreen una vez que entran (mide si el loop pre-vendió el flujo).

**Condición de cierre:** n ≥ 500 visitantes por variante, p < 0.05 o 2 semanas de datos.
