import { FormValue } from "@zilfi/core";
import { useReadValue } from "@zilfi/react";

type TextFieldProps = {
  type: string;
  placeholder?: string;
  value: FormValue<string>;
  label?: string;
};

const Input = (props: TextFieldProps) => {
  const value = useReadValue(props.value.atom);
  const dirty = useReadValue(props.value.dirty);
  return (
    <input
      type={props.type}
      value={value}
      onChange={(e) => {
        props.value.dirty.set(true);
        props.value.atom.set(e.target.value);
      }}
      onBlur={() => {
        if (dirty) {
          props.value.shouldValidate.set(true);
        }
      }}
    />
  );
};

const Error = (props: TextFieldProps) => {
  const error = useReadValue(props.value.error);
  return props.value.error.value ? (
    <div className="label">
      <span className="label-text-alt">{error}</span>
    </div>
  ) : null;
};

export const TextField = (props: TextFieldProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      {props.label ? (
        <div className="label">
          <span className="label-text">{props.label}</span>
        </div>
      ) : null}
      <Input {...props} />
      <Error {...props} />
    </label>
  );
};
