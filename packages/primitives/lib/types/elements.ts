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
