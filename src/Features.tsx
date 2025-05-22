import { Text, Box, Container, SimpleGrid, Center } from '@mantine/core';
import { IconApple, IconBowl, IconChefHat } from '@tabler/icons-react';

import classes from './Features.module.css';

export function Features() {
  return (
    <Container my="xl" fluid px="md" className={classes.wrapper}>
      <Text size="sm" ta="center" mb="xs" fw={500} c="dimmed">
        FEATURES
      </Text>
      <Text size="xl" ta="center" mb="xl" fw={700} style={{fontSize: 50,}} c='#1a2f33'>
        Why eat from us?
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="xl"
        verticalSpacing="lg"
        style={{ textAlign: 'center' }}
      >
        <Box>
          <Center>
            <IconBowl size={60} />
          </Center>
          <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>Menu for every taste</Text>
          <Text size="sm" mt="sm" c='#1a2f33'>A diverse vegetarian menu crafted to delight every palate.</Text>
        </Box>

        <Box>
          <Center>
            <IconChefHat size={60} />
          </Center>
          <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>Experienced chefs</Text>
          <Text size="sm" mt="sm" c='#1a2f33'>Authentic Indian flavors, expertly prepared by seasoned vegetarian chefs.</Text>
        </Box>

        <Box>
          <Center>
            <IconApple size={60} />
          </Center>
          <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>Healthy choices</Text>
          <Text size="sm" mt="sm" c='#1a2f33'>Wholesome, plant-based meals crafted from fresh Indian ingredients for a vibrant, healthy lifestyle.</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
