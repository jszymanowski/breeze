import {
  ContainerElement,
  FlexDirection,
  FlexAlign,
  FlexJustify,
  FlexWrap,
  Gap,
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
