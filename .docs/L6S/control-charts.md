[← Back to Index](./index.md)

---

# Control Charts (SPC)

## TL;DR

A control chart is a time-series plot of a process metric with statistical control limits (typically ±3σ around the mean) drawn to distinguish *common-cause variation* (the process is what it is) from *special-cause variation* (something has changed). Statistical Process Control (SPC) — Walter Shewhart's invention — predates Six Sigma and remains the most useful single tool for the [Control phase](./dmaic.md) of any improvement. For CSAs, control charts are how you tell "the SLO regression is real" from "noise," how you detect drift before customers do, and how you prove a [Kaizen](./kaizen.md) gain held. Use them on latency, error rate, cost, throughput, and any [CTQ](./ctq.md) that matters.

## Table of Contents

- [Why Control Charts](#why-control-charts)
- [What a Control Chart is](#what-a-control-chart-is)
- [How to build and read Control Charts](#how-to-build-and-read-control-charts)
- [When to use Control Charts](#when-to-use-control-charts)
- [Where Control Charts show up](#where-control-charts-show-up)
- [Who reads Control Charts](#who-reads-control-charts)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/control-charts.html)

## Why Control Charts

Without statistical thinking, every blip looks like a problem and every smooth week looks like a win. Control charts impose math.

- Separates signal from noise — prevents over-reaction to common-cause variation.
- Detects drift early — special-cause patterns visible before a hard limit is breached.
- Anchors [Process Capability](./process-capability.md) calculations.
- Sustains [Kaizen](./kaizen.md) gains by catching regression statistically, not anecdotally.

**Real example:** A customer's SRE team reacted to every P99 spike with a meeting. Most spikes were within common-cause range. After plotting a control chart and training the team on the Western Electric rules, "spike meetings" fell 80%. The two that *did* fire turned out to be early signals of real regressions — caught a week before the SLO would have alerted.

## What a Control Chart is

Components:

- **Center line (CL)** — typically the mean (`x̄`) or median.
- **Upper / Lower control limits (UCL / LCL)** — `CL ± 3σ̂` where `σ̂` is the within-subgroup standard deviation estimate (varies by chart type).
- **Points** — the metric over time, sometimes in subgroups.

Chart types (engineering-relevant):

| Chart      | Data type           | Use                                     |
| ---------- | ------------------- | --------------------------------------- |
| I-MR       | Individual values   | One-at-a-time metrics (cost/day)        |
| X̄-R        | Subgroup means      | Latency P95 by 5-min window             |
| p          | Proportion defective| Error rate by deployment                |
| c          | Count of defects    | Incidents per week                      |
| u          | Defects per unit    | Bugs per kLOC, per build                |

Special-cause signals (Western Electric / Nelson rules — common subset):

1. One point outside ±3σ.
2. 9 consecutive points on one side of CL.
3. 6 consecutive points trending up or down.
4. 14 consecutive points alternating up/down.
5. 2 of 3 consecutive points outside ±2σ on same side.

Any rule firing = investigate; don't tweak the process for common-cause variation.

## How to build and read Control Charts

1. **Pick the metric and the chart type.** Match data type.
2. **Establish a stable baseline.** 20–25 subgroups minimum. Investigate and *remove* any clear special causes during baseline (don't bake them in).
3. **Compute CL and limits.** Use within-subgroup σ̂, not raw σ.
4. **Plot ongoing data on the locked baseline.** Do not recompute limits each period.
5. **Apply rules.** Investigate signals; don't react to noise.
6. **Re-baseline only after deliberate process change.** Document the re-baseline.

**Anti-pattern to avoid:** moving the control limits to "absorb" variation. That destroys the tool's signal capability.

## When to use Control Charts

- Control phase of every DMAIC.
- Ongoing monitoring of any CTQ.
- Cost / spend monitoring at the service or team level.
- Reliability metrics (error rate, MTTR).
- AI eval metric monitoring (groundedness over time).

## Where Control Charts show up

- Azure Workbooks / Power BI dashboards.
- Custom Kusto queries that compute and render limits.
- Continuous-eval dashboards on AI agents.
- QBR / EBR reliability reports.

## Who reads Control Charts

- **SRE / process owners** — operational use daily.
- **Belt project leads** — DMAIC Control deliverable.
- **CSAs** — train customers on interpretation.
- **Leadership** — at QBR cadence.

## Examples

### Example 1 — P99 latency I-MR

Baseline of 25 days; CL 312ms, UCL 410ms. After Kaizen: CL 187ms, UCL 245ms. Re-baselined deliberately.

### Example 2 — Error-rate p-chart

Per-deployment proportion. Two consecutive at +2σ triggered investigation; caught a config regression before customer impact.

### Example 3 — Cost I-MR

Daily Cosmos spend; baseline CL $310. Slow upward trend (rule 3) caught a creeping index policy bug.

### Example 4 — Incident c-chart

Incidents per week. Run of 9 below CL after Kaizen confirmed sustained gain statistically.

### Example 5 — AI eval u-chart

Groundedness defects per 1k invocations. Rule 5 fired after a model update — rolled back; chart returned to control.

### Example 6 — Deploy lead-time X̄-R

P50 / P90 subgroups by day. R chart showed unstable variation before the X̄ chart looked alarming — early signal.

### Example 7 — Special-cause investigation

Rule 1 hit: a single 9σ point. Investigation revealed a corrupted metric pipeline (not a process change). Data fix, re-baseline unchanged.

### Example 8 — Common-cause restraint

Engineer wanted to tighten retry policy after a +2σ point. CSA's coaching: common-cause; no action. Following week returned to CL. No harm; preserved learning capital.

### Example 9 — Chart-driven SLO

Customer adopted CL + 3σ as their SLO target. Eliminated the "round-number SLO" arbitrariness; aligned with actual capability.

### Example 10 — Multi-service portfolio chart

Workbook plotted I-MR for 14 services on one page. Two services consistently outside control; received targeted [DMAIC](./dmaic.md) attention; the others stayed in monitoring.
