# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG baseline frozen while finishing the Wanted/competition submission. The current P1 is final public-runtime confidence and submission.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`.
- PRODUCT: `jangsang1214/-fitmind-ai`.
- Commercial PRODUCT main remains frozen at `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Wanted release branch: `wanted/2026-release`.
- Wanted release SHA: `23990db387c9e1f6570dc971a8da34d56946bc85`.
- PRODUCT PR #141 `Enable Wanted Real AI Coach` is merged into Wanted only.

## VERIFIED commercial evidence
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted Real AI evidence
- Canonical `/coach` remains Firebase-authenticated.
- Signed-out judge mode uses isolated `/wanted/coach` only for the explicit synthetic 14-day contract.
- Browser does not forge Firebase Authorization.
- Server sanitizes/whitelists judge context, rejects images, enforces exact Wanted origin, quotas and judging-period expiry.
- Existing `GARANG_LLM_API_KEY` remains server-side.
- PR #141 Wanted Gate #69 / `35141844675`: GREEN.
- Full Release Gate #1476 / `35141844625`: FULL GREEN.
- Post-merge Wanted Gate #71 / `35142457444`: GREEN.
- Activation run `35142457402`: GREEN.
- Production `/coach` preflight after deploy: unauthenticated POST `401`, wrong-method GET `405`, provider not invoked, user data not read.
- Production `/wanted/coach` live smoke returned `source:"llm"`, request `fb37b74b-c376-4e74-8854-8e4f64ec2898`, decision mode `recover`.

## Wanted public deployment incident and recovery
Evidence class: GREEN for judge entry + 14-day interactive runtime after recovery; visible public Coach answer still pending Founder confirmation.

Incident:
- A Vercel production redeploy created a shell without the required exact-SHA asset-root behavior.
- Observable symptom matched Founder report: static login surface appeared, `60초 심사 체험`/14-day state did not appear correctly and taps were non-functional.
- Exact release CDN assets remained healthy, so this was a deployment-shell regression rather than loss of synthetic data or failure of the Real LLM backend.

Recovery:
- Stable alias remains `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Repaired production deployment: `dpl_92kMMBx2tPepvsfBZNdY84B942bh` / READY.
- The repaired shell keeps the Vercel page origin while loading the exact release `23990db387c9e1f6570dc971a8da34d56946bc85` from jsDelivr.
- TinyFish live browser automation on the stable alias VERIFIED:
  - `60초 심사 체험` exists.
  - Button click succeeds.
  - `JUDGING MODE · 14 DAYS SYNTHETIC DATA` loads.
  - Today judge surfaces and 14-day state render.
  - Toggle/tap interactions work.
  - No visible loading/error/broken-element failure was observed in that smoke.

## Product / AI state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language/multimodal context.
- Wanted no-login judge mode uses sanitized synthetic context with Real LLM text explanation only.
- Public judge photo interpretation remains disabled; authenticated Production Coach owns photo analysis.

## Stable
- Commercial GARANG baseline: GREEN / frozen.
- Wanted source/CI: GREEN.
- Wanted production Firebase API: GREEN.
- Wanted production Real LLM backend: GREEN.
- Wanted stable public alias after shell recovery: judge entry + 14-day interaction GREEN.

## Broken / blockers
- No VERIFIED P0/P1 source, CI, Firebase, provider, judge-entry or touch blocker remains.
- Final confidence item: Founder opens the stable URL, enters `60초 심사 체험`, asks Coach `오늘 회복 상태를 알려줘`, and confirms the visible answer succeeds.
- Firebase build-image cleanup warning remains non-blocking cost hygiene.

## Next priorities
1. P1 Founder visible Coach smoke on the repaired stable alias.
2. P1 finalize Wanted submission form/checklist using the stable root URL without cache-buster query params.
3. Freeze competition runtime after submission except critical outage/bug handling.
4. After submission, resume P4 User Performance Model v1.
