[← Back to Index](./index.md)

---

# SIPOC

## TL;DR

SIPOC — **S**uppliers, **I**nputs, **P**rocess, **O**utputs, **C**ustomers — is a one-page, high-level process map drawn at the start of any improvement effort. It forces the team to agree on scope and boundaries before drilling into detail. The Process column lists 5–7 major steps; the four flanking columns list who provides what and who receives what. For CSAs, SIPOC is the right *first* artifact in a DMAIC Define phase, a Kaizen pre-work session, or any new engagement where the team can't yet agree on what they're improving. Build it on a whiteboard in 60 minutes with the people who do the work.

## Table of Contents

- [Why SIPOC](#why-sipoc)
- [What SIPOC is](#what-sipoc-is)
- [How to use SIPOC](#how-to-use-sipoc)
- [When to use SIPOC](#when-to-use-sipoc)
- [Where SIPOC shows up](#where-sipoc-shows-up)
- [Who should use SIPOC](#who-should-use-sipoc)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/sipoc.html)

## Why SIPOC

Most stalled improvement efforts fail not from bad analysis but from ambiguous scope. SIPOC nails scope down in a single page everyone can read.

- Aligns sponsors, engineers, and customers on what "this process" actually means.
- Surfaces hidden suppliers (upstream teams) and downstream customers ignored by the original problem statement.
- Provides the input list for a value stream map (see [value-stream.md](value-stream.md)) and the output list for a VOC exercise (see [voc.md](voc.md)).
- Anchors the Define phase of [DMAIC](./dmaic.md) and the pre-work for any [Kaizen](./kaizen.md).

**Real example:** A CSA's customer asked for a "deployment improvement project." The SIPOC revealed 3 upstream suppliers (security, DBA, network) and 2 downstream customer types (internal QA, external API consumers) the team had ignored. Half the lead time lived in handoffs to those suppliers. Scope re-set in one hour.

## What SIPOC is

Five columns, left to right:

| S — Suppliers          | I — Inputs              | P — Process (5–7 steps) | O — Outputs            | C — Customers           |
| ---------------------- | ----------------------- | ----------------------- | ---------------------- | ----------------------- |
| Who provides the inputs | What the process consumes | The high-level steps     | What the process produces | Who receives the outputs |

Rules:

- **Process column has 5–7 steps maximum.** More than 7 means too low-level; fewer than 5 usually means hidden steps.
- **Each output has a customer; each input has a supplier.** No orphans.
- **Suppliers and customers can be internal teams, external customers, or systems.** Be specific (the "Foo platform team," not "platform").
- **Boundaries first.** Pick the start trigger and the done state before drawing anything in between.

## How to use SIPOC

1. **Define start and end.** Trigger event in; success criterion out. Write both above the board.
2. **Process first.** Sticky-note the 5–7 highest-level steps. Resist detail.
3. **Outputs next.** What does each step / the whole process produce?
4. **Customers next.** Who receives each output? Internal, external, system.
5. **Inputs.** What does the process consume — data, approvals, artifacts, services?
6. **Suppliers.** Who provides each input?
7. **Walk it backwards with the team.** Read C → O → P → I → S aloud. Gaps and disagreements surface fast.
8. **Sign off and freeze.** SIPOC becomes the scope reference for the rest of the project.

## When to use SIPOC

- Starting any DMAIC project (Define phase artifact).
- Pre-work for a [Kaizen event](./kaizen.md).
- New engagement scoping with a customer.
- Onboarding a new team into an existing process.
- Resolving scope disputes between teams.

Do **not** use SIPOC when:

- A detailed VSM already exists and the team agrees on scope.
- The work is genuinely one-step (e.g., a single approval) — overkill.
- It becomes a substitute for actually walking the process (Gemba).

## Where SIPOC shows up

- Project charters (see [project-charter.md](./project-charter.md)).
- Kaizen day-1 wall.
- DMAIC Define tollgate review.
- Customer onboarding kits.
- Internal CSA practice — engagement intake template.

## Who should use SIPOC

- **CSAs** — facilitate; ensure boundaries are crisp.
- **Process owners** — own the result.
- **People doing the work** — primary contributors.
- **Upstream suppliers and downstream customers** — invited to validate.
- **Sponsor** — signs off on scope.

## Examples

### Example 1 — Deployment pipeline SIPOC

| S                              | I                          | P                              | O                  | C                  |
| ------------------------------ | -------------------------- | ------------------------------ | ------------------ | ------------------ |
| Dev team, Security, DBA, Net  | Code, secrets, schema, FW  | Build → Test → Scan → Approve → Deploy | Running service, audit log | End users, SecOps |

### Example 2 — Incident response SIPOC

Suppliers: monitoring, customer reports. Inputs: alert, ticket, telemetry. Process: Detect → Triage → Assemble → Mitigate → Postmortem. Outputs: mitigation, RCA. Customers: end users, leadership.

### Example 3 — Cosmos DB onboarding SIPOC

Surfaced that the "data team" was both supplier (partition-key advice) and customer (query results). Two distinct interactions with two SLAs; previously conflated.

### Example 4 — AI agent release SIPOC

Suppliers: prompt authors, eval team, model owners. Inputs: prompt, dataset, model version. Process: Author → Eval → Sign-off → Deploy → Monitor. Outputs: deployed agent, eval report. Customers: end users, compliance.

### Example 5 — Customer onboarding SIPOC

Revealed customer success, sales, legal, and IT each thought they owned step 3. Ownership clarified in 45 minutes.

### Example 6 — Cost optimization sprint SIPOC

Suppliers: cost-management API, owners. Inputs: cost data, tags. Process: Pareto → Diagnose → Implement → Measure → Standardize. Outputs: savings, policy. Customers: finance, eng leadership.

### Example 7 — Modernization wave SIPOC per app

One SIPOC per app, each ~1 hour. The same template across 40 apps surfaced 6 systemic supplier issues (e.g., DBA lead time on every app) the wave program addressed centrally.

### Example 8 — Postmortem improvement SIPOC

Process column went from 11 steps (low-level) to 5 (assemble → draft → review → publish → action). The 11-step view had hidden the absence of action tracking.

### Example 9 — Multi-team handoff SIPOC

Suppliers column listed 9 teams across 4 orgs. The exercise itself was the intervention — 5 teams had not known they were in the loop.

### Example 10 — SIPOC as engagement intake artifact

A CSA standardized SIPOC as the first deliverable of any new customer engagement. Average time-to-scope-agreement dropped from 3 weeks to 2 days; "scope creep" complaints fell to zero.
