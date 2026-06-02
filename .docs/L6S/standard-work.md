[← Back to Index](./index.md)

---

# Standard Work

## TL;DR

Standard Work is the *current best-known* way to perform a task — documented, taught, and followed — until a [PDCA](./pdca.md) cycle proves a better way and updates the standard. It is the *baseline against which improvement is measured*: without a standard, you can't tell whether a change improved or just varied. For CSAs, standard work is how [Kaizen](./kaizen.md) and [DMAIC](./dmaic.md) gains are codified into IaC modules, Policy, runbooks, templates, and agent prompts. The standard is not a static rulebook; it's a living artifact, owned, versioned, and explicitly designed to be replaced by its better self.

## Table of Contents

- [Why Standard Work](#why-standard-work)
- [What Standard Work is](#what-standard-work-is)
- [How to establish Standard Work](#how-to-establish-standard-work)
- [When to use Standard Work](#when-to-use-standard-work)
- [Where Standard Work shows up](#where-standard-work-shows-up)
- [Who owns Standard Work](#who-owns-standard-work)
- [Examples](#examples)

## Why Standard Work

Without a standard, every engineer reinvents the procedure. Variation explodes; defects follow; improvement is unmeasurable.

- Baseline for measurement — improvement requires a comparator.
- Reduces variation — fewer defects, narrower distributions, higher capability.
- Accelerates onboarding — new engineers run the standard, not their best guess.
- Carrier for [poka-yoke](./poka-yoke.md) — the standard embeds the mechanism.

**Real example:** A customer's 8-engineer AKS team each deployed cluster upgrades differently. MTTR for upgrade incidents averaged 4.2h with wide variance. The CSA led a Kaizen producing a single upgrade standard work doc + automation. Same-quarter upgrade MTTR: 38 min, near-zero variance. Speed and consistency together.

## What Standard Work is

Three components (Toyota's formulation):

| Component        | What it specifies                                         |
| ---------------- | --------------------------------------------------------- |
| Takt time        | Demand pace (see [takt-time.md](./takt-time.md))          |
| Work sequence    | Step-by-step procedure in the required order              |
| Standard WIP     | Items / state required to perform the procedure smoothly  |

Engineering translation:

- **Sequence** = the runbook, IaC module, pipeline definition.
- **Takt** = the SLO / SLA / release cadence.
- **Standard WIP** = the active items the standard assumes (e.g., 2 staging environments warm).

Forms standard work takes in CSA work:

- IaC modules with locked defaults.
- Azure Policy / Initiative assignments.
- Runbook templates and ChatOps payloads.
- Repo templates.
- Agent prompts with versioned, evaluated baselines.
- Onboarding curricula.

Versioning matters: the standard must be replaceable. Every PR that updates the standard is a [PDCA](./pdca.md) cycle made permanent.

## How to establish Standard Work

1. **Observe the current variations.** Don't write a standard from scratch; document what your best engineers do well.
2. **Choose the best-known.** Pick the variant with the best measured outcome.
3. **Document the sequence.** Numbered steps; explicit decision points; expected timings.
4. **Embed safeguards.** Poka-yoke anything that fails commonly.
5. **Pilot.** A small cohort runs it; iterate based on real friction.
6. **Train and deploy.** Everyone doing the work is trained; old variants retired.
7. **Plan the refresh.** Standard work without a refresh cadence ossifies.

**Anti-pattern to avoid:** the binder of standards nobody opens. Standards must be where the work happens — in the IaC module, the pipeline, the IDE — not in a wiki page.

## When to use Standard Work

- After every successful [Kaizen](./kaizen.md) / [PDCA](./pdca.md) — codify or lose the gain.
- Onboarding new teams or roles.
- After incidents where ad-hoc actions varied across responders.
- Wherever you want capability (Cpk) to improve.

## Where Standard Work shows up

- IaC modules (Bicep, Terraform).
- Azure Policy / Initiative.
- Pipeline templates.
- Runbooks and ChatOps payloads.
- Agent prompt libraries.
- Onboarding paths.

## Who owns Standard Work

- **Process owner** — the standard's accountable owner.
- **CSA / coach** — helps document and refresh.
- **Practitioners** — propose improvements via PR.
- **CoP** — promotes cross-team standards.

## Examples

### Example 1 — AKS upgrade standard

4.2h variable → 38 min near-constant. Codified as ChatOps `/upgrade` payload + pre-check playbook.

### Example 2 — Cosmos IaC module standard

HPK + autoscale + index policy locked in module. New containers inherit safe defaults.

### Example 3 — Incident response runbook standard

Standard payload auto-pages on-call with workbook link + last-deploy + last-config-change. MTTR -55%.

### Example 4 — Repo template standard

Repo template includes pre-commit hooks, lint, CI gates, README skeleton. Day-1 readiness baked in.

### Example 5 — Agent prompt standard

Versioned prompts with eval-suite link. PR template requires eval delta. Regression risk near zero.

### Example 6 — Onboarding standard

New CSA onboarding: 14 standard steps over 2 weeks, ownership of one playbook contribution. Time-to-productive cut from 11 weeks to 5.

### Example 7 — Cost-tag standard

Standard tag set enforced by Policy. Cost allocation arguments dropped to zero.

### Example 8 — Pipeline gate standard

Standard CI gate stack (lint, test, scan, infracost, perf budget). Every new pipeline inherits.

### Example 9 — Refreshed standard

Quarterly standard-work review found 2 of 14 modules stale; updated and re-rolled. Drift contained.

### Example 10 — Standard work as Kaizen deliverable

Every Kaizen readout deliverable list ends with "updated standard work." If not, the readout is rejected.
