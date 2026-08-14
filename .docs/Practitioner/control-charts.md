# Control Charts (SPC)

> **Persona:** CI Practitioner · continuous improvement in practice  
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

## In the Field — CI Practitioner · continuous improvement in practice

A CI practitioner stops the team from reacting to every blip by standing up a control chart (SPC) with limits computed from real process data. Now they can distinguish a genuine **signal** — a point outside the limits or a sustained shift — from ordinary **noise**, and only act on the former. This ends two opposite errors at once: tampering with a stable process, and ignoring a real change. The practitioner's judgment about when to intervene stops being a gut call and becomes a rule the whole team can see and trust on the chart.

## Recap — Key Concepts & Takeaways

- Control limits separate signal (special-cause) from noise (common-cause) using ±3σ math
- Western Electric rules detect special causes; investigate them rather than tweaking the process
- Establish baseline with 20–25 stable subgroups; lock limits and only re-baseline after deliberate change
- Use control charts in the Control phase of DMAIC, in ongoing reliability monitoring, and in periodic review reporting
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

_Source: Continuous Improvement 30-Minute Delivery series._
