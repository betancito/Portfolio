---
title: Page — Home
tags: [ia, page, home]
status: exploring
created: 2026-06-15
updated: 2026-06-15
related: ["[[Sitemap]]", "[[Navigation & Flows]]", "[[Component Visual Library]]", "[[Motion & Animation]]", "[[Frutiger Aero — Design Language]]", "[[Developer Identity]]", "[[Page — Projects]]", "[[Page — Blog]]", "[[Page — Contact]]"]
---

# Page — Home

Route: `/:lang`. This is the **statement page** — the one screen that must make a stranger feel the two north stars at once: *who Jeronimo is* and *the [[Frutiger Aero — Design Language|Aero]] spectacle*. It is not a hub of links; it is a curated descent. See [[Vision & Purpose]].

> [!important] Home's single job
> Within **one scroll**, deliver an emotional hit (hero) and three honest doors (work, writing, contact). Optimize for resonance and craft, **not** recruiter scan-speed ([[Audience & Goals]]). If a section doesn't earn its delight, cut it.

## Wireframe

```
╔══════════════════════════════════════════════════════════╗
║  GlassHeader (sticky)                       EN|ES   ☼/☾   ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║   ░░░ HERO ░░░  sky→cyan→lime aurora, drifting blobs,    ║
║   bokeh, god-rays, floating bubbles, film grain          ║
║                                                          ║
║        Jeronimo Betancur Duque                           ║
║        “I build software the way water finds its way.”   ║
║        [ Read my story ]   [ See the work ]   ← gel btns ║
║                                ⌄ scroll cue (bubble)     ║
╠══════════════════════════════════════════════════════════╣
║   IDENTITY TEASER   — 2–3 sentence essence + values pills║
║   (glass panel, sits over a calmer sky)   → /about       ║
╠══════════════════════════════════════════════════════════╣
║   FEATURED PROJECTS   — 2–3 glass tiles, hover gloss     ║
║   [tile] [tile] [tile]                    → /projects    ║
╠══════════════════════════════════════════════════════════╣
║   LATEST WRITING   — 2–3 post cards (cover, title, date) ║
║   [card] [card] [card]                    → /blog        ║
╠══════════════════════════════════════════════════════════╣
║   CONTACT CTA   — glass band, big gel button             ║
║   “Let’s make something bright.”   [ Say hello ] → /contact║
╠══════════════════════════════════════════════════════════╣
║   GlassFooter — © · social · repo · built-with · sitemap ║
╚══════════════════════════════════════════════════════════╝
```

## Section-by-section spec

### 1 — Hero (the spectacle)

- **Goal**: instant Aero awe + a one-line identity hook. This is where we spend the motion/render budget.
- **Background**: layered, full-bleed — animated multi-stop **aurora/mesh gradient** (sky `#6FD7EC` → scooter `#35BCDE` → leaf `#71AB23`), 2–4 blurred drifting **blobs**, rising **bubbles** (radial-gradient circles), a soft **lens-flare/god-ray**, and a low-opacity **film-grain** overlay. Recipes in [[Color & Gradients]], [[Imagery & Motifs]], [[Glass, Gloss & Depth]].
- **Content**: name (humanist display type — [[Typography|Source Sans 3]]), a single evocative tagline pulled from [[Developer Identity]] (bilingual), two **aqua gel buttons**: primary "See the work" → [[Page — Projects]], secondary "Read my story" → [[Page — About]].
- **Components**: `AuroraBackdrop`, `BubbleField`, `GrainOverlay`, `GelButton`, `ScrollCue` — all in [[Component Visual Library]].
- **Motion**: hero entrance = staggered fade/rise of headline → tagline → buttons; backdrop drifts continuously. Optional subtle **parallax** on blobs vs. text on scroll. All gated on `prefers-reduced-motion` → static gradient, no drift. [[Motion & Animation]].

> [!warning] Performance discipline in the hero
> `backdrop-filter` and big blurred blobs are GPU-heavy. Cap blur ≤20px, animate `transform`/`background-position` only (never layout), keep glass layers few, and respect the [[Performance Budget]] (LCP < 2.5s). The hero must not tank INP. Consider a static pre-rendered gradient as the LCP element with motion layered after hydration.

### 2 — Identity teaser

- **Goal**: a 2–3 sentence distillation of [[Developer Identity]] + a row of **value pills** (e.g. *craft*, *clarity*, *play*). One clear link → [[Page — About]] ("the whole story").
- **Components**: `GlassPanel`, `ValuePill` (small gel chips). Sits over a calmer sky so text contrast is easy.

### 3 — Featured projects

- **Goal**: 2–3 hand-picked projects as **glass tiles** (cover/gradient, title, one-line summary, tags). Hover = specular gloss sweep + lift. Each links out per [[Page — Projects]] rules; a "See all projects →" link closes the section.
- **Data**: a `featured: true` flag on the project model in [[Page — Projects]].
- **Components**: `ProjectTile` (shared with the Projects page).

### 4 — Latest writing

- **Goal**: 2–3 newest posts (cover image, title, date, reading time) as cards. "Read the blog →" → [[Page — Blog]].
- **Data**: pulled from the [[Blog Content Pipeline]] index, filtered by current locale, sorted by date desc. If a post lacks a translation in the active locale, show the available variant marked, or skip — decide in [[Page — Blog]].
- **Components**: `PostCard` (shared with the Blog index).

### 5 — Contact CTA

- **Goal**: a warm, low-pressure invitation (this is *not* a conversion funnel). A glass band with a single big **gel button** → [[Page — Contact]].
- **Copy tone**: friendly, human, bilingual. e.g. EN "Let's make something bright." / ES "Hagamos algo que brille."

### Footer

- `GlassFooter`: copyright, social links ([[Developer Identity]] — GitHub/LinkedIn TBD), repo link, a small "built with React 19 · Vite · Tailwind v4 · Frutiger Aero" line, and links to all [[Sitemap|pages]]. Quiet, glassy, dark-friendly.

## Components used

`GlassHeader` · `AuroraBackdrop` · `BubbleField` · `GrainOverlay` · `GelButton` · `ScrollCue` · `GlassPanel` · `ValuePill` · `ProjectTile` · `PostCard` · `GlassFooter` — all catalogued in [[Component Visual Library]] with both-theme variants.

## Bilingual notes

- All copy comes from typed message keys ([[i18n Architecture]]); the tagline and CTA copy are *authored separately per locale*, not machine-translated — they carry voice.
- Featured projects/posts are filtered to the active locale where content is localized.

## SEO / meta

- Per-locale `<title>`, description, canonical, `hreflang` alternates, and a static OG image. Home is the `x-default` target (English). See [[Accessibility & SEO]] and [[Sitemap]].

## Open questions

- [ ] Hero LCP strategy: static gradient image vs. CSS-only paint as the LCP element. #risk #todo
- [ ] Does the identity teaser duplicate too much of [[Page — About]]? Keep it a *teaser* (curiosity gap), not a summary.
- [ ] Featured-post locale-fallback behavior (see [[Page — Blog]]).

## See also

- [[Frutiger Aero — Design Language]] · [[Motion & Animation]] · [[Component Visual Library]]
- [[Developer Identity]] — the source of the hero/teaser voice
