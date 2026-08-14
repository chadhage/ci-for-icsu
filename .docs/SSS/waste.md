# 8 Types of Waste

> **Persona:** Services Solutions Seller · selling improvement outcomes  
> **Module group:** Value & Quality Definition · **Delivery:** 30 min

## Executive Summary

The 8 Wastes (DOWNTIME—Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing) are Lean's 360° checklist for spotting non-value-add activity in any system. For CSAs, the 8 Wastes translate cleanly to the Azure estate: over-provisioned RUs, idle VMs, stale environments, redundant observability stacks, unnecessary data egress, engineers stuck on toil, slow incident response loops, and redundant approval gates. Use the 8 Wastes as a structured walk-through during cost optimizations, reliability reviews, and modernization assessments—every category surfaces a different class of opportunity.

## What You'll Gain

- A structured 360° framework for cost optimization that goes beyond VM rightsizing into Inventory, Extra-processing, and Transportation
- Identification of process waste (Waiting, Motion) that explains why MTTR is slow and incidents escalate
- Discovery of Non-utilized talent—the most expensive waste—and the opportunity to reallocate engineers from toil to roadmap work
- A diagnostic lens for modernization business cases (current-state vs. target-state waste) that resonates with financial leaders
- A cadence-based walk (quarterly) that catches waste regrowth before it compounds into larger problems

## The Concept, Explained

Cost optimization engagements often look at only one waste—**Overproduction** (rightsizing)—and miss the larger picture. A CSA was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K: 14 idle subscriptions (Inventory), 7 redundant observability stacks (Extra-processing), $40K/mo of cross-region data egress (Transportation), and 3 FTEs spending 60% of their time on toil (Non-utilized talent). The waste lens unlocked 3× the original ask.

The DOWNTIME mnemonic: **D—Defects** (incidents, failed deployments, rollbacks); **O—Overproduction** (over-provisioned RUs, idle VMs, oversized App Service plans); **W—Waiting** (pipelines waiting on manual approval, engineers waiting on access); **N—Non-utilized talent** (senior engineers running manual tasks, data scientists blocked by toil); **T—Transportation** (cross-region data egress, redundant data copies); **I—Inventory** (stale environments, orphaned disks, unused subscriptions); **M—Motion** (context-switching between 6 portals for incident triage); **E—Extra-processing** (triple-approval pipelines, duplicate observability stacks).

Use the 8 Wastes as a structured walk: pick scope, walk each waste in order with evidence sources (Azure Resource Graph, Cost Management, App Insights), quantify each finding, Pareto-rank the findings, tie each to a hypothesis, run PDCA on the top 3–5, and re-walk quarterly.

## In the Field — Services Solutions Seller · selling improvement outcomes

A Services Solutions Seller uses the 8 wastes to map a customer's inefficiency into a concrete, sellable improvement backlog. Walking the value stream and naming the waiting, overproduction, defects, and motion converts a vague 'we're inefficient' into prioritized opportunities with attached value. The seller can then propose the engagement that attacks the biggest waste first, with a credible lead-time payoff. The framework turns general frustration into a sequenced, fundable plan the customer can see themselves buying.

## Recap — Key Concepts & Takeaways

- The 8 Wastes (DOWNTIME) are a 360° checklist—most engagements look at 1–2 wastes and miss the rest; a structured walk through all 8 typically surfaces 3× the opportunity
- Quantify every finding in $ or hours before Pareto-ranking; 5 well-quantified wastes drive action; 80 unranked wastes paralyze the engagement
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

### 2. Over-provisioned Cosmos RU/s, idle VMs, and oversized App Service plans are examples of which waste?

- **A.** Defects.
- **B.** Overproduction — producing more capacity than is needed.
- **C.** Motion.
- **D.** Inventory.

**Correct answer:** B. Overproduction — producing more capacity than is needed.

**Overproduction** is producing more than demand calls for. Rightsizing engagements typically target this waste — but it's only 1 of 8, which is why pure rightsizing misses larger opportunities.

### 3. A CSA was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K (idle subs, redundant observability, egress, toil). What's the lesson?

- **A.** Rightsizing always misses most of the savings.
- **B.** Looking at only one waste (Overproduction) misses Inventory, Extra-processing, Transportation, and Non-utilized talent — a structured pass across all eight wastes surfaces savings a single-waste view misses.
- **C.** The CSA should have done a WAF assessment instead.
- **D.** The customer should have requested $500K from the start.

**Correct answer:** B. Looking at only one waste (Overproduction) misses Inventory, Extra-processing, Transportation, and Non-utilized talent — a structured pass across all eight wastes surfaces savings a single-waste view misses.

Most engagements look at **one or two wastes** and miss the rest. The 8-Waste lens provides a 360° structured walk — every category typically surfaces a different opportunity.

### 4. Engineers swiveling between Jira, GitHub, Teams, and Azure DevOps to track one work item is an example of which waste?

- **A.** Transportation (movement of things).
- **B.** Motion (unnecessary movement of people / context-switching).
- **C.** Defects.
- **D.** Inventory.

**Correct answer:** B. Motion (unnecessary movement of people / context-switching).

**Motion** is unnecessary movement of *people*: context-switching between portals or tools. Transportation, by contrast, is unnecessary movement of *things* (data egress, log shipping).

### 5. What is the anti-pattern to avoid when using the 8 Wastes?

- **A.** Tying each finding to a specific hypothesis.
- **B.** Quantifying each finding in $ or hours.
- **C.** Treating waste-hunting as "find as many as possible" — a list of 80 wastes is not actionable.
- **D.** Pareto-ranking findings before acting.

**Correct answer:** C. Treating waste-hunting as "find as many as possible" — a list of 80 wastes is not actionable.

A list of 80 wastes paralyzes action. **5 well-quantified, well-Pareto'd wastes drive change.** The 8 Wastes is a structured walk, not a brainstorm-everything exercise.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
