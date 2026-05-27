# Detectify: Content for Portfolio Website

> ⚠️ NDA 적용. 실제 UI 스크린샷 공개 불가. 페이지는 텍스트 중심으로 구성.
> Claude: 이미지 플레이스홀더 없이 텍스트만으로 페이지를 구성할 것.

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
| **Timeline** | Spring 2024 (6 months) |
| **Role** | Product Design Intern |
| **Platform** | B2B web app |
| **Tools** | Figma, Figma Make |

---

## Tagline

When tables are the product, bad table UX is a product problem.

Detectify's web app surfaces security vulnerability data almost entirely through tables. During my 6-month internship, I worked across a broader design system project, and the table was the most-used, most-broken part of it.

---

## THE BRIEF

**One design system. Six months. Start from the ground up.**

As a product design intern at Detectify, I worked on a comprehensive design system: establishing visual foundations, consolidating components, and closing the gap between design and engineering handoff. The table redesign was one focused workstream within that, but it wasn't a component task. It was a product problem hiding inside a component.

---

## THE PROBLEM

**Security professionals were losing time inside a tool built to save it.**

Detectify's users — security engineers and analysts — need to scan through hundreds of vulnerabilities, decide what's critical, and act fast. The table was supposed to make that possible. It wasn't.

To understand where things were breaking down, I ran 5 interviews with people across product, sales, and customer success: the teams closest to how real users worked with the data.

Three friction points kept coming up.

**No visual hierarchy**
Every row looked the same. Users couldn't tell at a glance what needed their attention and had to read every single row to find out. Scanning was slow. Mistakes happened.

**Inconsistent interactions across the product**
Filters and sorting worked differently depending on which table you were in. Users had to relearn the same UI in different parts of the product. No pattern ever stuck.

**Accessibility failures in a product that sells to compliance teams**
Two specific issues came up in every session: column headers disappeared when you scrolled down, so users lost track of what each column meant. And the horizontal scrollbar sat at the very bottom of the table — not the screen — so to scroll sideways, users first had to scroll through hundreds of rows just to reach it. Both were WCAG failures. In a product Detectify sells to security and compliance teams, that's not just a UX problem. It's a credibility problem.

---

## KEY INSIGHTS

**Three things that had to change.**

After mapping every table instance across the product and running a full WCAG audit, three principles defined the scope of the redesign.

**Scannability first**
The most important thing a security professional can do is find what matters quickly. Every density decision had to serve that, not the other way around.

**Customisation as a feature, not a setting**
Users wanted to see their data their way. Not a layout option buried in preferences — but drag-and-drop column reordering, right there in the table.

**Accessibility as a baseline, not a pass/fail audit**
WCAG AA compliance wasn't a checkbox. It meant touching colour tokens used across the entire product, not just the table component. That had to be scoped and agreed with engineering from the start.

---

## PROCESS

**Audit · Define · Design · Iterate**

**Audit**
Mapped every table instance across the product. Ran a WCAG audit to log contrast failures, missing focus states, and keyboard navigation gaps. This gave the redesign a concrete list of failures to address — not just a general brief to make it better.

**Define**
Set design principles before touching Figma: scannability first, progressive disclosure for dense data, accessibility as a non-negotiable baseline. Aligned early with engineering on what could and couldn't ship, so the redesign was constrained by reality, not just ambition.

**Design**
Built a component system covering every state: default, hover, selected, loading, empty, error. Included interaction design for drag-and-drop column reordering. Used Figma Make to build an interactive prototype showing live state changes, not just static screens.

**Iteration**
Ran a design critique with engineers, product, and sales. Presented the interview insights, redesign scope, and first prototype together — so the decisions were legible, not just the visuals.

---

## SOLUTION

**Three problems. Three decisions.**

**Information density vs. scannability**
Security data is dense by nature. The answer wasn't to simplify the data but to contain it properly. Sticky header so column labels never disappear. Internal scroll with a viewport-fixed horizontal scrollbar, so users don't have to scroll through 500 rows to reach it. Drag-and-drop columns so users put what they care about first.

**WCAG compliance without breaking the design system**
Full WCAG AA compliance required updating colour tokens used across the entire product, not just the table. Worked with the frontend team to update tokens at the source. New colours were designed to be accessible and coherent with the existing visual language.

**Reducing handoff friction**
The interactive Figma Make prototype reflected different states and the drag-and-drop interaction in real time. Engineers could see exactly how the component behaved before a single line was written. Annotation back-and-forth dropped significantly.

---

## IMPACT

**A new standard. Across the whole product.**

The redesigned table became the design system standard for all data views in the product. WCAG AA compliance was achieved at the component level. Engineering handoff time reduced as interactive prototypes replaced static annotated screens as the handoff artefact.

---

## REFLECTIONS

**What I'd do differently.**


**Scope the token work earlier**
The WCAG audit surfaced colour token changes late in the process. Flagging that dependency in week one would have saved significant back-and-forth with engineering.

**Interactive prototypes changed how I think about handoff**
Building the prototype in Figma Make wasn't just a handoff artefact. It forced me to design every state properly before handoff, not as an afterthought. I'd bring that into every project from the start now.

---

## CTA

**Text:** Want to see the full component spec or walk through the process?

**Link label:** Get in touch →

**Link:** mailto:hy3yun.cho@gmail.com
