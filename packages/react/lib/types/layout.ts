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
  "stretch",
  "baseline",
  "normal",
] as const;
export type FlexJustify = (typeof FLEX_JUSTIFIES)[number];

export const FLEX_WRAPS = ["nowrap", "wrap", "wrap-reverse"] as const;
export type FlexWrap = (typeof FLEX_WRAPS)[number];

export const GRID_COLS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "none",
] as const;
export type GridCols = (typeof GRID_COLS)[number];

export const GRID_ROWS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "none",
] as const;
export type GridRows = (typeof GRID_ROWS)[number];

export const GAPS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
] as const;
export type Gap = (typeof GAPS)[number];
