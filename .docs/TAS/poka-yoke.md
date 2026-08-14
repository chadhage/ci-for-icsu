# Poka-Yoke: Design Systems So Errors Are Impossible

> **Persona:** Technical Account Strategist · the technical roadmap  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Poka-Yoke means 'mistake-proofing'—designing systems and processes so errors are impossible, or failing that, immediately detected. Prevention (error becomes impossible) beats detection (error caught at the moment). For CSAs, poka-yoke is how you make CI gains stick: the change can't be undone, the misconfiguration can't be deployed, the secret can't be committed. Training and reminders tend to fail at scale; durable prevention comes from mechanism. Pair with FMEA and Standard Work to identify where to apply poka-yoke and what behavior to enforce.

## What You'll Gain

- Make CI gains stick by designing systems where errors are impossible—lock the prod resource, deny the bad config, block the secret commit
- Remove dependence on training, checklists, and human attention at scale—mechanism beats memo every time
- Sustain Kaizen and DMAIC improvements by removing the regression path—the change becomes structure, not discipline
- Apply Azure-native poka-yokes: Policy (deny mode), RBAC (least privilege), schema validation, CI gates, resource locks, managed identity

## The Concept, Explained

**Poka-Yoke has two classes:**

- **Prevention:** Error is physically or logically impossible. Policy denies the action. The resource cannot be deleted. The tag cannot be non-immutable.
- **Detection:** Error is immediately, visibly flagged at the moment it happens. Schema validation rejects malformed config. Pre-commit hook blocks the secret.
Shingo's three control levels: **Warning** (operator alerted on a dashboard), **Shutdown/refusal** (system refuses the action), **Self-correcting** (system fixes and proceeds). Refusal is harder to design than a warning but stops the error from occurring.

**Common poka-yokes in Azure/engineering:** Azure Policy (deny/audit modes), RBAC scoped least-privilege, schema validation, pre-commit hooks (secret scanning, lint), pipeline gates, resource locks (CanNotDelete/ReadOnly), managed identity, immutable infrastructure, type systems and lints.

**How to design:** Identify the error (from FMEA, postmortems, near-misses), choose class (prevention > detection), choose level (refusal > warning), place it closest to the error source (pre-commit > CI > runtime > audit). Test the poka-yoke itself. Standardize into IaC, Policy, or shared tooling. Monitor for bypass—some teams will route around; detect it.

## In the Field — Technical Account Strategist · the technical roadmap

A Technical Account Strategist ends the customer's recurring human-error outages — wrong environment variable, misconfigured tag, deploy to the wrong ring — not with another reminder but with poka-yoke. Policy denies the invalid configuration, a required field can't be left wrong, and the pipeline refuses a deploy that skips a gate, so the error rate for that class drops to zero. The TAS turns the account's reliability from a matter of individual vigilance into a property engineered into the platform itself.

## Recap — Key Concepts & Takeaways

- Prevention poka-yokes make the error impossible; detection poka-yokes catch it immediately. Prevention is preferred when feasible.
- Place poka-yokes close to the error source: pre-commit beats CI beats runtime beats post-hoc audit.
- Refusal (system refuses the action) is stronger than warning (system alerts). Mechanism beats training, checklist, and memo at scale.
- Common Azure poka-yokes: Policy (deny mode), RBAC (least privilege), schema validation, pre-commit hooks, CI gates, resource locks, managed identity.
- Any error that has happened twice should have a poka-yoke; high-severity modes (rare ones bite hardest) especially need them.

## Knowledge Check

### 1. What are the two classes of poka-yoke per Shingo's original distinction?

- **A.** Manual and Automated.
- **B.** Prevention (error physically/logically impossible) and Detection (error caught at the moment it happens).
- **C.** Hardware and Software.
- **D.** Pre-commit and Post-deploy.

**Correct answer:** B. Prevention (error physically/logically impossible) and Detection (error caught at the moment it happens).

Prevention makes the error **impossible** (Policy denies the action); detection catches it the moment it happens (schema validation rejects malformed config). Prevention is preferred when feasible.

### 2. A customer's prod database has been deleted three times in 18 months despite training. What is the right next step?

- **A.** Add a fourth round of training and a checklist.
- **B.** Apply a mechanism: resource lock (CanNotDelete), Policy deny, and block --no-prompt in CI runners.
- **C.** Document the issue in a wiki and move on.
- **D.** Issue a strongly worded memo from leadership.

**Correct answer:** B. Apply a mechanism: resource lock (CanNotDelete), Policy deny, and block --no-prompt in CI runners.

Training and reminders fail at scale. The poka-yoke principle is “**memos cannot beat mechanism**.” Lock the resource and deny the action in policy — the deletion becomes impossible.

### 3. Which is generally the strongest control level for a poka-yoke?

- **A.** Warning — alert the operator on a dashboard.
- **B.** Shutdown / refusal — the system refuses the action.
- **C.** Self-correcting — quietly fix and proceed.
- **D.** Audit — record the action for later review.

**Correct answer:** B. Shutdown / refusal — the system refuses the action.

Refusal is harder to design than a warning but stops the error from occurring. **Refusal > Warning** in the Shingo control hierarchy.

### 4. Where should you place a poka-yoke for maximum effect?

- **A.** As far downstream as possible to avoid blocking developers.
- **B.** Closest to the error source — pre-commit beats CI; CI beats runtime; runtime beats audit.
- **C.** Only in production, never in dev or test environments.
- **D.** Wherever it’s easiest to implement, regardless of source.

**Correct answer:** B. Closest to the error source — pre-commit beats CI; CI beats runtime; runtime beats audit.

Catch errors as close to the source as possible. A **pre-commit hook** beats a CI gate beats a runtime check beats post-hoc audit. The earlier, the cheaper.

### 5. Which is the key anti-pattern to avoid when designing poka-yoke?

- **A.** Using Azure Policy in deny mode for prod resources.
- **B.** Treating “training plus a checklist” as a poka-yoke when only a mechanism qualifies.
- **C.** Locking down RBAC to least privilege.
- **D.** Using managed identity instead of secrets in code.

**Correct answer:** B. Treating “training plus a checklist” as a poka-yoke when only a mechanism qualifies.

Training is not poka-yoke; **only mechanism is**. A checklist that depends on human attention will fail at scale — that’s precisely what poka-yoke exists to remove.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
