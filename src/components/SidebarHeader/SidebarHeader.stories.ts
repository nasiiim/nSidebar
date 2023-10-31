import { Meta } from "@storybook/react";
import SidebarHeader from "./SidebarHeader";
import { SidebarHeaderProps } from "./SidebarHeader.types";


export default {
    title: 'Components/SidebarHeader',
    component: SidebarHeader,
    argTypes: {
      sidebarTitle: { control: 'text', defaultValue: 'Sidebar' },
      sidebar: { control: 'boolean', defaultValue: true },
      theme: { control: 'text', defaultValue: 'dark' },
      showSidebar: { action: 'clicked' },
    },
  } as Meta;
  
  export const Default = {
    args: {
      /* Default args */
    },
  };
  
  export const LightTheme = {
    args: {
      theme: 'light',
    },
  };
  
  export const SidebarCollapsed = {
    args: {
      sidebar: false,
    },
  };