export const FONT_FAMILIES = ["display", "serif", "sans", "mono"] as const;
export type FontFamily = (typeof FONT_FAMILIES)[number];

export const FONT_WEIGHTS = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
] as const;
export type FontWeight = (typeof FONT_WEIGHTS)[number];

export const FONT_VARIANTS = [
  "default",
  "muted",
  "accent",
  "highlight",
  "warning",
  "destructive",
  "success",
] as const;
export type TypographyVariant = (typeof FONT_VARIANTS)[number];

export const TEXT_LEADING = [
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose",
];
export type TextLeading = (typeof TEXT_LEADING)[number];

export const TEXT_TRACKING = [
  "tighter",
  "tight",
  "normal",
  "wide",
  "wider",
  "widest",
] as const;
export type TextTracking = (typeof TEXT_TRACKING)[number];

export const HEADING_LEVELS = ["1", "2", "3", "4", "5", "6"] as const;
export type HeadingSize = (typeof HEADING_LEVELS)[number];

export const FONT_SIZES = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
] as const;
export type FontSize = (typeof FONT_SIZES)[number];

export const TEXT_ALIGN = ["left", "center", "right", "justify"] as const;
export type TextAlign = (typeof TEXT_ALIGN)[number];

export const TYPOGRAPHY_ELEMENTS = [
  "p",
  "span",
  "label",
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;
export type TypographyElement = (typeof TYPOGRAPHY_ELEMENTS)[number];
