[← Back to Index](./index.md)

---

# Cost of Poor Quality (COPQ)

## TL;DR

Cost of Poor Quality (COPQ) quantifies what defects, rework, escapes, and missed opportunities cost the business. It's typically split into four buckets: **internal failure** (caught before release), **external failure** (caught by customers), **appraisal** (inspection/testing to catch defects), and **prevention** (work to avoid defects). Empirically, COPQ in unmeasured engineering orgs runs 15–40% of total spend — the unfunded "tax" of low quality. For CSAs, calculating COPQ is the single most effective way to *fund* CI work — once leadership sees the size of the tax, the prevention investment justifies itself. Use COPQ to make the business case for [DMAIC](./dmaic.md), [Kaizen](./kaizen.md), and reliability programs.

## Table of Contents

- [Why COPQ](#why-copq)
- [What COPQ is](#what-copq-is)
- [How to estimate COPQ](#how-to-estimate-copq)
- [When to use COPQ](#when-to-use-copq)
- [Where COPQ shows up](#where-copq-shows-up)
- [Who calculates COPQ](#who-calculates-copq)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/copq.html)

## Why COPQ

CI programs die when leadership sees them as costs, not investments. COPQ flips the framing.

- Quantifies the *current cost of not improving* — usually much larger than the cost of improving.
- Justifies prevention spend (training, automation, [Poka-Yoke](./poka-yoke.md)).
- Makes invisible work visible — rework hides in roadmaps as "v2," "remediation," "stabilization."
- Aligns finance and engineering on the same numbers.

**Real example:** A customer's CFO blocked further "DevOps investment." The CSA computed COPQ from incident hours, escaped-defect rework, and customer credits over the prior 12 months: $4.7M, or 22% of platform spend. The CFO funded a $600K prevention program the next quarter. Year-end COPQ fell to $1.9M. Net: $2.2M.

## What COPQ is

The four traditional buckets:

| Bucket            | Examples                                                                |
| ----------------- | ----------------------------------------------------------------------- |
| Internal failure  | Rework, scrap, failed builds, rolled-back deploys, flaky test reruns    |
| External failure  | Customer-found defects, incidents, escalations, SLA credits, churn      |
| Appraisal         | QA inspection, manual testing, audits, security reviews                 |
| Prevention        | Training, design reviews, automation, IaC modules, eval suites          |

Key insight: **prevention is the cheapest bucket per dollar of total COPQ reduced.** External failure is the most expensive per unit. The progression of a maturing org: external → internal → appraisal → prevention.

What COPQ does *not* include (and shouldn't):

- Normal operating cost of value-adding work.
- Strategic investments that are not quality-driven.

What is often miscategorized as "normal cost":

- Recurring rework cycles (treated as "v2 work").
- On-call hours absorbed into salaries.
- Manual testing labor on workflows that should be automated.

## How to estimate COPQ

1. **Pick a 12-month window.** Recent enough to be representative, long enough to smooth seasonality.
2. **Internal failure.** Rolled-back deploys × cost per rollback. Flaky test reruns × cost per run. Failed pipeline runs × engineer time.
3. **External failure.** Incident hours × loaded hour. SLA credits. Estimated churn revenue from quality events.
4. **Appraisal.** Manual QA time. Audit fees. Security review hours on changes.
5. **Prevention.** Existing training, IaC, automation labor.
6. **Sum and ratio to total spend.** Express as % to make it portable.
7. **Sensitivity check.** Halve / double assumptions; report a range. Defensibility matters more than precision.
8. **Tie reduction to specific [DMAIC](./dmaic.md) / [Kaizen](./kaizen.md) projects.** Each project should claim a piece of COPQ reduction.

**Anti-pattern to avoid:** false precision. COPQ ±20% beats no COPQ; a defensible range beats a fake exact number.

## When to use COPQ

- Funding any CI program at scale.
- Quarterly business reviews — show COPQ trend over time.
- Prioritizing among candidate projects (highest COPQ reduction wins).
- Onboarding skeptical sponsors.

## Where COPQ shows up

- Project charters (the "savings" line).
- QBRs / EBRs.
- Belt program funding proposals.
- Reliability and modernization business cases.

## Who calculates COPQ

- **CSA + finance partner** — primary authors; CSA brings engineering data, finance brings rate cards.
- **Sponsor** — accepts the methodology.
- **Process owners** — validate inputs from their domains.

## Examples

### Example 1 — Reliability COPQ

Incident hours × loaded rate over 12 months = $2.1M. Plus $400K SLA credits. External failure alone: $2.5M. Funded a $300K reliability program.

### Example 2 — Rollback COPQ

87 rolled-back deploys × 6 engineer-hours each × $150/hr = $78K. Plus $220K of estimated lost feature throughput. Justified pre-merge gates.

### Example 3 — Manual QA COPQ

12,000 manual test hours per year × $80 = $960K. Automation invested $300K; year-2 manual hours dropped 70%; net savings $370K year-2.

### Example 4 — Cosmos quality COPQ

429 errors → customer credits ($90K), engineer firefighting ($210K), churned tier-2 customer ($720K). $1.02M. Funded the HPK Kaizen series.

### Example 5 — Security review COPQ

Manual security review of every PR ≈ $640K/yr. Policy-as-code approach reduced manual review to exception cases; saved $470K/yr; preserved security signal.

### Example 6 — AI eval COPQ

Hallucination incidents → support hours + customer-credit refunds ≈ $310K/quarter. Eval suite + continuous eval prevention spend: $90K one-time + $40K/quarter. Net positive in cycle 1.

### Example 7 — Build pipeline COPQ

Failed/flaky CI runs cost ~$4 in compute + 20 min engineer wait. 9,000/yr × ~$70 effective = $630K. Test stability program halved it.

### Example 8 — Churn COPQ

Two annual churns traced to repeated quality events: $2.4M ARR. Single most expensive line in COPQ — and the one finance most readily accepted.

### Example 9 — COPQ-driven prioritization

12 candidate projects scored by COPQ reduction. Top 4 funded; others queued. Quarterly COPQ trend turned negative within 2 quarters.

### Example 10 — COPQ as standing metric

Customer adopted COPQ% as a board-level KPI. Year-over-year reduced 22% → 9% over 18 months; QBR narrative shifted from "we worked hard" to "we reclaimed $3.1M."
