import { MantineProvider } from '@mantine/core';
import { Navbar } from './Navbar';
import { HeroComponent } from './HeroComponent';
import { About } from './About';

import '@mantine/core/styles.css';
import { Menu } from './Menu';
import { Reviews } from './Reviews';
import { ContactUs } from './ContactUs';

function App() {
  return (
    <MantineProvider>
      <Navbar/>

      <HeroComponent />
      <About />
      <Menu />
      {/* <Reviews /> */}
      <ContactUs />
    </MantineProvider>
  );
}

export default App;
