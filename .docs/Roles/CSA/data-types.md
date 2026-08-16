# Understanding Data in CI

> **Persona:** CSA · Cloud Solution Architect  
> **Module group:** Foundations · **Delivery:** 30 min

## Executive Summary

Continuous Improvement runs on data, but not all data is the same kind—and using the wrong kind produces confident, wrong decisions. This module gives CSAs a working vocabulary for four data distinctions that appear in every engagement: empirical vs. theoretical (measured reality vs. modeled expectation), qualitative vs. quantitative (descriptive vs. numeric), continuous vs. discrete (measured on a continuum vs. counted), and direct vs. circumstantial (evidence of the thing itself vs. a correlated proxy). Knowing which kind of data you hold tells you which statistical tool is valid, how large a sample you need, and how much weight a finding can bear. The core discipline: anchor every CI decision in empirical, direct measurement of the metric that matters, and treat models, proxies, and sentiment as inputs that point you there—not as proof.

## What You'll Gain

- Distinguish empirical (measured) from theoretical (modeled) data and know when each can be trusted
- Tell quantitative from qualitative data, and turn qualitative signal into something you can measure
- Classify data as continuous or discrete and pick the control chart and sample size that fit
- Separate direct evidence of a problem from circumstantial proxies, and avoid correlation-as-causation traps
- Choose the right data type for a CTQ so your baseline, analysis, and Control phase stay statistically valid

## The Concept, Explained

Continuous Improvement is only as good as the data feeding it. The trap is not missing data—it is using the **wrong kind** of data with the wrong tool and reaching a confident but wrong conclusion. Every measurement carries four attributes at once, and naming them keeps your analysis honest.

**Empirical vs. theoretical.** Empirical data is obtained by observation, measurement, or experiment—the actual values the real system produced (four weeks of logged P95 latency, the real incident count last month). Theoretical data is produced by a model, assumption, or first-principles calculation—the values a system *should* produce (a queuing model's predicted latency, a normal-curve DPMO estimate, a renewal forecast). Theory is invaluable for planning, but in CI you **validate theory against empirics** and never standardize a change on a model alone.

**Qualitative vs. quantitative.** Quantitative data is numeric and measurable (latency in ms, RU/s, cost, counts) and supports statistical analysis. Qualitative data is descriptive or categorical (VOC verbatims, incident categories, root-cause themes, sentiment). Qualitative is not second-class: you **code it into nominal or ordinal categories and count it**, turning sentiment into a Pareto of themes. The two work together—qualitative data tells you *what* to measure; quantitative data tells you *how much*.

**Continuous vs. discrete.** Continuous data can take any value on a continuum (latency, CPU %, cost, temperature) and is infinitely divisible. Discrete data is counted in whole units (number of incidents, failed deployments, defects per release)—you cannot have 2.5 failed deployments. The distinction is practical: continuous data uses I-MR or X-bar/R charts and detects a shift with relatively few samples; discrete **attribute** data uses p-, np-, c-, or u-charts and needs a far larger sample to detect the same change, because each pass/fail outcome carries less information than a measurement.

**Direct vs. circumstantial.** Direct data measures the metric of interest itself (actual P95 latency when latency is the CTQ). Circumstantial—indirect—data measures a correlated proxy you reason from (CPU %, support-ticket volume, portal sign-ins). Circumstantial evidence is excellent for forming hypotheses and triaging where to look, but a correlation is not proof: **correlation is not causation**. Gather direct measurement of the CTQ before you treat a cause as confirmed or standardize a fix.

A single metric carries all four attributes simultaneously. ‘Measured P95 latency in ms’ is empirical, quantitative, continuous, and direct—about as trustworthy as data gets. ‘Twelve Sev-B incidents tagged networking this quarter’ is empirical, the count is quantitative and discrete, the tag is qualitative, and using incident count to judge reliability is partly circumstantial. Naming the attributes tells you exactly how much that number can be asked to prove.

## In the Field — CSA · Cloud Solution Architect

A CSA on an AKS reliability engagement hears the customer assert, ‘CPU spikes are causing our latency SLO breaches,’ pointing to a chart where CPU and latency rise together. CPU is **circumstantial**—a proxy, not the CTQ. The CSA gathers **direct, empirical** data: actual P95/P99 latency percentiles (continuous) and the count of SLO-breaching releases (discrete). Because latency is continuous, an I-MR / X-bar-R chart on ~20–25 subgroups is enough to see the pattern; because deployment outcome is attribute data, the CSA knows a p-chart would need a much larger sample to confirm a real shift. The latency control chart shows breaches cluster after scale-in cold starts—not with CPU at all. The CSA rejects the theoretical assumption, fixes the actual cause (warm pool / minimum replica count), and standardizes it in IaC. Treating the CPU correlation as proof would have sent the team down the wrong path entirely.

## Recap — Key Concepts & Takeaways

- Every metric carries four attributes at once—empirical/theoretical, qualitative/quantitative, continuous/discrete, direct/circumstantial—name them to keep analysis honest
- Empirical (measured) data validates theoretical (modeled) expectations; never standardize a change on a model alone
- Qualitative signal is not second-class—code it into categories and count it so VOC drives a measurable CTQ
- Continuous data uses I-MR / X-bar-R charts and needs fewer samples; discrete attribute data uses p-/c-/u-charts and needs far larger samples
- Direct measurement of the CTQ is proof; circumstantial proxies (CPU, tickets, sign-ins) form hypotheses—correlation is not causation
- Pick the data type deliberately in Define/Measure so your baseline, chart, and Control phase stay statistically valid

## Knowledge Check

### 1. A CSA pulls four weeks of actual P95 latency readings from Azure Monitor to baseline a process. What kind of data is this?

- **A.** Theoretical, because percentiles are statistical estimates.
- **B.** Empirical, because it is observed measurement of the real system.
- **C.** Qualitative, because latency describes user experience.
- **D.** Circumstantial, because latency is only a proxy for reliability.

**Correct answer:** B. Empirical, because it is observed measurement of the real system.

**Empirical** data is obtained by observation or measurement of the real world. Actual logged latency readings are empirical; a model that *predicts* latency would be theoretical. Even though a percentile is a computed summary, it is computed from observed measurements, so the data is empirical.

### 2. Which of these metrics is discrete (attribute) data rather than continuous?

- **A.** Average request latency in milliseconds.
- **B.** CPU utilization percentage.
- **C.** The number of failed deployments per release.
- **D.** Monthly Azure spend in dollars.

**Correct answer:** C. The number of failed deployments per release.

Discrete data is counted in whole units—you cannot have 2.5 failed deployments. Latency, CPU %, and cost are **continuous** (any value on a continuum). The distinction drives chart choice: counts use p-/c-/u-charts, while continuous values use I-MR or X-bar/R.

### 3. A customer's VOC interviews produce dozens of free-text comments about deployment pain. What is the best way to make this qualitative data usable in a CI baseline?

- **A.** Discard it, because only numeric data belongs in a baseline.
- **B.** Treat every individual comment as its own separate root cause.
- **C.** Code the comments into categories and count them so the dominant theme can be quantified.
- **D.** Forward it to the product group without further analysis.

**Correct answer:** C. Code the comments into categories and count them so the dominant theme can be quantified.

Qualitative data becomes actionable when it is **coded into categories and counted**—turning sentiment into a Pareto of themes. Qualitative signal tells you what to measure; quantifying it lets it drive a measurable CTQ rather than staying an anecdote.

### 4. A team asserts CPU spikes are the root cause of latency breaches, citing a chart where CPU and latency both rise. Before standardizing a fix, what should a CSA do?

- **A.** Accept it—two correlated lines on a chart are sufficient proof of causation.
- **B.** Gather direct measurement of the latency CTQ to test the hypothesis, since CPU is circumstantial evidence.
- **C.** Raise CPU limits immediately and close the investigation.
- **D.** Replace the measurements with a theoretical queuing model.

**Correct answer:** B. Gather direct measurement of the latency CTQ to test the hypothesis, since CPU is circumstantial evidence.

CPU is a **circumstantial** (indirect) proxy, and a correlation is a hypothesis, not proof. Direct measurement of the metric that matters—the latency CTQ—is required before a cause is treated as confirmed. Correlation is not causation.

### 5. Why does attribute (discrete) data generally require a much larger sample than continuous data to detect the same process change?

- **A.** Because attribute data cannot be plotted on a control chart.
- **B.** Because each continuous measurement carries more information than a single pass/fail outcome.
- **C.** Because discrete data is always theoretical rather than empirical.
- **D.** Because continuous data is inherently qualitative.

**Correct answer:** B. Because each continuous measurement carries more information than a single pass/fail outcome.

Each continuous measurement conveys more information than a single discrete pass/fail result, so continuous data detects a shift with fewer samples. Attribute/count data (proportion defective, defect counts) needs substantially larger samples for equivalent sensitivity—an important sample-size consideration when choosing a metric.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
