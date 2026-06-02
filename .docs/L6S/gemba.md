[← Back to Index](./index.md)

---

# Gemba Walk

## TL;DR

*Gemba* (Japanese for "the actual place") is the practice of going to where the work happens, observing it directly, and asking respectful questions — rather than relying on reports, dashboards, or hearsay. The discipline came from Toyota factory walks and applies just as cleanly to engineering: read the actual incident channel, watch the deploy live, sit with the on-call, observe the developer's local loop. For CSAs, the gemba is the customer's repo, build, ChatOps, and standup. Dashboards lie by omission; the gemba doesn't. Use gemba walks to anchor [DMAIC](./dmaic.md) Measure / Analyze, prepare [Kaizen](./kaizen.md) pre-work, and detect what reports systematically miss.

## Table of Contents

- [Why Gemba](#why-gemba)
- [What a Gemba Walk is](#what-a-gemba-walk-is)
- [How to do a Gemba Walk](#how-to-do-a-gemba-walk)
- [When to use Gemba](#when-to-use-gemba)
- [Where Gemba shows up](#where-gemba-shows-up)
- [Who does Gemba Walks](#who-does-gemba-walks)
- [Examples](#examples)

## Why Gemba

Reports summarize; summaries lose the texture that matters. A 5-minute observation often beats a 50-page audit.

- Surfaces silent friction — the workaround everyone uses but nobody documents.
- Builds CSA credibility — engineers trust someone who has seen their reality.
- Validates or invalidates the team's self-narrative ("we deploy weekly" vs. observed reality).
- Discovers undocumented standards (good and bad).

**Real example:** A customer claimed "we deploy daily." Two days of gemba walks revealed: builds ran daily; promotions to prod ran every 11 days on average; the gap was "waiting for change advisory board." The metric they showed leadership was true and misleading. The CSA's intervention targeted the real bottleneck, which dashboards had hidden.

## What a Gemba Walk is

A structured observation of work as it happens. Not an audit, not an interrogation.

Principles (Ohno's gemba principles, adapted):

- **Go see.** Be physically (or virtually) present where the work happens.
- **Ask why.** Curious, respectful, repeated (link to [5 Whys](./5-whys.md)).
- **Show respect.** The practitioners know things you don't. Listen first.

Engineering surfaces that count as gemba:

- The actual repo + IDE during a development task.
- The build + deploy as it runs.
- The ChatOps channel during an incident.
- The standup as it happens, not a recap.
- The on-call's phone at 2am (when possible).
- The customer's actual usage telemetry.

What gemba is **not**:

- A status meeting.
- A dashboard review.
- A slide-summarized walkthrough.

## How to do a Gemba Walk

1. **Pick a purpose.** "Understand deploy lead time" or "Observe incident response." Not "look around."
2. **Schedule with the team's consent.** Gemba without invitation is surveillance.
3. **Bring a notebook; leave the laptop.** Observation, not multitasking.
4. **Observe before asking.** Watch one full cycle in silence.
5. **Ask open questions.** "Walk me through what you just did." "What's hard about this step?"
6. **Record verbatim where useful.** Quotes, screen-grabs, timings.
7. **Synthesize off-site.** Map what you saw to [VSM](./value-stream.md), [Ishikawa](./ishikawa.md), [waste](./waste.md), [SIPOC](./sipoc.md).
8. **Report back to the team first.** They get the findings before leadership does. Always.

**Anti-pattern to avoid:** "executive gemba" — a 30-min visit with a 6-person entourage. Nobody works naturally under those conditions. Go small.

## When to use Gemba

- DMAIC Define / Measure / Analyze.
- Kaizen pre-work.
- Engagement intake.
- After surprising telemetry that contradicts team narrative.
- Following incidents — observe the real response, not the summary.

## Where Gemba shows up

- Co-located workshops.
- Remote pair programming sessions.
- Incident war rooms / ChatOps channels.
- Standups, retros, planning.
- On-call shadowing.

## Who does Gemba Walks

- **CSAs** — habitually, especially at engagement start.
- **Engineering managers** — for their own teams (often skipped).
- **Sponsors** — periodically; calibrates their decisions against reality.
- **Belt candidates** — required for their certification project's Measure phase.

## Examples

### Example 1 — Deploy gemba reveals real lead time

11-day actual vs. "daily" reported. Reframed the program.

### Example 2 — On-call gemba surfaces tool gaps

CSA shadowed a Sev B; saw 4 manual context-gathering steps. Each became a runbook automation.

### Example 3 — Standup gemba reveals invisible WIP

3 engineers had "carry-over" items for 9+ days. Items weren't on the board. WIP discipline tightened.

### Example 4 — IDE gemba reveals local-loop pain

Watching a dev: 14 min per build cycle. Devcontainer + caching cut to 90 seconds.

### Example 5 — Customer gemba on agent usage

Watched users interact with an AI agent for an hour; discovered 3 prompt patterns that produced reliable failure. Eval suite gained 3 cases.

### Example 6 — ChatOps gemba

Sat in incident channel for a week; observed alert noise drowning real signal. Alert hygiene project funded.

### Example 7 — Build gemba

Watched a flaky pipeline retry sequence; identified the actual flake source (DNS) that telemetry had been averaging away.

### Example 8 — Customer support gemba

Two days observing tickets revealed top 3 root causes; matched [Pareto](./pareto-chart.md) and informed roadmap.

### Example 9 — Onboarding gemba

Followed a new hire's first week. Found 9 broken doc links and 3 outdated runbooks. Improved onboarding for the next cohort.

### Example 10 — Sponsor gemba

CSA brought sponsor to a 2-hour incident response observation. Funding for tooling proposed the same week; previously stalled for a quarter.
