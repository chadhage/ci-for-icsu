# Control Charts (SPC)

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Measurement & Control · **Delivery:** 30 min

## Executive Summary

A control chart is a time-series plot of a process metric with statistical control limits (typically ±3σ) to distinguish common-cause variation (noise—the process is what it is) from special-cause variation (signal—something has changed). Statistical Process Control detects drift before customers do and proves that improvement gains held.

## What You'll Gain

- Tell the difference between a real problem and normal process variation
- Detect process drift early, before SLO breaches and customer impact
- Prove that Kaizen gains are sustained with statistics, not claims
- Reduce wasted effort reacting to false alarms and noise
- Monitor any CTQ metric: latency, error rate, cost, throughput, AI eval metrics

## The Concept, Explained

Control chart components: **Center Line (CL)** = typically the mean or median. **Upper/Lower Control Limits (UCL/LCL)** = CL ± 3σ where σ is the within-subgroup standard deviation. **Points** = the metric over time. Common chart types: I-MR for individual values (e.g., cost per day), X-R for subgroup means (e.g., P95 latency by 5-min window), p-chart for proportion defective (e.g., error rate per deployment), c-chart for defect counts per period.

Special-cause signals (Western Electric / Nelson rules): (1) One point outside ±3σ, (2) 9 consecutive points on one side of CL, (3) 6 consecutive points trending up or down, (4) 14 points alternating up/down, (5) 2 of 3 consecutive points outside ±2σ on same side. Any rule firing = investigate the process; do not tweak settings for common-cause variation. Anti-pattern: moving control limits to 'absorb' variation—that destroys the tool's signal capability.

How to use: (1) Establish stable baseline of 20–25 subgroups, investigating and removing any clear special causes. (2) Compute CL and limits. (3) Plot ongoing data on the locked baseline; do not recompute limits each period. (4) Apply rules; investigate signals. (5) Re-baseline only after deliberate process change, documented.

## In the Field — CSA · Cloud Solution Architect

A CSA sets up an Azure Workbook with control charts for latency (P99) and error rate. Baseline is 4 weeks of production data. P99 latency CL 312ms, UCL 410ms; error-rate p-chart CL 0.3%, UCL 1.2%. After a Kaizen on tail-latency (connection pool tuning), the CSA re-baselines: P99 CL 187ms, UCL 245ms. The control chart is locked and displayed in the operations dashboard. Two weeks later, a spike appears: one data point shoots to 520ms (outside UCL). CSA's runbook triggers: investigate that hour for infrastructure changes. Root cause found: misconfigured load balancer on one region. Without the control chart, the spike would have looked like noise.

## Recap — Key Concepts & Takeaways

- Control limits separate signal (special-cause) from noise (common-cause) using ±3σ math
- Western Electric rules detect special causes; investigate them rather than tweaking the process
- Establish baseline with 20–25 stable subgroups; lock limits and only re-baseline after deliberate change
- Use control charts in the Control phase of DMAIC, in ongoing reliability monitoring, and in QBR reporting
- Control charts prove that Kaizen gains held, not that compliance was lucky

## Knowledge Check

### 1. What is the primary purpose of drawing control limits (typically &plusmn;3&sigma;) on a process metric chart?

- **A.** To set production targets the team must meet.
- **B.** To distinguish common-cause from special-cause variation.
- **C.** To predict future metric values with statistical certainty.
- **D.** To replace traditional statistical hypothesis testing.

**Correct answer:** B. To distinguish common-cause from special-cause variation.

Control limits separate noise (common-cause — the process is what it is) from signal (special-cause — something has changed). This prevents over-reacting to normal **variation**.

### 2. How should you respond when a single metric point falls outside the upper control limit?

- **A.** Immediately adjust process settings to bring it back in.
- **B.** Recompute the control limits to accommodate the new data.
- **C.** Investigate for a special cause per Western Electric rules.
- **D.** Tighten the SLO by 10% to prevent recurrence.

**Correct answer:** C. Investigate for a special cause per Western Electric rules.

One point outside &plusmn;3&sigma; is a **special-cause signal** per Western Electric rules. Investigate the cause; don’t tweak the process for common-cause variation.

### 3. When should you recalculate and re-baseline control chart limits?

- **A.** Every week to keep limits current with the latest data.
- **B.** Only after a deliberate, documented process change.
- **C.** Never once the baseline is established and locked.
- **D.** Whenever the metric looks out of control or concerning.

**Correct answer:** B. Only after a deliberate, documented process change.

Lock the baseline on 20–25 stable subgroups. Do not recompute each period — that destroys signal capability. **Re-baseline only** after intentional process change.

### 4. Which control chart type would you use to monitor P99 latency measured at 5-minute intervals?

- **A.** I-MR (individuals and moving range) for single values.
- **B.** p-chart (proportion defective) for pass/fail outcomes.
- **C.** c-chart (count of defects) for defect counts per period.
- **D.** X-R (subgroup means and range) for aggregated metrics.

**Correct answer:** D. X-R (subgroup means and range) for aggregated metrics.

P99 latency by 5-minute window is subgroup data. X-R plots the mean and range of each subgroup — ideal for **percentile metrics** over time windows.

### 5. What does a run of nine consecutive points below the center line indicate?

- **A.** The process is improving and will stay improved automatically.
- **B.** A special-cause signal per Western Electric rule 2.
- **C.** Normal common-cause variation; no action required.
- **D.** Control limits are too tight and need widening.

**Correct answer:** B. A special-cause signal per Western Electric rule 2.

Nine consecutive points on one side of the center line is a **special-cause signal** (Western Electric rule 2). In a Kaizen context, this confirms sustained gain statistically.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
