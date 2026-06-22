# Detectify — Content for Portfolio Website

> ⚠️ NDA — no UI screenshots publicly. Text-only page.
> Screenshots available on request.

---

## Landing Page Card

| | |
|---|---|
| **Label** | Work · Spring 2026 |
| **Title** | Detectify |
| **Tagline** | A design system for a B2B security product where accessibility is the standard. |
| **href** | `/detectify` |

---

## Meta

| | |
|---|---|
| **Project** | Detectify — Design System Overhaul (Table UX Redesign) |
| **Role** | Product Design Intern (sole designer on this workstream) |
| **Platform** | Web app (B2B SaaS) |
| **Timeline** | 6 months total · Table redesign: Mar – Apr 2026 |
| **Team** | 1 Product Design Lead, 2 Front-end Developers |
| **Tools** | Figma, Figma MCP, Design Tokens |
| **NDA** | Specific UI not shown publicly — available on request |

---

## Hero

**Title:** Detectify

**Hook:**
Detectify's product surfaces complex security data — almost entirely through tables. When tables are the product, table UX isn't a component problem. It's a product problem.

---

## Section 1 — Overview

**Role:** Product Design Intern (sole designer on this workstream)
**Timeline:** 6 months (Design System overhaul) · Table redesign: Mar – Apr 2026
**Platform:** Web app (B2B SaaS)
**Users:** Security teams and external customers managing vulnerability data
**Tools:** Figma, Figma MCP, Design Tokens

Over 6 months at Detectify, I worked across a broader design system overhaul — foundations, component consolidation, visual language alignment. The table redesign was one focused workstream within that: the most-used, most complex, and most broken component in the product.

---

## Section 2 — The Problem

Security professionals need to scan, prioritise, and act on large volumes of vulnerability data — fast. The existing table was creating friction at every step.

**No visual hierarchy.** High information density with nothing to guide the eye — users had to read every row to find what they needed to act on.

**Inconsistent interactions.** Filter and sort behaviour varied across table instances throughout the product. Users were learning the UI instead of using it.

**Accessibility failures.** The component didn't meet WCAG standards — a meaningful gap for a security product used by enterprise teams with compliance requirements.

---

## Section 3 — Constraints

- No user research access — decisions grounded in heuristic analysis, WCAG audit results, and engineering feedback
- The component appears across every page in the product. Any change has a high blast radius.
- Had to ship incrementally — the redesign couldn't break existing implementations mid-rollout
- **NDA: specific UI not shown publicly — available on request**

---

## Section 4 — Process

**Audit → Define → Design**

**Audit:**
I mapped every table instance across the product to document inconsistencies. Then ran a WCAG audit — contrast ratios, focus states, keyboard navigation. Used scan pattern analysis to identify where visual hierarchy broke down under high information density.

**Define:**
Three design principles for the new component: scanability first, progressive disclosure for density, accessibility as a baseline not an afterthought. I documented engineering constraints early to make sure the solutions could actually ship.

**Design:**
Built a component covering all states — default, hover, selected, loading, empty, error. Established token-based spacing and type scale for consistency across implementations. Used Figma MCP to generate component specs directly, which cut handoff back-and-forth significantly.

---

## Section 5 — Key Decisions

### Decision 1 — Scanability over flexibility

**Situation:** Security data is dense by nature. Users need many data points per row — but too many columns in view breaks scan patterns.

**Options:**
- Show all columns by default
- Full column customisation
- Opinionated default with a column toggle for power users

**What I chose:** Opinionated default — the most critical columns visible, everything else togglable.

**Trade-off:** Some power users wanted everything visible. I chose scanability for the majority over flexibility for the edge case.

---

### Decision 2 — Fix the tokens, not just the component

**Situation:** Full WCAG AA compliance required changing colour tokens used across the entire product — not only the table.

**Options:**
- Patch only the table component
- Propose a token-level fix that updates the whole design system

**What I chose:** Token-level fix — flagged the systemic issue and worked with engineering to update at the source.

**Trade-off:** Slower to implement. But patching only the table would have created two conflicting colour standards in the codebase. A patch isn't a fix.

---

### Decision 3

> ⚠️ If there's a real decision from engineering discussions — a direction you considered and abandoned — fill it in here.
> If not, this can cover the filter/sort interaction approach.

**Situation:**
**Options:**
**What I chose:**
**Trade-off:**

---

## Section 6 — Impact

The redesigned table is now the design system standard across all data views in the product. WCAG AA compliance achieved. Engineering handoff time reduced — Figma MCP-generated specs meant no more back-and-forth annotation clarification.

*Specific metrics available on request.*

---

## Section 7 — Reflection

The hardest constraint wasn't technical — it was designing a high-blast-radius component without direct user testing. Every decision had to be grounded in established principles and audit results rather than observed behaviour.

If I did this again, I'd push earlier for even one lightweight session with an internal user before locking the column hierarchy. You can get a long way on principles. You can get further with one person actually using the thing.

---

## CTA

**Text:** Want to see the full component spec or talk through the process? Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com
