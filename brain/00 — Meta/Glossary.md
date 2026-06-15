---
title: Glossary
tags: [meta, reference]
status: accepted
created: 2026-06-15
updated: 2026-06-15
related: ["[[Home]]", "[[How to use this vault]]", "[[Frutiger Aero — Design Language]]", "[[Tech Stack]]", "[[ADR Index]]"]
---

# Glossary

Shared vocabulary for the vault. Terms are **alphabetical**; each links to the note(s) where the concept does real work. When you coin a new term, define it here so the brain keeps one language. Spell out an acronym on first use, then use this page as the canonical reference.

> [!tip]
> If you find yourself re-explaining a term in two notes, define it here once and link it instead.

---

## A

**Accessibility (a11y)** — Designing so the site works for everyone, including assistive-tech users. For this project the load-bearing concerns are *contrast over glass* (translucent text fails WCAG — add a scrim/tint), *reduced-motion* gating, and keyboard/focus order. See [[Accessibility & SEO]], [[Glass, Gloss & Depth]].

**ADR (Architecture Decision Record)** — A short, dated document capturing one significant technical decision: its context, the options considered, the choice, and the consequences. Immutable once accepted; superseded rather than edited. The backbone of [[ADR Index]]; start from [[ADR-000 — Template]].

**Aqua / gel button** — A glossy, candy-like Frutiger Aero control: vertical multi-stop gradient, inset top highlight, bottom sheen, and a pseudo-element gloss over the top ~50%. A signature interactive element. See [[Glass, Gloss & Depth]], [[Component Visual Library]].

**Aurora** — An animated, drifting multi-stop / conic gradient evoking northern lights — a core Frutiger Aero background motif. Built from blurred radial "blobs" or a registered `@property` color animation. See [[Color & Gradients]], [[Motion & Animation]].

## B

**Backdrop-filter** — The CSS property (`backdrop-filter: blur() saturate()`) that frosts whatever sits *behind* an element — the engine of [[Glass, Gloss & Depth|glassmorphism]]. GPU-heavy: cap blur ≤20px, limit layer count, provide an `@supports` fallback. See [[Performance Budget]].

**Blob** — An organic, soft, rounded shape (CSS `border-radius` morph or SVG path) used for backgrounds, aurora sources, and decorative depth. A staple of the [[Imagery & Motifs]].

**Bokeh** — Soft, out-of-focus circles of light — a Frutiger Aero nature/optimism motif, often layered as blurred radial gradients. See [[Imagery & Motifs]].

## C

**Caddy** — A modern web server / reverse proxy that **auto-provisions Let's Encrypt TLS** from a one-line config — strictly less ops than nginx + certbot. Serves the static `dist/` and proxies the API. See [[VPS Deployment Plan]], [[Domain, DNS & TLS]].

**Caustics** — The rippling light patterns water casts (e.g. pool floors); a Frutiger Aero water motif, achievable via SVG `feTurbulence` + `feDisplacementMap` or canvas/WebGL. See [[Imagery & Motifs]].

**CI/CD (Continuous Integration / Continuous Deployment)** — Automated build-test-ship pipeline. Here: GitHub Actions builds a Docker image, pushes to GHCR, then SSHes to the VPS to `docker compose pull && up -d`. See [[CI-CD Pipeline]].

**Core Web Vitals (CWV)** — Google's user-experience metrics. 2026 budget: **LCP < 2.5s** (load), **INP < 200ms** (interaction responsiveness, the FID successor), **CLS < 0.1** (layout stability). See [[Performance Budget]].

## D

**Design tokens** — Named, single-source design values (colors, radii, blur amounts, type scale) encoded as CSS custom properties + Tailwind v4 `@theme` entries. The bridge between the [[Frutiger Aero — Design Language]] and the code. See [[Design Tokens]].

**Docker (multi-stage build)** — Containerization where a heavy build stage (Node compiles the Vite app) produces artifacts copied into a tiny runtime stage (Caddy serving static files), yielding small, reproducible images. See [[VPS Deployment Plan]].

## F

**FOUC (Flash Of Unstyled / Unthemed Content)** — The brief flash of the wrong theme before JS applies the saved one. Prevented with an **inline `<head>` script** that sets the theme class before first paint. See [[Theming — Light & Dark]], [[ADR-009 — Theming Strategy]].

**Frontmatter** — The YAML block at the top of every note (`title`, `tags`, `status`, dates, `related`). Drives Obsidian metadata here, and post metadata in the blog (title/date/lang/slug). See [[How to use this vault]], [[Blog Content Pipeline]].

**Frutiger Aero** — The techno-optimist design aesthetic dominant ~2004–2013 (Vista/7 "Aero", Mac OS X "Aqua", Wii skeuomorphism) now in 2020s revival: glassy translucent surfaces, glossy gel controls, water, vivid nature, luminous saturated color, humanist type, and "the future is bright, friendly and humane." The project's whole visual thesis. See [[Frutiger Aero — Design Language]], [[Frutiger Aero — References]].

## G

**GHCR (GitHub Container Registry)** — Where built Docker images are pushed so the VPS can pull them, decoupling build (in CI) from run (on server). See [[CI-CD Pipeline]].

**Glassmorphism** — The modern web translation of Aero glass: semi-transparent fill + `backdrop-filter: blur() saturate()` + a 1px translucent white top rim + soft outer and subtle inner-highlight shadows. Needs a translucent background or the blur won't show. See [[Glass, Gloss & Depth]].

**God-rays (crepuscular rays / sunbeams)** — Visible shafts of light through clouds/atmosphere; a Frutiger Aero nature/optimism motif used in hero scenes. See [[Imagery & Motifs]].

**Grain / noise** — A faint film-grain overlay (inline SVG `feTurbulence`, low opacity, `mix-blend-mode: overlay`) that adds texture and tames gradient banding. Keep opacity ≤0.08 and `pointer-events: none`. See [[Color & Gradients]], [[Frutiger Aero — References]].

## H

**Honeypot** — A hidden form field invisible to humans but filled by naïve bots; submissions that fill it are dropped. Weak alone against LLM spam, so it's layered with Turnstile + rate-limiting. See [[Contact Backend]].

**Hono** — A fast, TypeScript-first web framework (~4–5× faster than Express) running the self-hosted `/api/contact` service that validates input and sends mail. See [[Contact Backend]], [[ADR-007 — Contact Form Backend]].

**Humanist sans-serif** — A warm, legible sans with calligraphic roots (open apertures, modulated strokes) — the Aero type voice (literal Frutiger/Myriad; here Source Sans 3 / Hind / Open Sans). *Avoid* cold geometric/grotesque faces. See [[Typography]].

## I

**i18n (internationalization)** — Building the site so it serves multiple languages — here **EN + ES**, via path-prefix routes (`/en`, `/es`) and a persisted language switcher. See [[i18n Architecture]], [[ADR-004 — i18n Library]].

**INP (Interaction to Next Paint)** — The Core Web Vital measuring responsiveness to user input (target < 200ms); replaced FID in 2024. See [[Performance Budget]].

## L

**LCP (Largest Contentful Paint)** — The Core Web Vital for perceived load speed (target < 2.5s): time until the largest above-the-fold element renders. See [[Performance Budget]].

**Lens flare** — Stacked translucent light artifacts (radial gradients with `screen`/`mix-blend-mode`) simulating bright light hitting a lens — a Frutiger Aero spectacle accent. See [[Imagery & Motifs]], [[Motion & Animation]].

## M

**MDX** — Markdown that can embed JSX/React components. Blog posts are local `.mdx` files (`@mdx-js/rollup` + `remark-frontmatter`), indexed via `import.meta.glob`, with `slug.en.mdx` / `slug.es.mdx` locale variants. See [[Blog Content Pipeline]], [[ADR-005 — Blog Content Source]].

**Motion (the `motion` package)** — The framer-motion successor: a declarative React animation library (layout/exit animations, `useReducedMotion()`) used for micro-interactions and page transitions. See [[Motion & Animation]], [[ADR-006 — Animation Library]].

**MOC (Map of Content)** — A hub note that links out to a topic's notes instead of holding the content itself. [[Home]] is this vault's top-level MOC.

## P

**Paraglide JS (inlang)** — A compile-time, tree-shaken i18n library where every message key becomes a typed function — small bundles, great DX for a 2-locale static site. See [[i18n Architecture]], [[ADR-004 — i18n Library]].

**`prefers-reduced-motion`** — The OS/browser accessibility signal that the user wants minimal motion. **All** auroras, blobs, and parallax must gate on it (`@media (prefers-reduced-motion: reduce)` / `useReducedMotion()`), collapsing to static or opacity-only. See [[Motion & Animation]], [[Accessibility & SEO]].

## R

**Rate limiting** — Capping requests per IP/time-window (e.g. on `/api/contact`) to blunt spam and abuse. Layered with honeypot + Turnstile. See [[Contact Backend]].

**Resend** — A transactional-email API (clean DX, good deliverability, generous free tier) the contact backend uses to actually send mail, instead of owning raw SMTP/SPF/DKIM. See [[Contact Backend]].

**Reverse proxy** — A server (here **Caddy**) that fronts the app: it terminates TLS, serves the static site, and routes `/api/*` to the Hono container — one public entry point for multiple back-end services. See [[VPS Deployment Plan]].

## S

**Scrim** — A semi-opaque tint/overlay placed behind text on glass or busy imagery to restore WCAG contrast (≥4.5:1). The accessibility companion to glassmorphism. See [[Glass, Gloss & Depth]], [[Accessibility & SEO]].

**SSG (Static Site Generation)** — Pre-rendering routes to real HTML at build time (here `vite-react-ssg`) so crawlers and social cards get crawlable markup and correct OG/meta — solving the SPA-SEO problem. See [[Accessibility & SEO]], [[Blog Content Pipeline]].

**Skeuomorphism** — UI that imitates real-world materials (gloss, bevels, reflections, "gel" surfaces) — central to the Aero/Aqua era and to the gel-button language here. See [[Glass, Gloss & Depth]].

## T

**Tailwind v4 (CSS-first)** — The utility-CSS framework configured *in CSS* via `@import "tailwindcss";` and `@theme { … }` — **no `tailwind.config.js`** — loaded through the `@tailwindcss/vite` plugin. Tokens are registered in CSS. See [[Tech Stack]], [[Design Tokens]], [[ADR-002 — Styling Approach]].

**TLS (Transport Layer Security)** — The encryption behind HTTPS. Caddy auto-issues and renews Let's Encrypt certificates, so TLS is "free" operationally. See [[Domain, DNS & TLS]].

**Turnstile (Cloudflare)** — A free, privacy-friendly CAPTCHA alternative; the client gets a token, the server verifies it via `siteverify`. The real spam gate (honeypots being weak against LLM spam). See [[Contact Backend]].

## V

**View Transitions API** — A native browser API (`document.startViewTransition`) that animates same-document DOM changes — used for smooth route changes, with Motion as the fallback where unsupported. Gate on reduced-motion. See [[Motion & Animation]], [[Routing]].

**Vite (8)** — The build tool / dev server (Rolldown/Rust bundler, fast HMR) underpinning the whole front end. See [[Tech Stack]], [[ADR-001 — Framework & Build Tool]].

## W

**WCAG (Web Content Accessibility Guidelines)** — The accessibility standard whose contrast minimum (4.5:1 for normal text) the glass/scrim work must satisfy. See [[Accessibility & SEO]].

**Wikilink** — Obsidian's `[[Note Title]]` cross-reference, resolved by **basename** regardless of folder. Link only to canonical basenames — see [[How to use this vault]].

## See also

- **[[How to use this vault]]** — conventions these terms support.
- **[[Home]]** — the vault dashboard.
- **[[Frutiger Aero — References]]** — deep detail behind the design terms.
- **[[Tooling Notes]]** — deep detail behind the tech terms.

## Open questions

- [ ] Add definitions for any new tool/term introduced by `ADR-009 — Theming Strategy` once authored.
- [ ] If a glossary section grows large, consider whether the concept deserves its own note instead.
