---
slug: demo
status: draft
created: 2026-05-03
last_reviewed: 2026-05-03
product: therapist-saas
domain: i-am.clinic
language: es-LATAM
mode: guided-interactive
duration_target_seconds: 60
hero_role: live-miniature
fullscreen_route: /demo
references:
  - ../definition.md
  - ./brand.md
  - ./content.md
  - ../../../business/research/workflows.md
  - ../../../business/research/competitors/competitor-audit.md
---

# Landing demo — «La tarde de Ana»

Walkthrough **guiado e interactivo** de una tarde clínica de viernes. DOM real, clicks reales, texto real escrito por la visitante. No es video ni captura. Tampoco es el producto en modo sample (esa convergencia está fuera de v1; ver §15). Es un artefacto de marketing construido al estándar del producto, separado del codebase del producto durante v1.

El demo vive en dos superficies:

- **Miniatura embebida en el hero** (60–70% de escala, autoreproduce un loop de 12s del flujo). El loop es no-interactivo: vende el clic, no la conversión. Click → scale-up → ruta a `/demo`.
- **Versión completa en `/demo`** (~60s siguiendo todas las hints, auto-advance si la visitante no interactúa). Captions estáticas tipo film no existen; hay un hint rail contextual que se activa por dwell.

Ambas superficies usan el mismo DOM y los mismos assets visuales.

## 1. Goals — three, ranked

1. **Confianza.** Ana siente que el producto respeta su criterio clínico y la identidad de Mateo. Sin lenguaje de cura, sin AI-bro, sin reemplazo de juicio profesional. La interactividad misma es señal: el producto se deja tocar.
2. **Conversión.** Ana reserva el piloto al terminar el demo. CTA persistente, garantía mes 3 visible.
3. **Compartir.** Ana manda el demo al grupo de WhatsApp de fonoaudiólogas. Mecanismos: WhatsApp button, copiar enlace, descarga del PDF de ejemplo.

Audiencia: terapeuta de consulta privada TEA en LATAM (persona [`3a SLP`](../../../business/research/personas.md#3a-slp--fonoaudiólogo-school--or-clinic-based) y [`3c psicóloga`](../../../business/research/personas.md#3c-psychologist--clinical-psychologist-private-practice-or-clinic)).

## 2. Audience constraint — therapist only

Cada estado del flujo se valida con la pregunta: «¿qué le sirve a Ana saber esto?» Si la respuesta es «nada, es para alguien más», se elimina. No se diseña para terceros que la observen; el respeto al artefacto es lo que hace que se comparta.

## 3. Format

- **Tipo:** guided-interactive (no scripted-video, no free sandbox)
- **Render:** DOM real animado, real input handling, real PDF generation
- **Duración:** ~60s siguiendo hints; auto-advance fallback dispara cada paso si pasan 8s sin interacción
- **Audio:** ninguno. Mute total. Sin sound design, sin voiceover, sin música.
- **Controles:** sin scrubber, sin play/pause. La visitante avanza al actuar; el sistema avanza solo si no actúa.
- **Idioma:** tuteo LATAM por defecto. Voseo deferred a variante AR según validación de piloto.
- **Persistence:** ninguna. Refresh = estado inicial. Cada visita es nueva.
- **Escape hatch:** link permanente «Saltar al final» en esquina superior derecha; lleva al estado de cierre + CTAs.

Justificación: brand.md §6 — el producto es «el consultorio bien iluminado a las cinco de la tarde». La interactividad encarna la promesa «concreta» de §3 voice; mostrar que se puede tocar es la diferencia con incumbentes que solo ofrecen videos.

## 4. Flow — guided interactive states

Personaje fijo: **Lic. Ana García · psicóloga**. Pacientes: **Mateo R., Sofía B., Diego R.** Heredados de [`content.md` §7](./content.md). No se inventan nuevos.

Estado pre-cargado: viernes 17:02, sesión de Mateo (16:00–17:00) recién cerrada. Una nota pendiente. Agenda del día incluye también Lucía P. (14:00, sesión 6) y Tomás R. (15:00, primera sesión), ambas ya cerradas. Sofía B. agendada para martes 10:00. Diego R. agendado para lunes 8:00.

Cada estado define: lo que se ve, la acción esperada, la hint contextual (dwell ≥ 3s), el auto-advance fallback (dwell ≥ 8s), la transición al siguiente estado.

### Estado 1 — Apertura
- **Visible:** agenda semanal, viernes destacado, sesión de Mateo marcada como «cerrada · nota pendiente»
- **Acción esperada:** click sobre la sesión de Mateo
- **Hint (≥3s):** flecha punteada apuntando a la sesión + popover «Tocá la sesión de Mateo para escribir la nota»
- **Auto-advance (≥8s):** sistema simula el click, abre el editor
- **Transición:** editor de nota aparece desde la derecha

### Estado 2 — Editor de nota abierto
- **Visible:** panel SOAP vacío con label «Subjetivo», botón de dictado prominente, indicador de voz reposado
- **Acción esperada:** click en dictado, o tipear directo en el campo Subjetivo
- **Hint (≥3s):** popover sobre el botón de dictado «Probá dictar. También podés escribir directo.»
- **Auto-advance (≥8s):** sistema activa dictado simulado (texto aparece carácter por carácter en Subjetivo), avanza a Estado 3
- **Transición:** texto aparece en Subjetivo; campos O/A/P se rellenan con micro-delay

### Estado 3 — Nota completa, botón resumen destacado
- **Visible:** los 4 campos SOAP rellenos (Subjetivo con el texto de Ana o el simulado), botón «Resumen para familia» con halo verde salvia suave
- **Acción esperada:** click en «Resumen para familia»
- **Hint (≥3s):** popover sobre el botón «Generá el resumen para la familia de Mateo»
- **Auto-advance (≥8s):** sistema simula el click
- **Transición:** PDF se desliza desde la derecha (400ms), held frame inicia

### Estado 4 — Climax · PDF held
- **Visible:** PDF «Resumen semanal de Mateo · semana del 28 de abril», léxico neuroafirmativo destacado en verde salvia («persona autista», «logró», «vamos a practicar»). Si Ana escribió texto propio en Estado 2, ese texto aparece integrado en el resumen.
- **Acción esperada:** ninguna. Quietud intencional. La visitante absorbe.
- **Hint (≥4s):** sub-popover discreto debajo del PDF: «Tú lo revisas. Tú lo apruebas. Tú lo envías.»
- **Sin botón de descarga.** El pie del PDF muestra «Borrador · revisas tú antes de enviar» en texto muted — no hay affordance de descarga en este estado.
- **Auto-advance (≥10s):** sistema avanza a reagendado. El frame held es el más largo del demo: lo que respira es lo que vende.
- **Transición:** PDF queda visible reducido a un costado; toast de cancelación entra superior derecho

### Estado 5 — Reagendado interrupt
- **Visible:** toast «Cancelación: Sofía B., martes 10:00», sistema sugiere 3 slots alternativos
- **Acción esperada:** click sobre uno de los slots sugeridos
- **Hint (≥3s):** popover «Aceptá el slot sugerido. La familia recibe la confirmación por WhatsApp.»
- **Auto-advance (≥8s):** sistema selecciona el primer slot
- **Transición:** confirmación WhatsApp sale (mini-bezel de teléfono opcional), agenda se actualiza

### Estado 6 — Cierre
- **Visible:** pantalla limpia, frase de cierre centrada en tipografía un poco mayor: «Mateo es Mateo en la sesión, y Mateo en el documento.» Marca pequeña abajo.
- **Acción esperada:** ninguna. La visitante lee.
- **Auto-advance (≥3s):** post-demo viewport (§7) entra desde abajo
- **Transición:** post-demo CTAs sticky aparecen, cierre permanece arriba

Beats deliberadamente fuera del flujo:
- **Cobranza.** Wedge #4, segundo objetivo de hours-saved más bajo. Cubierto en [`content.md` §6c](./content.md). Si entra al demo, diluye el clímax.
- **Garantía como estado.** Vive en el viewport post-demo (§7) y en [`content.md` §8 pricing](./content.md).

## 5. Hint rail — copy locked

Hints son copy de producto, no narración. Cada línea pasa el filtro [`brand.md` §3-§4](./brand.md). Aparecen condicionalmente por dwell, no por timeline.

| ID | Texto | Estado | Trigger |
|---|---|---|---|
| H1 | Tocá la sesión de Mateo para escribir la nota. | Estado 1 | dwell ≥ 3s |
| H2 | Probá dictar. También podés escribir directo. | Estado 2 | dwell ≥ 3s |
| H3 | Generá el resumen para la familia de Mateo. | Estado 3 | dwell ≥ 3s |
| H4 | Tú lo revisas. Tú lo apruebas. Tú lo envías. | Estado 4 | dwell ≥ 4s |
| H5 | Aceptá el slot sugerido. La familia recibe la confirmación por WhatsApp. | Estado 5 | dwell ≥ 3s |

Términos prohibidos en hints (heredados de [`brand.md` §4](./brand.md)): «AI», «IA», «inteligente», «smart», «powered by», «automágico», «paciente con TEA», «modificar», «corregir», «monitorear», «potencia», «transforma», emojis, signos de exclamación. También prohibido: cualquier verbo que atribuya acción al sistema sin agencia de la terapeuta («se estructura sola», «el sistema decide», «la IA escribe»).

Si Ana avanza por su cuenta dentro de los 3 segundos, su hint no llega a aparecer. Es deliberado: la usuaria rápida no necesita tutoría.

## 6. Hero miniature — embedded mode

El hero del landing es la miniatura del demo, no captura ni PDF estático. Resuelve la duplicación que existía cuando el hero mostraba el PDF y el demo lo revelaba como clímax.

### 6.1 Estado idle

- Carga inicial: vista de agenda (frame del Estado 1), estática
- Cursor estático sobre la sesión de Mateo, sugerencia visual de inicio
- Affordance permanente, esquina inferior derecha del miniature: «Probar el demo completo →» en verde salvia, tipografía pequeña, sin botón agresivo

### 6.2 Loop teaser

- Trigger: viewport intersection ≥ 50% del miniature
- Loop: 12 segundos. Subset condensado del flujo, **no interactivo**:
  - 0–2s: cursor click sobre sesión, editor abre
  - 2–7s: dictado acelerado (≈45 c/s) llena Subjetivo
  - 7–9s: botón «Resumen para familia» se presiona, PDF slide-in
  - 9–11s: PDF held, sin hints
  - 11–12s: fade out, loop reset a estado idle
- Sin hints en el loop. Densidad narrativa es para la versión completa.
- En `prefers-reduced-motion`: loop pausa en frame idle.

### 6.3 Click → fullscreen → /demo

- Cualquier click sobre el miniature dispara la transición
- Animación: scale-up del miniature al ancho del viewport (600ms ease-in-out), fade del resto del hero
- Al completarse: navegación a `/demo`, el flujo arranca en Estado 1 con auto-advance pausado (espera input de Ana)
- Back del navegador: vuelta al hero con miniature en idle

### 6.4 Escala visual

- Desktop: miniature ocupa entre 60% y 70% del ancho del viewport, alineado a la derecha del hero copy
- Móvil: miniature ocupa 100% del ancho, debajo del subhead
- Sombra suave (no neon glow), borde redondeado 8px

## 7. Post-demo viewport (versión completa)

Cuando termina el Estado 6, demo se queda en frame final. **No vuelve a empezar.** Aparece bloque sticky en viewport:

```
                 [ Reservá tu piloto de 4 semanas ]
                Garantía mes 3 · sin tarjeta · sin permanencia

           [ Compartir por WhatsApp ]   [ Copiar enlace ]
```

Jerarquía:
- **Botón primario** verde salvia, ancho aprox. 320px, lleva al formulario de discovery call ([`content.md` §3.2](./content.md)). Microcopy debajo en gris suave.
- **Botones secundarios** outline, lado a lado: WhatsApp share + copiar enlace.
- **Sin botón de replay.** Si Ana quiere ver de nuevo, recarga `/demo`. Replay competía con el CTA primario por atención.

## 8. Share mechanics — three affordances

Lista cerrada. No otros íconos de redes sociales (Twitter, FB, LinkedIn excluidos por estar fuera del ICP, per [`brand.md` §3 «No somos»](./brand.md)).

### 8.1 WhatsApp share button (primario)

- Click → abre `wa.me` con texto pre-rellenado y URL
- Texto pre-rellenado: «Mira esto. Software de consulta TEA en español, sin Word ni Excel. Te recupera 6 horas a la semana. https://i-am.clinic?ref=ws»
- URL incluye `utm_source=whatsapp&utm_medium=peer-share`
- OG image = mockup del PDF (specced en [`content.md` §4 OG image](./content.md))

### 8.2 Copiar enlace (secundario)

- Click → copia URL al clipboard, toast 2s «Enlace copiado»
- URL idéntica a 8.1 con `utm_medium=link-copy`

### 8.3 Descargar ejemplo del PDF (terciario, dentro del demo)

- Affordance que aparece a los 5s del Estado 4
- Click → descarga `resumen-mateo-ejemplo.pdf`. Si Ana escribió texto propio en Estado 2, ese texto aparece en el PDF descargado
- Watermark al pie del PDF: «Ejemplo generado con i-am.clinic · Toda la información es ficticia · i-am.clinic»
- Por qué: terapeutas screenshotean el PDF de igual modo. Mejor controlar el asset que circula

Deep-link share por capítulo está fuera de v1.

## 9. Trust signals — woven, not labeled

Ningún badge, ningún logo de cumplimiento, ninguna mención de cifrado. Confianza viene de coherencia y de interactividad real.

| Signal | Dónde aparece | Qué comunica |
|---|---|---|
| Interactividad real desde Estado 1 | Todo el demo | El producto se deja tocar. No es video. |
| H4 «Tú lo revisas. Tú lo apruebas. Tú lo envías.» | Estado 4 | Producto no reemplaza juicio clínico |
| Léxico neuroafirmativo en PDF | Estado 4 | Documento respeta a Mateo |
| Frame held de 4–10s en climax | Estado 4 | El producto puede quedarse quieto; no necesita gritar |
| PDF descargable contiene tu texto | Estado 4 | El artefacto es real, te lo llevás |
| Garantía mes 3 en post-demo | Después del cierre | Sin riesgo de probarlo |
| Cierre con frase de marca en voz cálida | Estado 6 | Esta gente entiende |

Ningún estado dice «privado», «seguro», «cumplimos con LGPD/SUNAT/etc». La FAQ P1-P3 cubre eso para quien busca la prueba escrita.

## 10. Anti-patterns — what to refuse during build

Lista derivada de [`brand.md` §7](./brand.md) y aplicada al demo:

- **Sin** sonido de teclado, pen-on-paper, ticks, swooshes, ambient pad. Mute total.
- **Sin** parallax, zoom dinámico, 3D mockups, gradientes neón, partículas, confeti.
- **Sin** badges «AI-powered», «GPT-4», estrellas, «más popular», «recomendado».
- **Sin** stock de doctora con bata, foto de niñe mirando ventana, ilustraciones de cerebros, rompecabezas, manos sosteniendo manos.
- **Sin** dashboards densos, gráficos de barras, heatmaps, scoring de comportamiento.
- **Sin** «sign up to see this» gate. El demo es regalo, no carnada.
- **Sin** stats overlay tipo «4 minutos ahorrados, 1 nota cerrada, 1 recibo enviado». La garantía cuantifica mejor que cualquier overlay.
- **Sin** before-shot de WhatsApp/Excel/Word disolviéndose. La sección [`content.md` §4 problem](./content.md) ya hace ese trabajo.
- **Sin** captions narradas voiceover, sin caption rail tipo film.
- **Sin** «AI», «IA», «automágico», «inteligente» en ningún string visible.
- **Sin** signos de exclamación en hints o copy.
- **Sin** verbos que atribuyan acción al sistema sin la terapeuta como sujeto.
- **Sin** acento toggle multi-flag.
- **Sin** onboarding tour intrusivo (overlays oscuros, secuencia obligada). Las hints son contextuales y skippeables.

## 11. Build priority

Orden estricto. Estados 1-4 son ship-blockers; 5-6 + auto-advance + share son polish.

1. Estados 1–4 con interactividad real (click sesión, abrir editor, dictado real-or-typed, botón resumen, PDF reveal con held)
2. Hint rail con dwell triggers (3s aparece, 8s auto-advance)
3. Sub-hint H4 «Tú lo revisas...» en Estado 4
4. CTA sticky post-demo + WhatsApp share + copiar enlace
5. Hero miniature mode (estado idle + loop 12s + click→fullscreen transition)
6. Estado 5 reagendado interrupt
7. Estado 6 cierre con frase de marca
8. Descarga del PDF ejemplo (con texto de Ana integrado vía backend)
9. `prefers-reduced-motion` opt-out + escape hatch «Saltar al final»

Si presupuesto se acorta: 1-4 = lanzable. Sin 5 el hero queda con un PDF estático provisional. Sin 6 el wedge #1 queda sin demo (cubierto en [`content.md` §6a](./content.md)).

## 12. Done criteria

Demo se considera ship-ready cuando:

- [ ] Los 6 estados son interactuables; cada uno responde a click real
- [ ] Hints aparecen en ≥3s de dwell, auto-advance dispara en ≥8s
- [ ] Tipear texto en Estado 2 se refleja en el PDF del Estado 4 (campo «Cómo llegó»). No hay descarga en Estado 4 — el pie muestra «Borrador · revisas tú antes de enviar».
- [ ] Las hints pasan el filtro de copy sin un solo término prohibido
- [ ] El PDF del climax es coherente con el specced en [`content.md` §7](./content.md). Diferencia permitida: contenido del Subjetivo varía si Ana escribió texto propio.
- [ ] Los nombres en pantalla son Lic. Ana García, Mateo R., Lucía P., Tomás R., Sofía B., Diego R. No otros nombres.
- [ ] Compartir por WhatsApp + copiar enlace funcionan en mobile (probado en al menos 1 Android y 1 iPhone)
- [ ] Mute permanente confirmado, no hay assets de audio en el bundle
- [ ] Hero miniature scale-up transition no introduce flicker ni layout shift al rutear a `/demo`
- [ ] El loop de 12s no incluye hints ni texto narrativo
- [ ] `prefers-reduced-motion` pausa el loop y desactiva las transiciones de slide
- [ ] Test final: pasa el demo en silencio a una colega que no conoce el producto. ¿Le suena a colega o a startup? Solo la primera califica.
- [ ] Test funcional: una visitante puede completar los 6 estados sin tocar ninguna hint (UI orienta sola)

## 13. Measurement — landing-side

KPIs propios del demo, medidos sobre los goals 1-3 más engagement:

| Goal | KPI primario | Cómo se mide |
|---|---|---|
| Confianza | State-completion rate | % de visitantes que completan los 6 estados (interactuando o vía auto-advance). Llegar al cierre indica el demo no quebró su percepción. |
| Conversión | CTR del CTA primario post-demo | Click sobre «Reservá tu piloto» dividido entre vistas que llegan al Estado 6 |
| Compartir | Share-events absolutos por sesión | WhatsApp + copy-link + descargas de PDF, dividido entre sesiones de landing |
| Engagement (auxiliar) | Interaction rate | % de visitantes que avanzan por click propio vs. por auto-advance. Alto = el flujo orienta solo. Bajo = hints insuficientes o UI confusa. |

Métrica del hero miniature: % de visitantes que clickean el miniature y entran a `/demo`. Línea base esperada: ≥ 25% de los que pasan ≥ 5s en el viewport del hero.

Línea base esperada para `/demo`:
- State-completion rate ≥ 55% (industria: ~30–40% para demos interactivos)
- Interaction rate ≥ 60% (mayoría avanza sin esperar auto-advance; señal de claridad de UI)
- CTR post-demo ≥ 12%
- Share-rate-among-completers ≥ 5%

Si al mes 1 los KPIs caen por debajo del 70% del objetivo, revisar antes de doblar la inversión.

## 14. Open questions

- Voseo vs tuteo en hints — locked como tuteo (mayoría LATAM); abrir variante voseo si el piloto AR pide ajuste
- Loop del miniature: ¿12s con dictado+climax es óptimo, o conviene 8s solo del climax? Validar con primeros datos
- Generación real del PDF a partir del input de Ana en Estado 2: ¿llamada a backend de producción o servicio aislado del demo? Para v1 del demo, servicio aislado para evitar acoplamiento con producto core
- Hero miniature autoplay vs `prefers-reduced-motion` — opt-out automático para usuarios con flag
- Mobile bezel para WhatsApp confirm en Estado 5 — incluido condicionalmente, depende de presupuesto

## 15. Future — convergence with product

Esta versión del demo es un artefacto separado del producto. Razón: en v1 el producto puede no estar lo suficientemente pulido para BE the demo. El demo demuestra la versión idealizada; el producto la persigue.

Cuando producto core llegue a paridad con el demo (probablemente Mo 6–9), considerar migrar a la arquitectura «demo === product en modo sample» discutida y diferida en esta iteración. Beneficios futuros: SSOT total, cero drift posible entre demo y producto, mantenimiento single-codebase. Costo de no migrar: dos implementaciones del mismo flujo durante la ventana de divergencia.

Decisión de cuándo migrar: cuando el producto core implemente al menos los Estados 1–4 con calidad equivalente al demo y el equipo de producto pueda absorber el modo sample sin retrasar piloto.

# Sources

- [`definition.md`](../definition.md) — MSP success metrics, AI role, v1 scope
- [`brand.md`](./brand.md) — voice, lexicon, anti-patterns, positioning sentence
- [`content.md`](./content.md) — parent PDF artifact, CTA variations, FAQ P5/P1
- [`workflows.md`](../../../business/research/workflows.md) — wedges, quantified non-clinical load
- [`competitor-audit.md`](../../../business/research/competitors/competitor-audit.md) — wedge 5, hero pattern changes
