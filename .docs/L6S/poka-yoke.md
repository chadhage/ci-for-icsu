[← Back to Index](./index.md)

---

# Poka-Yoke (Mistake-Proofing)

## TL;DR

Poka-Yoke (Japanese for "mistake-proofing") is the discipline of designing systems and processes so that errors are *impossible* — or, failing that, *immediately detected*. Shigeo Shingo's original distinction: **prevention** poka-yokes make the error physically/logically impossible; **detection** poka-yokes catch the error at the moment it happens. For CSAs, poka-yoke is how you make CI gains *stick*: the change can't be undone, the misconfiguration can't be deployed, the secret can't be committed. Pair with [FMEA](./fmea.md) (which finds where to apply it) and [Standard Work](./standard-work.md) (which the poka-yoke enforces). The Azure-native poka-yokes are Policy, RBAC, schema validation, and CI gates.

## Table of Contents

- [Why Poka-Yoke](#why-poka-yoke)
- [What Poka-Yoke is](#what-poka-yoke-is)
- [How to design Poka-Yoke](#how-to-design-poka-yoke)
- [When to use Poka-Yoke](#when-to-use-poka-yoke)
- [Where Poka-Yoke shows up](#where-poka-yoke-shows-up)
- [Who designs Poka-Yoke](#who-designs-poka-yoke)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/poka-yoke.html)

## Why Poka-Yoke

Training, runbooks, and reminders fail at scale. Poka-Yoke removes the dependence on human attention.

- Sustains [Kaizen](./kaizen.md) and [DMAIC](./dmaic.md) gains by removing the regression path.
- Reduces dependence on the most senior engineer being awake.
- Converts "human error" failure modes into prevented or visibly detected ones.
- Aligns with WAF Reliability + Security: most policies are poka-yokes.

**Real example:** A customer's prod database was deleted three times in 18 months by manual scripts. Training each time. Fourth time, the CSA proposed a poka-yoke: `cannot_be_deleted = true` on every prod resource via Policy, plus `--no-prompt` blocked in CI runners. Zero recurrences in 24 months. Memos cannot beat mechanism.

## What Poka-Yoke is

Two classes:

| Class       | Mechanism                                            | Example                                     |
| ----------- | ---------------------------------------------------- | ------------------------------------------- |
| Prevention  | Error physically/logically cannot occur              | Policy denies non-immutable image tag       |
| Detection   | Error is immediately, visibly flagged at occurrence  | Schema validation rejects malformed config  |

Three control levels (Shingo):

1. **Warning** — operator is alerted (e.g., dashboard color).
2. **Shutdown / refusal** — system stops or refuses the action.
3. **Self-correcting** — system fixes the error and proceeds.

In Azure / engineering terms, common poka-yokes:

- **Azure Policy** (deny / audit modes).
- **RBAC** scoped least-privilege.
- **Schema validation** on configs and APIs.
- **Pre-commit / pre-merge hooks** (secret scanning, lint, tests).
- **Pipeline gates** (security, compliance, perf budgets).
- **Resource locks** (CanNotDelete / ReadOnly).
- **Managed identity** instead of secrets in code.
- **Type systems and lints** in code.
- **Immutable infrastructure** (image tags, IaC modules).

## How to design Poka-Yoke

1. **Identify the error.** From [FMEA](./fmea.md), postmortems, or near-misses.
2. **Choose class.** Prevention > Detection > Mitigation.
3. **Choose level.** Refusal > Warning. Refusal is harder to design but worth it.
4. **Pick the mechanism closest to the error source.** Pre-commit beats CI; CI beats runtime; runtime beats post-hoc audit.
5. **Test the poka-yoke itself.** Attempt the error; verify the system refuses.
6. **Standardize.** The poka-yoke goes into IaC, Policy, or shared tooling.
7. **Monitor for bypass.** Some teams will route around. Detect the bypass.

**Anti-pattern to avoid:** the "training plus checklist" poka-yoke. Training is not poka-yoke; only mechanism is.

## When to use Poka-Yoke

- Any error that has happened twice.
- High-severity, low-frequency modes (the rare ones bite hardest).
- Wherever onboarding new engineers exposes systemic risk.
- After every postmortem — what poka-yoke would have prevented this?

## Where Poka-Yoke shows up

- Azure Policy and Initiative assignments.
- Pre-commit hooks (e.g., gitleaks, lint).
- CI/CD gates.
- IaC modules (defaulting safe values).
- RBAC role design.
- AI agent guardrails (content filters, schema-constrained outputs).

## Who designs Poka-Yoke

- **CSA** — coaches teams to think mechanism, not memo.
- **Platform engineering** — owns shared poka-yokes.
- **Security** — owns Policy / RBAC posture.
- **SRE** — surfaces high-frequency error patterns.

## Examples

### Example 1 — Delete-protected prod

`cannot_be_deleted = true` + RBAC blocks the manual override. Three-deletes-per-year → zero.

### Example 2 — No mutable image tags

Policy denies `:latest` and any mutable tag. ImagePullBackOff signature eliminated.

### Example 3 — Pre-merge secret scan

gitleaks pre-commit + pre-merge. Secret-in-repo incidents → zero.

### Example 4 — Managed identity only

Policy denies SAS / connection-string usage. Audit clean for the first time.

### Example 5 — Schema-validated config

Helm / IaC values validated against JSON schema. Invalid configs refused before deploy.

### Example 6 — RBAC least-privilege

Production RBAC scoped to RG; engineers cannot inadvertently touch other subs. "Accidental cross-environment" incidents stopped.

### Example 7 — AI agent output schema

Agent responses constrained to JSON schema; out-of-schema fields refused. Downstream parser errors → zero.

### Example 8 — Pipeline cost gate

`infracost` gate refuses PRs that increase forecast spend over threshold without sponsor sign-off. Surprise bills stopped.

### Example 9 — Idempotency keys

Producer required to send idempotency key; broker enforces. Duplicate processing → zero.

### Example 10 — Bypass detection

Detect counter on Policy exemptions; weekly review. Bypasses fell because review made them visible.
