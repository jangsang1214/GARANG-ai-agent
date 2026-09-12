# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: DONE
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL/PRODUCT repository roles machine-readable and validated. ✅
- Project Graph validates structure and traces work to goals. ✅
- Deterministic workstream orchestration. ✅
- Versioned GitHub event envelopes + deterministic routing. ✅
- Recorded-vs-observed repo drift explicit. ✅
- GREEN/YELLOW/RED release evaluation; UNKNOWN never equals PASS. ✅
- CI-event stream derives multi-repo release readiness. ✅
- Project Instructions <= 8,000 characters enforced by test. ✅
- CONTROL workflow emits real read-only event artifacts. ✅
- CONTROL PR #6 merged with post-merge CI/Event GREEN. ✅
Evidence: CONTROL main `e25dbad...`, CI #26 GREEN, Event Envelope #9 GREEN.

## P1 — PRODUCT event-envelope adapter
Status: DONE
Owner: Engineering / Release QA
Acceptance criteria:
- Read-only event adapter installed without runtime app changes. ✅
- Existing product Release Gate GREEN before/after merge. ✅
- Main event artifact emitted successfully. ✅
Evidence: PR #69 merged as `5c1f46c...`; Release Gate #1004 GREEN; Event Envelope #3 GREEN.

## P1 — Validate deployed Golden Path on real target device
Status: TODO
Owner: Release QA + Product + Design Brand
Acceptance criteria: target iPhone Safari/in-app browser completes Today→Record→Coach→plan→execution→persistence→Accumulation with no critical clipping/runtime failure.

## P1 — Decide next release channel
Status: FOUNDER DECISION REQUIRED
Owner: Founder / Command Center
Decision: continue beta/demo learning OR enter commercial-production hardening.

## P2 — Commercial production hardening
Status: BLOCKED ON RELEASE-CHANNEL DECISION
Owner: Engineering + AI Data + Growth Business + Release QA

## P4 — Validate Intelligence loop before provider complexity
Status: TODO / NOT BLOCKING BETA
Owner: AI Data + Product

## P6 — Always-on external Founder OS runtime
Status: DEFERRED
Owner: Engineering / AI Data
Activation: only after v7-lite event contracts prove useful and Founder explicitly wants background autonomous execution.
