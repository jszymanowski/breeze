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
            "size-0": size === "0",
            "size-1": size === "1",
            "size-2": size === "2",
            "size-3": size === "3",
            "size-4": size === "4",
            "size-5": size === "5",
            "size-6": size === "6",
            "size-7": size === "7",
            "size-8": size === "8",
            "size-9": size === "9",
            "size-10": size === "10",
            "size-11": size === "11",
            "size-12": size === "12",
            "size-16": size === "16",
            "size-20": size === "20",
            "size-24": size === "24",
            "size-28": size === "28",
            "size-32": size === "32",
            "size-36": size === "36",
            "size-40": size === "40",
            "size-44": size === "44",
            "size-48": size === "48",
            "size-52": size === "52",
            "size-56": size === "56",
            "size-60": size === "60",
            "size-64": size === "64",
            "size-72": size === "72",
            "size-84": size === "84",
            "size-96": size === "96",
            "size-auto": size === "auto",
            "size-full": size === "full",
            "size-min": size === "min",
            "size-max": size === "max",
            "size-fit": size === "fit",
            "size-px": size === "px",
          },
          // Width
          {
            "w-0": width === "0",
            "w-1": width === "1",
            "w-2": width === "2",
            "w-3": width === "3",
            "w-4": width === "4",
            "w-5": width === "5",
            "w-6": width === "6",
            "w-7": width === "7",
            "w-8": width === "8",
            "w-9": width === "9",
            "w-10": width === "10",
            "w-11": width === "11",
            "w-12": width === "12",
            "w-16": width === "16",
            "w-20": width === "20",
            "w-24": width === "24",
            "w-28": width === "28",
            "w-32": width === "32",
            "w-36": width === "36",
            "w-40": width === "40",
            "w-44": width === "44",
            "w-48": width === "48",
            "w-52": width === "52",
            "w-56": width === "56",
            "w-60": width === "60",
            "w-64": width === "64",
            "w-72": width === "72",
            "w-84": width === "84",
            "w-96": width === "96",
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
            "h-0": height === "0",
            "h-1": height === "1",
            "h-2": height === "2",
            "h-3": height === "3",
            "h-4": height === "4",
            "h-5": height === "5",
            "h-6": height === "6",
            "h-7": height === "7",
            "h-8": height === "8",
            "h-9": height === "9",
            "h-10": height === "10",
            "h-11": height === "11",
            "h-12": height === "12",
            "h-16": height === "16",
            "h-20": height === "20",
            "h-24": height === "24",
            "h-28": height === "28",
            "h-32": height === "32",
            "h-36": height === "36",
            "h-40": height === "40",
            "h-44": height === "44",
            "h-48": height === "48",
            "h-52": height === "52",
            "h-56": height === "56",
            "h-60": height === "60",
            "h-64": height === "64",
            "h-72": height === "72",
            "h-84": height === "84",
            "h-96": height === "96",
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
