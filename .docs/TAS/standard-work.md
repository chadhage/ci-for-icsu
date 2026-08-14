# Standard Work: The Baseline for Improvement

> **Persona:** Technical Account Strategist · the technical roadmap  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Standard Work is the current best-known way to perform a task—documented, taught, and followed until a PDCA cycle proves a better way. Without a standard, you can't tell whether a change improved or just varied. For CSAs, standard work is how Kaizen and DMAIC gains are codified into IaC modules, Policy, runbooks, templates, and agent prompts. The standard is not static; it's a living artifact, owned, versioned, and explicitly designed to be replaced by its better self.

## What You'll Gain

- Establish a measurable baseline against which improvement is proven—variation can't be managed or improved without a standard to compare against
- Reduce variation and defects by codifying the best-known procedure into IaC, Policy, and runbooks that everyone follows
- Accelerate onboarding by giving new engineers a proven procedure instead of asking them to reinvent it
- Embed poka-yoke safeguards directly into the standard so errors become impossible or immediately detected

## The Concept, Explained

**Standard Work is the current best-known way to perform a task.** It has three components per Toyota's formulation:

- **Takt time:** The demand pace (e.g., one deploy every 8 hours).
- **Work sequence:** The step-by-step procedure in the required order.
- **Standard WIP:** The items or state required to perform the procedure smoothly (e.g., 2 staging environments warm).
In engineering, standard work takes forms like IaC modules with locked defaults, Azure Policy assignments, runbook templates, ChatOps payloads, repo templates, and versioned agent prompts with evaluated baselines. The word "standard" here means the current best-known variant, not the final word. Every PR that updates the standard is a PDCA cycle made permanent.

**How to establish standard work:** Don't write it from scratch; observe your best engineers doing the work well, document the variant with the best measured outcome, pilot it, train everyone, and plan the refresh cadence. The anti-pattern is the binder of standards nobody opens—standards must live where the work happens: in the IaC module, the pipeline, the IDE, the ChatOps payload, not in a wiki page.

## In the Field — Technical Account Strategist · the technical roadmap

A Technical Account Strategist establishes standard work when the customer's teams each deploy slightly differently and every improvement evaporates as people move on. Capturing the current best-known method in versioned IaC and runbooks gives the account a stable baseline at last, so improvements stick by changing the standard rather than a person's habit, and new engineers onboard against documentation instead of tribal knowledge. The TAS treats standard work as the precondition for continuous improvement: without a baseline, nothing can be reliably improved.

## Recap — Key Concepts & Takeaways

- Standard Work is the baseline for measurement—without a standard, improvement is invisible and variation can't be managed.
- Three components: Takt time (demand pace), Work sequence (the steps), and Standard WIP (items needed to perform smoothly).
- Establish by observing your best engineers, documenting the best variant, piloting, training, and planning refresh cadence.
- Standards must live where the work happens—in IaC modules, pipelines, Policy, ChatOps payloads—not in a separate wiki.
- A standard is the current best-known way, not the final word. Update via PDCA cycles; every PR that updates is a cycle made permanent.

## Knowledge Check

### 1. Why is standard work essential as a baseline for improvement?

- **A.** It enforces compliance with corporate policy.
- **B.** Without a standard, you can’t tell whether a change actually improved or just varied.
- **C.** It eliminates the need for runbooks and onboarding.
- **D.** It locks in best practices permanently.

**Correct answer:** B. Without a standard, you can’t tell whether a change actually improved or just varied.

Improvement requires a **comparator**. Without a standard, every engineer reinvents the procedure, variation explodes, and there’s no baseline to measure change against.

### 2. What are the three components of standard work in Toyota's formulation?

- **A.** Documentation, Training, Audit.
- **B.** Takt time, Work sequence, Standard WIP.
- **C.** Define, Measure, Control.
- **D.** Policy, Process, Procedure.

**Correct answer:** B. Takt time, Work sequence, Standard WIP.

**Takt** (demand pace), **Work sequence** (the step-by-step procedure), and **Standard WIP** (items / state required to perform the procedure smoothly).

### 3. When establishing standard work, where should you start?

- **A.** Write the standard from scratch based on industry best practices.
- **B.** Observe current variations and document what your best engineers do well; pick the variant with the best measured outcome.
- **C.** Buy a commercial standard from a consultancy.
- **D.** Have leadership define the standard top-down.

**Correct answer:** B. Observe current variations and document what your best engineers do well; pick the variant with the best measured outcome.

Don’t write from scratch — **observe and codify the best-known variant**. Standards built from real practice survive contact with the work; standards written in a vacuum die in the field.

### 4. Where should standard work live to actually be followed?

- **A.** In a binder in the team room.
- **B.** In a wiki page nobody opens.
- **C.** Where the work happens — in the IaC module, the pipeline, the IDE, the ChatOps payload.
- **D.** In an annual training course.

**Correct answer:** C. Where the work happens — in the IaC module, the pipeline, the IDE, the ChatOps payload.

The anti-pattern is the **binder of standards nobody opens**. Standards must be embedded where the work happens — IaC defaults, pipeline templates, Policy, runbooks — not in a separate document.

### 5. Should standard work ever change?

- **A.** No — once standardized, the standard is locked permanently.
- **B.** Yes — a standard is a living artifact, owned and versioned, replaced by a better version through a PDCA cycle.
- **C.** Only every 5 years during major reviews.
- **D.** Only if leadership signs off in writing.

**Correct answer:** B. Yes — a standard is a living artifact, owned and versioned, replaced by a better version through a PDCA cycle.

A standard is the **current best-known way**, not the final word. Every PR that updates the standard is a PDCA cycle made permanent. Without a refresh cadence, the standard ossifies.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
