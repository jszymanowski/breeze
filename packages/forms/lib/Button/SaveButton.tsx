import { Loader, Save } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from "@/main";

interface Props extends ButtonProps {
  submitting: boolean;
  disabled: boolean;
  submittingIcon?: React.ComponentType<any>;
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
