import { Loader, Save } from "lucide-react";
import { Button, type ButtonProps } from "@/main";
import type { LucideIcon } from "@/types";

interface Props extends ButtonProps {
  submitting: boolean;
  disabled: boolean;
  submittingIcon?: LucideIcon;
}

const SaveButton = ({ submitting, disabled, submittingIcon, ...rest }: Props) => {
  const SubmitIcon = submittingIcon || Loader;
  const icon = submitting ? <SubmitIcon className="animate-spin" /> : <Save />;

  return (
    <Button type="submit" variant="primary" disabled={disabled || submitting} icon={icon} {...rest}>
      {submitting ? "Saving..." : "Save"}
    </Button>
  );
};

export { SaveButton };
