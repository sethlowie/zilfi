import { z } from "zod";
import { Atom, createAtom, deriveAtom } from "./atom";

export type FormValue<T> = {
  atom: Atom<T>;
  error: Atom<string>;
  shouldValidate: Atom<boolean>;
  dirty: Atom<boolean>;
};

export const createFormValue = <T>(
  initialValue: T,
  schema?: z.ZodType<T>,
): FormValue<T> => {
  const atom = createAtom(initialValue);
  const shouldValidate = createAtom(false);
  const dirty = createAtom(false);
  const error = deriveAtom(
    atom,
    shouldValidate,
    dirty,
    (value, validate, dirty) => {
      if (!validate || !dirty) {
        return "";
      }
      if (!schema) {
        return "";
      }
      const results = schema.safeParse(value);
      if (results.success) {
        return "";
      }
      return results.error.issues[0].message;
    },
  );
  return {
    atom,
    error,
    shouldValidate,
    dirty,
  };
};

export const createForm = <T extends Record<string, FormValue<any>>>(
  initialValue: T,
) => {
  return initialValue;
};
