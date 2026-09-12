# GARANG Founder OS v7-lite — Event-ready Agent OS

## Purpose
v7-lite turns the v5.1 rule set into a deterministic control plane that can represent multiple repositories, project causality, workstream routing, GitHub events, state drift, and release evidence. It intentionally stops before always-on autonomous execution.

## Layers
1. **Repository Registry** — declares which repository owns which truth domain.
2. **Project Graph** — links Goal → Metric → Initiative → Feature/Task → Change/PR → Verification → Release → Result.
3. **Orchestrator** — converts a structured or inferred intent into the smallest standard workstream route.
4. **Capability Policy** — v5.1 central authorization remains the execution boundary.
5. **Event Contracts** — GitHub events are normalized into versioned envelopes.
6. **State Reconciler** — observed repository state is compared with recorded state; drift becomes explicit evidence.
7. **Release Gate** — required checks produce deterministic GREEN/YELLOW/RED and never treat UNKNOWN as PASS.

## Registered repositories
- `control`: `jangsang1214/GARANG-ai-agent` — policies, project state, decisions, project graph, orchestration and event contracts.
- `product`: `jangsang1214/-fitmind-ai` — application code, product tests/CI, release state and user experience.

The registry is `docs/agent/REPOSITORIES.json`. Current SHAs do not belong in the registry; they are observations and persistent state, so they can change without redefining repository identity.

## Event-ready, not always-on
`Founder OS Event Envelope` converts supported GitHub events into `founder-os-event.json` artifacts. Today those artifacts are evidence/contracts for ChatGPT + GitHub sessions and a future runtime. They do **not** wake ChatGPT or autonomously edit code.

A future external runtime may consume the exact same envelope, call a provider/orchestrator, request typed capabilities, execute approved tools, and write outcomes back to the Project Graph without changing the contract.

## Safety invariant
Events can request attention; they cannot grant authority. Capability policy and Founder approval remain authoritative for destructive, production, secret, billing, force-update, and architecture-rewrite actions.
