[← Back to Index](./index.md)

---

# FMEA

## TL;DR

FMEA — **F**ailure **M**ode and **E**ffects **A**nalysis — systematically anticipates how a process or product can fail, scores each failure mode on **Severity × Occurrence × Detection** to produce a **Risk Priority Number (RPN)**, and drives mitigations on the highest-RPN items first. Developed for aerospace and adopted across automotive (AIAG), FMEA is the structured cousin of "what could go wrong?" For CSAs, FMEA is the right tool before a high-stakes deployment, a new architecture, or a [Poka-Yoke](./poka-yoke.md) design session — and as a recurring practice for AI systems where failure modes evolve. Use it inside [DMAIC](./dmaic.md) Analyze or as a standalone risk artifact.

## Table of Contents

- [Why FMEA](#why-fmea)
- [What FMEA is](#what-fmea-is)
- [How to run FMEA](#how-to-run-fmea)
- [When to use FMEA](#when-to-use-fmea)
- [Where FMEA shows up](#where-fmea-shows-up)
- [Who runs FMEA](#who-runs-fmea)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/fmea.html)

## Why FMEA

Post-incident reviews catch what already failed. FMEA catches what *will* fail before it does.

- Structured anticipation beats ad-hoc "what ifs."
- RPN forces prioritization — fix the highest-risk modes first, not the loudest concern.
- Documented FMEA travels with the system; new team members inherit the risk model.
- Pairs naturally with [Poka-Yoke](./poka-yoke.md) — each top-RPN mode becomes a mistake-proofing target.

**Real example:** A CSA ran an FMEA before a customer's first multi-region failover drill. Top-RPN finding: secrets rotation in the DR region. Detection score was 9 (would only surface during actual failover). The team rotated and tested before the drill; the drill succeeded. Without the FMEA, the failover would have failed for the most embarrassing reason in front of leadership.

## What FMEA is

For each failure mode:

| Column           | Question                                          |
| ---------------- | ------------------------------------------------- |
| Item / function  | What is the thing and what should it do?          |
| Failure mode     | How can it fail to do that?                       |
| Effect           | What happens to the customer / system if it does? |
| Severity (S)     | How bad? 1 = trivial, 10 = catastrophic           |
| Cause            | What would cause this failure?                    |
| Occurrence (O)   | How often? 1 = remote, 10 = certain               |
| Current controls | What detects or prevents it today?                |
| Detection (D)    | How well do those work? 1 = certain, 10 = none    |
| RPN              | S × O × D (1–1000)                                |
| Action           | What will we do? Owner, date.                     |
| Post-action S/O/D, RPN | After mitigation                            |

Variants:

- **Process FMEA (PFMEA)** — manufacturing/processes; the canonical version. Maps to engineering processes.
- **Design FMEA (DFMEA)** — applied to a product or system design pre-release.
- **System FMEA** — applied at architecture level (services, dependencies).

Practical scoring: agree on the 1–10 scales *before* you start. Otherwise teams burn 80% of the workshop debating numbers.

## How to run FMEA

1. **Pick scope.** One process, system, or feature. Don't FMEA the entire estate.
2. **Build the team.** People who know the system + a skeptic + the customer's voice.
3. **Brainstorm failure modes.** Use [Ishikawa](./ishikawa.md) or [6Ms](./6-ms.md) to be exhaustive.
4. **For each, capture Effect, Cause, Controls.**
5. **Score S, O, D using pre-agreed scales.** Calculate RPN.
6. **Sort by RPN.** Address top decile first.
7. **Assign actions and re-score after mitigation.** RPN should fall.
8. **Make it a living document.** Refresh on incidents, releases, and architecture changes.

**Anti-pattern to avoid:** the one-time FMEA that ships with the project and never updates. The risk model decays.

## When to use FMEA

- Pre-deployment of high-stakes changes (multi-region, migrations, GA launches).
- Inside DMAIC Analyze when failure modes drive the metric.
- Before designing [Poka-Yoke](./poka-yoke.md) interventions.
- AI agent release — failure modes evolve fast.
- Architecture reviews for new systems.

## Where FMEA shows up

- Release readiness checklists.
- DR / failover planning.
- WAF Reliability pillar review.
- AI agent governance reviews.
- Postmortem follow-ups (was this mode in our FMEA? If not, add it.).

## Who runs FMEA

- **CSA** — facilitates; enforces scale discipline.
- **Architects and engineers** — primary contributors.
- **SRE / on-call** — bring incident pattern knowledge.
- **Security / compliance** — for relevant modes.
- **Process owner** — owns the resulting actions.

## Examples

### Example 1 — DR failover FMEA

Top RPN: stale DR secrets (S=9, O=4, D=9, RPN=324). Mitigation: monthly rotation drill. Post-action RPN: 18.

### Example 2 — Cosmos partition migration FMEA

Top mode: dual-write skew during migration. RPN 280. Poka-Yoke: idempotent write keys + audit script. Post-RPN 32.

### Example 3 — AI agent release FMEA

Modes: hallucination, PII leak, prompt injection, jailbreak. PII leak (S=10) top RPN. Mitigation: pre-/post-filter, eval suite for PII patterns.

### Example 4 — AKS upgrade FMEA

Mode: PDB blocks drain. S=7, O=6, D=8 → RPN 336. Mitigation: pre-upgrade PDB audit playbook. Post-RPN 21.

### Example 5 — Service Bus dead-letter FMEA

Modes ranked across producer / broker / consumer; top finding (consumer crash with no DLQ) drove DLQ + observability change.

### Example 6 — Multi-region active-active FMEA

System-level FMEA across 9 services; surfaced 3 hidden single-region dependencies. Fixed before launch.

### Example 7 — IaC module FMEA

Module-level FMEA for shared Terraform module; modes around drift, deletion-protection, secret leakage. Resulted in Policy guardrails.

### Example 8 — Live-site FMEA

Quarterly refresh of FMEA based on past quarter's incidents; modes that *did* fail moved S=10 (now known). Refreshed FMEA used as on-call training material.

### Example 9 — Identity rotation FMEA

Modes around credential expiry: detection scores forced rotation drill cadence; eliminated expiry-driven outages.

### Example 10 — FMEA as compliance artifact

Customer regulated industry required documented risk analysis. FMEA satisfied; reused for ISO/SOC audit evidence; saved $80K of separate audit prep.
