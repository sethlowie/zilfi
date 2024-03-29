export class Atom<T> {
  #value: T;

  constructor(initialValue: T) {
    this.#value = initialValue;
  }

  get value() {
    return this.#value;
  }

  #subscriptions = new Set<(value: T) => void>();

  get subscriberCount() {
    return this.#subscriptions.size;
  }

  subscribe(subscription: (value: T) => void) {
    this.#subscriptions.add(subscription);
    subscription(this.#value);
    return () => this.unsubscribe(subscription);
  }

  unsubscribe(subscription: (value: T) => void) {
    this.#subscriptions.delete(subscription);
  }

  set(value: T | ((value: T) => T)) {
    let newValue: T;
    if (typeof value === "function") {
      newValue = (value as (value: T) => T)(this.#value);
    } else {
      newValue = value;
    }
    this.#value = newValue;
    this.#subscriptions.forEach((subscription) => subscription(newValue));
  }

  #onStaleCallbacks = new Set<() => void>();
  onStale(callback: () => void) {
    this.#onStaleCallbacks.add(callback);
    return () => this.#onStaleCallbacks.delete(callback);
  }
}

export const createAtom = <T>(initialValue: T) => {
  return new Atom(initialValue);
};

// A function that accepts a variable number of Atom<T> arguments followed by a selector function
export const deriveAtom = <T extends any[], U>(
  ...args: [
    ...atoms: { [K in keyof T]: Atom<T[K]> },
    selector: (...values: T) => U,
  ]
): Atom<U> => {
  const atoms = args.slice(0, -1) as Atom<any>[];
  const selector = args[args.length - 1] as (...values: any[]) => U;

  // Use the selector to compute the initial value for the derived atom
  const initialDerivedValue = selector(...atoms.map((atom) => atom.value));

  // Create the derived atom with the initial value
  const derived = createAtom(initialDerivedValue);

  // Subscribe to each atom and update the derived atom's value whenever any atom changes
  atoms.forEach((atom) => {
    atom.subscribe(() => {
      const currentValues = atoms.map((a) => a.value);
      derived.set(selector(...currentValues));
    });
  });

  return derived;
};
