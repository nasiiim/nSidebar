type SidebarItemType = 1 | 2;
export interface SidebarMenuItemsProps{
    items: (SidebarItem | SpecialSidebarItem )[];
    sidebar: boolean
  };
  

export interface SidebarItem {
  id: string,
  title? : string,
  icon?: string,
  routePath: string,
  type: SidebarItemType,
  // sidebar: boolean
}

export interface SpecialSidebarItem {
  type: SidebarItemType; // Special type without additional properties
}

