# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
- Commercial GARANG web baseline: GREEN / CANONICAL.
- Wanted source/CI, Firebase backend, browser transport, live LLM provider path and public judge runtime: GREEN.
- Competition submissions: RECORDED COMPLETE BY FOUNDER REPORT for Wanted / 롯데 / 브로제이.
- Submission receipts/forms were not independently re-opened here; submission completion is RECORDED rather than tool-VERIFIED.
- Competition-specific deployed surfaces are change-frozen except for critical outage/bug handling or organizer-required changes.

## Commercial PRODUCT main
Decision: GREEN / UNCHANGED.
- Canonical main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release Gate #1449 / `35110020514`: FULL GREEN.
- Pages #799 / `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.
- Wanted work did not modify commercial `main`.

## Wanted derivative
Decision: GREEN / RELEASE SNAPSHOT VERIFIED.
- Release branch: `wanted/2026-release`.
- Release SHA: `3acd2ae654ce0d387b64174c96a6243d89cb9b74`.
- PR #154 `Fix Wanted browser Real AI transport`: MERGED into Wanted release only.
- Wanted Gate #97 / `35183623414`: GREEN.
- Full GARANG Release Gate #1494 / `35183623380`: FULL GREEN.

## Real AI Coach boundary
Decision: GREEN.
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
