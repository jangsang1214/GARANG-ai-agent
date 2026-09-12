import type { Workstream } from "./workstreams.js";

export type IntentKind =
  | "product"
  | "ui"
  | "engineering"
  | "ai-data"
  | "growth"
  | "release"
  | "cross-functional";

export interface OrchestrationInput {
  request: string;
  targetRepositoryId: string;
  intent?: IntentKind;
}

export interface OrchestrationWorkflow {
  intent: IntentKind;
  targetRepositoryId: string;
  stages: Workstream[];
  rationale: string;
}

const ROUTES: Readonly<Record<IntentKind, Workstream[]>> = {
  product: ["product", "release-qa"],
  ui: ["product", "design-brand", "engineering", "release-qa"],
  engineering: ["engineering", "release-qa"],
  "ai-data": ["product", "ai-data", "engineering", "release-qa"],
  growth: ["growth-business", "product"],
  release: ["release-qa", "engineering", "command-center"],
  "cross-functional": ["command-center", "product", "engineering", "release-qa"]
};

export function inferIntent(request: string): IntentKind {
  const normalized = request.toLowerCase();
  if (/release|deploy|production|ship|ci|release gate/.test(normalized)) return "release";
  if (/coach|ai|memory|rag|recommend|personaliz|model|llm/.test(normalized)) return "ai-data";
  if (/ui|ux|design|visual|mobile|layout|screen|today/.test(normalized)) return "ui";
  if (/growth|marketing|campaign|acquisition|retention|competition|revenue|pricing/.test(normalized)) {
    return "growth";
  }
  if (/bug|code|api|database|refactor|security|performance|build|test/.test(normalized)) {
    return "engineering";
  }
  if (/feature|flow|onboarding|golden path|user problem|product/.test(normalized)) return "product";
  return "cross-functional";
}

export function createWorkflow(input: OrchestrationInput): OrchestrationWorkflow {
  const intent = input.intent ?? inferIntent(input.request);
  return {
    intent,
    targetRepositoryId: input.targetRepositoryId,
    stages: [...ROUTES[intent]],
    rationale: `Route ${intent} work through the smallest standard GARANG workflow.`
  };
}
