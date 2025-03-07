import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/components/Box";
import { Flex } from "@/components/Flex";
import { Grid } from "@/components/Grid";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

// Create a meta object for the combined demo
const meta: Meta = {
  title: "Examples/Primitives Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

// Button component built with primitives
const Button = ({
  variant = "default",
  size = "md",
  children,
}: {
  variant?: "default" | "outline" | "ghost" | "primary" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) => {
  const variantClasses = {
    default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-6 text-base",
  };

  return (
    <Box
      as="button"
      className={`focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} `}
    >
      {children}
    </Box>
  );
};

// Card component built with primitives
const Card = ({
  title,
  description,
  footer,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <Box className="bg-card text-card-foreground rounded-lg border shadow">
      <Box className="space-y-1.5 p-6">
        {title}
        {description}
      </Box>
      {footer && <Box className="p-6 pt-0">{footer}</Box>}
    </Box>
  );
};

// Badge component built with primitives
const Badge = ({
  variant = "default",
  children,
}: {
  variant?: "default" | "secondary" | "outline" | "destructive";
  children: React.ReactNode;
}) => {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background",
    destructive: "bg-destructive text-destructive-foreground",
  };

  return (
    <Box
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} `}
    >
      {children}
    </Box>
  );
};

// Example dashboard layout using all primitive components
export const DashboardExample: Story = {
  render: () => (
    <Flex direction="col" className="bg-background min-h-screen">
      {/* Header */}
      <Box as="header" className="border-b">
        <Flex
          direction="row"
          align="center"
          justify="between"
          className="container mx-auto h-14 px-4"
        >
          <Flex direction="row" align="center" gap="6">
            <Heading level="1" size="lg">
              Primitives UI
            </Heading>
            <Flex as="nav" direction="row" gap="6">
              <Text weight="medium">Dashboard</Text>
              <Text variant="muted">Analytics</Text>
              <Text variant="muted">Settings</Text>
            </Flex>
          </Flex>

          <Flex direction="row" align="center" gap="4">
            <Button variant="ghost" size="sm">
              <Box className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </Box>
              Notifications
            </Button>
            <Box className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <Text size="sm" weight="medium">
                JD
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Main content */}
      <Box className="container mx-auto flex-1 px-4 py-6">
        <Flex direction="col" gap="8">
          {/* Page header */}
          <Flex direction="row" align="center" justify="between">
            <Box>
              <Heading level="1" size="3xl">
                Dashboard
              </Heading>
              <Text variant="muted" className="mt-1">
                Overview of your account and recent activity.
              </Text>
            </Box>
            <Flex direction="row" gap="3">
              <Button variant="outline">Export</Button>
              <Button variant="primary">New Project</Button>
            </Flex>
          </Flex>

          {/* Stats overview */}
          <Grid cols="4" gap="6" className="md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
              { title: "Subscriptions", value: "2,350", change: "+10.5%" },
              { title: "Active Users", value: "12,543", change: "+35.2%" },
              { title: "Avg. Session", value: "3m 45s", change: "-5.1%" },
            ].map((stat, i) => (
              <Card
                key={i}
                title={
                  <Text size="sm" variant="muted">
                    {stat.title}
                  </Text>
                }
                description={
                  <Flex direction="row" align="baseline" gap="2">
                    <Heading level="3" size="2xl">
                      {stat.value}
                    </Heading>
                    <Text
                      size="sm"
                      variant={
                        stat.change.startsWith("+") ? "success" : "destructive"
                      }
                    >
                      {stat.change}
                    </Text>
                  </Flex>
                }
              />
            ))}
          </Grid>

          {/* Recent activity */}
          <Box>
            <Flex
              direction="row"
              align="center"
              justify="between"
              className="mb-4"
            >
              <Heading level="2" size="xl">
                Recent Activity
              </Heading>
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </Flex>

            <Box className="rounded-md border">
              {[
                {
                  title: "Project Alpha launched",
                  time: "2 hours ago",
                  badge: "New",
                },
                {
                  title: "Team meeting",
                  time: "Yesterday",
                  badge: "Completed",
                },
                {
                  title: "New comment on post",
                  time: "2 days ago",
                  badge: null,
                },
                {
                  title: "Subscription renewed",
                  time: "5 days ago",
                  badge: "Payment",
                },
              ].map((activity, i) => (
                <Flex
                  key={i}
                  direction="row"
                  align="center"
                  justify="between"
                  className={`p-4 ${i !== 3 ? "border-b" : ""}`}
                >
                  <Flex direction="row" align="center" gap="3">
                    <Box className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                      <Text size="sm">A{i + 1}</Text>
                    </Box>
                    <Box>
                      <Text weight="medium">{activity.title}</Text>
                      <Text size="sm" variant="muted">
                        {activity.time}
                      </Text>
                    </Box>
                  </Flex>

                  {activity.badge && (
                    <Badge
                      variant={
                        activity.badge === "New"
                          ? "default"
                          : activity.badge === "Completed"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {activity.badge}
                    </Badge>
                  )}
                </Flex>
              ))}
            </Box>
          </Box>

          {/* Two-column layout example */}
          <Grid cols="2" gap="6" className="md:grid-cols-1 lg:grid-cols-2">
            <Card
              title={
                <Heading level="3" size="lg">
                  Team Members
                </Heading>
              }
              description={
                <Text variant="muted" size="sm" className="mt-1">
                  Manage your team members and their account permissions.
                </Text>
              }
              footer={
                <Button variant="outline" size="sm">
                  Invite Members
                </Button>
              }
            />

            <Card
              title={
                <Heading level="3" size="lg">
                  Recent Documents
                </Heading>
              }
              description={
                <Text variant="muted" size="sm" className="mt-1">
                  Documents that you have recently opened or edited.
                </Text>
              }
              footer={
                <Button variant="outline" size="sm">
                  View All
                </Button>
              }
            />
          </Grid>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" className="mt-auto border-t">
        <Flex
          direction="row"
          align="center"
          justify="between"
          className="container mx-auto h-14 px-4"
        >
          <Text size="sm" variant="muted">
            © 2025 Primitives UI. All rights reserved.
          </Text>
          <Flex direction="row" gap="4">
            <Text size="sm" variant="muted">
              Privacy
            </Text>
            <Text size="sm" variant="muted">
              Terms
            </Text>
            <Text size="sm" variant="muted">
              Contact
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  ),
};
