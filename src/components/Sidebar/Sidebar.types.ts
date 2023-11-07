import { SidebarItem, SpecialSidebarItem } from "../SidebarMenuItems/SidebarMenuItems.types";

export interface SidebarProps {
    sidebarTitle?: string;
    items: (SidebarItem | SpecialSidebarItem)[];
    userProfileAvatar?: string;
    userName?: string;
  }

