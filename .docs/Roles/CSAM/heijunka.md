# Heijunka: Leveling Uneven Demand

> **Persona:** CSAM · Customer Success Account Manager  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Takt time is the demand-set pace a process must match (takt = available time / customer demand). When demand is lumpy—spikes and lulls—the required takt swings with it, and that unevenness is mura, one of Lean's three enemies alongside muri (overburden) and muda (waste). Heijunka is the discipline of leveling: smoothing the work so the process runs at a steady, sustainable pace instead of being whipsawed by peaks and troughs. For CI, leveling matters because you cannot standardize, improve, or reliably size capacity on top of a wildly uneven flow. This module recaps takt, explains why uneven takt undermines improvement, and covers the techniques—heijunka leveling, queue-based load leveling, buffering, elastic capacity, pull/WIP limits, batch-size reduction, and demand shaping—used to mitigate it.

## What You'll Gain

- Connect takt time to mura: see how lumpy demand makes the required pace swing and destabilizes the whole process
- Explain why uneven takt blocks CI—standard work, capacity sizing, and improvement all need a stable baseline
- Apply leveling techniques: heijunka by volume and by mix, queue-based load leveling, buffers, and elastic capacity
- Use pull systems, WIP limits, and batch-size reduction (SMED) to smooth internal flow, not just external demand
- Shape demand at the source—scheduling, staggering, rate limiting—so peaks are spread before they hit the process

## The Concept, Explained

**Quick recap of takt.** Takt time is the rate at which a process must produce to meet demand: takt = available time / customer demand. If demand is steady, takt is steady and you can size capacity and design standard work around it. The problem is that real demand is rarely steady—it arrives in bursts. When demand swings, the *required* takt swings with it, and the process is alternately overwhelmed and idle.

**Uneven takt is mura.** Lean names three enemies: **muda** (waste), **muri** (overburden), and **mura** (unevenness). They are linked: mura is often the root cause. An uneven arrival pattern forces **muri** during the spikes (people and systems overloaded past sustainable limits, causing errors, incidents, and burnout) and **muda** during the troughs (idle capacity you are still paying for). Sizing to the peak wastes money; sizing to the average drops work on the floor. You cannot win this trade-off by sizing alone—you have to attack the unevenness itself.

**Why it matters to CI.** Leveling is foundation work in the House of Lean. **Standard work** assumes a repeatable pace; if every hour looks different, there is no stable method to standardize or improve against. Capability and control charts assume a stable process; an uneven flow is full of special-cause swings that drown the signal. And improvement gains do not hold on a process that lurches—the next spike erases them. Smoothing the flow also makes problems visible: when work moves at a steady cadence, an abnormality stands out instead of hiding inside the chaos of a spike. Level first, then standardize, then improve.

**Techniques to mitigate uneven takt.**

- **Heijunka (production leveling):** deliberately level the schedule by *volume* (release work in small, regular increments rather than big batches) and by *mix* (interleave product or request types instead of running one type to exhaustion). The classic tool is the *heijunka box*, which paces released work into fixed time slots.
- **Queue-based load leveling:** put a buffer (a queue) between the spiky producer and the consumer so the consumer pulls at a steady takt while the queue absorbs the bursts. In Azure this is the Queue-Based Load Leveling pattern—Service Bus or Storage Queues feeding consumers, often with KEDA-scaled workers.
- **Strategic buffers:** small, intentional buffers of capacity, time, or inventory placed where they protect flow—not bloated inventory everywhere, but a sized cushion against normal variation.
- **Elastic / flexible capacity:** follow demand with autoscaling (HPA, KEDA, serverless) and cross-trained, flexible staff who can shift to where the load is.
- **Pull systems and WIP limits:** Kanban caps work-in-progress so the system cannot be flooded faster than it can flow, which smooths internal takt.
- **Batch-size reduction (SMED):** shrinking changeover cost lets you run smaller, more frequent batches—the prerequisite that makes volume leveling practical.
- **Demand shaping:** spread the peaks at the source—stagger or jitter scheduled jobs instead of firing them all on the hour, use appointment/scheduling systems, and apply rate limiting or throttling so a burst is metered into a steady stream.
The goal of all of them is the same: convert a jagged demand signal into a level one the process can run against at a sustainable, improvable pace.

## In the Field — CSAM · Customer Success Account Manager

A CSAM's customer runs hundreds of batch jobs that all fire at the top of each hour. The result is textbook mura: a punishing spike that overloads the platform (muri—throttling, failed jobs, paged engineers) followed by 50 minutes of near-idle, over-provisioned capacity (muda). The team's instinct is to buy more compute to survive the spike. The CSAM reframes it as a leveling problem, not a capacity problem: stagger the job schedule across the hour, route work through a queue so workers pull at a steady takt, and let KEDA scale consumers to the smoothed load. Peak demand falls, incidents during the spike subside, and the customer cuts provisioned capacity. The CSAM ties it to CI: 'Once the flow is level, your reliability work finally has a stable process to stand on.'

## Recap — Key Concepts & Takeaways

- Takt swings when demand is lumpy; that unevenness is mura, which drives muri (overburden in spikes) and muda (waste in lulls)
- You cannot fix uneven takt by sizing alone—peak sizing wastes money, average sizing drops work; you must attack the unevenness
- Leveling is CI foundation work: standard work, control charts, and durable improvement all need a stable, level flow
- Heijunka levels by volume (small regular increments) and by mix (interleave types); the heijunka box paces released work
- Mitigation toolkit: queue-based load leveling, strategic buffers, elastic capacity (HPA/KEDA), pull/WIP limits, batch-size reduction (SMED), and demand shaping
- Level first, then standardize, then improve—smoothing the flow also makes abnormalities visible instead of hiding them in the spike

## Knowledge Check

### 1. Uneven, lumpy demand that makes the required takt swing up and down is an example of which Lean problem?

- **A.** Muda (waste).
- **B.** Mura (unevenness).
- **C.** Muri (overburden).
- **D.** Kaizen (improvement).

**Correct answer:** B. Mura (unevenness).

Uneven flow is **mura**. It is often the root cause that then produces **muri** (overburden during spikes) and **muda** (idle waste during lulls). Heijunka attacks the mura directly.

### 2. What is the core idea of heijunka (production leveling)?

- **A.** Always run the largest possible batch of one type before switching.
- **B.** Smooth the work by leveling volume (small regular increments) and mix (interleaving types) so the process runs at a steady pace.
- **C.** Size capacity to the absolute peak so spikes never overwhelm the system.
- **D.** Eliminate all buffers so problems surface immediately.

**Correct answer:** B. Smooth the work by leveling volume (small regular increments) and mix (interleaving types) so the process runs at a steady pace.

Heijunka levels by **volume** (release work in small, regular increments) and by **mix** (interleave types rather than running one to exhaustion), converting a jagged demand signal into a steady, sustainable pace.

### 3. Producers send bursty traffic that overwhelms a processing service. Which technique turns that spiky arrival into a steady takt?

- **A.** Remove all queues so messages are processed the instant they arrive.
- **B.** Queue-based load leveling—buffer bursts in a queue so consumers pull at a steady rate.
- **C.** Size the consumers to the peak burst and leave them running.
- **D.** Fire all upstream jobs at the same moment to batch the work.

**Correct answer:** B. Queue-based load leveling—buffer bursts in a queue so consumers pull at a steady rate.

**Queue-based load leveling** places a buffer (e.g., Service Bus) between spiky producers and consumers, so consumers drain it at a steady takt while the queue absorbs the bursts—often with KEDA-scaled workers.

### 4. Why does uneven takt undermine continuous improvement?

- **A.** It makes the process too fast to measure.
- **B.** Standard work, control charts, and durable improvements all need a stable baseline; a lurching flow has no steady pace to standardize or hold gains against.
- **C.** It always reduces customer demand over time.
- **D.** It only matters for manufacturing, never for software.

**Correct answer:** B. Standard work, control charts, and durable improvements all need a stable baseline; a lurching flow has no steady pace to standardize or hold gains against.

Leveling is **foundation work**. If every hour looks different there is no repeatable method to standardize, special-cause swings drown the control-chart signal, and the next spike erases your gains. Level first, then standardize, then improve.

### 5. Which of these is a demand-shaping technique for smoothing peaks at the source?

- **A.** Triggering all scheduled jobs simultaneously at the top of the hour.
- **B.** Staggering or jittering scheduled jobs and applying rate limiting so a burst is metered into a steady stream.
- **C.** Removing autoscaling so capacity stays fixed.
- **D.** Increasing batch sizes to process more at once.

**Correct answer:** B. Staggering or jittering scheduled jobs and applying rate limiting so a burst is metered into a steady stream.

**Demand shaping** spreads peaks before they hit the process—stagger/jitter schedules instead of firing on the hour, use scheduling systems, and apply rate limiting or throttling to meter a burst into a level flow.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
