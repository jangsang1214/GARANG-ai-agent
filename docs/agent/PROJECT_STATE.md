# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG baseline frozen while completing the Wanted/competition submission. The Wanted public judge runtime, including visible Real AI Coach text response, is now VERIFIED GREEN; the remaining P1 is final submission/form completion.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted release branch: `wanted/2026-release`.
- Wanted release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- PRODUCT PR #154 `Fix Wanted browser Real AI transport` is merged into Wanted only.

## VERIFIED commercial evidence
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted Real AI evidence
- Canonical `/coach` remains Firebase-authenticated.
- Signed-out judge mode uses isolated `/wanted/coach` only for the explicit synthetic 14-day contract.
- Server boundary remains synthetic-contract-bound, text-only, exact-origin constrained, quota-limited and judging-period-limited.
- Existing `GARANG_LLM_API_KEY` remains server-side.
- PR #150 added exact-origin Wanted browser CORS handling; PR #152 ensured that hotfix activates in production.
- Founder then observed the public browser still fell back to local Coach. TinyFish reproduced the same fallback, so this was VERIFIED as a public-runtime P1 defect rather than a device issue.
- Root cause of the remaining client defect: Wanted transport cloned legacy caller headers even though the public CORS boundary permits only `Content-Type`; public judge requests now construct a fresh `Content-Type`-only header set and never inherit Authorization/custom caller headers.
- PR #154 Wanted Gate #97 / `35183623414`: GREEN, including transport-header isolation, CORS contract, 14-day dataset, build/assets, 60-second journey and judge UX.
- PR #154 full Release Gate #1494 / `35183623380`: FULL GREEN, including complete Golden Path, authenticated Coach, existing Real LLM integration, mobile regression and runtime stress.
- PR #154 merged as `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.

## Wanted public deployment
Evidence class: GREEN.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Current production deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Vercel page origin is retained while the shell loads exact Wanted release `3acd2ae654ce0d387b64174c96a6243d89cb9b74` assets from jsDelivr.
- TinyFish live browser automation on the stable alias VERIFIED end-to-end:
  - `60초 심사 체험` entry works.
  - 14-day synthetic judging state loads.
  - Coach receives exact prompt `나 준나 강해지고싶어`.
  - The visible response is a normal context-aware Real AI Coach answer and does not contain either local-fallback message.
  - The response references the judging data (recent squat/RDL work, readiness 43, fatigue 55) and recommends a recovery-oriented session (~30 min, ~50% intensity, ~55% volume).

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Wanted no-login judge mode uses sanitized synthetic context with Real LLM text explanation only.
- Public judge photo interpretation remains disabled; authenticated Production Coach owns photo analysis.

## Stable
- Commercial GARANG baseline: GREEN / frozen.
- Wanted source/CI: GREEN.
- Wanted production Firebase API + CORS boundary: GREEN.
- Wanted public 14-day interactive runtime: GREEN.
- Wanted public visible Real AI Coach response: GREEN.

## Broken / blockers
- No VERIFIED P0/P1 source, CI, Firebase, provider, judge-entry, touch or public-Coach blocker remains.
- Wanted final participation/submission action is still pending.
- Firebase build-image cleanup warning remains non-blocking cost hygiene.

## Next priorities
1. P1 finalize Wanted submission form/checklist using the stable root URL without cache-buster query params.
2. P1 complete Founder-controlled final submission before deadline.
3. Freeze competition runtime after submission except critical outage/bug handling.
4. After submission, resume P4 User Performance Model v1.
