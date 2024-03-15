import { useEffect, useState } from "react";
import { Atom } from "@zilfi/core";

export const useReadValue = <T>(atom: Atom<T>) => {
  const [value, setValue] = useState(atom.value);
  useEffect(() => {
    const unsub = atom.subscribe((value) => {
      setValue(value);
    });
    return () => {
      unsub();
    };
  }, []);

  return value;
};

export const useDerivedValue = <T, U>(
  store: Atom<T>,
  selector: (value: T) => U,
) => {
  const [value, setValue] = useState(selector(store.value));
  useEffect(() => {
    const subscription = (newValue: T) => {
      const n = selector(newValue);
      // TODO: potential reference equality check issue here
      // maybe we just need to live with potential rerenders
      //
      // Maybe do equality check here for primitive types and
      // provide an optional "shouldUpdate" function for
      // non-primitive types
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
