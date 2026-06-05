[← Back to Index](./index.md)

---

# Hoshin Kanri (X-Matrix)

## TL;DR

Hoshin Kanri (Japanese: *hōshin* "compass," *kanri* "management") — also called Policy Deployment — is the discipline of translating a small number of *breakthrough* strategic objectives into cascading annual and quarterly improvement projects, with explicit ownership and measurable progress at every level. The signature artifact is the **X-Matrix**: a one-page diamond linking long-term objectives (north), annual breakthrough objectives (south), top-priority improvement projects (west), KPIs/owners (east), and resource allocations. For CSAs, Hoshin Kanri is the right scaffolding when customer leadership wants CI to be *strategic*, not opportunistic — connecting [DMAIC](./dmaic.md) projects, [Kaizen](./kaizen.md) cycles, and Belt programs to outcomes leadership cares about.

## Table of Contents

- [Why Hoshin Kanri](#why-hoshin-kanri)
- [What Hoshin Kanri is](#what-hoshin-kanri-is)
- [How to run Hoshin Kanri](#how-to-run-hoshin-kanri)
- [When to use Hoshin Kanri](#when-to-use-hoshin-kanri)
- [Where Hoshin Kanri shows up](#where-hoshin-kanri-shows-up)
- [Who runs Hoshin Kanri](#who-runs-hoshin-kanri)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/hoshin-kanri.html)

## Why Hoshin Kanri

Most CI programs accumulate projects without a coherent narrative. Hoshin imposes one.

- Limits strategic objectives to *3–5* per cycle — focus over portfolio.
- Cascades from C-level down to team-level [A3s](./a3.md), traceably.
- Forces explicit owner + KPI per objective at every level.
- Replaces annual-planning theater with a living document refreshed quarterly.

**Real example:** A customer's platform org had 47 active improvement initiatives. None was tied to a measurable customer outcome. The CSA facilitated a Hoshin session that produced 3 annual breakthrough objectives (reliability, cost, time-to-onboard). The 47 were re-mapped: 18 supported one of the 3; 29 didn't and were paused or killed. Quarterly throughput on the surviving 18 doubled; year-end all 3 objectives met.

## What Hoshin Kanri is

The X-Matrix (one page, four-quadrant + linkages):

```
              [Long-term objectives 3-5 yr]
                          ↑
[Improvement projects] ← X-MATRIX → [KPIs + owners]
                          ↓
            [Annual breakthrough objectives]
```

Each quadrant lists 3–7 items; correlation marks (●, ○) link items across quadrants showing which project supports which objective owned by whom.

The Catchball process: objectives are *negotiated* up and down the org. Leaders propose; teams respond with feasibility; iterate. The cascade is not dictation.

Cascade layers (typical):

| Level         | Horizon    | Artifact                  |
| ------------- | ---------- | ------------------------- |
| Enterprise    | 3–5 yr     | Long-term objectives      |
| Division / BU | Annual     | Breakthrough objectives + X-Matrix |
| Team          | Quarterly  | Bowler chart + A3s        |
| Individual    | Monthly    | A3 / project commitments  |

Bowler chart: a simple table per KPI showing planned vs. actual per month, with red/green status — the operational dashboard of Hoshin.

## How to run Hoshin Kanri

1. **Define long-term objectives.** 3–5; truly strategic; explicit "breakthrough" character.
2. **Translate to annual breakthroughs.** What must be true this year to move toward the long-term?
3. **Identify supporting projects.** Each breakthrough → 1–5 projects (DMAIC, Kaizen, programs).
4. **Assign KPIs and owners.** Each project + each KPI has one accountable owner.
5. **Catchball.** Iterate with team leads — feasibility, capacity, dependencies.
6. **Publish the X-Matrix.** One page. Visible.
7. **Quarterly review.** Bowler charts; reds get attention; reds without a plan get escalation.
8. **Annual refresh.** Catchball again; reset.

**Anti-pattern to avoid:** Hoshin as a slide template. The discipline is in catchball and the quarterly bowler reviews, not in producing the artifact once.

## When to use Hoshin Kanri

- Annual planning for CI-mature orgs.
- Customer leadership wants strategic CI, not tactical.
- After portfolio overload (too many uncorrelated initiatives).
- When existing OKRs lack improvement-flavored objectives.

Hoshin is **not** for early-stage CI programs — establish [PDCA](./pdca.md) discipline and run a few [Kaizens](./kaizen.md) first. Hoshin formalizes what's already happening; it does not jumpstart it.

## Where Hoshin Kanri shows up

- Annual strategy artifacts.
- QBR / EBR review packs.
- Customer transformation programs.
- iCSU CoP planning at scale (see [ms-ci-cop.md](./ms-ci-cop.md)).

## Who runs Hoshin Kanri

- **Senior leadership** — owns long-term objectives.
- **Middle management** — owns breakthroughs and catchball.
- **Team leads** — own the bowler charts.
- **CSAs / coaches** — facilitate the process; insist on catchball.

## Examples

### Example 1 — 3-year reliability breakthrough

Long-term: industry-leading reliability. Annual: 99.95 across top-10 services. Projects: 6 DMAIC + 3 Kaizen + 1 SRE program. Year-end: 8 of 10 hit.

### Example 2 — Cost breakthrough

Annual: 25% reduction in IaaS spend without service degradation. Projects: Cosmos HPK, AKS rightsizing, reservation purchases, lifecycle policy. Year-end: 28% achieved.

### Example 3 — Time-to-onboard

Annual: customer time-to-first-value from 4 weeks to 1. Projects: SIPOC + VSM + automation + standard work + docs. Achieved Q3.

### Example 4 — Catchball reshapes objective

Leadership proposed "100% automation." Teams catchballed back: "70% with quality" achievable; "100%" induces shortcut waste. Revised to 70%; achieved cleanly.

### Example 5 — X-Matrix as alignment dashboard

The one-page X-Matrix posted in every team room. Every standup ties work to it. Initiative-overload symptoms (context-switching, unfinished work) visibly fell.

### Example 6 — Bowler red triggers escalation

Q2 bowler red on reliability KPI; escalation produced funding for SRE hires. Without bowler the slip would have been Q4-visible.

### Example 7 — Killing 29 initiatives

Hoshin produced the explicit "not strategic" list. Saying no to 29 was the program's biggest single act of focus.

### Example 8 — Annual refresh learning

Year 1 breakthroughs missed mark on 1 of 3. Catchball year 2 surfaced that the missed objective needed a different cascade. Achieved year 2.

### Example 9 — Hoshin + Kaizen cadence

Customer ran one Kaizen event per Hoshin project per quarter. The two methods reinforced; Kaizen produced the proof, Hoshin provided the why.

### Example 10 — CSA practice Hoshin

CSAs ran Hoshin on their own practice: 3 long-term capability objectives. Used as the org's planning artifact; replaced disconnected OKRs.
