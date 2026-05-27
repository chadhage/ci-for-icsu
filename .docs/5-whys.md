# 5 Whys

## TL;DR

5 Whys is a fast root-cause technique: take a confirmed problem and ask "why?" iteratively (typically 4–6 times) until the chain reaches a *systemic* cause rather than a symptom. For CSAs it is the right next step after Ishikawa has surfaced the *what* — 5 Whys drills the highest-priority branch until the answer is something you can change in IaC, policy, runbook, training, or org design. Used in postmortems, customer escalations, and engagement retrospectives, it disciplines the team away from blaming individuals ("the engineer made a mistake") toward fixing the system that allowed the mistake. Don't use it as a single-thread cause search (real causes are usually multi-causal — chain each contributor) and don't stop at the first answer that feels satisfying.

## Table of Contents

- [Why 5 Whys](#why-5-whys)
- [What 5 Whys is](#what-5-whys-is)
- [How to use 5 Whys](#how-to-use-5-whys)
- [When to use 5 Whys](#when-to-use-5-whys)
- [Where to use 5 Whys](#where-to-use-5-whys)
- [Who should use 5 Whys](#who-should-use-5-whys)
- [Examples](#examples)

## Why 5 Whys

Most "root causes" reported in postmortems are first- or second-level explanations: "a config was wrong," "the engineer pushed the wrong tag," "the alert didn't fire." Acting on those produces the same incident again next quarter because the *system* that allowed the config error / mis-push / alert miss is untouched. 5 Whys is the discipline of not stopping at the first plausible answer.

Concretely, it supports:

- Postmortem actions that change the system, not the individual.
- Escalation conversations with PG where the symptom is on Azure but the cause is in customer process — or vice versa.
- Engagement retrospectives where "CSA wasn't there at the right time" hides a deeper cadence design flaw.
- Coaching customer engineers to think systemically rather than reactively.
- Turning recurring incidents into one-time incidents.

**Real example:** A customer reported a Sev B caused by "an engineer manually rotated a Cosmos key and broke production." Stopping there would have produced an action like "don't rotate keys manually" — useless. Five whys deeper, the cause was: managed identity wasn't enabled because IaC modules didn't support it because the platform team's module backlog was 6 months behind because there was no funded platform-engineering capacity because leadership treated platform as overhead. The action that prevented recurrence wasn't a runbook update — it was an org funding decision. No amount of training would have surfaced that.

## What 5 Whys is

A linear iterative drill:

- **Statement of the problem** — the confirmed observation, not the symptom.
- **Why 1** — the immediate cause.
- **Why 2** — the cause of the immediate cause.
- ...continuing until the answer is a *system property* that can be changed.

Key properties:

- **The number 5 is approximate.** Sometimes 3 is enough; sometimes 7 is needed. Stop when the answer is actionable at the system level — not at an arbitrary count.
- **Each "why" must be evidence-backed.** Speculation propagates; an unverified "why" at step 2 will mislead steps 3–5.
- **Causes are often multi-causal.** Reality is rarely a single chain. Use 5 Whys per branch of an Ishikawa, not as a substitute for it. A useful pattern: Ishikawa → pick top 2–3 branches → 5 Whys each → combine into the action plan.
- **The terminal answer should be system-shaped.** "Lack of training" / "no standard work" / "incentive mismatch" / "missing automation" / "unfunded capability" — these are systemic. "John was tired" is not (and is also blame-shaped, which is wrong).
- **Move from blame to design.** "Why did the engineer push the wrong tag?" → not "because they were careless" but "because the deployment process allows mutable tags and offers no late-stage verification."

**Real example:** A team kept stopping their 5 Whys at "the alert didn't fire." The CSA pushed them: "*why* didn't the alert fire?" → "no alert was configured" → "*why* not?" → "alerting standards apply only to prod, not the regional canary" → "*why*?" → "canaries were added after the alerting policy was written and policy hasn't been updated." Now the action is updating the alerting policy to be canary-aware, not adding one alert for one service.

## How to use 5 Whys

1. **Start with a confirmed, specific problem statement.** Not a hypothesis. Not "customer is upset." A factual statement: "Checkout 5xx rate exceeded 2% between 14:02–14:38 UTC on Oct 3."
2. **Pair with Ishikawa when causes may be multi-domain.** Use Ishikawa to map breadth; use 5 Whys to drill the priority branches.
3. **Ask "why?" — and require evidence for each answer.** Logs, traces, configs, ADRs, interviews. "We think" is not an answer; "the diagnostic shows" is.
4. **Avoid blame framing.** Replace "why did X do Y?" with "why did the system allow Y to happen?"
5. **Watch for premature termination.** If the answer is still describing a *person's action* or a *single configuration value*, you haven't reached the system layer. Keep going.
6. **Watch for runaway abstraction.** "Why? — because of culture" is too far. Stop at the most specific change you can actually make. "Standard work for canary alerting" is concrete; "fix engineering culture" is not.
7. **Chain per cause, not per problem.** A typical postmortem produces 2–4 chains, each ending in a different system change.
8. **Convert the terminal answer to a PDCA action.** Standardize via IaC, policy, runbook, training, or — yes — funding / org changes when warranted.
9. **Record the full chain.** Future incidents will hit the same chain; archived chains save the next investigation.

**Anti-pattern to avoid:** the "rapid-fire" 5 Whys done in 90 seconds at the end of a postmortem. The drill needs evidence at each step; without it, it's a guess chain.

## When to use 5 Whys

Use 5 Whys when:

- A specific, observable problem has occurred or is recurring.
- The team's instinct is to fix the immediate cause and move on.
- The cause likely sits in process, design, or org — not only in code.
- A postmortem, escalation, or retrospective is in progress.

Use in CSA workflows for:

- Sev A/B postmortems with the customer's SRE team.
- Recurring Sev B incidents where prior fixes haven't held.
- Cost spikes where the immediate cause (e.g., "left a VM on") masks the systemic cause (no budget alerting, no auto-shutdown policy).
- Engagement retrospectives — why did the CSA cadence slip? Why did NSAT drop?
- Customer escalations into PG, to demonstrate the systemic nature of the problem.

Do **not** use 5 Whys when:

- The cause is genuinely a one-off, well-understood, and the fix is obvious.
- The team is in active incident response — defer to postmortem.
- You haven't yet confirmed the problem statement.
- The conversation is about prioritization, not causation — use Pareto instead.

**Real example:** A CSA started a 5 Whys on a Sev B mid-call. The team was still triaging; data was incomplete; speculation contaminated the chain. The exercise was abandoned and re-run with proper evidence two days later in the postmortem, producing a far better result.

## Where to use 5 Whys

Common CSA surfaces:

- **Postmortem documents** — paired with the timeline and the Ishikawa.
- **Recurring incident reviews** — when a fix didn't hold, 5 Whys on "why did the fix not hold?" is itself the right question.
- **WAF assessment readouts** — for each top finding, a short 5 Whys explains *why* the customer is in that state, which informs whether the remediation will hold.
- **Cost optimization reviews** — for non-obvious spend drivers.
- **Engagement retrospectives** — internal CSA practice.
- **Customer skilling sessions** — teaching the technique itself; coaching engineers to apply it.

**Real example:** A CSA included 5 Whys in their WAF reliability readout, one per top finding. The customer's CIO said it was the first WAF assessment that explained *why* the gaps existed, not just *that* they existed. The remediation backlog was funded the same week because the systemic causes were now visible to leadership.

## Who should use 5 Whys

- **CSAs** — facilitate; enforce evidence; resist premature termination.
- **Customer SRE / engineering leads** — bring technical evidence at each step.
- **Customer platform / process owners** — required when chains terminate in process or org layers.
- **Customer leadership** — required when chains terminate in funding / staffing / strategy.
- **CSA peers** — review chains for skipped steps or unverified evidence.
- **CSA managers** — apply to engagement-level retrospectives.

5 Whys fails when only the engineer who caused the incident is asked. The chain needs cross-functional evidence to be valid.

## Examples

### Example 1 — Cosmos throttling postmortem

Problem: "`orders` container threw 429s for 36 minutes on Oct 3, 14:02–14:38 UTC."

| Step  | Question                                                | Answer (evidence)                                       |
| ----- | ------------------------------------------------------- | ------------------------------------------------------- |
| Why 1 | Why did 429s occur?                                     | RU/s consumed > provisioned. (Cosmos diagnostic log)    |
| Why 2 | Why was consumption above provisioned?                  | Demand 4x normal. (App Insights request count)          |
| Why 3 | Why didn't capacity scale?                              | Manual throughput; no autoscale enabled. (ARM config)   |
| Why 4 | Why wasn't autoscale enabled?                           | Template predates autoscale GA; never refactored. (ADR) |
| Why 5 | Why wasn't the template refactored?                     | No standard work to re-baseline IaC modules annually.   |

**Action:** introduce annual IaC re-baseline standard work + enable autoscale on Cosmos containers in the reference module. Single-incident fix becomes systemic.

### Example 2 — "Engineer pushed wrong image tag"

Problem: "Prod regressed when an engineer manually pushed `:latest` tag."

| Step  | Answer                                                                       |
| ----- | ---------------------------------------------------------------------------- |
| Why 1 | The image tag overwrote the prod-pinned version.                             |
| Why 2 | The deployment pipeline accepts mutable tags.                                |
| Why 3 | Tag immutability was never required in ACR settings.                         |
| Why 4 | No standard for image promotion across environments was ever written.        |
| Why 5 | Image promotion lives in CI/CD ownership, which has no current owner.        |

**Action:** assign owner; enable ACR tag immutability via policy; define promotion standard work. Note the chain never blamed the engineer — it found the design that allowed the action.

### Example 3 — AKS upgrade failure

Problem: "AKS upgrade rollback required Sev A bridge."

| Step  | Answer                                                                          |
| ----- | ------------------------------------------------------------------------------- |
| Why 1 | New node image broke kube-proxy on workloads with custom security contexts.     |
| Why 2 | Pre-prod environments don't exercise the same security context configuration.   |
| Why 3 | Pre-prod was built before security baseline was tightened in prod.              |
| Why 4 | No drift detection between pre-prod and prod IaC.                               |
| Why 5 | Drift detection was scoped only to networking, not pod-level security.         |

**Action:** extend drift detection to pod security; rebuild pre-prod from the same module set as prod. The "AKS bug" was actually environment drift.

### Example 4 — Cost spike

Problem: "Azure spend up 22% MoM."

Two chains (one per top contributor):

**Chain A — debug logging escaped to prod:**
1. Log Analytics ingestion 4x. → 2. Application logging at INFO. → 3. PR #621 included a debug log statement at INFO. → 4. No automated check on log level in CI. → 5. Logging standards exist in wiki but aren't enforceable.

**Chain B — storage retention change:**
1. Blob storage 38% higher. → 2. Lifecycle policy disabled. → 3. Disabled by an engineer testing a restore. → 4. No alert on policy state change. → 5. Policy state isn't tracked by Defender's policy compliance dashboard.

**Actions:** Chain A → CI lint rule + log-level gate; Chain B → policy compliance alert + standard work on temporary policy changes.

### Example 5 — Defender secure-score regression

Problem: "Secure score dropped 9 points overnight."

1. New resource group provisioned without diagnostic settings. → 2. Provisioning used a CSA-provided sample template, not the org module. → 3. The org module wasn't in the sample. → 4. There's no canonical sample; CSA sent a one-off. → 5. No standard work for what "starter template" means for this customer.

**Action:** publish a canonical sample referencing the org module; deprecate one-off templates.

### Example 6 — Engagement retrospective

Problem: "Quarterly CSA cadence with the customer slipped 3 times this quarter."

1. Reviews were cancelled. → 2. Cancelled due to customer product launch crunch. → 3. The cadence was perceived as overhead during crunch. → 4. Metrics in the review didn't tie to launch outcomes. → 5. Baseline was set at engagement start (reliability); current priority is launch velocity; no re-baseline mechanism exists.

**Action:** add a "re-baseline" step to the engagement standard work; re-cycle every quarter.

### Example 7 — RAG agent hallucination spike

Problem: "Hallucination rate doubled on Tuesday."

Two chains:

**Chain A — prompt change:**
1. Output specificity dropped. → 2. PR #482 simplified the system prompt. → 3. Prompt change merged without eval re-run. → 4. CI doesn't gate prompt changes on eval pass. → 5. Eval suite wasn't designed for CI integration.

**Chain B — model auto-upgrade:**
1. Generation behavior shifted. → 2. AOAI model auto-updated to a newer version. → 3. Deployment didn't pin a specific version. → 4. Pinning wasn't part of the deployment standard. → 5. Standard predates AOAI versioning maturity.

**Actions:** gate prompt PRs on eval; pin model versions; refresh deployment standard.

### Example 8 — When 3 Whys is enough

Problem: "Service Bus consumer stopped receiving messages at 03:00 UTC."

1. Connection idle-timed out. → 2. Consumer's keep-alive interval > broker idle timeout. → 3. SDK config copied from an unrelated reference without verifying timing.

The terminal answer is concrete and actionable (publish a vetted SDK config; document keep-alive vs. idle timeout interaction). Going further would invent abstractions.

### Example 9 — When 7 Whys is needed

Problem: "Customer's renewal at risk over reliability concerns."

1. Two Sev As last quarter. → 2. Both caused by cross-region failover failing. → 3. Runbook untested in 14 months. → 4. No standard work for runbook drills. → 5. SRE team understaffed; drills deprioritized. → 6. Headcount request rejected in last planning cycle. → 7. Reliability not measured at the leadership scorecard level; therefore underfunded.

**Action:** add reliability KPIs to leadership scorecard; refund SRE; reinstate drills. Not all 5 Whys terminate at the engineering layer.

### Example 10 — Validation: did the chain hold?

90 days after Example 1 (Cosmos), the team re-ran the same query.

| Symptom                       | Before | After |
| ----------------------------- | ------ | ----- |
| 429 minutes / month           | 96     | 7     |
| Cosmos overprovisioning $/mo  | $8.4K  | $1.1K |
| Cosmos modules using autoscale | 4 / 18 | 17 / 18 |

The systemic action (annual IaC re-baseline + autoscale standard) propagated. The chain identified the right layer; the metrics confirmed it. That is a successful 5 Whys.
