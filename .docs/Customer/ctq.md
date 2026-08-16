# Critical to Quality (CTQ)

> **Persona:** Customer · your team's point of view  
> **Module group:** Value & Quality Definition · **Delivery:** 30 min

## Executive Summary

Critical to Quality (CTQ) trees translate qualitative customer needs from VOC into specific, measurable, achievable specifications with targets and limits. A CTQ has three elements: a need, a driver (the dimension of that need), and a requirement (target + spec limits). Without CTQs, customer needs stay too vague to engineer against or measure progress toward.

## What You'll Gain

- Conversion of fuzzy customer expectations into testable, measurable contracts
- Specification limits (USL, LSL) for process capability analysis and control charts
- Alignment between customer language and engineering metrics—no 'fast' or 'reliable,' only P99 ≤ 800ms or ≥ 99.95% uptime
- SLO/SLA documentation that mirrors the CTQ tree, reducing duplication and drift
- A framework for acceptance testing that reflects what the customer actually values, not engineering convenience

## The Concept, Explained

A customer's 'API must be fast' expectation tells you nothing. A CTQ converts it: dimension = response time; target = P99 ≤ 800ms; spec limits = 0 to 800ms; measurement window = 5-min windows over the last 7 days. Before CTQ: 18 months of disagreement about what 'fast' means. After: a number, a dashboard, and an SLO.

A CTQ tree has three levels: **Need** ('Fast checkout'), **Driver** (the dimension of that need: response time, retry rate, etc.), and **Requirement** (a spec: P99 ≤ 800ms over 5-min windows). Good CTQ requirements are Specific (single dimension), Measurable (data already collected or collectable), Achievable (proven possible), Customer-relevant (moving this moves satisfaction), Time-bounded (over what window?), and Bounded (both USL and LSL, or one with a stated justification).

CTQs come paired with process capability work—they are the specification limits the Cpk calculation uses. CTQs become the success criteria in project charters, the metrics for DMAIC Measure phase, the specs for control charts, and the contract for handoff. The discipline of CTQ writing is the moment fuzzy expectations become testable contracts and the bridge between Define and Measure in DMAIC.

## In the Field — Customer · your team's point of view

A customer's stakeholders keep asking for 'better performance,' which no one can build or verify. Using Critical to Quality, the team translates that vague want into a specific, measurable characteristic with a target and limits: P95 checkout latency at or below 500ms, measured at the API gateway. Suddenly the goal is testable, and every proposed change can be judged against it. The customer's own engineers gain a clear finish line, and leadership gains a number they can track. Turning fuzzy expectations into CTQs is what lets the team prove — not just claim — that quality improved.

## Recap — Key Concepts & Takeaways

- CTQ is the bridge between Define (VOC) and Measure (DMAIC)—it converts customer needs into measurable specs with targets and limits
- Three levels: Need (what customer wants) → Driver (dimension) → Requirement (target + USL/LSL + measurement window)
- Write CTQs with the customer and engineering team together—engineer-written specs often set targets tighter than true customer need, wasting capacity
- CTQs become SLOs, acceptance criteria, control chart limits, and project success metrics—use the same spec across all documents to reduce drift
- Validate CTQ translations with the customer—read the spec back; confirm it captures the original need; iterate if the translation lost meaning

## Knowledge Check

### 1. What are the three levels of a CTQ tree?

- **A.** Need, Driver, and Requirement.
- **B.** Define, Measure, and Control.
- **C.** Specification, Baseline, and Target.
- **D.** Customer, Engineering, and Operations.

**Correct answer:** A. Need, Driver, and Requirement.

A CTQ tree has three levels: **Need** (what the customer wants), **Driver** (dimensions of that need), and **Requirement** (target + spec limits). This structure turns customer expectations into testable contracts.

### 2. In which DMAIC phase are CTQs primarily developed?

- **A.** Measure phase.
- **B.** Define phase.
- **C.** Analyze phase.
- **D.** Control phase.

**Correct answer:** B. Define phase.

CTQs are developed in the **Define phase**, translating Voice of Customer and problem statements into measurable specifications that guide the rest of the project.

### 3. What does SMART mean when writing a CTQ requirement?

- **A.** Stakeholder, Measurement, Achievable, Relevant, Timely.
- **B.** Specific, Measurable, Achievable, Relevant, Time-bounded.
- **C.** Service, Metrics, Acceptable, Result, Targeted.
- **D.** Stakeholder, Manager-approved, Auditable, Realistic, Tracked.

**Correct answer:** B. Specific, Measurable, Achievable, Relevant, Time-bounded.

**SMART** CTQs are Specific, Measurable, Achievable, Relevant, and Time-bounded. Each property makes the requirement actionable.

### 4. What anti-pattern should you avoid when setting CTQs?

- **A.** Setting multiple drivers per need.
- **B.** Including both USL and LSL in requirements.
- **C.** Writing engineer-specified limits tighter than the true customer need.
- **D.** Changing CTQs during the Measure phase.

**Correct answer:** C. Writing engineer-specified limits tighter than the true customer need.

The engineer-written CTQ above customer need is the key anti-pattern. For example, setting P99 ≤ 50 ms when the customer would accept 500 ms **wastes capacity** and misaligns the project from reality.

### 5. How do CTQs relate to process capability analysis?

- **A.** CTQs are inputs that define which processes to analyze.
- **B.** CTQs become the specification limits used in Cpk calculations.
- **C.** CTQs are only used after capability analysis is complete.
- **D.** CTQs replace the need for capability analysis entirely.

**Correct answer:** B. CTQs become the specification limits used in Cpk calculations.

CTQs come paired with process capability work — they are the **specification limits** (USL and LSL) the Cp/Cpk calculation uses to evaluate process fit.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
