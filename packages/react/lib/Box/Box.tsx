import React from "react";

import type {
  BoxSizing,
  Height,
  Overflow,
  Position,
  Size,
  Width,
} from "@/types";
import { cn } from "@/utils";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: Size;
  width?: Width;
  height?: Height;
  sizing?: BoxSizing;
  position?: Position;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      as: Component = "div",
      size,
      width,
      height,
      sizing,
      position,
      overflow,
      overflowX,
      overflowY,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        className={cn(
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
          // Box sizing
          {
            "box-border": sizing === "border",
            "box-content": sizing === "content",
          },
          // Position
          {
            static: position === "static",
            fixed: position === "fixed",
            absolute: position === "absolute",
            relative: position === "relative",
            sticky: position === "sticky",
          },
          // Overflow
          {
            "overflow-auto": overflow === "auto",
            "overflow-hidden": overflow === "hidden",
            "overflow-clip": overflow === "clip",
            "overflow-visible": overflow === "visible",
            "overflow-scroll": overflow === "scroll",
          },
          // Overflow X
          {
            "overflow-x-auto": overflowX === "auto",
            "overflow-x-hidden": overflowX === "hidden",
            "overflow-x-clip": overflowX === "clip",
            "overflow-x-visible": overflowX === "visible",
            "overflow-x-scroll": overflowX === "scroll",
          },
          // Overflow Y
          {
            "overflow-y-auto": overflowY === "auto",
            "overflow-y-hidden": overflowY === "hidden",
            "overflow-y-clip": overflowY === "clip",
            "overflow-y-visible": overflowY === "visible",
            "overflow-y-scroll": overflowY === "scroll",
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
