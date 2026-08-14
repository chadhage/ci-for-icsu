# FMEA

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Process Mapping & Analysis · **Delivery:** 30 min

## Executive Summary

FMEA—Failure Mode and Effects Analysis—systematically anticipates how a process or system can fail, scores each failure mode on Severity × Occurrence × Detection to produce a Risk Priority Number (RPN), and drives mitigations on the highest-RPN items first. It is structured 'what could go wrong?' for pre-deployment risk assessment and AI system governance.

## What You'll Gain

- Anticipate failures before they happen, not after postmortems
- Score failures by Severity (how bad), Occurrence (how often), Detection (how well controlled)
- Prioritize mitigations by RPN (risk priority number), focusing on the worst risks first
- Identify failure modes that current controls don't detect
- Create a living risk document that travels with the system and updates after incidents

## The Concept, Explained

FMEA systematically documents failure modes, effects, causes, and current controls for each function in a system. For each mode: rate Severity (1–10, where 10 is catastrophic), Occurrence (1–10, how likely), Detection (1–10, where 10 is 'won't detect it'), then calculate RPN = S × O × D (1–1000). Sort by RPN and address the highest-RPN modes first. Variants: Process FMEA (manufacturing/processes, maps to engineering workflows), Design FMEA (product pre-release), System FMEA (architecture-level risks across services).

Key practice: agree on the 1–10 scales before you start. Otherwise teams burn 80% of the workshop debating whether something is a 7 or an 8. Anti-pattern to avoid: the one-time FMEA that ships with the project and never updates. The risk model decays; incidents should trigger a refresh to the FMEA to capture newly discovered modes.

Workflow: pick scope (one process, system, or feature), build a cross-functional team, brainstorm failure modes (use Ishikawa / 6Ms for exhaustiveness), for each mode capture effect, cause, current controls, then score S, O, D and calculate RPN. Assign actions and re-score after mitigation. RPN should fall. Make it a living document refreshed on incidents, releases, and architecture changes.

## In the Field — CSA · Cloud Solution Architect

A CSA is running FMEA on a customer's Cosmos DB architecture before a production launch. Failure modes identified: hot partition key (S=8, O=6, D=8, RPN=384), network timeout due to connection pooling (S=7, O=3, D=6, RPN=126), data corruption from application bug (S=10, O=2, D=4, RPN=80). Top-RPN is partition-key design. The team implements partition-key validation in IaC (reducing O to 1 post-implementation). Secondary modes (timeout, data corruption) get detective controls (alerting, audit logging) rather than prevention. The FMEA ranked effort by actual risk.

## Recap — Key Concepts & Takeaways

- FMEA anticipates failures before incidents happen
- RPN = Severity × Occurrence × Detection; rank by RPN to prioritize
- Establish 1–10 scoring scales before starting—debating a single score kills productivity
- FMEA is a living document; refresh after incidents and architecture changes
- Pair with Poka-Yoke—each top-RPN mode becomes a mistake-proofing target

## Knowledge Check

### 1. What does RPN stand for in FMEA?

- **A.** Risk Planning Number.
- **B.** Risk Priority Number.
- **C.** Ranked Priority Number.
- **D.** Risk Process Notation.

**Correct answer:** B. Risk Priority Number.

**Risk Priority Number** (RPN) is Severity × Occurrence × Detection, producing a score that prioritizes which failure modes to address first.

### 2. How is RPN calculated?

- **A.** Severity + Occurrence + Detection.
- **B.** Severity &minus; Occurrence + Detection.
- **C.** Severity × Occurrence × Detection.
- **D.** (Severity × Occurrence) &divide; Detection.

**Correct answer:** C. Severity × Occurrence × Detection.

RPN = **Severity × Occurrence × Detection**. Multiplication means a single dimension at the worst score drives a high RPN, focusing attention on the most consequential modes.

### 3. What should you establish BEFORE starting an FMEA workshop?

- **A.** A list of every conceivable failure mode.
- **B.** Pre-agreed 1–10 scoring scales for Severity, Occurrence, and Detection.
- **C.** The budget for mitigating the top-RPN items.
- **D.** Two years of historical incident data.

**Correct answer:** B. Pre-agreed 1–10 scoring scales for Severity, Occurrence, and Detection.

Teams must agree on the **1–10 scales** before brainstorming. Otherwise the workshop is spent debating whether something is a 7 or an 8 instead of analyzing risk.

### 4. What are the three main variants of FMEA?

- **A.** Hardware, Software, and Process.
- **B.** Design, System, and Architecture.
- **C.** Process, Design, and System.
- **D.** Preventive, Detective, and Corrective.

**Correct answer:** C. Process, Design, and System.

The variants are **Process FMEA** (manufacturing/processes), **Design FMEA** (product pre-release), and **System FMEA** (architecture-level risks across services).

### 5. What is the key anti-pattern to avoid in FMEA management?

- **A.** Scoring a failure mode as Severity 10 when it should be 9.
- **B.** Creating a one-time FMEA document that is never updated again.
- **C.** Involving too many people in the workshop.
- **D.** Addressing the lowest-RPN items first to build momentum.

**Correct answer:** B. Creating a one-time FMEA document that is never updated again.

The **one-time FMEA** ships with the project and never updates. Risk models decay; FMEA must be a living document refreshed after incidents and architecture changes.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
