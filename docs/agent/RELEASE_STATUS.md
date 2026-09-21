# GARANG Release Status

Last updated: 2026-09-21

## Overall decision
- Production Real AI Coach + Autonomous Intelligence backend activation: GREEN / VERIFIED.
- End-to-end Coach action ownership: GREEN / VERIFIED in PR #176 exact-head Gate #1559 and merged to current main.
- Commercial web source main: `56ff9c788cac69b8106da66598ecbe4da35c0fcc` after PR #186.
- Current PRODUCT main: `56ff9c788cac69b8106da66598ecbe4da35c0fcc`.
- Current verified production Coach backend deployment revision: `c4da00002dbce7489593a2097dc82dc4da5b8ba4`.
- Current web/main ↔ production Coach backend parity: YELLOW. Web/source includes PR #186 server intelligence changes; production Coach backend remains on `c4da00002dbce7489593a2097dc82dc4da5b8ba4` until explicit activation.

## Personalized Intelligence Loop v1
Decision: SOURCE/WEB GREEN / PRODUCTION BACKEND ACTIVATION PENDING.
- PRODUCT PR #186 head `da755b62726be55e5f96f23272d99129054bb45e`.
- Exact-head Release Gate #1591 / `35596002250`: FULL GREEN across core/build, Firestore emulator, Golden Path complete, authenticated Coach, Real LLM Golden Path and full WebKit/mobile regression.
- PR #186 merged as PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc`.
- Post-merge Release Gate #1592 / `35596512205`: FULL GREEN.
- Pages #829 / `35596510796`: SUCCESS.
- Intelligence Episode v1, User Response Model v1 and Recommendation Policy Evaluation v1 are merged.
- Response-derived personalization is confidence-gated and constraint-only; it cannot exceed deterministic Decision Intelligence or create automatic progression increases.
- Production Coach Activation #19 was SKIPPED by design. No claim is made that PR #186 server-side behavior is live until an explicit Founder-approved activation and authenticated live smoke pass.

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
Decision: PRODUCTION GREEN / VERIFIED.
- PRODUCT PR #166 introduced the bounded loop; structured-response/write hardening is included in current main `c4da00002dbce7489593a2097dc82dc4da5b8ba4`.
- Production Coach Activation #18 / `35511759697`: SUCCESS.
- Authenticated live Coach smoke: PASS with `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified.
- Authenticated autonomous-write smoke: PASS; bounded `createPlan` executed and persisted, sensitive-write path remained denied/confirmation-gated, disposable account cleanup passed.
- Pages #822 / `35511758482`: SUCCESS.
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN.
- Attempts 1–2 failed distinct WebKit lifecycle/timing waits on the identical SHA; this remains release-integrity debt despite final GREEN.
- Raw database authority and destructive/bulk/account/security/schema/secret/billing/production actions remain unavailable to the LLM.

## Coach write ownership unification
Decision: SOURCE/CI GREEN / MERGED.
- PRODUCT PR #176 merged as `0a07c4c5bd19397f43bfe9eaedd20c524f7620da`.
- Exact-head Release Gate #1559 / `35580756829`: FULL GREEN.
- Online authenticated LLM messages preserve bounded server action metadata and suppress browser mock proposal regeneration.
- Explicit local/offline fallback preserves the previous confirmation-first browser proposal path.
- Gate #1558 on an earlier same task head failed a known WebKit lifecycle/proposal readiness path; #1559 passed after the complete Golden Path fixture was made explicit about local fallback.
- No production Function deployment was performed in this change.

## WebKit lifecycle determinism
Decision: SOURCE/CI GREEN / MERGED.
- PRODUCT PR #177 exact head `137b3e55af5eb5e5dcdbda15bf9c78d19a1c251f`.
- Release Gate #1562 / `35582093879`: FULL GREEN.
- Same-SHA browser-webkit job rerun: FULL GREEN again, including Golden Path complete, authenticated Coach, Real LLM, Settings, button health and runtime stress.
- Root cause was no-op lifecycle replacement of the Today action DOM; unchanged Today markup now preserves the live flow and route CTA node identity.
- No timeout increase, new retry owner, schema change, backend change or production Function deployment.
- PR #177 merged to PRODUCT main `9fa951b30be4981b8081e649dd05ab229df44218`.
- Post-merge push-run visibility is unavailable through the current GitHub connector; merge drift was separately checked and only the three PR #177 files differ from previous main.

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
Automated source/web/production gate status: GREEN.
Product-action confidence: GREEN for the server/browser single-owner contract on merged source. Production backend remains on the previously activated `c4da0000...` revision until a separate deployment is explicitly authorized; PR #176 is a browser/runtime ownership fix and does not claim a new Functions deployment.
Release confidence note: TD-015 WebKit lifecycle determinism is RESOLVED in PR #177; exact-head Gate #1562 is GREEN and the same SHA WebKit job passed a second complete run.
- Provider connectivity: PASS.
- Production authenticated live smoke: PASS.
- Previous exact production revision gate: PASS.
- Current main Pages deployment: PASS.
- Current main Release Gate #1543 attempt 3: PASS.
- Pages #822: PASS.
- Production Coach Activation #18: PASS, including authenticated live LLM + autonomous-write smoke and cleanup.
- Current main server-side UPM parity in production: PASS.

## Remaining non-blocking debt
- Server-enforced main branch protection.
- Long-lived Firebase deployment credential → OIDC/WIF.
- Firebase Functions dependency-family upgrade.
- Firebase build-image cleanup/cost hygiene.
- Active runtime ownership simplification where duplicate owners are VERIFIED.
