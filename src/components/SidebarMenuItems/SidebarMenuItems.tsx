import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarMenuItemsProps,SidebarItem } from './SidebarMenuItems.types'

import './SidebarMenuItems.css'

const SidebarMenuItems: React.FC<SidebarMenuItemsProps> = ({ items, sidebar }) => {
    return (
        <ul className='list-items'>
            {items.map((item, index) => {
                if (item.type === 1) {
                    const normalItem= item as SidebarItem;
                    if (sidebar) {
                        return (
                            <li className='list-item' key={index}>
                                <img className='image-icon' src={normalItem.icon} alt={normalItem.title} key={index + 100} />

                                <Link to={normalItem.routePath} className='name-item'><span>{normalItem.title}</span></Link>
                            </li>
                        );
                    } else {
                        return (
                            <li className='list-item-collapsed' key={index}>
                                <img src={normalItem.icon} alt={normalItem.title} key={index + 100} />
                            </li>
                        );
                    }

                } else if (item.type === 2) {
                    return (
                        <hr key={index} className={item.type ? 'line active' : 'line'} />
                    )
                }

            })}
           
        </ul>
    )
}

export default SidebarMenuItems
