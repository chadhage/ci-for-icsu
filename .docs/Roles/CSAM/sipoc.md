# SIPOC

> **Persona:** CSAM · Customer Success Account Manager  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

SIPOC—Suppliers, Inputs, Process, Outputs, Customers—is a one-page, high-level process map that forces the team to agree on scope and boundaries before drilling into detail. Most stalled improvement efforts fail not from bad analysis but from ambiguous scope. SIPOC nails scope down in a single page everyone can read and sign off on.

## What You'll Gain

- Align sponsors, engineers, and customers on what 'this process' actually means
- Surface hidden suppliers and downstream customers ignored by the original problem statement
- Anchor the Define phase of DMAIC and pre-work for Kaizen events
- Provide the input list for a value stream map and output list for a VOC exercise

## The Concept, Explained

SIPOC is a five-column diagram: Suppliers (who provides the inputs), Inputs (what the process consumes), Process (5–7 highest-level steps), Outputs (what the process produces), and Customers (who receives the outputs).

The Process column is the key constraint: 5–7 steps maximum. More than 7 means too low-level; fewer than 5 usually means hidden steps. Each output must have a customer; each input must have a supplier—no orphans. Suppliers and customers can be internal teams, external customers, or systems.

To build a SIPOC: define the start trigger and done state first (boundaries), sticky-note the 5–7 process steps, then identify outputs and their customers, then inputs and suppliers. Walk it backwards with the team—read C → O → P → I → S aloud—so gaps and disagreements surface fast. The SIPOC becomes the scope reference for the rest of the project.

## In the Field — CSAM · Customer Success Account Manager

A CSAM is onboarding a new customer for an Azure consumption engagement. The customer says they want a 'deployment improvement project,' but four teams (dev, security, DBA, network) have different views of what 'deployment' means. In 60 minutes with those four teams on a whiteboard, the CSAM builds a SIPOC. The Process column lists Build → Test → Scan → Approve → Deploy. Suppliers include upstream security-gate teams and DBAs. Customers are QA teams and API consumers. Suddenly the team sees that 3 hidden suppliers exist and half the lead time lives in handoffs to those teams. Scope resets in one hour instead of drifting for six months.

## Recap — Key Concepts & Takeaways

- SIPOC forces agreement on scope boundaries before drilling into detail
- The Process column must have 5–7 steps maximum; more means too granular
- Each output has a customer; each input has a supplier—no orphans allowed
- Build SIPOC in 60 minutes with the people who do the work
- SIPOC anchors DMAIC Define, Kaizen pre-work, and new engagement scoping

## Knowledge Check

### 1. What does SIPOC stand for?

- **A.** Sources, Items, Procedure, Owners, Customers.
- **B.** Suppliers, Inputs, Process, Outputs, Customers.
- **C.** Sponsors, Issues, Plan, Outcomes, Controls.
- **D.** Stakeholders, Inputs, Phases, Outputs, Constraints.

**Correct answer:** B. Suppliers, Inputs, Process, Outputs, Customers.

SIPOC — **Suppliers, Inputs, Process, Outputs, Customers** — reads left-to-right and is the first artifact built when a team can't yet agree on what they're improving.

### 2. How many steps should the Process column contain?

- **A.** 1 to 3, to keep things simple.
- **B.** 5 to 7 maximum — more means too low-level, fewer usually means hidden steps.
- **C.** Exactly 10, one per phase.
- **D.** As many as needed to capture every detail.

**Correct answer:** B. 5 to 7 maximum — more means too low-level, fewer usually means hidden steps.

The **5–7 step rule** keeps SIPOC at the right altitude. More steps belong in a value stream map or detailed process map; fewer usually hide important handoffs.

### 3. What is the primary failure mode that SIPOC prevents?

- **A.** Slow approvals from leadership.
- **B.** Stalled improvement efforts caused by ambiguous scope.
- **C.** Insufficient automation coverage.
- **D.** Engineering burnout from too many meetings.

**Correct answer:** B. Stalled improvement efforts caused by ambiguous scope.

Most stalled improvement efforts fail not from bad analysis but from **ambiguous scope**. SIPOC pins scope down in a single page everyone can read and sign off on.

### 4. When facilitating a SIPOC, what should you do BEFORE drawing the process steps?

- **A.** List every possible supplier and customer.
- **B.** Define the start trigger and the done state — the boundaries — first.
- **C.** Have leadership pre-approve the steps.
- **D.** Pick a software tool to capture the diagram.

**Correct answer:** B. Define the start trigger and the done state — the boundaries — first.

**Boundaries first.** Write the trigger event and success criterion above the board before sticky-noting steps. Without explicit boundaries, the process column drifts and the SIPOC loses focus.

### 5. When is SIPOC the wrong tool to use?

- **A.** DMAIC Define phase.
- **B.** Pre-work for a Kaizen event.
- **C.** A detailed VSM already exists and the team agrees on scope — SIPOC would be duplicative.
- **D.** Resolving scope disputes between teams.

**Correct answer:** C. A detailed VSM already exists and the team agrees on scope — SIPOC would be duplicative.

Don't use SIPOC when a detailed VSM already exists and scope is agreed, when the work is genuinely one-step, or when it becomes a **substitute for actually walking the process** (Gemba).

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
