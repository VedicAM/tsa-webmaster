import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';

import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

export function ContactUs() {
  return (
    <Paper shadow="md" radius="lg" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
      <div className={classes.wrapper}>
        <div className={classes.contacts} >
          <Text fz="h4" fw={700} className={classes.title} c="white">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="h1" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}