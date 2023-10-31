import React from 'react';
import { Meta } from '@storybook/react';
import SidebarMenuItems from './SidebarMenuItems';
import { SidebarMenuItemsProps } from './SidebarMenuItems.types';

export default {
  title: 'Components/SidebarMenuItems',
  component: SidebarMenuItems,
} as Meta;

export const Default: SidebarMenuItemsProps = {
  sidebar: true,
  items: [
    {
      id: '23',
      title: 'Dashboard',
      icon: 'https://via.placeholder.com/20',
      routePath: '/dashboard',
      type: 1,
    },
    {
      type: 2,
    },
    {
      id: '13',
      title: 'Settings',
      icon: 'https://via.placeholder.com/20',
      routePath: '/settings',
      type: 1,
    },
  ],
};