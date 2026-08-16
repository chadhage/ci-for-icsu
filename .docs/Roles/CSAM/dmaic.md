# DMAIC

> **Persona:** CSAM · Customer Success Account Manager  
> **Module group:** Methodologies & Cycles · **Delivery:** 30 min

## Executive Summary

DMAIC—Define, Measure, Analyze, Improve, Control—is the Six Sigma methodology for fixing underperforming processes. Each phase has a tollgate; you do not proceed until evidence is sufficient. The discipline prevents a costly engineering mistake: solving the wrong problem confidently. Use DMAIC when the problem merits weeks-to-months of structured, data-driven work.

## What You'll Gain

- Understand when to use DMAIC vs. faster cycles like PDCA or Kaizen
- Run a structured five-phase project with tollgates that prevent jumping to solutions
- Use data to anchor decisions and kill opinion-driven changes
- Set up a Control phase that keeps improvement gains from regressing
- Apply DMAIC to reliability, cost, and capacity programs

## The Concept, Explained

DMAIC provides a structured framework with five phases and tollgates. **Define** aligns on problem, scope, and measurable goal using project charter, SIPOC, and voice of customer. **Measure** establishes baseline performance and validates the measurement system itself. **Analyze** identifies root causes through Ishikawa, 5 Whys, and data-driven hypothesis testing—not guesses. **Improve** pilots changes and compares post-change performance to baseline. **Control** sustains the gain through standardization via infrastructure as code, policy, runbooks, and monitoring.

Each tollgate prevents the team from advancing without sufficient evidence. A control chart showing that gains held, an Ishikawa diagram with root causes grounded in data, and a baseline with 4+ weeks of defensible measurement are examples of tollgate requirements. The anti-pattern to avoid is the 'DMAIC sprint'—running all five phases in a week without real gates. That is a Kaizen, not a DMAIC.

DMAIC pairs naturally with Belt projects and large programs. Use it when existing processes are underperforming and the cause is unclear. Do not use DMAIC for designing new processes (use DMADV), same-day fixes (use PDCA), or strategic change (use Hoshin Kanri). During an active incident, stabilize and restore service first; DMAIC is for finding and removing the root cause afterward, not for firefighting in the moment.

## In the Field — CSAM · Customer Success Account Manager

A CSAM supporting a customer's reliability initiative uses DMAIC to structure a multi-quarter program that cuts incident rate from 8 per month to 2 per month. During Define, the CSAM aligns the customer's leadership on the charter: reduce MTTR and incident volume to improve customer trust and platform consumption. Measure establishes a baseline incident rate and MTTR from 8 weeks of production data. Analyze uses a Pareto chart to show that 60% of incidents come from one root cause: a single microservice's timeout. Improve pilots a circuit-breaker pattern; post-pilot measurement confirms the change. Control phase codifies the pattern across all similar services via policy and runbooks. The CSAM translates the capability number (incident rate post-control) into business value: 'Platform is now stable enough for your team to focus on feature velocity instead of firefighting.' Consumption grows because engineering team velocity increases.

## Recap — Key Concepts & Takeaways

- DMAIC is for weeks-to-months problems with unclear root causes; use PDCA for faster cycles and Kaizen for same-day events
- Tollgates stop you from jumping to solutions before understanding the problem via data
- Define → Measure → Analyze → Improve → Control is the rigid sequence; each phase has concrete deliverables
- The Control phase is not optional; standardization and sustained monitoring prevent regression
- Use DMAIC to certify Green and Black Belts, structure customer reliability programs, and build searchable playbook knowledge

## Knowledge Check

### 1. What does DMAIC stand for?

- **A.** Design, Measurement, Analysis, Implementation, Control.
- **B.** Define, Measure, Analyze, Improve, Control.
- **C.** Deploy, Monitor, Assess, Improve, Correct.
- **D.** Decision, Metrics, Assessment, Implementation, Closure.

**Correct answer:** B. Define, Measure, Analyze, Improve, Control.

DMAIC stands for **Define, Measure, Analyze, Improve, Control** — five sequential phases, each with a tollgate preventing advancement without sufficient evidence.

### 2. What is the primary purpose of tollgates in DMAIC?

- **A.** To schedule meetings with project stakeholders.
- **B.** To prevent jumping to solutions before the problem is understood.
- **C.** To assign budget to each phase of the project.
- **D.** To document lessons learned at phase boundaries.

**Correct answer:** B. To prevent jumping to solutions before the problem is understood.

Tollgates stop a costly engineering mistake: **solving the wrong problem confidently**. Each gate ensures evidence is sufficient before the next phase begins.

### 3. When should you use DMAIC instead of PDCA or Kaizen?

- **A.** For any quick fix or same-day problem resolution.
- **B.** When the problem is significant enough to merit weeks-to-months of structured work.
- **C.** For designing brand-new processes that don’t yet exist.
- **D.** Only when you have a Green Belt project certification candidate.

**Correct answer:** B. When the problem is significant enough to merit weeks-to-months of structured work.

DMAIC fits problems big enough to merit weeks-to-months of structured, data-driven work. For shorter cycles use PDCA or Kaizen; for **new process design** use DMADV.

### 4. What happens during the Control phase of DMAIC?

- **A.** The team identifies which hypotheses to test next.
- **B.** Measurement systems are validated for accuracy.
- **C.** The gain is standardized and sustained through standard work and monitoring.
- **D.** Root causes are identified and ranked by impact.

**Correct answer:** C. The gain is standardized and sustained through standard work and monitoring.

The Control phase **sustains the gain** through standardization via IaC, Policy, runbooks, dashboards, and alerts — so improvements do not regress after the project ends.

### 5. Which is an anti-pattern to avoid in DMAIC execution?

- **A.** Collecting more data than absolutely required during Measure.
- **B.** Running all five phases in a week with no meaningful tollgates.
- **C.** Involving the process owner too early in Define.
- **D.** Using statistical tools like hypothesis testing in Analyze.

**Correct answer:** B. Running all five phases in a week with no meaningful tollgates.

Running all phases in a week without real gates is not DMAIC — it’s a **Kaizen event**. DMAIC requires phases to have real gates and adequate evidence per phase.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
