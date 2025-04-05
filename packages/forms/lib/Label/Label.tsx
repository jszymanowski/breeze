import type { ComponentProps } from "react";
import { Label as CnLabel } from "@/components/ui/label";

import { cn } from "@/utils";

export interface LabelProps extends ComponentProps<"label"> {
  value?: string;
  children?: React.ReactNode;
  className?: string;
}

const Label = ({ value, children, className = "", ...props }: LabelProps) => (
  <CnLabel
    className={cn("font-display font-normal text-base text-foreground", className)}
    {...props}
  >
    {value || children}
  </CnLabel>
);

export { Label };
