
import type { Meta, StoryObj } from '@storybook/react';

import  Sidebar  from "./Sidebar";
import { SidebarItem, SpecialSidebarItem } from '../SidebarMenuItems/SidebarMenuItems.types';
import { ThemeProvider } from '../../context/theme2.context';
import Home from '../../image/home.svg';
import Setting from '../../image/setting.svg';
import Media from '../../image/media.svg';
import Dashboard from '../../image/dashboard.svg';
import Document from '../../image/document.svg';
import Database from '../../image/database.svg';
import React from 'react';


const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    decorators: [(storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>],

};

export default meta;
type Story = StoryObj<typeof Sidebar>;


const exampleItems: (SidebarItem | SpecialSidebarItem)[] = [
    { title: 'Home', icon: Home, routePath: '/item1', type: 1 },
    { type: 2 },
    { title: 'Setting', icon: Setting, routePath: '/item2', type: 1 },
    { title: 'Dashboard', icon: Dashboard, routePath: '/item2', type: 1 },
    { title: 'Media', icon: Media, routePath: '/item2', type: 1 },
    { type: 2 },
    { title: 'Document', icon: Document, routePath: '/item2', type: 1 },
    { title: 'Database', icon: Database, routePath: '/item6', type: 1 },];

export const Primary: Story = {
    args: {
        sidebarTitle: "Farsim.gmbh",
        items: exampleItems,
        userProfileAvatar: 'https://via.placeholder.com/150',
        userName: 'Nasim ghalebi',
    },
};