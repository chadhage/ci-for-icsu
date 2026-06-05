[← Back to Index](./index.md)

---

# Voice of the Customer (VOC)

## TL;DR

Voice of the Customer (VOC) is the structured capture of what customers actually need, expressed in their own words, and the translation of those needs into measurable requirements ([CTQs](./ctq.md)). VOC is the input to every improvement effort that matters — without it, teams optimize what is convenient to measure, not what customers value. For CSAs, VOC is the antidote to the most common engagement failure: shipping technical excellence the customer didn't need. Capture VOC during Define ([DMAIC](./dmaic.md)), during [Kaizen](./kaizen.md) pre-work, and as a recurring practice — customer needs evolve and undocumented assumptions decay.

## Table of Contents

- [Why VOC](#why-voc)
- [What VOC is](#what-voc-is)
- [How to capture VOC](#how-to-capture-voc)
- [When to use VOC](#when-to-use-voc)
- [Where VOC shows up](#where-voc-shows-up)
- [Who runs VOC](#who-runs-voc)
- [Examples](#examples)
- [Knowledge check](./knowledge-checks/voc.html)

## Why VOC

Engineers optimize what's measurable; what's measurable is rarely what customers value. VOC closes the gap.

- Surfaces unspoken expectations ("basic" Kano requirements teams take for granted).
- Identifies delighters — capabilities that disproportionately drive renewal.
- Prevents over-engineering of features customers are indifferent to.
- Anchors [CTQ](./ctq.md) translation in real words, not inferred ones.

**Real example:** A customer SRE team had been improving P50 latency for 8 months. VOC interviews with downstream consumers revealed they cared about P99 and time-to-first-byte; P50 was already well below their threshold. The team's 8 months of work was real, measurable, and irrelevant. Three weeks of P99 work, after VOC, produced visible value.

## What VOC is

VOC has three stages:

| Stage             | Goal                                | Output                          |
| ----------------- | ----------------------------------- | ------------------------------- |
| Capture           | Customer statements in their words  | Verbatim quotes, observations   |
| Translate         | Convert statements to needs         | Need statements                 |
| Specify ([CTQ](./ctq.md)) | Convert needs to measurable specs   | CTQ tree with metrics & targets |

Kano model categories (useful framing):

- **Basic / Must-be** — customers expect; absence kills satisfaction; presence is invisible.
- **Performance / Linear** — more is better; satisfaction scales with performance.
- **Delighter / Excitement** — customers don't know to ask; presence creates loyalty.

Capture sources:

- Direct interviews and observations (highest fidelity).
- Support tickets, NPS comments, churn-reason data (free, lossy).
- Telemetry — what customers *do* (complements what they *say*).
- Internal customer surrogates (account team, support) — useful but biased.

## How to capture VOC

1. **Plan the sample.** Who matters? Power users, new users, churn risks, internal consumers. Diverse, not just loud.
2. **Use open questions.** "Tell me about your last bad day with X." Not "Are you satisfied?"
3. **Observe as well as ask.** Watch the work. Words mismatch behavior often.
4. **Capture verbatim.** Quotes preserve nuance translation destroys.
5. **Translate to needs.** Group quotes; restate as needs ("I need X so I can Y").
6. **Specify CTQs.** Each need → one or more measurable spec (see [ctq.md](./ctq.md)).
7. **Test back with customers.** Confirm the translation didn't lose meaning.
8. **Refresh on cadence.** VOC is not a one-shot.

**Anti-pattern to avoid:** the "VOC survey" with 4 multiple-choice questions designed by engineers. It captures the team's hypotheses, not the customer's voice.

## When to use VOC

- Starting any improvement project (DMAIC Define).
- Kaizen pre-work scoping.
- Before any roadmap decision about prioritization.
- After a churn event or major escalation.
- Quarterly refresh during long engagements.

## Where VOC shows up

- DMAIC Define tollgate package.
- [Project charters](./project-charter.md).
- Quarterly business reviews.
- Roadmap prioritization meetings.
- Postmortems where customer impact is unclear.
- AI agent product reviews — VOC on agent users is its own discipline.

## Who runs VOC

- **CSAs** — facilitate; ensure samples are diverse and questions open.
- **Product managers / UX researchers** — own ongoing VOC for product orgs.
- **Customer success** — primary internal surrogate; rich but biased.
- **Customer-of-customer** (in B2B) — the truly important voice; hardest to reach.

## Examples

### Example 1 — Latency misalignment

P50 work invalidated by P99 VOC finding. Three-week pivot produced visible customer value.

### Example 2 — Hidden basic requirement

VOC surfaced "logs must persist 90 days for audit." Team had set 30-day retention. Audit failures were imminent; VOC caught it.

### Example 3 — Delighter discovery

VOC interviews on a developer portal surfaced "one-click reproducible local dev" as undocumented delighter. Implementation cost 2 weeks; renewal rate on the cohort that used it rose 18 points.

### Example 4 — Support ticket VOC

Pareto on 6 months of support tickets surfaced 3 root issues representing 71% of tickets. Two were unmentioned in any account review.

### Example 5 — Telemetry-confirmed VOC

Customers said "we use feature X heavily." Telemetry: 4 invocations in 30 days. Reprioritization saved the team a quarter of feature X investment.

### Example 6 — VOC on internal consumers

Platform team treated app teams as customers. VOC revealed onboarding doc gaps drove most "platform is bad" sentiment. Documentation fix moved CSAT 22 points.

### Example 7 — AI agent VOC

User session transcripts treated as VOC. Top three failure modes drove the next eval suite and prompt-improvement cycles.

### Example 8 — Kano-categorized VOC

Customer feature list categorized as Basic/Performance/Delighter. Roadmap reshuffled — 4 Basics had been deprioritized.

### Example 9 — Churn-reason VOC

Reviewed 12 months of churn reasons; one pattern accounted for 60%. Targeted countermeasures cut churn 28% the next year.

### Example 10 — Quarterly VOC refresh

CSA standardized quarterly VOC refresh into the engagement. Roadmap decisions tied to fresh VOC quotes; sponsor pushback on prioritization dropped notably.
