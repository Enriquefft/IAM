---
slug: image-prompts
status: draft
created: 2026-05-02
last_reviewed: 2026-05-02
product: therapist-saas
domain: i-am.clinic
language: en
purpose: Self-contained AI image-generation prompts. One asset per block. Paste any block verbatim into Recraft / Midjourney / Ideogram / Flux / Imagen / GPT-Image without editing.
---

# i-am.clinic — image-gen prompts

Each block is self-contained: brand metaphor, exact palette hex codes, dimensions, style direction, and anti-axis negatives are embedded inline. Tools without separate negative-prompt fields parse the trailing "no X, no Y" phrases as constraints.

Wordmark, combined lockups, favicon set, social cards, hero PDF mockup, product UI mockups, pitch-deck cover, pilot one-pager, and email signature are excluded from this list — they are typography/UI craft and live in `design-system.md` and `content.md`. These prompts cover only the AI-tractable assets.

Blocks above the `WE ARE HERE` marker are at the front of the generation queue (iteration complete, accepted for production use). Blocks below are pending first generation or pending iteration. Updated prompts for re-rolls have a `[REVISED]` tag in the heading. Generated files land in `apps/landing/public/` once accepted.

---

## 1. How-it-works step 1 — agenda with auto-rescheduling (240×240, transparent SVG)

```
A minimalist editorial line illustration for Latin American autism-therapy software. Subject: a small calendar grid of 4 columns by 3 rows of equal soft-corner squares (2 pixel corner radius), with one slot filled in solid salvia green hex #6B9B73 and a single thin curved arrow gently moving that slot one row down to a new position, suggesting calm automatic rescheduling. Calendar outlines drawn in ink hex #3D3026 at 1.5 pixel line weight on a 240 pixel canvas. The curved arrow is a single thin terracotta hex #D99070 curve with a small open arrowhead (not a filled triangle). Architectural-diagram warmth, schematic, calm, spare. Single line weight throughout. Drawn flat. Background fully transparent. Anchor metaphor: late-afternoon LATAM private practice, no urgency, no SaaS-bro velocity. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no character, no person, no hand, no clock face, no big numbers, no readable text, no garbled letters, no calendar app screenshot, no iOS or Android UI chrome, no notification badge, no red dot alert, no bell icon, no urgency, no dramatic angle, no thick bold strokes, no rough sketch. --ar 1:1
```

---

## 2. How-it-works step 2 — session note becomes parent PDF (240×240, transparent SVG)

```
A minimalist editorial line illustration for Latin American autism-therapy software. Subject: two stacked rectangular document shapes with soft-corner radius 3 pixels, the lower one slightly larger and shifted, connected by a single thin curved line moving from the top document down and gently to the side, suggesting one note becoming a second document — a translation, not a copy. Document outlines in ink hex #3D3026 at 1.5 pixel line weight on a 240 pixel canvas. The lower document contains three short horizontal lines (text content suggestion) in salvia hex #6B9B73. The upper document contains two short horizontal lines in ink hex #3D3026. The curved connector line is in terracotta hex #D99070, with open ends (no arrowhead). Architectural-diagram warmth, schematic, calm, spare, humanist rounded corners. Drawn flat. Background fully transparent. Anchor metaphor: LATAM clinical paperwork made calm. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no character, no hand holding pen, no signature, no graph, no chart, no big numbers, no garbled text, no readable letters, no PDF logo, no Microsoft Word logo, no application chrome, no thick bold strokes, no rough sketch, no inspirational arrow upward, no transformation symbol, no sparkle. --ar 1:1
```

---

## 3. How-it-works step 3 — cobranza ledger (240×240, transparent SVG)

```
A minimalist editorial line illustration for Latin American autism-therapy software. Subject: a small vertical list of three short horizontal lines stacked with even spacing, each preceded by a tiny soft-corner-square marker (1 pixel corner radius). Lines drawn in ink hex #3D3026 at 1.5 pixel line weight on a 240 pixel canvas, aligned to a clear left baseline. Square markers filled in terracotta hex #D99070. The bottom line has a small filled circle at its right end in salvia hex #6B9B73, suggesting a marked completion. Composition centered with equal top and bottom margins. Architectural-diagram warmth, schematic, calm, ledger-on-paper feel. Drawn flat. Background fully transparent. Anchor metaphor: LATAM private practice cobranza calm and clear. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no character, no hand holding money, no coin, no banknote, no credit card, no dollar sign, no peso sign, no big currency symbols floating, no graph, no chart, no upward arrow, no growth metaphor, no calculator, no spreadsheet UI, no Excel reference, no readable text, no garbled letters, no thick bold strokes, no rough sketch. --ar 1:1
```

---

## 4. Pricing-section mark — soft folded receipt (64×64, transparent SVG)

```
A minimalist abstract mark suggesting a soft-folded receipt or coin-on-paper for a Latin American clinical software brand. A soft-corner rounded square (4 pixel corner radius) with a single horizontal fold line across the middle, drawn at 2 pixel line weight on a 64 pixel canvas, outlined in terracotta hex #D99070. A small filled circular dot in salvia hex #6B9B73 sits in the lower-right interior corner, suggesting a calm payment confirmation tick. Schematic, spare, humanist. Drawn flat. Background fully transparent. Centered. Anchor metaphor: LATAM cash-pay private practice, no aggressive fintech aesthetic. No currency symbol, no dollar sign, no peso symbol, no euro, no coin face, no realistic coin detail, no banknote detail, no credit card, no QR code, no barcode, no shadow, no 3D, no gradient, no metallic shine, no big numbers, no readable text, no logo, no application chrome, no Excel cell, no spreadsheet, no thick bold stroke, no corporate blue, no fintech neon. --ar 1:1
```

---

## 5. About-section illustration — pass 1 atmospheric ideation (800×600, raster moodboard)

```
Editorial-style flat illustration of a single notebook half-open on a wooden desk surface, viewed from above at a slight 15-degree angle. Late-afternoon side light from upper-left. A small ceramic mug sits to the right of the notebook. A single fountain pen rests across the notebook's gutter. No screens, no laptop, no phone, no second person. Color palette strictly: warm cream background hex #FDFAF5, wood mid-tone hex #A8845A on the desk, salvia green hex #6B9B73 on the mug, terracotta hex #D99070 on the pen barrel, ink dark hex #1C1612 only for line work. Line weight 1.5 pixels at 800 pixel width. Style: editorial spot illustration, humanist sketch quality, the warmth of a Latin American craft poster, calm and deliberate. Anchor metaphor: "consultorio bien iluminado a las cinco de la tarde" — the desk where this product was started in Lima or CDMX. Paper texture absent or barely visible. Drawn flat with faint single-direction soft shadow only under the mug in wood-300 hex #C9AA84. No corporate blue, no navy, no cyan, no gradient, no shadow except the single faint mug shadow, no 3D rendered, no isometric, no photographic realism, no human face, no human hand, no character, no smiling, no inspirational pose, no laptop, no phone, no screen, no app UI, no sparkle, no glow, no halo, no clock, no calendar, no big numbers floating, no readable text, no garbled lettering, no corporate office, no cubicle, no skyscraper window, no plant in pot foreground, no realistic photographic texture, no thick bold stroke, no rough scribble, no signature. --ar 4:3 --style raw --stylize 75
```

---

WE ARE HERE
---

## 6. Logomark — primary [REVISED] (1024×1024, transparent SVG)

Revision rationale: the prior prompt was self-contradictory ("two geometric units" plus "doorway with figure inside"), which caused the model to render a third element — an outer arch reading as tombstone/lápida silhouette. This revision commits to two-units-only and explicitly forbids any containing arch, frame, U-shape, or doorway outline. The doorway metaphor is preserved as negative-space implication, never drawn.

```
A minimalist geometric logomark for a Latin American clinical software brand named i-am.clinic. The mark consists of EXACTLY TWO geometric units, nothing else: (1) a vertical post and (2) a small soft-corner-square dot floating above it, together reading as a lowercase letter "i". There is NO surrounding arch, NO doorway outline, NO U-shape, NO frame, NO containing rectangle, NO archway, NO tombstone outline, NO portal ring, NO halo. The doorway metaphor is implied only by the negative space around the two units, never drawn as a third element. Drawn as clean geometry with humanist warmth: not perfectly mechanical, slightly hand-drawn rounding on corners. The vertical post is a filled rectangle in salvia green hex #6B9B73, 8% of canvas width wide, 24 grid units tall, centered horizontally on the canvas, with soft 1.5-unit corner radius at top and bottom. The dot above the post is a softly rounded square (1.5-unit corner radius), 7×7 units, in terracotta hex #D99070, sitting 4 units above the post, optically shifted 0.25 units downward from mathematical center to feel held rather than floating. Symmetric on the vertical axis. 18% padding inside a 1024×1024 square canvas. Background fully transparent. Style reference: humanist sans-serif type design, Latin American craft poster lettering, Eric Gill geometry softened with Tomi Ungerer warmth. Vector flat 2D. Both units must remain legible at favicon scale (16px) — at that scale only the post and dot read, no other shapes possible. Anchor metaphor: a person standing in negative space, calm and present, the lowercase "i" of "i am" in "i-am.clinic". Critical anti-pattern: do NOT draw an outer arch or U-shape that surrounds these two units — the prior generation made this mistake and produced a tombstone silhouette; the doorway is implied, not drawn. No corporate blue, no navy, no cyan, no gradient, no glow, no metallic, no chrome, no holographic, no 3D, no perspective, no shadow, no drop shadow, no bevel, no embossment, no surrounding arch, no surrounding U-shape, no doorway outline drawn, no archway drawn, no tombstone, no containing rectangle, no frame, no portal ring, no halo around the dot, no third element of any kind, no puzzle piece, no rainbow infinity, no medical cross, no caduceus, no stethoscope, no light bulb, no brain, no neuron, no DNA helix, no chat bubble, no cursor, no rocket, no sparkles, no star, no human face, no eye, no heart, no ribbon, no AI logo, no robot, no chatbot, no character mascot, no plant detail, no leaf, no flower, no realistic foliage, no photographic texture, no calligraphic flourish, no extra letters, no garbled text, no serif details, no terminal flares. --ar 1:1
```

---

## 7. Trust-strip section divider — architectural [REVISED] (600×120, transparent SVG)

Revision rationale: the prior prompt produced a sage sprig that read wedding-invitation / Etsy-bridal — a register that undermines clinical credibility. This revision pivots from botanical to architectural: a thin horizontal rule broken by a small two-unit geometric mark in the center. Same warmth via salvia + terracotta, but registered as editorial book divider rather than decorative flourish. Block 11 below uses the same architectural family at smaller scale for consistency.

```
A minimalist architectural section divider for a Latin American clinical software brand. Subject: a single thin straight horizontal line broken in the exact center by a small two-unit geometric mark. The horizontal line is drawn in ink hex #3D3026 at 1 pixel weight, from 60 pixel left margin to 60 pixel right margin on a 600 pixel canvas, with a 20-pixel gap in the line where the central mark sits. The central mark is composed of two stacked units: a small salvia green hex #6B9B73 filled circle (5 pixels diameter) directly above a small terracotta hex #D99070 filled soft-corner square (5 pixels with 1-pixel corner radius), separated by a 3-pixel vertical gap. The mark is centered horizontally and vertically on a 120-pixel-tall canvas. Background fully transparent. Style: editorial book section dividers, Swiss typographic ornaments rendered at LATAM craft register, schematic, clinical-warm. Anchor metaphor: a quiet pause in a clinician's notebook, "consultorio bien iluminado a las cinco de la tarde". No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no plant, no sprig, no leaf, no flower, no berry, no thorn, no botanical element, no Etsy ornament, no wedding-invitation flourish, no bridal-shower decor, no calligraphic swash, no decorative scroll, no ribbon, no banner, no asterisk, no star, no flower-of-life, no mandala, no thick stroke, no rough sketch, no character, no insect, no off-center mark, no asymmetry, no hand-drawn wobble. --ar 5:1
```

---

## 8. Final-CTA sprig flourish — vertical, faint salvia [REVISED] (240×240, transparent SVG)

Revision rationale: the prior prompt specified cream stroke (#FDFAF5) intended for a salvia-600 dark background. The model interpreted cream as a yellow-tinted hue and rendered a pale-yellow sprig that does not match the palette and does not key-in on any backdrop in the actual landing (the final-CTA section sits on cream-50, not salvia-600). This revision retargets the asset for cream-50 background use, locks the stroke to salvia hex #6B9B73 at full saturation in the SVG (with post-export opacity reduction handled in code at render time), and adds explicit anti-yellow / anti-cream-tint negatives to prevent color drift.

```
A single thin botanical line drawing of a sage / salvia sprig in vertical orientation, three small paired leaves on a gentle curved upward-rising stem, drawn freehand-humanist as if a thoughtful designer sketched it once on a notebook margin. Intended for use as a faint decorative element behind or beside the final-CTA section on a cream-50 hex #FDFAF5 page background; opacity will be reduced post-export to roughly 12 percent in production CSS, so the SVG must export at FULL saturation salvia green. Line weight 1.25 pixels at 240 pixel canvas height, monochrome stroke in salvia hex #6B9B73, no fill. Stem starts at bottom-center of the canvas and curves softly to upper-right. Three leaves alternating, asymmetric natural sway, not mirrored. 24 pixel padding on all sides. Schematic editorial quality, faint central rib only, no fill, no shading. Background fully transparent. Anchor metaphor: LATAM craft poster sprig, calm late-afternoon, "consultorio bien iluminado a las cinco de la tarde". CRITICAL COLOR LOCK: stroke color MUST be salvia green hex #6B9B73 — that is RGB 107, 155, 115, a desaturated mid-green. The stroke is NOT yellow, NOT pale yellow, NOT cream, NOT gold, NOT olive, NOT chartreuse, NOT lime, NOT sage with yellow tint, NOT mint, NOT teal, NOT any color other than #6B9B73 at full saturation. If the model drifts toward yellow or cream, regenerate. No corporate blue, no green other than #6B9B73, no yellow, no pale yellow, no cream stroke, no gold, no olive, no chartreuse, no lime, no mint, no teal, no fill, no realistic photographic foliage, no detailed leaf veins, no flower, no bud, no berry, no thorn, no dewdrop, no shadow, no 3D, no perspective, no insect, no character, no thick stroke, no rough sketch, no calligraphic flourish, no ribbon, no banner. --ar 1:1
```

---

## 9. About-section illustration — pass 2 vector clean (800×600, transparent SVG)

```
A flat editorial vector line illustration: half-open notebook on a wooden desk surface, a ceramic mug on the right, a fountain pen resting diagonally across the notebook gutter. Top-down view at a slight 15-degree angle. Drawn at 800 pixel canvas width. Outlines in ink hex #3D3026 at 1.5 pixel line weight throughout. Solid fill regions: notebook pages cream hex #FDFAF5 with cream-100 hex #F7F2E8 inner shadow region; desk surface wood hex #A8845A; mug body salvia green hex #6B9B73; pen barrel terracotta hex #D99070. No human figure, no hands, no face, no screen, no electronic device. Composition centered. Light implied from upper-left by a subtle shift of fill regions only — no rendered shadow. Background transparent. Style: architectural-diagram warmth, schematic editorial, humanist rounded corners on objects, calm, spare. Anchor metaphor: LATAM private practice desk at 5pm. No corporate blue, no navy, no cyan, no gradient, no rendered shadow, no 3D, no isometric, no photographic realism, no human face, no hand, no body, no character, no laptop, no phone, no screen, no app UI, no sparkle, no glow, no halo, no clock, no big numbers, no readable text, no garbled lettering, no thick bold stroke, no rough sketch, no signature, no decorative flourish, no plant detail, no realistic foliage. --ar 4:3
```

---

## 10. Hero background noise — handmade-paper grain (1024×1024 tileable raster)

```
A close-up macro photograph of warm cream colored handmade cotton paper, viewed straight-on, with subtle natural grain and faint plant-fiber inclusions. No creases, no folds, no text, no marks, no logo. Evenly lit by soft diffuse window light from above. Color: dominant tone cream hex #FDFAF5 to cream-100 hex #F7F2E8, with faint warmer fiber inclusions in wood-300 hex #C9AA84. Subtle grain density — visible at high zoom but not coarse, like fine watercolor paper. Composition dead-center, no vignette, no focal point, completely uniform across the frame. No depth-of-field blur, evenly sharp edge to edge, tileable. Anchor metaphor: a piece of paper on a Latin American consultorio desk at 5pm. No logo, no text, no character, no person, no hand, no shadow, no fold, no crease, no tear, no dark spot, no large fiber, no recognizable shape, no symmetry, no pattern repetition, no vignette, no depth-of-field, no bokeh, no high-contrast grain, no scratch, no stain, no color cast toward blue, no color cast toward purple, no oversaturation. --ar 1:1
```

---

## 11. Section divider — short architectural [REVISED] (400×80, transparent SVG)

Revision rationale: same as block 7. Pivot from sprig to architectural divider for consistency with the trust-strip family. Single salvia square at the center of a thin ink rule, smaller scale than block 7.

```
A minimalist architectural section divider for a Latin American clinical software brand, short variant. Subject: a single thin straight horizontal line broken in the exact center by a small geometric mark. The horizontal line is drawn in ink hex #3D3026 at 1 pixel weight, from 40 pixel left margin to 40 pixel right margin on a 400 pixel canvas, with a 14-pixel gap in the line where the central mark sits. The central mark is a single salvia green hex #6B9B73 filled soft-corner square (4 pixels with 1-pixel corner radius), centered both axes on the 80-pixel-tall canvas. Background fully transparent. Style: editorial book section divider, Swiss typographic ornament at LATAM craft register, schematic, clinical-warm, paired with the longer trust-strip divider as a family. Anchor metaphor: a quiet pause between paragraphs in a clinician's notebook. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no plant, no sprig, no leaf, no flower, no berry, no thorn, no botanical element, no Etsy ornament, no wedding-invitation flourish, no calligraphic swash, no decorative scroll, no ribbon, no banner, no asterisk, no star, no thick stroke, no rough sketch, no off-center mark, no asymmetry. --ar 5:1
```

---

## 12. Empty-state illustration — folded note with trail (480×320, transparent SVG)

```
A flat editorial vector line illustration of a single small envelope (or hand-folded paper letter) with its flap slightly open, drawn at a gentle 10-degree tilt, with a single thin curved trail line above and to the upper-right indicating the message has just left or arrived. Drawn at 480 pixel canvas width. Envelope outline in ink hex #3D3026 at 1.5 pixel line weight, soft-corner rectangle with 3 pixel radius. The flap is a triangular shape with a 1.5 pixel rounded apex. Inside the envelope a single very faint horizontal line in salvia hex #6B9B73 suggests a folded note. The curved trail above is in terracotta hex #D99070 at 1 pixel line weight, no arrowhead, no sparkle, no effect lines. Composition centered with 60 pixel margins. Background fully transparent. Schematic, spare, humanist, calm. Mood: "we received your message", quiet acknowledgment, not celebration. Anchor metaphor: LATAM private practice handing over a calm note. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no character, no human hand, no smile, no face, no envelope with stamp, no postage, no airmail border, no aircraft, no rocket, no sparkle, no star, no exclamation, no big checkmark, no thumb up, no trophy, no confetti, no celebration, no big numbers, no readable text, no @ symbol, no application UI, no inbox count, no notification badge, no thick bold stroke, no rough sketch. --ar 3:2
```

---

## 13. 404 illustration — open notebook lost page (480×320, transparent SVG)

```
A flat editorial vector line illustration of a single open notebook lying on its side at a 25-degree angle, with two pages visible and a thin bookmark ribbon hanging out the bottom slightly to the right. Drawn at 480 pixel canvas width. Outlines in ink hex #3D3026 at 1.5 pixel line weight. Page rectangles soft-corner with 2 pixel radius. The visible left page has three very faint horizontal lines in cream-200 hex #EDE5D4 indicating blank ruled paper. The bookmark ribbon is in terracotta hex #D99070 at 2 pixel line weight with a soft slight curve. Composition centered with 50 pixel margins. Background fully transparent. Schematic, spare, humanist, calm. Mood: "we lost the page", quiet, not "error" or "broken" or "alarm". Anchor metaphor: a notebook on a LATAM private practice desk, the entry that was here is no longer here. The numerals "404" are NOT drawn — they are set in code above this illustration. No corporate blue, no navy, no cyan, no gradient, no shadow, no 3D, no perspective, no isometric, no photo, no character, no astronaut, no broken robot, no broken gear, no shattered glass, no skull, no warning triangle, no exclamation mark, no neon error, no big "404" rendered, no garbled text, no smiling face, no sad face, no human, no hand, no rocket, no UFO, no glitch effect, no static texture, no scanline, no thick bold stroke, no rough sketch. --ar 3:2
```

---

## 14. Founder-portrait alternative — closed notebook with pen (800×800, transparent SVG)

```
A minimalist editorial vector illustration of a single hand-bound notebook closed and sitting upright on a wooden surface, with a single fountain pen resting diagonally against it on the right side. Frontal view, slight tilt suggesting the notebook is leaning. No human figure, no hand, no face. Drawn at 800 pixel canvas. Outlines in ink hex #3D3026 at 2 pixel line weight. Notebook cover filled in salvia-200 hex #AECDB3. Notebook spine accent in salvia-500 hex #4E7A56. Pen barrel in terracotta hex #D99070. Wooden surface implied as a single horizontal line in wood-400 hex #A8845A at the base. Background fully transparent. Editorial spot illustration register, humanist sketch quality, calm and deliberate, the warmth of a Latin American craft poster. Anchor metaphor: the founder's working tools standing in for a portrait — the brand bans stock-photo doctors and faces. No human face, no hand, no body, no portrait, no headshot, no person, no character, no smile, no chair, no entire desk scene, no window, no plant in pot foreground, no laptop, no phone, no screen, no clock, no big numbers, no readable text, no logo, no inscription, no signature, no calligraphy, no decorative flourish, no thick bold stroke, no corporate blue, no navy, no gradient, no rendered shadow, no 3D, no isometric. --ar 1:1
```

---

**End.** 14 self-contained prompt blocks. For typography (wordmark, lockups, favicons), social cards, hero PDF mockup, product UI mockups, pitch-deck cover, pilot one-pager, and email signature, see `design-system.md` and `content.md` — those are typography/UI craft, not AI image gen.
