# Ishikawa Diagram

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

An Ishikawa (fishbone or cause-and-effect) diagram is a structured brainstorming tool that maps potential causes of a single problem into named categories—typically the 6Ms: Man, Machine, Method, Material, Measurement, Mother Nature. It forces breadth before depth and surfaces causes outside any single domain, preventing premature fixation on the first hypothesis.

## What You'll Gain

- Explore causes systematically across people, service, process, config, observability, and demand
- Prevent engineering teams from fixating on 'code is the cause' and missing process or skills gaps
- Surface causes across multiple domains that single-discipline analysis misses
- Generate hypothesis lists that prioritize with Pareto and drill with 5 Whys
- Document the full search space for future similar incidents

## The Concept, Explained

An Ishikawa is a visual structure: a horizontal spine pointing to the problem statement on the right, bones branching off—one per category of potential cause, sub-bones for specific causes, sub-sub-bones for contributing factors. The 6Ms are the canonical category set: Man (people, skills, on-call rotation), Machine (Azure service, SDK, runtime), Method (process, queries, deployment flow), Material (configuration, data, IaC, dependencies), Measurement (observability, alerting, SLOs), Mother Nature (demand, time-of-day, external events).

Key property: Ishikawa is divergent (generates candidate causes) but not convergent (does not pick the cause). After filling the diagram, teams must use evidence—logs, traces, metrics, telemetry—to confirm which branches matter. Ishikawa output is a hypothesis list.

Workflow: state the problem precisely (avoid 'slow'; use 'Checkout API P95 latency exceeds 800ms during 09:00–11:00 UTC weekdays'), choose the category set (6Ms is default), assemble cross-functional participants, brainstorm 4–8 causes per category, drill 1–2 levels deep, cluster and prioritize the 3–5 most consistent with the symptom, define a test for each hypothesis, run the tests, confirm causes, and convert to actions.

## In the Field — CSA · Cloud Solution Architect

A CSA is leading a WAF reliability review for a customer with recurring App Service deployment failures. The Ishikawa branches reveal: Man (on-call team not briefed on new rollout pattern), Machine (App Service plan SKU at capacity during peak), Method (deploys overlap with peak traffic windows), Material (slot warm-up configuration missing), Measurement (no alert on slot warm-up failures), Mother Nature (marketing email shipped before the outage, spiking traffic). The CSA's Ishikawa prevents the team from reflexively raising the SKU and instead drives four small changes across four Ms.

## Recap — Key Concepts & Takeaways

- Ishikawa forces systematic exploration across 6 categories before drilling deep
- Output is a hypothesis list; evidence confirms which branches matter
- Always assemble cross-functional teams to avoid single-discipline fixation
- Each candidate requires a test; untestable candidates are unfalsifiable noise
- Pair Ishikawa with Pareto (which to prioritize) and 5 Whys (why it happened)

## Knowledge Check

### 1. Your team is investigating slow Azure SQL queries. Engineering suspects indexes, the DBA suspects schema, the platform lead suspects sizing. What is the primary value of an Ishikawa diagram here?

- **A.** It makes the final decision about which factor is the true root cause.
- **B.** It forces the team to explore causes across all categories before fixating on one.
- **C.** It measures which hypothesis generates the fastest query improvement.
- **D.** It eliminates all low-probability causes immediately.

**Correct answer:** B. It forces the team to explore causes across all categories before fixating on one.

An Ishikawa is a **divergent** tool that broadens the search space before narrowing it. It prevents fixating on the first hypothesis by forcing systematic exploration across categories. It generates hypotheses; data confirms them later.

### 2. When is an Ishikawa most valuable during a postmortem?

- **A.** Only when the incident cause is already known and you need to document it.
- **B.** When a symptom has multiple plausible causes across different domains and the team risks premature commitment.
- **C.** As a replacement for writing down the incident timeline and impact.
- **D.** Only if the team has more than 10 engineers available to attend.

**Correct answer:** B. When a symptom has multiple plausible causes across different domains and the team risks premature commitment.

Ishikawa shines when **multiple domains** are involved. It ensures the team walks every category — Man, Machine, Method, Material, Measurement, Mother Nature — rather than defaulting to the loudest voice's pet theory.

### 3. A customer says the Ishikawa diagram is the deliverable for their recent Cosmos DB 429 fix. What should you clarify?

- **A.** The diagram is the final output and no further action is needed.
- **B.** Ishikawa generated hypotheses; the actual deliverables are the tested root cause, the implemented fix, and the measured before/after.
- **C.** They should repeat the Ishikawa weekly to ensure the cause stays fixed.
- **D.** The diagram should have included budget approval from leadership.

**Correct answer:** B. Ishikawa generated hypotheses; the actual deliverables are the tested root cause, the implemented fix, and the measured before/after.

An Ishikawa is a **hypothesis-generation** tool, not a decision tool. The real deliverables are the tested hypotheses, the implemented changes, and the before/after measurements that validate the fix.

### 4. A teammate insists the only category to explore is “Method” for a deployment-failure investigation. What should you do first?

- **A.** Agree and start drilling into Method with 5 Whys.
- **B.** Walk the team through every remaining category before drilling deep into any single branch.
- **C.** Ask engineering to test the Method hypothesis immediately.
- **D.** Reshape the problem statement because it's too vague.

**Correct answer:** B. Walk the team through every remaining category before drilling deep into any single branch.

Ishikawa is a **de-fixation** tool. The team should walk Man, Machine, Method, Material, Measurement, and Mother Nature before drilling depth. Breadth-first exposes causes that single disciplines miss.

### 5. Which statement best captures what NOT to do with an Ishikawa?

- **A.** Don't use it with cross-functional teams because they disagree too much.
- **B.** Don't treat it as a decision tool — use Pareto to choose among findings to fund.
- **C.** Don't include more than three categories because the diagram becomes too complex.
- **D.** Don't reference it in postmortems because it takes too much time to explain.

**Correct answer:** B. Don't treat it as a decision tool — use Pareto to choose among findings to fund.

Ishikawa generates **candidates**, not decisions. To choose which finding to fund, use Pareto-by-weighted-impact. Ishikawa answers 'what are the possible causes?'; Pareto answers 'which one to fix first?'

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
