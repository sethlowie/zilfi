import { useEffect, useState } from "react";
import { Store } from "@zilfi/core";

export const useReadValue = <T>(store: Store<T>) => {
  const [value, setValue] = useState(store.value);
  useEffect(() => {
    const subscription = (value: T) => {
      setValue(value);
    };
    const unsub = store.subscribe(subscription);
    return () => {
      unsub();
    };
  });

  return value;
};

export const useDerivedValue = <T, U>(
  store: Store<T>,
  selector: (value: T) => U,
) => {
  const [value, setValue] = useState(selector(store.value));
  useEffect(() => {
    const subscription = (newValue: T) => {
      const n = selector(newValue);
      if (n !== value) {
        setValue(n);
      }
    };
    store.subscribe(subscription);
    return () => {
      store.unsubscribe(subscription);
    };
  });

  return value;
};
