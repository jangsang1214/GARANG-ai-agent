# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. Wanted public deployment is YELLOW until the candidate Vercel alias is externally verified in a fresh browser.

## Commercial PRODUCT main
Decision: GREEN / FROZEN FOR SUBMISSION WINDOW.
- Current canonical main: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release Gate #1449 / run `35110020514`: FULL GREEN.
- GitHub Pages #799 / run `35110017165`: SUCCESS.
- Public commercial URL: `https://jangsang1214.github.io/-fitmind-ai/`.
- Production Coach Live Smoke `35101459492`: authenticated text + photo LLM SUCCESS.

## Wanted derivative
Decision: GREEN / RELEASE SNAPSHOT VERIFIED.
- Source commercial snapshot: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Release branch: `wanted/2026-release`.
- Release SHA: `561d900b82b2ff5aa85769457e4f39c1b4c14767`.
- PR #133 merged into the Wanted release branch only; commercial main is unchanged.

### Verification
- PR #133 full GARANG Release Gate #1454 / run `35122058195`: FULL GREEN.
- Post-merge Wanted derivative gate #13 / run `35122761724`: GREEN.
- Derivative WebKit verifies `60초 심사 체험 → Today 판단 → Coach 설명 → Progress` on a mobile viewport.
- Wanted gate explicitly verifies the 14-day synthetic judging dataset, build output and derivative assets.
- Full commercial regression includes Golden Path complete journey, authenticated Coach, Real LLM integration fixture, recovery, mobile, Settings, button health and runtime stress.

### Competition-only behavior
- A restrained `60초 심사 체험` entry is injected only by the Wanted derivative layer.
- Synthetic judging records are local-only and contain no real-user data.
- The judge dataset is relative to the current date and contains 14 daily check-ins, 42 meals, workout/running/body history and a fatigue-driven plan adjustment scenario.
- The derivative does not claim sample Coach output is a live GPT request.
- Real production GPT/photo Coach stays behind the normal authenticated path.
- No Firebase production config or provider secret is changed by the derivative.
- `WANTED_SUBMISSION.md` contains the architecture/judging narrative; `WANTED_FORM_COPY.md` contains paste-ready final form copy with a public-URL placeholder.

## Vercel public deployment
Decision: YELLOW / DEPLOYMENT CREATED, RUNTIME UNVERIFIED.
- Connected Vercel account accepted a production deployment request for project name `garang-wanted-2026`.
- Deployment id: `dpl_26o2uL2sWEQQNFuZaDLXoieUiB8t`.
- Candidate alias: `https://garang-wanted-2026-jangsang1214.vercel.app`.
- Deployment bootstrap is pinned to exact Wanted release SHA `561d900b82b2ff5aa85769457e4f39c1b4c14767` and does not follow commercial `main`.
- Follow-up connector reads returned project/deployment not found, while the local execution environment cannot resolve external DNS. Public runtime is therefore UNKNOWN, not PASS.
- Submission URL must remain unset until the candidate alias is externally verified and the 60-second path passes on that URL.

## Coach photo composer
Decision: GREEN / RELEASED IN COMMERCIAL SOURCE.
- Photo attachment is a compact `+` inside the Coach composer.
- One JPG/PNG/WebP image up to 8 MB; preview/remove; one-request ephemeral consumption.
- Raw image is not persisted to GARANG state/localStorage/Firestore/telemetry/conversation text history by this path.

## Intelligence ownership
Decision: GREEN / unchanged.
- Deterministic GARANG State/Decision Intelligence owns judgment.
- LLM remains explanation/language/multimodal-context layer.
- Intelligence Learning Contract: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains read-only/advisory.

## Deployment status
- Commercial deployment: GREEN.
- Wanted repository release snapshot: GREEN.
- Wanted separate public deployment creation: OBSERVED.
- Wanted separate public runtime: UNKNOWN / YELLOW.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only copy/demo/presentation/deployment changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
