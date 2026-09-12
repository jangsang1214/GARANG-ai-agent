# GARANG Release Status

Last updated: 2026-09-12

## Overall decision
YELLOW across the full multi-repository integration.

## CONTROL — Founder OS v7-lite
Decision: GREEN for verified code head `43fa47db0a0f05fd4e4e069fbb0a8d5c7257c36a`.
Evidence:
- CI #24: GREEN (`npm run verify`).
- Founder OS Event Envelope #5: GREEN.
- Repository Registry / Project Graph / Orchestrator / Event Contracts / Reconciler / Release Gate / CI-event release tests: PASS.
- Project Instructions 8,000-character gate: PASS.
- Earlier CONTROL event workflow artifact generation was directly observed.
Merge readiness: latest documentation-sync head must also remain CI/Event GREEN before PR #6 is merged.

## PRODUCT main baseline
Decision: GREEN for current development beta baseline.
Evidence:
- Main SHA `c0fd29e06c4c29f3f504d940a8d2497e84d7c821`.
- Release Gate #999 rerun completed GREEN.
- Complete `browser-webkit` rerun GREEN, including mobile regression, settings touch, button health and stability stress.

## PRODUCT event adapter PR #69
Decision: RED / DO NOT MERGE.
Evidence:
- Head `9238d28a6a2f0e5b8c5217ba64f6b5fb7807440c`.
- Founder OS Event Envelope #1: GREEN + artifact.
- Existing GARANG Release Gate #1000: RED.
- `core-build-rules`: GREEN.
- `browser-webkit`: RED; retry reproduced the same 5s timeout in `tapRecordRoute(page,'workout')` within `browser-webkit-regression.test.cjs`.
- PR diff is limited to the event workflow + emitter script; no app runtime file changed.
Interpretation: cross-repo adapter is functionally emitting events, but release evidence is not sufficient to merge. Cause of PR-context browser timeout remains unresolved.

## Commercial production
Decision: RED until explicitly activated production gates are completed. Beta/demo GREEN does not imply commercial-production readiness.
