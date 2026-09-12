# GARANG AI Agent

GARANG AI Agent is the operating layer for running GARANG development as a persistent, safety-gated project system.

## V0.2 — Founder OS foundation

This repository now has two complementary layers:

1. **ChatGPT Project + GitHub operating layer** — works without a separate OpenAI API key. GitHub is the technical source of truth and `docs/agent/` is the persistent project-state layer across chat sessions.
2. **Deterministic TypeScript core** — planner, repository scanning, permission gates, filesystem/terminal tools, verification, recovery, and project-state loading. The model/provider layer remains separate so the core can be tested without an LLM.

## Start a project session

In the GARANG ChatGPT Project, use the instructions in `docs/agent/CHATGPT_PROJECT_INSTRUCTIONS.md` and begin a fresh session with:

```text
PROJECT START
```

The operating agent should read `AGENTS.md`, inspect the repository, then load the state files under `docs/agent/` before choosing work.

## Repository layout

```text
src/
  agent/        planning, verification, recovery, orchestration
  context/      repository and persistent project-state context
  security/     permission gates
  tools/        safe filesystem and terminal tools
tests/          deterministic tests
docs/agent/     long-lived project state and operating instructions
AGENTS.md       repository-wide agent rules
```

## Development

```bash
npm install
npm run check
npm test
npm run build
npm run verify
```

`npm run verify` is the local release gate for the TypeScript core. High-risk operations remain blocked by default.

## Current limitation

The TypeScript `CodingAgent` currently plans and verifies but does not yet synthesize and execute arbitrary implementation steps by itself. In the API-key-free workflow, ChatGPT + the GitHub connector performs repository actions while this repository provides rules, state, safety, and deterministic primitives. See `docs/agent/TECHNICAL_DEBT.md` for the next engineering steps.
