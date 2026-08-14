# Kanban: Flow Control for Continuous Work

> **Persona:** Services Account Executive · owning the account  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Kanban—'signboard'—is a visual workflow system that limits work-in-progress (WIP) to expose bottlenecks and pull work through a value stream at sustainable pace. By Little's Law, lead time scales with WIP; halve WIP and you halve lead time at the same throughput. For CSAs, Kanban is the operational complement to Pareto/Ishikawa/Kaizen: those identify the right work; Kanban flows it through to done. Use Kanban to manage CI cycles, incident-response queues, modernization backlogs, customer onboarding pipelines, and your own engagement backlog. The headline mechanics—visualize, limit WIP, manage flow, make policies explicit, evolve—apply equally to 4-person SRE teams and 40-person platform orgs.

## What You'll Gain

- Cut lead time by half without adding people—WIP limits force focus and eliminate context-switching waste; Little's Law makes this math visible
- Expose bottlenecks immediately—aging WIP is the leading indicator of trouble; fix the constraint before it cascades
- Finish what you start—explicit Definition of Ready and Done prevents half-done work from accumulating and poisoning the backlog
- Run CI cycles, incident response, and modernization flows with visible throughput and lead time metrics

## The Concept, Explained

**Six core practices (David Anderson):**

- **Visualize:** Every item is a card on a board. Columns represent stages. Nothing is invisible.
- **Limit WIP:** Each column has a maximum. When full, upstream stops or downstream finishes. This is the discipline that works.
- **Manage flow:** Watch lead time and throughput, not utilization. High utilization hides bottlenecks.
- **Make policies explicit:** What does "Done" mean? What is "Ready"? Write it on the board.
- **Implement feedback loops:** Daily standup, replenishment meeting, service delivery review, risk review, strategy review.
- **Improve collaboratively:** Change the board based on data; this is PDCA applied to the board itself.
**Core mechanics:** Pull (downstream pulls when capacity opens; upstream cannot push). Swim lanes (by type or service area). Classes of service (Standard, Expedite, Fixed-date, Intangible). Metrics: Lead time (submitted to delivered), Cycle time (started to delivered), Throughput (delivered per period), Aging WIP (how long current items have been in progress). Cumulative Flow Diagram visualizes lead time and WIP at a glance.

**Little's Law** is the math behind WIP limits. For a stable system, average lead time = average WIP &divide; average throughput (LT = WIP / throughput). Throughput is set by real delivery capacity and is hard to raise quickly; WIP is something you control directly. So when throughput holds steady, cutting WIP cuts lead time proportionally—halve the items in progress and the average item is delivered in about half the time. That is why limiting WIP, rather than adding people, is often the fastest way to shorten lead time. The law holds on average for a stable system over time, not for any single item.

**How to use:** Map the actual workflow as columns (don't invent stages; reflect reality). Set initial WIP limits (rule of thumb: WIP ≈ team size for Doing). Define Ready and Done per column. Hold short ceremonies (daily standup, weekly replenishment). Track and surface aging. Respect limits when it hurts—that's when they're working.

## In the Field — Services Account Executive · owning the account

A Services Account Executive positions a Kanban rollout as a quick way to make the customer's invisible work visible for both teams and leadership. Bottlenecks surfacing early and overload becoming undeniable is an outcome the sponsor grasps immediately. It's a lightweight, low-risk starting engagement that establishes the flow visibility every later improvement depends on. Kanban gives the SAE a credible quick-win foundation to build a longer, growing account relationship on.

## Recap — Key Concepts & Takeaways

- Kanban exposes bottlenecks through WIP limits—when a column fills, upstream stops or downstream finishes; the constraint becomes visible.
- Little's Law: lead time scales with WIP. Halve WIP and you halve lead time at the same throughput—focus beats capacity.
- Visualize work, limit WIP per column (rule of thumb: WIP ≈ team size), define Ready and Done, hold feedback ceremonies, improve via data.
- Aging WIP is the leading indicator—items aging past expected cycle time highlight stalls; fix the stall, not the aging metric.
- Respect WIP limits when the calendar gets uncomfortable; that's when they're doing their work—forcing visible tradeoffs instead of invisible overload.

## Knowledge Check

### 1. A team has 14 initiatives in flight across 5 engineers; nothing has shipped in 11 weeks. You set a WIP limit of 5 on the Doing column. What is the fundamental mechanism that should improve throughput?

- **A.** The team gains visibility into the backlog, so motivation increases.
- **B.** Limiting WIP forces the team to finish work instead of context-switching — reducing lead time and increasing actual throughput.
- **C.** Engineers will work faster because they see the board during standups.
- **D.** The board automatically prioritizes which work is most important.

**Correct answer:** B. Limiting WIP forces the team to finish work instead of context-switching — reducing lead time and increasing actual throughput.

By Little’s Law, lead time scales with WIP. A **WIP limit** removes contention and forces focus. The team doesn’t work harder — they finish what they start, so throughput improves.

### 2. A team proposes six columns for an incident board. Which approach is correct?

- **A.** All six stages, because they are all important.
- **B.** Only the stages that represent real handoffs and bottlenecks in the workflow.
- **C.** Just Open and Closed, to keep the board simple.
- **D.** Five stages, excluding “waiting for customer input” because that’s external.

**Correct answer:** B. Only the stages that represent real handoffs and bottlenecks in the workflow.

Columns map to **real workflow stages**, not every status variation. “Waiting for customer” belongs in a Blocked lane — it’s not active work. Extra columns hide flow problems instead of exposing them.

### 3. A VP asks to push a 5th item into a Doing column with a WIP limit of 4. What is the correct response?

- **A.** Break the WIP limit this once because the VP's request is urgent.
- **B.** Quietly add the new work to a separate “Expedite” lane outside the WIP limit.
- **C.** Surface the conflict on the board, make the tradeoff explicit, and let the VP choose what to pause or stop.
- **D.** Reject the VP's request because the Kanban policy forbids it.

**Correct answer:** C. Surface the conflict on the board, make the tradeoff explicit, and let the VP choose what to pause or stop.

The WIP limit’s point is to **force a visible tradeoff**. When the VP sees the actual list of current work, they often choose differently than they would if the conflict was invisible.

### 4. A customer asks how to decide which of 40 modernization apps to pull into the pipeline. What's the right answer?

- **A.** Kanban decides priority automatically based on app complexity.
- **B.** Use Pareto to rank applications by business value, then use Kanban to flow them through the migration pipeline.
- **C.** Pull applications in the order they were requested, without prioritization.
- **D.** The Kanban board replaces the need for any other planning tool.

**Correct answer:** B. Use Pareto to rank applications by business value, then use Kanban to flow them through the migration pipeline.

Kanban is an **execution engine**, not a decision engine. Pareto answers “what”; Kanban answers “how do we move it.”

### 5. A board shows a rising count of cards aging past the expected cycle time, even though the team feels “just as busy as ever.” What does this indicate?

- **A.** The team needs to hire more engineers.
- **B.** The WIP limit is too low and should be raised.
- **C.** Something is blocking work or causing stalls; aging WIP is a leading indicator of trouble that needs investigation.
- **D.** The cycle-time metric is unreliable; switch to utilization.

**Correct answer:** C. Something is blocking work or causing stalls; aging WIP is a leading indicator of trouble that needs investigation.

Aging WIP is the **leading indicator**. High utilization can hide bottlenecks — waiting on approvals, dependencies, or skills. Aging is the signal to stop and investigate, not to raise WIP.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
