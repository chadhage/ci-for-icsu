# PDCA / PDSA

> **Persona:** CSAM · Customer Success Account Manager  
> **Module group:** Methodologies & Cycles · **Delivery:** 30 min

## Executive Summary

PDCA—Plan, Do, Check, Act—is the foundational improvement cycle: hypothesize a change, try it, measure the result, and standardize or learn. Deming later refined it to PDSA (Study instead of Check) to emphasize learning. PDCA is the atomic unit of continuous improvement; every change inside DMAIC, every Kaizen event, and every daily standup decision is a PDCA cycle.

## What You'll Gain

- Write falsifiable hypotheses before making any change
- Run small experiments with real measurement instead of changes-by-opinion
- Standardize successful changes into standard work via IaC or runbooks
- Learn from negative results instead of hiding them
- Chain PDCAs together for compounding improvement across months

## The Concept, Explained

PDCA is simple but requiring discipline. **Plan:** Write a falsifiable hypothesis: 'If we [change], then [metric] will move from [baseline] to [target] within [window], because [theory].' Define the measurement: same source, same query, before and after. **Do:** Make the change small—pilot scope, canary cluster, one team. Collect data unmodified; don't cherry-pick the time window post-hoc. **Check / Study:** Compare actual result to prediction. Did it move? In the expected direction? By the expected amount? **Act:** Choose one of three: standardize via IaC or policy, adapt (run another cycle with one variable changed), or abandon and document the learning.

The discipline prevents solution-first thinking. Most 'improvements' are uncontrolled changes—no hypothesis, no measure, no standardization. PDCA forces minimum scientific rigor. Negative results are data, not failure. A team that reverts a failed experiment and documents the learning has learned more than a team that blindly rolls out every change.

PDCA scales: inside a single sprint, inside a DMAIC Improve phase (often 3–5 chained PDCAs), inside a Kaizen event (one PDCA per intervention), and across a team's daily-improvement cadence. Chaining PDCAs compounds improvement.

## In the Field — CSAM · Customer Success Account Manager

A CSAM coaches a customer's SRE team to improve alerting discipline. The team had tweaked alert thresholds weekly for a year with no measured MTTR improvement. The CSAM imposes PDCA discipline on each change. Cycle 1: Hypothesis—'If we lower spike-alert threshold from 90% CPU to 80%, we catch load issues earlier and MTTR drops 20%.' Measurement window: 2 weeks. Result: MTTR dropped 18%. Act: standardized. Cycle 2: Hypothesis on a different signal; MTTR drops another 15%. Over four cycles, MTTR fell 31% and the team stopped thrashing. The CSAM's constraint—'every change needs a hypothesis and a 2-week measurement window'—accelerated improvement by forcing scientific discipline.

## Recap — Key Concepts & Takeaways

- PDCA enforces hypothesis → experiment → measurement → decision on every change
- Plan must be falsifiable; Do must be small; Check must be honest about negative results
- Chain PDCAs inside DMAIC's Improve phase and at team standup for daily improvement
- Standardize wins via IaC, policy, or runbooks; abandon failures and document learning
- A PDCA meeting is not a PDCA—the discipline is applied to the work, not the calendar

## Knowledge Check

### 1. A team says “we improved alerting last Friday — we adjusted thresholds.” A month later MTTR hasn’t changed. What would PDCA discipline have prevented?

- **A.** It would have prevented the team from ever changing the alerting thresholds.
- **B.** It would have required a hypothesis before the change, a measurement window after, and a decision to standardize or revert.
- **C.** It would have made the change happen faster.
- **D.** It ensures the entire team uses the same monitoring tools.

**Correct answer:** B. It would have required a hypothesis before the change, a measurement window after, and a decision to standardize or revert.

PDCA enforces minimum discipline on every change. Without a **hypothesis, measurement, and decision**, changes are invisible experiments. PDCA would have surfaced that this change had no effect.

### 2. You’re coaching a team to reduce AKS cluster-autoscaler latency. What should the Plan phase include?

- **A.** Just the metric you want to improve; details emerge during Do.
- **B.** A falsifiable hypothesis: “If we [change], then [metric] will improve from [baseline] to [target] within [window], because [theory].”
- **C.** A commitment to roll out the change to all clusters immediately when early signs look good.
- **D.** A survey asking engineers if they think the change will work.

**Correct answer:** B. A falsifiable hypothesis: “If we [change], then [metric] will improve from [baseline] to [target] within [window], because [theory].”

Plan must include a **falsifiable hypothesis** and a success metric. This prevents solution-first thinking and lets Check make an honest yes/no decision.

### 3. A retry-policy test shows throughput went down, not up. What is the correct Act decision?

- **A.** Ignore the result because it conflicts with the hypothesis.
- **B.** Roll out the change to all systems and hope throughput improves with scale.
- **C.** Revert the change and document the learning that this approach doesn’t work as theorized.
- **D.** Claim the measurement was wrong and run the test again.

**Correct answer:** C. Revert the change and document the learning that this approach doesn’t work as theorized.

Negative results are **data, not failure**. If the hypothesis is disconfirmed, revert and document. The learning is valuable for future cycles.

### 4. A team ran 6 PDCA cycles in a quarter. Five resulted in standardized improvements; one was reverted. What does this tell you?

- **A.** The team is experimenting without discipline because not all changes succeeded.
- **B.** The team is practicing CI with scientific honesty — some changes work, some don’t, and all results inform the next cycle.
- **C.** They should stop running PDCA because 83% isn’t high enough.
- **D.** One failed cycle proves the entire program is broken.

**Correct answer:** B. The team is practicing CI with scientific honesty — some changes work, some don’t, and all results inform the next cycle.

A mixed success rate is **exactly what good PDCA looks like**. A 100% success rate would suggest the hypotheses were too safe. Continuous improvement compounds from chains of cycles.

### 5. A customer says: “We’re doing PDCA — we added a Friday ‘PDCA meeting’ to the calendar.” What should you clarify?

- **A.** Perfect — a Friday meeting will ensure consistent discipline.
- **B.** PDCA is a cycle applied to specific changes, not a meeting format. The discipline is hypothesis &rarr; experiment &rarr; measurement &rarr; decision.
- **C.** PDCA meetings should be held twice per week to improve velocity.
- **D.** The calendar invitation validates the team is doing PDCA correctly.

**Correct answer:** B. PDCA is a cycle applied to specific changes, not a meeting format. The discipline is hypothesis &rarr; experiment &rarr; measurement &rarr; decision.

PDCA is not a meeting; it’s a **cycle applied to a change**. A calendar event is meaningless without a real hypothesis, measurement, and honest decision on real work.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
