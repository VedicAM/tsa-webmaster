import React, { useState } from 'react';
import {
  Button,
  Group,
  Container,
  SimpleGrid,
  Text,
  Transition,
} from '@mantine/core';
import { meals } from './Meals';
import classes from './Menu.module.css';
import { Spacer } from './Spacer';
import { MenuItems } from './MenuItems';

// Define CartItem type = meal + quantity
type CartItem = typeof meals[0] & { quantity: number };

const categories = ['Biryanis', 'Curries', 'Drinks', 'Snacks'];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Biryanis');
  const [visible, setVisible] = useState(true);

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const handleCategoryChange = (category: string) => {
    setVisible(false);
    setTimeout(() => {
      setActiveCategory(category);
      setVisible(true);
    }, 200);
  };

  const filteredMeals = meals.filter((meal) => meal.category === activeCategory);

  // Add meal + quantity to cart, merge if exists
  const handleAddToCart = (meal: typeof meals[0], quantity: number) => {
    setCart((prev: CartItem[]) => {
      const existingIndex = prev.findIndex((item) => item.id === meal.id);
      let updated;
      if (existingIndex !== -1) {
        updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
      } else {
        updated = [...prev, { ...meal, quantity }];
      }
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <section id="menu">
    <Container className={classes.wrapper}>
      <Text size="sm" ta="center" mb="xs" fw={500} c="dimmed">
        MENU
      </Text>
      <Text size="xl" ta="center" fw={700} style={{ fontSize: 50 }} c="#1a2f33">
        Our Menu
      </Text>
      <Text size="md" ta="center" mb="md" c="#1a2f33">
        Authentic indian food at its finest!
      </Text>

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
                <MenuItems
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  image={meal.image}
                  price={meal.price}
                  onAddToCart={(quantity) => handleAddToCart(meal, quantity)}
                />
              ))}
            </SimpleGrid>
          </div>
        )}
      </Transition>
    </Container>
    </section>
  );
}
