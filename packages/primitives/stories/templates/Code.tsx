import { Text, TextProps } from "@/main";

export default function Code({ children }: TextProps) {
  return (
    <Text
      size="sm"
      family="mono"
      align="right"
      variant="accent"
      className="h-min w-min rounded bg-gray-200 px-2"
    >
      {children}
    </Text>
  );
}
