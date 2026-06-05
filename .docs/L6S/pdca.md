[← Back to Index](./index.md)

---

# PDCA / PDSA

## TL;DR

PDCA — **P**lan, **D**o, **C**heck, **A**ct — is the foundational improvement cycle: hypothesize a change, try it, measure the result, standardize or learn. Deming later refined it to PDSA (**S**tudy instead of Check) to emphasize learning over conformance. For CSAs, PDCA is the *atomic unit* of continuous improvement — every Kaizen, every DMAIC phase, every daily standup decision is a PDCA cycle. Use it explicitly when teams confuse "we tried something" with "we ran an experiment." A PDCA done well takes hours-to-weeks; chained PDCAs compound into transformation.

## Table of Contents

- [Why PDCA](#why-pdca)
- [What PDCA is](#what-pdca-is)
- [How to use PDCA](#how-to-use-pdca)
- [When to use PDCA](#when-to-use-pdca)
- [Where PDCA shows up](#where-pdca-shows-up)
- [Who uses PDCA](#who-uses-pdca)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/pdca.html)

## Why PDCA

Most "improvements" are uncontrolled changes — no hypothesis, no measure, no standardization. PDCA forces minimum scientific discipline on every change.

- Hypothesis before action — prevents solution-first thinking.
- Measure before / after — prevents claimed-but-unmeasured gains.
- Standardize after success — prevents regression.
- Iterate after failure — prevents abandonment.

**Real example:** A customer's SRE team "improved" their alerting weekly for a year — every Friday someone tweaked something. MTTR had not moved. The CSA imposed PDCA discipline: each change required a written hypothesis and a 2-week measurement window. In 4 cycles, MTTR fell 31% and the team stopped thrashing. The constraint accelerated improvement.

## What PDCA is

| Phase    | Question it answers                                  | Output                                |
| -------- | ---------------------------------------------------- | ------------------------------------- |
| Plan     | What hypothesis are we testing and how will we know? | Hypothesis, change, success metric    |
| Do       | What happened when we ran the experiment?            | Implemented change, data collected    |
| Check / Study | Did the result confirm the hypothesis?         | Evidence-based conclusion             |
| Act      | Do we standardize, adapt, or abandon?                | Decision and next cycle's plan        |

Key principles:

- Small batches. One change at a time, fast feedback.
- Hypothesis is falsifiable. "If we do X, metric Y will improve by Z."
- Honest Check. Negative results are data, not failure.
- Act commits. Either it goes into standard work or out of the system.

## How to use PDCA

1. **Plan — write the hypothesis.** "If we [change], then [metric] will move from [baseline] to [target] within [window], because [theory]."
2. **Plan — define the measurement.** Same source, same query, same period before and after.
3. **Do — make the change small.** Pilot scope, canary cluster, one team, one service.
4. **Do — collect data unmodified.** Don't cherry-pick the time window post-hoc.
5. **Check — compare against the prediction.** Did it move? In the expected direction? By the expected amount?
6. **Act — choose one of three.**
   - Standardize via IaC / Policy / runbook (see [standard work](./standard-work.md)).
   - Adapt — change one variable and run another cycle.
   - Abandon — revert and document the learning.
7. **Chain the next cycle.** The Act of one is the Plan of the next.

## When to use PDCA

- Every change worth measuring.
- Inside DMAIC's Improve phase (often several chained PDCAs).
- Inside a Kaizen event (one PDCA per intervention).
- Daily-improvement cadence at the team level.
- Coaching teams who change things impulsively.

Do **not** use PDCA as:

- A label for a meeting cycle without hypothesis or measure.
- A reason to demand months of data when a 2-day pilot would do.

## Where PDCA shows up

- Standup decisions ("we'll try X this sprint" → write a hypothesis).
- Postmortem action items (each one is a PDCA).
- Canary deployments (Plan = expected impact; Check = telemetry).
- Configuration tuning (autoscale thresholds, RU/s, retry policies).
- Prompt iteration on AI agents (each prompt change is a PDCA).

## Who uses PDCA

- **Every engineer** — atomic improvement unit.
- **Belt project leads** — multiple PDCAs inside DMAIC Improve.
- **CSAs** — model the discipline; insist on hypotheses and measurement.
- **Process owners** — own the Act decision and standardization.

## Examples

### Example 1 — Autoscale threshold PDCA

Plan: lower scale-out threshold from 80% to 65% CPU; expect P95 latency to drop ≥20%. Do: deployed to one node pool. Check: P95 -27%. Act: standardize across pools via IaC.

### Example 2 — Retry policy PDCA

Hypothesis confirmed false. Throughput went down. Reverted within a day; documented learning that retry-with-backoff already saturated. No wasted month-long rollout.

### Example 3 — Prompt PDCA

Each agent prompt change shipped with an eval prediction. Confirmed cycles standardized in version control; disconfirmed cycles reverted same day.

### Example 4 — Postmortem action PDCA

Postmortem produced 6 actions. Each became a PDCA. 4 succeeded and were standardized; 2 failed and were retired. Previously, postmortem actions silently aged out.

### Example 5 — Canary as PDCA

Canary deploys treated as formal PDCA: predicted error-rate impact, measured, promoted or rolled back on evidence not vibes.

### Example 6 — Cost PDCA

Plan: enable autoscale on Cosmos container X, expect 60% spend reduction. Do: enabled. Check: 71%. Act: standardize via IaC module across 14 containers.

### Example 7 — Kanban WIP PDCA

Plan: lower Doing WIP from 7 to 4, expect lead time -30%. Do: enforced 2 weeks. Check: lead time -42%, throughput unchanged. Act: standardized at 4; tested 3 next.

### Example 8 — Failed PDCA documented

Tried a node pool consolidation; expected $4K/mo savings; got $0 due to scheduling constraints. Documented the constraint as standard work for future architects.

### Example 9 — Chained PDCAs inside a Kaizen

5-day Kaizen ran 7 PDCAs in sequence. 5 standardized, 2 abandoned. Total measured impact: 4.4x baseline target.

### Example 10 — PDCA as personal habit

CSA adopted one personal-practice PDCA per week (intake template, peer-review SLA, demo cadence). After a year, 31 standardized practice changes; engagement throughput 1.8x.
