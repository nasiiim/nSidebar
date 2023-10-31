import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa6";
import { SidebarHeaderProps } from './SidebarHeader.types';


import './SidebaHeader.css'

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ sidebarTitle, theme, sidebar, showSidebar }) => {
  return (
    <div>
      <span>{sidebarTitle}</span>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaCircleArrowLeft onClick={showSidebar} />
      </Link>
    </div>

  )
}

export default SidebarHeader
