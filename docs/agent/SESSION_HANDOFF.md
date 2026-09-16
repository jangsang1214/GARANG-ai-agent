# GARANG Session Handoff & Recovery Protocol v7-lite

## PROJECT START order
1 `AGENTS.md`
2 `docs/agent/REPOSITORIES.json`
3 `PROJECT_STATE.md`
4 `PROJECT_GRAPH.json`
5 `SESSION_HANDOFF.md`
6 `TASKS.md`
7 `DECISIONS.md`
8 `TECHNICAL_DEBT.md`
9 `RELEASE_STATUS.md`
10 inspect CONTROL + PRODUCT branches/commits/open PRs/CI
11 reconcile evidence with state/graph
12 select top 1–3 priorities and route authorized work.

## Current handoff — 2026-09-17
- Commercial PRODUCT main remains canonical and frozen: `b863a7634bd64b03a6e6f3772950c43cc81afb6f`.
- Commercial main Release Gate #1449 / run `35110020514`: FULL GREEN.
- Commercial Pages #799 / run `35110017165`: SUCCESS.
- Production Coach Live Smoke `35101459492`: authenticated text + photo `source=llm` SUCCESS.
- Wanted source base: exact commercial SHA `b863a763…`.
- Wanted submission development branch: `wanted/2026-submission`.
- Wanted release branch: `wanted/2026-release`.
- PRODUCT PR #132 merged Wanted derivative as `6f7a6e97792971a550a2bf79e49c0ac07c071aa4`.
- PR #132 exact-head full Release Gate #1451 / `35116671610`: FULL GREEN.
- PR #132 exact-head Wanted judge-mode gate #4 / `35116671535`: GREEN.
- Wanted post-merge judge-mode gate #5 / `35117403297`: GREEN.

## Wanted judging experience
- Auth surface adds a competition-only `60초 심사 체험` action.
- Entry seeds only synthetic local state; it does not use Firebase user data or real-user samples.
- Judge guide routes Today → Coach → Progress to expose the core causal loop before secondary features.
- Sample mode is explicitly labeled `JUDGING MODE · SAMPLE DATA`.
- Sample Coach explanation is not represented as a live GPT call; normal signup/login remains available for the real production GPT/photo Coach path.
- Derivative metadata is pinned to the verified commercial source SHA.
- Submission narrative and judge sequence live in `WANTED_SUBMISSION.md`.

## Coach photo UX / production AI
- Photo upload is the compact composer `+` control with preview/remove.
- One JPG/PNG/WebP image up to 8 MB; attachment is consumed by the next request then cleared.
- Raw photo data is not persisted to GARANG state/localStorage/Firestore/telemetry/conversation text history by the released path.
- Production authenticated text/photo Coach remains independently VERIFIED through disposable Firebase identity smoke.

## AI/Data released state
- Deterministic GARANG State/Decision Intelligence remains judgment owner.
- LLM remains bounded explanation/language layer.
- Intelligence Learning Contract v1: `decisionId → recommendationId → actionId → planId → executionId → outcomeId`.
- Outcome Learning remains advisory-only: no silent mutation and no automatic progression increase.

## Release-channel decision
Commercial GARANG PRODUCT main is the source product. Wanted/competition work is an isolated derivative. Competition-specific judge copy/demo/presentation changes do not automatically flow back to commercial GARANG.

## Current priority
1. Deploy `wanted/2026-release @ 6f7a6e97…` to a separate public URL.
2. Run fresh-browser mobile smoke on that deployed URL and keep it public through the judging period.
3. Complete Wanted participation/submission fields from `WANTED_SUBMISSION.md` and separately disclose current commercial service status if applicable.
4. After submission, resume User Performance Model v1 / recommendation-outcome personalization.

## Non-blocking debt
- Functions dependency audit has moderate advisory findings requiring a dedicated breaking-upgrade PR.
- CONTROL CI still uses checkout/setup-node v4; modernization is planned separately.
- CONTROL/PRODUCT main are not server-protected.
- Production deploy auth should migrate to OIDC/WIF after replacement verification.
- Firebase build-image retention cleanup remains reviewed cost hygiene.

## Handoff rule
Never turn old handoff text into VERIFIED evidence without observing the source. DONE requires implementation + acceptance + verification + regression consideration + material state synchronization. Merge/deployment/live-provider evidence remain separate states.
