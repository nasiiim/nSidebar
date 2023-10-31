import React from 'react';
import { Meta } from '@storybook/react';

import ThemeSelector from './ThemeSelector' 
import { ThemeSelectorProps } from './ThemeSelector.types';



// Define default metadata for your stories
export default {
    title: 'Components/ThemeSelector',
    component: ThemeSelector,
  } as Meta;
  
  // Create and export a story with default values
  export const Default = {
    args: {
      theme: 'light',
      toggleTheme: () => alert('Toggle theme button clicked'),
    },
  };
  
  // Create and export a story with a dark theme
  export const Dark = {
    args: {
      theme: 'dark',
      toggleTheme: () => alert('Toggle theme button clicked'),
    },
  };