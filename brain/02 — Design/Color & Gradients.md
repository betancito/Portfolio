---
title: Color & Gradients
tags: [design, frutiger-aero, color]
status: accepted
created: 2026-06-15
updated: 2026-06-15
related: ["[[Frutiger Aero — Design Language]]", "[[Design Tokens]]", "[[Theming — Light & Dark]]", "[[Glass, Gloss & Depth]]", "[[Imagery & Motifs]]", "[[Accessibility & SEO]]"]
---

# Color & Gradients

> [!note] Color is the loudest Aero signal.
> Gradients are **central**, not decorative — sky-blue→cyan→lime, radial light blooms, slow auroras. This note fixes the exact hex values for both themes and the signature gradient recipes. These values become CSS custom properties in [[Design Tokens]] and drive [[Theming — Light & Dark]].

## Two themes, one system

Frutiger Aero leans bright and glossy, so the **light theme is the hero** ("day/sky"); the dark theme is a genuine alternate world ("ocean/aurora"), not a dimmed copy. Both are built from the same token names so components never branch on theme.

### Light "sky / day" palette

| Token | Hex | Role |
| --- | --- | --- |
| `--sky` | `#6FD7EC` | primary sky blue / hero gradient top |
| `--scooter` | `#35BCDE` | mid sky / interactive hover |
| `--eastern-blue` | `#1299CA` | primary action / link |
| `--deep-blue` | `#0689E4` | deeper action / focus ring |
| `--ocean-deep` | `#0050A0` | deepest blue / pressed states |
| `--leaf` | `#71AB23` | grass/lime accent, success |
| `--ice` | `#9CEFF2` | pale aqua tint / glass fills |
| `--cloud` | `#F4FBFF` | near-white page base, glossy whites |
| `--sun` | `#FBB905` | amber accent, lens-flare core (sparingly) |
| `--ink` | `#0A2540` | body text on light (deep navy, not pure black) |

### Dark "ocean / aurora" palette

| Token | Hex | Role |
| --- | --- | --- |
| `--abyss` | `#02132E` | page base (deep ocean) |
| `--deep` | `#003C78` | raised surfaces / panel base |
| `--ocean` | `#0064B4` | interactive base |
| `--teal-glow` | `#13C2C2` | rim light / aurora teal |
| `--aurora-green` | `#4ADE80` | aurora green (pairs with `#71AB23`) |
| `--violet` | `#7C5CFF` | aurora violet accent |
| `--cyan-rim` | `#6FD7EC` | cyan rim-light / focus |
| `--mist` | `#E6F4FF` | body text on dark (cool off-white) |
| `--sun` | `#FBB905` | amber accent (shared, used even more sparingly) |

> [!tip] Stop order = blue → green → cyan.
> Gradients flow **deep blue → ocean → teal → green**, reserving amber/lime as small accents. Never split-complementary across the whole hue wheel; stay in the blue-cyan-green arc and the look stays coherent. #frutiger-aero

## Signature gradients

### 1. Sky-blue → cyan → lime (the hero day gradient)

```css
.bg-sky-day {
  background: linear-gradient(
    160deg,
    #6FD7EC 0%,
    #35BCDE 38%,
    #9CEFF2 64%,
    #C9F08F 88%,   /* lime breath near the horizon */
    #71AB23 100%
  );
}
```

### 2. Radial light bloom (sunbeam / god-ray seed)

```css
.bloom {
  background:
    radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.85), rgba(255,255,255,0) 55%),
    radial-gradient(80% 60% at 70% 20%, rgba(251,185,5,0.35), rgba(251,185,5,0) 60%),
    linear-gradient(180deg, #6FD7EC, #1299CA);
}
```

### 3. Ocean / aurora (dark theme background)

```css
.bg-ocean-aurora {
  background:
    radial-gradient(70% 50% at 20% 10%, rgba(19,194,194,0.30), transparent 60%),
    radial-gradient(60% 45% at 80% 20%, rgba(124,92,255,0.28), transparent 60%),
    radial-gradient(80% 60% at 50% 100%, rgba(74,222,128,0.22), transparent 60%),
    linear-gradient(180deg, #02132E 0%, #003C78 60%, #0064B4 100%);
}
```

### 4. Animated aurora (registered custom prop — true color animation)

```css
@property --ang { syntax: "<angle>"; inherits: false; initial-value: 0deg; }

.aurora {
  background: conic-gradient(from var(--ang),
    #6FD7EC, #13C2C2, #71AB23, #7C5CFF, #6FD7EC);
  filter: blur(70px);
  animation: aurora-spin 18s linear infinite;
}
@keyframes aurora-spin { to { --ang: 360deg; } }

@media (prefers-reduced-motion: reduce) {
  .aurora { animation: none; }   /* static aurora still reads as Aero */
}
```

### 5. Cheap shimmer (animate background-position on a 200% gradient)

```css
.shimmer {
  background: linear-gradient(90deg, #6FD7EC, #9CEFF2, #71AB23, #6FD7EC);
  background-size: 200% 100%;
  animation: slide 8s linear infinite;
}
@keyframes slide { to { background-position: 200% 0; } }
```

> [!warning] Performance: heavy blur on huge gradient layers can paint-thrash.
> Animate `transform`/`background-position`/registered props — **never layout properties**. Keep large blurred aurora blobs few and `position: fixed` so they don't repaint on scroll. See [[Performance Budget]] and the blob guidance in [[Imagery & Motifs]].

## Tokenisation pattern (for [[Design Tokens]])

Define raw scene hexes once; map semantic roles per theme via the `.dark` (or `[data-theme="dark"]`) variant. Tailwind v4 reads these in `@theme`:

```css
@theme {
  --color-sky:    #6FD7EC;
  --color-cyan:   #35BCDE;
  --color-leaf:   #71AB23;
  --color-sun:    #FBB905;
  /* semantic, theme-switched in :root / .dark below */
}

:root {                 /* light "day/sky" */
  --bg-base:   #F4FBFF;
  --bg-grad-1: #6FD7EC;
  --bg-grad-2: #71AB23;
  --fg:        #0A2540;
  --action:    #1299CA;
}
.dark {                 /* dark "ocean/aurora" */
  --bg-base:   #02132E;
  --bg-grad-1: #13C2C2;
  --bg-grad-2: #4ADE80;
  --fg:        #E6F4FF;
  --action:    #6FD7EC;
}
```

## Accessibility guardrails

> [!important] Saturated gradients destroy text contrast.
> Body text must hit **≥4.5:1**, large text ≥3:1, against whatever sits behind it. Never set text directly on the multi-stop gradient — put it on a glass/tinted scrim. `--ink #0A2540` on `--cloud #F4FBFF` and `--mist #E6F4FF` on `--abyss #02132E` both pass comfortably; the gradient stops are for *surfaces and atmosphere*, not type. → [[Accessibility & SEO]], contrast-on-glass details in [[Glass, Gloss & Depth]].

## Next actions

- [ ] Lock these as CSS vars in [[Design Tokens]] and wire the `.dark` toggle per [[Theming — Light & Dark]].
- [ ] Run every default fg/bg pairing through a contrast checker; record results in [[Accessibility & SEO]].
- [ ] Build a Storybook-style swatch + gradient preview in [[Component Visual Library]].

## See also

- [[Frutiger Aero — Design Language]] · [[Design Tokens]] · [[Theming — Light & Dark]]
- [[Glass, Gloss & Depth]] · [[Imagery & Motifs]] · [[Accessibility & SEO]]
