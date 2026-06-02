[← Back to Index](./index.md)

---

# 6Ms

## TL;DR

The 6Ms — Man, Machine, Method, Material, Measurement, Mother Nature — are the canonical category set used to structure an [Ishikawa](ishikawa.md) diagram. For CSAs, the 6Ms are the discipline that forces the cause search beyond "code and config" into people, process, telemetry, and demand. Translated to the cloud: Man = people, skills, and on-call rotation; Machine = the Azure service, SDK, runtime; Method = process, queries, deployment flow; Material = configuration, data, IaC, dependencies; Measurement = observability, alerting, SLOs; Mother Nature = demand, time-of-day, external events. Use the 6Ms as a checklist during postmortems, WAF reviews, and reliability assessments — a problem that "lives" in only one category is rare; the realistic answer is usually 3+ Ms contributing simultaneously.

## Table of Contents

- [Why the 6Ms](#why-the-6ms)
- [What the 6Ms are](#what-the-6ms-are)
- [How to use the 6Ms](#how-to-use-the-6ms)
- [When to use the 6Ms](#when-to-use-the-6ms)
- [Where the 6Ms show up](#where-the-6ms-show-up)
- [Who should use the 6Ms](#who-should-use-the-6ms)
- [Examples](#examples)

## Why the 6Ms

Without a category checklist, root-cause conversations gravitate to the participants' specialties. Engineers blame configuration; SREs blame deployment process; on-call blames telemetry; product blames demand spikes. Each is partially right and almost always partially wrong. The 6Ms give every reviewer the same prompt — "is there a cause hiding in *this* category I haven't considered?" — and dramatically reduce the chance of fixating on the single category visible from the loudest seat at the table.

Concretely, the 6Ms support:

- Faster, fairer postmortems where causes spanning org / people / process surface alongside technical ones.
- WAF assessments that don't reduce to "buy more zones."
- Cost reviews that look past rightsizing to skills, process, and measurement gaps.
- Coaching customer engineers to broaden their cause hypotheses.
- A shared vocabulary across CSA, customer, and PG conversations.

**Real example:** A CSA-facilitated postmortem on a Sev B App Service outage was about to conclude with the action "raise the App Service plan SKU." The 6Ms checklist surfaced a *Measurement* gap (no alert on slot warm-up failures), a *Method* gap (deploys overlap with peak), a *Mother Nature* contributor (a marketing email shipped 90 minutes before the outage), and a *Man* gap (on-call rotation hadn't been briefed on the new release). The SKU was *not* the right action. The actual remediation was 4 small changes across 4 Ms; SKU stayed unchanged and cost was not raised.

## What the 6Ms are

The categories, in cloud / CSA vocabulary:

- **Man (People & Skills).** Who is operating the system? Are the right roles staffed? Is the on-call rotation trained on the latest changes? Is one SME the single point of knowledge? Is there a skills gap on a service the customer recently adopted (Foundry, AOAI, ACA, Cosmos HPK, AKS Automatic)?
- **Machine (Service & Runtime).** The Azure services and SDKs in play. SDK version. Service tier and SKU. Service limits. Known platform issues. Regional availability. Service-level health (Service Health, Resource Health, regional capacity).
- **Method (Process & Logic).** How is the work done? Deployment process, approval gates, query design, partition-key strategy, retry-and-backoff logic, rollout pattern (rolling / canary / blue-green), promotion model, incident response flow.
- **Material (Config, Data, IaC, Dependencies).** What goes *into* the system. Configuration values, secrets, IaC modules, image versions, container manifests, indexing policies, RU/s settings, NSGs, route tables, third-party dependencies, data schema.
- **Measurement (Observability & SLOs).** How is the system seen? App Insights, Azure Monitor, Log Analytics, dashboards, alerts, SLOs, traces, sampling rates, retention. The "absence of a signal" is itself a Measurement cause.
- **Mother Nature (Demand & Environment).** What is happening *around* the system. Traffic patterns, time-of-day, region peaks, marketing campaigns, upstream system bursts, holidays, weather (for IoT), regulatory events, customer behavior shifts, news cycles.

Some practitioners add **Management** as a 7th M for org / funding / strategy causes. For CSA work this is often where 5 Whys terminates (see [5-whys.md](5-whys.md) Example 9) — whether you call it a category or the deepest layer is preference.

**Real example:** A CSA's "6M cheat sheet" — taped to the postmortem template — surfaced the *Mother Nature* category in 8 of 12 postmortems over a year. The team had previously categorized demand spikes as "expected"; treating them as a cause candidate produced changes to capacity planning that prevented 3 likely incidents the next year.

## How to use the 6Ms

1. **Use the 6Ms as scaffold for an Ishikawa.** Each M becomes a branch. See [ishikawa.md](ishikawa.md) for the full mechanics.
2. **Walk every M, every time.** Even if the answer is "no contributor here, evidence X confirms." The discipline matters more than the volume.
3. **Translate to the audience.** "Man" is fine internally but reads as gendered to many audiences. Prefer "People & Skills." Use whichever vocabulary the room will engage with — the structure is what matters.
4. **Evidence each contributor.** "Possibly a demand spike" is not enough; pull the App Insights chart. Speculation is fine during brainstorm, evidence is required before action.
5. **Score the contribution.** Not all 6 Ms contribute equally. After evidence, mark each as primary, contributing, or non-contributing. Direct effort to primaries; remediate contributing causes opportunistically; document non-contributing ones as ruled out.
6. **Convert primaries to actions via 5 Whys.** The M categorizes; the 5 Whys deepens. Pair them.
7. **Re-walk the 6Ms on recurrence.** A second incident with the same symptom — re-walk *all six* before assuming the original cause is back. Often a new M is now in play.

**Anti-pattern to avoid:** treating the 6Ms as a fill-in-the-blank form. A box ticked with "N/A" without evidence is worse than no box — it signals the category was checked when it wasn't.

## When to use the 6Ms

Use the 6Ms when:

- Running an Ishikawa (the canonical case).
- Designing a postmortem template — make the 6 M's explicit headings.
- Doing a reliability / operational review — use 6 Ms to ensure the review goes beyond services.
- Onboarding a new on-call rotation — the 6 M's are the things they should be able to reason about during an incident.
- Coaching engineers who default to "code is the cause" thinking.

Use in CSA workflows for:

- Postmortems (with [5-whys.md](5-whys.md) per primary M).
- WAF reliability and operational excellence assessments.
- AI agent failure analysis (the 6 Ms map cleanly: prompt = Method, model = Machine, knowledge index = Material, eval = Measurement, query distribution = Mother Nature, on-call SME = Man).
- Customer skilling — teach the 6 Ms as the framework for incident thinking.

Do **not** use the 6 Ms when:

- The problem is genuinely one-dimensional and confirmed (e.g., known platform incident from Service Health).
- The conversation is about *prioritization* — Pareto is the right tool.
- The audience is allergic to frameworks; lead with the question, then introduce structure once they're engaged.

**Real example:** A CSA introduced the 6Ms in a customer's first postmortem template. Adoption was slow because engineers resented "process language." The CSA renamed categories to "People, Service, Process, Config, Telemetry, Demand" — same content, different vocabulary — and adoption hit 90% the next quarter.

## Where the 6Ms show up

Common CSA surfaces:

- **Postmortem templates** — 6 explicit category sections, each requiring evidence.
- **Ishikawa diagrams** — the default branch set.
- **WAF assessment readouts** — group findings by M so leadership sees the breadth of the gap.
- **Reliability scorecard reviews** — per service, walk the 6 Ms for current state and target state.
- **Customer skilling content** — the 6 Ms are the "how to think about an incident" lesson.
- **Internal CSA playbook intake** — the 6 M lens forces new engagements to look beyond the symptom the customer leads with.

**Real example:** A CSA's reliability scorecard for a strategic customer was structured by the 6 Ms across 5 services. The matrix made it instantly visible that *Measurement* was the org's weakest column across every service. The remediation roadmap pivoted from "fix this service" to "raise the observability floor everywhere," producing larger reliability gains for less investment.

## Who should use the 6Ms

- **CSAs** — facilitate; enforce evidence per M.
- **Customer engineering** — primary contributors to Machine, Method, Material.
- **Customer SRE / on-call** — primary contributors to Measurement and Method.
- **Customer product / business** — primary contributors to Mother Nature.
- **Customer platform / org leadership** — primary contributors to Man (and Management, if used).
- **Domain CSAs** — bring service-specific Machine and Material context.
- **CSA managers** — apply the 6 Ms to engagement-level retrospectives (Man = team composition; Method = engagement cadence; Material = playbook content; Measurement = NSAT and outcome metrics; Mother Nature = market shifts; Machine = tools and surfaces).

The 6Ms fail when the room is single-discipline. The categories were designed to reveal cross-discipline causes; one discipline can only fill its own branch.

## Examples

### Example 1 — Cosmos throttling (6M categorization)

Problem: "`orders` 429 spikes 09–10 UTC."

| M           | Contributor                                  | Primary? |
| ----------- | -------------------------------------------- | -------- |
| Man         | Cosmos SME on PTO; on-call untrained         | Contributing |
| Machine     | SDK 3.x not honoring Retry-After             | Contributing |
| Method      | Hot partition key (`tenantId` only)          | Primary  |
| Material    | Manual RU/s, no autoscale                    | Primary  |
| Measurement | No 429-rate alert; no RU/op dashboard        | Contributing |
| Mother      | EMEA peak window + marketing campaign        | Primary  |

Actions: HPK redesign (Method), autoscale (Material), capacity comms with marketing (Mother), upgrade SDK + add alerting (contributing). Three primary M's resolved → 429s eliminated; contributing M's resolved → recurrence prevented.

### Example 2 — AKS `ImagePullBackOff`

| M           | Finding                                            |
| ----------- | -------------------------------------------------- |
| Man         | No runbook on ACR auth; new engineers uninformed   |
| Machine     | Kubelet using token auth, not managed identity     |
| Method      | Image tags mutable; deploy races push              |
| Material    | ACR public endpoint, Basic SKU                     |
| Measurement | No alert on pull failure rate                      |
| Mother      | Friday 16:00 deploys coincide with image build job |

Action plan combines Method (immutable tags) + Material (private endpoint) + Machine (managed identity) + Measurement (alert) + Mother (re-time deploys). Five M's, five small changes, one durable fix.

### Example 3 — Front Door 502s

| M           | Finding                                            |
| ----------- | -------------------------------------------------- |
| Man         | Network SME left team; tribal knowledge lost       |
| Machine     | Front Door Standard SKU; rule capacity near limit  |
| Method      | Deploy uses slot swap during peak                  |
| Material    | Custom rule set has exception clause for cutover   |
| Measurement | Telemetry sampling hides 3% error spike            |
| Mother      | Release windows overlap with EU peak               |

Primary cause: Material (exception rule) + Method (peak deploys). Measurement gap is why it wasn't caught earlier. Man cause explains *why* nobody noticed the rule.

### Example 4 — Service Bus DLQ

| M           | Finding                                            |
| ----------- | -------------------------------------------------- |
| Man         | New consumer code by junior; no SME review         |
| Machine     | OOMKilled mid-batch                                |
| Method      | Handler not idempotent; no exponential backoff     |
| Material    | MaxDeliveryCount = 3                               |
| Measurement | No DLQ depth alert                                 |
| Mother      | Upstream 4x normal volume from a partner event     |

All 6 Ms contributing. The fix isn't single-M.

### Example 5 — AOAI throttling on RAG

| M           | Finding                                              |
| ----------- | ---------------------------------------------------- |
| Man         | Team unfamiliar with PTU sizing model                |
| Machine     | Single-region deployment                             |
| Method      | Embedding regen at peak                              |
| Material    | No semantic cache layer                              |
| Measurement | No token-rate dashboard                              |
| Mother      | New product feature drove 3x traffic                 |

Action: schedule regen off-peak (Method), add cache (Material), token dashboard (Measurement), PTU planning workshop (Man), multi-region rollout plan (Machine), capacity comms with product (Mother).

### Example 6 — Cost spike

| M           | Finding                                                  |
| ----------- | -------------------------------------------------------- |
| Man         | New engineer left VMs on over holiday                    |
| Machine     | App Insights ingestion 4x (telemetry pipeline behavior)  |
| Method      | Log statement at INFO escaped to prod                    |
| Material    | Storage lifecycle policy disabled by test                |
| Measurement | No budget alert at 80%                                   |
| Mother      | New DR region added by adjacent team                     |

Primary: Method (log) + Material (storage policy). Mother is real but funded. Measurement gap is why the spike wasn't caught at 80%.

### Example 7 — SLA miss

| M           | Finding                                                |
| ----------- | ------------------------------------------------------ |
| Man         | On-call rotated; no briefing on new release            |
| Machine     | Shared SQL elastic pool                                |
| Method      | Deploys overlap EU peak                                |
| Material    | No warming script after maintenance                    |
| Measurement | No per-region P95 dashboard                            |
| Mother      | Noisy neighbor on shared pool                          |

Pool isolation (Machine + Mother) is the primary fix; the rest are durability investments.

### Example 8 — Agent hallucination regression

| M           | Finding                                                |
| ----------- | ------------------------------------------------------ |
| Man         | On-call lacks agent context                            |
| Machine     | AOAI model auto-upgraded                               |
| Method      | Prompt simplified in PR #482                           |
| Material    | Knowledge index refresh missed                         |
| Measurement | Eval dataset stale; CI doesn't gate prompt PRs         |
| Mother      | User query distribution shifted                        |

Foundry / agent quality is a poster child for the 6Ms — all six contribute simultaneously and frequently.

### Example 9 — Engagement retrospective (CSA practice)

| M           | Finding                                                |
| ----------- | ------------------------------------------------------ |
| Man         | New CSAs onboard via shadowing only                    |
| Machine     | Tools fragmented across 5 surfaces                     |
| Method      | No standard 30-day intake                              |
| Material    | Playbook outdated on AI / Foundry                      |
| Measurement | NSAT measured at 6 mo; too late to course-correct      |
| Mother      | Customer expectations shifted post-AI launches         |

Re-baseline: standardize intake (Method), refresh AI playbook (Material), 30-day pulse (Measurement), onboarding revamp (Man). The 6Ms work inside Microsoft too.

### Example 10 — Reliability scorecard by 6M

A CSA built a 5-service × 6-M reliability matrix for a customer.

|              | Checkout API | Orders | Catalog | Search | Notify |
| ------------ | ------------ | ------ | ------- | ------ | ------ |
| Man          | OK           | OK     | OK      | OK     | Gap    |
| Machine      | OK           | OK     | OK      | OK     | OK     |
| Method       | OK           | OK     | Gap     | OK     | Gap    |
| Material     | OK           | Gap    | OK      | OK     | OK     |
| Measurement  | Gap          | Gap    | Gap     | Gap    | Gap    |
| Mother       | OK           | OK     | OK      | OK     | OK     |

Visual pattern: *Measurement* is a gap across every service. The roadmap pivots from per-service fixes to an observability program covering all services — same investment, broader return.
