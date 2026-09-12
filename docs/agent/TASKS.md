# GARANG Tasks

## P1 — Founder OS v7-lite event-ready control plane
Status: VERIFYING FINAL HEAD
Owner: Command Center / Engineering / Release QA
Acceptance criteria:
- CONTROL/PRODUCT repository roles machine-readable and validated. ✅
- Project Graph validates structure and traces work to goals. ✅
- Deterministic workstream orchestration. ✅
- Versioned GitHub event envelopes + deterministic routing. ✅
- Recorded-vs-observed repo drift is explicit. ✅
- GREEN/YELLOW/RED release evaluation; UNKNOWN never equals PASS. ✅
- CI-event stream can derive multi-repo release readiness. ✅
- Project Instructions <= 8,000 characters enforced by test. ✅
- CONTROL workflow emits real read-only event artifacts. ✅
- Latest PR head passes CI before merge. PENDING after final state sync.
Evidence: code head `43fa47d...`, CI #24 GREEN, Event Envelope #5 GREEN.

## P1 — PRODUCT event-envelope adapter
Status: BLOCKED / IMPLEMENTED
Owner: Engineering / Release QA
Evidence:
- PR #69 head `9238d28...` changes only `.github/workflows/founder-os-events.yml` and `scripts/founder-os/emit-event.mjs`.
- Founder OS Event Envelope #1 GREEN with artifact.
- Existing GARANG Release Gate #1000 RED twice at `browser-webkit-regression.test.cjs` Record→workout route timeout.
- Main Release Gate #999 rerun GREEN on the same application main SHA.
Acceptance criteria: existing product Release Gate must be GREEN before merge. NOT MET.
Rule: do not merge PR #69 while RED.

## P1 — Isolate PR-context WebKit route-transition instability
Status: TODO
Owner: Engineering / Release QA
Dependency: none; keep separate from event-adapter scope.
Acceptance criteria:
- Capture route/screen state when Record→workout exceeds expected transition time.
- Determine whether failure is true runtime regression, test timing sensitivity or PR-checkout context effect.
- Fix the smallest proven cause without weakening functional assertions.
- Product Release Gate GREEN on the resulting evidence.

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
