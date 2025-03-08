import { Box } from "@/main";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: Props) => {
  return (
    <Box
      className={`bg-card text-card-foreground rounded-md border shadow-sm ${
        className || ""
      }`}
    >
      {children}
    </Box>
  );
};

export { Card };
