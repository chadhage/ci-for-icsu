# Smart CI Persona, Content, and Telemetry Architecture

## Boundaries

The delivery shell renders modules and learning workflows. It does not contain persona IDs, role labels, content locations, default-role rules, or role-specific lookup functions.

`persona-registry.js` owns generic contracts and invariants. `persona-catalog.js` is the deployable catalog of persona metadata, content-package bindings, and locks. Existing datasets are adapted as versioned packages so the migration does not rewrite curriculum content.

## Adding Content or a Persona

1. Add a script that calls `SmartCIPersonas.registerContentPackage` with a unique immutable package ID, semantic version, locales, fallback locale, `listModuleIds(locale)`, and `getContent(locale, moduleId)`.
2. Add or update a catalog persona whose `activePackageId` references that package.
3. Run `npm run check`. All 40 canonical modules must resolve to non-empty content through the selected locale or declared fallback.
4. Deploy only after validation passes. No shell changes or HTML role-specific imports are required when package scripts are assembled before `persona-catalog.js`.

## Locks and Reassignment

Locks are generic resources targeting either a persona or content package and blocking named operations. Any resource can hold multiple locks, and effective restrictions are cumulative.

Use `reassignContent(personaId, newPackageId, options)` to replace a persona's content. The operation validates the replacement, transfers explicitly named transferable locks, switches the binding, validates the resulting persona, and rolls back the binding and lock targets on failure.

The current default persona is discovered from catalog metadata. Its active package carries `default-persona-content-protection`; neither the registry nor shell checks for a particular persona ID. After a successful protected reassignment, the former package may be dissolved only when it has no remaining binding or independent delete lock.

## Runtime Selection

Every persona selector calls `validatePersona` before persisting a change. Validation checks active/selectable status, supported schema version, locale fallback, complete module coverage, and non-empty content. A failed selection retains the previous role and emits `persona_validation_failed` when telemetry consent permits.

CI performs the same checks over every active persona before deployment. Runtime validation is the defensive boundary for stale browsers or independently deployed content.

## Telemetry

`telemetry.js` emits versioned, append-only events after explicit consent. It uses a random browser ID and per-tab session ID. Events include only bounded scalar properties and a fixed context allowlist. Names, answers, question text, feedback text, comments, full URLs, and raw user-agent strings are excluded.

Set `SmartCITelemetryConfig.endpoint` in `telemetry-config.js` during deployment to an HTTPS endpoint accepting:

```json
{
  "schemaVersion": 1,
  "events": []
}
```

The collector must validate `contracts/telemetry-event.schema.json`, return a success status only after durable acceptance, strip source IPs from analytical storage, deduplicate by `eventId`, and partition raw events by `occurredAt`. Without an endpoint, a bounded local queue supports diagnostics but no centralized metrics are produced.

Traffic metrics derive from `page_viewed`, `module_viewed`, anonymous user IDs, and session IDs. Behavioral funnels derive from onboarding, persona changes, quizzes, exams, feedback, surveys, validation, content reassignment, and dissolution events. Recommended reporting includes daily/weekly/monthly users, sessions, module popularity, onboarding completion, module-to-quiz conversion, quiz outcomes and retries, exam completion/pass rate, persona distribution and switching, cohort return rates, validation failures, and migration adoption.

Raw-event retention, aggregate retention, endpoint ownership, and deletion policy must be approved before configuring production ingestion.
