# GARANG Project State

Last updated: 2026-09-21

## Current objective
Stabilize the canonical commercial GARANG after the Real AI Coach repair and User Performance Model v1 rollout, then move from feature construction to longitudinal external validation and measured behavior change.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main: `0a07c4c5bd19397f43bfe9eaedd20c524f7620da` (PR #176 Coach server/browser single-owner unification merged).
- Wanted remains an isolated competition derivative. Competition submissions remain RECORDED complete by Founder report and must not redefine commercial main.

## VERIFIED commercial evidence
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
- Commercial web source of truth is PRODUCT main `c4da00002dbce7489593a2097dc82dc4da5b8ba4`; Pages #822 has deployed it.
- Production Coach backend is VERIFIED on current commercial main `c4da00002dbce7489593a2097dc82dc4da5b8ba4` after explicit Founder approval.
- Production Coach Activation #18 / `35511759697`: SUCCESS. It deployed only Firebase Function `api`, preserved the existing LLM secret, ran authenticated live LLM smoke plus authenticated autonomous-write smoke, and cleaned up the disposable Firebase identity.
- Live evidence: `source=llm`, provider `openai`, model `gpt-5.6-luna`, GARANG alignment verified; bounded `createPlan` executed and persisted; sensitive-write request remained denied/confirmation-gated.
- Commercial web/main and production Coach backend parity is VERIFIED GREEN.

## Stable
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
- Main branch protection, OIDC/WIF deployment auth migration, Functions dependency-family upgrade and runtime ownership simplification remain non-blocking engineering debt.

## Next priorities
1. P2 release integrity: remove recurrent WebKit lifecycle/timing nondeterminism on the active Today / Golden Path runtime instead of normalizing reruns.
2. P4/P5 real longitudinal validation: recommendation → resolution → execution → outcome → later recommendation quality over 2/4/8-week windows, plus activation/retention funnel measurement on external users.
3. P3/P6 simplify active frontend ownership and repository noise before adding new screens; keep branch protection / OIDC-WIF / dependency hardening as dedicated integrity work.
4. Defer payment/subscription build and broader feature expansion until external validation shows which retained value users will pay for.
