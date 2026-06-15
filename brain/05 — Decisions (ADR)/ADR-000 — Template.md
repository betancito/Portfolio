---
title: ADR-000 — Template
tags: [decision, adr, template]
status: accepted
created: 2026-06-15
updated: 2026-06-15
related: ["[[ADR Index]]", "[[Principles & Constraints]]", "[[Success Criteria]]"]
---

# ADR-000 — Template

> [!note]
> This is the **reusable shape** every real ADR copies. It is not a decision. Copy the body below, renumber, fill it in, and link it from [[ADR Index]]. Keep the section order — it forces context *before* conclusion, which is the whole point of an ADR.

Conventions for this vault's ADRs:

- One decision per note. Append-only: supersede, don't rewrite.
- Frontmatter `status` mirrors the H2 **Status** line and the [[ADR Index]] register.
- At least one **Mermaid** diagram (the decision tree) is mandatory.
- An **options table** is mandatory whenever more than one real candidate existed.
- Wikilink only to canonical basenames; tag inline with `#decision` and the relevant area tag.

---

## TEMPLATE BODY — copy everything below this line

```markdown
---
title: ADR-NNN — <Short Decision Title>
tags: [decision, adr, <area>]
status: <proposed | accepted | rejected | superseded>
created: YYYY-MM-DD
updated: YYYY-MM-DD
related: ["[[ADR Index]]", "[[<Architecture note>]]"]
---

# ADR-NNN — <Short Decision Title>

## Status

`<proposed | accepted | rejected | superseded>` — <one sentence: e.g. "ACCEPTED, already in the repo" or "PROPOSED, leaning X, not yet built" or "SUPERSEDED by [[ADR-MMM]]">.

## Context

What forces a decision *now*? The problem, the constraints, the relevant facts about
the current repo and the [[Tech Stack]]. State the two north stars this touches
(identity expression + Frutiger Aero delight) and any [[Performance Budget]] /
[[Accessibility & SEO]] limits in play. Be concrete; cite real versions.

## Decision drivers

- <driver 1 — what we are optimizing for>
- <driver 2 — a hard constraint we cannot violate>
- <driver 3 — a tradeoff we are willing to accept>
- <... keep these few and ranked; the top driver usually decides it>

## Options considered

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **A — <chosen>** | … | … | ✅ chosen |
| B — <alt> | … | … | ❌ rejected — <reason> |
| C — <alt> | … | … | ❌ rejected — <reason> |

## Decision tree

> [!example]
> The path we actually walked to the conclusion. Edges are the questions; leaves are outcomes.

​```mermaid
flowchart TD
  Q1{"<first gating question>"} -->|yes| Q2{"<second question>"}
  Q1 -->|no| ALT["<alternative outcome>"]
  Q2 -->|yes| PICK["<chosen option>"]
  Q2 -->|no| OTHER["<other outcome>"]
  classDef pick fill:#d6f5e3,stroke:#1f8a4c,color:#06331c;
  class PICK pick;
​```

## Decision

> [!decision]
> We will **<the decision, stated as a commitment>**. <One or two sentences of the
> decisive rationale — why this beat the alternatives given the top driver.>

## Consequences

**Positive**
- <what gets easier / what we gain>

**Negative / costs we accept**
- <what gets harder, the debt we take on, the thing we now must mitigate elsewhere>

**Mitigations**
- <how we contain the negatives; link the note that owns the mitigation>

**Revisit when**
- <the trigger that would make us write a superseding ADR>

## Links

- [[ADR Index]]
- [[<Architecture note this decision implements>]]
- <external reference URLs, if any>
```

---

## Notes on filling it in

> [!tip]
> - Keep **Context** longer than **Decision** — if the context is right, the decision writes itself.
> - The **options table** must include the chosen option as a row, not just the rejects, so the comparison is fair.
> - Every Mermaid tree should end at a clearly-highlighted *chosen* leaf so the diagram is skimmable in 3 seconds.
> - "Revisit when" is the single most valuable line for future-me — never leave it blank.

## Links

- [[ADR Index]]
- [[Principles & Constraints]] · [[Success Criteria]]
