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
    userProfileAvatar: 'https://via.placeholder.com/150',
    userName: 'Nasim Ghalebi',
  },
};

export const NoImage: {
  args: UserProfileProps,
} = {
  args: {
    userName: 'John Doe',
  },
};

export const NoName: {
  args: UserProfileProps,
} = {
  args: {
    userProfileAvatar: 'https://via.placeholder.com/150',
  },
};
