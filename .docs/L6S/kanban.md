[← Back to Index](./index.md)

---

# Kanban

## TL;DR

Kanban — Japanese for "signboard" — is a visual workflow management system that limits work-in-progress (WIP) to expose bottlenecks and pull work through a value stream at a sustainable pace. Originating on Toyota's factory floor, it now underlies most modern engineering work-management tools (Azure Boards, GitHub Projects, Jira). For CSAs, Kanban is the operational complement to Pareto / Ishikawa / Kaizen: those tools *identify* the right work; Kanban *flows* it through to done. Use Kanban to manage CI cycle execution, incident response queues, modernization backlogs, customer onboarding pipelines, and your own engagement backlog. The headline mechanics — visualize work, limit WIP, manage flow, make policies explicit, evolve experimentally — apply equally to a 4-person SRE team and a 40-person platform org. Don't over-customize the board; don't ignore the WIP limits when the calendar gets uncomfortable — that's when they're working.

## Table of Contents

- [Why Kanban](#why-kanban)
- [What Kanban is](#what-kanban-is)
- [How to use Kanban](#how-to-use-kanban)
- [When to use Kanban](#when-to-use-kanban)
- [Where Kanban shows up](#where-kanban-shows-up)
- [Who should use Kanban](#who-should-use-kanban)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/kanban.html)

## Why Kanban

The most common cause of slow customer outcomes isn't technology choice or team skill — it's too much work in flight. Teams start everything and finish nothing; lead time blows out; every initiative is "in progress"; nothing measurably ships. Customers blame complexity, but Little's Law has a simpler explanation: lead time scales with WIP. Halve WIP and you halve lead time at the same throughput. Kanban operationalizes this for engineering work.

For CSAs, Kanban supports:

- Running CI cycles (see [intro.md](intro.md)) so each cycle's work actually completes rather than blurring into the next.
- Managing the WAF remediation backlog, the modernization backlog, the cost-savings backlog — without any of them stalling.
- Bringing visible flow to chaotic on-call / incident-response queues.
- Coaching customer teams who confuse "everyone is busy" with "we're delivering value."
- Managing your own CSA engagement backlog across accounts — the discipline applies inward as much as outward.

**Real example:** A CSA's customer had 14 platform-team initiatives in flight across 5 engineers. Nothing had shipped in 11 weeks. The CSA introduced a 3-column Kanban (Ready → Doing → Done) with a WIP limit of 5 on "Doing." Within 2 weeks, 4 initiatives finished. Within 6 weeks, 11 had shipped. The team's throughput hadn't changed; their *focus* had. The CSA didn't add capacity; they removed contention.

## What Kanban is

Kanban has six core practices (David Anderson's formulation):

1. **Visualize the work.** Every item is a card on a board. Columns represent stages in the value stream. Nothing is invisible.
2. **Limit work in progress.** Each stage has a maximum number of items it can hold. When the column is full, new work cannot enter — upstream stops or downstream finishes.
3. **Manage flow.** Watch lead time and throughput, not utilization. A board where each engineer is 100% busy *will* have long lead times.
4. **Make process policies explicit.** What does "Done" mean for this column? What is the definition of "Ready"? Who owns expediting? Write it down on the board.
5. **Implement feedback loops.** Daily standup, replenishment meeting (refill Ready from backlog), service delivery review (operational metrics), risk review (blockers and aging), strategy review (which work to take on at all).
6. **Improve collaboratively, evolve experimentally.** Change the policies based on data. This is PDCA (see [intro.md](intro.md)) applied to the board itself.

Core mechanics:

- **Pull, not push.** Downstream pulls when capacity opens; upstream cannot push.
- **Cards.** One per work item. Carry minimum metadata: title, type, age, blocker status, owner.
- **Swim lanes.** Horizontal divisions for work type (e.g., feature, defect, expedite) or service area.
- **Classes of service.** Standard, expedite, fixed-date, intangible. Each gets its own WIP allocation and policies.
- **WIP limits.** The fundamental constraint. Set per-column (and sometimes per-person). Initial values are guesses; tune via flow data.

Metrics:

- **Lead time** — submitted to delivered.
- **Cycle time** — started to delivered (subset of lead time).
- **Throughput** — items delivered per period.
- **Aging WIP** — how long current items have been in progress; surfaces stalls.
- **Cumulative Flow Diagram (CFD)** — stacked area chart of items per column over time; lead time and WIP are visible at a glance.

Kanban contrasted with Scrum: Kanban has no sprints, no fixed iterations, no roles, no estimates. Work flows continuously; cadence comes from review meetings, not commitment ceremonies. Many teams blend the two (Scrumban) — that is fine; the practices, not the labels, matter.

**Real example:** A CSA mapped the customer's "modernization" board: 38 items in "In Progress," none in "Done" for 4 months. Setting a WIP limit of 6 and adding an explicit "Definition of Done" per column produced 7 completions in the next 4 weeks. The team wasn't lazy; they were context-switching themselves to a standstill.

## How to use Kanban

1. **Map the actual workflow as columns.** Don't invent stages; reflect what really happens. Typical: Backlog → Ready → Doing → Review → Done. Add stages only when they correspond to real handoffs.
2. **Identify work types.** Feature, defect, tech debt, expedite, customer commitment. Different types may need different policies and WIP allocations.
3. **Set initial WIP limits.** A rule of thumb: WIP per column ≈ team size for the active "Doing" column. Lower is better; start tight, relax only if you measurably need to.
4. **Define "Ready" and "Done" per column.** Make the rules visible on the board. A card cannot move without meeting the next column's "Ready" criteria.
5. **Hold short, regular ceremonies.**
   - Daily standup: walk the board right-to-left (push to Done, then progress).
   - Weekly replenishment: refill Ready from Backlog based on capacity.
   - Biweekly / monthly review: lead time, throughput, blockers, policy changes.
6. **Track and surface aging.** Cards aging past expected cycle time get visual highlighting (color, age badge). Aging WIP is the leading indicator of trouble.
7. **Respect the limits when it hurts.** When a column is full and someone wants to start something new, the team's first instinct is to break the limit "just this once." That is the moment the limit is doing its work. Stop, finish something, then start.
8. **Evolve the board.** Lead time too long? Drop a WIP limit. New work type? Add a swim lane. Expedite chaos? Define an explicit expedite policy with its own (small) WIP. Run the board itself as PDCA.

**Anti-pattern to avoid:** the "digital paper" board — a Jira / Boards setup that exists but nobody looks at, with WIP limits set far above actual capacity. The visible board is the point.

## When to use Kanban

Use Kanban when:

- A team has continuous flow of incoming work (operations, on-call, support, platform).
- Lead time and throughput are the metrics that matter.
- Work items vary in size and predictability — Kanban handles variability better than fixed-iteration commitments.
- The team is small enough that a single board can show everything (or large enough that nested boards per team feed a portfolio board).
- The CSA is managing their own backlog across accounts.

Use in CSA workflows for:

- CI cycle execution — each cycle's work as a small Kanban.
- Modernization backlogs spanning many apps.
- WAF remediation tracking.
- Incident response queues and follow-up actions.
- Customer onboarding flows.
- Internal CSA practice — engagement intake, playbook contribution PR queue, escalations.

Do **not** use Kanban as:

- A substitute for *deciding* what work matters — use Pareto + value (see [pareto-chart.md](pareto-chart.md), [value.md](value.md)) for that. Kanban executes, it doesn't prioritize.
- A status-meeting prop. If the board only updates Monday morning before the call, it's theater.
- An excuse to never plan ahead. Kanban replaces fixed iterations, not foresight.

**Real example:** A CSA reflexively introduced Kanban for a customer whose actual problem was that nobody could decide which 6 of 87 WAF findings to fund. The board didn't help. The decision was made via Pareto-by-weighted-impact; *then* Kanban tracked the execution. Right tool, right phase.

## Where Kanban shows up

Common CSA surfaces:

- **Azure Boards** — most customers already have it; CSAs configure rather than introduce.
- **GitHub Projects** — natural choice for IaC- and PR-centric work.
- **Jira / Linear / Asana** — many enterprises; same patterns apply.
- **Physical boards** — still useful in war rooms, Kaizen events, and on-site workshops.
- **Workbook / Power BI dashboards** — for CFD, throughput, lead time trends.
- **Incident response Kanban** — ChatOps integrations turn an incident channel into a flow board.
- **Modernization wave boards** — one board per migration wave; columns reflect the migration value stream (see [value-stream.md](value-stream.md)).
- **CSA engagement portfolio** — a CSA's own multi-account work as a personal Kanban with classes of service.

**Real example:** A CSA replaced their account's "status spreadsheet" with a 5-column Kanban in Azure Boards (Backlog → Ready → Doing → Validating → Done) per account, with a portfolio-level board rolling them up. The weekly status meeting collapsed from 90 minutes of recap to 30 minutes of decisions: what to pull next, what's blocked, what aged. The CSA reclaimed an hour a week and the customer leadership saw flow, not narrative.

## Who should use Kanban

- **CSAs** — manage CI cycle execution and personal engagement backlog; coach customer teams.
- **Customer engineering / platform teams** — primary users; own the board, the WIP limits, and the policies.
- **Customer SRE / on-call** — incident response and follow-up actions flow through a dedicated Kanban.
- **Customer product / program managers** — consume CFD and throughput as planning data.
- **Customer leadership** — consume the portfolio-level board; resist the urge to push WIP higher.
- **Domain CSAs** — bring service-specific definition-of-done patterns (e.g., AKS deployment readiness, Cosmos performance acceptance).
- **CSA managers** — apply Kanban to the practice itself (intake, playbook contributions, escalations).

Kanban fails when leadership treats WIP limits as soft suggestions. The whole system depends on the limits being respected.

## Examples

### Example 1 — Platform team Kanban (basic)

Initial state: 14 items "in progress," 5 engineers, 11 weeks since last shipment.

Board:

| Backlog | Ready (WIP 4) | Doing (WIP 5) | Review (WIP 3) | Done |
| ------- | ------------- | ------------- | -------------- | ---- |

Result after 6 weeks: 11 shipments; average lead time 18 days (vs. previously unmeasurable). No new headcount.

### Example 2 — Incident response Kanban

Columns: New → Triaged → Active → Mitigated → Postmortem → Closed.

WIP limits: Triaged (3), Active (2), Postmortem (5).

Classes of service: standard, expedite (SLA risk), fixed-date (compliance).

Policy explicit on board: Active limit of 2 forces on-call to choose between current and incoming Sev B; expedites bypass via dedicated lane with cap of 1.

Outcome: MTTR -28% over 90 days; postmortem completion rate from 41% to 88% (the Postmortem column's WIP limit forced completion instead of accumulation).

### Example 3 — WAF remediation Kanban

87 findings prioritized by weighted-impact Pareto (see [pareto-chart.md](pareto-chart.md), Example 8). Top 12 pulled into a dedicated Kanban.

Columns: Funded → Designing → Implementing → Validating → Closed.

WIP per column: 3 / 3 / 3 / 5.

Outcome: 11 of 12 closed in one quarter; one re-prioritized after better data. The 75 deferred findings explicitly stay out of WIP; the customer's leadership made the call.

### Example 4 — Modernization wave Kanban

40 apps in a migration wave. Each app is a card.

Columns: Discovery → Architecture → IaC → Cutover → Validated → Done.

WIP per column: 4 / 3 / 5 / 2 / 3.

CFD over 6 months shows steady throughput, no growing pile in any column — the WIP limits keep the wave flowing. Without them, prior waves accumulated 30+ apps stuck in "Architecture" review.

### Example 5 — CSA personal Kanban

A CSA managing 6 accounts uses a personal Kanban:

| Account backlog | This week (WIP 5) | Doing (WIP 3) | Waiting on customer | Done |
| --------------- | ------------------ | ------------- | -------------------- | ---- |

Class of service:

- Standard work (per-account roadmap items).
- Expedite (Sev B/C support).
- Intangible (skilling, internal CoP contributions).

Each class gets WIP allocation. The "Waiting on customer" column protects mental load — items aren't "in progress" if the CSA isn't blocking. Lead time for standard items dropped from 4.5 weeks to 12 days.

### Example 6 — Replenishment policy as the decision moment

A team's weekly replenishment meeting is the moment work enters Ready. Policy on the board:

- Ready can hold ≤ 4 items.
- Items pulled by Pareto-impact rank, not date or stakeholder pressure.
- Expedites bypass Ready directly into Doing (with dedicated WIP cap of 1).

Outcome: 12 weeks of measured data show 80% of throughput comes from the top quartile of Pareto-ranked items. Replenishment is the customer's most consequential meeting.

### Example 7 — Aging WIP as the leading indicator

A team's cycle time average was 9 days. The board highlighted any item aging past 9 days in yellow, 15 days in red.

Over a quarter: cards rarely turned red because yellow cards triggered swarming. Throughput rose 22% without WIP changes. Visibility on aging is its own intervention.

### Example 8 — CFD reveals a hidden bottleneck

Cumulative Flow Diagram showed a steadily widening band in the "Review" column over 5 weeks. The team had unconsciously turned Review into a pile — engineers preferred new work to reviewing peers'.

Action: policy change. No new "Doing" pull while own item is in Review aging > 2 days. CFD band narrowed within 2 weeks; lead time dropped by 4 days end-to-end.

### Example 9 — Kanban for the iCSU CI CoP itself

The CoP runs its playbook contribution flow as Kanban (see [ms-ci-cop.md](ms-ci-cop.md)):

| Draft submissions | Peer review (WIP 5) | Maintainer approval (WIP 3) | Merged |
| ----------------- | ------------------- | ---------------------------- | ------ |

Visible cycle time discourages PR rot; the contribution rate visibly correlates with playbook quality cycle over cycle. The framework eats its own dog food.

### Example 10 — When the WIP limit is violated

A team set Doing WIP at 5. In week 6, a VP asked an engineer to start a 6th "high priority" item.

The Kanban discipline:

- Surface the conflict on the board (red marker).
- Run the conversation: "Which of the current 5 will move to Blocked / Backlog to make room?"
- Make the trade-off explicit, not invisible.

The VP, seeing the actual list, picked a deprioritization rather than overload. The WIP limit functioned exactly as intended — it forced a decision that had been silently absorbed before.

This is the test of Kanban maturity. The board doesn't add value when limits are respected easily; it adds value when respecting them is uncomfortable.
