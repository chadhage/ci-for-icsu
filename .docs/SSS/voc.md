# Voice of the Customer (VOC)

> **Persona:** Services Solutions Seller · selling improvement outcomes  
> **Module group:** Value & Quality Definition · **Delivery:** 30 min

## Executive Summary

Voice of the Customer (VOC) is the structured capture of what customers actually need, expressed in their own words, and the translation of those needs into measurable requirements (CTQs). Without VOC, teams optimize what is convenient to measure instead of what customers value—which wastes engineering effort and misdirects engagement priorities.

## What You'll Gain

- Alignment on what actually matters to the customer, not what the team assumes matters
- Discovery of unspoken expectations (Kano 'basic' requirements) before they become escalations
- Identification of delighters—capabilities that disproportionately drive renewal and satisfaction
- A framework to refresh customer priorities on a cadence, catching drift before engagement strategy goes stale
- Prevention of over-engineering features customers are indifferent to

## The Concept, Explained

An SRE team improved P50 latency for 8 months. VOC interviews with downstream consumers revealed they only cared about P99 and TTFB. Eight months of real, measurable work was irrelevant to the actual need. **Engineers optimize what's measurable; what's measurable is rarely what customers value. VOC closes that gap.**

VOC has three stages: **Capture** (customer statements in their words, verbatim quotes, observations), **Translate** (group quotes into need statements), and **Specify** (convert needs to measurable specs via CTQs). Capture sources include direct interviews and observations (highest fidelity), support tickets and NPS comments (free, lossy), telemetry (what customers do, not just say), and internal surrogates like the account team (useful but biased).

**Ways to collect VOC.** Choose the instrument by the question you need answered, and triangulate across several—each carries a different bias. **Structured interviews** and **contextual observation (Gemba)** give the highest fidelity and surface unspoken needs, but cost time and reach few people. **Surveys** scale: NPS gauges loyalty and advocacy, CSAT gauges satisfaction with a specific interaction, and CES (Customer Effort Score) gauges how hard it was to get something done—pick the one that matches the decision. **Support tickets, escalations, and NPS verbatims** are free and continuous but lossy and skewed toward complainers. **Telemetry and behavioral data** show what customers actually do rather than what they say—the two often disagree. **Win/loss and churn interviews** expose the needs that drove a buying or leaving decision. **Internal surrogates** (the account team) are convenient but biased—use them to form hypotheses, then confirm directly with the customer. The discipline: never rely on a single source, and weight direct, empirical signal over second-hand or self-reported claims.

The Kano model provides useful framing: **Basic / Must-be** requirements are unspoken expectations—customers expect them; absence kills satisfaction; presence is invisible. **Performance / Linear** requirements scale satisfaction with performance (more is better). **Delighter / Excitement** requirements customers don't know to ask for; presence creates loyalty. VOC guards against a common engagement failure: shipping technical excellence the customer didn't need.

**Factoring VOC into continuous improvement.** VOC is the front door of the CI loop. In **Define** it sets the problem and the CTQs that become your baseline and success criteria; in **Measure** and **Analyze** it keeps you anchored to the metric the customer actually values; in **Check** you validate the improvement against the original VOC rather than an internal proxy; and you **refresh VOC on a cadence** (quarterly is a sensible default) because needs drift and yesterday's CTQ goes stale silently. Run the captured statements through a Pareto of coded themes to decide which need to tackle first, then convert the top theme into a SMART CTQ so the next PDCA cycle improves something the customer will actually feel.

## In the Field — Services Solutions Seller · selling improvement outcomes

A Services Solutions Seller runs Voice of the Customer discovery instead of assuming the RFP captured the real need. Structured interviews and coded feedback often reveal the top pain is not the feature everyone debated but something unglamorous and expensive — an unpredictable release window, say. Turning verbatims into counted, ranked themes gives the seller an evidence-based value case and the right engagement to propose. VOC replaces guessing at the customer's priorities with measuring them, so the deal targets what actually matters.

## Recap — Key Concepts & Takeaways

- VOC captures what customers need in their own words—not what the team hypothesizes; open questions and direct observation work better than surveys
- Translate VOC into three Kano categories: Basic (unspoken expectations that kill satisfaction if absent), Performance (more is better), and Delighter (creates disproportionate loyalty)
- Refresh VOC on a cadence (quarterly recommended)—customer needs evolve; undocumented assumptions decay and drive optimization toward what used to matter
- Use VOC to anchor CTQ translation—convert need statements into SMART-spec requirements that become CTQs, project charters, and SLOs
- VOC prevents over-engineering—teams that optimize what they can measure without VOC ship features customers don't value

## Knowledge Check

### 1. An SRE team has improved P50 latency for 8 months. VOC interviews reveal downstream consumers only care about P99 and TTFB. What does this teach about VOC?

- **A.** P50 improvements are always wasted effort.
- **B.** Without VOC, teams optimize what is convenient to measure rather than what customers value — 8 months of real work was irrelevant to the actual need.
- **C.** P99 work should always start before P50 work.
- **D.** The SRE team should have refused the project.

**Correct answer:** B. Without VOC, teams optimize what is convenient to measure rather than what customers value — 8 months of real work was irrelevant to the actual need.

Engineers optimize what's measurable; what's measurable is rarely what customers value. **VOC closes that gap** — without it, technical excellence and customer value drift apart.

### 2. What are the three stages of a VOC effort?

- **A.** Survey, Analyze, Report.
- **B.** Capture (verbatim quotes), Translate (to need statements), Specify (to CTQs with metrics).
- **C.** Plan, Do, Check.
- **D.** Detect, Triage, Mitigate.

**Correct answer:** B. Capture (verbatim quotes), Translate (to need statements), Specify (to CTQs with metrics).

VOC moves from **Capture → Translate → Specify**. Verbatim quotes preserve nuance, need statements group themes, and CTQs convert needs into measurable specs with targets.

### 3. In the Kano model, what is a "Basic / Must-be" requirement?

- **A.** An enhancement customers actively request and love.
- **B.** Something customers expect — absence kills satisfaction, but presence is invisible (taken for granted).
- **C.** An optional delighter the team may add when capacity allows.
- **D.** A regulatory item only relevant in audits.

**Correct answer:** B. Something customers expect — absence kills satisfaction, but presence is invisible (taken for granted).

**Basic / Must-be** requirements are unspoken expectations — like "logs must persist 90 days for audit." Their absence breaks trust; their presence earns no credit. VOC is the way to surface them.

### 4. What is the recommended way to capture VOC?

- **A.** A 4-question multiple-choice survey designed by engineers.
- **B.** Open questions ("Tell me about your last bad day with X"), observe as well as ask, and capture verbatim quotes.
- **C.** A leadership-only interview sample.
- **D.** Use only support tickets and skip direct contact.

**Correct answer:** B. Open questions ("Tell me about your last bad day with X"), observe as well as ask, and capture verbatim quotes.

**Open questions and direct observation** with verbatim capture. A survey designed by engineers captures the team's hypotheses, not the customer's voice — that's the anti-pattern to avoid.

### 5. Why should VOC be refreshed on a cadence rather than treated as a one-shot?

- **A.** Because regulations require quarterly customer interviews.
- **B.** Customer needs evolve and undocumented assumptions decay; stale VOC drives optimization toward what used to matter.
- **C.** Because metrics teams demand recurring data input.
- **D.** Because the Kano model resets every quarter.

**Correct answer:** B. Customer needs evolve and undocumented assumptions decay; stale VOC drives optimization toward what used to matter.

**Customer needs evolve.** Yesterday's delighter becomes today's basic; today's pain becomes tomorrow's solved problem. Recurring VOC keeps the engagement aimed at what matters now.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
