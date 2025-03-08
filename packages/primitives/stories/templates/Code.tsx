import { Text, TextProps } from "@/main";

export default function Code({ children }: TextProps) {
  return (
    <Text
      size="sm"
      family="mono"
      align="right"
      variant="accent"
      className="bg-accent h-min w-min rounded px-2"
    >
      {children}
    </Text>
  );
}
