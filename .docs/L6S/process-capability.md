[← Back to Index](./index.md)

---

# Process Capability (Cp, Cpk)

## TL;DR

Process capability quantifies *how well a stable process meets its specification limits.* Two key indices: **Cp** = (USL − LSL) / 6σ measures *potential* capability assuming the process is centered; **Cpk** = min((USL − μ)/3σ, (μ − LSL)/3σ) measures *actual* capability accounting for centering. Convention: Cpk ≥ 1.33 = capable; ≥ 1.67 = highly capable; Six Sigma's namesake target is ≥ 2.0 (six standard deviations between mean and nearest spec). Capability only makes sense for a *stable* process (see [Control Charts](./control-charts.md)) with defined [CTQ](./ctq.md) limits. For CSAs, capability indices are how you tell leadership "the SLO is achievable" or "is currently being met by luck."

## Table of Contents

- [Why Process Capability](#why-process-capability)
- [What Capability indices are](#what-capability-indices-are)
- [How to compute and use Capability](#how-to-compute-and-use-capability)
- [When to use Process Capability](#when-to-use-process-capability)
- [Where Process Capability shows up](#where-process-capability-shows-up)
- [Who uses Process Capability](#who-uses-process-capability)
- [Examples](#examples)

## Why Process Capability

"We hit the SLO last quarter" is necessary but not sufficient. Capability tells you whether you'll continue to hit it without heroic intervention.

- Quantifies headroom — Cpk 2.0 means the SLO is hit even with rare excursions.
- Distinguishes "capable" from "lucky" — Cpk < 1 with apparent SLO compliance means trouble ahead.
- Targets improvement — Cpk gains require either centering the mean (μ) or reducing variation (σ).
- Translates engineering reality into a single number leadership can track.

**Real example:** A customer claimed "we meet our 200ms P99 SLO." Capability analysis: μ = 178ms, σ = 22ms, USL = 200, Cpk = 0.33. They were *not* capable; the recent month had been lucky. Three months later a routine load increase pushed P99 past 200ms for two consecutive weeks. The Cpk number had predicted it.

## What Capability indices are

For a CTQ with spec limits LSL and USL:

| Index | Formula                                          | Meaning                                  |
| ----- | ------------------------------------------------ | ---------------------------------------- |
| Cp    | (USL − LSL) / (6σ)                               | Potential capability if mean is centered |
| Cpk   | min((USL − μ)/(3σ), (μ − LSL)/(3σ))              | Actual capability accounting for centering |
| Pp / Ppk | Same but using overall σ instead of within-σ  | Long-term performance                    |

Interpretation rule of thumb:

| Cpk      | Interpretation                                                      |
| -------- | ------------------------------------------------------------------- |
| < 1.0    | Not capable — defects expected at normal operation.                 |
| 1.0–1.33 | Marginally capable — survives only with vigilance.                  |
| 1.33–1.67| Capable — standard target for many specs.                          |
| 1.67–2.0 | Highly capable — comfortable margin.                                |
| ≥ 2.0    | Six Sigma — 3.4 defects per million opportunities (with shift).     |

Prerequisites:

1. **Stable process** — control chart shows in-control behavior.
2. **Normal distribution** (or transformed to one) for the standard formula. Heavy-tailed engineering metrics often need transformation or non-parametric capability.
3. **Defined CTQ** with USL / LSL.

## How to compute and use Capability

1. **Confirm stability** via control chart. Capability of an out-of-control process is meaningless.
2. **Test normality** (Anderson-Darling) or transform (Box-Cox) if needed. For heavy-tailed metrics like latency, consider percentile-based capability or non-parametric methods.
3. **Estimate μ and σ.** Use within-subgroup σ for Cp/Cpk; overall σ for Pp/Ppk.
4. **Compute Cp and Cpk.** Compare to thresholds.
5. **Decide action.**
   - Low Cpk because Cp is low → reduce variation (process improvement).
   - Low Cpk because mean is off-center → center the process.
6. **Track Cpk over time** as a leading indicator.

**Anti-pattern to avoid:** computing Cpk on non-stable processes. The number is fiction.

## When to use Process Capability

- Validating SLOs are achievable, not lucky.
- DMAIC Control deliverable.
- Quarterly platform-health reporting.
- Comparing services / teams against a common spec.

## Where Process Capability shows up

- Workbook / dashboard alongside control charts.
- DMAIC Control reports.
- SLO design discussions.
- WAF Reliability evidence.

## Who uses Process Capability

- **Belt project leads** — Control deliverable.
- **SRE leads** — fitness-for-purpose claims.
- **CSAs** — translate Cpk into customer-leadership language.
- **Statisticians / data engineers** — for the math when needed.

## Examples

### Example 1 — Latency Cpk

μ 178ms, σ 22ms, USL 200ms → Cpk 0.33. Not capable. Drove Kaizen on tail latency.

### Example 2 — Post-Kaizen Cpk

After Kaizen: μ 94ms, σ 8ms, USL 200 → Cpk 4.4. Six Sigma class. Sustained 6 months.

### Example 3 — Cost Cpk

Monthly variance spec ±5%. μ +0.8%, σ 1.4% → Cpk 1.0. Marginal; capacity for surprise.

### Example 4 — Error-rate Cpk

USL 0.5% → Cpk 1.91. Highly capable; allowed reducing alert ceiling without false-positive risk.

### Example 5 — AI groundedness Cpk

LSL 0.85; μ 0.91, σ 0.018 → Cpk 1.11. Marginal; prompt-improvement cycles targeted to lift μ.

### Example 6 — Centering vs. variation

Low Cpk diagnosed as off-center (mean drift after release). Centering action cheap; restored Cpk 1.5.

### Example 7 — Heavy-tailed P99

Standard formula meaningless. Used percentile capability (P99 of the P99 distribution). Switched to capability tracking on transformed log-latency.

### Example 8 — Capability over time

Quarterly Cpk plotted; gradual decline visible; pre-empted before SLO breach.

### Example 9 — Cross-service capability dashboard

14 services on one page sorted by Cpk; bottom 3 received DMAIC funding.

### Example 10 — Capability anchored Hoshin objective

Customer's annual breakthrough goal: raise platform average Cpk from 1.1 to 1.7. Translated into 9 [DMAIC](./dmaic.md) projects; year-end Cpk 1.68. The number drove the program.
