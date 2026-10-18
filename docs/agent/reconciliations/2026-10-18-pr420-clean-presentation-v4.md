# PRODUCT #420 — Clean Presentation v4 reconciliation

Date: 2026-10-18
Status: YELLOW / ACTIVE DRAFT / VERIFICATION IN PROGRESS

## Judgment
PRODUCT #419 preserved canonical functionality but accumulated a presentation architecture that relied on stacked CSS overrides and fixed Founder-board JPG crops. In particular, its Body presentation visually hid the canonical interactive anatomy beneath a static hero layer. The Founder rejected that direction.

## New integration line
- PRODUCT main baseline: `62c008e8cb6e7f4219682b3f0b5ee71261de80e1`
- PRODUCT PR: #420 `Rebuild GARANG presentation with clean v4 architecture`
- branch: `design/commercial-v4-clean-presentation`
- initial observed head: `2b8d8f6e62eb811a009a48495cdf103a06148fd7`
- draft=true
- changed files at PR open: 6

## Architecture boundary
Preserve canonical routing, state, persistence, Workout session/set/rest/save, Meal Scan, Coach writes, Body interaction and Intelligence owners. Rebuild only presentation through:
1. one Presentation v4 stylesheet,
2. one structural adapter that moves canonical DOM owners without cloning/replacing them,
3. explicit architecture + WebKit gates.

Forbidden by the new gate:
- loading the legacy Reference UI v2 patch chain as the presentation owner,
- runtime use of Founder-board JPG crops as hero content,
- hiding canonical Body interaction geometry behind a static image,
- cloning canonical action/state owners.

## Verification
- Founder OS Event Envelope for #420 open: observed SUCCESS.
- GARANG Release Gate #2834 on exact head `2b8d8f6e...`: IN PROGRESS at last observation.
- Do not call #420 GREEN or merge-ready until exact-head core + browser + verify complete successfully.

## #419 disposition
Keep PRODUCT #419 open temporarily as a reference/fallback while #420 proves the clean architecture. Do not merge #419. Once #420 reaches verified parity and replaces the needed value, #419 becomes a close/supersede candidate.

## Next
1. classify #2834 first failure if any,
2. make the smallest architecture-safe fix,
3. obtain real 390px screenshots from #420 without concept-board crop substitution,
4. expand screen-by-screen only after Golden Path remains GREEN,
5. reconcile CONTROL durable state after exact-head verification.
