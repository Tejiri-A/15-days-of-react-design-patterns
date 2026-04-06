import { type ChangeEvent, type Ref } from "react";

type Props = {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  ref?: Ref<HTMLTextAreaElement>;
  onBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextArea({
  label,
  name,
  onChange,
  value,
  errorMessage,
  ref,
  onBlur,
}: Props) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        className="textarea textarea-bordered h-24 w-full"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        ref={ref}
        onBlur={onBlur}
      ></textarea>
      <p className="text-warning">{errorMessage}</p>
    </div>
  );
}

export default TextArea;
