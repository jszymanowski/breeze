import { Box } from "@/main";

const Button = ({
  className = "",
  variant = "default",
  size = "md",
  children,
}: {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "primary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) => {
  const variantClasses = {
    default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-6 text-base",
  };

  return (
    <Box
      as="button"
      className={`focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className} `}
    >
      {children}
    </Box>
  );
};

export { Button };
