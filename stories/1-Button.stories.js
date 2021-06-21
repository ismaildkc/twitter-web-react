import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';


import Button from "../components/button";
import BorderButton from "../components/border-button";
import NavButton from "../components/nav-button";
import Nav from "../components/navigation";
import ThemeButton from "../components/theme-button";

import { Home } from "../components/icons";
import TextTitle from "../components/text-title";
import Stack from '../components/stack';

export default {
  title: 'Buttons',
  decorators: [withKnobs]
};

export const Normal = () => <Button>Hello</Button>;
export const Border = () => <BorderButton>Hello</BorderButton>;
export const Theme = () => (
  <Stack column gap={10}>
    <ThemeButton>Hello</ThemeButton>
    <ThemeButton full>Hello Full</ThemeButton>
    <ThemeButton full big>Hello Full Big</ThemeButton>
  </Stack>
);

export const NavigationButton = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
);

export const Navigation = () => { 
  const flat = boolean("Flat", false)
  return <Nav flat={flat} selectedKey="home" />
}