import type { VerificationResult } from "../types.js";

export interface RecoveryDecision {
  shouldRetry: boolean;
  reason: string;
}

export function decideRecovery(
  verification: VerificationResult,
  attempt: number,
  maxAttempts: number
): RecoveryDecision {
  if (verification.ok) {
    return { shouldRetry: false, reason: "Verification passed." };
  }

  if (attempt >= maxAttempts) {
    return {
      shouldRetry: false,
      reason: "Maximum recovery attempts reached."
    };
  }

  return {
    shouldRetry: true,
    reason: "Verification failed; another analysis/fix cycle is allowed."
  };
}