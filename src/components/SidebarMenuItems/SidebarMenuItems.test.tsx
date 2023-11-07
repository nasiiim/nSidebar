import React from 'react';
import '@testing-library/jest-dom';
import { getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarMenuItems from './SidebarMenuItems';
import { SidebarItem, SpecialSidebarItem } from './SidebarMenuItems.types';

describe('Running test for cheack SidebarMenuItems component', () => {
    const mockItemsSimple: (SidebarItem | SpecialSidebarItem)[] = [
        {
            id: '1',
            type: 1,
            icon: 'path/to/icon1.png',
            title: 'Item 1',
            routePath: '/item1'
        },
        {
            id: '3',
            type: 1,
            icon: 'path/to/icon2.png',
            title: 'Item 2',
            routePath: '/item2'
        },
        {
            type: 2
        }
    ];

    const mockItemsComplex: (SidebarItem | SpecialSidebarItem)[] = [
        {
            id: '1',
            type: 1,
            icon: 'path/to/icon1.png',
            title: 'Item 1',
            routePath: '/item1'
        },
        {
            id: '2',
            type: 1,
            icon: 'path/to/icon2.png',
            title: 'Item 2',
            routePath: '/item2'
        },
        {
            type: 2
        },
        {
            id: '3',
            type: 1,
            icon: 'path/to/icon1.png',
            title: 'Item 3',
            routePath: '/item1'
        },
        {
            id: '4',
            type: 1,
            icon: 'path/to/icon2.png',
            title: 'Item 4',
            routePath: '/item2'
        },
    ];

    const mockHrItems: (SidebarItem | SpecialSidebarItem)[] = [
        {
            type: 2
        },
        {
            type: 2
        },
    ];


    const mockItemsWithOneItem: (SidebarItem | SpecialSidebarItem)[] = [
        {
            id: '1',
            type: 1,
            icon: 'path/to/icon1.png',
            title: 'Item 1',
            routePath: '/item1'
        },
    ];

    test('shows both icon and title when sidebar is true for items of type 1', () => {
        const { container } = render(<Router><SidebarMenuItems items={mockItemsSimple} sidebar={true} /></Router>);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByAltText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByAltText('Item 2')).toBeInTheDocument();
        const listItems = container.querySelector('.list-items');
        expect(listItems).toBeInTheDocument();
        const items = listItems?.querySelectorAll('.list-item')
        expect(items?.length).toBe(2)
        expect(listItems?.querySelector('.line.active')).toBeInTheDocument();

    });

    test('shows only icon when sidebar is false for items of type 1', () => {
        const { container } = render(<Router><SidebarMenuItems items={mockItemsSimple} sidebar={false} /></Router>);
        const listItems = container.querySelector('.list-items');
        expect(listItems).toBeInTheDocument();
        const itemsCollapsed = listItems?.querySelectorAll('.list-item-collapsed')
        expect(itemsCollapsed?.length).toBe(2)
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        expect(screen.getByAltText('Item 1')).toBeInTheDocument();
        expect(listItems?.querySelector('.line.active')).toBeInTheDocument();

    });

    test('check the order of rendered menu with 4 items and 1 line in between', () => {
        const { container } = render(<Router><SidebarMenuItems items={mockItemsComplex} sidebar={true} /></Router>);

        // Get all the child nodes of the <ul> element
        const list = container.querySelector('.list-items');
        const children = list ? Array.from(list.childNodes) : [];

        // The childNodes list will include text nodes (whitespace) if there's any between elements
        // You need to filter out non-element nodes (like text nodes)
        const elements = children.filter(node => node.nodeType === Node.ELEMENT_NODE) as Element[];


        expect(elements[0]).toHaveClass('list-item');
        expect(elements[1]).toHaveClass('list-item');
        expect(elements[2]).toHaveClass('line active');
        expect(elements[2].tagName).toBe('HR');
        expect(elements[3]).toHaveClass('list-item');
        expect(elements[4]).toHaveClass('list-item');

    });

    test('check the order of rendered menu with 2 hr lines', () => {
        const { container } = render(<Router><SidebarMenuItems items={mockHrItems} sidebar={true} /></Router>);


        const list = container.querySelector('.list-items');
        const children = list ? Array.from(list.childNodes) : [];


        const elements = children.filter(node => node.nodeType === Node.ELEMENT_NODE) as Element[];


        expect(elements[0]).toHaveClass('line active');
        expect(elements[0].tagName).toBe('HR');
        expect(elements[1]).toHaveClass('line active');
        expect(elements[1].tagName).toBe('HR');


    });

    test('check the order of rendered menu with 1 items', () => {
        const { container } = render(<Router><SidebarMenuItems items={mockItemsWithOneItem} sidebar={true} /></Router>);

        const list = container.querySelector('.list-items');
        const children = list ? Array.from(list.childNodes) : [];


        const elements = children.filter(node => node.nodeType === Node.ELEMENT_NODE) as Element[];

        expect(elements.length).toBe(1)
        expect(elements[0]).toHaveClass('list-item');

    });

});