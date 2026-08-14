# One-Piece Flow vs Batch Processing

> **Persona:** Technical Account Strategist · the technical roadmap  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Batch processing groups many units together and moves them through a process as a block: do step one to the whole batch, then step two to the whole batch, and so on. One-piece flow (also called single-piece or continuous flow) moves a single unit through the steps at a time—ideally a batch size of one. Batching feels efficient because it spreads fixed setup and changeover costs over many units, but it hides large costs: long lead times, mountains of work-in-progress, and defects that aren't discovered until a whole batch reaches a later step. One-piece flow trades some setup efficiency for much shorter feedback loops, less WIP, and problems that surface immediately. For continuous improvement this matters because flow is what makes problems visible and feedback fast—two preconditions for improving at all. This module contrasts the two, explains when each is appropriate, and shows how to move a process toward flow without ignoring the setup costs that justified batching in the first place.

## What You'll Gain

- Define batch processing and one-piece (single-piece) flow, and explain the batch-size-of-one ideal
- See the hidden costs of batching: long lead time, high WIP, and defects discovered late, after a whole batch is affected
- Explain why flow accelerates CI—shorter feedback loops surface problems immediately instead of burying them in a batch
- Know when batching is still the right call, and how changeover/transaction cost (SMED) drives the economic batch size
- Apply practical steps to move toward flow: shrink batch size, reduce setup time, balance steps, and limit WIP

## The Concept, Explained

**Two ways to move work.** *Batch processing* groups units and moves them through a process as a block—every unit gets step one, then every unit gets step two, and so on. *One-piece flow* (single-piece or continuous flow) moves one unit through the steps at a time, ideally with a batch size of one. The difference sounds small but it changes the economics of the whole process.

**Why batching feels efficient.** Batches amortize fixed costs. If a step has a costly setup—a machine changeover, an environment spin-up, a context switch, an approval ceremony—doing it once for fifty units instead of fifty times looks like a clear win. That saving is real, and it is why batch sizes grow: every changeover or hand-off has a transaction cost, and large batches spread that cost thin.

**The hidden cost of batching.** Large batches carry three penalties that don't show up in a per-step efficiency number. **Lead time** balloons: a unit finished early at step one still waits for the rest of the batch before it can move, so nothing completes until the whole batch is done. **Work-in-progress** piles up between steps—inventory that ties up cash, space, and attention. And **defects hide**: if step one introduces an error, you don't find out until the batch reaches a later inspection step, by which point the whole batch is affected. The bigger the batch, the later and more expensive the discovery.

**Why one-piece flow helps continuous improvement.** Flow shortens the loop between cause and feedback. When units move one at a time, a defect at step one is caught at step two—one bad unit, not fifty. Problems become visible immediately instead of being buried inside a batch, which is the precondition for fixing them. WIP drops, so lead time drops with it (Little's Law: lead time = WIP / throughput). Shorter lead time means you learn faster, and learning faster is what continuous improvement is. Flow doesn't just deliver sooner; it exposes the problems that improvement work feeds on.

**Batch isn't always wrong.** One-piece flow is the ideal, not a law. When changeover or transaction cost is genuinely high and can't be reduced, a larger batch may be the right economic choice—the classic trade-off between holding cost (which favors small batches) and setup cost (which favors large ones). The Lean move, though, is to attack the setup cost rather than accept big batches: **SMED** (single-minute exchange of die) reduces changeover time so smaller batches become affordable. Lower the cost of switching and the economic batch size shrinks toward one.

**How to move toward flow.**

- **Shrink the batch:** cut batch size in deliberate steps and watch lead time and quality respond—don't wait for a perfect batch-size-of-one redesign.
- **Reduce changeover (SMED):** make setups faster and cheaper so small batches stop being expensive.
- **Balance the steps:** flow stalls at the slowest step; level cycle times so units don't pool in front of a bottleneck.
- **Limit WIP:** cap the work between steps (kanban) so the process pulls one unit at a time instead of pushing batches.
- **Connect the steps:** shorten the distance and delay between operations so a finished unit moves immediately to the next step.

## In the Field — Technical Account Strategist · the technical roadmap

A Technical Account Strategist moves the customer from big-batch monthly releases toward one-piece flow: small changes shipped continuously through trunk-based delivery. Each change is easy to test, trace, and roll back, so mean time to detect and recover drops dramatically and a failed deploy affects one small change, not a month of bundled work. The TAS uses small batches to turn the account's releases from a high-stakes event into a routine, low-risk habit that keeps the system flowing.

## Recap — Key Concepts & Takeaways

- Batch processing moves units as a block through each step; one-piece flow moves a single unit at a time—the batch-size-of-one ideal
- Batching amortizes setup/changeover cost, which is why batches grow—but it hides long lead time, high WIP, and late defect discovery
- In a batch, a defect at an early step isn't found until a later step, so the whole batch is affected before anyone knows
- One-piece flow shortens the feedback loop: defects surface on one unit, WIP and lead time drop (Little's Law), and problems become visible
- Flow is a CI precondition—fast feedback and visible problems are what improvement work depends on
- Batch isn't always wrong; when setup cost is high, attack it with SMED to shrink the economic batch size, then limit WIP and balance steps to move toward flow

## Knowledge Check

### 1. What is the defining difference between batch processing and one-piece flow?

- **A.** One-piece flow uses larger batches to be more efficient.
- **B.** Batch processing moves a group of units through each step as a block, while one-piece flow moves a single unit through the steps at a time.
- **C.** Batch processing has no setup cost, while one-piece flow does.
- **D.** One-piece flow only applies to manufacturing, not knowledge work.

**Correct answer:** B. Batch processing moves a group of units through each step as a block, while one-piece flow moves a single unit through the steps at a time.

**Batch processing** completes a step for an entire group before the group moves on; **one-piece flow** moves a single unit through the steps—ideally a batch size of one—so units don't wait for the rest of a batch.

### 2. A step introduces a defect at the start of a 50-unit batch, but inspection happens only at the final step. What is the consequence of the large batch?

- **A.** The defect is caught immediately on the first unit.
- **B.** All 50 units are affected before the defect is discovered, making detection late and rework expensive.
- **C.** The defect disappears because batching averages out errors.
- **D.** Batch size has no effect on when defects are found.

**Correct answer:** B. All 50 units are affected before the defect is discovered, making detection late and rework expensive.

In a batch, a defect introduced early isn't discovered until the batch reaches a later inspection step—by then the **whole batch is affected**. Smaller batches (toward one-piece flow) catch the problem on one unit, not fifty.

### 3. Why does one-piece flow accelerate continuous improvement?

- **A.** It eliminates the need to measure the process.
- **B.** It shortens the feedback loop—defects surface immediately on a single unit and problems become visible instead of being buried in a batch.
- **C.** It guarantees defects never occur.
- **D.** It increases work-in-progress so there is more to improve.

**Correct answer:** B. It shortens the feedback loop—defects surface immediately on a single unit and problems become visible instead of being buried in a batch.

Flow tightens the loop between cause and feedback: a problem shows up on one unit at the next step, WIP and lead time fall (Little's Law), and abnormalities become visible—the preconditions improvement work depends on.

### 4. Setup/changeover cost for a step is genuinely high. What is the Lean response, rather than simply accepting large batches?

- **A.** Increase the batch size indefinitely to amortize setup.
- **B.** Reduce the changeover cost itself (e.g., SMED) so smaller batches become economical.
- **C.** Stop measuring lead time.
- **D.** Eliminate all inspection steps.

**Correct answer:** B. Reduce the changeover cost itself (e.g., SMED) so smaller batches become economical.

The trade-off between setup cost (favors large batches) and holding cost (favors small) sets the economic batch size. The Lean move is to **attack the setup cost with SMED** so the economic batch size shrinks toward one.

### 5. According to Little's Law, what happens to lead time as one-piece flow reduces work-in-progress at a steady throughput?

- **A.** Lead time increases proportionally.
- **B.** Lead time decreases proportionally—less WIP at the same throughput means shorter lead time.
- **C.** Lead time is unaffected by WIP.
- **D.** Throughput must double for lead time to change.

**Correct answer:** B. Lead time decreases proportionally—less WIP at the same throughput means shorter lead time.

Little's Law: lead time = WIP / throughput. Holding throughput steady, **cutting WIP cuts lead time proportionally**—which is exactly what moving from large batches to one-piece flow does.

---

_Source: iCSU Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
