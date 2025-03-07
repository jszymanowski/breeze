import { Box } from "@/main";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
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
