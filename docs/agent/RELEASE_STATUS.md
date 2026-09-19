# GARANG Release Status

Last updated: 2026-09-20

## Overall decision
- Commercial GARANG web baseline: GREEN / CANONICAL.
- Wanted source/CI, Firebase backend, browser transport, live LLM provider path and public judge runtime: GREEN.
- Competition submissions: RECORDED COMPLETE BY FOUNDER REPORT for Wanted / 롯데 / 브로제이.
- Submission receipts/forms were not independently re-opened here; submission completion is RECORDED rather than tool-VERIFIED.
- Competition-specific deployed surfaces are change-frozen except for critical outage/bug handling or organizer-required changes.

## Commercial PRODUCT main
Decision: YELLOW ONLY FOR POST-MERGE GATE COMPLETION; EXACT-HEAD AND DEPLOYED CLIENT ARE GREEN.
- Canonical main: `6260bcb2051f458c0a77dcbb83d95986c3fabad4`.
- PR #156 User Performance context exact-head Gate #1500 / `35454549905`: FULL GREEN; merged.
- Production Coach Live Smoke #2 / `35455269231`: authenticated text + photo `source=llm` SUCCESS with OpenAI `gpt-5.6-luna`; alignment/grounding contracts verified as applicable.
- PR #158 Coach gateway error-classification exact-head Gate #1503 / `35455176855`: FULL GREEN; merged.
- Pages #811 / `35455497330`: SUCCESS; deployed client directly observed with the new classifier.
- Post-merge main Gate #1505 / `35455497834`: IN PROGRESS at this observation.

## Wanted derivative
Decision: GREEN / RELEASE SNAPSHOT VERIFIED.
- Release branch: `wanted/2026-release`.
- Release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- PR #154 `Fix Wanted browser Real AI transport`: MERGED into Wanted release only.
- Wanted Gate #97 / `35183623414`: GREEN.
- Full GARANG Release Gate #1494 / `35183623380`: FULL GREEN.

## Real AI Coach boundary
Decision: GREEN / LIVE PROVIDER RE-VERIFIED 2026-09-20.
- Canonical `/coach` remains Firebase-authenticated.
- No-login judge mode uses isolated `/wanted/coach` only for the sanitized `garang-wanted-judge-data-v1` synthetic contract.
- Images remain rejected on the public judge route; authenticated Production Coach retains photo analysis.
- Exact stable Vercel origin, quotas and judging-period expiry remain enforced.
- PR #154 drops inherited custom headers and sends only `Content-Type` for public judge requests.

## Wanted public runtime verification
Decision: GREEN / END-TO-END VERIFIED.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Production deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Shell loads exact Wanted release `3acd2ae654ce0d387b64174c96a6243d89cb9b74` while retaining the stable Vercel origin.
- Live browser smoke entered `60초 심사 체험`, opened Coach, sent exactly `나 준나 강해지고싶어`, and received a context-aware response without local fallback.

## Competition submission status
Evidence class: RECORDED from Founder report on 2026-09-17.
- Wanted: SUBMITTED.
- 롯데: SUBMITTED.
- 브로제이: SUBMITTED.
- Competition submission execution is operationally closed.

## Deployment status
- Commercial deployment: GREEN.
- Wanted source/CI: GREEN.
- Wanted production Firebase/CORS boundary: GREEN.
- Wanted public judge entry + 14-day interaction: GREEN.
- Wanted visible public Real AI Coach response: GREEN.
- Competition submission phase: RECORDED COMPLETE.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Competition derivatives are separate release channels and do not redefine commercial GARANG.

## Next release focus
User Performance Model v1 should be developed against canonical commercial GARANG, preserving existing Golden Path behavior and current VERIFIED capabilities.

## Remaining non-blocking debt
- Firebase build-image retention/cost cleanup.
- Functions dependency breaking upgrade.
- CONTROL tooling modernization.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.


## 2026-09-20 Coach incident reconciliation
- Reported UI symptom: "external AI connection failure".
- Current live provider status: VERIFIED GREEN by authenticated text/photo smoke.
- VERIFIED client defect: the prior UI collapsed rate-limit, auth, provider, timeout and network failures into the same connection-failure sentence.
- Fix: PR #158 preserves canonical server error codes, Retry-After and differentiates the user-facing fallback while maintaining local deterministic GARANG analysis.
- Exact error code for the earlier individual request: UNKNOWN because request-specific evidence was not observed.
