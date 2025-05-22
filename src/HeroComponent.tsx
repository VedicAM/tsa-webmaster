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
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs" c="white">
          {category}
        </Text>
      </div>

      <Title
        order={2} // bigger than h3
        className={classes.title}
        style={{ fontSize: '2.5rem', color: 'white', marginTop: 'auto' }} // bigger and white, pushed down
      >
        {title}
      </Title>
    </Paper>
  );
}


const data = [
  {
    image:
      'hero1.jpg',
    title: 'Crafted Flavors, Unforgettable Moments',
    category: 'MEALS',
  },
  {
    image:
      'hero2.jpg',
    title: 'Where Taste Meets Tradition',
    category: 'MEALS',
  },
  {
    image:
      'hero3.jpg',
    title: 'Savor the Experience',
    category: 'MEALS',
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
    <section id="home">
    <div style={{
      marginTop: '40px',
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',}} className={classes.root}>
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
    </section>
  );
}