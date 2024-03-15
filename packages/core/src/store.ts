export class Store<T> {
  #value: T;
  constructor(initialValue: T) {
    this.#value = initialValue;
  }

  get value() {
    return this.#value;
  }

  #subscriptions = new Set<(value: T) => void>();

  subscribe(subscription: (value: T) => void) {
    this.#subscriptions.add(subscription);
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
}

export const createStore = <T>(initialValue: T) => {
  return new Store(initialValue);
};

export type FormValue<T> = {
  atom: Store<T>;
  error: Store<string>;
};

export const createFormValue = <T>(initialValue: T): FormValue<T> => {
  const atom = createStore(initialValue);
  const error = createStore("");
  return {
    atom,
    error,
  };
};

export const createForm = <T extends Record<string, any>>(initialValue: T) => {
  const form: { [K in keyof T]: FormValue<T[K]> } = {} as any;
  for (const key in initialValue) {
    // TODO: is this redundant?
    if (initialValue.hasOwnProperty(key)) {
      form[key] = createFormValue(initialValue[key]);
    }
  }
  return form;
};
