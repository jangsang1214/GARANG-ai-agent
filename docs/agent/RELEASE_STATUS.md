# GARANG Release Status

Last updated: 2026-09-16

## Overall decision
GREEN for the current Wanted/demo web release baseline.

This does not claim full commercial production readiness. It means the exact current PRODUCT main has passed the repository release gate, deployed successfully to GitHub Pages, and passed a real authenticated production text/photo Coach smoke against the production Firebase Function.

## PRODUCT main
Decision: GREEN.
- Current main: `01473986568a6bbb122ab9ff05c8927a73b5622b`.
- PR #123 Coach multimodal/release hardening: MERGED.
- PR #124 Intelligence Learning Contract v1: MERGED.
- PR #128 shell-navigation reconciliation: MERGED.
- PR #129 Today remount self-healing + disposable production Coach smoke: MERGED.

## Release Gate evidence
### PR exact head
Release Gate #1441 / run `35100746180`: GREEN.

### Post-merge main
Release Gate #1442 / run `35101459478`: GREEN.
- locked dependencies: PASS
- production + Functions dependency security: PASS
- GARANG Intelligence Core: PASS
- Action & Data Reliability: PASS
- Commercial Core/regressions: PASS
- runtime/build: PASS
- Firebase public health: PASS
- Firestore emulator rules: PASS
- Today action flow: PASS
- Today bottom Check-in + remount path: PASS
- Today visual parity: PASS
- Daily Plan: PASS
- Simplified Shell: PASS
- Planner execution: PASS
- Nutrition recommendation flow: PASS
- truth surface / first record: PASS
- Golden Path integration: PASS
- Golden Path complete journey: PASS
- authenticated app boot: PASS
- authenticated Coach plan: PASS
- Real LLM Golden Path integration: PASS
- Coach conversational logging: PASS
- recovery mutation/touch: PASS
- mobile regressions / Settings / button health / runtime stress: PASS
- final aggregate verify: PASS

## Deployment
Decision: GREEN.
- GitHub Pages run #797 / `35101457283`: SUCCESS on exact main `01473986568a6bbb122ab9ff05c8927a73b5622b`.
- Public deployment URL: `https://jangsang1214.github.io/-fitmind-ai/`.

## Production Real AI Coach
Decision: GREEN for current smoke scope.
- Production Coach Live Smoke run `35101459492`: SUCCESS on exact main.
- Authentication: disposable Firebase email/password identity created at runtime; short-lived ID token and refresh token masked; no durable `GARANG_FIREBASE_ID_TOKEN` secret required.
- Text Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified.
- Photo Coach: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified, grounding verified, image context accepted.
- Disposable Firebase identity deletion: PASS.
- The smoke account has no longitudinal data, so `collect_data` / insufficient-evidence judgment is expected and is not a provider failure.

## Intelligence Learning Contract
Decision: GREEN / RELEASED.
- Chain: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Deterministic GARANG decision ownership preserved.
- LLM remains an explanation/language layer.
- Outcome Learning remains read-only/advisory with no silent mutation or automatic progression increase.

## Golden Path / regression
Decision: GREEN for the current web submission baseline.
- The previously intermittent Today workout-preparation remount failure was addressed with bounded self-healing and passed both exact-head and post-merge full WebKit gates.
- The earlier transient complete-journey Coach/CORS signal did not reproduce in the final full gates.

## Remaining release distinctions
- Wanted/demo submission readiness: GREEN technically; packaging/copy remains the active task.
- Full commercial production readiness: separate gate, not claimed here.
- Manual coverage on every physical device/in-app browser remains useful but is not a blocker for the currently verified web submission path.
