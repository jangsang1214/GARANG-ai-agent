# GARANG Release Status

Last updated: 2026-09-20

## Overall decision
- Canonical PRODUCT main `25f369307424e845a895c8c15c28a5fbddf73346`: SOURCE/CI GREEN.
- User Performance Model v1 Coach-context integration: SOURCE/CI GREEN, PRODUCTION RUNTIME NOT YET ACTIVATED.
- Existing authenticated Coach / Real LLM Golden Path: regression GREEN in post-merge Gate #1513.
- Competition submissions: RECORDED COMPLETE for Wanted / 롯데 / 브로제이.
- Competition-specific deployed surfaces remain frozen except critical fixes or organizer-required changes.

## Canonical PRODUCT main
Decision: GREEN FOR SOURCE/CI.
- Main: `25f369307424e845a895c8c15c28a5fbddf73346`.
- PR #159 is included before PR #161 and keeps collect-data responses useful while preserving GARANG decision ownership.
- PR #161 adds confidence-gated UPM v1 to server Agent Context and authenticated Coach explanation context.
- Deterministic Decision Intelligence remains the judgment owner; UPM is explicitly non-decisional.

## UPM verification
- PR #155: durable recommendation-resolution evidence.
- PR #156: confidence-gated read-only UPM context in browser runtime.
- PR #161 exact-head Release Gate #1509 / `35500189808`: FULL GREEN after one transient WebKit rerun.
- PR #161 merge: `25f369307424e845a895c8c15c28a5fbddf73346`.
- Post-merge Release Gate #1513 / `35500590433`: FULL GREEN.
- Post-merge coverage includes Commercial Core, Firebase health/rules, complete Golden Path, authenticated app boot, authenticated Coach plan flow, Real LLM Golden Path, recovery regressions and mobile runtime stress.

## Production runtime boundary
Decision: YELLOW / NOT ACTIVATED FOR UPM CONTEXT.
- Production Coach Activation #10 / `35500590430`: SKIPPED on `25f36930...`.
- No production deployment was performed in this work.
- Do not state that the live production Coach is consuming UPM v1 until an approved deploy and authenticated live smoke verify it.
- Existing previously verified production Coach capability remains separate evidence from this new source change.

## Competition derivative
Decision: FROZEN / previously VERIFIED for Wanted technical runtime.
- Wanted release remains separate from canonical commercial PRODUCT main.
- Wanted / 롯데 / 브로제이 submission completion remains RECORDED from Founder report.

## Release gate
- Source merge readiness: GREEN.
- Post-merge regression: GREEN.
- Production activation for UPM server context: YELLOW / explicit approval required.
- No P0/P1 regression identified.

## Remaining non-blocking debt
- CONTROL/PRODUCT main protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup.
