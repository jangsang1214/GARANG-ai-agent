export type CiState = "green" | "red" | "unknown";

export interface RepositoryStateSnapshot {
  repositoryId: string;
  ref: string;
  sha: string;
  ci: CiState;
}

export interface ReconciliationFinding {
  kind: "missing-observation" | "sha-drift" | "ci-regression" | "untracked-observation";
  severity: "warning" | "blocker";
  repositoryId: string;
  message: string;
  recommendedAction: string;
}

export interface ReconciliationResult {
  status: "GREEN" | "YELLOW" | "RED";
  findings: ReconciliationFinding[];
}

export function reconcileRepositoryStates(
  recorded: RepositoryStateSnapshot[],
  observed: RepositoryStateSnapshot[]
): ReconciliationResult {
  const findings: ReconciliationFinding[] = [];
  const observedById = new Map(observed.map((snapshot) => [snapshot.repositoryId, snapshot]));
  const recordedIds = new Set(recorded.map((snapshot) => snapshot.repositoryId));

  for (const expected of recorded) {
    const actual = observedById.get(expected.repositoryId);
    if (!actual) {
      findings.push({
        kind: "missing-observation",
        severity: "warning",
        repositoryId: expected.repositoryId,
        message: `No current observation for ${expected.repositoryId}.`,
        recommendedAction: "Fetch the registered repository/ref before making implementation claims."
      });
      continue;
    }

    if (actual.sha !== expected.sha || actual.ref !== expected.ref) {
      findings.push({
        kind: "sha-drift",
        severity: "warning",
        repositoryId: expected.repositoryId,
        message: `${expected.repositoryId} moved from ${expected.ref}@${expected.sha} to ${actual.ref}@${actual.sha}.`,
        recommendedAction: "Reconcile PROJECT_STATE, linked tasks, graph nodes, and release evidence."
      });
    }

    if (actual.ci === "red") {
      findings.push({
        kind: "ci-regression",
        severity: "blocker",
        repositoryId: expected.repositoryId,
        message: `${expected.repositoryId} currently has RED CI evidence.`,
        recommendedAction: "Block release claims and route the failure to Engineering + Release/QA."
      });
    }
  }

  for (const actual of observed) {
    if (!recordedIds.has(actual.repositoryId)) {
      findings.push({
        kind: "untracked-observation",
        severity: "warning",
        repositoryId: actual.repositoryId,
        message: `${actual.repositoryId} is observed but not present in recorded state.`,
        recommendedAction: "Decide whether this repository belongs in the registry/state model."
      });
    }
  }

  const status = findings.some((finding) => finding.severity === "blocker")
    ? "RED"
    : findings.length > 0
      ? "YELLOW"
      : "GREEN";

  return { status, findings };
}
