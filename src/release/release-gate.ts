export type CheckStatus = "pass" | "fail" | "unknown";
export type ReleaseDecision = "GREEN" | "YELLOW" | "RED";

export interface ReleaseCheck {
  name: string;
  required: boolean;
  status: CheckStatus;
  evidence: string;
}

export interface ReleaseGateResult {
  decision: ReleaseDecision;
  releaseAllowed: boolean;
  blockers: ReleaseCheck[];
  uncertainties: ReleaseCheck[];
}

export function evaluateReleaseGate(checks: ReleaseCheck[]): ReleaseGateResult {
  const blockers = checks.filter((check) => check.required && check.status === "fail");
  const uncertainties = checks.filter(
    (check) => (check.required && check.status === "unknown") || (!check.required && check.status === "fail")
  );

  const decision: ReleaseDecision = blockers.length > 0
    ? "RED"
    : uncertainties.length > 0
      ? "YELLOW"
      : "GREEN";

  return {
    decision,
    releaseAllowed: decision === "GREEN",
    blockers,
    uncertainties
  };
}
