import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa6";
import { SidebarHeaderProps } from './SidebarHeader.types';


import './SidebarHeader.css'

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ sidebarTitle, showSidebar }) => {
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
