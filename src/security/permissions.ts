import type { Capability, RiskLevel } from "../types.js";

export interface PermissionPolicy {
  allowLowRisk: boolean;
  allowMediumRisk: boolean;
  allowHighRisk: boolean;
  capabilityOverrides?: Partial<Record<Capability, boolean>>;
}

export const CAPABILITY_RISK: Readonly<Record<Capability, RiskLevel>> = {
  "repository.read": "low",
  "repository.write": "medium",
  "checks.run": "low",
  "git.mutate": "medium",
  "git.force_update": "high",
  "release.deploy": "high",
  "data.destructive": "high",
  "secrets.access": "high",
  "billing.commit": "high",
  "architecture.rewrite": "high"
};

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

export function riskForCapability(capability: Capability): RiskLevel {
  return CAPABILITY_RISK[capability];
}

export function isCapabilityAllowed(
  capability: Capability,
  policy: PermissionPolicy = DEFAULT_PERMISSION_POLICY
): boolean {
  const override = policy.capabilityOverrides?.[capability];
  if (typeof override === "boolean") return override;
  return isAllowed(riskForCapability(capability), policy);
}
