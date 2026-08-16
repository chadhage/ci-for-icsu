# 5 Whys

> **Persona:** Customer · your team's point of view  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

5 Whys is an iterative root-cause technique: take a confirmed problem and ask 'why?' repeatedly until the chain reaches a systemic cause (a change in IaC, policy, runbook, training, or org design) rather than a symptom or individual action. Used in postmortems and escalations, it disciplines teams away from blaming individuals toward fixing the system.

## What You'll Gain

- Reach systemic causes you can actually change in IaC, policy, or process
- Stop blaming individuals ('the engineer made a mistake') and fix the system that allowed the mistake
- Convert recurring incidents into one-time incidents by addressing root, not surface causes
- Document the full cause chain for future similar incidents
- Prevent the same postmortem from repeating next quarter

## The Concept, Explained

5 Whys is a linear drill: start with a problem statement (a confirmed observation, not speculation), then iteratively ask 'why?' until the answer is an actionable system property. It runs after the immediate problem is contained—during a live incident you restore service first, then use 5 Whys in the postmortem to reach the systemic cause. The number 5 is approximate—sometimes 3 is enough, sometimes 7 is needed. Stop when the answer is something you can change: missing automation, lack of standard work, no training, incentive misalignment, unfunded capability, or org redesign.

Key discipline: each 'why' must be evidence-backed. Logs, traces, configs, ADRs, interviews. Speculation propagates; an unverified 'why' at step 2 misleads steps 3–5. Causes are often multi-causal; chain each contributor separately. A useful pattern: Ishikawa → pick top 2–3 branches → 5 Whys each → combine into the action plan.

Move from blame to design: instead of 'Why did the engineer push the wrong tag?' ask 'Why did the system allow the wrong tag to reach production?' The terminal answer should be system-shaped, not person-shaped. Workflow: confirm the problem statement, pair with Ishikawa when multi-domain causes likely, require evidence for each step, watch for premature termination (still describing a person's action, not a system property), watch for runaway abstraction (stop at the most concrete change you can make), chain per cause, and convert the terminal answer to a PDCA action.

## In the Field — Customer · your team's point of view

A customer's incident review usually stops at the first plausible cause — 'the pod ran out of memory, so we raised the limit' — and the incident returns. Their CSA coaches the team through 5 Whys on its own outage: why did memory spike, why wasn't it caught, why did the limit default that way, why did no policy flag it, why is there no standard. Each answer exposes the next layer until the team reaches a systemic root cause it can actually remove. The customer stops treating symptoms and starts fixing the condition that produced them — so the same incident does not come back.

## Recap — Key Concepts & Takeaways

- 5 Whys reaches systemic causes, not symptoms or blame
- Each step requires evidence; speculation contaminates the chain
- Terminal answer must be an actionable system property (policy, standard work, org structure)
- Avoid premature termination—if the answer still sounds like a person's action, keep asking
- Chain per cause; real causes are usually multi-causal

## Knowledge Check

### 1. What is the primary benefit of using 5 Whys over stopping at the first plausible cause?

- **A.** Find symptoms faster and resolve incidents quicker.
- **B.** Change the system, not the individual; reach systemic causes you can actually act on.
- **C.** Document who was at fault during the incident.
- **D.** Speed up postmortems by skipping detailed investigation.

**Correct answer:** B. Change the system, not the individual; reach systemic causes you can actually act on.

5 Whys drills to **systemic causes** that can be changed via IaC, policy, or process — not individual actions. This prevents recurrence rather than repeating the same incident.

### 2. How many times should you iteratively ask “why” when using 5 Whys?

- **A.** Always exactly five times, no more and no less.
- **B.** As many as needed until you reach an actionable system property.
- **C.** Never more than three times to keep the postmortem short.
- **D.** Only during critical incidents, not routine ones.

**Correct answer:** B. As many as needed until you reach an actionable system property.

The number 5 is approximate. Stop when the answer is an **actionable system property** like 'no standard work' or 'unfunded capability' — not at an arbitrary count.

### 3. Which terminal answer represents a true root cause in 5 Whys?

- **A.** The engineer made a mistake during deployment.
- **B.** The alert didn't fire when the threshold was breached.
- **C.** No standard work exists for updating canary alerting when SLOs change.
- **D.** The code contained a subtle bug in the parser.

**Correct answer:** C. No standard work exists for updating canary alerting when SLOs change.

The terminal answer must be a **system change** you can actually make — through IaC, policy, process, or funding. Personal blame is not a root cause.

### 4. What requirement does 5 Whys place on each answer in the chain?

- **A.** It should be plausible and agreed upon by the team.
- **B.** Each step must be evidence-backed: logs, traces, configs, or interviews.
- **C.** It should reference previous postmortems on similar issues.
- **D.** It must identify a person responsible for the failure.

**Correct answer:** B. Each step must be evidence-backed: logs, traces, configs, or interviews.

Each why must be supported by **evidence**. Unverified answers propagate error down the chain, misleading the remaining steps and contaminating the entire analysis.

### 5. When is the best time to run 5 Whys in a postmortem?

- **A.** In real time during active incident response while emotions are fresh.
- **B.** After the incident is resolved, when complete data is available.
- **C.** Before any logs are collected, to avoid confirmation bias.
- **D.** Weeks later, after the team has moved on to other work.

**Correct answer:** B. After the incident is resolved, when complete data is available.

5 Whys requires **evidence** at each step. Running it during active triage with incomplete data contaminates the chain with speculation.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
