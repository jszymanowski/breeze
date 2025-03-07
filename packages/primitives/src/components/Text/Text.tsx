import React from "react";

import { FontFamily, FontWeight } from "@/types";
import { cn } from "@/utils";

interface TextBaseProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: FontWeight;
  variant?:
    | "default"
    | "muted"
    | "accent"
    | "destructive"
    | "highlight"
    | "success";
  align?: "left" | "center" | "right" | "justify";
  leading?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  family?: FontFamily;
  truncate?: boolean;
  numeric?: boolean;
  className?: string;
  as?: "p" | "span" | "label" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export type TextProps<E extends React.ElementType = "p"> = TextBaseProps & {
  as?: E;
} & React.ComponentPropsWithRef<E>;

const Text = React.forwardRef(
  <E extends React.ElementType = "p">(
    {
      className,
      as,
      size = "base",
      weight = "normal",
      variant = "default",
      align,
      leading = "normal",
      family = "display",
      truncate = false,
      numeric = false,
      ...props
    }: TextProps<E>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as || "p";

    return (
      <Component
        className={cn(
          // Size scales
          {
            "text-xs": size === "xs",
            "text-sm": size === "sm",
            "text-base": size === "base",
            "text-lg": size === "lg",
            "text-xl": size === "xl",
          },
          // Font weights
          {
            "font-thin": weight === "thin",
            "font-extralight": weight === "extralight",
            "font-light": weight === "light",
            "font-normal": weight === "normal",
            "font-medium": weight === "medium",
            "font-semibold": weight === "semibold",
            "font-bold": weight === "bold",
            "font-black": weight === "black",
          },
          // Text colors
          {
            "text-foreground": variant === "default",
            "text-muted-foreground": variant === "muted",
            "text-primary": variant === "accent",
            "text-destructive": variant === "destructive",
            "text-highlight": variant === "highlight",
            "text-green-600 dark:text-green-500": variant === "success",
          },
          // Text alignment
          align && `text-${align}`,
          // Line height
          {
            "leading-none": leading === "none",
            "leading-tight": leading === "tight",
            "leading-snug": leading === "snug",
            "leading-normal": leading === "normal",
            "leading-relaxed": leading === "relaxed",
            "leading-loose": leading === "loose",
          },
          // Font family
          {
            "font-display": family === "display",
            "font-sans": family === "sans",
            "font-serif": family === "serif",
            "font-mono": family === "mono",
          },
          // Truncation
          truncate && "truncate",
          // Tabular numerals
          numeric && "tabular-nums",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text };
