export const WORKSTREAMS = [
  "command-center",
  "product",
  "engineering",
  "ai-data",
  "design-brand",
  "growth-business",
  "release-qa"
] as const;

export type Workstream = (typeof WORKSTREAMS)[number];

export function isWorkstream(value: string): value is Workstream {
  return (WORKSTREAMS as readonly string[]).includes(value);
}
