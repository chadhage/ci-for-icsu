# Cost of Poor Quality (COPQ)

> **Persona:** CSAM · Customer Success Account Manager  
> **Module group:** Value & Quality Definition · **Delivery:** 30 min

## Executive Summary

Cost of Poor Quality (COPQ) quantifies what defects, rework, escapes, and missed prevention cost the business—split into four buckets: internal failure, external failure, appraisal, and prevention. A commonly cited range puts COPQ in organizations that don't measure it at roughly 15–40% of total spend. For CSAs, calculating COPQ is one of the most effective ways to fund CI work—once leadership sees the cost of low quality, prevention investment is easier to justify.

## What You'll Gain

- Quantification of the current cost of not improving—usually much larger than the cost of improving
- A business case that flips the framing from 'CI is a cost' to 'poor quality is a larger cost'
- Justification for prevention spend (training, automation, design reviews, test suites) that otherwise looks like overhead
- Visibility into rework hidden in roadmaps as 'v2,' 'remediation,' or 'stabilization' cycles
- Alignment between finance and engineering on the same numbers—making investment decisions data-driven

## The Concept, Explained

CI programs die when leadership sees them as costs, not investments. COPQ flips the framing. **A commonly cited range puts COPQ in organizations that don't measure it at 15–40% of total spend—an unfunded cost of low quality.** A customer's CFO blocked further 'DevOps investment.' The CSA computed COPQ from incident hours, escaped-defect rework, and customer credits over 12 months: $4.7M, or 22% of platform spend. The CFO funded a $600K prevention program the next quarter. Year-end COPQ fell to $1.9M. Net: $2.2M.

COPQ has four traditional buckets: **Internal failure** (rework, scrap, failed builds, rolled-back deploys); **External failure** (customer-found defects, incidents, SLA credits, churn—the most expensive bucket per defect); **Appraisal** (QA inspection, manual testing, audits); **Prevention** (training, design reviews, automation—the cheapest bucket per dollar of COPQ reduced). The progression of a maturing org: external → internal → appraisal → prevention.

To estimate COPQ: pick a 12-month window, quantify each bucket in engineering hours and $ impact, sum and express as a % of total spend, then tie reduction targets to specific DMAIC or Kaizen projects. A defensible range beats false precision—report COPQ ±20% and sensitivity-check assumptions.

## In the Field — CSAM · Customer Success Account Manager

**CSAM scenario:** During a renewal conversation, the customer's CFO asks 'Why should we renew with you instead of hiring internal staff?' Instead of a pitch about Azure expertise, you lead with COPQ. You show: before engagement, COPQ was 28% of platform spend (incidents, firefighting, rework); after 6 months of your Kaizen and reliability work, COPQ is 11% of spend. Net savings: $2.1M annualized, achieved by preventing the incidents that used to burn 40% of SRE time. You funded a $300K prevention program (automation, runbooks, design reviews) and recovered $2.1M in firefighting costs. The CFO approves renewal. The conversation wasn't about effort; it was about the size of the hidden tax you eliminated.

## Recap — Key Concepts & Takeaways

- COPQ captures four buckets: Internal failure (rework, failed builds, rollbacks), External failure (incidents, SLA credits, churn), Appraisal (QA, testing, audits), and Prevention (automation, training, design reviews)
- External failure is the most expensive per defect; Prevention is the cheapest lever per dollar of COPQ reduced—the maturing org's progression moves left to right
- Use COPQ to fund CI and Kaizen programs—once leadership sees COPQ as a large share of spend, a prevention program is easier to justify
- Express COPQ as a percentage of total spend for portability and comparison across teams; a defensible range beats false precision
- Tie COPQ reduction targets to specific projects—each DMAIC or Kaizen effort should claim a piece of the COPQ reduction to stay focused on business impact

## Knowledge Check

### 1. What are the four traditional buckets that make up COPQ?

- **A.** Labor, Materials, Overhead, Profit.
- **B.** Internal failure, External failure, Appraisal, Prevention.
- **C.** Design, Build, Test, Deploy.
- **D.** Rework, Failures, Audits, Automation.

**Correct answer:** B. Internal failure, External failure, Appraisal, Prevention.

COPQ captures **all costs** of poor quality: internal rework, customer-found defects, inspection/testing, and prevention work to avoid defects.

### 2. Which COPQ bucket is typically the most expensive per defect?

- **A.** Prevention (training, automation, design reviews).
- **B.** Appraisal (inspection, manual testing, audits).
- **C.** Internal failure (rework, rolled-back deploys).
- **D.** External failure (incidents, SLA credits, churn).

**Correct answer:** D. External failure (incidents, SLA credits, churn).

Customer-found defects — incident response, SLA credits, and churn — are the most expensive. **Prevention** is the cheapest lever per dollar of COPQ reduced.

### 3. What is the most effective role for COPQ when proposing a new CI or Kaizen program?

- **A.** Show leadership how much the program will cost.
- **B.** Document the current quality baseline for auditing.
- **C.** Justify the program as an investment that reduces larger hidden costs.
- **D.** Replace traditional budgeting processes.

**Correct answer:** C. Justify the program as an investment that reduces larger hidden costs.

COPQ flips the framing from "CI is a cost" to "poor quality is a larger cost." Showing COPQ at 15–40% of unmeasured spend justifies **prevention investment**.

### 4. Which of these items should NOT be included in a COPQ calculation?

- **A.** Rolled-back deploys and emergency rework.
- **B.** Incident hours and firefighting labor.
- **C.** Estimated revenue churn from quality-related customer departures.
- **D.** Normal engineering salaries for feature development work.

**Correct answer:** D. Normal engineering salaries for feature development work.

COPQ includes defect-related rework and escalations. It does NOT include the baseline cost of **value-adding work** — only waste and failure costs.

### 5. Why is expressing COPQ as a percentage of total spend more useful than reporting an absolute dollar amount?

- **A.** Percentages are simpler to calculate without a finance partner.
- **B.** It makes COPQ portable and comparable across teams of different sizes.
- **C.** It reduces the absolute number reported to leadership.
- **D.** It complies with accounting standards and audit requirements.

**Correct answer:** B. It makes COPQ portable and comparable across teams of different sizes.

A $2M COPQ is hard to contextualize without total spend. Expressing it as a percentage (22% vs. 5%) makes the **true business impact** visible and comparable.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
