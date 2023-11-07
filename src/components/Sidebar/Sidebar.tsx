import React, { useState } from 'react';

import { SidebarItem, SidebarMenuItemsProps, SpecialSidebarItem } from '../SidebarMenuItems/SidebarMenuItems.types';

import './Sidebar.css';

import { useTheme } from '../../context/theme2.context';
import { SidebarHeader } from '../SidebarHeader';
import { SidebarMenuItems } from '../SidebarMenuItems';
import { UserProfile } from '../UserProfile';
import { ThemeSelector } from '../ThemeSelector';
import { SidebarProps } from './Sidebar.types';
import { SidebarHeaderProps } from '../SidebarHeader/SidebarHeader.types';
import { UserProfileProps } from '../UserProfile/UserProfile.types';
import { ThemeSelectorProps } from '../ThemeSelector/ThemeSelector.types';



const Sidebar: React.FC<SidebarProps> = ({ sidebarTitle,
    items,
    userProfileAvatar,
    userName, }) => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    const { theme, setTheme } = useTheme();

    const sidebarHeaderProps: SidebarHeaderProps = {
        sidebarTitle: sidebarTitle,
        showSidebar
    };

    const sidebarMenuItemsProps: SidebarMenuItemsProps = {
        sidebar,
        items
    };

    const userProfileProps: UserProfileProps = {
        userProfileAvatar: userProfileAvatar,
        userName: userName
    };

    const themeSelectorProps: ThemeSelectorProps = {
        theme,
        setTheme
    };

    return (
        <div className={sidebar ? `container-${theme} active` : `container-${theme}`}>
            <SidebarHeader {...sidebarHeaderProps} />
            <SidebarMenuItems {...sidebarMenuItemsProps} />
            <UserProfile {...userProfileProps} />
            <ThemeSelector {...themeSelectorProps} />
        </div>

    );
};

export default Sidebar;