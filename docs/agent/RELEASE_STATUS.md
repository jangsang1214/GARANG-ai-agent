# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
- Commercial GARANG web baseline: GREEN / FROZEN FOR SUBMISSION WINDOW.
- Wanted source/CI, Firebase backend, browser transport, live LLM provider path and public judge runtime: GREEN.
- Wanted final competition submission: YELLOW / pending Founder final action.

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
- PR #150/#152 established and activated the Wanted-only browser CORS boundary.
- PR #154 fixes the remaining browser transport mismatch by dropping inherited custom headers and sending only `Content-Type` for public judge requests.
- Regression explicitly verifies caller headers such as `X-Garang-Client` / `X-Trace-Id` cannot leak into the public Wanted request and no Authorization header is attached.

## Public runtime verification
Decision: GREEN / END-TO-END VERIFIED.
- Stable alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Production deployment: `dpl_DXa432LkkUdPcC2fD61ZcHHX3wDx` / READY.
- Shell loads exact Wanted release `3acd2ae654ce0d387b64174c96a6243d89cb9b74` while retaining the stable Vercel origin.
- TinyFish live browser smoke on the stable alias entered `60초 심사 체험`, opened Coach, sent exactly `나 준나 강해지고싶어`, and received a context-aware response without the local fallback text.
- Visible response used judging context including recent squat/RDL work, readiness 43, fatigue 55 and a recovery-first recommendation (~30 min, ~50% intensity, ~55% volume).
- Therefore the previously observed `외부 AI 연결에 실패해 로컬 데이터 분석으로 전환했습니다` fallback is no longer reproduced on the current deployed release.

## Deployment status
- Commercial deployment: GREEN.
- Wanted source/CI: GREEN.
- Wanted production Firebase/CORS boundary: GREEN.
- Wanted public judge entry + 14-day interaction: GREEN.
- Wanted visible public Real AI Coach response: GREEN.
- Wanted final submission: YELLOW / pending Founder action.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative. Competition-only demo/deployment/backend-route changes do not redefine commercial GARANG.

## Remaining non-blocking debt
- Firebase build-image retention/cost cleanup.
- Functions dependency breaking upgrade.
- CONTROL tooling modernization.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
