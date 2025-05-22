import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { link: 'home', label: 'HOME' },
  { link: 'about', label: 'ABOUT' },
  { link: 'menu', label: 'MENU' },
  { link: 'contact', label: 'CONTACT' },
  { link: 'references.html', label: 'WORKED CITED' },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = links.map(({ link, label }) => {
    const isInternal = !link.includes('.html');

    return (
      <Anchor
        key={label}
        component="button"
        c="#1a2f33"
        lh={1}
        size="sm"
        onClick={
          isInternal
            ? () => scrollToSection(link)
            : () => window.open(link, '_blank', 'noopener,noreferrer')
        }
      >
        {label}
      </Anchor>
    );
  });

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img src="logo.svg" alt="Logo" className={classes.logo} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://twitter.com" target="_blank">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://youtube.com" target="_blank">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://instagram.com" target="_blank">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
