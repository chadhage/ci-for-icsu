# Value

## TL;DR

Value is anything the *customer* is willing to fund — and crucially, anything they would notice and complain about if it stopped. Every other activity in an engagement is overhead, rework, or waste. For CSAs, defining value precisely is the move that separates engagements that justify themselves at renewal from engagements that produce a lot of motion and no outcome. Value is always stated in the customer's terms (revenue protected, downtime avoided, $ saved, time-to-market reduced, secure-score gained, engineers unblocked) — never in CSA terms ("hours delivered", "decks produced", "meetings held"). When you can't name the value of an activity in the customer's vocabulary, that's the signal to stop, redesign, or hand it off.

## Table of Contents

- [Why Value matters](#why-value-matters)
- [What Value is](#what-value-is)
- [How to define and measure Value](#how-to-define-and-measure-value)
- [When to apply Value thinking](#when-to-apply-value-thinking)
- [Where Value shows up](#where-value-shows-up)
- [Who should own Value](#who-should-own-value)
- [Examples](#examples)

## Why Value matters

A CSA's calendar will fill itself with low-value work — recurring status meetings, opinionated architecture debates, exploratory pilots that never ship, decks rewritten for new stakeholders. Without an explicit value lens, the engagement looks busy and produces nothing the customer will defend at renewal. With a value lens, every activity is challenged against "what would the customer pay for this if billed?", and the calendar reshapes around the small set of work that actually moves the customer's business.

Concretely, value clarity supports:

- Renewal conversations grounded in measured customer outcomes, not activity logs.
- Saying "no" (or "later") to low-value requests without damaging the relationship.
- Justifying CSA hours to your own management — outcomes, not effort.
- Choosing which 2 of 20 WAF findings to fund first.
- Avoiding the "consulting trap" of producing artifacts the customer doesn't operationalize.

**Real example:** A CSA realized 40% of their time on a strategic account went to a weekly 90-minute "architecture sync" that produced no decisions and no actions. They proposed replacing it with a 30-minute biweekly decision review tied to a backlog of measurable outcomes. The customer agreed immediately — they had been attending out of inertia too. The reclaimed time funded a Cosmos partition-key redesign that cut RU spend by $18K/month. The math of "what is the customer willing to fund?" got obvious once the activity was named.

## What Value is

Value has three useful framings for CSAs:

- **Customer-defined.** Value is what the customer would pay for. If the customer doesn't see it, hear about it, or measure it, it isn't value to them — regardless of how virtuous the activity feels internally.
- **Outcome-shaped, not output-shaped.** "Delivered the WAF assessment" is an output. "Reduced unplanned downtime by 40% over 90 days" is an outcome. Outcomes are value; outputs are sometimes the *means* to value but are never the value themselves.
- **Value vs. non-value-add vs. necessary non-value-add.** Lean separates activities into three buckets:
  - **Value-add (VA):** transforms the product/service in a way the customer would pay for (e.g., implementing zone redundancy on the order service).
  - **Non-value-add (NVA):** pure waste; should be eliminated (e.g., re-formatting the same data for the fifth stakeholder).
  - **Necessary non-value-add (NNVA):** required by compliance, contract, or org reality but doesn't directly create value (e.g., the SOC 2 evidence collection). Cannot eliminate; should be minimized.

A healthy engagement is mostly VA, deliberately small NNVA, and continuously eliminates NVA. Most engagements that go off the rails are NVA-heavy without anyone noticing.

**Real example:** During a 6-week engagement audit, a CSA classified their last 90 days of activities:

| Bucket | % time | Examples                                              |
| ------ | ------ | ----------------------------------------------------- |
| VA     | 38%    | IaC PRs, RU/s reduction, AKS upgrade automation       |
| NNVA   | 22%    | Internal status reports, mandatory training, ICM      |
| NVA    | 40%    | Redundant status meetings, duplicate decks, re-explaining the same architecture to new attendees |

The 40% NVA was the recovery opportunity. Half of it went away within a month by consolidating meetings, posting a canonical architecture page, and pre-recording the "onboarding overview" the CSA had been delivering live to every new customer stakeholder.

## How to define and measure Value

1. **Ask the customer what they would defend at renewal.** Not what they enjoy — what they would fight to keep if the engagement were cut in half. That answer is the value spine of the engagement.
2. **Translate to measurable terms.** "We need better reliability" becomes "P95 latency on the checkout API < 400ms" or "Sev B incidents on AKS < 5/month". Without a number, value cannot be measured.
3. **Tag every activity with a value link.** Every recurring meeting, every deliverable, every workshop should be one click away from the customer outcome it serves. If you can't draw the line, the activity is suspect.
4. **Audit periodically.** Quarterly, classify the last 90 days into VA / NNVA / NVA. The shape tells you whether the engagement is healthy.
5. **Quantify in customer currency.** $ saved, downtime avoided (in minutes × cost-per-minute), engineer-hours unblocked, time-to-market shortened, secure-score points gained, RU/s recovered, customers retained, NSAT delta.
6. **Use Pareto on value too.** Most of the value comes from a small fraction of activities. Lean into them; deprioritize the rest.
7. **Report value at the cadence the customer cares about.** EBR / QBR is the standard surface; one slide of "value delivered this quarter, in your terms" is worth more than 30 slides of activity.

**Anti-pattern to avoid:** measuring value as "how busy I was" or "how many tickets I closed." Activity is not value.

## When to apply Value thinking

Apply the value lens:

- At engagement intake — before scope is set, define the value spine.
- Every quarter — re-baseline against the customer's current priorities, which shift.
- Before adding any recurring meeting or deliverable — would the customer fund it?
- During cost optimization engagements — every $ saved is value, every $ spent on the engagement that doesn't drive savings is overhead.
- During modernization — value is "what the new architecture enables", not "we used the new service".
- When the engagement feels busy but not productive — that feeling is the trigger.

Do **not** wield value framing as:

- A way to dismiss customer requests you simply don't want to do.
- A theoretical purity test that paralyzes the engagement.
- A justification for skipping NNVA that is actually required (compliance, security review, etc.).

**Real example:** A CSA's customer asked for a Power BI dashboard summarizing weekly Azure spend. The CSA's first instinct was "this is reporting, not value." Reframed: the customer's CFO used the dashboard to approve consumption commitments. The dashboard was directly upstream of $1.2M in funded modernization. It was high-value NNVA, not waste. Value thinking is context-sensitive.

## Where Value shows up

Common CSA surfaces:

- **EBR / QBR decks** — lead slide is always value delivered, in customer terms.
- **Engagement charters** — value statement is the first paragraph, before scope.
- **Backlogs and roadmaps** — items are scored by value, not by effort or novelty.
- **Cost optimization reviews** — savings are the value; the recommendations are the means.
- **Modernization business cases** — the "why" is value (TTM, reliability, cost, capability); the "what" is the architecture.
- **Renewal / commitment conversations** — value delivered to date is the foundation; future value is the forward case.
- **Internal CSA performance reviews** — value delivered to customers should be the spine; activity is secondary evidence.

**Real example:** A CSA replaced their EBR "activity recap" slide with a "value delivered" slide: "$2.4M annualized cost savings, 71% reduction in Sev B incidents, 9-week reduction in feature time-to-market, 14-point secure score gain." The customer's CIO forwarded it to procurement as the basis to expand the Unified Support contract. Same engagement, different framing, different outcome.

## Who should own Value

- **CSAs** — translate customer language into measurable value statements; enforce the value lens on the engagement calendar.
- **Customer business sponsors** — the source of truth on what they would defend at renewal. CSAs validate value definitions against this person.
- **Customer engineering leadership** — owns the operational metrics that prove value.
- **CSA managers** — coach CSAs to lead with value in reviews; protect time spent on VA over NVA activity.
- **Account team (account exec, TSP, CSM)** — align on a single value narrative across the account.

Value clarity fails when the CSA defines it alone. The customer must agree, in writing, what counts.

## Examples

### Example 1 — VA / NNVA / NVA classification

90 days of CSA activity on a strategic account.

| Activity                                    | Bucket | Notes |
| ------------------------------------------- | ------ | ----- |
| Cosmos partition key redesign + IaC PR      | VA     | $18K/mo RU reduction validated |
| AKS Automatic migration pilot               | VA     | Reduced upgrade toil |
| Weekly 90-min architecture sync             | NVA    | No decisions; consolidated to biweekly |
| Defender for Cloud secure-score uplift work | VA     | +14 pts; compliance-relevant |
| Monthly internal CSA portfolio review       | NNVA   | Required; minimized to 30 min |
| Re-creating same deck for 3 stakeholders    | NVA    | Replaced with canonical page |
| Mandatory training                          | NNVA   | Required |
| Workshop on ACR best practices              | VA     | Validated by post-quiz + adoption |

Action: NVA eliminated or reduced; VA expanded; NNVA timeboxed.

### Example 2 — Value statement at intake

A new engagement begins with the customer's CTO. The CSA asks: "If we are cut in half in 12 months, what would you fight to keep?"

Answer: "Reliability of the checkout path during peak and the cost trend on AKS."

**Value statement:** "Sustain checkout availability ≥ 99.95% during peak and reduce AKS unit cost ($/transaction) by ≥ 25% over 4 quarters."

Every subsequent activity is traceable to one of those two outcomes. Activities that aren't are flagged.

### Example 3 — Translating vague to measurable

| Vague customer ask                        | Measurable value translation |
| ----------------------------------------- | ---------------------------- |
| "We need better reliability"              | P95 latency < 400ms on top 5 APIs; Sev B incidents < 5/mo |
| "We want to be more cloud-native"         | 80% of compute on managed PaaS by Q4; deployment frequency ≥ daily |
| "Cosmos is expensive"                     | $/1M operations down ≥ 40%; RU/s within 20% of P95 demand |
| "We need to be more secure"               | Defender secure score ≥ 75; zero secrets in App Settings |
| "Speed up our team"                       | Lead time for change < 24h; change failure rate < 10% |

The translation conversation is itself value-add — it forces alignment.

### Example 4 — Pareto of value

A CSA Pareto-ranked their engagement's value contributions over 4 quarters.

| Workstream                | $ value delivered | Cum % |
| ------------------------- | ----------------- | ----- |
| AKS rightsizing + Spot    | 1,800K            | 41%   |
| Cosmos HPK + indexing     | 950K              | 62%   |
| SQL serverless dev/test   | 600K              | 76%   |
| App Insights sampling fix | 350K              | 84%   |
| Storage lifecycle policy  | 240K              | 90%   |
| Other 12 items            | 430K              | 100%  |

Next year's plan focuses on extending the top 4 patterns to adjacent workloads; the 12 small items are deferred or handed off.

### Example 5 — Value report at EBR

One slide. Customer's terms. Quarter over quarter.

| Metric                       | Q1     | Q2     | Q3     | Q4     |
| ---------------------------- | ------ | ------ | ------ | ------ |
| Sev B incidents / mo         | 312    | 178    | 121    | 84     |
| Checkout P95 latency (ms)    | 612    | 489    | 401    | 348    |
| AKS $ / 1M transactions      | $4.20  | $3.60  | $3.10  | $2.85  |
| Defender secure score        | 58     | 71     | 79     | 88     |
| Deployment frequency / wk    | 2      | 5      | 9      | 14     |

The CSA's narrative is the customer's business getting better. No CSA activity counts appear anywhere on the slide.

### Example 6 — Killing a low-value deliverable

A 14-page "Azure architecture overview" was being regenerated each quarter for stakeholder onboarding. Cost: ~2 CSA days/quarter. Adoption: rarely read past page 3.

**Value test:** would the customer pay $X/quarter for this document? No.

**Replacement:** a 2-page diagram-first canvas in the customer's internal wiki, owned by the customer's tech lead, refreshed only when architecture changes. CSA time freed: ~8 days/yr → redirected to validated VA work.

### Example 7 — Necessary non-value-add, done well

The customer's compliance program requires monthly evidence collection for SOC 2. This is NNVA — required, not directly value-creating, cannot be eliminated.

**Optimize, don't eliminate:** the CSA automated evidence collection via Azure Policy + a Logic App writing to the GRC tool. Hours/month dropped from 6 to 0.5. The NNVA cost shrank; the freed time funded VA.

### Example 8 — Saying no with value framing

The customer's product team asked for a 3-day hackathon on Azure AI Foundry. Sounds fun, but the value spine of the engagement was reliability and cost.

**Reframing:** "This is high potential value, but it doesn't fit the current engagement's value statement. Let's add it to next quarter's scope if your business sponsor agrees, or run it as a separate FastTrack engagement so it doesn't displace the reliability backlog."

Outcome: the hackathon happened the next quarter, properly sponsored, with a defined value goal ("identify 2 product features to ship by Q+2"). Both engagements stayed value-coherent.

### Example 9 — Value-add hidden in NNVA framing

A CSA classified "incident response participation" as NNVA. A second look reframed it: the customer's CIO cited the CSA's incident-night presence as a top reason for renewing Unified Support. The activity *was* value — the customer measured it as such.

**Lesson:** value is what the customer values, not what fits the lean textbook bucket. Validate with the customer before classifying.

### Example 10 — Engagement graduation criterion

After 18 months, the engagement met its value statement: checkout availability sustained at 99.97%; AKS unit cost down 38%. The customer and CSA jointly decided that the engagement should *narrow* — fewer hours, focused on net-new initiatives, with the customer's team owning the now-standardized operating model.

**Why this is success, not loss:** the value was delivered and is sustainable without the CSA. The freed CSA capacity went to a new account where the value gap was bigger. Value-driven engagements are designed to make themselves smaller over time — the opposite of consulting that thrives on growing scope.
