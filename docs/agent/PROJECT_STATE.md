# GARANG Project State

Last updated: 2026-09-20

## Current objective
Stabilize the canonical commercial GARANG after the Real AI Coach repair and User Performance Model v1 rollout, then move from feature construction to longitudinal external validation and measured behavior change.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Canonical PRODUCT main: `47d95a71c4a526ba966656a8f923ebf0b1db46cf` (PR #164, outcome-attributed User Performance learning).
- Wanted remains an isolated competition derivative. Competition submissions remain RECORDED complete by Founder report and must not redefine commercial main.

## VERIFIED commercial evidence
- Production Coach activation run #11 / `35502595878`: SUCCESS on main `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- The activation preserved the existing `GARANG_LLM_API_KEY`, deployed only Firebase Function `api`, minted a disposable Firebase identity, and ran authenticated live Coach smoke.
- Live smoke returned `source=llm`, provider `openai`, model `gpt-5.6-luna`, with alignment verified; disposable identity cleanup passed.
- Release Gate #1526 / `35502595898`: FULL GREEN for `e238b6164da976219da328ef0fe3bd20ea0e7807`.
- Pages #815: SUCCESS for the same revision.
- PR #164 exact-head Release Gate #1525 / `35502377218`: GREEN before merge.
- Pages #816 / `35502863525`: SUCCESS for current PRODUCT main `47d95a71...`.
- Post-merge Release Gate #1527 / `35502864020` is still running at this reconciliation point; do not upgrade current-main release status to fully GREEN until it completes successfully.

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Generic Coach gateway failures are now classified instead of collapsing into a single external-AI failure message (PR #158).
- Low-data `collect_data` Coach responses were hardened to remain human and actionable instead of only refusing judgment (PR #159).
- Production activation now requires authenticated live LLM smoke rather than allowing a skipped token-based smoke (PR #160).
- Confidence-gated User Performance context is available to Coach without granting it decision ownership (PR #161).
- User Performance Model v1 now includes durable recommendation-resolution evidence and outcome-attributed learning through fully linked Intelligence Learning Contract cycles (PR #164).

## Runtime / deployment boundary
- Commercial web source of truth is PRODUCT main `47d95a71...`; Pages #816 has deployed it.
- Production Coach backend is VERIFIED at deployment revision `e238b616...`.
- PR #164 also changes server-side User Performance attribution code, but Production Coach Activation run #12 was intentionally skipped because #164 was not an explicit production-activation commit.
- Therefore browser/main and production backend are temporarily one intelligence slice apart. This is YELLOW release-integrity drift, not a current Coach outage.
- A new production Function deployment for #164 requires explicit Founder approval.

## Stable
- Production Real AI Coach connectivity: VERIFIED GREEN.
- Commercial Coach decision/alignment boundary: VERIFIED GREEN.
- User Performance Model v1 core contract: merged.
- Recommendation accept/modify/dismiss evidence: durable.
- Confidence-gated UPM context: merged.
- Outcome-attributed UPM learning: merged to current main and Pages.
- No VERIFIED P0/P1 source or provider outage remains.

## Broken / blockers
- No VERIFIED P0/P1 blocker.
- Current-main Release Gate #1527 remains pending at this observation point.
- Server-side #164 UPM attribution is not yet production-activated.
- Main branch protection, OIDC/WIF deployment auth migration, Functions dependency-family upgrade and runtime ownership simplification remain non-blocking engineering debt.

## Next priorities
1. Close Release Gate #1527 for current PRODUCT main.
2. If Founder approves, deploy current server-side UPM attribution to production and repeat authenticated live Coach smoke.
3. Begin longitudinal external validation: recommendation → accept/modify/dismiss → execution → outcome → later recommendation quality.
4. Continue runtime ownership simplification only where active boot-path evidence shows duplicate ownership or flake.
5. Keep P2 branch-protection / OIDC-WIF / dependency hardening separate from product-intelligence work.
