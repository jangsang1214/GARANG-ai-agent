import type { RiskLevel } from "../types.js";

export interface PermissionPolicy {
  allowLowRisk: boolean;
  allowMediumRisk: boolean;
  allowHighRisk: boolean;
}

export const DEFAULT_PERMISSION_POLICY: PermissionPolicy = {
  allowLowRisk: true,
  allowMediumRisk: true,
  allowHighRisk: false
};

export function isAllowed(
  risk: RiskLevel,
  policy: PermissionPolicy = DEFAULT_PERMISSION_POLICY
): boolean {
  switch (risk) {
    case "low":
      return policy.allowLowRisk;
    case "medium":
      return policy.allowMediumRisk;
    case "high":
      return policy.allowHighRisk;
  }
}