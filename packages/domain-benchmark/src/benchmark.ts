import { Atom, createAtom } from "@zilfi/core";

type NodeItem = {
  id: string;
  name: string;
  on: boolean;
};

export class Benchmark {
  #nodes: Map<string, Atom<NodeItem>>;
  #nodeIds: Atom<string[]>;

  constructor() {
    this.#nodes = new Map();
    this.#nodeIds = createAtom([] as string[]);
  }

  getNodeIds() {
    return this.#nodeIds;
  }

  getNode(id: string) {
    const node = this.#nodes.get(id);
    if (!node) {
      this.#nodes.set(
        id,
        createAtom({ id, name: "Unknown", on: false } as NodeItem),
      );
    }
    return this.#nodes.get(id)!;
  }

  #running = false;

  async runBenchmark(nodeCount: number) {
    if (this.#running) {
      return;
    }
    this.#running = true;

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < nodeCount; i++) {
      requestAnimationFrame(() => {
        const node = createAtom({
          id: `node-${i}`,
          name: `Node ${i}`,
          on: false,
        } as NodeItem);
        this.#nodes.set(node.value.id, node);
        this.#nodeIds.set((prev) => [...prev, node.value.id]);
        // await delay(10);
      });
    }

    // Benchmark phase: Update atoms and measure performance
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < nodeCount; i++) {
        requestAnimationFrame(() => {
          const startTime = performance.now();
          const id = `node-${i}`;
          const node = this.#nodes.get(id);
          if (node) {
            node.set((prev) => ({ ...prev, on: !prev.on }));
          }

          const endTime = performance.now();
          console.log(`Iteration ${i}: ${endTime - startTime}ms`);
        });
        await delay(50);
      }
    }
  }
}
