import { type ChangeEvent, type Ref } from "react";

type Props = {
  label: string;
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: "text" | "email";
  required?: boolean;
  ref?: Ref<HTMLInputElement>;
  onBlur?: (e:ChangeEvent<HTMLInputElement>) => void
};

function Input({
  label,
  name,
  onChange,
  value,
  errorMessage,
  type,
  required = true,
  ref,
  onBlur
}: Props) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="input input-bordered w-full"
        required={required}
        ref={ref}
        onBlur={onBlur}
      />
      <p className="text-warning">{errorMessage}</p>
    </div>
  );
}

export default Input;
