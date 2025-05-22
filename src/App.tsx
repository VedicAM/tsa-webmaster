import { MantineProvider } from '@mantine/core';
import { Navbar } from './Navbar';
import { HeroComponent } from './HeroComponent';
import { About } from './About';

import '@mantine/core/styles.css';
import { Menu } from './Menu';
import { Reviews } from './Reviews';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <MantineProvider>
      <Navbar/>

      <HeroComponent />
      <About />
      <Menu />
      {/* <Reviews /> */}
      <ContactUs />
      <Footer />
    </MantineProvider>
  );
}

export default App;
