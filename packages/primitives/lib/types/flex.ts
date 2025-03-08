export const FLEX_DIRECTIONS = [
  "row",
  "col",
  "row-reverse",
  "col-reverse",
] as const;
export type FlexDirection = (typeof FLEX_DIRECTIONS)[number];

export const FLEX_ALIGNS = [
  "start",
  "center",
  "end",
  "stretch",
  "baseline",
] as const;
export type FlexAlign = (typeof FLEX_ALIGNS)[number];

export const FLEX_JUSTIFIES = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;
export type FlexJustify = (typeof FLEX_JUSTIFIES)[number];

export const FLEX_WRAPS = ["nowrap", "wrap", "wrap-reverse"] as const;
export type FlexWrap = (typeof FLEX_WRAPS)[number];
