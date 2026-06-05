[← Back to Index](./index.md)

---

# Continuous Improvement @ Microsoft

## TL;DR

Continuous Improvement at Microsoft is the connective tissue between the customer-facing CSA practice and the engineering / product groups that build Azure. It shows up as the iCSU CI Community of Practice, the WAF / Advisor / Defender feedback loops, the CSE / FastTrack playbook repositories, and the cross-team rituals (retrospectives, monthly CoP meetings, shared standard work) that compound learnings across the org. For a CSA it is both a *resource* (skilling, playbooks, peers) and a *responsibility* (contribute the patterns you validate, escalate the systemic ones to PG). Done well, CI@MS turns every customer engagement into both an outcome for that customer and a reusable asset for every CSA that follows.

## Table of Contents

- [Why CI at Microsoft](#why-ci-at-microsoft)
- [What CI at Microsoft Looks Like](#what-ci-at-microsoft-looks-like)
- [Belt accreditation at Microsoft](#belt-accreditation-at-microsoft)
- [How to engage with CI at Microsoft](#how-to-engage-with-ci-at-microsoft)
- [When to lean on CI at Microsoft](#when-to-lean-on-ci-at-microsoft)
- [Where CI at Microsoft shows up](#where-ci-at-microsoft-shows-up)
- [Who participates](#who-participates)
- [Examples](#examples)
- [Knowledge check](https://chadhage.github.io/ci-for-icsu/ms-ci-cop.html)

## Why CI at Microsoft

A single CSA owns a handful of accounts. Microsoft has thousands of CSAs and tens of thousands of customers running Azure. Without a CI practice that aggregates learnings across the org, every CSA re-discovers the same patterns, every customer relives the same incidents, and the PG never hears the signal loudly enough to fix the root cause.

CI@MS exists to:

- Surface recurring customer patterns across accounts so PG / Azure engineering can prioritize fixes.
- Codify validated engagement patterns into shared playbooks (WAF, ADS, FastTrack, CSE, CSA Playbook Library).
- Standardize the high-leverage tools — Pareto, Ishikawa, 5 Whys, 6Ms, 8 Wastes — so cross-team conversations share vocabulary.
- Run skilling and onboarding on validated curriculum, not on whoever happens to be available.
- Build a feedback channel from field to product that is data-driven (incident Pareto across accounts), not anecdotal.

**Real example:** A CSA observed `MaxDeliveryCountExceeded` dead-lettering on Service Bus across 4 of their 7 accounts. Posting the Pareto to the iCSU CI CoP surfaced 11 more CSAs seeing the same pattern across ~60 accounts. Aggregated evidence went to the Service Bus PG; the SDK guidance and the portal warning were both updated the next quarter. A single CSA's observation became a product-level improvement.

## What CI at Microsoft Looks Like

CI@MS is a set of structures, not a single program:

- **iCSU CI Community of Practice** — the cross-CSA forum for sharing patterns, running retrospectives, and curating standard work (this repo's parent).
- **WAF (Well-Architected Framework)** — the standardized assessment that produces a measurable baseline customers can re-assess against. CI@MS is what keeps WAF guidance current as Azure evolves.
- **Azure Advisor & Defender for Cloud** — the always-on telemetry layer that surfaces per-customer improvement opportunities, used as the input to per-account CI cycles.
- **CSA / CSE / FastTrack playbook libraries** — versioned, peer-reviewed engagement patterns. Each playbook is itself the output of many CI cycles.
- **MS Learn & internal skilling tracks** — curriculum maintained as standard work; updated each cycle as Azure ships new capability.
- **Skills / Skill files (this repository pattern)** — codified domain knowledge that agents and CSAs can both consume.
- **Cross-team rituals** — monthly CoP calls, quarterly skilling weeks, blameless postmortems for high-severity engagements, "what worked / what didn't" segments at team meetings.
- **Field-to-PG signal channels** — ICM signature analysis, ACR (Azure Consumed Revenue) blocker reports, structured PG escalation paths.

What distinguishes CI@MS from "internal Wiki of tips":

- **Measured.** Every published pattern carries the evidence that it worked.
- **Versioned.** Patterns evolve cycle over cycle; old versions are deprecated, not deleted.
- **Owned.** Each playbook has a named maintainer and a refresh cadence.
- **Reusable.** Patterns are written for the next CSA to apply, not as a war story.

**Real example:** The CSA team's "first 30 days of a new strategic account" playbook started as a one-pager from a single engagement. Over 2 years and ~40 contributing CSAs, it became a 60-page versioned guide with branch-specific paths for AKS-heavy, data-heavy, and AI-heavy accounts. New CSAs onboard to engagements in weeks, not quarters.

## Belt accreditation at Microsoft

Microsoft's Lean Six Sigma program recognizes the **American Society for Quality (ASQ)** as the credentialing body for the belt ladder described in [belts.md](belts.md) — Yellow, Green, and Black Belt. The FY26 DFSS / Lean Six Sigma Rhythm of Business (run out of the Devices Lean Six Sigma program) tracks **ASQ certification progress** alongside project graduation and mentorship as one of the standing community-cadence metrics. In other words, ASQ is what shows up on the scoreboard the program reviews each cycle.

What that means in practice for a CSA:

- When you scope a belt, default to an **ASQ-aligned curriculum and exam path**. It is the credential the program is set up to recognize and report on.
- The credential is paired with **a real project and a mentor** — the program tracks all three together. Passing the exam alone is not the deliverable; the graduated, measured project is.
- Plan your belt journey on the same cadence the ROB uses: certification progress, project status, and mentor engagement reviewed quarterly. Treat your own progress as a CI loop.

A couple of caveats worth surfacing up front so you do not overreach:

- The explicit ASQ tracking lives in the **Devices DFSS / Lean Six Sigma ROB**. Other Microsoft orgs run their own CI programs and may also accept **IASSC** or **CSSC** credentials, particularly for tuition reimbursement or career-framework crediting.
- For company-wide questions — reimbursement, career ladder credit, or which provider HR will fund — confirm with your **HR business partner** or the **iCSU CI CoP lead** before committing to a program. The accredited-body landscape ([belts.md](belts.md#what-the-belt-levels-are)) is broader than what any single org tracks.

The short version: if you do not have a reason to choose otherwise, **pick ASQ**. It is the credential Microsoft's Lean Six Sigma cadence already speaks the language of.

## How to engage with CI at Microsoft

CSAs both *consume* and *contribute* to CI@MS. Skipping either side breaks the loop.

1. **Start with the existing playbooks.** Before designing a new engagement, search the CSA playbook library, the WAF guidance, and this CoP's docs. Most patterns already exist.
2. **Use the standard tools.** Pareto, Ishikawa, 5 Whys, 6Ms, 8 Wastes — when a CSA uses these, peer review and handoff are frictionless. When they invent a one-off framework, the work doesn't compound.
3. **Run the engagement as PDCA.** Baseline → change → measure → standardize. Document each cycle in the customer's ADR repo *and* contribute the pattern back.
4. **Bring patterns to the CoP.** Monthly CoP calls have a "what I validated this month" slot. A 5-minute share is the entry fee.
5. **Escalate systemic signals.** If the same root cause shows up in 3+ accounts, that's a PG conversation, not a CSA workaround. Use the ACR blocker / ICM signature channels.
6. **Curate, don't hoard.** Patterns improve when they are critiqued. Publish drafts; let peers PR them.
7. **Re-baseline yearly.** Azure changes fast. A 2-year-old playbook is a hypothesis until re-validated. CI@MS itself runs on CI.

**Anti-pattern to avoid:** the "lone genius" CSA who validates 30 patterns across their accounts but never publishes. The org pays the cost of every other CSA re-discovering them.

## When to lean on CI at Microsoft

Use CI@MS resources when:

- Onboarding to a new account, technology, or engagement type — the playbook probably exists.
- Diagnosing a customer issue that "feels familiar" — the cross-CSA Pareto probably has it.
- Designing a workshop or assessment — the WAF / skilling library has versioned content.
- Hitting a recurring product limitation — escalate via the field-to-PG channel.
- Running a retrospective — the CoP has standard work for blameless postmortems.

Contribute back when:

- You ran a full PDCA cycle and have measured evidence.
- You discovered a pattern that addresses 80%+ of a recurring class of issue.
- A playbook was wrong, outdated, or incomplete — fix it.
- A customer's IaC module solves a generic problem (with their permission) — generalize and contribute.

Do **not** treat CI@MS as:

- A search engine for "give me a deck for tomorrow's meeting" without reading the underlying material.
- A blame channel for PG.
- A substitute for direct customer evidence — patterns are starting points, not conclusions.

## Where CI at Microsoft shows up

In practical CSA surfaces:

- **iCSU CI CoP repository / docs** — this site; the canonical tools and templates.
- **CSA Playbook Library** — versioned engagement patterns (intake, assessment, modernization, escalation).
- **WAF assessment tooling** — standardized scoring + remediation backlog format.
- **Azure Advisor exports & Defender for Cloud recommendations** — per-account improvement inputs.
- **ICM / IcM signature analysis dashboards** — cross-account incident Paretos.
- **ACR (Azure Consumed Revenue) blocker tracker** — the escalation channel for systemic blockers that hold up consumption.
- **MS Learn paths + Microsoft Learn Plans** — customer-facing skilling, curated by the CSA community.
- **GitHub repos under microsoft / Azure / Azure-Samples** — many CSA-contributed IaC and code patterns live here.
- **Internal Teams channels per technology area** — fast-cycle Q&A and pattern sharing.
- **Quarterly CSA TechCon / skilling weeks** — the high-bandwidth retrospective venue.
- **DFSS / Lean Six Sigma ROB** — the rhythm of business where belt progress (ASQ certification, projects, mentorship) is reviewed alongside other CI metrics. See [Belt accreditation at Microsoft](#belt-accreditation-at-microsoft).

**Real example:** A CSA preparing an EBR for a Tier-1 customer pulled the WAF reliability template (CI@MS standard work), the cross-account AKS incident Pareto (CI@MS dashboard), and the customer's Advisor export (Azure surface). Assembly time dropped from 2 days to 3 hours; the resulting deck was peer-reviewed against the CoP's EBR template before delivery.

## Who participates

- **CSAs** — primary consumers and contributors. Run PDCA on accounts; publish validated patterns.
- **CSA managers / leads** — protect time for CoP participation; treat playbook contribution as a performance signal, not a side hustle.
- **Domain CSAs (AKS, Data, AI, Security)** — own the deep-dive playbooks in their area; maintain the standard work.
- **CSE (Customer Success Engineering) / FastTrack** — adjacent practices with their own CI loops; cross-pollinate patterns.
- **PG / Azure engineering** — consumers of the aggregated field signal; producers of product-level CI (docs, defaults, portal warnings, SDK guidance).
- **CXP / Support** — the ICM signature pipeline that feeds the cross-account Pareto.
- **Field leadership** — sponsors of the CI cadence; resists short-term pressure to abandon it.

CI@MS is a many-to-many practice. Any role that only consumes (or only contributes) eventually breaks it.

## Examples

### Example 1 — Pattern contribution lifecycle

A CSA validated a Cosmos DB hierarchical partition key (HPK) pattern across 3 accounts.

| Step | Action |
| ---- | ------ |
| 1    | Documented the pattern with before/after RU/s and $ data in the customer's ADR repo. |
| 2    | Shared a 5-minute lightning talk at the monthly CoP. |
| 3    | Peer-reviewed by 2 Cosmos domain CSAs; 1 round of feedback. |
| 4    | Merged into the Data CSA playbook with a versioned IaC module. |
| 5    | Picked up by 6 other CSAs over the next 2 quarters. |

One CSA's 2-account experiment became standard work for the org.

### Example 2 — Cross-account signal to PG

| Account | Incident signature           | Sev | Frequency / mo |
| ------- | ---------------------------- | --- | -------------- |
| A       | AOAI 429 — single region     | B   | 18             |
| B       | AOAI 429 — single region     | B   | 22             |
| C       | AOAI 429 — single region     | A   | 9              |
| D       | AOAI 429 — single region     | B   | 14             |

Aggregated by 4 CSAs, escalated via the ACR blocker channel with a Pareto and proposed PTU sizing guidance. PG response: an updated quota request flow and new portal capacity guidance. Field-to-PG CI in action.

### Example 3 — WAF playbook refresh

Annual review of the WAF Reliability playbook.

- **Plan:** survey 40 CSAs on which recommendations didn't reflect current Azure capability.
- **Do:** rewrite the 6 most-flagged sections (App Service zone redundancy, ACA availability zones, AKS Automatic, Cosmos multi-region writes, Storage ZRS defaults, Front Door SKU guidance).
- **Check:** beta with 8 engagements; measure assessment delivery time and customer NPS on the readout.
- **Act:** publish v2; deprecate v1 with a migration note.

The playbook is itself a PDCA artifact.

### Example 4 — Skilling track CI

The CSA "AKS for Specialists" track ran for 3 cohorts before CI applied.

| Cohort | Avg post-quiz | Time to first customer engagement |
| ------ | ------------- | --------------------------------- |
| 1      | 71%           | 6 weeks                           |
| 2      | 74%           | 5 weeks                           |
| 3      | 76%           | 5 weeks                           |

CoP retrospective surfaced: too much theory, not enough hands-on. Cohort 4 added a graded lab.

| Cohort | Avg post-quiz | Time to first customer engagement |
| ------ | ------------- | --------------------------------- |
| 4      | 88%           | 3 weeks                           |

Standardized; rolled forward.

### Example 5 — Blameless postmortem standard work

After a multi-CSA outage support engagement, the CoP standardized the postmortem template: timeline → contributing factors (6Ms) → 5 Whys per factor → standard work updates. Adoption tracked by an internal field.

| Quarter | % postmortems using standard template |
| ------- | ------------------------------------- |
| Q1      | 18%                                   |
| Q2      | 47%                                   |
| Q3      | 79%                                   |
| Q4      | 92%                                   |

Cycle-over-cycle, the team's postmortem quality became boringly consistent — exactly the goal.

### Example 6 — Playbook deprecation

A "lift and shift to App Service Classic" playbook had not been updated in 18 months. CoP review found 4 patterns now contradicted current Azure guidance (App Service plan SKUs, deployment slot patterns, identity).

**Act:** the playbook was archived with a redirect to the ACA + App Service Premium v3 playbooks. Deprecation is a CI activity — keeping the corpus *small and current* is more valuable than keeping it big.

### Example 7 — CoP retrospective on itself

The iCSU CI CoP ran a 5 Whys on its own attendance decline.

- Why is attendance down? → Calendars too full.
- Why are calendars full of conflicting recurring calls? → No clear "default" CSA cadence.
- Why no default? → CoP cadence was set 3 years ago without a re-baseline.
- Why no re-baseline? → No standard work for re-baselining the CoP itself.
- Why no standard work? → Nobody owned it.

**Act:** named a CoP cadence owner; added an annual re-baseline as standard work; moved the call to a globally friendlier slot. Attendance recovered next quarter.

### Example 8 — Field input shaping product defaults

CSAs across 15 accounts logged that Cosmos DB containers were being created without indexing policies tuned for the workload, causing silent RU overspend. Aggregated evidence to PG.

**Outcome:** the Cosmos portal "create container" experience added an indexing policy recommender; the SDK quick-starts were updated. A field-aggregated CI cycle improved every future customer's defaults.

### Example 9 — Joint CSA / CSE pattern

CSE owned an internal "AKS Automatic" enablement pattern; CSAs owned the customer-facing rollout pattern. Both teams realized they were doing 60% of the same work.

**Act:** joint authoring of a single pattern, dual-owned, dual-reviewed. Time-to-rollout for new accounts dropped from 6 weeks to 2.

### Example 10 — A CSA's first contribution

A CSA in their first quarter validated a small pattern: enabling diagnostic settings on Service Bus by default in their customer's landing zone IaC.

- **Hesitation:** "Surely this is too obvious to publish."
- **CoP response:** 3 senior CSAs confirmed they were *not* doing it by default; the pattern was merged into the landing-zone reference.
- **Cycle outcome:** the new CSA learned that contribution is a low bar; the org gained a default that 100+ future engagements will inherit.

This is the everyday rhythm of CI@MS — many small contributions, compounded over thousands of CSAs and customers.
