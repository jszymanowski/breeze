import React from "react";

import { FlexDirection, Gap, FlexAlign, FlexJustify, FlexWrap } from "@/types";
import { cn } from "@/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      as: Component = "div",
      direction,
      align,
      justify,
      wrap,
      gap,
      gapX,
      gapY,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        className={cn(
          "flex",
          {
            "flex-row": direction === "row",
            "flex-row-reverse": direction === "row-reverse",
            "flex-col": direction === "col",
            "flex-col-reverse": direction === "column-reverse",
          },
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "items-stretch": align === "stretch",
            "items-baseline": align === "baseline",
          },
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
            "justify-around": justify === "around",
            "justify-evenly": justify === "evenly",
          },
          {
            "flex-wrap": wrap === "wrap",
            "flex-wrap-reverse": wrap === "wrap-reverse",
            "flex-nowrap": wrap === "nowrap",
          },
          {
            "gap-0": gap === "0",
            "gap-1": gap === "1",
            "gap-2": gap === "2",
            "gap-3": gap === "3",
            "gap-4": gap === "4",
            "gap-5": gap === "5",
            "gap-6": gap === "6",
            "gap-8": gap === "8",
            "gap-10": gap === "10",
            "gap-12": gap === "12",
            "gap-16": gap === "16",
          },
          {
            "gap-x-0": gapX === "0",
            "gap-x-1": gapX === "1",
            "gap-x-2": gapX === "2",
            "gap-x-3": gapX === "3",
            "gap-x-4": gapX === "4",
            "gap-x-5": gapX === "5",
            "gap-x-6": gapX === "6",
            "gap-x-8": gapX === "8",
            "gap-x-10": gapX === "10",
            "gap-x-12": gapX === "12",
            "gap-x-16": gapX === "16",
          },
          {
            "gap-y-0": gapY === "0",
            "gap-y-1": gapY === "1",
            "gap-y-2": gapY === "2",
            "gap-y-3": gapY === "3",
            "gap-y-4": gapY === "4",
            "gap-y-5": gapY === "5",
            "gap-y-6": gapY === "6",
            "gap-y-8": gapY === "8",
            "gap-y-10": gapY === "10",
            "gap-y-12": gapY === "12",
            "gap-y-16": gapY === "16",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

export { Flex };
