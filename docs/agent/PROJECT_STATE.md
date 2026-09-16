# GARANG Project State

Last updated: 2026-09-17

## Current objective
Keep the VERIFIED commercial GARANG baseline frozen while finishing the Wanted/competition submission. The latest P1 fixed the final major demo gap: the public no-login judging experience now has a competition-isolated Real LLM text Coach path instead of falling back to the local Coach engine.

## Repository observations
- CONTROL: `jangsang1214/GARANG-ai-agent`; orchestration/policy/project state.
- PRODUCT: `jangsang1214/-fitmind-ai`; implementation/tests/CI/releases.
- PRODUCT canonical commercial main remains `b863a7634bd64b03a6e6f3772950c43cc81afb6f` and was not modified by Wanted work.
- Wanted derivative release branch: `wanted/2026-release`.
- Wanted derivative current release SHA: `23990db387c9e1f6570dc971a8da34d56946bc85`.
- PRODUCT PR #141 `Enable Wanted Real AI Coach` is MERGED into the Wanted release branch only.

## VERIFIED commercial release evidence
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial-main GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.

## VERIFIED Wanted Real AI fix
Root cause:
- The 60-second judging experience stores its clearly synthetic 14-day state in signed-out localStorage and does not create a Firebase user session.
- Canonical `/coach` correctly requires a Firebase ID token and reads canonical cloud user state, so the no-login judge flow previously hit `COACH_AUTH_REQUIRED` and fell back to local Coach.
- Direct Firebase anonymous sign-in was rejected as the implementation because app auth hydration/sync could switch state ownership and risk moving synthetic judge data into cloud user storage.

Released solution:
- Canonical `/coach` remains unchanged and Firebase-authenticated.
- Wanted judge mode uses a separate `/wanted/coach` text-only path when no signed-in user exists.
- The browser sends only the Wanted synthetic contract; it does not impersonate a signed-in GARANG user or attach a Firebase Authorization token.
- Server sanitization accepts only `garang-wanted-judge-data-v1`, `synthetic:true`, `spanDays:14`, whitelists supported training/nutrition/recovery/body/planner/memory fields, strips identity/free-text fields, and rejects incomplete/oversized payloads.
- The public route requires the exact stable Wanted Vercel origin, rejects images, has per-client + global quotas, and auto-expires after judging (`2026-10-18 00:00 KST`).
- Production provider secret remains server-side; no LLM secret was copied to Vercel/browser code.

## Verification evidence
- PR #141 Wanted Gate #69 / run `35141844675`: GREEN, including synthetic-boundary, deployment-origin, Real-AI transport isolation, build/assets, 60-second journey and judge UX.
- PR #141 full GARANG Release Gate #1476 / run `35141844625`: FULL GREEN, including commercial core, Firebase health/rules, Today, Planner, Nutrition, complete Golden Path, authenticated Coach, existing Real LLM integration, recovery, mobile regression, button health and runtime stress.
- PR #141 merged as Wanted release SHA `23990db387c9e1f6570dc971a8da34d56946bc85`.
- Post-merge Wanted Gate #71 / run `35142457444`: GREEN on the exact release SHA.
- Wanted Real AI Coach Activation run `35142457402`: GREEN.
- Activation redeployed production Firebase `functions:api` while preserving the existing `GARANG_LLM_API_KEY` secret.
- Canonical `/coach` production preflight after deployment: unauthenticated POST `401`, wrong-method GET `405`, provider not invoked, user data not read.
- Wanted production live smoke returned `source:"llm"`, request ID `fb37b74b-c376-4e74-8854-8e4f64ec2898`, decision mode `recover`.

## Wanted public deployment
Evidence class: GREEN for source/CI/backend/live provider/public root; YELLOW only for final human UI click-through.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Latest Vercel production deployment: `dpl_Hicw8pdoT3Jo5zogrNe78nzWx7S8`, READY, stable alias retained.
- Vercel shell pins its `<base>` to exact Wanted release SHA `23990db387c9e1f6570dc971a8da34d56946bc85` via jsDelivr.
- Fresh rendered fetch of `?v=23990db3` returns `GARANG — Quietly Becoming`.
- Exact-SHA `garang-services-config.js` and `garang-wanted-real-llm-v1.js` are publicly reachable.
- Public browser automation could not run because the connected TinyFish account rejected custom-step runs before execution; this is tooling limitation, not app failure.

## Product / AI state
- Commercial Golden Path remains: Onboarding → Today → Record → Coach → Plan → Confirmation → Execution → Record → Progress/Accumulation.
- Deterministic GARANG State/Decision Intelligence remains judgment owner; LLM remains bounded explanation/language/multimodal context.
- Wanted public judge mode uses the same deterministic GARANG judgment/grounding with sanitized synthetic context; only the text explanation is generated by the Real LLM.
- Wanted public photo interpretation remains disabled; authenticated Production Coach owns photo analysis.
- Intelligence Learning Contract v1 remains `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.

## Stable
- Commercial product baseline remains frozen and GREEN.
- Wanted release `23990db3…` is isolated and regression-verified.
- Today `+ → Planner`, Coach guide/composer usability and 60-second judge journey remain GREEN.
- Wanted production server path now has VERIFIED `source=llm` evidence.
- Stable public Vercel alias is anonymously reachable and pinned to the exact release SHA.

## Broken / blockers
- No VERIFIED P0/P1 source, CI, Firebase deployment, LLM-provider or public-root blocker remains.
- Final confidence item: Founder opens the stable public URL, enters `60초 심사 체험`, asks Coach one text question, and confirms the visible answer succeeds. This is human UI confirmation; backend Real LLM is already VERIFIED.
- Firebase deploy reported build-image cleanup warning; this is non-blocking cost hygiene already tracked as debt.

## Durable release-channel decision
Commercial GARANG PRODUCT main is canonical. Wanted/competition work is a separate derivative from a VERIFIED stable snapshot. Competition-only demo/copy/presentation/deployment/backend-route changes do not automatically flow back to commercial GARANG.

## Next priorities
1. P1 Founder smoke: stable Wanted URL → `60초 심사 체험` → Coach → ask `오늘 회복 상태를 알려줘` and confirm visible response.
2. P1 finalize Wanted submission form/checklist using the stable root URL (no cache-buster query in the submitted URL).
3. Freeze competition runtime after submission except critical outage/bug handling consistent with competition rules.
4. After submission, resume P4 User Performance Model v1 using attributable `State × Recommendation × Action × Outcome` evidence.
