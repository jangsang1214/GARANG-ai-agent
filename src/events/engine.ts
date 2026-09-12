import type { FounderEventEnvelope } from "./contracts.js";
import { validateFounderEvent } from "./contracts.js";
import { routeFounderEvent, type EventDirective } from "./router.js";

export type EventProcessingResult =
  | { accepted: false; errors: string[] }
  | { accepted: true; directive: EventDirective };

export function processFounderEvent(event: FounderEventEnvelope): EventProcessingResult {
  const errors = validateFounderEvent(event);
  if (errors.length > 0) return { accepted: false, errors };
  return { accepted: true, directive: routeFounderEvent(event) };
}
