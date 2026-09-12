import { readFile } from "node:fs/promises";

export type RepositoryRole = "control" | "product" | "service" | "research";
export type MutationPolicy = "read-only" | "branch-pr" | "direct-with-gate";

export interface RepositoryRegistration {
  id: string;
  role: RepositoryRole;
  fullName: string;
  defaultBranch: string;
  sourceOfTruthFor: string[];
  mutationPolicy: MutationPolicy;
}

export interface RepositoryRegistry {
  version: 1;
  repositories: RepositoryRegistration[];
}

export function validateRepositoryRegistry(registry: RepositoryRegistry): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  if (registry.version !== 1) errors.push("registry version must be 1");
  if (registry.repositories.length === 0) errors.push("registry must contain repositories");

  for (const repository of registry.repositories) {
    if (!repository.id.trim()) errors.push("repository id is required");
    if (ids.has(repository.id)) errors.push(`duplicate repository id: ${repository.id}`);
    ids.add(repository.id);

    if (!/^[^/]+\/[^/]+$/.test(repository.fullName)) {
      errors.push(`invalid repository fullName: ${repository.fullName}`);
    }
    if (!repository.defaultBranch.trim()) {
      errors.push(`default branch is required for ${repository.id}`);
    }
    if (repository.sourceOfTruthFor.length === 0) {
      errors.push(`sourceOfTruthFor is required for ${repository.id}`);
    }
  }

  return errors;
}

export function parseRepositoryRegistry(content: string): RepositoryRegistry {
  const registry = JSON.parse(content) as RepositoryRegistry;
  const errors = validateRepositoryRegistry(registry);
  if (errors.length > 0) {
    throw new Error(`Invalid repository registry: ${errors.join("; ")}`);
  }
  return registry;
}

export async function loadRepositoryRegistry(path: string): Promise<RepositoryRegistry> {
  return parseRepositoryRegistry(await readFile(path, "utf8"));
}

export function repositoryForDomain(
  registry: RepositoryRegistry,
  domain: string
): RepositoryRegistration | undefined {
  return registry.repositories.find((repository) =>
    repository.sourceOfTruthFor.includes(domain)
  );
}
