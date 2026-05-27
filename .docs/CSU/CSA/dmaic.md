# DMAIC

## TL;DR

DMAIC — **D**efine, **M**easure, **A**nalyze, **I**mprove, **C**ontrol — is the canonical Six Sigma project methodology for fixing an existing process that is underperforming. Each phase has a tollgate; you do not proceed until the gate is met. For CSAs, DMAIC is the right framework when the problem is significant enough to merit weeks-to-months of structured work and data-driven decisions — reliability programs, cost-recovery programs, quality uplifts, capacity rebuilds. For shorter cycles use [PDCA](./pdca.md) or a [Kaizen](./kaizen.md); for *new* process design use DMADV. DMAIC's discipline is exactly its value: it prevents jumping to solutions before the problem is understood.

## Table of Contents

- [Why DMAIC](#why-dmaic)
- [What DMAIC is](#what-dmaic-is)
- [How to use DMAIC](#how-to-use-dmaic)
- [When to use DMAIC](#when-to-use-dmaic)
- [Where DMAIC shows up](#where-dmaic-shows-up)
- [Who runs DMAIC](#who-runs-dmaic)
- [Examples](#examples)

## Why DMAIC

The most expensive engineering mistake is solving the wrong problem confidently. DMAIC's tollgates exist to stop that. Each phase ends in a review where the next phase cannot start until the current one's evidence is sufficient.

- Forces measurement before improvement — kills opinion-driven changes.
- Anchors decisions in data, which travels well to skeptical leadership.
- Built-in Control phase ensures gains are sustained, not regressed.
- Pairs naturally with Belt projects (see [belts.md](./belts.md)) — DMAIC is the project shape Green and Black Belts certify on.

**Real example:** A CSA inherited a customer reliability initiative that had cycled through 3 "solutions" without measured improvement. Restarting under DMAIC, the Measure phase revealed the baseline they had been "improving against" was wrong by 40% — they were chasing a ghost. After two more phases the real driver (a single dependency's auth refresh) was isolated and fixed. The Control phase has held for 18 months.

## What DMAIC is

Five phases, each with a tollgate:

| Phase   | Goal                                          | Key Tools                                                                | Tollgate                                          |
| ------- | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| Define  | Agree on problem, scope, customer, goal       | Charter, [SIPOC](./sipoc.md), [VOC](./voc.md), [CTQ](./ctq.md)            | Problem statement + measurable goal approved      |
| Measure | Quantify current performance                  | Data plan, baseline, [Pareto](./pareto-chart.md), measurement-system check | Baseline accepted; measurement system validated   |
| Analyze | Identify root causes                          | [Ishikawa](./ishikawa.md), [5 Whys](./5-whys.md), hypothesis tests, [FMEA](./fmea.md) | Root causes evidenced, not asserted               |
| Improve | Design, pilot, deploy the change              | [Kaizen](./kaizen.md), DOE, [Poka-Yoke](./poka-yoke.md), pilot           | Change implemented and measured against baseline  |
| Control | Sustain the gain                              | [Control charts](./control-charts.md), [standard work](./standard-work.md), policy, runbooks | Process owner accepts; sustainment plan in place  |

## How to use DMAIC

1. **Define.** Write a one-page [project charter](./project-charter.md). SIPOC the process. Capture VOC. Translate to CTQs. Get sponsor sign-off.
2. **Measure.** Build the data plan first (what, how often, by whom). Verify the measurement system itself is reliable. Establish baseline with enough data to be defensible (typically 4+ weeks).
3. **Analyze.** Use Ishikawa + 5 Whys to generate hypotheses. Test them with data. Do not let plausibility substitute for evidence.
4. **Improve.** Design the change. Pilot before broad deployment. Compare measured post-change performance to baseline using the same data source.
5. **Control.** Standardize through IaC, Policy, runbook, dashboard, alert. Hand off to process owner with a sustainment review cadence.

**Anti-pattern to avoid:** the "DMAIC sprint" — running all five phases in a week without phase gates. That is a Kaizen, not a DMAIC; call it what it is.

## When to use DMAIC

- Existing process is underperforming and the cause is unclear.
- The problem is large enough to merit weeks of structured work.
- Leadership requires data-grounded decisions and a sustainment plan.
- A Belt candidate needs a certification project.

Do **not** use DMAIC for:

- Designing a new process — use DMADV.
- Same-day fixes — use PDCA or a runbook.
- Strategic / cultural change — use [Hoshin Kanri](./hoshin-kanri.md).

## Where DMAIC shows up

- Belt certification projects.
- WAF remediation programs at scale.
- Multi-quarter reliability or cost programs.
- Customer enterprise CI programs as the standard project shape.

## Who runs DMAIC

- **Green / Black Belt project lead** — owns the project end-to-end.
- **Sponsor** — funds the work and clears blockers; signs the tollgates.
- **CSA** — often the Belt lead for customer-facing projects; coaches when the customer leads.
- **Process owner** — receives the controlled process post-project.
- **Team doing the work** — primary data source and change implementers.

## Examples

### Example 1 — Cosmos cost DMAIC

Define: cut chat-history RU spend 70%. Measure: $11.4K/mo baseline, P95 38K RU/s. Analyze: hot partition + missing autoscale. Improve: HPK + autoscale + index trim. Control: IaC module + Policy + monthly dashboard. Result: $2.8K/mo, sustained 9 months.

### Example 2 — AKS reliability DMAIC

Defined `ImagePullBackOff` elimination. Pareto isolated 41% of incidents to one signature. Root cause: mutable tags + public ACR. Improve: private endpoint + immutable tags + MI auth. Control: Policy denies mutable tags cluster-wide. Sustained.

### Example 3 — Deployment lead-time DMAIC

LT 387 min → 75 min through 5 Improve interventions. Control phase added CFD dashboard and DORA tracking.

### Example 4 — MTTR DMAIC

84 min → 38 min. Control: unified workbook + alert auto-payload runbook standardized across product lines.

### Example 5 — DMADV vs. DMAIC decision

Customer asked for "DMAIC on the new tenant onboarding flow." Flow didn't exist yet — switched to DMADV. Process shipped with statistical capability built in.

### Example 6 — Failed Analyze tollgate

Team proposed Improve actions on assertions, not evidence. CSA held the tollgate. Two more weeks of data work isolated the real cause; the originally proposed actions would have missed it.

### Example 7 — Control phase saves the gain

Six months post-improvement, control chart caught creep. Standard work refresh held the gain at 92% of original improvement.

### Example 8 — Green Belt certification DMAIC

Customer engineer completed DMAIC on Service Bus dead-letter rate. Belt certified; standardization spread to 4 adjacent teams.

### Example 9 — Multi-team DMAIC with shared baseline

Cost program ran 6 parallel DMAIC projects sharing a common cost-data baseline. Cumulative savings $310K/quarter, tracked on one dashboard.

### Example 10 — DMAIC as portfolio shape

CSA's customer adopted DMAIC as the default project shape: any initiative >$50K had to ship as DMAIC. Within a year, 80% of completed projects had measured sustained gains; previously <30% had any post-hoc measurement at all.
