import React from 'react';
import { Meta } from '@storybook/react';

import ThemeSelector from './ThemeSelector'
import { ThemeSelectorProps } from './ThemeSelector.types';




export default {
  title: 'Components/ThemeSelector',
  component: ThemeSelector,
} as Meta;


export const Default = {
  args: {
    theme: 'light',
    toggleTheme: () => alert('Toggle theme button clicked'),
  },
};


export const Dark = {
  args: {
    theme: 'dark',
    toggleTheme: () => alert('Toggle theme button clicked'),
  },
};