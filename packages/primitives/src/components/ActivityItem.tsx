import { Flex, Box, Text } from "@/main";
import { Badge } from "@src/components";

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

export { ActivityItem };
