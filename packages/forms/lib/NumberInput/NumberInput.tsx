import { TextInput, TextInputProps } from "@/TextInput";

export interface NumberInputProps extends Omit<TextInputProps, "type"> {
  step?: string;
}

export const NumberInput = ({
  name,
  label,
  placeholder,
  note,
  step = ".01",
  className,
  ...props
}: NumberInputProps) => {
  return (
    <TextInput
      name={name}
      type="number"
      step={step}
      label={label}
      placeholder={placeholder}
      note={note}
      className={className}
      {...props}
    />
  );
};
