import { Box, Text, Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import classes from './AboutUsBlock.module.css';

// TODO Add maxwidth!!

const PRIMARY_COL_HEIGHT = '300px';

export function AboutUsBlock() {
  return (
    <Container my="md" fluid>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        
        <Box
          h={PRIMARY_COL_HEIGHT}
          p="md"
          w="100%"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 650,
            color: '#1a2f33',
            marginBottom: '20px',
          }}
        >
            <Text size="sm" mb="xs" fw={500} c="dimmed">ABOUT US</Text>
            <Text size="sm" mt="sm">
                Nestled in the heart of Wilmington, Delaware, our vegetarian restaurant was founded with a deep passion for offering the community a vibrant and authentic plant-based dining experience. Inspired by the rich culinary traditions of India, our chefs craft each dish with care, using only the freshest, locally sourced ingredients and an artful blend of aromatic spices. From savory curries to sizzling street food-style appetizers, our diverse menu caters to seasoned vegetarians, newcomers to plant-based dining, and anyone seeking a flavorful culinary adventure. Every bite tells a story of tradition, and we take great pride in ensuring that our meals are not only delicious but nourishing for the body and soul.
            </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}