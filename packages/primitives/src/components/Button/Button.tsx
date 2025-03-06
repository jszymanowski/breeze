import "./Button.css";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button-primary" : "button-secondary";

  return (
    <button
      type="button"
      className={["button", `button-${size}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
