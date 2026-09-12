# GARANG AI Agent

GARANG AI Agent is the persistent, safety-gated control plane for operating GARANG development across replaceable ChatGPT work sessions and multiple GitHub repositories.

## V0.7-lite — Event-ready Founder OS

v7-lite keeps the v5.1 evidence/capability foundation and adds deterministic structures for:

- multi-repository source-of-truth routing;
- Goal → Metric → Initiative → Task/Change → Verification → Release → Result project graphs;
- workstream orchestration;
- versioned GitHub event envelopes;
- repository-state reconciliation;
- deterministic GREEN / YELLOW / RED release evaluation;
- event artifacts that a future always-on runtime can consume without changing the contract.

It remains API-key-free in normal ChatGPT Project + GitHub use. It is **event-ready, not an always-on autonomous server**.

## Repositories

`docs/agent/REPOSITORIES.json` is the registry.

- `control` → `jangsang1214/GARANG-ai-agent`: orchestration, policies, state, decisions, graph, event contracts.
- `product` → `jangsang1214/-fitmind-ai`: application code, product tests/CI, UX, release evidence.

## PROJECT START

Use `docs/agent/CHATGPT_PROJECT_INSTRUCTIONS.md` as the Project Instructions and start a project chat with:

```text
PROJECT START
```

The recovery protocol loads repository identity and the Project Graph before reconciling both GitHub repositories with persistent state.

## Architecture

```text
Founder / ChatGPT Command Center
            |
      GARANG Control Plane
            |
  +---------+----------+
  |                    |
Control repo       Product repo
  |                    |
Policy/State       App/CI/Release
  +---------+----------+
            |
 Repository Registry
            |
       Project Graph
            |
       Orchestrator
            |
     Event Contracts
            |
      Reconciler
            |
      Release Gate
```

See `docs/agent/ARCHITECTURE_V7_LITE.md` and `docs/agent/EVENT_MODEL.md`.

## Development

```bash
npm install
npm run check
npm test
npm run build
npm run verify
```

`npm run verify` is the deterministic control-plane release gate.

## Event adapter

`.github/workflows/founder-os-events.yml` normalizes PR, main, CI and release changes into a `founder-os-event.json` workflow artifact using `scripts/emit-event.mjs`. The artifact is evidence/a future-runtime contract; it does not independently wake ChatGPT or authorize code changes.

## Safety

Execution remains capability-gated. Events cannot grant permission. High-risk production, destructive data, secrets, billing, forced history, and major architecture actions remain denied by default unless the Founder grants a narrow explicit override.
