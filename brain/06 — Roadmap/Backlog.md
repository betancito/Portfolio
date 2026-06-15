---
title: Backlog
tags: [roadmap, backlog, ideas]
status: idea
created: 2026-06-15
updated: 2026-06-15
related: ["[[Roadmap & Phases]]", "[[Now · Next · Later]]", "[[Imagery & Motifs]]", "[[Motion & Animation]]", "[[Component Visual Library]]", "[[Definition of Done]]"]
---

# Backlog

A grab-bag of **uncommitted** ideas — stretch features, polish, and pure-delight / easter-egg concepts in the [[Frutiger Aero — Design Language]] spirit. **Nothing here is committed.** Items graduate by getting pulled into [[Now · Next · Later]] (usually as Phase 5 delight) — and only if they survive the gates in [[Definition of Done]].

> [!important]
> **Every delight is opt-out-able and reduced-motion-safe by construction.** If an idea cannot honor `prefers-reduced-motion` or would blow the [[Performance Budget]], it does not graduate — full stop. Spectacle never beats the [[Accessibility & SEO]] floor. #risk

**Legend.** Effort: 🟢 S · 🟡 M · 🔴 L. Impact: ⭐ low · ⭐⭐ med · ⭐⭐⭐ high.

## Quick triage matrix

| Idea | Effort | Impact | Phase fit | Notes |
|---|---|---|---|---|
| Interactive parallax bubbles | 🟡 M | ⭐⭐⭐ | P5 | Pointer-reactive; canvas or CSS `translate3d`. Signature motif. |
| Koi / fish cursor companion | 🔴 L | ⭐⭐⭐ | P5 | Trailing follower; lazy-loaded; off by default for reduced-motion. |
| Konami-code easter egg | 🟢 S | ⭐⭐ | P5 | Key sequence → god-rays burst / theme flip / hidden scene. |
| Weather-reactive sky | 🔴 L | ⭐⭐ | P5 | Tint aurora by local time-of-day (free) or live weather (API + key). |
| Ambient sound toggle | 🟡 M | ⭐ | P5 | Soft water/ambient loop; **muted by default**, persisted choice. |
| Water-caustics hero (WebGL) | 🔴 L | ⭐⭐⭐ | P5 | `feTurbulence`+`feDisplacementMap` or shader; perf-gated to desktop. |
| Cursor ripple / droplet trail | 🟢 S | ⭐⭐ | P5 | Small radial splashes on click; cheap, very on-theme. |
| Theme "weather" transitions | 🟡 M | ⭐⭐ | P3/P5 | View-Transitions day↔night sky morph on theme toggle. |
| Animated SVG blob morph nav | 🟡 M | ⭐⭐ | P1/P5 | Organic `border-radius` morph behind active nav item. |
| Lens-flare on hero CTA | 🟢 S | ⭐⭐ | P1 | Stacked radial gradients, `screen` blend; could fold into P1. |
| "Now playing" / status pill | 🟢 S | ⭐ | later | Glass pill showing what Jeronimo's building — identity flavor. |
| Guestbook (uses contact API) | 🟡 M | ⭐⭐ | later | Reuses Hono backend; moderation overhead — likely out of scope. |
| Per-post reading-progress aurora | 🟢 S | ⭐⭐ | P2/P5 | Scroll-linked gradient sweep on blog posts via `animation-timeline`. |
| 404 page as a koi pond | 🟡 M | ⭐⭐⭐ | P5 | Turn the error page into a delight moment, not a dead end. |
| Tilt/parallax glass cards | 🟢 S | ⭐⭐ | P1/P5 | Pointer-tracked 3D tilt on project cards; tiny, high charm. |

## Delight / easter-egg concepts (detail)

> [!example] Interactive bubbles
> Rising radial-gradient circles (`radial-gradient(circle at 35% 30%, #fff, transparent 45%)`) that drift on `translateY`; pointer proximity nudges them aside. Reduced-motion → static decorative bubbles. Aligns with [[Imagery & Motifs]] water/bubble motif.

> [!example] Koi cursor companion
> A small SVG koi that swims toward the cursor with spring physics ([[Motion & Animation]]). Lazy-load the module; never load under `prefers-reduced-motion`. Pairs with the **404 koi pond**.

> [!example] Konami code
> `↑↑↓↓←→←→ B A` → a Frutiger-Aero "moment": god-rays bloom, an aurora intensifies, or a hidden retro-Vista scene. Pure flex, near-zero cost. 🟢

> [!example] Weather-reactive sky
> Cheap version: tint the aurora by **local time-of-day** (dawn ambers, midday cyan, dusk violet) — no API. Stretch: a weather API tints/animates clouds for the visitor's locale. Caches + degrades to the static gradient on failure.

> [!example] Ambient sound
> An optional water/ambient loop behind a clearly-labelled toggle, **off by default**, choice persisted. Respect autoplay policies; never auto-start.

## Stretch features (non-delight)

- [ ] Project case-study sub-pages (explicitly **out of v1** per scope; revisit post-launch). → [[Page — Projects]]
- [ ] RSS / Atom feed for the blog. 🟢 ⭐⭐ → [[Blog Content Pipeline]]
- [ ] Tag/category filtering on [[Page — Blog]]. 🟡 ⭐⭐
- [ ] Third locale (e.g. PT) — Paraglide makes adding one cheap. 🟡 ⭐ → [[i18n Architecture]]
- [ ] Print/PDF stylesheet for the About page (résumé-ish, even though this isn't a job site). 🟢 ⭐
- [ ] Web Vitals RUM reporting into [[Observability & Backups]]. 🟡 ⭐⭐

## Graduation rule

> [!decision]
> An item leaves this note **only** when (1) its parent phase is active in [[Roadmap & Phases]], (2) it has a reduced-motion + perf-safe plan, and (3) it earns a slot in [[Now · Next · Later]]. Until all three hold, it stays here as an idea. #decision

## See also

- [[Now · Next · Later]] — where graduated items land
- [[Roadmap & Phases]] — Phase 5 is the natural home for most delight
- [[Imagery & Motifs]] · [[Motion & Animation]] — the visual/motion vocabulary these draw on
