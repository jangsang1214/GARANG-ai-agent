export interface MemoryEntry {
  key: string;
  value: string;
  createdAt: string;
}

export class AgentMemory {
  private readonly entries = new Map<string, MemoryEntry>();

  set(key: string, value: string): void {
    this.entries.set(key, {
      key,
      value,
      createdAt: new Date().toISOString()
    });
  }

  get(key: string): MemoryEntry | undefined {
    return this.entries.get(key);
  }

  all(): MemoryEntry[] {
    return [...this.entries.values()];
  }
}