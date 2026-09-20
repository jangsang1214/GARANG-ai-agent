# GARANG Release Status

Last updated: 2026-09-20

## Overall decision
- Production Real AI Coach: GREEN / VERIFIED.
- Commercial web current main: GREEN / VERIFIED.
- Current PRODUCT main: `47d95a71c4a526ba966656a8f923ebf0b1db46cf`.
- Current verified production Coach backend deployment revision: `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- The difference is intentional: PR #164 includes server-side User Performance attribution source changes that have not received a new production deployment approval.

## Production Coach
Decision: GREEN / LIVE PROVIDER VERIFIED.
- Production Coach Activation run #11 / `35502595878`: SUCCESS.
- Firebase project: `fitfind-ai`; deployed Function: `api`.
- Existing `GARANG_LLM_API_KEY` was preserved.
- Authenticated disposable-user live smoke: PASS.
- Response evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Disposable smoke identity deletion: PASS.
- Release Gate #1526 / `35502595898`: FULL GREEN.
- Pages #815: SUCCESS.

## Current commercial PRODUCT main
Decision: GREEN / CURRENT MAIN VERIFIED.
- Main: `47d95a71c4a526ba966656a8f923ebf0b1db46cf`.
- PR #164: merged, outcome-attributed User Performance learning.
- PR #164 exact-head Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS.
- Post-merge Gate #1527 / `35502864020`: FULL GREEN.
- Production Coach Activation #12 for #164: SKIPPED by design because the merge commit was not an explicit activation marker.

## User Performance Model release state
- Evidence-aware UPM v1: merged.
- Recovery/check-in legacy fallback defect: fixed.
- Recommendation resolution evidence persistence: merged.
- Confidence-gated read-only UPM context: merged.
- Coach consumes confidence-gated UPM context while Decision Intelligence retains ownership.
- Outcome-attributed score from fully linked recommendation → execution → outcome cycles: merged in PR #164.
- Browser/main deployment includes #164 via Pages #816.
- Production server context does not yet include the #164 server-side attribution changes.

## Coach UX repair
- PR #158 classifies gateway failures instead of exposing one generic external-AI failure.
- PR #159 keeps `collect_data` responses useful and conversational while preserving conservative confidence boundaries.
- PR #160 makes authenticated live LLM smoke mandatory inside production activation.
- PR #161 supplies confidence-gated UPM context to Coach without state mutation or LLM decision ownership.

## Competition channel
Competition derivatives remain separate release channels. Founder-reported Wanted / 롯데 / 브로제이 submission completion stays RECORDED unless submission artifacts are independently re-opened.

## Release gate
Current status: YELLOW only for production server parity; current commercial web main itself is GREEN.
- Provider connectivity: PASS.
- Production authenticated live smoke: PASS.
- Previous exact production revision gate: PASS.
- Current main Pages deployment: PASS.
- Current main post-merge Release Gate #1527: PASS.
- Current main server-side UPM parity in production: PENDING explicit production activation.

## Remaining non-blocking debt
- Server-enforced main branch protection.
- Long-lived Firebase deployment credential → OIDC/WIF.
- Firebase Functions dependency-family upgrade.
- Firebase build-image cleanup/cost hygiene.
- Active runtime ownership simplification where duplicate owners are VERIFIED.
