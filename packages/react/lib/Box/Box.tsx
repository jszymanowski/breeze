import React from "react";

import type { BoxSizing } from "@/types";
import { cn } from "@/utils";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  sizing?: BoxSizing;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, as: Component = "div", sizing, ...props }, ref) => {
    return (
      <Component
        className={cn(
          // Box sizing
          {
            "box-border": sizing === "border",
            "box-content": sizing === "content",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Box.displayName = "Box";

export { Box };
