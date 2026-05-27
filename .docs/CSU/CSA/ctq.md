# Critical to Quality (CTQ)

## TL;DR

Critical to Quality (CTQ) trees translate qualitative customer needs (from [VOC](./voc.md)) into specific, measurable, achievable specifications. A CTQ has three elements: a **need**, a **driver** (the dimension of that need), and a **requirement** (target + spec limits). Without CTQs, customer needs stay too vague to engineer against. For CSAs, CTQs are the bridge between Define and Measure in [DMAIC](./dmaic.md) — and the input to control charts and [process capability](./process-capability.md) analysis. The discipline of CTQ writing is the moment fuzzy expectations become testable contracts.

## Table of Contents

- [Why CTQ](#why-ctq)
- [What CTQ is](#what-ctq-is)
- [How to build CTQs](#how-to-build-ctqs)
- [When to use CTQ](#when-to-use-ctq)
- [Where CTQ shows up](#where-ctq-shows-up)
- [Who writes CTQs](#who-writes-ctqs)
- [Examples](#examples)

## Why CTQ

"Reliable," "fast," "secure" are not engineering specs. CTQ converts them.

- Anchors measurement in customer language, not engineer convenience.
- Surfaces hidden trade-offs (faster usually means less consistent).
- Enables capability analysis — you can't compute Cpk without a spec.
- Aligns acceptance testing with customer reality.

**Real example:** A customer's "API must be fast" expectation was translated to: dimension = response time; CTY = P99 ≤ 800ms; LSL = 0, USL = 800ms; measurement = 5-min windows from synthetic probes. Before CTQ: 18 months of disagreement. After: a number, dashboard, and SLO.

## What CTQ is

A CTQ tree has three levels:

| Level       | Question                                | Example                          |
| ----------- | --------------------------------------- | -------------------------------- |
| Need        | What does the customer want?            | "Fast checkout"                  |
| Driver      | What dimensions express that?           | Response time, retries needed    |
| Requirement | Spec: target, USL, LSL, measure         | P99 ≤ 800ms over 5-min windows   |

Good CTQ requirements are:

- **Specific** — single dimension.
- **Measurable** — data already collected or collectable.
- **Achievable** — proven possible in similar systems.
- **Customer-relevant** — moving this moves customer satisfaction.
- **Time-bounded** — over what window?
- **Bounded** — USL, LSL, or both.

CTQs come in pairs with process capability work — they are the **specification limits** the [Process Capability](./process-capability.md) calculation uses.

## How to build CTQs

1. **Start from VOC quotes.** Cluster quotes into needs.
2. **Decompose each need into drivers.** Ask "what would be true if this need were met?"
3. **Specify each driver.** Target + spec limits + measurement window + data source.
4. **Test for SMART-ness.** Each CTQ should be specific, measurable, achievable, relevant, time-bounded.
5. **Validate with the customer.** Read back the CTQ; does it match the original need? If not, iterate.
6. **Feed forward.** CTQs become the success criteria in the [project charter](./project-charter.md), the metric for DMAIC's Measure phase, the spec for control charts, and the contract for handoff.

**Anti-pattern to avoid:** the engineer-written CTQ — "P99 ≤ 50ms" when the customer would accept 500ms. Setting CTQs above true customer need wastes capacity.

## When to use CTQ

- Define phase of every DMAIC.
- Setting SLOs / SLIs.
- Acceptance criteria for any change.
- Translating sales / leadership goals into engineering targets.

## Where CTQ shows up

- Project charters.
- SLO / SLA documents.
- Test acceptance criteria.
- Capability and control chart specs.
- AI agent eval rubrics (each metric a CTQ).

## Who writes CTQs

- **CSA + customer team** — co-author.
- **Product / customer success** — owns VOC source data.
- **Engineering** — validates achievability.
- **QA / SRE** — operationalizes measurement.

## Examples

### Example 1 — Latency CTQ

Need: fast page load. Driver: TTFB. Req: P99 TTFB ≤ 800ms, 5-min windows, last 7 days.

### Example 2 — Reliability CTQ

Need: reliable API. Driver: success rate. Req: ≥ 99.9% non-5xx over rolling 28 days.

### Example 3 — Cost CTQ

Need: predictable spend. Driver: monthly variance. Req: ≤ ±5% from forecast at month close.

### Example 4 — Deployment CTQ

Need: fast safe releases. Drivers: lead time, change failure rate. Reqs: LT ≤ 1 day P90; CFR ≤ 5% rolling 90 days.

### Example 5 — Cosmos CTQ

Need: query consistency. Driver: P99 RU consumption per query. Req: ≤ 12 RU P99.

### Example 6 — AI agent CTQ

Need: trustworthy answers. Drivers: groundedness, harmful content rate. Reqs: groundedness ≥ 0.85 mean; harmful ≤ 0.1%.

### Example 7 — Onboarding CTQ

Need: easy customer onboarding. Driver: time-to-first-value. Req: ≤ 1 hour from contract to working sample call, P90.

### Example 8 — Conflicting CTQs

Speed CTQ (P99 ≤ 200ms) and consistency CTQ (strong consistency) were genuinely in tension. CTQ work surfaced the trade-off explicitly; customer chose 400ms + strong consistency.

### Example 9 — CTQ as SLO

CTQs adopted verbatim as the customer's SLO suite. The SLO doc was the CTQ doc; reduced duplication and drift.

### Example 10 — CTQ refresh after VOC

Quarterly VOC refresh produced two updated CTQs (windows changed; thresholds tightened). Engineering targets refreshed without renegotiation.
