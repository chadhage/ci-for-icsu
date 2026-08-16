# Pull vs Push: Letting Demand Drive the Work

> **Persona:** Technical Account Strategist · the technical roadmap  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

Push and pull are two opposite ways to decide when work starts. In a push system, work is released according to a forecast or a schedule—make it now because the plan says so, and send it downstream whether or not the next step is ready. In a pull system, work starts only when the downstream step (ultimately the customer) signals that it needs more—nothing is produced until there is real demand to consume it. Push tends to overproduce, pile up work-in-progress, and hide problems inside the inventory it creates; pull caps work to actual demand, keeps WIP low, and makes problems visible. For continuous improvement this distinction is central: a pull system shortens lead time, exposes bottlenecks, and creates the fast feedback loop that improvement depends on. This module explains both systems, why pull is usually preferred, the signals that drive it, and the few cases where a measured amount of push is still the right call.

## What You'll Gain

- Define push and pull precisely—what triggers work to start in each system
- Explain why push overproduces and grows WIP while pull caps work to real demand
- Connect pull to CI: shorter lead time, visible bottlenecks, and faster feedback loops
- Recognize the pull signals (kanban, supermarkets, WIP limits) that make pull work in practice
- Know where a measured amount of push still fits—long lead times, forecasted capacity, and stable, predictable demand

## The Concept, Explained

**The core difference: what starts the work.** Push and pull answer one question differently—*when does a step begin working?* In a **push** system, a step starts because a schedule or forecast told it to: produce this much by this date and hand it to the next step, ready or not. In a **pull** system, a step starts only when the *downstream* step signals that it has consumed something and needs a replacement. Work is drawn through the process by real demand instead of being shoved through by a plan.

**Why push causes trouble.** Push is driven by a forecast, and forecasts are never exactly right. When upstream steps produce to plan regardless of what downstream can absorb, the mismatch turns into **inventory**: work-in-progress piling up between steps. That inventory is the worst Lean waste—**overproduction**—and it brings its own costs: longer lead time (a unit waits behind everything already queued), tied-up cash and space, and hidden defects (a problem introduced upstream sits undetected inside the pile until someone finally works it). Push keeps every step busy locally while the system as a whole slows down and goes blind to its own problems.

**Why pull helps.** A pull system caps the amount of work in the system to what downstream actually wants. Because nothing starts without a downstream signal, WIP stays low—and by Little's Law (lead time = WIP / throughput), low WIP means short lead time. Pull also makes problems *visible*: when a downstream step stops pulling, the whole line stops, so a bottleneck or a defect surfaces immediately instead of being buried under inventory. That visibility plus the short feedback loop is exactly what continuous improvement needs—you see the constraint, you fix it, and you see the result quickly.

**How pull works in practice.** Pull is implemented with explicit signals:

- **Kanban**—a card or signal that authorizes the upstream step to produce or move one unit; no card, no work.
- **Supermarkets**—a capped store the downstream withdraws from; the gap left behind is the replenishment signal.
- **WIP limits**—a hard cap on how much work can sit in a stage; a full stage blocks upstream from starting more.
All three enforce the same rule: upstream may only act in response to real downstream consumption.

**Pull is not the same as one-piece flow.** Continuous one-piece flow is the ideal—units move straight through with no inventory at all. Pull is how you run a process when you can't achieve pure flow: it still allows small, capped buffers (supermarkets), but it controls them with demand signals so they never grow into uncontrolled push inventory. Flow first; where you can't flow, pull.

**Where a measured amount of push still fits.** Pull is the default, but it isn't absolute. Push (forecast-driven) can be the right call when: the total lead time to make something is longer than the customer is willing to wait, so you must start before the order exists; demand is highly seasonal and you build ahead to level capacity; a one-off or first-of-its-kind item has no repeat demand to pull against; or you are pre-positioning capacity (not finished work) against a known event. The mature pattern is usually a hybrid—push to a strategic decoupling point, then pull from there to the customer—sizing any forecast-driven buffer deliberately and shrinking it as lead times improve.

## In the Field — Technical Account Strategist · the technical roadmap

A Technical Account Strategist shifts the customer from a schedule-driven push system — where queues pile up and priorities blur — to a pull system driven by real demand and capacity. Engineers pull the next most important item when ready instead of drowning under everything assigned at once, so work-in-progress falls and throughput rises. The TAS uses the pull model to stop the account's system from overloading its own people, aligning technical effort with reality and making delivery predictable.

## Recap — Key Concepts & Takeaways

- Push starts work from a forecast or schedule and sends it downstream ready or not; pull starts work only when a downstream signal shows real demand
- Push tends to overproduce—WIP piles up between steps, lengthening lead time, tying up cash, and hiding defects inside the inventory
- Pull caps work to actual demand: low WIP means short lead time (Little's Law), and stalls surface immediately instead of being buried
- Pull is implemented with explicit signals—kanban cards, supermarkets, and WIP limits—where upstream acts only on real downstream consumption
- Pull is a CI enabler: visible bottlenecks plus a fast feedback loop are what improvement work depends on; flow first, then pull where you can't flow
- A measured push still fits when lead time exceeds the wait the customer will tolerate, for seasonal build-ahead, or one-off items—often a hybrid: push to a decoupling point, pull from there

## Knowledge Check

### 1. What is the fundamental difference between a push and a pull system?

- **A.** Push uses smaller batches than pull.
- **B.** In push, work starts from a forecast or schedule; in pull, work starts only when a downstream step signals real demand.
- **C.** Pull requires more inventory than push.
- **D.** Push has no defects, while pull does.

**Correct answer:** B. In push, work starts from a forecast or schedule; in pull, work starts only when a downstream step signals real demand.

The distinction is about **what triggers work to start**. Push releases work to a plan/forecast and sends it downstream regardless of readiness; pull starts work only in response to a downstream demand signal.

### 2. Why does a push system tend to create waste?

- **A.** It never keeps the upstream steps busy.
- **B.** Producing to a forecast regardless of downstream readiness causes overproduction—WIP piles up, lead time grows, and defects hide inside the inventory.
- **C.** It caps work-in-progress too aggressively.
- **D.** It makes problems too visible to ignore.

**Correct answer:** B. Producing to a forecast regardless of downstream readiness causes overproduction—WIP piles up, lead time grows, and defects hide inside the inventory.

Push is forecast-driven, and the mismatch with real demand turns into **overproduction**—the worst Lean waste. The resulting WIP lengthens lead time, ties up cash and space, and hides defects until much later.

### 3. How does a pull system shorten lead time?

- **A.** By increasing throughput regardless of WIP.
- **B.** By capping WIP to real demand—lower WIP at a given throughput means shorter lead time (Little's Law).
- **C.** By removing the customer from the process.
- **D.** By producing ahead of demand to build a buffer.

**Correct answer:** B. By capping WIP to real demand—lower WIP at a given throughput means shorter lead time (Little's Law).

Pull caps the work in the system to what downstream pulls, keeping WIP low. By Little's Law (lead time = WIP / throughput), lower WIP at the same throughput **shortens lead time**.

### 4. Which of these is a mechanism used to implement a pull system?

- **A.** A quarterly production forecast pushed to every step.
- **B.** Kanban signals, supermarkets, and WIP limits—where upstream acts only on real downstream consumption.
- **C.** Releasing all work at the start of the period.
- **D.** Removing every buffer so steps never coordinate.

**Correct answer:** B. Kanban signals, supermarkets, and WIP limits—where upstream acts only on real downstream consumption.

Pull is enforced with explicit signals: **kanban** cards that authorize one unit of work, **supermarkets** whose gaps signal replenishment, and **WIP limits** that block upstream when a stage is full.

### 5. When is a measured amount of push still appropriate?

- **A.** Whenever you want to keep every step locally busy.
- **B.** When total lead time exceeds the wait the customer will tolerate, for seasonal build-ahead, or one-off items—often as a hybrid that pushes to a decoupling point and pulls from there.
- **C.** Always, because push is simpler than pull.
- **D.** Never—push is always wrong under any condition.

**Correct answer:** B. When total lead time exceeds the wait the customer will tolerate, for seasonal build-ahead, or one-off items—often as a hybrid that pushes to a decoupling point and pulls from there.

Pull is the default, not an absolute. Forecast-driven **push** fits when you must start before an order exists (long lead time), to level seasonal demand, or for one-off items—commonly a hybrid: push to a strategic decoupling point, then pull to the customer.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
