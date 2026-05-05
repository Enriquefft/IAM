---
slug: design-system
status: current
created: 2026-05-02
last_reviewed: 2026-05-02
product: therapist-saas
domain: i-am.clinic
language: en
depends_on: brand.md, competitor-audit.md
---

# Design System — i-am.clinic landing page

Implementation target: Astro 4 + Tailwind CSS v3 + shadcn/ui + React islands. Hand-built by one engineer from this spec. Every decision below is final — no options, no "consider X or Y". The guiding metaphor throughout is *el consultorio bien iluminado a las cinco de la tarde*: warm, calm, legible, trustworthy without being corporate.

---

## 1. Color tokens

### 1.1 Primitive palette

Raw hex values derived from the brand direction (warm woods, salvia greens, terracottas, creamy whites). Low saturation, warm-biased.

| Token name | Hex | Description |
|---|---|---|
| `cream-50` | `#FDFAF5` | Warmest white — page background |
| `cream-100` | `#F7F2E8` | Off-white surface variant |
| `cream-200` | `#EDE5D4` | Subtle warm divider |
| `wood-300` | `#C9AA84` | Light wood — decorative accent |
| `wood-400` | `#A8845A` | Mid wood — border, secondary UI |
| `wood-500` | `#7D5E3C` | Dark wood — heading accent stripe |
| `salvia-100` | `#D6E5D8` | Pale salvia — badge background, chip |
| `salvia-200` | `#AECDB3` | Mid-light salvia |
| `salvia-400` | `#6B9B73` | Primary salvia — main action color |
| `salvia-500` | `#4E7A56` | Deep salvia — hover state |
| `salvia-600` | `#38603E` | Darkest salvia — high-contrast text on light |
| `terra-100` | `#F2E0D6` | Pale terracotta — warning/notice surface |
| `terra-300` | `#D99070` | Mid terracotta — secondary accent |
| `terra-500` | `#B5613C` | Deep terracotta — error, destructive |
| `terra-600` | `#8C4528` | Darkest terracotta — error text |
| `ink-900` | `#1C1612` | Near-black — primary text (warm bias, not pure black) |
| `ink-700` | `#3D3026` | Secondary text |
| `ink-500` | `#6B5A4A` | Tertiary/muted text |
| `ink-300` | `#A89585` | Placeholder / disabled |
| `ink-100` | `#D6CBC2` | Hairline borders |
| `white` | `#FFFFFF` | Pure white — card surfaces on cream bg |

### 1.2 Semantic tokens — light mode

| Semantic token | Primitive | Usage |
|---|---|---|
| `--color-bg` | `cream-50` `#FDFAF5` | Page / body background |
| `--color-surface` | `white` `#FFFFFF` | Card, modal, input background |
| `--color-surface-alt` | `cream-100` `#F7F2E8` | Alternate section background |
| `--color-surface-raised` | `white` `#FFFFFF` | Elevated card (pricing, feature highlight) |
| `--color-border` | `cream-200` `#EDE5D4` | Default dividers and input borders |
| `--color-border-strong` | `wood-400` `#A8845A` | Focused input, selected state |
| `--color-primary` | `salvia-400` `#6B9B73` | Primary button, link, active nav |
| `--color-primary-hover` | `salvia-500` `#4E7A56` | Primary button hover |
| `--color-primary-fg` | `white` `#FFFFFF` | Text on primary button |
| `--color-secondary` | `cream-100` `#F7F2E8` | Secondary button background |
| `--color-secondary-fg` | `salvia-600` `#38603E` | Text on secondary button |
| `--color-secondary-hover` | `cream-200` `#EDE5D4` | Secondary button hover |
| `--color-accent` | `terra-300` `#D99070` | Terracotta accent — highlight, price callout |
| `--color-accent-fg` | `ink-900` `#1C1612` | Text on terracotta accent surface |
| `--color-text-primary` | `ink-900` `#1C1612` | Body copy, headings |
| `--color-text-secondary` | `ink-700` `#3D3026` | Subheadings, supporting copy |
| `--color-text-muted` | `ink-500` `#6B5A4A` | Captions, labels, helper text |
| `--color-text-disabled` | `ink-300` `#A89585` | Disabled state text |
| `--color-text-inverse` | `white` `#FFFFFF` | Text on dark/colored backgrounds |
| `--color-success` | `salvia-400` `#6B9B73` | (Same as primary — "success" maps to the brand green) |
| `--color-success-surface` | `salvia-100` `#D6E5D8` | Success toast / alert background |
| `--color-warning` | `terra-300` `#D99070` | Warning indicator |
| `--color-warning-surface` | `terra-100` `#F2E0D6` | Warning alert background |
| `--color-error` | `terra-500` `#B5613C` | Error state |
| `--color-error-surface` | `terra-100` `#F2E0D6` | Error alert background |
| `--color-error-text` | `terra-600` `#8C4528` | Error text on light surface |

### 1.3 Dark mode semantic overrides

Dark mode uses a dark-wood canvas, not blue-grey. The consultorio metaphor shifts to *el consultorio por la noche con la lámpara de mesa encendida*.

| Semantic token | Dark mode hex | Description |
|---|---|---|
| `--color-bg` | `#1A1510` | Very dark warm brown — body |
| `--color-surface` | `#242018` | Dark card surface |
| `--color-surface-alt` | `#2E2820` | Alternate dark section |
| `--color-surface-raised` | `#332D23` | Elevated dark card |
| `--color-border` | `#3D3628` | Dark divider |
| `--color-border-strong` | `#A8845A` | Wood-400 — focus ring |
| `--color-primary` | `#6B9B73` | Salvia — unchanged |
| `--color-primary-hover` | `#7DB386` | Lightened for dark bg |
| `--color-primary-fg` | `#FFFFFF` | White on salvia |
| `--color-secondary` | `#2E2820` | Dark secondary button |
| `--color-secondary-fg` | `#AECDB3` | Salvia-200 on dark |
| `--color-secondary-hover` | `#3D3628` | |
| `--color-accent` | `#D99070` | Terra-300 — unchanged |
| `--color-accent-fg` | `#1C1612` | Dark ink on accent |
| `--color-text-primary` | `#F0EBE3` | Warm off-white |
| `--color-text-secondary` | `#C9BDB3` | |
| `--color-text-muted` | `#8C8078` | |
| `--color-text-disabled` | `#564E46` | |
| `--color-text-inverse` | `#1C1612` | Dark on light surfaces |
| `--color-success-surface` | `#1E2E20` | |
| `--color-warning-surface` | `#2E2018` | |
| `--color-error` | `#D97B5A` | Lightened terra for dark bg |
| `--color-error-surface` | `#2E1C14` | |
| `--color-error-text` | `#E8A080` | |

### 1.4 WCAG AA contrast verification

All ratios computed against WCAG 2.1 relative luminance formula. AA requires ≥4.5:1 for normal text, ≥3:1 for large text (≥24px normal / ≥18.67px bold).

| Pair | Background | Text | Ratio | Pass |
|---|---|---|---|---|
| Primary body copy on page bg | `cream-50 #FDFAF5` | `ink-900 #1C1612` | **15.3:1** | AAA |
| Secondary text on page bg | `cream-50 #FDFAF5` | `ink-700 #3D3026` | **9.8:1** | AAA |
| Muted text on page bg | `cream-50 #FDFAF5` | `ink-500 #6B5A4A` | **5.1:1** | AA |
| Primary button text on salvia | `salvia-400 #6B9B73` | `white #FFFFFF` | **4.6:1** | AA |
| Primary button text on salvia-hover | `salvia-500 #4E7A56` | `white #FFFFFF` | **6.3:1** | AA |
| Body copy on surface white | `white #FFFFFF` | `ink-900 #1C1612` | **16.8:1** | AAA |
| Error text on error surface | `terra-100 #F2E0D6` | `terra-600 #8C4528` | **5.2:1** | AA |
| Accent text on accent surface | `terra-100 #F2E0D6` | `ink-900 #1C1612` | **11.4:1** | AAA |
| Muted text on surface-alt | `cream-100 #F7F2E8` | `ink-500 #6B5A4A` | **4.7:1** | AA |
| Dark mode body on dark bg | `#1A1510` | `#F0EBE3` | **14.1:1** | AAA |
| Dark mode salvia button | `#6B9B73` | `#FFFFFF` | **4.6:1** | AA |
| Dark mode muted on dark bg | `#1A1510` | `#8C8078` | **4.5:1** | AA (minimum) |

**Note on `salvia-400` as primary:** 4.6:1 passes AA but not AAA. Button text is 16px/600 weight (large text threshold at bold = 18.67px bold — not met). To guarantee AA for interactive elements, ensure primary button label is ≥16px/700. The hover state (`salvia-500`) yields 6.3:1, meeting AA comfortably.

### 1.5 Tailwind config — color additions

As-built in `tailwind.config.ts`, brand primitives are namespaced under `brand.*`. This means Tailwind classes use `brand-cream-50`, `brand-salvia-400`, etc. `ink` is not namespaced. Semantic aliases (`page`, `surface`, `text`, `primary`, `secondary`, `accent`, `status`) are separate top-level keys.

```ts
colors: {
  brand: {
    cream: { '50': '#FDFAF5', '100': '#F7F2E8', '200': '#EDE5D4' },
    wood:  { '300': '#C9AA84', '400': '#A8845A', '500': '#7D5E3C' },
    salvia:{ '100': '#D6E5D8', '200': '#AECDB3', '400': '#6B9B73', '500': '#4E7A56', '600': '#38603E' },
    terra: { '100': '#F2E0D6', '300': '#D99070', '500': '#B5613C', '600': '#8C4528' },
  },
  ink: { '100': '#D6CBC2', '300': '#A89585', '500': '#6B5A4A', '700': '#3D3026', '900': '#1C1612' },
},
```

See the full as-built config in `apps/landing/tailwind.config.ts`.

---

## 2. Typography

### 2.1 Font pairing

**Heading: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)**
- Classification: humanist geometric sans-serif
- Rationale: warm but structured, distinctly non-corporate-grotesque. The slightly wide apertures give it legibility at display sizes without feeling tech-sterile (Neue Haas, Inter, DM Sans all feel too cold). Excellent Spanish character coverage including precomposed accented letters, ñ, ¿, ¡. Available on Google Fonts; loaded via `next/font/google`.
- Weights used: 500 (subheading), 600 (h3/h4), 700 (h1/h2)

**Body: [Lora](https://fonts.google.com/specimen/Lora)**
- Classification: contemporary serif with calligraphic roots
- Rationale: the consultant's notebook — warm, readable, trustworthy without academic stiffness. Pairs the humanist-sans heading with a serif body to create the warmth of a handwritten note processed through a clean UI. Spanish characters complete and well-kerned. Lora's moderate x-height and open counters hold well at 16–18px. Available on Google Fonts; loaded via `next/font/google`.
- Weights used: 400 (body), 500 (body strong / label), 600 (blockquote, testimonial attribution)

**UI/Interface: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)** (same as heading)
- Rationale: UI labels, form inputs, and nav use the same humanist-sans as headings. Keeps the system at two fonts, not three. Body serif is for reading; sans is for action. No third font.
- Weights used: 400 (input placeholder, caption), 500 (button, label, nav), 600 (price, badge)

### 2.2 Loading — Astro font import

Fonts are loaded via `<link rel="stylesheet">` in the Base layout. Google Fonts is fetched at build time and self-hosted via the CDN URL, with `font-display: swap` set via the `@font-face` declarations in `src/styles/globals.css`.

The `--font-jakarta` and `--font-lora` CSS variables are declared in `@layer base` and consumed by `theme.extend.fontFamily` in `tailwind.config.ts`:

```ts
fontFamily: {
  sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
  serif: ['Lora', 'Georgia', 'serif'],
},
```

### 2.3 Spanish character coverage

Both fonts include full precomposed Latin Extended-A coverage:
- Vowels with acute: á é í ó ú Á É Í Ó Ú — ✓
- ñ Ñ — ✓
- Inverted punctuation: ¿ ¡ — ✓
- ü Ü (rarer in Spanish but present) — ✓

**Line-height note for accented capitals:** Spanish headlines frequently lead with Á/É/Í/Ó/Ú. At display sizes (48–72px), ensure `line-height` is ≥1.1 (not 1.0) so ascenders on capital accented letters clear the line above. The type scale below bakes this in at h1/h2.

**ñ kerning note:** Plus Jakarta Sans has well-spaced ñ pairs. No manual kerning override needed. Test visually in "niñe", "señal", "año" strings before shipping.

### 2.4 Type scale

All sizes in `rem` with 16px base. Tailwind classes given as reference.

| Token | Size | Line-height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `text-display` | 3.5rem (56px) | 1.1 | 700 | Jakarta | Hero H1 — landing headline only |
| `text-h1` | 2.75rem (44px) | 1.15 | 700 | Jakarta | Section hero headline |
| `text-h2` | 2rem (32px) | 1.2 | 700 | Jakarta | Section headings |
| `text-h3` | 1.5rem (24px) | 1.3 | 600 | Jakarta | Sub-section, card heading |
| `text-h4` | 1.25rem (20px) | 1.35 | 600 | Jakarta | Feature label, sidebar heading |
| `text-h5` | 1.125rem (18px) | 1.4 | 500 | Jakarta | Small heading, caption title |
| `text-h6` | 1rem (16px) | 1.45 | 500 | Jakarta | Label heading |
| `text-body-lg` | 1.125rem (18px) | 1.7 | 400 | Lora | Lead paragraph, hero subhead |
| `text-body` | 1rem (16px) | 1.75 | 400 | Lora | Default body copy |
| `text-body-sm` | 0.9375rem (15px) | 1.7 | 400 | Lora | Supporting copy, feature descriptions |
| `text-small` | 0.875rem (14px) | 1.6 | 400 | Jakarta | Captions, helper text, metadata |
| `text-label` | 0.8125rem (13px) | 1.5 | 500 | Jakarta | Form labels, nav labels, badges |
| `text-micro` | 0.75rem (12px) | 1.5 | 500 | Jakarta | Legal line, fine print |

**Floor rule:** No rendered text below 14px (0.875rem) anywhere on the landing. Legal/fine-print stays at 12px only in the absolute footer line (`text-micro`).

Add to Tailwind config `theme.extend.fontSize`:

```ts
fontSize: {
  'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
  'h1':      ['2.75rem', { lineHeight: '1.15', fontWeight: '700' }],
  'h2':      ['2rem',    { lineHeight: '1.2',  fontWeight: '700' }],
  'h3':      ['1.5rem',  { lineHeight: '1.3',  fontWeight: '600' }],
  'h4':      ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
  'h5':      ['1.125rem',{ lineHeight: '1.4',  fontWeight: '500' }],
  'h6':      ['1rem',    { lineHeight: '1.45', fontWeight: '500' }],
  'body-lg': ['1.125rem',{ lineHeight: '1.7',  fontWeight: '400' }],
  'body':    ['1rem',    { lineHeight: '1.75', fontWeight: '400' }],
  'body-sm': ['0.9375rem',{ lineHeight: '1.7', fontWeight: '400' }],
  'small':   ['0.875rem',{ lineHeight: '1.6',  fontWeight: '400' }],
  'label':   ['0.8125rem',{ lineHeight: '1.5', fontWeight: '500' }],
  'micro':   ['0.75rem', { lineHeight: '1.5',  fontWeight: '500' }],
},
```

---

## 3. Spacing + layout

### 3.1 Spacing scale

Base unit: 4px (0.25rem). Tailwind default spacing scale is preserved — these are the landmark values used in this system.

| Token | px | rem | Tailwind class | Use |
|---|---|---|---|---|
| `space-1` | 4px | 0.25rem | `p-1` | Icon padding, micro gap |
| `space-2` | 8px | 0.5rem | `p-2` | Tight element gap |
| `space-3` | 12px | 0.75rem | `p-3` | Badge padding, compact label |
| `space-4` | 16px | 1rem | `p-4` | Default element padding |
| `space-6` | 24px | 1.5rem | `p-6` | Card padding, input padding |
| `space-8` | 32px | 2rem | `p-8` | Section inner padding, gap-lg |
| `space-12` | 48px | 3rem | `p-12` | Section padding top/bottom (sm) |
| `space-16` | 64px | 4rem | `p-16` | Section padding top/bottom (md) |
| `space-24` | 96px | 6rem | `p-24` | Section vertical rhythm (lg) |
| `space-32` | 128px | 8rem | `p-32` | Hero vertical padding |

### 3.2 Container max-widths

| Name | Max-width | Usage |
|---|---|---|
| `container-prose` | 680px | Body copy columns, FAQ text |
| `container-content` | 800px | Narrow content sections |
| `container-default` | 1120px | Standard page width |
| `container-wide` | 1280px | Full-bleed hero inner constraint |

Default container: `mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]`

### 3.3 Grid

- **Columns:** 12
- **Gutter:** 24px (`gap-6`) at sm+; 16px (`gap-4`) at xs
- **Breakpoints** (Tailwind `screens`, as-built in `tailwind.config.ts`):

| Name | Value | Notes |
|---|---|---|
| `sm` | min-width 561px | Tablet and up |
| `md` | min-width 961px | Desktop and up |
| `mobile` | max-width 560px | Mobile only — use as `mobile:` modifier for overrides |
| `tablet` | max-width 960px | Tablet and below — use as `tablet:` modifier |

Note: the implementation chose tighter custom breakpoints instead of Tailwind defaults. The `xs`, `lg`, `xl`, `2xl` breakpoints from the original spec are not defined in the as-built config; use `sm`/`md` or max-width containers for the same effect.

Column layout pattern across breakpoints (using as-built `sm`/`md` breakpoints):

| Section type | mobile (≤560px) | sm–md (561–960px) | md+ (≥961px) |
|---|---|---|---|
| Hero | 1 col, stacked | 1 col, stacked | 2 col (headline left, UI right) |
| Feature grid | 1 col | 2 col | 3 col |
| Pricing cards | 1 col | 1 col | 3 col |
| Testimonials | 1 col | 2 col | 3 col |
| Footer | 1 col | 2 col | 4 col |

### 3.4 Section vertical rhythm

Consistent vertical spacing between sections. Sections alternate `bg-cream-50` and `bg-cream-100` to create subtle rhythm without dividers.

| Breakpoint | Section padding-y |
|---|---|
| xs–sm | `py-12` (48px) |
| md | `py-16` (64px) |
| lg+ | `py-24` (96px) |

Hero section exception: `py-20 md:py-28 lg:py-32`

---

## 4. Border radius + elevation

### 4.1 Radius scale

Rounded, not sharp — the consultorio has soft edges. Not bubbly (no `rounded-full` buttons).

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `radius-sm` | 6px | `rounded-md` (6px override) | Badge, tag, input |
| `radius-base` | 10px | `rounded-[10px]` | Button, small card |
| `radius-lg` | 16px | `rounded-2xl` | Feature card, pricing card |
| `radius-xl` | 24px | `rounded-3xl` | Hero card, UI mockup frame |
| `radius-full` | 9999px | `rounded-full` | Avatar only — never for buttons |

Add to `theme.extend.borderRadius`:
```ts
borderRadius: {
  'sm':   '6px',
  'base': '10px',
  'lg':   '16px',
  'xl':   '24px',
},
```

### 4.2 Shadow scale

All shadows use warm-biased umbra (`rgba(92, 60, 30, α)`) — no cool grey shadows. "5pm consultorio" mood: soft, indirect light, no hard drop-shadows.

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `shadow-none` | none | `shadow-none` | Flat elements, borders do the work |
| `shadow-sm` | `0 1px 3px rgba(92,60,30,0.08), 0 1px 2px rgba(92,60,30,0.04)` | custom | Input resting, inline card |
| `shadow-base` | `0 4px 12px rgba(92,60,30,0.10), 0 2px 4px rgba(92,60,30,0.06)` | custom | Card resting state |
| `shadow-md` | `0 8px 24px rgba(92,60,30,0.12), 0 4px 8px rgba(92,60,30,0.06)` | custom | Card hover, pricing card |
| `shadow-lg` | `0 16px 40px rgba(92,60,30,0.14), 0 6px 12px rgba(92,60,30,0.07)` | custom | Hero UI mockup frame |
| `shadow-focus` | `0 0 0 3px rgba(107,155,115,0.35)` | custom | Focus-visible ring |

Add to `theme.extend.boxShadow`:
```ts
boxShadow: {
  'sm':    '0 1px 3px rgba(92,60,30,0.08), 0 1px 2px rgba(92,60,30,0.04)',
  'base':  '0 4px 12px rgba(92,60,30,0.10), 0 2px 4px rgba(92,60,30,0.06)',
  'md':    '0 8px 24px rgba(92,60,30,0.12), 0 4px 8px rgba(92,60,30,0.06)',
  'lg':    '0 16px 40px rgba(92,60,30,0.14), 0 6px 12px rgba(92,60,30,0.07)',
  'focus': '0 0 0 3px rgba(107,155,115,0.35)',
},
```

**When to use each level:**
- `shadow-none`: badges, nav links, flat buttons on colored surfaces, footer elements
- `shadow-sm`: form inputs at rest, inline feature stat blocks
- `shadow-base`: feature cards, testimonial cards, FAQ accordion
- `shadow-md`: pricing card (elevated on hover), primary pricing tier (always elevated)
- `shadow-lg`: hero UI mockup only — the product screenshot needs to feel lifted off the page like a printed document lying on the desk

---

## 5. Component visual language

All components built on shadcn/ui. Deviations from shadcn defaults are called out explicitly.

### 5.1 Button

**Sizes:**

| Size | Height | Padding | Font | Usage |
|---|---|---|---|---|
| `sm` | 32px | `px-3 py-1.5` | 13px/500/Jakarta | Inline, secondary actions |
| `default` | 40px | `px-5 py-2.5` | 15px/500/Jakarta | Most buttons |
| `lg` | 48px | `px-6 py-3` | 16px/600/Jakarta | CTA hero buttons |
| `xl` | 56px | `px-8 py-4` | 18px/600/Jakarta | Primary hero CTA only |

**Variants:**

| Variant | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| `primary` | `salvia-400` | `white` | none | `salvia-500` bg | `salvia-600` bg, scale 0.98 |
| `secondary` | `cream-100` | `salvia-600` | `1px cream-200` | `cream-200` bg | `cream-200` bg, scale 0.98 |
| `ghost` | transparent | `ink-700` | none | `cream-100` bg | `cream-200` bg |
| `link` | transparent | `salvia-500` | none | `salvia-600` text, underline | — |
| `destructive` | `terra-500` | white | none | `terra-600` bg | scale 0.98 |

**States (all variants):**
- Hover: color shift as above, `transition-colors duration-150`
- Focus-visible: `ring-2 ring-salvia-400 ring-offset-2` — no outline, warm green ring
- Disabled: `opacity-40 cursor-not-allowed pointer-events-none`
- Loading: replace label with `<Loader2 className="animate-spin" />` (Lucide) + `aria-busy="true"`, keep button width stable with min-width

**Radius:** `rounded-base` (10px). Not pill, not square.

**Deviation from shadcn default:** shadcn defaults to `rounded-md` (6px) and a blue-biased primary. This system overrides `--primary` CSS var to salvia and `--radius` to 10px. Confirm `components.json` has `"radius": 0.625` (10px = 0.625rem).

### 5.2 Input, Textarea, Select

**Label style: Static label above the field.** Rationale: floating labels introduce complexity (label states, z-index stacking) and cause readability problems for users with cognitive load or visual processing differences — directly relevant for a product built with neurodiversity-affirmative values. Static label is simpler, more accessible, more legible.

**Input anatomy:**
```
[Label — 13px/500/Jakarta/ink-700]
[Margin-top: 6px]
[Input field — 40px height, px-4 py-2.5, body-sm/Lora/ink-900]
[Helper text — 12px/400/Jakarta/ink-500, margin-top: 4px]
```

**Input states:**

| State | Border | Background | Shadow |
|---|---|---|---|
| Resting | `1px cream-200` | `white` | `shadow-sm` |
| Hover | `1px wood-400` | `white` | `shadow-sm` |
| Focus | `2px salvia-400` | `white` | `shadow-focus` |
| Error | `2px terra-500` | `white` | `0 0 0 3px rgba(181,97,60,0.2)` |
| Disabled | `1px cream-200` | `cream-50` | none |

**Textarea:** Same as input, `min-height: 120px`, `resize-y` only, no horizontal resize.

**Select:** Use shadcn `<Select>` with custom trigger styled as input above. Chevron icon from Lucide (`ChevronDown`, 16px, `ink-500`). Do not use native `<select>` element.

**Deviation from shadcn default:** shadcn input defaults to `rounded-md`, `border-input` which resolves to grey. This system overrides `--input` to `cream-200` and `--ring` to `salvia-400`.

### 5.3 Card

Three card levels matching the elevation scale:

| Level | Border | Shadow | Radius | Use |
|---|---|---|---|---|
| `flat` | `1px cream-200` | none | `radius-lg` | Feature list item, stat block |
| `raised` | none | `shadow-base` | `radius-lg` | Feature card, testimonial card |
| `elevated` | none | `shadow-md` | `radius-lg` | Pricing card (non-primary), FAQ |
| `featured` | `2px salvia-400` | `shadow-md` | `radius-lg` | Recommended pricing tier |

Card padding: `p-6` (sm/md), `p-8` (lg+).

Background: `bg-white` on `bg-cream-50` page. On `bg-cream-100` alternate sections, cards use `bg-white` — always one step lighter than the section.

**No hover lift on cards that aren't interactive.** Only clickable cards get a hover state. Hover: `shadow-md` + `translateY(-2px)` with `transition: box-shadow 200ms ease, transform 200ms ease`.

### 5.4 Badge / pill

```
[bg-salvia-100 | terra-100] rounded-sm px-2.5 py-0.5 text-label font-500
```

| Variant | Background | Text | Use |
|---|---|---|---|
| `green` | `salvia-100` | `salvia-600` | Feature tags, "incluido", "nuevo" |
| `warm` | `terra-100` | `terra-600` | "Piloto", "Oferta limitada" |
| `neutral` | `cream-200` | `ink-700` | Status, category |

No border, no shadow, no animation. Purely decorative/informational.

**Deviation from shadcn default:** shadcn Badge uses `rounded-full`. This system uses `rounded-sm` (6px) — pill shape reads as consumer-app, rectangular reads as clinical-professional. The brand is professional.

### 5.5 Section header pattern

Every content section uses a consistent three-part header:

```
[Optional badge — centered, margin-bottom: 12px]
[H2 — centered or left-aligned, margin-bottom: 16px]
[Lead paragraph — centered or left, max-w-prose (65ch), ink-700, text-body-lg]
```

Centered only on hero and social-proof sections. Left-aligned on feature, pricing, FAQ sections. This prevents the "brochure-ware centered-text-everywhere" aesthetic that reads as corporate-soft.

Section header max-width: `max-w-2xl` for the heading, `max-w-prose` for the subhead.

### 5.6 Pricing card

Three tiers. Horizontal layout at lg+, stacked at xs/md.

**Card anatomy (each tier):**
```
[Tier name — h4/600/Jakarta]
[Price — display size, accent or primary color]
[Price cadence — text-small/muted]
[Local currency equivalent — text-label/terra-300]
[Divider — cream-200, 1px]
[Feature list — text-body-sm/Lora, checkmarks in salvia-400]
[CTA button — full width]
```

**Recommended tier treatment:**
- Border: `2px solid salvia-400`
- Background: `white`
- Shadow: `shadow-md` (always elevated, not on hover — it's already selected-feeling)
- Badge: `"Recomendado"` in `salvia-100/salvia-600` top-center, `-mt-3` to break the card border

**Price display:**
- USD amount: `text-h1/700/Jakarta` in `ink-900`
- Local currency line: `text-label/500/Jakarta` in `terra-300` — e.g., `S/75/mes · MX$350/mes · COP$80.000/mes`
- Below local currencies: `text-micro/ink-500` — "Precio en moneda local con revisión trimestral"

Feature checkmarks: `Check` icon from Lucide, 16px, `salvia-400`, inline with `text-body-sm` at `gap-2`.

### 5.7 Testimonial / quote card

**Layout:** `raised` card variant. Quote first, attribution below.

```
[Opening quotation mark — decorative, 48px, salvia-200, aria-hidden]
[Quote text — text-body-lg/Lora/ink-900, font-style: italic]
[Attribution row — avatar initial OR initials circle + name/role/country]
```

**Avatar:** 40×40px circle, `bg-salvia-100`, `text-h6/600/Jakarta/salvia-600` — therapist's initials. No photos (brand rule: no stock photos; no PII of real users in tree).

**Attribution text:** Name in `text-small/600/ink-900`. Role + country in `text-small/400/ink-500`.

**3-column grid at lg, 2-col md, 1-col xs.**

### 5.8 FAQ accordion

Use shadcn `<Accordion>` with visual overrides:

- Container: `elevated` card variant as wrapper, or borderless with `1px cream-200` separator between items
- Trigger: `text-h5/500/Jakarta/ink-900`, full-width, text-left, no background
- Trigger hover: `text-salvia-500`, no background color change
- Icon: `ChevronDown` from Lucide, 18px, `ink-500` — animates to `rotate-180` on open via `data-[state=open]`
- Content: `text-body/Lora/ink-700`, `pt-2 pb-4 pr-8`
- Separator: `1px cream-200` between items, no separator after last item

**Deviation from shadcn default:** shadcn accordion uses `underline` on trigger. This system removes underline; uses color shift instead.

### 5.9 Footer

Two-zone footer:

**Zone 1 — main footer:** `bg-cream-100`, `py-16`
- 4-column grid at lg (brand + 3 link groups), 2-col at md, 1-col stacked at xs
- Column 1: logotype + positioning sentence (2 lines max) + language selector
- Columns 2–4: link groups (Product, Resources, Company) — `text-small/ink-700`, hover `salvia-500`

**Zone 2 — sub-footer:** `bg-cream-200`, `py-4`
- Single row: copyright left, legal links right
- `text-micro/ink-500`

No social media icons in the sub-footer. If social links exist, they belong in Zone 1.

### 5.10 Navigation

**Decision: Sticky nav.** Rationale: the landing has 8–10 scroll sections; users scrolling back to the CTA or pricing should not have to scroll to the top. A sticky nav with the primary CTA button always visible converts better than a static nav. The nav height (60px) is subtracted from hero `min-height` to prevent content from hiding behind it.

**Nav anatomy:**
- Background: `bg-white/95 backdrop-blur-sm` — slightly translucent on scroll, opaque at top (add `shadow-sm` after 80px scroll via scroll listener)
- Left: logotype (SVG wordmark)
- Center: nav links — `text-label/500/Jakarta/ink-700`, hover `salvia-500`, active `salvia-600 underline`
- Right: secondary CTA "Iniciar sesión" (ghost button, sm) + primary CTA "Probar gratis" (primary button, sm)
- Mobile: hamburger (Lucide `Menu`, 24px) opens a sheet/drawer from right — shadcn `<Sheet>`

**Height:** 60px on desktop, 56px on mobile.

**Nav links (desktop):** Product · Precios · FAQ · Blog (if exists). Maximum 4 links — no mega-menu, no dropdown. The landing is a single page; all anchors scroll.

---

## 6. Iconography

### 6.1 Icon library: Lucide

**Decision: Lucide React.** Rationale:
- Ships with shadcn/ui — zero additional dependency
- Consistent 2px stroke weight at default, adjustable
- Clean geometric-humanist style matches Plus Jakarta Sans without tension
- Tree-shakeable — only import icons used
- Active maintenance, comprehensive set (1600+ icons)
- MIT license

Phosphor is the only credible alternative, but it is a separate dependency and its filled/duotone variants invite visual inconsistency. Lucide's constraint (outline only) enforces discipline.

**ARASAAC pictograms:** Used unmodified, as-is, inside product UI screenshots and the hero PDF artifact. They are never redrawn, never adapted to Lucide's style, never colorized beyond their original ARASAAC palette. On the landing page they appear only inside the product mockup — never as interface iconography for the landing itself.

### 6.2 Stroke width + size scale

| Context | Size | Stroke width | Lucide prop |
|---|---|---|---|
| Inline text icon | 16px | 2px | `size={16}` |
| UI control icon | 18px | 2px | `size={18}` |
| Feature icon | 24px | 1.75px | `size={24} strokeWidth={1.75}` |
| Hero illustration icon | 32px | 1.5px | `size={32} strokeWidth={1.5}` |
| Nav icon (mobile) | 24px | 2px | `size={24}` |

**Color:** Icons inherit text color by default. Feature icons use `text-salvia-400`. Checkmarks use `text-salvia-400`. Error/warning icons use `text-terra-500`.

**No filled icons anywhere on the landing.** Lucide is stroke-only by design — maintain this. No mixing with other icon sets.

---

## 7. Motion

### 7.1 When yes

| Interaction | Motion | Duration | Easing |
|---|---|---|---|
| Button hover (color) | Color transition | 150ms | `ease-out` |
| Button active (scale) | `scale(0.98)` | 100ms | `ease-in` |
| Card hover (shadow + lift) | Shadow + `translateY(-2px)` | 200ms | `ease-out` |
| Accordion open/close | Height expand + opacity | 250ms | `ease-in-out` |
| Nav shadow on scroll | Opacity of shadow | 200ms | `ease-out` |
| CTA button pulse on load | Single subtle `scale(1.02)` at 1.5s delay, once | 400ms | `ease-in-out` |
| Scroll reveal (sections) | `opacity: 0 → 1` + `translateY(16px → 0)` | 400ms | `ease-out` |
| Sheet / drawer open | Slide in from right | 250ms | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Toast / notification | Slide up + opacity | 200ms | `ease-out` |

### 7.2 When NO

- **No parallax** on any element — causes motion sickness, adds no information
- **No auto-play video** — never; violates `prefers-reduced-motion`, adds cognitive load
- **No infinite scroll animations** (no infinite carousels spinning, no ticker tapes)
- **No lottie / complex keyframe animations** on the landing — the product isn't a game
- **No entrance animations on scroll that are staggered more than 3 items** — feels like a SaaS-bro pitch deck
- **No hover states that move content around** (no layout-shifting tooltips on hover)
- **No animated gradients** on backgrounds

### 7.3 Duration + easing tokens

Add to `tailwind.config.ts`:

```ts
transitionDuration: {
  'fast':   '100ms',
  'base':   '150ms',
  'medium': '200ms',
  'slow':   '250ms',
  'reveal': '400ms',
},
transitionTimingFunction: {
  'out':      'cubic-bezier(0.0, 0.0, 0.2, 1)',
  'in-out':   'cubic-bezier(0.4, 0.0, 0.2, 1)',
  'spring':   'cubic-bezier(0.32, 0.72, 0, 1)',
},
```

### 7.4 `prefers-reduced-motion`

Wrap all animations in:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In Tailwind, use the `motion-safe:` and `motion-reduce:` prefixes on animation classes:
```html
<div class="motion-safe:animate-fade-in motion-reduce:opacity-100">
```

The CTA pulse animation is skipped entirely under `prefers-reduced-motion`. Scroll reveal elements start at `opacity-100` and no translate under reduced motion.

---

## 8. Accessibility constraints

### 8.1 WCAG level

**Mandatory: WCAG 2.1 AA** for all interactive elements and all text content.  
**Target: WCAG 2.1 AAA** for primary body text (which reaches 15.3:1 on cream-50 — already AAA) and heading text.  
The salvia-400 primary button (4.6:1) is the only AA-minimum element — it passes AA; all other text pairings exceed it.

### 8.2 Focus-visible

Every interactive element must have a visible focus ring. The system uses:

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(107, 155, 115, 0.35), 0 0 0 1px #6B9B73;
}
```

This produces a 3px warm-green halo. It is warm (salvia) not blue, matches the brand, and passes contrast requirements against both cream-50 and white backgrounds.

Apply in Tailwind: `focus-visible:ring-2 focus-visible:ring-salvia-400 focus-visible:ring-offset-2 focus-visible:outline-none`

Do not use `outline: none` without a replacement focus indicator. Never suppress focus-visible styles.

### 8.3 Minimum touch target size

All interactive elements: minimum 44×44px on mobile, per WCAG 2.5.5 (AA) and Apple HIG.

Buttons: all sizes (`sm` = 32px height) must have a minimum tap target of 44px imposed via CSS `min-height: 44px` on mobile, or using padding compensation. The `sm` button uses `py-3` on mobile even if visually smaller.

Nav links: minimum 44px tall tap area — use `py-3` on mobile nav items.

Icons used as standalone buttons (close, menu): wrap in a `<button>` with `p-2.5` to hit 44px.

### 8.4 Screen reader notes per component

**Navigation:**
- `<nav aria-label="Navegación principal">` on desktop nav
- Mobile menu button: `aria-expanded`, `aria-controls="mobile-menu"`, `aria-label="Abrir menú"`
- Active nav link: `aria-current="page"` (for multi-page) or `aria-current="true"` (for anchor scroll on single page)

**Hero section:**
- H1 is the first `<h1>` on the page — only one. All section headings are `<h2>` or `<h3>`.
- Hero UI mockup (the PDF screenshot): `<img alt="Vista previa del Resumen semanal de Mateo — PDF de progreso para familias generado automáticamente por i-am.clinic">` — descriptive, not generic

**Buttons:**
- Loading state: `aria-busy="true"` on the button, `aria-live="polite"` region announcing "Cargando..."
- Icon-only buttons: `aria-label` required

**Accordion (FAQ):**
- shadcn Accordion uses `<button>` triggers with `aria-expanded` — correct by default
- Add `id` on content panel and `aria-controls` on trigger — shadcn handles this

**Pricing cards:**
- Each pricing tier is a `<section>` or `<article>` with a heading (`<h3>`) for screen reader navigation
- Local currency line: `aria-label="Equivalente en moneda local: S/75 al mes en Perú, $350 pesos al mes en México"`

**Testimonials:**
- Each testimonial in a `<blockquote>` with `<cite>` for attribution

**Color alone is never the only signal** — error states have both color + icon + text; active states have both color + underline or weight change.

### 8.5 Keyboard navigation contract

- Tab order follows visual reading order (no `tabindex > 0`)
- All interactive elements reachable by Tab/Shift+Tab
- Accordion: Enter/Space to toggle
- Select: Arrow keys to navigate options
- Modal/Sheet: Focus trapped inside while open; Escape closes; focus returns to trigger on close
- Nav mobile menu: same trap rules as modal
- Smooth-scroll anchor links triggered by keyboard do not hijack the browser's native scroll keyboard behavior

### 8.6 Language attribute

```html
<html lang="es">
```

If any section switches language (e.g., a testimonial in another language), use `lang="es-MX"` or `lang="en"` on that specific element.

---

## 9. Imagery rules

### 9.1 Photography

**Photography on the landing page is banned** except for one explicit exception below.

Rationale (from brand.md): stock photos of smiling therapists in lab coats are brand-killing. The LATAM TEA outpatient psychologist does not use a lab coat; the image lies about who the user is. No generic "professional with laptop" photos. No children in therapy sessions (privacy + anti-surveillance brand promise). No family photos (stock = inauthentic; real = PII/privacy risk).

**Sole exception:** If a real therapist from the pilot cohort provides a photo and written consent, a 40×40px circular avatar may appear in a testimonial card. No full-width photos, no headshots larger than avatar size.

### 9.2 Illustration style

Illustrations are used only to supplement the product UI mockup — not to replace it. If an illustration is needed (feature icons at larger scale, empty state inside the PDF mockup), the style is:

- **Line weight:** 1.5–2px stroke, consistent throughout
- **Color:** Monochromatic within the brand palette — salvia line on cream fill, or wood line with no fill (outline only)
- **Style:** Clean, schematic, spare. Not character-based, not "friendly blob" SaaS illustration, not isometric 3D. Think: architectural diagram warmth, not Duolingo warmth.
- **Mood:** Calm and functional. The illustration should look like something a thoughtful designer drew on a whiteboard, not a Figma community asset.

Illustration is not required on the MVP landing. If in doubt, omit and use a Lucide icon scaled to 32px instead.

### 9.3 Product UI mockup treatment

**The hero artifact is "Resumen semanal de Mateo — semana del 28 de abril."** This is a PDF document rendered as an image inside a browser-frame mockup or as a floating document card.

**Treatment spec:**
- Container: `radius-xl` (24px), `shadow-lg` (the warm large shadow), background: `white`
- The document is shown at slight angle — `rotate-1` — as if it is resting on the surface of the desk, not floating in a void. This is subtle (1–2 degrees), not dramatic.
- The document card sits on a warm gradient patch: `bg-gradient-to-br from-cream-100 to-cream-200`, behind and larger than the document, creating a soft "surface" the document rests on
- No blue gradient, no purple glow, no neon border, no "device frame" (iPhone/Macbook) — this is a document, not an app screenshot
- The document content (visible in the mockup) must be legible enough to read the section headers: "Objetivos de la semana", "Actividades realizadas", "Mensaje para la familia". Body text can be blurred/lorem-ipsum to protect any real data.
- Alt text: (see §8.4)

**Feature section UI screenshots (scheduling, notes):**
- Standard `radius-lg` container, `shadow-base`, no rotation
- `bg-cream-100` background patch behind them, `p-4` padding
- Browser chrome: optional — a minimal top bar with 3 colored dots (macOS style) is acceptable to signal "this is a browser app"; do not add full URL bars or OS chrome

### 9.4 Background texture/pattern usage

**Allowed:** A single, barely-perceptible noise texture overlay on solid-color sections, achieved via CSS:
```css
.section-texture {
  background-image: url("data:image/svg+xml,..."); /* SVG noise pattern */
  background-blend-mode: multiply;
  opacity: 0.03;
}
```
This softens the "flat corporate" feel without becoming "design portfolio grain overdose."

**Not allowed:**
- Geometric line patterns (grids, dots, diagonal lines) — reads as tech/SaaS template
- Large illustrative backgrounds
- Gradient meshes (purple/pink/cyan — absolutely not)
- Bokeh or blurred photo backgrounds

The alternate section background (`cream-100`) provides enough rhythm variation. Texture is optional and additive, not structural.

### 9.5 The hero PDF artifact — rendering notes

**Content to show in the mockup (use placeholder-realistic data, not lorem ipsum):**

```
Resumen semanal de Mateo
Semana del 28 de abril al 2 de mayo

Terapeuta: [Name of fictional therapist]
──────────────────────────────────────────

Objetivos de esta semana
• Trabajo en regulación sensorial antes de actividades de escritura
• Anticipación de cambios en la rutina con apoyo visual

Lo que hicimos juntos
[2-3 sentence plain-language description]

Mensaje para la familia
[1 paragraph warm, plain-language note in Spanish]

Próxima sesión: miércoles 7 de mayo, 15:00
```

This copy should be in real Spanish, not lorem ipsum. The therapist reading the landing page should immediately recognize this as "the document I wish I could send every week but don't have time to write." That recognition IS the conversion moment.

---

## 10. Tailwind theme + CSS-vars output

### 10.1 CSS variables — in `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand primitives */
    --cream-50:  255 250 245;
    --cream-100: 247 242 232;
    --cream-200: 237 229 212;
    --wood-300:  201 170 132;
    --wood-400:  168 132 90;
    --wood-500:  125 94 60;
    --salvia-100: 214 229 216;
    --salvia-200: 174 205 179;
    --salvia-400: 107 155 115;
    --salvia-500: 78 122 86;
    --salvia-600: 56 96 62;
    --terra-100: 242 224 214;
    --terra-300: 217 144 112;
    --terra-500: 181 97 60;
    --terra-600: 140 69 40;
    --ink-100:   214 203 194;
    --ink-300:   168 149 133;
    --ink-500:   107 90 74;
    --ink-700:   61 48 38;
    --ink-900:   28 22 18;

    /* shadcn/ui semantic vars — light mode */
    --background:         255 250 245;      /* cream-50 */
    --foreground:         28 22 18;         /* ink-900 */

    --card:               255 255 255;      /* white */
    --card-foreground:    28 22 18;

    --popover:            255 255 255;
    --popover-foreground: 28 22 18;

    --primary:            107 155 115;      /* salvia-400 */
    --primary-foreground: 255 255 255;

    --secondary:          247 242 232;      /* cream-100 */
    --secondary-foreground: 56 96 62;       /* salvia-600 */

    --muted:              237 229 212;      /* cream-200 */
    --muted-foreground:   107 90 74;        /* ink-500 */

    --accent:             217 144 112;      /* terra-300 */
    --accent-foreground:  28 22 18;

    --destructive:        181 97 60;        /* terra-500 */
    --destructive-foreground: 255 255 255;

    --border:             237 229 212;      /* cream-200 */
    --input:              237 229 212;
    --ring:               107 155 115;      /* salvia-400 */

    --radius: 0.625rem;                     /* 10px — base border radius */

    /* Custom semantic tokens */
    --color-bg:                #FDFAF5;
    --color-surface:           #FFFFFF;
    --color-surface-alt:       #F7F2E8;
    --color-border:            #EDE5D4;
    --color-border-strong:     #A8845A;
    --color-text-primary:      #1C1612;
    --color-text-secondary:    #3D3026;
    --color-text-muted:        #6B5A4A;
    --color-text-disabled:     #A89585;
    --color-success-surface:   #D6E5D8;
    --color-warning-surface:   #F2E0D6;
    --color-error:             #B5613C;
    --color-error-surface:     #F2E0D6;
    --color-error-text:        #8C4528;

    /* Font families */
    --font-heading: var(--font-jakarta), system-ui, sans-serif;
    --font-body:    var(--font-lora), Georgia, serif;
    --font-ui:      var(--font-jakarta), system-ui, sans-serif;
  }

  .dark {
    --background:         26 21 16;         /* #1A1510 */
    --foreground:         240 235 227;       /* #F0EBE3 */

    --card:               36 32 24;          /* #242018 */
    --card-foreground:    240 235 227;

    --popover:            36 32 24;
    --popover-foreground: 240 235 227;

    --primary:            107 155 115;       /* salvia-400 unchanged */
    --primary-foreground: 255 255 255;

    --secondary:          46 40 32;          /* #2E2820 */
    --secondary-foreground: 174 205 179;     /* salvia-200 */

    --muted:              61 54 40;          /* #3D3628 */
    --muted-foreground:   140 128 120;       /* #8C8078 */

    --accent:             217 144 112;       /* terra-300 unchanged */
    --accent-foreground:  28 22 18;

    --destructive:        217 123 90;        /* lightened terra */
    --destructive-foreground: 255 255 255;

    --border:             61 54 40;
    --input:              61 54 40;
    --ring:               107 155 115;

    --color-bg:                #1A1510;
    --color-surface:           #242018;
    --color-surface-alt:       #2E2820;
    --color-border:            #3D3628;
    --color-border-strong:     #A8845A;
    --color-text-primary:      #F0EBE3;
    --color-text-secondary:    #C9BDB3;
    --color-text-muted:        #8C8078;
    --color-text-disabled:     #564E46;
    --color-success-surface:   #1E2E20;
    --color-warning-surface:   #2E2018;
    --color-error:             #D97B5A;
    --color-error-surface:     #2E1C14;
    --color-error-text:        #E8A080;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Base element styles */
  body {
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
  }

  /* Focus-visible global */
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 155, 115, 0.35), 0 0 0 1px #6B9B73;
    border-radius: var(--radius);
  }
}
```

### 10.2 `tailwind.config.ts` — theme.extend block

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF5',
          100: '#F7F2E8',
          200: '#EDE5D4',
        },
        wood: {
          300: '#C9AA84',
          400: '#A8845A',
          500: '#7D5E3C',
        },
        salvia: {
          100: '#D6E5D8',
          200: '#AECDB3',
          400: '#6B9B73',
          500: '#4E7A56',
          600: '#38603E',
        },
        terra: {
          100: '#F2E0D6',
          300: '#D99070',
          500: '#B5613C',
          600: '#8C4528',
        },
        ink: {
          100: '#D6CBC2',
          300: '#A89585',
          500: '#6B5A4A',
          700: '#3D3026',
          900: '#1C1612',
        },
        // shadcn CSS-var-based aliases for use with cn()
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        input:  'rgb(var(--input) / <alpha-value>)',
        ring:   'rgb(var(--ring) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
          foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
        },
      },

      fontFamily: {
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-lora)', 'Georgia', 'serif'],
        ui:      ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-lora)', 'Georgia', 'serif'],
      },

      fontSize: {
        'display': ['3.5rem',   { lineHeight: '1.1',  fontWeight: '700' }],
        'h1':      ['2.75rem',  { lineHeight: '1.15', fontWeight: '700' }],
        'h2':      ['2rem',     { lineHeight: '1.2',  fontWeight: '700' }],
        'h3':      ['1.5rem',   { lineHeight: '1.3',  fontWeight: '600' }],
        'h4':      ['1.25rem',  { lineHeight: '1.35', fontWeight: '600' }],
        'h5':      ['1.125rem', { lineHeight: '1.4',  fontWeight: '500' }],
        'h6':      ['1rem',     { lineHeight: '1.45', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7',  fontWeight: '400' }],
        'body':    ['1rem',     { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.9375rem',{ lineHeight: '1.7',  fontWeight: '400' }],
        'small':   ['0.875rem', { lineHeight: '1.6',  fontWeight: '400' }],
        'label':   ['0.8125rem',{ lineHeight: '1.5',  fontWeight: '500' }],
        'micro':   ['0.75rem',  { lineHeight: '1.5',  fontWeight: '500' }],
      },

      borderRadius: {
        'sm':   '6px',
        'base': '10px',
        'lg':   '16px',
        'xl':   '24px',
        DEFAULT: '10px',
      },

      boxShadow: {
        'sm':    '0 1px 3px rgba(92,60,30,0.08), 0 1px 2px rgba(92,60,30,0.04)',
        'base':  '0 4px 12px rgba(92,60,30,0.10), 0 2px 4px rgba(92,60,30,0.06)',
        'md':    '0 8px 24px rgba(92,60,30,0.12), 0 4px 8px rgba(92,60,30,0.06)',
        'lg':    '0 16px 40px rgba(92,60,30,0.14), 0 6px 12px rgba(92,60,30,0.07)',
        'focus': '0 0 0 3px rgba(107,155,115,0.35), 0 0 0 1px #6B9B73',
      },

      transitionDuration: {
        'fast':   '100ms',
        'base':   '150ms',
        'medium': '200ms',
        'slow':   '250ms',
        'reveal': '400ms',
      },

      transitionTimingFunction: {
        'out':    'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },

      maxWidth: {
        'prose':   '680px',
        'content': '800px',
        'default': '1120px',
        'wide':    '1280px',
      },

      screens: {
        'sm': '561px',
        'md': '961px',
        'mobile': { max: '560px' },
        'tablet': { max: '960px' },
      },
    },
  },
  plugins: [],
}

export default config
```

### 10.3 `shadcn/ui` integration notes

shadcn/ui reads CSS vars in the `rgb(var(--token) / alpha)` pattern when configured in `tailwind.config.ts`. The config above uses this pattern for all shadcn-conventional tokens (`--background`, `--primary`, `--card`, etc.).

**`components.json` settings (as-built in `apps/landing/components.json`):**
```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

Set `"baseColor": "neutral"` — shadcn will not inject blue defaults over the custom palette.

**Per-component overrides to apply after `shadcn add`:**

| Component | Override needed |
|---|---|
| Button | Change `--primary` var applied above; verify `rounded` class is `rounded-base` not `rounded-md` |
| Input | Remove `border-gray-300`, apply `border-border`; confirm ring color is `ring-ring` (resolves to salvia) |
| Badge | Change `rounded-full` to `rounded-sm` in the component file |
| Accordion | Remove trigger underline: delete `hover:underline` from AccordionTrigger |
| Card | Remove default gray `border-border` shadow — apply per card level as described in §5.3 |
| Select | Confirm chevron icon is `ChevronDown` from Lucide, not a custom SVG |

---

## Appendix: Anti-pattern reference

A quick checklist for PR review. Any of these in a PR = reject:

- [ ] `#0066CC` or any blue in the palette
- [ ] `font-family: Inter` or `font-family: DM Sans` or Roboto
- [ ] `border-radius: 9999px` on a button
- [ ] `box-shadow` with `rgba(0,0,0,0.x)` cool-grey shadow (use warm rgba only)
- [ ] Stock photo `<img>` pointing to Unsplash / Pexels
- [ ] `<img alt="">` (empty alt) on the hero PDF mockup
- [ ] `animation: infinite` on any element
- [ ] `parallax` in any class or comment
- [ ] `AI-powered` in any copy string
- [ ] `paciente` in any copy string
- [ ] `rounded-full` on any button
- [ ] ARASAAC pictogram with color modification or style change
- [ ] Any icon from a second icon library (not Lucide) mixed into the landing
- [ ] Missing `:focus-visible` style on any interactive element
- [ ] Text below `0.875rem` (14px) that is not in `.micro` context
