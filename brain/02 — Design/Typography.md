---
title: Typography
tags: [design, frutiger-aero, typography]
status: accepted
created: 2026-06-15
updated: 2026-06-15
related: ["[[Frutiger Aero — Design Language]]", "[[Design Tokens]]", "[[Performance Budget]]", "[[Accessibility & SEO]]", "[[Tech Stack]]", "[[VPS Deployment Plan]]"]
---

# Typography

> [!important] Frutiger Aero is named after a typeface.
> The literal *Frutiger* and *Myriad Pro* faces define the era; *Segoe UI* was the Aero-era system face (already the anchor in our `--font-sans`). The brief is **humanist, warm, spoken** — open apertures, soft terminals, generous x-height. **Avoid geometric** (Poppins, Montserrat, Futura) **and cold grotesque** (Helvetica) faces; they break the friendly techno-optimist mood. → [[Frutiger Aero — Design Language]]

## Font choice (free, self-hostable, humanist)

| Font | License | Why | Role |
| --- | --- | --- | --- |
| **Source Sans 3** | OFL | Adobe's open humanist, the closest free Myriad cousin | **Primary** body + UI |
| **Hind** | OFL | Open apertures, Frutiger-like legibility at small sizes | optional small-text alt |
| Open Sans | Apache | Screen-tuned humanist, safe neutral | fallback / alt |
| IBM Plex Sans | OFL | Humanist/neo-grotesque hybrid, strong UI weights | alt for data-dense UI |
| Nunito Sans | OFL | Rounded, friendlier | alt if we want it softer |

> [!decision] Primary = **Source Sans 3**, self-hosted, with the existing Segoe-UI/system stack as the fallback tail.
> One family, multiple weights, covers headings + body + UI. It is the strongest free Myriad evocation and reads cleanly over glass. We keep the current `--font-sans` system tail so there is **zero FOUT/FOIT risk** before the web font loads — Segoe UI is itself period-correct. #decision

**Final stack:**

```
"Source Sans 3", "Hind", "Open Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
```

### Optional display accent

A single optional display face for the hero/name only (e.g. a slightly rounder humanist or a tasteful Source Sans 3 Black with tight tracking). **Do not** introduce a second body font; keep it to one family + at most one display use. Decide in [[Component Visual Library]].

## Type scale

A modular scale (~1.25 / major third) with a fluid `clamp()` top end. All sizes use `rem` for accessibility (respect user font-size).

| Token | Size (rem) | Use |
| --- | --- | --- |
| `--text-xs` | 0.75 | captions, meta, tags |
| `--text-sm` | 0.875 | secondary UI, footnotes |
| `--text-base` | 1.0 | **body** |
| `--text-lg` | 1.125 | lead paragraph |
| `--text-xl` | 1.25 | small headings / H4 |
| `--text-2xl` | 1.563 | H3 |
| `--text-3xl` | 1.953 | H2 |
| `--text-4xl` | 2.441 | H1 (interior pages) |
| `--text-hero` | `clamp(2.5rem, 6vw, 4.5rem)` | Home hero name |

### Weights, line-height, tracking

- **Weights:** 400 regular (body), 600 semibold (UI/links/subheads), 700 bold (headings), 900 black (hero only). Ship **only** the weights used — every weight is bytes (see [[Performance Budget]]).
- **Line-height:** body 1.6; headings 1.1–1.2; hero 1.05.
- **Tracking:** body 0; large headings slightly tight (-0.01em to -0.02em); ALL-CAPS labels +0.04em.
- **Measure:** body text capped at ~`65ch` for readability.

## Headings vs body — voice

Headings are **confident and warm**: bold/black weight, tight tracking, often set over glass with a soft text-shadow for contrast. Body is **calm and humanist**: regular weight, 1.6 line-height, deep-navy `--ink` (light) / cool-white `--mist` (dark), never pure black/white. Links use `--action` and semibold, not underline-by-default (underline on hover). The blog ([[Page — Blog]]) needs comfortable long-form reading: `--text-lg` lead, `65ch` measure, generous paragraph spacing.

## Loading strategy — self-host on the VPS

> [!decision] Self-host the fonts (WOFF2, subset) — do **not** use Google Fonts CDN.
> Reasons: **privacy** (no third-party request / GDPR concern), **performance** (same-origin, no extra DNS/TLS handshake, cache under our own headers), and **no vendor dependency** — consistent with the whole "own your VPS" philosophy (see [[VPS Deployment Plan]]). #decision #frutiger-aero

Concrete plan:

1. Download Source Sans 3 (+ Hind if used) static WOFF2 for the chosen weights only.
2. **Subset** with `fonttools`/`glyphhanger` to Latin + Latin-Extended (covers EN **and ES** — accents, ñ, ¿, ¡ — for the bilingual site). This is the biggest single weight win.
3. Self-`@font-face` with `font-display: swap` and `unicode-range`, served from `/fonts/` by Caddy with long-lived immutable cache headers.
4. **Preload** only the critical weights actually used above the fold (regular + the hero weight):

```html
<link rel="preload" href="/fonts/source-sans-3-regular.woff2" as="font" type="font/woff2" crossorigin>
```

```css
@font-face {
  font-family: "Source Sans 3";
  src: url("/fonts/source-sans-3-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+2000-206F, U+2074, U+20AC;
}
/* repeat for 600, 700, 900 */
```

> [!tip] A variable font can replace 4 static weights with one file.
> If Source Sans 3's variable build covers our weight range, prefer it — fewer requests, smaller total. Validate the subset weight against the [[Performance Budget]] before committing.

## Tailwind v4 `@theme` additions

CSS-first config (no `tailwind.config.js`). Extend the existing `src/index.css` `@theme` block — keep `--font-sans` as the live token name so existing utilities keep working:

```css
@theme {
  /* primary humanist stack — replaces the placeholder system-only value */
  --font-sans: "Source Sans 3", "Hind", "Open Sans", system-ui, "Segoe UI",
               Roboto, Helvetica, Arial, sans-serif;
  --font-display: "Source Sans 3", system-ui, sans-serif; /* hero only */

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.563rem;
  --text-3xl: 1.953rem;
  --text-4xl: 2.441rem;
  --text-hero: clamp(2.5rem, 6vw, 4.5rem);
}
```

The `@font-face` declarations live in plain CSS (outside `@theme`) in `src/index.css`. See [[Tech Stack]] and [[Design Tokens]].

## Accessibility

- All type in `rem`; never disable user zoom; respect OS font-size.
- Text over glass/gradients needs **≥4.5:1** — pair with a tint/scrim, not raw translucency (details in [[Glass, Gloss & Depth]], [[Accessibility & SEO]]).
- Don't communicate by weight/color alone; keep link affordance (hover underline + focus ring).

## Next actions

- [ ] Subset + self-host Source Sans 3 (weights 400/600/700/900), measure WOFF2 bytes vs [[Performance Budget]].
- [ ] Decide variable vs static build.
- [ ] Wire `@theme` tokens + `@font-face` into `src/index.css`; preload critical weights in `index.html`.
- [ ] Verify ES glyph coverage (ñ, accents, ¿, ¡) survives subsetting.

## See also

- [[Frutiger Aero — Design Language]] · [[Design Tokens]] · [[Tech Stack]]
- [[Performance Budget]] · [[Accessibility & SEO]] · [[VPS Deployment Plan]]
