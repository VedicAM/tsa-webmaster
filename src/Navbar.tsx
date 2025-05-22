import { useState, useRef } from 'react';
import {
  FloatingIndicator,
  UnstyledButton,
  Button,
  Modal,
  TextInput,
  NumberInput,
  Textarea,
  Group,
  SimpleGrid,
  Text,
  Drawer,
  Burger,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { IconShoppingBag } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import '@mantine/dates/styles.css';

const data = ['HOME', 'ABOUT', 'MENU', 'CONTACT'];

export function Navbar() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const controlsRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs.current[index] = node;
  };

  const handleClick = (index: number) => {
    setActive(index);
    const sectionId = data[index].toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) closeDrawer();
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      onClick={() => handleClick(index)}
      data-active={active === index || undefined}
      ref={setControlRef(index)}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <>
      {/* Reservation Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        radius="md"
        size="1000px"
        overlayProps={{ blur: 4, opacity: 0.2 }}
        transitionProps={{ transition: 'slide-up', duration: 300, timingFunction: 'ease' }}
        lockScroll={true}  // Make sure scroll lock is enabled
      >
        <div style={{ padding: '2rem', fontFamily: 'Josefin Sans, sans-serif' }}>
          <Text size="xl" ta="center" fw={700} style={{ fontSize: 50 }} c='#1a2f33'>
            Table Reservation
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            <TextInput label="First Name" placeholder="John" radius="md" size="lg" withAsterisk variant="filled" />
            <TextInput label="Last Name" placeholder="Doe" radius="md" size="lg" withAsterisk variant="filled" />
            <TextInput label="Email" placeholder="john.doe@example.com" radius="md" size="lg" withAsterisk variant="filled" />
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt="xl">
            <NumberInput label="Guests" placeholder="2" min={1} max={20} radius="md" size="lg" withAsterisk variant="filled" />
            <DateInput label="Date" placeholder="Pick a date" radius="md" size="lg" withAsterisk variant="filled" />
            <TimeInput label="Time" placeholder="Pick a time" radius="md" size="lg" withAsterisk variant="filled" />
          </SimpleGrid>

          <Textarea
            label="Additional Notes"
            placeholder="Allergies, seating preferences, or anything we should know?"
            mt="xl"
            minRows={4}
            radius="md"
            size="lg"
            variant="filled"
          />

          <Group justify="flex-end" mt="xl">
            <Button
              color="#f39c12"
              radius="0.5rem"
              size="lg"
              px="xl"
              style={{ fontWeight: 600, fontSize: '18px', }}
              onClick={() => setOpened(false)}
            >
              Confirm Reservation
            </Button>
          </Group>
        </div>
      </Modal>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="75%"
        title="Menu"
        position="right"
      >
        <div className={classes.drawerControls}>{controls}</div>
        <Button
          fullWidth
          mt="md"
          color="#f39c12"
          onClick={() => {
            setOpened(true);
            closeDrawer();
          }}
        >
          RESERVATION
        </Button>
      </Drawer>

      {/* Top navbar */}
      <div className={classes.wrapper}>
        <img src="logo.svg" alt="Logo" className={classes.logo} />

        {!isMobile && (
          <div className={classes.root} ref={rootRef}>
            {controls}
          </div>
        )}

        <div className={classes.actions}>
          {!isMobile && (
            <>
              <Button className={classes.reserveButton} onClick={() => setOpened(true)}>
                RESERVATION
              </Button>
              {/* <Button variant="subtle" size="md" aria-label="Cart" className={classes.shoppingButton}>
                <IconShoppingBag size={30} />
              </Button> */}
            </>
          )}

          {isMobile && (
            <Burger opened={drawerOpened} onClick={toggleDrawer} aria-label="Toggle menu" />
          )}
        </div>
      </div>
    </>
  );
}
