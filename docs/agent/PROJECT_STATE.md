# GARANG Project State

Last updated: 2026-09-22

## Current objective
Stabilize the canonical commercial GARANG after the Real AI Coach repair and User Performance Model v1 rollout, then move from feature construction to longitudinal external validation and measured behavior change.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main: `40e83c32eac8fd7791ee1d6023d1458cc6e6d560` (PR #188 Photo Evidence v1 merged).
- Wanted remains an isolated competition derivative. Competition submissions remain RECORDED complete by Founder report and must not redefine commercial main.

## VERIFIED commercial evidence
- Current PRODUCT main `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`: PR #188 exact-head Release Gate #1599 / `35599456886` SUCCESS on attempt 1; post-merge Release Gate #1601 / `35601046564` FULL GREEN on attempt 1; Pages #832 / `35601045094` SUCCESS.
- Gate #1601 browser-webkit passed Today action flow, Today Check-in CTA, mobile Planner shortcut, Today visual parity, Golden Path integration + complete journey, authenticated app/Coach, Real LLM Golden Path, recovery, WebKit mobile regression, Settings touch, button health and runtime stability stress.
- PR #188 changed browser/runtime Photo Evidence files, `index.html`, `package.json`, `runtime-manifest.json` and tests only; no Firebase Functions code changed and no production Function deployment is claimed for that merge.
- PRODUCT main `08cfa18e725c919ce2893c3c042d20c5e38d15da`: Release Gate #1600 / `35599747696` FULL GREEN; Pages #831 / `35599747250` SUCCESS; Production Coach Activation #21 / `35599747682` SUCCESS.
- Activation #21 deployed only Firebase Function `api`, preserved the existing GARANG LLM secret, passed authenticated live Coach smoke, authenticated autonomous-write smoke, sensitive-write boundary checks and disposable-user cleanup.
- Activation #20 / `35598862426` on `1723a581...` failed only the bounded createPlan write smoke with `PLAN_TITLE_REQUIRED` because the provider omitted a display title; subsequent commits `e2aa7ed...` + `895fb83...` added and regressed a deterministic display-only fallback before reactivation.
- PRODUCT PR #186 exact-head Release Gate #1591 / `35596002250`: FULL GREEN across core/build, Firestore emulator, Golden Path complete, authenticated Coach, Real LLM Golden Path and full WebKit/mobile regression. PR #186 merged as PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc`; post-merge Release Gate #1592 / `35596512205` is FULL GREEN and Pages #829 / `35596510796` is SUCCESS.
- PRODUCT PR #177 exact-head Release Gate #1562 / `35582093879`: FULL GREEN. The exact same SHA WebKit job was rerun and passed the complete suite again; PR #177 merged as main `9fa951b30be4981b8081e649dd05ab229df44218`.
- Production Coach activation run #11 / `35502595878`: SUCCESS on main `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- The activation preserved the existing `GARANG_LLM_API_KEY`, deployed only Firebase Function `api`, minted a disposable Firebase identity, and ran authenticated live Coach smoke.
- Live smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, with alignment verified; disposable identity cleanup passed.
- Release Gate #1526 / `35502595898`: FULL GREEN for `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- Pages #815: SUCCESS for the same revision.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN before merge.
- Pages #822 / `35511758482`: SUCCESS for current PRODUCT main `c4da0000...`.
- Production Coach Activation #18 / `35511759697`: SUCCESS for current PRODUCT main. Authenticated disposable-user smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, alignment verified; authenticated autonomous-write smoke executed and persisted bounded `createPlan`, verified sensitive-write denial/confirmation boundary, and deleted the disposable account.
- Release Gate #1543 / `35511759634` attempt 3: FULL GREEN for current PRODUCT main. Attempts 1–2 failed different WebKit lifecycle/timing assertions on the identical SHA; attempt 3 passed the complete Golden Path / Real LLM / mobile regression suite.

## Product / AI state
- Personalized Intelligence Loop v1 is MERGED and SOURCE/WEB VERIFIED on PRODUCT main `56ff9c788cac69b8106da66598ecbe4da35c0fcc` via PR #186.
- Intelligence Episode v1 derives recommendation episodes from the existing learning graph and durable resolution/execution/outcome evidence without raw-chat dependence.
- User Response Model v1 derives confidence-weighted acceptance/execution/outcome and duration-response patterns from attributed episodes.
- Recommendation Policy Evaluation v1 evaluates bounded candidates with transparent scoring; response learning is wired into Personalization Policy as constraint-only and cannot exceed the deterministic GARANG Decision envelope.
- Autonomous Intelligence Loop v1 is MERGED and VERIFIED in production on current PRODUCT main `c4da0000...`.
- PR #166 head `173f251542f7172dd8328f1a8c014b4035c7d0da` adds bounded typed Coach data tools, authenticated transactional writes with owner pinning/idempotency/rollback metadata, longitudinal loop metrics, deterministic confidence-gated Personalization Policy v1, and Coach tool-call integration.
- PR #166 exact-head Gate #1530 and merge Gate #1531 were GREEN; subsequent structured-response/write hardening is included in current main `c4da0000...`, Production Activation #18 is GREEN, and Release Gate #1543 attempt 3 is FULL GREEN.
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Generic Coach gateway failures are now classified instead of collapsing into a single external-AI failure message (PR #158).
- Low-data `collect_data` Coach responses were hardened to remain human and actionable instead of only refusing judgment (PR #159).
- Production activation now requires authenticated live LLM smoke rather than allowing a skipped token-based smoke (PR #160).
- Confidence-gated User Performance context is available to Coach without granting it decision ownership (PR #161).
- User Performance Model v1 now includes durable recommendation-resolution evidence and outcome-attributed learning through fully linked Intelligence Learning Contract cycles (PR #164).

## Runtime / deployment boundary
- Commercial web source of truth is PRODUCT main `40e83c32eac8fd7791ee1d6023d1458cc6e6d560`; Pages #832 has deployed it.
- Production Coach backend remains VERIFIED on `08cfa18e725c919ce2893c3c042d20c5e38d15da` after Founder-approved Activation #21. PR #188 contains no Firebase Functions change, so no backend redeploy is claimed or required by that merge.
- Production Coach Activation #18 / `35511759697`: SUCCESS. It deployed only Firebase Function `api`, preserved the existing LLM secret, ran authenticated live LLM smoke plus authenticated autonomous-write smoke, and cleaned up the disposable Firebase identity.
- Live evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified; bounded `createPlan` executed and persisted; sensitive-write request remained denied/confirmation-gated.
- Literal source/backend SHA parity is no longer claimed after frontend-only PR #188. Functional Coach compatibility remains VERIFIED GREEN: current main Gate #1601 includes authenticated Coach + Real LLM browser integration, while the production Coach backend remains the verified Activation #21 revision `08cfa18e...`.

## Stable
- Current commercial source/web release: VERIFIED GREEN on main `40e83c32...` via Gate #1601 attempt 1 + Pages #832.
- Photo Evidence v1 is merged and web-released; raw media remains device-local and optional.
- Personalized Intelligence Loop v1 production backend: VERIFIED GREEN on activated revision `08cfa18e...`.
- Production Real AI Coach connectivity: VERIFIED GREEN.
- Commercial Coach decision/alignment boundary: VERIFIED GREEN.
- User Performance Model v1 core contract: merged.
- Recommendation accept/modify/dismiss evidence: durable.
- Confidence-gated UPM context: merged.
- Outcome-attributed UPM learning: merged to current main and Pages.
- Autonomous Intelligence Loop v1 source/web/production release: VERIFIED GREEN on main `c4da0000...`.
- No VERIFIED P0/P1 source or provider outage remains.

## Broken / blockers
- Coach write ownership drift is RESOLVED in PRODUCT PR #176 and merged to main `0a07c4c5...`. Online authenticated LLM responses now carry sanitized `toolResults` / request metadata into Coach thread state and are marked server-owned; `garang-coach-agent-v4.js` suppresses local mock proposals for server-owned responses while explicit local/offline fallback preserves confirmation-first proposals.
- PR #176 exact-head Release Gate #1559 / `35580756829`: FULL GREEN after updating the complete Golden Path test to use an explicit local-fallback scenario. The earlier same-SHA rerun on Gate #1558 again exposed WebKit lifecycle timing debt, strengthening P2 priority rather than reopening P1.
- Autonomous Intelligence production activation is VERIFIED GREEN via Activation #18.
- Server-side #164 UPM attribution is production-activated and live-smoke verified.
- WebKit lifecycle timing is not a current release blocker. PR #177 exact-head Gate #1562 passed, but immediate post-merge main Gate #1563 later reproduced the Today DOM identity assertion once. Since then PRODUCT main Gates #1592, #1600 and #1601 have each passed on attempt 1; latest #1601 explicitly passes Today action flow and the complete browser gate. Track TD-015 as monitor-only unless the current-path identity assertion recurs.
- Main branch protection, OIDC/WIF deployment auth migration, Functions dependency-family upgrade and runtime ownership simplification remain non-blocking engineering debt.

## Next priorities
1. P4/P5 real longitudinal validation using Intelligence Episodes: recommendation → resolution → execution → outcome → later recommendation quality over 2/4/8-week windows, plus activation/retention funnel measurement on external users.
2. P4/P5 collect real external Intelligence Episodes and evaluate whether response-aware personalization improves acceptance/execution/outcome without weakening guardrails.
3. P4/P5 expand response-model signal quality only from observed episode evidence; keep semantic RAG/model upgrades and broader feature expansion behind demonstrated longitudinal value.
