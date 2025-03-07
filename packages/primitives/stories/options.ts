import {
  ContainerElement,
  FlexDirection,
  FlexAlign,
  FlexJustify,
  FlexWrap,
  Gap,
  FontFamily,
  FontSize,
  FontWeight,
  TextLeading,
  TextTracking,
  TextAlign,
  TypographyVariant,
  TypographyElement,
} from "@/types";

export const CONTAINER_OPTIONS: ContainerElement[] = [
  "div",
  "span",
  "section",
  "main",
  "header",
  "footer",
  "aside",
  "nav",
  "article",
];

export const FLEX_DIRECTION_OPTIONS: FlexDirection[] = [
  "row",
  "col",
  "row-reverse",
  "column-reverse",
];

export const FLEX_ALIGN_OPTIONS: FlexAlign[] = [
  "start",
  "center",
  "end",
  "stretch",
  "baseline",
];

export const FLEX_JUSTIFY_OPTIONS: FlexJustify[] = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
];

export const FLEX_WRAP_OPTIONS: FlexWrap[] = ["nowrap", "wrap", "wrap-reverse"];

export const GAP_OPTIONS: Gap[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
  "10",
  "12",
  "16",
];

export const FONT_FAMILIES: FontFamily[] = ["display", "serif", "sans", "mono"];

export const FONT_WEIGHTS: FontWeight[] = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
];
export const FONT_SIZES: FontSize[] = [
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
];
export const FONT_VARIANTS: TypographyVariant[] = [
  "default",
  "muted",
  "accent",
  "highlight",
  "warning",
  "destructive",
  "success",
];
export const TEXT_ALIGN: TextAlign[] = ["left", "center", "right", "justify"];
export const TEXT_TRACKING: TextTracking[] = [
  "tighter",
  "tight",
  "normal",
  "wide",
  "wider",
  "widest",
];
export const TEXT_LEADING: TextLeading[] = [
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose",
];

export const TYPOGRAPHY_ELEMENTS: TypographyElement[] = [
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
];
