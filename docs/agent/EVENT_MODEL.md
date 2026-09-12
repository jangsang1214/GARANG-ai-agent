# Founder OS Event Model v1

Schema: `FounderEventEnvelope` in `src/events/contracts.ts`.

Supported event types:
- `pull_request.opened`
- `pull_request.updated`
- `pull_request.closed`
- `ci.green`
- `ci.failed`
- `main.updated`
- `release.tagged`
- `task.completed`

Every event has a schema version, stable event id, timestamp, registered repository id, repository full name, ref, SHA, and payload.

## GitHub adapter
`scripts/emit-event.mjs` normalizes GitHub webhook payloads. `.github/workflows/founder-os-events.yml` publishes the envelope as a short-retention workflow artifact.

The adapter never executes product changes and receives read-only repository permission.

## Routing
`src/events/router.ts` maps events to priority, responsible workstreams, and a next action. `ci.failed` is P1 and routes to Engineering + Release/QA. `main.updated` causes state reconciliation. `ci.green` causes evidence/release re-evaluation.

## Future runtime boundary
A continuously running worker can later subscribe to GitHub webhooks or retrieve these envelopes and call `processFounderEvent`. That worker must still pass all resulting actions through capability authorization. Event receipt is not permission to perform a high-risk action.
