## Detectify — Onboarding
**Redesigning first impressions for a product that takes 24 hours to prove itself.**

Users were dropping off before they'd ever seen Detectify work. The onboarding asked for technical effort before establishing any product value — and the platform couldn't tell the difference between someone setting up for the first time and someone who'd done it before.

| | |
|---|---|
| Timeline | April–June 2026 |
| Role | Product Designer |
| Platform | Web · B2B SaaS |
| Tools | Figma, Figma Make |
| Team | Lead Product Designer, 2 Front-end Engineers |

---

### THE BRIEF
**An internship project that turned into a real activation problem.**

Detectify is a B2B cybersecurity platform that helps security teams scan for and act on vulnerabilities. This project focused on onboarding: guiding new users through domain setup and their first scan.

I led research synthesis and UI prototyping, working closely with a PM and two developers. Design decisions were made jointly with the lead product designer.

---

### THE PROBLEM
**Users hit a wall before they understood what they were building toward.**

Three things were breaking at once.

**Effort before value.** New users were immediately asked to manually enter a technical asset — no context for why it mattered. 69% dropped off at this step. Formatting errors alone (typing `https://` instead of `example.com`) caused a 14–51% failure rate on a single input field.

**Broken technical flows.** DNS verification required multi-step prep users weren't ready for. API scanning setup had a 100% failure rate from authentication to first scan, and generated 73% of all platform support tickets.

**The wrong users hitting setup.** The "Get Started" page was showing up for existing users, enterprise admins switching team contexts, and new team members joining already-configured accounts. Users were hitting it an average of 3.1 times. It wasn't an onboarding gate. It was a loop.

---

### KEY INSIGHTS
**The invisible problem: users didn't know how lost they were.**

Four think-aloud sessions with internal stakeholders — security expert, non-technical user, and others. The sessions made cognitive load visible: where people hesitated, where assumptions collapsed.

**Progress invisibility drove abandonment more than technical friction.**
The existing dot-based navigation gave users no sense of how far they were. People weren't quitting because DNS setup was hard — they were quitting because they couldn't see the end. This reframed the whole redesign.

**63% of users skipped the guided tour.**
Not because they didn't need help. Because they wanted to explore first. The existing design treated skipping as failure. The redesign had to treat it as a valid path.

**Setup was reaching users who didn't need it.**
The platform had no logic for distinguishing first-time users from returning ones. Routing the wrong people into setup wasn't just annoying — it was eroding trust for people who were already activated.

---

### SOLUTION
**Show the product before asking for the effort.**

**The Floating Control Card**
A persistent widget that travels with users through the UI. When not in focus, it collapses into a progress ring — so users can exit the tour and re-enter without losing their place. Setup follows you. You don't chase setup.

**Numbers instead of dots**
Dots look clean. They tell you nothing. 4/4 testers couldn't place themselves in the sequence using dots. Numbers replaced them — not as a visual upgrade, but a functional one. 6/6 testers rated numeric progress as clearer in prototype testing.

**Smart routing**
If a team already has assets or active scans, or if a user is an existing team member, the "Get Started" page is bypassed entirely. New users get onboarding. Everyone else gets their dashboard.

**Defensive input design**
Real-time format validation on the domain field, auto-stripping `https://` and trailing slashes, with clear placeholder examples. The 14–51% formatting failure rate was a copy and validation problem, not a user problem.

**Empty state as expectation management**
The final screen after scan creation now clearly communicates the 8–24 hour scan delay. What previously looked like a broken confirmation became a calm, honest handoff.

---

### REFLECTIONS
**What I'd do differently.**

**Test progress navigation earlier.**
The dot vs. number finding only came out in prototype testing. Earlier low-fi testing on navigation patterns would have surfaced this faster.

**Weight non-technical users more heavily from the start.**
Think-aloud sessions skewed toward technical users. The non-technical sessions were the most revealing — I'd prioritise that perspective earlier next time.

**The routing logic deserved more scope, sooner.**
Smart targeting directly addressed the 3.1 average "Get Started" views per user. It was the highest-impact decision and the last to get proper attention.
