import React from "react";

import type {
  FontFamily,
  FontWeight,
  TextLeading,
  TypographyVariant,
  TextAlign,
  FontSize,
  TypographyElement,
  TextTracking,
} from "@/types";
import { cn } from "@/utils";

interface TextBaseProps {
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
  as?: TypographyElement;
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
      leading, // No default: Tailwind applies a default from text size classes
      tracking = "normal",
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
          // Font sizes
          {
            "text-xs": size === "xs",
            "text-sm": size === "sm",
            "text-base": size === "base" || size === "md",
            "text-lg": size === "lg",
            "text-xl": size === "xl",
            "text-2xl": size === "2xl",
            "text-3xl": size === "3xl",
            "text-4xl": size === "4xl",
            "text-5xl": size === "5xl",
            "text-6xl": size === "6xl",
            "text-7xl": size === "7xl",
            "text-8xl": size === "8xl",
            "text-9xl": size === "9xl",
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
          // Text colors (variants)
          {
            "text-foreground": variant === "default",
            "text-inherit": variant === "inherit",
            "text-muted-foreground": variant === "muted",
            "text-accent-foreground": variant === "accent",
            "text-primary-foreground": variant === "primary",
            "text-secondary-foreground": variant === "secondary",
            "text-info-foreground": variant === "info",
            "text-warning-foreground": variant === "warning",
            "text-destructive-foreground": variant === "destructive",
            "text-success-foreground": variant === "success",
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
