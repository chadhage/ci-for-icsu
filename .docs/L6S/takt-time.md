[← Back to Index](./index.md)

---

# Takt Time

## TL;DR

Takt time (German *Takt*, "beat" or "pulse") is the rate at which a process must produce to meet customer demand: `takt = available time / customer demand`. If demand is 480 requests per 8-hour day, takt is 1 minute per request. Cycle time slower than takt = unmet demand. Cycle time faster than takt = overproduction waste. For CSAs, takt translates to deploy cadence, alert response rate, incident triage pace, request throughput, and AI agent invocation rate. Use takt to size capacity, set SLOs, design [Standard Work](./standard-work.md), and detect overproduction before it accumulates inventory waste.

## Table of Contents

- [Why Takt Time](#why-takt-time)
- [What Takt Time is](#what-takt-time-is)
- [How to compute and use Takt Time](#how-to-compute-and-use-takt-time)
- [When to use Takt Time](#when-to-use-takt-time)
- [Where Takt Time shows up](#where-takt-time-shows-up)
- [Who uses Takt Time](#who-uses-takt-time)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/takt-time.html)

## Why Takt Time

Capacity decisions made without takt are guesses. Sizing to peak wastes; sizing to average misses peak; sizing to takt matches.

- Reveals whether the process is fundamentally able to meet demand.
- Distinguishes capacity problems from variation problems.
- Drives line balancing — step times within ±10% of takt.
- Detects overproduction (cycle << takt) as waste, not virtue.

**Real example:** A customer's CI build farm "felt slow." Demand: 800 builds / 8h day = takt 36s. Measured per-build cycle: 4 minutes. The farm couldn't possibly meet demand; queueing was inevitable. Adding 6 runners brought cycle to 32s, demand met without overprovisioning. The diagnosis (capacity, not flakiness) had eluded the team for a quarter.

## What Takt Time is

Definition: takt = available production time / customer demand.

Three related measures (often confused):

| Measure       | Definition                                               |
| ------------- | -------------------------------------------------------- |
| Takt time     | Demand-set pace the process must match.                  |
| Cycle time    | Actual time per unit produced (averaged).                |
| Lead time     | End-to-end time per unit, including queues.              |

Cases:

- **Cycle time > takt** — under-capacity; queues grow; demand unmet.
- **Cycle time = takt** — balanced; smooth flow at sustainable pace.
- **Cycle time < takt** — over-capacity; overproduction unless paced down (the [Heijunka](./kanban.md) discipline).

For engineering, demand varies. Use *peak hour takt* for capacity planning; *daily takt* for steady-state design.

## How to compute and use Takt Time

1. **Pick the customer.** Internal team? External user? AI agent caller?
2. **Measure demand.** Requests per period from real telemetry.
3. **Measure available time.** Working hours, runner hours, on-call shift.
4. **Compute takt.** Period / demand.
5. **Compare to current cycle time.** Gap → either resize capacity or improve cycle time.
6. **Balance steps to within ~10% of takt.** A 4-step process where one step takes 2x takt is the bottleneck regardless of the others.
7. **Re-measure on demand shifts.** Takt is a moving target.

**Anti-pattern to avoid:** computing takt against peak-of-peak; you'll over-provision permanently. Compute against a defensible busy-window definition.

## When to use Takt Time

- Capacity sizing for any flow system.
- Setting SLOs / SLAs.
- Designing standard work — each task to fit one takt cycle.
- Detecting overproduction (cycle << takt) as waste.
- Auto-scaling configuration sanity-checks.

## Where Takt Time shows up

- AKS HPA / KEDA configuration.
- CI/CD runner sizing.
- Service Bus consumer count.
- Incident response staffing for peak-hour load.
- AI agent inference capacity.

## Who uses Takt Time

- **Architects / SREs** — capacity decisions.
- **Service owners** — SLO design.
- **CSAs** — capacity sanity-check during assessments.
- **Finance partners** — reservation purchase justification.

## Examples

### Example 1 — CI build farm

Takt 36s; cycle 4 min. Added 6 runners; cycle 32s. Queues cleared.

### Example 2 — AKS HPA tuning

Takt during peak = 12 req/s. Pods sized to 18 req/s each → 1 pod headroom; HPA threshold set with this in mind.

### Example 3 — Service Bus consumers

Producer rate 800 msg/s peak; per-consumer 80 msg/s. 10 consumers + 1 buffer = 11; matched takt with HA margin.

### Example 4 — On-call sizing

Peak-hour incident rate 1 per 22 min; triage cycle 35 min. Capacity gap; added secondary; cycle absorbed.

### Example 5 — Agent inference

LLM invocations 200/min peak; per-instance 30/min. 7 instances + 1 = 8. Auto-scale boundaries derived directly from takt.

### Example 6 — Build queue overproduction

CI ran at cycle << takt; large idle compute spend. Auto-scale floor lowered; saved $14K/mo without queue regressions.

### Example 7 — Deploy cadence as takt

Customer demand: 2 deploys / day per service. Cycle: 1 deploy / 11 days. Takt mismatch quantified the modernization business case.

### Example 8 — Help-desk triage

Ticket arrival 80/day; agent triage rate 4/hr; 8h shift = 32. Needed 3 agents to match takt.

### Example 9 — Standard work fit

Standard incident triage steps balanced so each step ≤ 0.9 × takt. Smooth handoffs replaced bottleneck.

### Example 10 — Takt + autoscale poka-yoke

Auto-scale config validated against takt at deploy time; misconfigurations refused. Capacity-related outages eliminated.
