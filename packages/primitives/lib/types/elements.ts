export const CONTAINER_OPTIONS = [
  "div",
  "span",
  "section",
  "main",
  "header",
  "footer",
  "aside",
  "nav",
  "article",
] as const;
export type ContainerElement = (typeof CONTAINER_OPTIONS)[number];

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
