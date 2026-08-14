# Value Stream Mapping

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

A value stream maps end-to-end work flow from customer request to delivered value, making process time, lead time, handoffs, waits, and rework visible as data. When a customer's symptoms—slow releases, high incident MTTR, missed SLAs, runaway cost—are caused by flow problems across teams, VSM is the diagnostic that reveals where time is spent versus where it is waited.

## What You'll Gain

- See where time is actually spent versus where it is waited in handoffs and queues
- Calculate the value-add ratio (active work / total time), usually a shocking single-digit percentage
- Identify silent rework chains through percent-complete-and-accurate metrics
- Design future-state flows that merge steps, automate gates, and reduce WIP
- Sequence improvement work in waves that compound over quarters

## The Concept, Explained

A value stream captures three layers: process flow (the sequence of steps), information flow (how each step learns what to do via tickets, approvals, chats), and timeline metrics. The map shows process time (PT, active work) versus lead time (LT, wall-clock including waits). The ratio PT/LT is the value-add ratio—the fraction of end-to-end time spent on actual value-adding work.

Key metrics include Lead Time (wall-clock from request to delivery), Process Time (sum of active-work durations), Value-add Ratio (PT/LT, often horrifyingly low), % Complete & Accurate (%C/A, fraction passing each handoff without rework), and Rolled %C/A (the product across all handoffs, which surfaces silent rework). High WIP (work in progress) at any stage lengthens lead time per Little's Law.

The workflow: define the value stream precisely, walk the actual process with the people doing the work (not the documentation), capture data at every step, draw the current state on a single page, identify waste using the 8 Wastes framework, calculate the value-add ratio, design the future state by reshaping the flow rather than optimizing individual steps, quantify the gap, and plan improvement in 2–4 PDCA waves.

## In the Field — CSA · Cloud Solution Architect

A CSA is assessing a customer's cloud-native release pipeline for AKS. The VSM reveals that code undergoes 18% rework in the integration-test stage due to environment-configuration flakiness. Rolled %C/A across four handoffs is 18% × 73% × 91% × 85% = 10%—meaning 90% of releases experience at least one bounce-back. The CSA identifies that the %C/A gap is in test-environment stability and Azure resource quotas causing CrashLoopBackOff in canaries. The remediation targets IaC consistency and quota reservations, not tool upgrades.

## Recap — Key Concepts & Takeaways

- VSM exposes where time is waited, not just where it is spent
- Value-add ratio (PT/LT) is the headline number leadership remembers
- % Complete & Accurate reveals silent rework chains at handoffs
- Use VSM for multi-team flows; use Pareto + Ishikawa for single-system issues
- VSM is a working artifact; re-map after each PDCA cycle to validate progress

## Knowledge Check

### 1. A customer is 8 months into a “DevOps transformation” with no measurable improvement in deployment frequency. End-to-end deploy time is 6 hours. What is VSM's likely contribution?

- **A.** Recommend a new deployment tool to replace the current one.
- **B.** Make visible that most of the 6 hours is spent Waiting on approvals and queued scans — not in active work.
- **C.** Suggest hiring more engineers to parallelize the work.
- **D.** Refactor the application architecture into microservices.

**Correct answer:** B. Make visible that most of the 6 hours is spent Waiting on approvals and queued scans — not in active work.

VSM exposes **where time is waited vs. spent**. Customers often optimize the active work (e.g., the 1 hour of build) while ignoring the 5 hours of waiting that dominate end-to-end lead time.

### 2. What is the value-add ratio?

- **A.** The dollars saved per CSA hour.
- **B.** Process Time / Lead Time — the fraction of end-to-end time spent on active value-adding work.
- **C.** The number of approvers divided by the number of steps.
- **D.** Cycle time multiplied by WIP.

**Correct answer:** B. Process Time / Lead Time — the fraction of end-to-end time spent on active value-adding work.

**Value-add ratio = PT / LT**. On un-improved streams it's often a horrifying single-digit percentage. It's the headline number leadership remembers from a VSM.

### 3. What is %C/A (Percent Complete and Accurate) and why does it matter?

- **A.** The percentage of process automation; high values mean less waste.
- **B.** The fraction of work passing each handoff without rework; multiplied across all handoffs (Rolled %C/A) it surfaces silent rework chains.
- **C.** Compliance audit pass rate; required for regulated industries only.
- **D.** The percentage of engineers attending the workshop.

**Correct answer:** B. The fraction of work passing each handoff without rework; multiplied across all handoffs (Rolled %C/A) it surfaces silent rework chains.

%C/A measures **rework leakage at each handoff**. Rolled %C/A (the product across all handoffs) typically reveals huge hidden rework no single team owns — a classic VSM insight.

### 4. When is VSM the WRONG tool to reach for?

- **A.** DevOps assessments with end-to-end symptoms.
- **B.** A “Cosmos is slow” engagement where the problem is a hot partition key inside a single system — use Pareto + Ishikawa instead.
- **C.** Tenant onboarding flow optimization across multiple teams.
- **D.** Modernization business cases that need a credible “why."

**Correct answer:** B. A “Cosmos is slow” engagement where the problem is a hot partition key inside a single system — use Pareto + Ishikawa instead.

VSM is for **multi-team / multi-system flows**. For single-system issues, reach for Pareto + Ishikawa. Reflexively pulling out VSM for the wrong problem wastes the tool's credibility.

### 5. What is the key anti-pattern to avoid when running a VSM workshop?

- **A.** Drawing the current state before the future state.
- **B.** Producing a wall-sized poster you never look at again — the VSM must be a working artifact during the engagement.
- **C.** Including process owners in the walk.
- **D.** Calculating the value-add ratio.

**Correct answer:** B. Producing a wall-sized poster you never look at again — the VSM must be a working artifact during the engagement.

A VSM is a **working artifact**, not a one-time poster. If it isn't open during the next 6 weeks of engagement to guide PDCA cycles and decisions, the workshop didn't land.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
