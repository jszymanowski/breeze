import { Box } from "@/main";

interface Props {
  variant?: "default" | "secondary" | "outline" | "primary";
  children: React.ReactNode;
}

const Badge = ({ variant = "default", children }: Props) => {
  const variantClasses = {
    default: "bg-secondary text-secondary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <Box
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} `}
    >
      {children}
    </Box>
  );
};

export { Badge };
