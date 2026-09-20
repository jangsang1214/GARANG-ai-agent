# GARANG Release Status

Last updated: 2026-09-20

## Overall decision
- Production Real AI Coach: GREEN / VERIFIED on deployed backend `fca5357d1c844bd34353a118f9b23e81410e7ca9`.
- Commercial web current main: GREEN / VERIFIED on `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- Current PRODUCT main: `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- Current verified production Coach backend deployment revision: `fca5357d1c844bd34353a118f9b23e81410e7ca9`.
- Current web/main ↔ production Coach backend parity: YELLOW because Autonomous Intelligence Loop v1 is merged/web-deployed but not yet production-activated.

## Production Coach
Decision: GREEN / LIVE PROVIDER VERIFIED.
- Production Coach Activation run #13 / `35503623842`: SUCCESS on current commercial main.
- Firebase project: `fitfind-ai`; deployed Function: `api`.
- Existing `GARANG_LLM_API_KEY` was preserved.
- Authenticated disposable-user live smoke: PASS.
- Response evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified.
- Disposable smoke identity deletion: PASS.
- Release Gate #1529 / `35503623868`: FULL GREEN.
- Pages #817 / `35503623353`: SUCCESS.

## Current commercial PRODUCT main
Decision: GREEN / CURRENT MAIN VERIFIED.
- Main: `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- PR #164: merged, outcome-attributed User Performance learning.
- PR #164 exact-head Gate #1525 / `35502377218`: GREEN.
- Pages #816 / `35502863525`: SUCCESS.
- Post-merge Gate #1527 / `35502864020`: FULL GREEN.
- PR #165 explicitly activated current server-side UPM parity after Founder approval.

## Autonomous Intelligence Loop v1
Decision: MAIN/WEB GREEN / PRODUCTION ACTIVATION PENDING.
- PRODUCT PR #166 merged as `5483b848e2973f2bf66a1a67148f3c5a5142fb66`.
- Exact-head Release Gate #1530 / `35505697471` attempt 2: FULL GREEN.
- Post-merge Release Gate #1531 / `35506440313` attempt 2: FULL GREEN.
- Pages #818 / `35506439803`: SUCCESS.
- Core/build/dependency checks, Firestore emulator, authenticated Coach plan flow, Real LLM Golden Path, Golden Path complete journey and full WebKit regression: PASS.
- Post-merge attempt 1 hit the unchanged Today bottom Check-in WebKit timing/assertion flake; identical merged SHA passed the full browser job on attempt 2.
- The main release includes bounded typed Coach writes, authenticated transactions, explicit evidence gating, idempotency/audit/rollback metadata, longitudinal loop metrics and deterministic Personalization Policy v1.
- Raw database authority and destructive/bulk/account/security/schema/secret/billing/production actions remain unavailable to the LLM.
- Production Coach Activation #14 was SKIPPED by design. The new server/write path remains NOT production-deployed or live-smoke verified.

## User Performance Model release state
- Evidence-aware UPM v1: merged.
- Recovery/check-in legacy fallback defect: fixed.
- Recommendation resolution evidence persistence: merged.
- Confidence-gated read-only UPM context: merged.
- Coach consumes confidence-gated UPM context while Decision Intelligence retains ownership.
- Outcome-attributed score from fully linked recommendation → execution → outcome cycles: merged in PR #164.
- Browser/main deployment includes #164 via Pages #816.
- Production server context includes the #164 server-side attribution changes and authenticated live smoke is VERIFIED.

## Coach UX repair
- PR #158 classifies gateway failures instead of exposing one generic external-AI failure.
- PR #159 keeps `collect_data` responses useful and conversational while preserving conservative confidence boundaries.
- PR #160 makes authenticated live LLM smoke mandatory inside production activation.
- PR #161 supplies confidence-gated UPM context to Coach without state mutation or LLM decision ownership.

## Competition channel
Competition derivatives remain separate release channels. Founder-reported Wanted / 롯데 / 브로제이 submission completion stays RECORDED unless submission artifacts are independently re-opened.

## Release gate
Current source/web status: GREEN.
Current production parity status: YELLOW until Autonomous Intelligence Loop v1 production activation/live smoke.
- Provider connectivity: PASS.
- Production authenticated live smoke: PASS.
- Previous exact production revision gate: PASS.
- Current main Pages deployment: PASS.
- Current main post-merge Release Gate #1531 attempt 2: PASS.
- PR #166 exact-head Release Gate #1530 attempt 2: PASS.
- Pages #818: PASS.
- Production Coach Activation #14: SKIPPED; prior deployed backend remains healthy.
- Current main server-side UPM parity in production: PASS.

## Remaining non-blocking debt
- Server-enforced main branch protection.
- Long-lived Firebase deployment credential → OIDC/WIF.
- Firebase Functions dependency-family upgrade.
- Firebase build-image cleanup/cost hygiene.
- Active runtime ownership simplification where duplicate owners are VERIFIED.
