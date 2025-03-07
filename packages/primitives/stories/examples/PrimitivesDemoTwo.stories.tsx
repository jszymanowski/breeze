import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Flex, Box, Text, Grid } from "@/index";

// Create a meta object for the combined demo
const meta: Meta = {
  title: "Examples/Primitives Demo II",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

// Button component built with primitives
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

// Badge component built with primitives
const Badge = ({
  variant = "default",
  children,
}: {
  variant?: "default" | "secondary" | "outline" | "primary";
  children: React.ReactNode;
}) => {
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

// Card component built with primitives
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

// Activity item component
const ActivityItem = ({
  icon,
  title,
  time,
  badge,
}: {
  icon: string;
  title: string;
  time: string;
  badge?: {
    text: string;
    variant: "default" | "primary" | "outline";
  };
}) => (
  <Flex
    direction="row"
    align="center"
    justify="between"
    className="border-b p-4 last:border-b-0"
  >
    <Flex direction="row" align="center" gap="3">
      <Box className="bg-muted flex h-8 w-8 items-center justify-center rounded-full">
        <Text size="sm">{icon}</Text>
      </Box>
      <Box>
        <Text weight="medium">{title}</Text>
        <Text size="sm" variant="muted">
          {time}
        </Text>
      </Box>
    </Flex>

    {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
  </Flex>
);

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
            <Flex direction="row" align="center" gap="2">
              <Heading level="1" size="lg">
                Primitives UI
              </Heading>
            </Flex>
            <Flex as="nav" direction="row" gap="4">
              <Text weight="medium">Dashboard</Text>
              <Text variant="muted">Analytics</Text>
              <Text variant="muted">Settings</Text>
            </Flex>
          </Flex>

          <Flex direction="row" align="center" gap="4">
            <Flex direction="row" align="center" gap="1">
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
              <Text size="sm">Notifications</Text>
            </Flex>
            <Box className="bg-muted flex h-8 w-8 items-center justify-center rounded-full">
              <Text size="sm" weight="medium">
                JD
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Main content */}
      <Box className="flex-1">
        <Flex direction="row" className="container mx-auto">
          {/* Main content area */}
          <Box className="flex-1 p-6">
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
                <Card className="p-4">
                  <Text size="sm" variant="muted">
                    Total Revenue
                  </Text>
                  <Flex
                    direction="row"
                    align="baseline"
                    gap="2"
                    className="mt-1"
                  >
                    <Heading level="3" size="2xl">
                      $45,231.89
                    </Heading>
                    <Text size="sm" variant="success">
                      +20.1%
                    </Text>
                  </Flex>
                </Card>

                <Card className="p-4">
                  <Text size="sm" variant="muted">
                    Subscriptions
                  </Text>
                  <Flex
                    direction="row"
                    align="baseline"
                    gap="2"
                    className="mt-1"
                  >
                    <Heading level="3" size="2xl">
                      2,350
                    </Heading>
                    <Text size="sm" variant="success">
                      +10.5%
                    </Text>
                  </Flex>
                </Card>

                <Card className="p-4">
                  <Text size="sm" variant="muted">
                    Active Users
                  </Text>
                  <Flex
                    direction="row"
                    align="baseline"
                    gap="2"
                    className="mt-1"
                  >
                    <Heading level="3" size="2xl">
                      12,543
                    </Heading>
                    <Text size="sm" variant="success">
                      +35.2%
                    </Text>
                  </Flex>
                </Card>

                <Card className="p-4">
                  <Text size="sm" variant="muted">
                    Avg. Session
                  </Text>
                  <Flex
                    direction="row"
                    align="baseline"
                    gap="2"
                    className="mt-1"
                  >
                    <Heading level="3" size="2xl">
                      45s
                    </Heading>
                    <Text size="sm" variant="destructive">
                      -5.1%
                    </Text>
                  </Flex>
                </Card>
              </Grid>

              {/* Two-column layout example */}
              <Grid cols="3" gap="6" className="md:grid-cols-1 lg:grid-cols-3">
                <Box className="col-span-2">
                  <Flex direction="col" gap="4">
                    <Flex direction="row" align="center" justify="between">
                      <Heading level="2" size="xl">
                        Recent Activity
                      </Heading>
                      <Text size="sm" variant="accent" weight="medium">
                        View all
                      </Text>
                    </Flex>

                    <Card>
                      <ActivityItem
                        icon="A1"
                        title="Project Alpha launched"
                        time="2 hours ago"
                        badge={{ text: "New", variant: "primary" }}
                      />
                      <ActivityItem
                        icon="A2"
                        title="Team meeting"
                        time="Yesterday"
                        badge={{ text: "Completed", variant: "default" }}
                      />
                      <ActivityItem
                        icon="A3"
                        title="New comment on post"
                        time="2 days ago"
                      />
                      <ActivityItem
                        icon="A4"
                        title="Subscription renewed"
                        time="5 days ago"
                        badge={{ text: "Payment", variant: "outline" }}
                      />
                    </Card>
                  </Flex>
                </Box>

                <Box>
                  <Flex direction="col" gap="4">
                    <Heading level="2" size="xl">
                      Team Members
                    </Heading>

                    <Card className="p-4">
                      <Flex direction="col" gap="4">
                        <Text variant="muted" size="sm">
                          Manage your team members and their account
                          permissions.
                        </Text>

                        <Button variant="outline" size="sm" className="w-full">
                          Invite Members
                        </Button>
                      </Flex>
                    </Card>

                    <Heading level="2" size="xl" className="mt-4">
                      Recent Documents
                    </Heading>

                    <Card className="p-4">
                      <Flex direction="col" gap="4">
                        <Text variant="muted" size="sm">
                          Documents that you have recently opened or edited.
                        </Text>

                        <Button variant="outline" size="sm" className="w-full">
                          View All
                        </Button>
                      </Flex>
                    </Card>
                  </Flex>
                </Box>
              </Grid>
            </Flex>
          </Box>
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
