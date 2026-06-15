---
title: Inspiration Gallery
tags: [research, frutiger-aero, design]
status: idea
created: 2026-06-15
updated: 2026-06-15
related: ["[[Frutiger Aero — References]]", "[[Frutiger Aero — Design Language]]", "[[Color & Gradients]]", "[[Motion & Animation]]", "[[Component Visual Library]]"]
---

# Inspiration Gallery

> [!note] What this is
> A **living scrapbook** for visual inspiration — screenshots, links, palettes, motion clips. [[Frutiger Aero — References]] holds the *grounded, curated* reference record (the "why"); THIS note is the loose, fast collection surface (the "ooh, save that"). When something here proves load-bearing, promote it into [[Frutiger Aero — References]] or the relevant design note.

> [!tip] How to use this gallery
> 1. Drop screenshots/exports into `99 — Research/attachments` (see [[#Attachments]]).
> 2. Embed them inline with `![[filename.png]]` under the right section.
> 3. Add a one-line caption: **what to steal**, not just "looks nice."
> 4. Tag the technique (#glass #aurora #gel #water #grain #type #motion) so it's searchable.
> 5. If it changes a decision, link the design note and mark #todo to mirror the takeaway.

## How a good entry looks

> [!example] Entry template (copy this)
> **[Source name](https://link)** — *what to steal:* one specific, reusable takeaway.
> `![[screenshot.png]]`
> Tags: #glass #aurora · Promote to: [[Color & Gradients]]

---

## Sites & full experiences

Whole sites / apps that nail the Aero feel end-to-end. Capture the **overall composition**, not just one widget.

> [!example] Seeded
> - **[frutiger-aero.org](https://frutiger-aero.org/frutiger-aero)** — *what to steal:* the canonical motif vocabulary; use as the "is this on-brief?" yardstick. #reference
> - **Apple "Liquid Glass" (2025)** — *what to steal:* disciplined glass + restraint in motion; how they keep text legible over translucency. #glass
> - **[Vapor95 retrospective](https://vapor95.com/blogs/darknet/frutiger-aero-a-nostalgic-journey-through-the-rise-reign-and-resurgence-of-a-unique-design-aesthetic)** — *what to steal:* era-accurate imagery for mood-boarding. #reference

> [!todo] To collect #todo
> - [ ] A modern personal/portfolio site that uses glassmorphism *tastefully* (counter-example bank too: where glass goes wrong).
> - [ ] A bilingual site whose language switcher feels native — feeds [[i18n Architecture]].
> - [ ] A blog index with a glassy card grid — feeds [[Page — Blog]] + [[Component Visual Library]].

## Color & gradient refs

Palettes, aurora/mesh gradients, sky/water color stories. Promote winners into [[Color & Gradients]] and [[Design Tokens]].

> [!example] Seeded
> - **[SyntaxSnap Aurora Gradient generator](https://syntaxsnap.com/tools/aurora-gradient)** — *what to steal:* ready blue→cyan→lime aurora CSS for hero blobs. #aurora
> - **[colorswall Frutiger Aero palette](https://colorswall.com/palette/271665)** + **[color-hex palette](https://www.color-hex.com/color-palette/1050335)** — *what to steal:* hex anchors for the day/sky + ocean/aurora themes. #color
> - **[CSS-Tricks Grainy Gradients](https://css-tricks.com/grainy-gradients/)** — *what to steal:* grain-over-gradient recipe so gradients don't band. #grain

> [!todo] To collect #todo
> - [ ] 2–3 saved aurora exports for the **light "sky/day"** theme.
> - [ ] 2–3 saved aurora exports for the **dark "ocean/aurora"** theme.
> - [ ] A bokeh / god-ray reference for the hero. #water #nature

## Motion & interaction refs

Page transitions, hover micro-interactions, drifting blobs, rising bubbles, ripples. Promote into [[Motion & Animation]].

> [!example] Seeded
> - **[LunarLogic `auroral` (GitHub)](https://github.com/LunarLogic/auroral)** — *what to steal:* pure-CSS aurora keyframe structure. #aurora #motion
> - **[Codrops feTurbulence series](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)** — *what to steal:* SVG-filter water caustic + displacement ripple. #water #motion

> [!todo] To collect #todo
> - [ ] A spring-based hover lift on a glass card we like (record timing/feel). #motion
> - [ ] A View Transitions page-change demo to benchmark our route transitions against. #motion
> - [ ] A rising-bubbles loop reference (speed/density that feels calm, not busy). #water

## Component refs

Buttons, cards, nav, toggles, form fields, code blocks. Promote into [[Component Visual Library]].

> [!example] Seeded
> - **[SitePoint glossy CSS3 buttons](https://www.sitepoint.com/shadow-boxing-image-free-css3-glossy-buttons/)** + **[girliemac Aqua button](https://girliemac.com/blog/2009/04/30/css3-gradients-no-image-aqua-button/)** — *what to steal:* the gel/aqua button anatomy (top sheen + inset shadows). #gel
> - **[Glassmorphism guide (HalfAccessible)](https://playground.halfaccessible.com/blog/glassmorphism-design-trend-implementation-guide)** — *what to steal:* accessible glass card with contrast handling. #glass

> [!todo] To collect #todo
> - [ ] A theme toggle (sun/moon or sky/ocean) we'd want to emulate — feeds [[Theming — Light & Dark]]. #toggle
> - [ ] A glassy navbar that stays legible while scrolling over varied backgrounds. #glass #nav
> - [ ] A code-block style for MDX posts (shiki/rehype-pretty-code output). #type

## Typography refs

Specimens of humanist faces in use (Source Sans 3, Hind, Open Sans, IBM Plex Sans). Promote into [[Typography]].

> [!example] Seeded
> - **[FontAlternatives — Myriad Pro alternatives](https://fontalternatives.com/alternatives/myriad-pro/)** — *what to steal:* free humanist substitutes that evoke Frutiger/Myriad. #type

> [!todo] To collect #todo
> - [ ] A pairing we like (display + body) shown at real sizes. #type

## Attachments

> [!important] Where images live
> Save all screenshots/exports into **`99 — Research/attachments`** (created alongside this note). Reference them with Obsidian embeds:
> ```
> ![[my-screenshot.png]]
> ```
> Suggested filename convention so the folder stays scannable:
> `aero__<section>__<source>__<short-desc>.png`
> e.g. `aero__aurora__syntaxsnap__sky-day-v1.png`, `aero__gel__girliemac__aqua-button.png`.

- [ ] Keep large captures reasonably compressed (the vault is git-tracked; see [[Project Structure]] for what gets committed).
- [ ] Prefer PNG for UI, WebP/JPG for photographic mood shots.

## See also

- [[Frutiger Aero — References]] — the curated reference record this gallery feeds into.
- [[Frutiger Aero — Design Language]] · [[Color & Gradients]] · [[Motion & Animation]] · [[Component Visual Library]] · [[Typography]] · [[Theming — Light & Dark]] · [[Design Tokens]]
- [[Tooling Notes]] — implementation-tech research counterpart.

## Open questions

- [ ] One signature hero motif (bubbles vs aurora vs water/koi scene) — collect 3 candidates here, then decide in [[Page — Home]].
- [ ] How much motion is "delight" vs "distraction" for this audience? Collect both good and bad examples. See [[Audience & Goals]].
