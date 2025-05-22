import { useState } from 'react';
import { FloatingIndicator, UnstyledButton, Button } from '@mantine/core';
import classes from './Navbar.module.css';
import { IconShoppingBag } from '@tabler/icons-react';

const data = ['HOME', 'ABOUT', 'MENU', 'CONTACT'];

export function Navbar() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<number, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    setControlsRefs((prev) => ({ ...prev, [index]: node }));
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      // ref={setControlRef(index)}
      onClick={() => setActive(index)}
      data-active={active === index || undefined}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.wrapper}>
      <img src="logo.svg" alt="Logo" className={classes.logo} />

      <div className={classes.root} ref={setRootRef}>
        {controls}
        <FloatingIndicator
          target={controlsRefs[active]}
          parent={rootRef}
          className={classes.indicator}
        />
      </div>

      <div className={classes.actions}>
        <Button className={classes.reserveButton}>RESERVATION</Button>
        <Button variant="subtle" size="md" aria-label="Search" className={classes.shoppingButton}>
          <IconShoppingBag size={30} />
        </Button>
      </div>
    </div>
  );
}
