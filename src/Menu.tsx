import React, { useState } from 'react';
import {
  Button,
  Group,
  Container,
  SimpleGrid,
  Card,
  Image,
  Text,
  Transition,
} from '@mantine/core';
import { meals } from './Meals';
import classes from './Menu.module.css'
import { Spacer } from './Spacer';
import { MenuItems } from './MenuItems';

const categories = ['Biryanis', 'Curries', 'Drinks', 'Snacks'];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Salads');
  const [visible, setVisible] = useState(true);

  const handleCategoryChange = (category: string) => {
    setVisible(false);
    setTimeout(() => {
      setActiveCategory(category);
      setVisible(true);
    }, 200); // match Transition exit duration
  };

  const filteredMeals = meals.filter((meal) => meal.category === activeCategory);

  return (
    <Container className={classes.wrapper}>
      <Text size="sm" ta="center" mb="xs" fw={500} c="dimmed">
        MENU
      </Text>
      <Text size="xl" ta="center" fw={700} style={{fontSize: 50,}} c='#1a2f33'>
        Our Menu
      </Text>
      <Text size="md" ta="center" mb="md" c='#1a2f33'>Authentic indian food at its finest!</Text>

      <Group justify="center" mb="xl">
        {categories.map((category) => (
          <Button
            key={category}
            className={`${classes.categoryButtons} ${activeCategory === category ? classes.activeCategoryButton : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </Group>

      <Spacer />
      <Transition mounted={visible} transition="fade" duration={200} timingFunction="ease">
        {(styles) => (
          <div style={styles}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {filteredMeals.map((meal) => (
                <MenuItems name={meal.name} description={meal.description} image={meal.image} key={meal.id} price={meal.price}/>
              ))}
            </SimpleGrid>
          </div>
        )}
      </Transition>
    </Container>
  );
}