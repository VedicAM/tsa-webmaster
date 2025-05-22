import React, { useState } from 'react';
import { Group, Badge, Box, Text, Container, SimpleGrid, Card, Image, NumberInput, Button } from '@mantine/core';

type MenuItemProps = {
  name?: string;
  price?: string;
  image?: string;
  description?: string;
  key?: number;
};

export function MenuItems({ name, price, image, description, key }: MenuItemProps) {
  const [hovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <Container my="md" fluid>
      <Card
        key={key}
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        style={{ position: 'relative', overflow: 'visible' }} // Important for absolute child
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ minHeight: 160 }}>
          <Image src={image} height={160} fit="cover" radius="md" alt={name} />

          <Box
            p="md"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontFamily: 'Josefin Sans, sans-serif',
              fontWeight: 650,
              color: '#1a2f33',
            }}
          >
            <Group mb="xs">
              <Text size="sm" fw={700} c='#1a2f33'>
                {name}
              </Text>
              <Badge color="#f39c12">{price}</Badge>
            </Group>
            <Text size="sm" c="dimmed">{description}</Text>
          </Box>
        </SimpleGrid>

        {/* Hover overlay - absolutely positioned */}
        <Box
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '10px 20px',
            boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
            zIndex: 10,
            borderTop: '1px solid #ddd',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <NumberInput
            min={1}
            value={quantity}
            onChange={(val) => setQuantity(typeof val === 'number' ? val : 1)}
            size="xs"
            style={{ width: 80 }}
            hideControls={false}
          />
          <Button size="xs" color="#f39c12" onClick={() => alert(`Added ${quantity} of ${name}`)}>
            Add to Cart
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
