import { Text, Box, Container, SimpleGrid } from '@mantine/core';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import classes from './Numbers.module.css';

function Stat({ end, label }: { end: number; label: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box ref={ref}>
      <Text mt="sm" fw={600} style={{ fontSize: 50 }} c="#1a2f33">
        {inView ? <CountUp end={end} duration={5} /> : '0'}+
      </Text>
      <Text mt="sm" fw={400} style={{ fontSize: 20 }} c="#1a2f33">
        {label}
      </Text>
    </Box>
  );
}

export function Numbers() {
  return (
    <Container my="xl" fluid px="md" className={classes.wrapper}>
      <Text size="sm" ta="center" mb="xs" fw={500} c="dimmed">
        FACTS
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="xl"
        verticalSpacing="lg"
        style={{ textAlign: 'center' }}
      >
        <Stat end={200} label="VISITORS DAILY" />
        <Stat end={150} label="MEALS SERVED" />
        <Stat end={20} label="YEARS OF EXPERIENCE" />
      </SimpleGrid>
    </Container>
  );
}