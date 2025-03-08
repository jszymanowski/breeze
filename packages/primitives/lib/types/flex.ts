export const FLEX_DIRECTION_OPTIONS = [
  "row",
  "col",
  "row-reverse",
  "col-reverse",
] as const;
export type FlexDirection = (typeof FLEX_DIRECTION_OPTIONS)[number];

export const FLEX_ALIGN_OPTIONS = [
  "start",
  "center",
  "end",
  "stretch",
  "baseline",
] as const;
export type FlexAlign = (typeof FLEX_ALIGN_OPTIONS)[number];

export const FLEX_JUSTIFY_OPTIONS = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;
export type FlexJustify = (typeof FLEX_JUSTIFY_OPTIONS)[number];

export const FLEX_WRAP_OPTIONS = ["nowrap", "wrap", "wrap-reverse"] as const;
export type FlexWrap = (typeof FLEX_WRAP_OPTIONS)[number];

export const GAP_OPTIONS = [
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
] as const;
export type Gap = (typeof GAP_OPTIONS)[number];
