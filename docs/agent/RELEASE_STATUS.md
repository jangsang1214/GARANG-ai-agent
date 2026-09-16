# GARANG Release Status

Last updated: 2026-09-17

## Overall decision
GREEN for the canonical commercial GARANG web baseline and GREEN for the repository-level Wanted derivative release snapshot. The Wanted derivative still needs its own public deployment URL before the external submission is operationally complete.

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
- Release SHA: `6f7a6e97792971a550a2bf79e49c0ac07c071aa4`.
- PR #132 merged into the Wanted release branch only; commercial main is unchanged.

### Verification
- PR #132 full GARANG Release Gate #1451 / run `35116671610`: FULL GREEN.
- PR #132 Wanted derivative gate #4 / run `35116671535`: GREEN.
- Post-merge Wanted derivative gate #5 / run `35117403297`: GREEN.
- Derivative WebKit verifies `60초 심사 체험 → Today 판단 → Coach 설명 → Progress` on a mobile viewport.
- Full commercial regression includes Golden Path complete journey, authenticated Coach, Real LLM integration fixture, recovery, mobile, Settings, button health and runtime stress.

### Competition-only behavior
- A restrained `60초 심사 체험` entry is injected only by the Wanted derivative layer.
- Synthetic sample records are local-only and contain no real-user data.
- Judge mode is explicitly labeled sample data.
- The derivative does not claim sample Coach output is a live GPT request.
- Real production GPT/photo Coach stays behind the normal authenticated path.
- No Firebase production config or provider secret is changed by the derivative.
- `WANTED_SUBMISSION.md` contains the problem statement, AI architecture, tool disclosure and judging sequence.

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
- Wanted separate public deployment: PENDING. A separate target is required so competition-specific behavior does not replace the commercial Pages site.

## Release-channel boundary
Commercial GARANG PRODUCT main is canonical. Wanted/competition submission is a separate derivative from the verified stable snapshot. Competition-only copy/demo/presentation changes do not redefine or automatically modify commercial GARANG.

## Remaining non-blocking debt
- Functions dependency family breaking upgrade remains dedicated follow-up work.
- CONTROL CI Actions v4 modernization remains planned.
- Main branch protection is not server-enforced.
- Production deployment credential should migrate to short-lived OIDC/WIF after verified replacement.
- Firebase build-image retention/cost cleanup remains a reviewed maintenance task.
