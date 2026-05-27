## Detectify — Onboarding
**Redesigning first impressions for a product that takes 24 hours to prove itself.**

Users were dropping off before they'd ever seen Detectify work. The onboarding demanded technical effort before establishing any product value, and the platform couldn't tell the difference between a new user who needed setup help and an existing user who didn't.

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

Detectify is a B2B cybersecurity platform that helps security teams scan for and act on vulnerabilities. This project focused on the onboarding experience: guiding new users through domain setup and their first scan.

I led research synthesis and UI prototyping, working closely with a PM and two developers. Design decisions were made jointly with the lead product designer.

---

### THE PROBLEM
**Users hit a wall before they understood what they were building toward.**

Three things were breaking at once.

**Effort before value.** New users were immediately asked to manually enter a technical asset, a high-friction task with no context for why it mattered. 69% dropped off at this step alone. Formatting errors (typing `https://` instead of `example.com`) caused a 14–51% failure rate on that single input field.

**Broken technical flows.** DNS verification required multi-step preparation users weren't ready for. The API scanning setup had a 100% failure rate from authentication to first scan, and generated 73% of all platform support tickets.

**The wrong users hitting setup.** The "Get Started" page was showing up for existing users, enterprise admins switching team contexts, and new team members joining already-configured accounts. Users landed on it an average of 3.1 times. It wasn't an onboarding gate. It was a loop.

---

### KEY INSIGHTS
**The invisible problem: users didn't know how lost they were.**

Research involved four moderated think-aloud sessions with internal stakeholders representing different user types: a security expert, a non-technical user, and others. Sessions made cognitive load visible, where hesitation appeared and where assumptions collapsed.

**Progress invisibility drove abandonment more than technical friction.**
The existing dot-based navigation gave users no sense of how far they were in the process. Users didn't abandon because the DNS step was hard. They abandoned because they couldn't tell if the end was near. This reframed the entire redesign priority.

**63% of users chose to skip the guided tour.**
Not because they didn't need help, because they wanted to explore first. The existing design treated skipping as failure. The redesign had to treat it as a valid path.

**Setup was being served to users who didn't need it.**
The platform had no logic for distinguishing first-time users from returning ones. Routing the wrong users into setup wasn't just annoying. It was eroding trust in the product for people who were already activated.

---

### SOLUTION
**A value-first onboarding system built around one principle: show the product before asking for the effort.**

**The Floating Control Card**
A persistent widget that travels with the user through the UI. When not in focus, it collapses into a progress ring, giving users a way to exit the tour and re-enter it without losing their place. Setup follows you. You don't chase setup.

**Numeric progress over dot navigation**
Dots look clean. They tell you nothing. 4/4 testers couldn't identify where they were in the sequence using dots. Numbers replaced them, not as a visual upgrade, but as a functional one. 6/6 testers rated numeric progress as clearer in prototype testing.

**Smart routing**
If a team already has assets or active scans, or if a user is an existing team member, the "Get Started" page is bypassed entirely. New users get onboarding. Everyone else gets their dashboard.

**Defensive input design**
Real-time format validation on the domain entry field, auto-stripping `https://` and trailing slashes, with clear placeholder examples. The 14–51% formatting failure rate was a copy and validation problem, not a user problem.

**Empty state as expectation management**
The final screen after scan creation now explicitly communicates the 8 to 24-hour scan delay. What previously looked like a broken confirmation became a clear, calm handoff.

---

### REFLECTIONS
**What I'd do differently.**

**Start usability testing on progress navigation earlier.**
The dot vs. number finding only emerged in prototype testing. Earlier low-fi testing on navigation patterns would have surfaced this faster and saved iteration cycles at hi-fi stage.

**Involve non-technical stakeholders in the problem framing.**
Think-aloud sessions with internal stakeholders were valuable, but they skewed toward technical users. The non-technical user sessions were the most revealing. I'd weight that perspective more heavily from the start.

**The routing logic was the highest-impact decision, but the last to get attention.**
Smart targeting would directly address the 3.1 average "Get Started" views per user. It deserved to be scoped earlier, not discovered mid-process.
