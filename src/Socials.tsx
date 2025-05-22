import { ActionIcon, Group, Text } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
} from '@tabler/icons-react';

export function Socials() {
  return (
    <Group justify="center">
      <ActionIcon
        size="lg"
        variant="transparent"
        component="a"
        href="https://www.instagram.com/cabcallowayarts/"
        target="_blank"
        aria-label="Instagram"
      >
        <IconBrandInstagram size={20} color='#1a2f33'/>
      </ActionIcon>

      <ActionIcon
        size="lg"
        variant="transparent"
        component="a"
        href="https://www.facebook.com/CabCallowayarts/"
        target="_blank"
        aria-label="Facebook"
      >
        <IconBrandFacebook size={20} color='#1a2f33'/>
      </ActionIcon>

      <ActionIcon
        size="lg"
        variant="transparent"
        component="a"
        href="https://x.com/cabcallowayarts"
        target="_blank"
        aria-label="Twitter"
      >
        <IconBrandX size={20} color='#1a2f33'/>
      </ActionIcon>
    </Group>
  );
}
