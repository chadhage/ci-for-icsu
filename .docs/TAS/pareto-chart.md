# Pareto Chart

> **Persona:** Technical Account Strategist · the technical roadmap  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

A Pareto chart ranks categories in descending order by impact (incident count, downtime, $, RU/s consumed) and overlays a cumulative percentage line so the 'vital few' causes driving ~80% of impact are immediately visible. It is the prioritization tool CSAs use for EBR/QBR prep, WAF reviews, cost optimization, and escalation triage—weight by business impact, not raw frequency.

## What You'll Gain

- Rank problems by business impact, not by count, so CSA hours land on the vital few
- Weight incident impact by downtime minutes or $ at risk, not by frequency
- Identify which Azure services, SKUs, or error codes drive the majority of spend or failure
- Visualize the 80/20 principle so leadership sees where effort should go
- Re-measure after remediation to validate the work and detect emerging problems

## The Concept, Explained

A Pareto chart is a bar chart sorted in descending order with a cumulative percentage line overlaid. The X-axis shows categories—incident signatures, error codes, resource types, customer workloads, root-cause classifications, Azure regions, or SKUs. The left Y-axis shows measured impact (ticket count, downtime minutes, RU/s consumed, $ spend, dropped messages, failed deployments). The right Y-axis shows cumulative percentage (0–100%). The bars are sorted descending; the cumulative line shows where the vital few categories reach ~80% of total impact.

The unit of measure matters more than the chart. Counting tickets weights a 5-minute glitch equal to a 6-hour outage. CSAs should weight by business impact: downtime minutes, $ at risk, customer-reported severity. A Pareto by incident count may show 'Flaky liveness probes' as the top bar; a Pareto by downtime minutes may show 'Regional outage' as the real driver—different data, different action priorities.

Workflow: frame the question precisely, pick the right data source (Kusto, Cost Management, Resource Health), choose the measurement unit and state it on the chart, define categories consistently, aggregate over 30–90 days, sort descending and compute cumulative %, identify the vital few bars left of the 80% line, drive engagement on those bars, and re-measure 30–90 days later to validate and detect new patterns.

## In the Field — Technical Account Strategist · the technical roadmap

A Technical Account Strategist uses a Pareto chart of the customer's incident data to settle where to start: three signatures account for 70% of incidents. Rather than spreading thin across twenty issues, the TAS focuses the next cycle on the vital few, and fixing the top signature alone removes nearly half the pain. It gives the customer's leadership a defensible sequence — working the 20% of causes driving 80% of impact — and replaces 'everything is urgent' with data-backed focus.

## Recap — Key Concepts & Takeaways

- Weight categories by business impact (downtime, $, severity), not raw count
- The vital few bars left of the 80% line receive engagement focus
- A Pareto by count differs from Pareto by downtime or spend—pick the right metric
- One-time Paretos are posters; re-measure 30–90 days later to validate and detect new patterns
- Pareto identifies 'which to fix first'; Ishikawa drills 'why it happened'

## Knowledge Check

### 1. A customer has 4,200 Azure Advisor alerts. How should you build the Pareto to prioritize CSA effort?

- **A.** Rank alerts in the order they appear in the Advisor list.
- **B.** Rank alerts by severity level alone, without considering business impact.
- **C.** Rank by weighted business impact ($ at risk, downtime minutes, secure-score gain) so the vital few high-impact alerts receive focus.
- **D.** Treat all alerts equally and work through them randomly.

**Correct answer:** C. Rank by weighted business impact ($ at risk, downtime minutes, secure-score gain) so the vital few high-impact alerts receive focus.

Raw alert count is misleading. A useful Pareto weights by **business impact**, not frequency. One $50K/month rightsizing matters more than 200 minor hardening tweaks.

### 2. Two Paretos: one ranked by incident frequency, one by downtime minutes. Why is the downtime-weighted version more useful?

- **A.** Because incident count is always wrong and should never be used.
- **B.** Because downtime-weighted Pareto reveals which failures actually impact SLA, not which occur most often.
- **C.** Because downtime is always more important than frequency.
- **D.** Because the downtime version requires less data.

**Correct answer:** B. Because downtime-weighted Pareto reveals which failures actually impact SLA, not which occur most often.

Frequency and impact are different dimensions. The **downtime-weighted Pareto** shows which failures drive SLA risk. A rare but catastrophic outage may matter more than 200 brief glitches.

### 3. A customer hands you 87 WAF findings to analyze. What should you push back on?

- **A.** Accept all 87 findings and treat them equally in the Pareto.
- **B.** Weight findings by severity × blast radius × business impact before charting, so the vital few driving 80% of risk are visible.
- **C.** Refuse to use Pareto because it oversimplifies complex findings.
- **D.** Recommend analyzing findings one at a time instead of charting.

**Correct answer:** B. Weight findings by severity × blast radius × business impact before charting, so the vital few driving 80% of risk are visible.

An 87-finding Pareto is a flat list disguised as prioritization. **Weight each finding** before charting to transform 87 items into a few vital findings that justify focused engagement.

### 4. A teammate says a service-cost Pareto must be wrong because monthly costs are still trending up. What should you explain?

- **A.** The Pareto is definitely wrong if costs are trending upward.
- **B.** A Pareto is a snapshot at a point in time. Use a run chart for trends; use Pareto to identify which services are worth optimizing.
- **C.** Cost growth proves no Pareto shape exists in the data.
- **D.** Rebuild the chart weekly to capture the upward trend.

**Correct answer:** B. A Pareto is a snapshot at a point in time. Use a run chart for trends; use Pareto to identify which services are worth optimizing.

A Pareto is a **snapshot of categorical impact at one time**, not a time-series. For trends, use a run chart. For prioritizing, use Pareto. Different tools, different questions.

### 5. After completing a Pareto-guided Kaizen, how do you validate success?

- **A.** Check that all 87 findings have been closed.
- **B.** Re-run the same Pareto query 30–90 days later to see if the top bars have shrunk and new patterns emerge.
- **C.** Count how many team members participated in the remediation.
- **D.** Measure total CSA hours and compare to original estimate.

**Correct answer:** B. Re-run the same Pareto query 30–90 days later to see if the top bars have shrunk and new patterns emerge.

Validation is **re-measurement**. Re-run the same query post-remediation. If the top bars shrink and the curve flattens earlier, the work is validated. Pareto → engagement → re-measure is the repeatable pattern.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
