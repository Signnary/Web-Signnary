import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  px,
  Text,
  Button,
  rem,
} from '@mantine/core';
import { DropzoneButton } from '../DropzoneButton/DropzoneButton'; // Import DropzoneButton component

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" justify="center">
        {getChild(BASE_HEIGHT)}
        <DropzoneButton />
      </SimpleGrid>
    </Container>
  );
}
