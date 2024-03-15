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
  return (
    <input
      type={props.type}
      value={value}
      onChange={(e) => props.value.atom.set(e.target.value)}
    />
  );
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
      <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div>
    </label>
  );
};
