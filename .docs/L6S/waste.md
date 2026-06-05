[← Back to Index](./index.md)

---

# 8 Types of Waste

## TL;DR

The 8 Wastes (DOWNTIME — Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing) are Lean's checklist for spotting non-value-add activity in any system. For CSAs they translate cleanly to the Azure estate: Defects are incidents and failed deployments; Overproduction is over-provisioned RUs and idle VMs; Waiting is queue depth and stalled pipelines; Non-utilized talent is engineers stuck on toil; Transportation is unnecessary data egress; Inventory is stale environments and unused subscriptions; Motion is context-switching between portals and tools; Extra-processing is redundant approval gates and duplicate observability stacks. Use the 8 Wastes as a structured walk-through during cost optimizations, reliability reviews, and modernization assessments — every category surfaces a different class of opportunity, and most engagements only look at one or two.

## Table of Contents

- [Why the 8 Wastes](#why-the-8-wastes)
- [What the 8 Wastes are](#what-the-8-wastes-are)
- [How to use the 8 Wastes](#how-to-use-the-8-wastes)
- [When to use the 8 Wastes](#when-to-use-the-8-wastes)
- [Where the 8 Wastes show up](#where-the-8-wastes-show-up)
- [Who should hunt waste](#who-should-hunt-waste)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/waste.html)

## Why the 8 Wastes

Cost optimization engagements often look at only one waste — *Overproduction* (rightsizing) — and miss the larger picture. Reliability reviews often look at only *Defects* (incidents) and miss the *Waiting* (slow incident response loops) that turns minor defects into major outages. The 8 Wastes give the CSA a 360° lens: a structured way to walk an Azure estate and an engineering process and surface every class of waste, not just the one that's loudest.

Concretely, the 8 Wastes support:

- Cost optimization engagements that go beyond rightsizing into Inventory and Extra-processing.
- Modernization assessments that justify the new architecture by waste eliminated, not by buzzwords.
- Reliability reviews that include the process waste (handoffs, approval gates) not just the technical waste.
- Skilling and capability conversations grounded in *Non-utilized talent* — the most expensive waste of all.
- Customer self-assessments where the customer can walk their own estate using the same checklist.

**Real example:** A CSA was asked to find $200K/yr in savings on a customer's Azure estate. The first pass (rightsizing VMs and Reservations) found $90K. A structured 8 Wastes walk-through surfaced another $260K: 14 idle subscriptions (Inventory), 7 redundant observability stacks (Extra-processing), $40K/mo of cross-region data egress nobody had architected for (Transportation), and 3 FTEs spending 60% of their time on toil that automation could absorb (Non-utilized talent → reallocated to roadmap work). The waste lens unlocked 3x the original ask.

## What the 8 Wastes are

The DOWNTIME mnemonic, mapped to Azure / engineering contexts:

- **D — Defects.** Errors, incidents, failed deployments, rollbacks, dead-lettered messages, dropped events, broken health probes. Anything that has to be redone or recovered from.
- **O — Overproduction.** Producing more than is needed, sooner than is needed. Over-provisioned RU/s, idle VMs, oversized App Service plans, autoscale floors set too high, batch jobs running more often than the data refreshes.
- **W — Waiting.** Idle time. Pipelines waiting on manual approval, deployments waiting on capacity, engineers waiting on access requests, messages waiting in queues with insufficient consumers, customers waiting on a Sev B that's been open 9 days.
- **N — Non-utilized talent.** People assigned to work below their capability, or whose skills are blocked by toil. Senior engineers running manual deployments; data scientists waiting for environments; CSAs spending hours hand-formatting reports an automation could produce.
- **T — Transportation.** Unnecessary movement of *things*. Cross-region data egress, redundant data copies between Blob containers, moving logs from one observability stack to another, shipping code through a CI/CD that touches four runners when one would do.
- **I — Inventory.** Stuff sitting around. Stale environments, unused subscriptions, orphaned disks, abandoned dev/test resources, accumulated PR backlog, undeleted snapshots, dormant Service Bus topics.
- **M — Motion.** Unnecessary movement of *people*. Context-switching between 6 portals to triage one incident; CSAs jumping between 4 internal tools to assemble a status; engineers swiveling between Jira, GitHub, Teams, and Azure DevOps to track one work item.
- **E — Extra-processing.** Doing more work than the customer values. Triple-approval pipelines on dev resources; duplicate observability (Datadog + Azure Monitor + App Insights all collecting the same signals); WAF reviews that produce 200-page reports when 1 Pareto would do; redundant security scans on the same artifact.

Optional 9th — **Environmental / Underutilized Cloud Capability** is sometimes added: using a service well below its capability tier (e.g., Cosmos DB used as a key-value store with no indexing strategy), which is a CSA-relevant flavor of waste.

**Real example:** A CSA used the 8 Wastes as headers in a cost optimization readout. Each header had 2–3 specific findings. The customer's CFO said it was the first cost analysis they'd seen that "felt complete instead of like a list of VM sizes." The framework did the convincing.

## How to use the 8 Wastes

Treat it as a structured walk, not a brainstorm.

1. **Pick the scope.** A subscription, a workload, a team, a process. Don't try to apply all 8 across an entire enterprise in one pass.
2. **Walk each waste in order.** For each category, ask "where does this show up in scope?" Use Azure Resource Graph, Cost Management, Advisor, Defender, App Insights, and the customer's own engineering tooling as evidence sources.
3. **Quantify each finding.** $ / month, hours / week, incidents / month, downtime minutes, queue depth. Without a number, the waste is a story, not a target.
4. **Pareto-rank the findings.** Most engagements can address 3–5 wastes in a cycle; the rest go on the backlog.
5. **Tie each finding to a hypothesis.** "If we delete the 14 stale subscriptions (Inventory), we save $X/mo and reduce blast radius by N."
6. **Run PDCA on the top findings.** Standardize the elimination — via Policy, IaC, runbooks — so the waste doesn't grow back.
7. **Re-walk on a cadence.** Waste regrows. Quarterly walks catch the new instances before they compound.

**Anti-pattern to avoid:** treating waste hunting as a "find as many as possible" exercise. A list of 80 wastes is not actionable. 5 well-quantified, well-Pareto'd wastes drive change.

## When to use the 8 Wastes

Use the 8 Wastes when:

- Running a cost optimization engagement (the canonical use).
- Preparing a modernization business case (each waste category becomes a "why we change" point).
- Doing a reliability or operational review (process waste explains most slow incident response).
- Skilling / capability review (Non-utilized talent is the lead category).
- The customer's leadership asks "where are we wasting money / time / effort?"
- After a postmortem, to look beyond the immediate technical cause at the surrounding process waste.

Do **not** use the 8 Wastes when:

- The conversation needs to be about *adding* capability (the lens is reductive by design).
- The customer's culture treats "waste" as blame language — reframe as "optimization" or "improvement opportunities" first.
- A single, well-understood waste is already the focus — going through all 8 dilutes attention.

**Real example:** A CSA tried to walk the 8 Wastes during a Sev A incident bridge. Wrong moment. Two weeks later in the postmortem, the same walk produced 11 high-quality findings — including the *Waiting* and *Motion* categories that explained why MTTR was 6x the target.

## Where the 8 Wastes show up

Common CSA artifacts and surfaces:

- **Cost optimization readouts** — each waste as a section header, each finding with $ impact.
- **WAF Cost & Operational Excellence pillars** — the 8 Wastes map naturally; use them as the structuring lens.
- **Modernization business cases** — "current-state waste" vs. "target-state waste" by category.
- **Reliability postmortems** — extend technical root cause with the process wastes that amplified impact.
- **Skilling engagements** — Non-utilized talent is the lens for capability planning.
- **Internal CSA practice reviews** — the team's own engagement model is full of NVA (see [value.md](value.md)); the 8 Wastes are the diagnostic.

**Real example:** A CSA's modernization business case for moving from VMs to Container Apps was rejected by the customer's CFO as "buzzword-driven." The CSA rebuilt it as an 8 Wastes comparison — current-state vs. target-state — and the case was approved the next week. The framework gave the CFO the structure they needed to reason about the change.

## Who should hunt waste

- **CSAs** — lead the structured walk; quantify; Pareto.
- **Customer FinOps / SRE / platform leads** — own the data; will run the cadence between CSA visits.
- **Customer engineering leadership** — sponsor; sign off on the eliminations that touch process or org.
- **CSA managers** — apply the lens to the CSA practice itself.
- **Domain specialists** — bring deep knowledge (e.g., Cosmos partition-key waste, AKS node pool overproduction) into the walk.

Waste hunting fails when only the CSA looks. The customer's team must see the waste themselves to keep it from regrowing.

## Examples

### Example 1 — DOWNTIME walk on a single subscription

| Waste | Finding                                              | Impact / mo |
| ----- | ---------------------------------------------------- | ----------- |
| D     | 22% of AKS deployments rolled back due to bad probe  | 11 hr downtime |
| O     | Cosmos provisioned at 50K RU/s, P95 demand is 18K    | $8.4K       |
| W     | Pipelines wait avg 4h on a manual security approval  | 18 eng-days |
| N     | Senior SRE running manual cert rotations             | 12 hr/mo    |
| T     | $11K/mo cross-region egress between East/West US 2   | $11K        |
| I     | 14 stale subscriptions, no owner, $6.2K spend        | $6.2K       |
| M     | Incident triage requires 5 portals + 3 dashboards    | MTTR +40%   |
| E     | Datadog + App Insights collecting same signals       | $4.8K       |

Pareto top 3 funded: Cosmos rightsizing, egress redesign, observability consolidation. Combined recovery: $24.2K/mo + 12 hr SRE time.

### Example 2 — Defects on AKS

Sev B/C incident Pareto over 90 days surfaced under the *Defects* category:

- `ImagePullBackOff` (ACR public endpoint, kubelet not authenticated).
- Liveness probe too aggressive on Java cold start.
- OOMKilled — no container memory limits set.

Each is a defect = unplanned work. Eliminating them shrinks Sev B volume *and* the *Waiting* (on-call response time) it triggers.

### Example 3 — Overproduction on Cosmos

| Container         | Provisioned RU/s | P95 used | Waste $/mo |
| ----------------- | ---------------- | -------- | ---------- |
| `orders`          | 30,000           | 9,200    | $4.8K      |
| `events`          | 20,000           | 4,500    | $3.7K      |
| `audit`           | 10,000           | 1,100    | $2.3K      |

Action: enable autoscale, set max to 1.3 × P95. $10.8K/mo recovered without touching application code.

### Example 4 — Waiting (deployment pipeline)

A CI/CD pipeline averaged 6h end-to-end. Breakdown:

| Stage              | Active min | Waiting min |
| ------------------ | ---------- | ----------- |
| Build              | 8          | 0           |
| Unit tests         | 14         | 0           |
| Security scan      | 6          | 92 (queue)  |
| Manual approval 1  | 0          | 145         |
| Integration tests  | 22         | 0           |
| Manual approval 2  | 0          | 89          |
| Deploy             | 9          | 0           |

Of 6h, ~5h was Waiting. Action: auto-approve dev/test promotions; replace the second manual gate with policy-as-code; pool security-scan runners. End-to-end dropped to 75 min.

### Example 5 — Non-utilized talent

A platform team of 12 engineers logged time over 4 weeks:

| Activity                       | Hours | % |
| ------------------------------ | ----- | - |
| Toil (manual deploys, certs)   | 480   | 28% |
| Incident response              | 320   | 19% |
| Roadmap / engineering          | 540   | 32% |
| Meetings / coord               | 240   | 14% |
| Other                          | 120   | 7% |

Toil + reactive incident response = 47%. Action: automate top 3 toil items (cert rotation, deploy approvals, environment provisioning); shift incident burden via runbooks + auto-remediation. Roadmap capacity nearly doubled by the next cycle.

### Example 6 — Transportation (data egress)

A multi-region app inadvertently routed 60% of read traffic across regions due to a misconfigured Traffic Manager profile.

| Region | Egress / mo | $ / mo |
| ------ | ----------- | ------ |
| East US 2 → West US 2 | 12 TB  | $1,030 |
| West US 2 → East US 2 | 9 TB   | $773   |
| AKS pod-to-pod across zones (intra-region) | 4 TB | minimal |

Action: corrected routing; added Front Door with origin affinity. $1.8K/mo recovered + P95 latency improved 80ms.

### Example 7 — Inventory (subscription sprawl)

Tenant-wide Resource Graph query surfaced:

| Inventory finding | Count | $ / mo |
| ----------------- | ----- | ------ |
| Subscriptions with <$10/mo spend, no owner tag | 14 | $620 (themselves) |
| Unattached managed disks | 87 | $1,100 |
| Snapshots > 180 days old, no policy | 412 | $940 |
| Public IPs not associated | 23 | $180 |
| Idle App Service plans | 9 | $1,420 |

Action: lifecycle policy on snapshots; ownership tag enforcement at MG scope; quarterly subscription review. $4.3K/mo + reduced blast radius + lower security review surface.

### Example 8 — Motion (operator context-switching)

An on-call engineer's incident triage required jumping between: Azure Portal, App Insights, Datadog, ServiceNow, GitHub, Teams, the customer's runbook wiki, and the CMDB. Average context switches per incident: 38.

Action: built a single Workbook (App Insights + Resource Graph + Service Health) that surfaced the top 90% of triage data on one pane; runbook links inline; integrated ServiceNow ticket creation. Switches/incident dropped to 9; MTTR -34%.

### Example 9 — Extra-processing (redundant observability)

The customer ran Azure Monitor, Application Insights, Datadog, and Splunk. 80% of metrics and logs were duplicated across at least two stacks.

| Stack         | $ / mo | Unique value |
| ------------- | ------ | ------------ |
| Azure Monitor | $4.2K  | Resource Health, Service Health |
| App Insights  | $6.1K  | App-level distributed tracing |
| Datadog       | $11.8K | Was the "primary"; mostly duplicate |
| Splunk        | $9.4K  | Security logs, compliance |

Action: kept App Insights + Splunk + minimal Azure Monitor for control-plane; retired Datadog; consolidated dashboards. $11.8K/mo recovered. Observability quality improved (one source of truth per signal type).

### Example 10 — Re-walk after 6 months

Same subscription as Example 1, re-walked.

| Waste | Original $/mo | Today $/mo | Δ |
| ----- | ------------- | ---------- | - |
| D     | 11 hr downtime | 2 hr | -82% |
| O     | $8.4K | $1.1K | -87% |
| W     | 18 eng-days | 4 | -78% |
| N     | 12 hr SRE | 3 hr | -75% |
| T     | $11K | $1.2K | -89% |
| I     | $6.2K | $0.8K | -87% |
| M     | MTTR +40% | baseline | resolved |
| E     | $4.8K | $0 | resolved |

The 8 Wastes lens is also the validation lens. Re-walk closes the PDCA loop.
