import { SidebarItem, SpecialSidebarItem } from "../SidebarMenuItems/SidebarMenuItems.types";

export interface SidebarProps {
    sidebarTitle?: string;
    sidebar: boolean;
    themeColor: string;
    // showSidebar: () => void;
    items: (SidebarItem | SpecialSidebarItem)[];
    // toggleTheme: () => void;
    imageUrl?: string;
    UserName?: string;
  }

