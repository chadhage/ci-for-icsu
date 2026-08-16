# Supermarkets: Controlled Inventory for Pull

> **Persona:** Services Account Executive · owning the account  
> **Module group:** Workplace, Flow & Standardization · **Delivery:** 30 min

## Executive Summary

A supermarket in Lean is a deliberately sized, controlled store of inventory placed between two processes to run a pull system when continuous one-piece flow isn't possible. The idea comes from how a retail supermarket works: the customer takes what they need off the shelf, and that withdrawal is the signal to restock exactly what was taken—nothing more. The downstream process withdraws from the supermarket; the gap it leaves (a kanban signal) tells the upstream process to replenish just that amount. This decouples two processes that run at different rates or can't be physically linked, while still capping inventory and preventing the upstream from overproducing into a large, uncontrolled batch. One-piece flow is always the ideal; a supermarket is the next-best control for the places you can't yet flow. The skill is knowing where a supermarket earns its keep and where it just hides waste you should eliminate.

## What You'll Gain

- Explain what a Lean supermarket is and how withdrawal-triggered replenishment (kanban pull) works
- Connect supermarkets to one-piece flow and batch avoidance—a capped store that decouples processes without licensing overproduction
- Decide between continuous flow, a FIFO lane, and a supermarket for a given hand-off
- Identify where supermarkets are a best practice: different cadences, unavoidable batching, varied downstream demand
- Recognize where to avoid them: when true flow is achievable, for one-off or fast-changing items, or when they mask a problem you should fix

## The Concept, Explained

**What a supermarket is.** A supermarket is a controlled, deliberately sized inventory store sitting between an upstream (supplying) process and a downstream (consuming) process. Taiichi Ohno borrowed the idea from American grocery stores: shoppers take what they need from the shelf, and staff restock only what was removed. In a Lean supermarket the *downstream* process is the customer—it withdraws what it needs, and the empty space it leaves becomes a **kanban** signal telling the *upstream* process to make exactly enough to replenish it. Production is pulled by real consumption, not pushed by a forecast.

**Why it exists: pull without continuous flow.** The Lean ideal is one-piece flow—units moving one at a time with no inventory between steps. But sometimes you can't connect two steps into continuous flow: they run at very different cycle times, sit far apart, share a resource, or the upstream step must run in batches (a long changeover, a shared machine, a slow build). A supermarket is the next-best option. It lets the two processes run decoupled at their own natural pace while a capped buffer absorbs the difference—and crucially, the cap and the replenishment signal stop the upstream from overproducing.

**How it avoids batching and overproduction.** An uncontrolled pile of WIP invites the worst Lean waste—overproduction—because the upstream just keeps pushing. A supermarket is different: it has a ceiling. When the shelf is full, the kanban signals stop, so the upstream stops. The upstream replenishes in small amounts matched to what was actually withdrawn, which keeps batches small and bounded instead of large and speculative. The supermarket converts 'make as much as you can' into 'replace only what the customer took.'

**Supermarket vs FIFO lane vs flow.** Three options for a hand-off, in order of preference: **(1) Continuous flow**—connect the steps so a unit passes straight through; use this whenever you can. **(2) FIFO lane**—a sequenced, capped line where items flow first-in-first-out; use it when you can't fully connect the steps but the downstream consumes in the same order the upstream produces. **(3) Supermarket**—a stocked store the downstream picks from; use it when the downstream withdraws unpredictably or selects among several item types, so a strict sequence won't work. Reach for the simplest option that fits; a supermarket is a deliberate compromise, not the goal.

**Where supermarkets are a best practice.**

- Between processes with **different cadences** or cycle times that can't be balanced into direct flow.
- After an upstream step that **must batch**—a long changeover, a shared or monopoly resource, a slow build or bake step.
- When the downstream **withdraws a varying mix** of standard, repeatable items and needs them available on demand.
- To **decouple an unreliable or distant** upstream while still capping inventory and keeping a clear pull signal.
**Where to avoid them.**

- When **continuous flow is achievable**—a supermarket adds inventory, cost, and space, and it hides problems behind a buffer. Don't institutionalize a store you could eliminate.
- For **one-off, custom, or rarely demanded items**—you can't replenish a stock of things that are never reordered; use make-to-order or a FIFO lane.
- For **perishable or fast-changing items** (or expensive-to-hold ones), where standing stock goes stale or costly before it's pulled.
- When the supermarket becomes a **crutch** that masks upstream unreliability, long changeovers, or quality problems you should be fixing—the buffer should shrink over time, not grow.
**The CI mindset.** A supermarket is controlled inventory with a ceiling: better than an uncontrolled batch, worse than true flow. Use it where flow isn't yet possible, size it as small as the process allows, and treat its size as a metric to drive down. Every reduction in the supermarket exposes the next constraint to fix—moving the system one step closer to one-piece flow.

## In the Field — Services Account Executive · owning the account

A Services Account Executive uses the supermarket concept to plan a focused flow-decoupling engagement when the customer's teams swing between starved and flooded. A controlled, replenished buffer smooths the handoffs that cause firefighting at the seams — a tangible predictability gain the SAE can report. Framing steadier delivery as the outcome gives the sponsor a clear, measurable payoff. It's a targeted, fundable intervention that improves account health without a heavyweight program.

## Recap — Key Concepts & Takeaways

- A supermarket is a deliberately sized, capped store between two processes; the downstream withdraws and the gap signals the upstream to replenish exactly what was taken (kanban pull)
- It exists to run a pull system where continuous one-piece flow isn't possible—decoupling processes with different cadences, distance, or unavoidable batching
- The cap and replenishment signal prevent overproduction: the upstream replaces only what was consumed, keeping batches small and bounded
- Prefer the simplest option that fits: continuous flow first, then a FIFO lane, then a supermarket—the supermarket is a compromise, not the goal
- Best practice between different-cadence steps, after a step that must batch, and when the downstream pulls a varying mix of standard items on demand
- Avoid when true flow is achievable, for one-off or fast-changing items, or when it masks upstream problems—size it small and drive it down over time

## Knowledge Check

### 1. What is a Lean supermarket?

- **A.** An uncontrolled pile of work-in-progress between two steps.
- **B.** A deliberately sized, capped store of inventory from which a downstream process withdraws, signaling the upstream to replenish exactly what was taken.
- **C.** A forecast that tells the upstream process how much to push downstream.
- **D.** A storage area where finished goods are held until a quarterly batch ships.

**Correct answer:** B. A deliberately sized, capped store of inventory from which a downstream process withdraws, signaling the upstream to replenish exactly what was taken.

A supermarket is a **controlled, capped store** between processes. The downstream withdraws what it needs and the empty space becomes a kanban signal telling the upstream to replenish just that amount—pull, not push.

### 2. Why would you use a supermarket instead of connecting two steps into continuous one-piece flow?

- **A.** Because inventory is always preferable to flow.
- **B.** Because the steps can't be linked into continuous flow—different cycle times, distance, a shared resource, or an upstream step that must batch.
- **C.** Because supermarkets eliminate the need for a pull signal.
- **D.** Because it lets the upstream produce as much as it wants.

**Correct answer:** B. Because the steps can't be linked into continuous flow—different cycle times, distance, a shared resource, or an upstream step that must batch.

One-piece flow is the ideal, but when steps run at different cadences, sit far apart, share a resource, or must batch, you can't connect them directly. A supermarket is the **next-best control**: it decouples them while capping inventory and keeping a pull signal.

### 3. How does a supermarket help avoid batching and overproduction?

- **A.** It removes all limits so the upstream can build ahead.
- **B.** It has a ceiling—when the shelf is full the kanban signals stop, so the upstream replenishes only what was withdrawn, in small bounded amounts.
- **C.** It requires the downstream to take the entire stock at once.
- **D.** It replaces pull signals with a monthly production forecast.

**Correct answer:** B. It has a ceiling—when the shelf is full the kanban signals stop, so the upstream replenishes only what was withdrawn, in small bounded amounts.

Unlike an uncontrolled WIP pile, a supermarket is **capped**. A full shelf stops the replenishment signal, so the upstream stops; it replaces only what was consumed, keeping batches small instead of large and speculative.

### 4. A hand-off can't be fully connected into continuous flow, but the downstream consumes items in the same order the upstream produces them. Which option is preferred over a supermarket?

- **A.** A larger supermarket with more item types.
- **B.** A FIFO lane—a sequenced, capped line that preserves first-in-first-out order.
- **C.** An uncapped buffer.
- **D.** A monthly batch release.

**Correct answer:** B. A FIFO lane—a sequenced, capped line that preserves first-in-first-out order.

When sequence is preserved, a **FIFO lane** is simpler than a supermarket: a capped, first-in-first-out line. Reach for the simplest option that fits—flow, then FIFO, then a supermarket for when the downstream withdraws unpredictably or picks among item types.

### 5. Which situation is a poor fit for a supermarket?

- **A.** Two standard, repeatable processes running at different cadences.
- **B.** One-off, custom items that are never reordered, or fast-changing items that go stale before they're pulled.
- **C.** An upstream step with a long changeover that must run in batches.
- **D.** A downstream process that withdraws a varying mix of standard items on demand.

**Correct answer:** B. One-off, custom items that are never reordered, or fast-changing items that go stale before they're pulled.

You can't replenish a stock of items that are never reordered, and perishable or fast-changing items go stale on the shelf. Those call for **make-to-order or a FIFO lane**. Also avoid supermarkets when true continuous flow is achievable or when the buffer just masks a problem to fix.

---

_Source: Smart CI 30-Minute Delivery microsite. Content extracted verbatim from the module data._
