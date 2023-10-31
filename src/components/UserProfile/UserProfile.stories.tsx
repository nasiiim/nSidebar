// UserProfile.stories.tsx
import React from 'react';
import { Meta } from '@storybook/react';
import { UserProfileProps } from './UserProfile.types';
import UserProfile  from './UserProfile';

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
  argTypes: {
    imageUrl: { control: 'text' },
    UserName: { control: 'text' },
  },
} as Meta;

export const Default: {
  args: UserProfileProps,
} = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    UserName: 'Nasim Ghalebi',
  },
};

export const NoImage: {
  args: UserProfileProps,
} = {
  args: {
    UserName: 'John Doe',
  },
};

export const NoName: {
  args: UserProfileProps,
} = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
  },
};
