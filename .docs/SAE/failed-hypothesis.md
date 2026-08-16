# When the Hypothesis Fails: Recovering the Cycle

> **Persona:** Services Account Executive · owning the account  
> **Module group:** Methodologies & Cycles · **Delivery:** 30 min

## Executive Summary

Continuous improvement is applied science: you use the data you already have to form a falsifiable hypothesis—'if we change X, metric Y will improve because [root cause]'—and then you test it before you commit. Sometimes the test disproves the hypothesis, or the experiment itself turns out to be empirically flawed. Neither is a project failure; a disproven hypothesis is a finding, and a cheap one when it is caught at pilot scale by a tollgate. This module explains how to write and test improvement hypotheses from available data, how to tell a genuinely disproven idea from an invalid test, how a practitioner should react—transparently, without torturing the data—and, crucially, how to restore the cycle after a failed attempt by looping back to the phase whose assumption broke rather than abandoning the effort.

## What You'll Gain

- Write falsifiable, data-grounded hypothesis statements tied to a confirmed root cause and a measurable outcome
- Test a hypothesis honestly: pre-registered success criteria, a stable baseline, and a real statistical check before scaling
- Tell a truly disproven hypothesis (valid test, wrong idea) apart from an empirically flawed one (invalid test, inconclusive result)
- React to disconfirming evidence as a finding—report it transparently instead of moving goalposts or p-hacking a win
- Recover a failed cycle by looping DMAIC, DMADV, or PDCA back to the phase whose assumption broke, then re-baselining before the next test

## The Concept, Explained

**CI is the scientific method applied to work.** Instead of acting on opinion, you use the data you already have—telemetry, the baseline, a Pareto of defects, VOC themes—to form a **falsifiable hypothesis** and then test it. A good improvement hypothesis names five things: the *change* (X), the *predicted effect* on a specific metric (Y), the *rationale* (the root cause from Analyze that makes you believe X drives Y), the *minimum effect that would matter*, and an implicit **null** ('the change makes no difference'). 'If we add a read-through cache, P95 latency will drop at least 30% because cache misses are the dominant cost' is testable; 'caching will make things faster' is not.

**Best practice for testing it.** Before you run the experiment, pre-register the success criteria, the significance level (&alpha;), the sample size from a power analysis, and the minimum meaningful effect—so you cannot move the goalposts later. Validate the measurement system and confirm the process is **stable** on a control chart first; a test on an out-of-control process measures noise. Then **pilot small** so failure is cheap, and confirm the result with a statistical test (see the p-value module) before scaling. Pre-commit a rollback plan. This is exactly why DMAIC and DMADV put tollgates between phases: the gate is where a weak hypothesis is supposed to fail—cheaply, at pilot scale, before a full rollout.

**Two ways a hypothesis can ‘not confirm.’** These demand opposite responses, so separate them before concluding anything. **(1) Genuinely disproven:** the test was valid and the idea was simply wrong—the change produced no improvement (or made things worse). Accept it. The method worked exactly as designed; the tollgate just saved you from scaling a dud. **(2) Empirically flawed:** the *test itself* was invalid, so the result is **inconclusive, not disproof**. Common flaws: a confounder (a traffic dip during the test window), a contaminated or unstable baseline, an underpowered sample, measurement error, or low **implementation fidelity** (the pilot was never actually executed as designed). Run validity checks—measurement-system trust, process stability, confounders, power, fidelity—before you decide which case you are in. A flawed test tells you about your experiment, not your idea.

**How a practitioner should react.** Treat disconfirming evidence as data, not as a personal or team failure—the culture must be **blameless** so people surface negative results instead of hiding them. Report it transparently. Do *not* torture the data to manufacture a win: no p-hacking, no HARKing (inventing a new hypothesis after seeing the data and pretending it was the plan), no cherry-picking the one subgroup that looks good, no quietly switching to a one-tailed test or relaxing the threshold. Capture the learning—an A3 that documents the disconfirming evidence is a permanent asset that stops the organization from repeating the same dead end.

**How to restore the cycle after a failed attempt.** Loop back to the phase whose assumption broke—not all the way to the start. In **DMAIC**, a disproven Improve hypothesis usually means the **Analyze** root cause was wrong or incomplete: return to Analyze, re-diverge on candidate causes, re-prioritize with the data, and form a new hypothesis. If the baseline itself was the problem, return to **Measure**; if the problem was mis-defined, return to **Define**. In **DMADV**, a design that fails Verify/Validate against the CTQs sends you back to **Design** to iterate—unless verification shows the requirements themselves were wrong, which sends you further upstream. In **PDCA**, a failed **Check** means you must *not* Act/standardize the change; you Adjust and run another cycle with a revised hypothesis—PDCA is iterative by design, and a failed loop simply feeds the next Plan. In every case: **roll back the pilot** to restore the baseline (the change was contained at pilot scale precisely so you could), re-confirm process stability, re-baseline, and document the negative result before the next experiment. The cycle is not broken by a failed hypothesis—it is doing its job.

## In the Field — Services Account Executive · owning the account

A Services Account Executive manages the relationship when a piloted change doesn't move the metric. Rather than let a null result sour the sponsor, they position it honestly as a finding that eliminated a candidate and sharpened the next cycle — the value of a disciplined partner. Framing disconfirming evidence as progress protects trust and the renewal. An SAE who can hold an executive conversation about a well-run failed experiment is protecting the account's credibility, not defending a loss.

## Recap — Key Concepts & Takeaways

- CI is applied science: use the data you already have to write a falsifiable hypothesis (change X improves metric Y because [root cause]), then test it before committing
- A disproven hypothesis is a finding, not a failure—and a cheap one when a tollgate catches it at pilot scale before a full rollout
- Separate a genuinely disproven idea (valid test, wrong hypothesis—accept it) from an empirically flawed test (invalid—inconclusive, so fix the test and re-run)
- React transparently and blamelessly; never p-hack, HARK, cherry-pick subgroups, or move the goalposts to manufacture a win
- Recover by looping back to the phase whose assumption broke—DMAIC usually to Analyze, DMADV to Design, PDCA into another Adjust-and-retry cycle
- Roll back the pilot, re-confirm stability, re-baseline, and document the negative result before the next attempt—the cycle isn't broken, it's working

## Knowledge Check

### 1. An improvement hypothesis is tested with a valid, well-powered experiment and is clearly disproven. How should a CI practitioner view this?

- **A.** As a failure of the project that should be quietly dropped from the report.
- **B.** As a legitimate finding—the scientific method working as designed—that cheaply prevented scaling a change that doesn't work.
- **C.** As a reason to re-run the test repeatedly until it eventually clears the threshold.
- **D.** As proof that continuous improvement does not apply to this process.

**Correct answer:** B. As a legitimate finding—the scientific method working as designed—that cheaply prevented scaling a change that doesn't work.

A disproven hypothesis from a valid test is a **finding, not a failure**. The tollgate did its job—it caught a dud at pilot scale before a costly full rollout. The honest move is to accept the evidence and learn from it.

### 2. What is the difference between a hypothesis that is genuinely disproven and one whose test is empirically flawed?

- **A.** There is no difference; both mean the change should be abandoned.
- **B.** A disproven hypothesis came from a valid test (the idea was wrong); an empirically flawed test is invalid—inconclusive—so you fix the test and re-run.
- **C.** A disproven hypothesis means the data was faked; a flawed test means the team lacked a Black Belt.
- **D.** A flawed test always proves the opposite of the hypothesis.

**Correct answer:** B. A disproven hypothesis came from a valid test (the idea was wrong); an empirically flawed test is invalid—inconclusive—so you fix the test and re-run.

A **disproven** hypothesis comes from a *valid* test—the idea was wrong. An **empirically flawed** test (confounders, unstable baseline, underpowered sample, low implementation fidelity) is *invalid*, so the result is **inconclusive**, not disproof. Run validity checks before concluding.

### 3. In DMAIC, a piloted Improve-phase hypothesis is disproven by a valid test. Which phase do you most commonly return to?

- **A.** Define—restart the entire project from scratch.
- **B.** Analyze—the root cause was likely wrong or incomplete, so re-diverge on causes and form a new hypothesis.
- **C.** Control—standardize the change anyway and monitor it.
- **D.** None—abandon the project, since the hypothesis failed.

**Correct answer:** B. Analyze—the root cause was likely wrong or incomplete, so re-diverge on causes and form a new hypothesis.

Loop back to the phase whose **assumption broke**. A disproven Improve hypothesis usually means the **Analyze** root cause was wrong—return there, re-prioritize the causes with data, and generate a new hypothesis. Only go back to Measure or Define if the baseline or problem definition was the flaw.

### 4. Which reaction to disconfirming evidence is a misuse to avoid?

- **A.** Reporting the negative result transparently and documenting it in an A3.
- **B.** Cherry-picking the one subgroup that looks good, or switching to a one-tailed test, to manufacture a 'win.'
- **C.** Looping back to Analyze to form a new, better-grounded hypothesis.
- **D.** Rolling back the pilot and re-confirming the baseline before the next test.

**Correct answer:** B. Cherry-picking the one subgroup that looks good, or switching to a one-tailed test, to manufacture a 'win.'

Torturing the data—p-hacking, HARKing, cherry-picking subgroups, or moving the goalposts—manufactures false confidence. The disciplined responses (transparent reporting, looping back, rolling back) are exactly what keeps the cycle honest.

### 5. In a PDCA cycle, the Check step shows the change did not produce the expected improvement. What must you do?

- **A.** Proceed to Act and standardize the change anyway, since you already built it.
- **B.** Do not standardize it—Adjust and run another PDCA cycle with a revised hypothesis, rolling back the pilot to restore the baseline.
- **C.** Declare the process incapable of improvement and stop.
- **D.** Re-label the Check results as a success to keep momentum.

**Correct answer:** B. Do not standardize it—Adjust and run another PDCA cycle with a revised hypothesis, rolling back the pilot to restore the baseline.

A failed **Check** means you must *not* Act/standardize. PDCA is iterative: **Adjust** and run another cycle with a revised hypothesis, and roll back the pilot to restore the baseline. A failed loop simply feeds the next Plan.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
