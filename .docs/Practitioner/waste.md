# 8 Types of Waste

> **Persona:** CI Practitioner · continuous improvement in practice  
> **Module group:** Value & Quality Definition · **Delivery:** 30 min

## Executive Summary

The 8 Wastes (DOWNTIME—Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing) are Lean's 360° checklist for spotting non-value-add activity in any system. For CI practitioners, the 8 Wastes translate cleanly to modern systems: over-provisioned capacity, idle resources, stale environments, redundant observability stacks, unnecessary data movement, engineers stuck on toil, slow incident response loops, and redundant approval gates. Use the 8 Wastes as a structured walk-through during cost optimizations, reliability reviews, and modernization assessments—every category surfaces a different class of opportunity.

## What You'll Gain

- A structured 360° framework for cost optimization that goes beyond resource rightsizing into Inventory, Extra-processing, and Transportation
- Identification of process waste (Waiting, Motion) that explains why MTTR is slow and incidents escalate
- Discovery of Non-utilized talent—the most expensive waste—and the opportunity to reallocate engineers from toil to roadmap work
- A diagnostic lens for modernization business cases (current-state vs. target-state waste) that resonates with financial leaders
- A cadence-based walk (quarterly) that catches waste regrowth before it compounds into larger problems

## The Concept, Explained

Cost optimization work often looks at only one waste—**Overproduction** (rightsizing)—and misses the larger picture. A practitioner was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K: 14 idle environments (Inventory), 7 redundant observability stacks (Extra-processing), $40K/mo of cross-region data movement (Transportation), and 3 FTEs spending 60% of their time on toil (Non-utilized talent). The waste lens unlocked 3× the original ask.

The DOWNTIME mnemonic: **D—Defects** (incidents, failed deployments, rollbacks); **O—Overproduction** (over-provisioned capacity, idle compute, oversized instances); **W—Waiting** (pipelines waiting on manual approval, engineers waiting on access); **N—Non-utilized talent** (senior engineers running manual tasks, specialists blocked by toil); **T—Transportation** (cross-region data movement, redundant data copies); **I—Inventory** (stale environments, orphaned disks, unused accounts); **M—Motion** (context-switching between 6 tools for incident triage); **E—Extra-processing** (triple-approval pipelines, duplicate observability stacks).

Use the 8 Wastes as a structured walk: pick scope, walk each waste in order with evidence sources (a query tool, cost tooling, observability tooling), quantify each finding, Pareto-rank the findings, tie each to a hypothesis, run PDCA on the top 3–5, and re-walk quarterly.

## In the Field — CI Practitioner · continuous improvement in practice

A CI practitioner turns a vague 'we're inefficient' into a concrete target list using the 8 wastes as a checklist. Walking the value stream, they name each one: waiting on manual approvals, overproduction of unused reports, defects that trigger rework, the motion of hunting for access. Categorizing waste instead of gesturing at it gives the practitioner a prioritized backlog they can actually work. They attack the biggest waste first and watch lead time drop — the framework converts general frustration into ownable, sequenced improvements.

## Recap — Key Concepts & Takeaways

- The 8 Wastes (DOWNTIME) are a 360° checklist—most reviews look at 1–2 wastes and miss the rest; a structured walk through all 8 typically surfaces 3× the opportunity
- Quantify every finding in $ or hours before Pareto-ranking; 5 well-quantified wastes drive action; 80 unranked wastes paralyze the effort
- Defects and Waiting explain reliability problems; Overproduction and Inventory drive cost; Motion and Extra-processing explain slow incident response; Non-utilized talent is the highest leverage for skilling conversations
- Use the 8 Wastes to structure modernization business cases (current-state vs. target-state waste)—CFOs understand waste reduction better than 'cloud-native' buzzwords
- Re-walk quarterly—waste regrows; a cadence catches new instances before they compound; the same walk is also your PDCA validation that prior eliminations stuck

## Knowledge Check

### 1. What does the DOWNTIME mnemonic stand for?

- **A.** Defects, Operations, Workload, Networking, Time, Inventory, Money, Energy.
- **B.** Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing.
- **C.** Delivery, Outcomes, Workflow, Notifications, Tickets, Issues, Metrics, Errors.
- **D.** Detection, Observation, Wait-states, Notes, Triage, Incidents, Mitigation, Escalation.

**Correct answer:** B. Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing.

**D**efects, **O**verproduction, **W**aiting, **N**on-utilized talent, **T**ransportation, **I**nventory, **M**otion, **E**xtra-processing. Each category surfaces a different class of opportunity.

### 2. Over-provisioned capacity, idle compute, and oversized instances are examples of which waste?

- **A.** Defects.
- **B.** Overproduction — producing more capacity than is needed.
- **C.** Motion.
- **D.** Inventory.

**Correct answer:** B. Overproduction — producing more capacity than is needed.

**Overproduction** is producing more than demand calls for. Rightsizing efforts typically target this waste — but it's only 1 of 8, which is why pure rightsizing misses larger opportunities.

### 3. A practitioner was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K (idle environments, redundant observability, data movement, toil). What's the lesson?

- **A.** Rightsizing always misses most of the savings.
- **B.** Looking at only one waste (Overproduction) misses Inventory, Extra-processing, Transportation, and Non-utilized talent — a structured pass across all eight wastes surfaces savings a single-waste view misses.
- **C.** The practitioner should have done an architecture review instead.
- **D.** The team should have requested $500K from the start.

**Correct answer:** B. Looking at only one waste (Overproduction) misses Inventory, Extra-processing, Transportation, and Non-utilized talent — a structured pass across all eight wastes surfaces savings a single-waste view misses.

Most reviews look at **one or two wastes** and miss the rest. The 8-Waste lens provides a 360° structured walk — every category typically surfaces a different opportunity.

### 4. Engineers swiveling between four separate tools—ticketing, code, chat, and CI/CD—to track one work item is an example of which waste?

- **A.** Transportation (movement of things).
- **B.** Motion (unnecessary movement of people / context-switching).
- **C.** Defects.
- **D.** Inventory.

**Correct answer:** B. Motion (unnecessary movement of people / context-switching).

**Motion** is unnecessary movement of *people*: context-switching between tools. Transportation, by contrast, is unnecessary movement of *things* (data movement, log shipping).

### 5. What is the anti-pattern to avoid when using the 8 Wastes?

- **A.** Tying each finding to a specific hypothesis.
- **B.** Quantifying each finding in $ or hours.
- **C.** Treating waste-hunting as "find as many as possible" — a list of 80 wastes is not actionable.
- **D.** Pareto-ranking findings before acting.

**Correct answer:** C. Treating waste-hunting as "find as many as possible" — a list of 80 wastes is not actionable.

A list of 80 wastes paralyzes action. **5 well-quantified, well-Pareto'd wastes drive change.** The 8 Wastes is a structured walk, not a brainstorm-everything exercise.

---

_Source: Continuous Improvement 30-Minute Delivery series._
