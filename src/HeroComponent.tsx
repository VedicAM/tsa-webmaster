// TODO Update images and text!!

import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './HeroComponent.module.css';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';


interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ 
        backgroundImage: `url(${image})`,
        minHeight: '400px', // Increased height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
];

export function HeroComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const [opacity, setOpacity] = useState(1);

  return (
    <div style={{
      marginTop: '40px',
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',}}>
      <Carousel
        slideSize={{ base: '100%', sm: '100%' }}
        slideGap={3}
        withIndicators
        withControls={false}
        plugins={[Autoplay({ delay: 3000 })]}
        styles={{
          indicator: {
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: theme.colors.gray[4],
          }
        }}
      >
        {slides}
      </Carousel>
    </div>
  );
}