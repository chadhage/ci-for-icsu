[← Back to Index](./index.md)

---

# Project Charter

## TL;DR

A Project Charter is a one-page document that authorizes an improvement project and aligns its sponsor, lead, scope, success metric, timeline, and team *before* work begins. Standard sections: problem statement, business case, goal, scope (in / out), team, milestones, risks. For CSAs, the charter is the Define-phase deliverable of any [DMAIC](./dmaic.md) project, the pre-work artifact for any non-trivial [Kaizen](./kaizen.md), and the contract that prevents mid-project scope drift. Skip the charter and you optimize ambiguity; sign the charter and you can defend the scope months later when "could you also fix X?" arrives.

## Table of Contents

- [Why Project Charters](#why-project-charters)
- [What a Project Charter is](#what-a-project-charter-is)
- [How to write a Project Charter](#how-to-write-a-project-charter)
- [When to use a Project Charter](#when-to-use-a-project-charter)
- [Where Project Charters show up](#where-project-charters-show-up)
- [Who writes Project Charters](#who-writes-project-charters)
- [Examples](#examples)

## Why Project Charters

The most common improvement-project failure is scope drift — "while we're in there, can we also…". The charter is the answer to that.

- Forces explicit problem statement, goal, and scope before work starts.
- Locks sponsor commitment with a signature.
- Names the team and time commitment — half-resourced projects die.
- Defines success in measurable terms tied to [CTQ](./ctq.md) / [VOC](./voc.md).

**Real example:** A CSA was 6 weeks into a customer's "deployment improvement" with no convergence. Rewinding to write a proper charter revealed three sponsors with three different expectations. The charter exercise itself produced the alignment; the next 4 weeks shipped the actual project. The charter wasn't bureaucracy — it was the missing decision.

## What a Project Charter is

Typical one-page structure:

| Section              | Contents                                                  |
| -------------------- | --------------------------------------------------------- |
| Problem statement    | What's wrong, where, since when, magnitude                |
| Business case        | Why it matters now, $ or strategic value, COPQ link       |
| Goal                 | Specific, measurable, time-bounded                        |
| In scope             | What's included; tie to [SIPOC](./sipoc.md)              |
| Out of scope         | Explicit exclusions — at least 3                          |
| Team                 | Lead, sponsor, members, %time, advisors                   |
| Milestones / tollgates | Define-Measure-Analyze-Improve-Control dates            |
| Risks & dependencies | Top 3–5; mitigation owner                                 |
| Signatures           | Sponsor, lead, process owner                              |

Charters pair with:

- [SIPOC](./sipoc.md) for scope.
- [VOC](./voc.md) for problem statement validity.
- [CTQ](./ctq.md) for the goal's specification.
- [COPQ](./copq.md) for the business case.

## How to write a Project Charter

1. **Draft the problem statement first.** Specific. Where, when, how big. No solutions.
2. **State the business case.** Tie to dollars, customer commitment, or strategic objective ([Hoshin](./hoshin-kanri.md)).
3. **Set the goal.** SMART. Pulled from CTQ if available.
4. **List scope and explicit exclusions.** The exclusions are as important as the inclusions.
5. **Name the team and time commitment.** Realistic %-allocations.
6. **Set milestones with tollgate dates.** DMAIC tollgates if applicable.
7. **List top risks with mitigation owners.**
8. **Get signatures.** Sponsor, lead, process owner. Without these the charter is a wish list.

**Anti-pattern to avoid:** the charter that names a *solution* in the problem statement. "Deploy ArgoCD to improve deploys" prejudges Analyze. Restate as the problem.

## When to use a Project Charter

- DMAIC Define phase (mandatory).
- Kaizen events lasting 3+ days (pre-work).
- Any cross-team improvement project.
- Belt certification project (Green/Black).

Charters are usually overkill for:

- Same-day fixes.
- Standalone [PDCA](./pdca.md) cycles by a single engineer.

## Where Project Charters show up

- DMAIC Define tollgate.
- Kaizen day-0 wall.
- Belt program portfolios.
- iCSU CoP project registry.
- Customer engagement deliverables.

## Who writes Project Charters

- **Project lead** — primary author.
- **CSA / coach** — challenges and refines.
- **Sponsor** — signs; clears blockers.
- **Process owner** — receives the controlled process.

## Examples

### Example 1 — Cosmos cost project charter

Problem: chat-history $11.4K/mo, 412 429s/day, since Jan, growing. Case: $8K/mo COPQ + customer credits. Goal: <$3K/mo, 0 429s, 60 days. Out of scope: adjacent containers (future). Signed.

### Example 2 — Deployment LT charter

Problem: checkout LT 387 min, 4 deploys/wk vs. target 8/day. Goal: LT ≤90 min, 4 deploys/day, 90 days. Out: feature-flag platform changes.

### Example 3 — AKS reliability charter

Problem: ImagePullBackOff = 41% of incidents. Goal: zero of this signature, 90 days. Out: other failure signatures.

### Example 4 — AI agent eval charter

Problem: regressions detected 4 days after release. Goal: ≤1 hour detection. Out: training-data quality (separate project).

### Example 5 — Multi-sponsor surfacing

Charter exercise revealed 3 sponsors with 3 expectations. Single sponsor designated; project unstuck.

### Example 6 — Out-of-scope exclusion saves quarter

When stakeholder asked for "also fix X," charter's explicit "out of scope" closed the conversation in 2 minutes.

### Example 7 — COPQ-anchored business case

Charter tied to $310K/quarter COPQ. Funding approved same week.

### Example 8 — Risk mitigation surfaced

Top risk "DBA capacity" had mitigation owner. DBA pre-engagement happened before Analyze; no slip.

### Example 9 — Green Belt charter

Customer engineer's certification project. Charter reviewed at each tollgate. Belt awarded.

### Example 10 — Charter as portfolio gate

Customer made signed charter the prerequisite for any improvement-budget release. Half of past projects would not have passed the bar. Throughput on funded ones doubled.
