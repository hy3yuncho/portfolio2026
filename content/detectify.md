# Detectify: Content for Portfolio Website

> Source: 대화 기반 케이스 스터디 정리본
> ⚠️ NDA 적용. 실제 UI 스크린샷 공개 불가. 페이지는 텍스트 중심으로 구성.
> 스크린샷 필요 시 "available on request" 처리.
> Claude Code: 이미지 플레이스홀더 없이 텍스트만으로 페이지를 구성할 것.

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
| **Project** | Detectify: Design System Overhaul (Table UX Redesign) |
| **Role** | Product Design Intern (sole designer on this workstream) |
| **Platform** | Web app (B2B SaaS) |
| **Timeline** | 6 months total · Table redesign: Mar – Apr 2026 |
| **Team** | 1 Product Design Lead, 2 Front-end Developers |
| **Tools** | Figma, Figma MCP, Design Tokens |
| **NDA** | Specific UI not shown publicly, available on request |

---

## Hero

**Title:** Detectify

**Hook:**
Detectify's web app surfaces complex security data, almost entirely through tables. When tables are the product, table UX isn't a component problem. It's a product problem.

---

## Section 1: Overview

**Role:** Product Design Intern (sole designer on this workstream)
**Timeline:** 6 months (Design System overhaul) · Table redesign: Mar – Apr 2026
**Platform:** Web app (B2B SaaS)
**Users:** Security teams and external customers managing vulnerability data
**Tools:** Figma, Figma MCP, Design Tokens

**Context:**
Over 6 months at Detectify, I worked on a broader design system overhaul, establishing foundations, consolidating components, and aligning the product's visual language. The table redesign was one focused workstream within that larger project: the most used, most complex, and most broken component in the product.

---

## Section 2: The Problem

Security professionals using Detectify need to scan, prioritise, and act on large volumes of vulnerability data quickly. The existing table design created three compounding friction points:

**High information density with no visual hierarchy** made scanning slow. Users couldn't identify what to act on without reading every row.

**Inconsistent filter and sort interactions** required users to learn the UI rather than use it. Behaviour varied across table instances throughout the product.

**The component failed WCAG accessibility standards,** creating a critical gap for a security product used by enterprise teams with compliance requirements.

---

## Section 3: Constraints

- No user research access. Decisions had to be grounded in heuristic analysis, WCAG audit results, and engineering feedback.
- Component needed to work across every page in the product (high blast radius)
- Had to ship incrementally. Full redesign couldn't break existing implementations.
- **NDA: specific UI not shown publicly, available on request**

---

## Section 4: Process

**Audit → Define → Design**

**Audit:**
Mapped every table instance across the product to identify inconsistencies. Ran a WCAG audit to document contrast failures, missing focus states, and keyboard navigation gaps. Used heuristic analysis (Fitts's Law, Miller's Law for information chunking) to identify where scan patterns broke down.

**Define:**
Established design principles for the new component: scanability first, progressive disclosure for density, accessibility as a baseline not an afterthought. Documented constraints with engineering early to prevent solutions that couldn't ship.

**Design:**
Built a component system covering default, hover, selected, loading, empty, and error states. Established token-based spacing and typography scale to ensure consistency across implementations. Used Figma MCP to generate component code specs directly, reducing handoff ambiguity and back-and-forth annotation.

---

## Section 5: Key Decisions

### Decision 1: Information density vs. scanability

**Situation:** Security data is inherently dense. Users need many data points per row, but too much density breaks scan patterns.

**Options considered:**
- (A) Show all columns by default
- (B) Progressive disclosure with full column customisation
- (C) Opinionated default view with fewer columns

**What was chosen:** Opinionated default showing the most critical columns, with a column toggle available for power users.

**Trade-off:** Some power users preferred seeing everything. Chose scanability for the majority use case over flexibility for edge cases.

---

### Decision 2: WCAG compliance scope

**Situation:** Full WCAG AA compliance required changes to colour tokens used across the entire product, not just the table component.

**Options considered:**
- (A) Fix only the table component
- (B) Propose a token-level fix that affects the whole design system

**What was chosen:** Flagged the systemic issue and worked with engineering to update tokens at the source.

**Trade-off:** Slower to implement. But patching only the table would have created two conflicting standards in the codebase.

---

### Decision 3

> ⚠️ 실제로 엔지니어링과 논의하면서 포기하거나 방향을 바꾼 결정이 있다면 여기에 채워주세요.
> 없다면 filter/sort UX 관련 결정으로 대체 가능합니다.

**Situation:**
**Options considered:**
**What was chosen:**
**Trade-off:**

---

## Section 6: Impact

The redesigned table component is now the design system standard across all data views in the product. WCAG AA compliance achieved for the component. Engineering handoff time reduced through Figma MCP-generated specs. Component implementation no longer required back-and-forth annotation clarification.

*Specific metrics available on request.*

---

## Section 7: Reflection

The hardest constraint wasn't technical. It was designing a component with a high blast radius without the safety net of user testing. Every decision had to be grounded in established heuristics and WCAG standards rather than observed behaviour. If I were to do this again, I'd push earlier for even a lightweight usability session with one or two internal users before finalising the column hierarchy.

---

## CTA

**Text:** Want to see the full component spec or talk through the process? Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com
