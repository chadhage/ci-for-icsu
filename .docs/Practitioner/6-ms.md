# 6Ms

> **Persona:** CI Practitioner · continuous improvement in practice  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

The 6Ms—Man, Machine, Method, Material, Measurement, Mother Nature—are the canonical category set for structuring Ishikawa diagrams and disciplining root-cause analysis. They force cause search beyond code and config into people, process, telemetry, and demand. A problem that lives in only one M is rare; realistic answers usually involve 3+ Ms.

## What You'll Gain

- Expand the cause search beyond code and config into people, process, observability, and demand
- Prevent single-discipline fixation (engineers blame config; SREs blame process; on-call blames telemetry)
- Surface cross-category causes that contribute simultaneously
- Score each M as primary, contributing, or non-contributing to focus effort
- Create a shared vocabulary across practitioner, customer, and stakeholder conversations

## The Concept, Explained

The 6Ms—Man, Machine, Method, Material, Measurement, Mother Nature—are scaffolding for systematic cause exploration. In an engineering context: Man = people, skills, on-call rotation; Machine = the tools, services, and runtime, including instance size and tier; Method = process, queries, partitioning strategy, deployment flow, rollout pattern; Material = configuration, secrets, infrastructure-as-code, image versions, dependencies, capacity settings, network rules; Measurement = observability, alerting, SLOs, dashboards, sampling rates, retention; Mother Nature = traffic patterns, time-of-day, regional spikes, campaigns, upstream bursts, holidays, customer behavior shifts.

Use the 6Ms as a checklist during postmortems, architecture reviews, and reliability assessments. Walk every M, even if the answer is 'no contributor here, evidence X confirms.' The discipline matters more than the volume. After evidence, score each M as primary, contributing, or non-contributing. Direct effort to primaries; remediate contributing causes opportunistically; document non-contributing ones as ruled out. Some practitioners add Management as a 7th M for org/funding/strategy causes—for practitioner work this is often where 5 Whys terminates.

Translate vocabulary to the audience. 'Man' is fine internally but reads as gendered. Prefer 'People & Skills.' Use whichever vocabulary the room will engage with.

## In the Field — CI Practitioner · continuous improvement in practice

A CI practitioner whose brainstorm keeps circling the same two ideas reaches for the 6 Ms — Machine, Method, Material, Measurement, Man/People, Mother Nature/Environment — as prompts. Systematically walking categories the group had ignored, they realize the failure is a Measurement problem: the alert threshold itself was miscalibrated, not the service. The framework gives the practitioner a structured way to generate causes so blind spots surface before a fix ships, not after. It turns an unstructured argument into a complete, categorized search for the real driver.

## Recap — Key Concepts & Takeaways

- The 6Ms force cause search beyond code and config into all domains
- Walk every M, even if the answer is 'no contributor—evidence confirms'
- Score each M as primary, contributing, or non-contributing; focus effort on primaries
- Realistic problems have 3+ Ms; single-M problems are rare
- Pair 6Ms (breadth) with 5 Whys (depth per M)

## Knowledge Check

### 1. What do the 6Ms represent in structured root-cause analysis?

- **A.** Manufacturing, Materials, Marketing, Methods, Management, Money.
- **B.** Man, Machine, Method, Material, Measurement, Mother Nature.
- **C.** Metrics, Models, Mechanization, Maintenance, Mindset, Motivation.
- **D.** Market, Money, Mindset, Maintenance, Maturity, Momentum.

**Correct answer:** B. Man, Machine, Method, Material, Measurement, Mother Nature.

The 6Ms force the cause search beyond **code and config** — covering people/skills, service/runtime, process/logic, config/data, observability/SLOs, and demand/environment.

### 2. Why is the 6Ms framework more effective than single-discipline analysis?

- **A.** It takes less time and reduces the need for meetings.
- **B.** It prevents single-discipline fixation and surfaces cross-category causes.
- **C.** It simplifies documentation and reduces rework.
- **D.** It replaces detailed investigation with a checklist.

**Correct answer:** B. It prevents single-discipline fixation and surfaces cross-category causes.

Without a category checklist, engineers blame config, SREs blame process, on-call blames telemetry. The 6Ms give every reviewer the same **prompt**, surfacing multi-category causes.

### 3. In the database throttling example, which three Ms were primary contributors?

- **A.** Man, Machine, Mother Nature.
- **B.** Method, Measurement, Material.
- **C.** Method, Material, Mother Nature.
- **D.** Man, Measurement, Mother Nature.

**Correct answer:** C. Method, Material, Mother Nature.

Hot partition (Method), manual capacity without autoscale (Material), and a regional peak plus a campaign (Mother Nature) were primary. Other Ms were contributing but remediated **opportunistically**.

### 4. When is it NOT appropriate to use the 6Ms framework?

- **A.** During routine postmortems with the engineering team.
- **B.** When the cause is a known platform issue confirmed by a provider status page.
- **C.** During architecture reliability reviews with the customer.
- **D.** On your first initiative with a new customer.

**Correct answer:** B. When the cause is a known platform issue confirmed by a provider status page.

The 6Ms are for broad exploration. If the cause is a **known platform issue** confirmed by a provider status page, the framework is unnecessary overhead.

### 5. “An engineer left a VM on over a holiday.” Which 6M represents the systemic root cause, not the blame?

- **A.** Man — the engineer's carelessness.
- **B.** Measurement — no budget alert at 80% spend.
- **C.** Mother Nature — the unexpected holiday timing.
- **D.** Material — the VM's retention settings.

**Correct answer:** B. Measurement — no budget alert at 80% spend.

Blaming the engineer is not a root cause. The systemic cause is the absence of an alert. **Measurement** discipline reveals preventable gaps.

---

_Source: Continuous Improvement 30-Minute Delivery series._
