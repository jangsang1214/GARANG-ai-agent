# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for the current verified commercial GARANG web baseline and as the source snapshot for the Wanted derivative.

This does not claim universal commercial-production readiness across every physical device/channel. It means the exact current PRODUCT main passed the full repository release gate, deployed to GitHub Pages, and the production Firebase Coach backend has independently passed authenticated text/photo LLM smoke.

## PRODUCT main
Decision: GREEN.
- Current main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- PR #130 ChatGPT-style Coach composer photo `+`: MERGED.
- PR #131 mobile route-intent stabilization: MERGED.
- Earlier Real AI Coach / learning / Today stabilization PRs remain incorporated.

## Release Gate evidence
### PR exact heads
- PR #130 Release Gate #1444: FULL GREEN.
- PR #131 Release Gate #1448 / run `35109312382`: FULL GREEN.

### Current post-merge main
Release Gate #1449 / run `35110020514`: FULL GREEN.
- locked dependencies: PASS
- production + Functions dependency security gates: PASS
- GARANG Intelligence Core: PASS
- Action & Data Reliability: PASS
- Commercial Core/regressions: PASS
- runtime/build: PASS
- Firebase public health: PASS
- Firestore emulator rules: PASS
- browser interaction/mobile layout: PASS
- Today action / bottom Check-in / visual parity: PASS
- Daily Plan / Simplified Shell / Planner / Nutrition: PASS
- truth surface / first record: PASS
- Golden Path integration: PASS
- Golden Path complete journey: PASS
- authenticated app boot: PASS
- authenticated Coach plan: PASS
- Real LLM Golden Path integration: PASS
- Coach conversational logging: PASS
- recovery mutation/touch: PASS
- mobile regression / Settings / button health / runtime stress: PASS
- aggregate verify: PASS

## Deployment
Decision: GREEN.
- GitHub Pages #799 / run `35110017165`: SUCCESS on exact main `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Founder OS Event Envelope #968 / run `35110020344`: SUCCESS.
- Public deployment URL: `https://jangsang1214.github.io/-fitmind-ai/`.

## Coach photo composer
Decision: GREEN / RELEASED.
- Photo attachment entry is a compact `+` inside the Coach composer.
- Legacy standalone photo tools/note row is removed.
- Hidden picker + thumbnail preview + remove action are composer-owned.
- Supported input: one JPG/PNG/WebP image, max 8 MB.
- Photo input remains one-request ephemeral and clears after consumption.
- Raw photo data is not persisted to GARANG state/localStorage/Firestore/telemetry/conversation text history by this path.

## Mobile route stability
Decision: GREEN / RELEASED.
- Canonical Router captures touch intent only for existing Today/Record route controls.
- Short non-drag pointerup commits through `GarangRouter.navigate` even if presentation DOM remounts between touch phases.
- Mouse/keyboard behavior and data ownership are unchanged.
- Frozen Router version contract remains `garang-router-v1.3.0`.
- Exact-head and post-merge full WebKit gates pass.

## Production Real AI Coach
Decision: GREEN for verified smoke scope.
- Production Coach Live Smoke run `35101459492`: SUCCESS.
- Authentication: disposable Firebase email/password identity created at runtime; short-lived tokens masked; identity deleted after smoke.
- Text Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified.
- Photo Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment + grounding verified and image context accepted.
- PR #130/#131 are frontend-only changes; no Functions redeploy was required by those changes.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains an explanation/language layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory: no silent state mutation or automatic progression increase.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative created from this verified stable snapshot. Competition-only copy/demo/presentation changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family has 9 moderate advisory findings; full fix requires breaking upgrade and dedicated verification.
- Root dev/tooling informational audit still has 23 findings while production-runtime audit remains clean.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
