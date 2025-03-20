import React from "react";

import { cn } from "@/utils";

import type {
  HeadingSize,
  FontSize,
  TypographyVariant,
  FontWeight,
  FontFamily,
  TextAlign,
  TextTracking,
  TextLeading,
} from "@/types";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingSize;
  size?: FontSize;
  weight?: FontWeight;
  variant?: TypographyVariant;
  align?: TextAlign;
  leading?: TextLeading;
  tracking?: TextTracking;
  family?: FontFamily;
  truncate?: boolean;
  numeric?: boolean;
  className?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant = "default",
      level = "2",
      size,
      weight = "bold", // Typical default browser style for headings
      align,
      leading, // No default: Tailwind applies a default from text size classes
      tracking,
      family = "display",
      truncate = false,
      numeric = false,
      ...props
    },
    ref,
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
            "text-base": headingSize === "base" || headingSize === "md",
            "text-lg": headingSize === "lg",
            "text-xl": headingSize === "xl",
            "text-2xl": headingSize === "2xl",
            "text-3xl": headingSize === "3xl",
            "text-4xl": headingSize === "4xl",
            "text-5xl": headingSize === "5xl",
            "text-6xl": headingSize === "6xl",
            "text-7xl": headingSize === "7xl",
            "text-8xl": headingSize === "8xl",
            "text-9xl": headingSize === "9xl",
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
          }, // Text colors (variants)
          {
            "text-foreground": variant === "default",
            "text-inherit": variant === "inherit",
            "text-muted-foreground": variant === "muted",
            "text-accent-foreground": variant === "accent",
            "text-primary-foreground": variant === "primary",
            "text-secondary-foreground": variant === "secondary",
            "text-info-foreground": variant === "info",
            "text-success-foreground": variant === "success",
            "text-warning-foreground": variant === "warning",
            "text-destructive-foreground": variant === "destructive",
          },
          // Text alignment
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
            "text-justify": align === "justify",
            "text-start": align === "start",
            "text-end": align === "end",
          },
          // Leading (line height)
          {
            "leading-none": leading === "none",
            "leading-tight": leading === "tight",
            "leading-snug": leading === "snug",
            "leading-normal": leading === "normal",
            "leading-relaxed": leading === "relaxed",
            "leading-loose": leading === "loose",
          },
          // Tracking (letter spacing)
          {
            "tracking-tighter": tracking === "tighter",
            "tracking-tight": tracking === "tight",
            "tracking-normal": tracking === "normal",
            "tracking-wide": tracking === "wide",
            "tracking-wider": tracking === "wider",
            "tracking-widest": tracking === "widest",
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
          // Add some scroll margin for better anchor navigation
          "scroll-m-20",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

export { Heading };
