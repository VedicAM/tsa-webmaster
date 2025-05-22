import { Text, Box, Container, SimpleGrid, Center } from '@mantine/core';
import { Card, Image } from '@mantine/core';
import { Spacer } from './Spacer';

import classes from './Chefs.module.css';
import { Socials } from './Socials';

export function Chefs() {
  return (
    <Container my="xl" fluid px="md" className={classes.wrapper}>
      <Text size="sm" ta="center" mb="xs" fw={500} c="dimmed">
        TEAM
      </Text>
      <Text size="xl" ta="center" mb="xl" fw={700} style={{fontSize: 50,}} c='#1a2f33'>
        They are ready to treat you
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="xl"
        verticalSpacing="lg"
        style={{ textAlign: 'center' }}
      >
        <Box>
          <Card
            shadow="sm"
            padding="xl"
            >
                <Card.Section>
                    <Image src="chefs/arjun.jpeg"/>
                </Card.Section>

                <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>
                    Arjun Mehra
                </Text>
                <Text size="lg" c='#1a2f33'>
                    Master Chef
                </Text>
                <Spacer />
                <Socials />
            </Card>
        </Box>

        <Box>
          <Card
            shadow="sm"
            padding="xl"
            >
                <Card.Section>
                    <Image src="chefs/vikram.jpeg"/>
                </Card.Section>

                <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>
                    Vikram Iyer
                </Text>

                <Text size="lg" c='#1a2f33'>
                    Master Chef
                </Text>
                <Spacer />
                <Socials />
            </Card>
        </Box>

        <Box>
          <Card
            shadow="sm"
            padding="xl"
            >
                <Card.Section>
                    <Image src="chefs/rajeet.jpeg"/>
                </Card.Section>

                <Text mt="sm" fw={600} style={{fontSize: 30,}} c='#1a2f33'>
                    Rohan Bhatia
                </Text>
                <Text size="lg" c='#1a2f33'>
                    Master Chef
                </Text>
                <Spacer />
                <Socials />
            </Card>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
