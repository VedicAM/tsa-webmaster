import { Divider } from '@mantine/core';
import classes from './About.module.css'
import { AboutUsBlock } from './AboutUsBlock';
import { Spacer } from './Spacer'
import { Features } from './Features';
import { Chefs } from './Chefs';
import { Numbers } from './Numbers';

export function About() {
  return (
    <section className={classes.wrapper} id="about">
        <AboutUsBlock />
        <Spacer />
        <Features />
        <Spacer />
        <Chefs />
        <Spacer />
        <Numbers />
    </section>
  );
}