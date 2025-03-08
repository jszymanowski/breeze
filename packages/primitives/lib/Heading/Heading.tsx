import React from "react";

import { cn } from "@/utils";

import {
  HeadingSize,
  FontSize,
  TypographyVariant,
  FontWeight,
  FontFamily,
  TextAlign,
  TextTracking,
} from "@/types";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingSize;
  size?: FontSize;
  weight?: FontWeight;
  variant?: TypographyVariant;
  align?: TextAlign;
  tracking?: TextTracking;
  family?: FontFamily;
  numeric?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = "2",
      size,
      weight,
      variant,
      align,
      tracking = "normal",
      family = "display",
      numeric = false,
      ...props
    },
    ref
  ) => {
    // Map level to component
    const Component = `h${level}` as React.ElementType;

    // Default size based on heading level if not specified
    const defaultSizes: Record<string, string> = {
      "1": "4xl",
      "2": "3xl",
      "3": "2xl",
      "4": "xl",
      "5": "lg",
      "6": "base",
    };

    const headingSize = size || defaultSizes[level];

    return (
      <Component
        className={cn(
          // Size scales
          {
            "text-xs": headingSize === "xs",
            "text-sm": headingSize === "sm",
            "text-base": headingSize === "base",
            "text-lg": headingSize === "lg",
            "text-xl": headingSize === "xl",
            "text-2xl": headingSize === "2xl",
            "text-3xl": headingSize === "3xl",
            "text-4xl": headingSize === "4xl",
            "text-5xl": headingSize === "5xl",
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
            "font-extrabold": weight === "extrabold",
            "font-black": weight === "black",
          },
          // Text colors
          {
            "text-foreground": variant === "default",
            "text-muted-foreground": variant === "muted",
            "text-primary-foreground": variant === "primary",
            "text-secondary-foreground": variant === "secondary",
            "text-accent-foreground": variant === "accent",
            "text-info-foreground": variant === "info",
            "text-destructive-foreground": variant === "destructive",
          },
          // Text alignment
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
            "text-justify": align === "justify",
          },
          // Letter spacing
          {
            "tracking-tighter": tracking === "tighter",
            "tracking-tight": tracking === "tight",
            "tracking-normal": tracking === "normal",
            "tracking-wide": tracking === "wide",
            "tracking-wider": tracking === "wider",
            "tracking-widest": tracking === "widest",
          },
          "scroll-m-20", // Add some scroll margin for better anchor navigation
          // Font family
          {
            "font-display": family === "display",
            "font-sans": family === "sans",
            "font-serif": family === "serif",
            "font-mono": family === "mono",
          },
          // Tabular numerals
          numeric && "tabular-nums",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
