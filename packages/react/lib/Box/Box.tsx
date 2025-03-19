import React from "react";

import type { BoxSizing, Height, Size, Width } from "@/types";
import { cn } from "@/utils";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: Size;
  width?: Width;
  height?: Height;
  sizing?: BoxSizing;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    { className, as: Component = "div", size, width, height, sizing, ...props },
    ref,
  ) => {
    return (
      <Component
        className={cn(
          // Box sizing
          {
            "box-border": sizing === "border",
            "box-content": sizing === "content",
          },
          // Size
          {
            "size-auto": size === "auto",
            "size-full": size === "full",
            "size-min": size === "min",
            "size-max": size === "max",
            "size-fit": size === "fit",
            "size-px": size === "px",
          },
          // Width
          {
            "w-3xs": width === "3xs",
            "w-2xs": width === "2xs",
            "w-xs": width === "xs",
            "w-sm": width === "sm",
            "w-md": width === "md",
            "w-lg": width === "lg",
            "w-xl": width === "xl",
            "w-2xl": width === "2xl",
            "w-3xl": width === "3xl",
            "w-4xl": width === "4xl",
            "w-5xl": width === "5xl",
            "w-6xl": width === "6xl",
            "w-7xl": width === "7xl",
            "w-auto": width === "auto",
            "w-full": width === "full",
            "w-screen": width === "screen",
            "w-min": width === "min",
            "w-max": width === "max",
            "w-fit": width === "fit",
            "w-px": width === "px",
          },
          // Height
          {
            "h-auto": height === "auto",
            "h-full": height === "full",
            "h-screen": height === "screen",
            "h-min": height === "min",
            "h-max": height === "max",
            "h-fit": height === "fit",
            "h-px": height === "px",
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
