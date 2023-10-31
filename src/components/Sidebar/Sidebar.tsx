import React, { useState } from 'react';

import { SidebarItem, SpecialSidebarItem } from '../SidebarMenuItems/SidebarMenuItems.types';

// import StateIcon2 from '../../images/State=Open (1).svg';
import './Sidebar.css';

import { useTheme } from '../../context/theme2.context';
import { SidebarHeader } from '../SidebarHeader';
import { SidebarMenuItems } from '../SidebarMenuItems';
import { UserProfile } from '../UserProfile';
import { ThemeSelector } from '../ThemeSelector';
import { SidebarProps } from './Sidebar.types';



export const Sidebar: React.FC<SidebarProps> = ({ sidebarTitle,
    themeColor,
    items,
    imageUrl,
    UserName, }) => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    const { theme, setTheme } = useTheme();
    // const toggleTheme = () => {
    //     setTheme(themeColor === 'dark' ? 'light' : 'dark');
    // };

    const sidebarHeaderProps = {
        sidebarTitle: sidebarTitle,
        sidebar,
        theme,
        showSidebar
    };

    const sidebarMenuItemsProps = {
        sidebar,
        items
    };

    const userProfileProps = {
        imageUrl: imageUrl,
        UserName: UserName
    };

    const themeSelectorProps = {
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

// export default Sidebar;