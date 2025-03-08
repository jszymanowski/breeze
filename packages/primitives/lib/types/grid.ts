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
