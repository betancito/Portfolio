# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## What this is

A **personal developer portfolio** for **Jeronimo Betancur Duque**. It is not a
job-hunting funnel — its purpose is to be a *beautiful, meaningful* artifact that
expresses who Jeronimo is as a developer (his way of being, behaving, and
working), delivered as a **flashy [Frutiger Aero](https://en.wikipedia.org/wiki/Frutiger_Aero)**
experience: glassmorphism, glossy "aqua/gel" controls, luminous sky/water
gradients, nature motifs, and gentle floaty motion.

> [!important]
> **The planning source of truth is the `brain/` Obsidian vault**, not this file.
> Before making product, design, or architecture decisions, read the relevant
> notes there (open `brain/` as an Obsidian vault, or read the Markdown directly).
> This file is the *operational* contract for the codebase; `brain/` is the
> *thinking*. Start at `brain/Home.md`.

## Roadmap at a glance

Bilingual (EN/ES) site with: **Home · About · Projects · Blog · Contact**.
Planned capabilities: a writing/blog section, motion & a light/dark theme toggle,
i18n, and a **real self-hosted contact backend**. Hosting target is **Jeronimo's
own VPS** (Docker + reverse proxy + CI/CD over SSH — no managed-platform lock-in).
See `brain/06 — Roadmap/Roadmap & Phases.md` and `brain/06 — Roadmap/Now · Next · Later.md`.

## Tech stack

| Concern        | Choice                                                              |
| -------------- | ------------------------------------------------------------------ |
| Framework      | React 19 + react-dom 19                                            |
| Language       | TypeScript ~6 (strict)                                              |
| Build/dev      | Vite 8 (`@vitejs/plugin-react`)                                     |
| Styling        | Tailwind CSS **v4** via `@tailwindcss/vite` — **CSS-first config**  |
| Linting        | ESLint 10 (flat config) + `typescript-eslint`                      |
| Commits        | Husky + commitlint (Conventional Commits) + commitizen             |

Planned additions (see the ADRs in `brain/05 — Decisions (ADR)/`): a router
(React Router v7), i18n (react-i18next), an MDX blog pipeline, a motion library
(Motion), and a small self-hosted contact API (Hono). **Do not add these
ad-hoc — read/extend the corresponding ADR first.**

## Commands

```bash
npm install        # install deps
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # tsc -b && vite build  → dist/
npm run preview    # preview the production build locally
npm run lint       # eslint .
npm run commit     # commitizen-guided Conventional Commit (preferred)
```

## Conventions (please honor these)

- **Conventional Commits are enforced** by a Husky `commit-msg` hook + commitlint.
  Use `npm run commit` for a guided prompt, or write messages like
  `feat(home): add glass hero section`. Non-conforming messages are rejected.
- **Tailwind v4 is CSS-first** — there is **no `tailwind.config.js`**. Configure the
  design system in `src/index.css` via `@import "tailwindcss";` and the
  `@theme { ... }` block (CSS variables / design tokens). When adding colors,
  fonts, radii, shadows, etc., add them as tokens in `@theme`, mirroring
  `brain/02 — Design/Design Tokens.md`.
- **TypeScript is strict.** Keep it typed; prefer explicit types at module
  boundaries.
- **Lint before committing.** `npm run lint` should be clean.
- **Accessibility & performance are non-negotiable despite the heavy visuals.**
  Respect `prefers-reduced-motion`, keep contrast over glass surfaces, and watch
  the performance budget (`backdrop-filter`, large gradients, and web fonts are
  the usual suspects). See `brain/04 — Architecture & Tech/Performance Budget.md`
  and `.../Accessibility & SEO.md`.

## Project structure

```
.
├── index.html               # Vite entry; sets <title>, lang, description, favicon
├── src/
│   ├── main.tsx             # React root
│   ├── App.tsx              # ⚠️ current single-file placeholder mockup — to be refactored
│   └── index.css            # Tailwind v4 entry + @theme tokens
├── public/                  # static assets (favicon.svg, …)
├── brain/                   # 🧠 Obsidian vault — the project's planning brain (see below)
├── eslint.config.js         # flat ESLint config
├── commitlint.config.js     # Conventional Commits rules
└── vite.config.ts           # Vite + React + Tailwind plugins
```

`src/App.tsx` is a generic starter mockup and is **expected to be broken apart**
into routes/pages, an Aero component library, content, and i18n as the project
grows. The intended target structure lives in
`brain/04 — Architecture & Tech/Project Structure.md`.

## The `brain/` vault (project planning)

`brain/` is a self-contained Obsidian vault — the "second brain" where vision,
design system, information architecture, technical decisions, roadmap, and
deployment plans live as cross-linked Markdown. Folder map:

| Folder                          | Holds                                                |
| ------------------------------- | ---------------------------------------------------- |
| `00 — Meta`                     | How to use the vault, glossary                       |
| `01 — Vision`                   | Purpose, developer identity, principles, success     |
| `02 — Design`                   | The Frutiger Aero design system & tokens             |
| `03 — Information Architecture` | Sitemap, navigation, per-page specs                  |
| `04 — Architecture & Tech`      | Stack, structure, routing, i18n, blog, contact, perf |
| `05 — Decisions (ADR)`          | Architecture Decision Records (with decision trees)  |
| `06 — Roadmap`                  | Phases, Now/Next/Later, backlog, definition of done  |
| `07 — Deployment`               | VPS plan, CI/CD, DNS/TLS, observability              |
| `99 — Research`                 | Frutiger Aero references, inspiration, tooling notes  |

Conventions inside the vault: YAML frontmatter (`status`, `tags`, dates),
`[[wikilinks]]`, Obsidian callouts, and **Mermaid decision trees** in every ADR.
See `brain/00 — Meta/How to use this vault.md`.

> [!tip]
> **Workflow:** decide in `brain/` → record the decision (extend an ADR) → build
> in `src/`. When code and the vault disagree, update whichever is wrong so they
> stay in sync.

## Design north star (quick reference)

Frutiger Aero, applied with discipline: **glass + gloss + luminous gradients +
water/nature motifs + gentle spring motion**, in a dual "day/sky" light theme and
"ocean/aurora" dark theme. Humanist sans typography. Full spec:
`brain/02 — Design/Frutiger Aero — Design Language.md`.
