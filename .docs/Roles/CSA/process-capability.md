# Process Capability (Cp, Cpk)

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Measurement & Control · **Delivery:** 30 min

## Executive Summary

Process capability quantifies how well a stable process meets its specification limits. Cp is potential capability; Cpk is actual capability accounting for centering. Convention: Cpk ≥ 1.33 = capable; ≥ 1.67 = highly capable; ≥ 2.0 = Six Sigma. A low Cpk on an in-spec process is an early warning: compliance is luck, not capability.

## What You'll Gain

- Distinguish between 'hitting the SLO last quarter' and 'capable of hitting the SLO'
- Use Cpk to predict whether the SLO will hold as load grows or variation increases
- Know how much headroom a service has: Is it Cpk 0.33 (at risk) or 1.67 (comfortable)?
- Identify whether to reduce variation (σ) or center the mean (μ) to improve capability
- Translate capability numbers into business-language risk statements for leadership

## The Concept, Explained

**Cp** = (USL − LSL) / 6σ measures potential capability assuming the process is centered. **Cpk** = min((USL − μ)/3σ, (μ − LSL)/3σ) measures actual capability accounting for whether the mean sits off-center. Convention: Cpk < 1.0 = not capable (defects expected at normal operation), 1.0–1.33 = marginally capable, 1.33–1.67 = capable (standard target), 1.67–2.0 = highly capable, ≥ 2.0 = Six Sigma (~3.4 defects per million opportunities with shift).

Prerequisites: (1) Stable process—confirm via control chart that special causes are removed. (2) Normal distribution—or transform via Box-Cox; heavy-tailed metrics like latency often need percentile-based capability or non-parametric methods. (3) Defined CTQ with upper/lower spec limits. Real example: customer claimed 'we hit our P99 latency SLO.' Capability analysis: μ = 178ms, σ = 22ms, USL = 200ms, Cpk = 0.33. Not capable—recent compliance is luck. Three months later, a routine load increase pushed P99 past 200ms; the Cpk had predicted it.

Improvement levers: Low Cpk because Cp is low? Reduce variation (process improvement). Low Cpk because mean is off-center? Center the process away from the nearer spec. Both levers deliver real capability gain.

## In the Field — CSA · Cloud Solution Architect

A CSA computes Cpk on an Azure Function App's execution time. Stable baseline (control chart verified): μ = 850ms, σ = 120ms, spec limit (SLO) = 1000ms. Cpk = (1000 − 850) / (3 × 120) = 0.42. Not capable. Analysis: a single database query on the hot path is consuming 700ms on average, with high variance. Countermeasure: add query result caching. Post-improvement: μ = 320ms, σ = 40ms, Cpk = 2.27 (highly capable). The CSA locks a new control chart at the improved baseline and sets up an alert if Cpk trends below 1.67, as an early warning before SLO breach.

## Recap — Key Concepts & Takeaways

- Cpk measures actual capability; Cp measures potential. Both require a stable process
- Cpk < 1.0 = not capable. Cpk ≥ 1.33 is the standard target; ≥ 2.0 is Six Sigma
- Low Cpk because σ is high? Reduce variation. Because μ is off-center? Center the mean
- Capability is a leading indicator: Cpk 0.33 with in-spec performance predicts future breach
- Compute Cpk in DMAIC Control, quarterly health reviews, and SLO design discussions

## Knowledge Check

### 1. What does Cpk measure that Cp does not?

- **A.** Long-term variation rather than short-term variation.
- **B.** Process centering — the actual capability accounting for whether the mean sits midway between spec limits.
- **C.** The total number of opportunities per million.
- **D.** Customer satisfaction scores against the spec.

**Correct answer:** B. Process centering — the actual capability accounting for whether the mean sits midway between spec limits.

Cp = (USL &minus; LSL) / 6&sigma; assumes the process is centered. **Cpk** = min((USL &minus; &mu;)/3&sigma;, (&mu; &minus; LSL)/3&sigma;) penalizes off-center processes, so it reflects real-world capability.

### 2. A customer says “we hit our P99 latency SLO last quarter.” Capability analysis shows Cpk = 0.33. What does that tell you?

- **A.** The SLO is being achieved with plenty of headroom.
- **B.** The process is not capable — recent compliance is luck and breaches are predictable as load grows.
- **C.** Cpk doesn’t apply to latency metrics.
- **D.** The customer should tighten the spec immediately.

**Correct answer:** B. The process is not capable — recent compliance is luck and breaches are predictable as load grows.

Cpk < 1.0 means the process is **not capable**. Hitting the spec is luck, not capability. The CSA’s job is to translate the number into “trouble ahead” before the next load increase causes a breach.

### 3. What rule-of-thumb Cpk value is the standard target for “capable”?

- **A.** Cpk &ge; 0.5
- **B.** Cpk &ge; 1.0
- **C.** Cpk &ge; 1.33
- **D.** Cpk &ge; 3.0

**Correct answer:** C. Cpk &ge; 1.33

Convention is **Cpk &ge; 1.33 = capable**; &ge; 1.67 = highly capable; &ge; 2.0 is the Six Sigma target (~3.4 defects per million opportunities with shift).

### 4. What is the key prerequisite for a Cpk calculation to be meaningful?

- **A.** The team must have at least one Black Belt member.
- **B.** The process must be stable — an in-control control chart is required first.
- **C.** The dataset must have at least 1,000 observations.
- **D.** The customer must have explicitly requested a Cpk number.

**Correct answer:** B. The process must be stable — an in-control control chart is required first.

Capability of an **out-of-control process is meaningless**. You need a stable process (via control charts) and defined CTQ spec limits before Cpk has any signal.

### 5. Cpk is low because the variation is wide and the mean sits near a spec limit. Which two improvement levers does this point to?

- **A.** Hire more engineers and run more tests.
- **B.** Reduce variation (&sigma;) and center the mean (&mu;).
- **C.** Loosen the spec and accept the variation.
- **D.** Increase sample size and recalculate.

**Correct answer:** B. Reduce variation (&sigma;) and center the mean (&mu;).

Cpk gains come from two levers: **reduce variation** (process improvement, narrow &sigma;) and **center the mean** (move &mu; away from the nearer spec limit). Both deliver real capability gain.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
