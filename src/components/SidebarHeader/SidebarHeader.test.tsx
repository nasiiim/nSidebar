import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen } from '@testing-library/react';
import SidebarHeader from './SidebarHeader';


// Mock the Link component from react-router-dom
jest.mock('react-router-dom', () => ({
    Link: 'a'
  }));



// Mock the FaCircleArrowLeft icon
jest.mock('react-icons/fa6', () => ({
    FaCircleArrowLeft: jest.fn(({ onClick }) => <div onClick={onClick}>MockedIcon</div>)
  }));


describe('Running test for cheack SideBarHeader component', () => {
     
    test('render component without carshing', () => {
       const mockshowSidebar = jest.fn();
       render(<SidebarHeader  sidebarTitle='test title' showSidebar={mockshowSidebar}/>)
    })
   
    test('displays the sidebarTitle prop', () => {
        const mockshowSidebar = jest.fn();
        const { getByText } = render(<SidebarHeader sidebarTitle="Test Title" showSidebar={mockshowSidebar} />);
        const title = getByText('Test Title')
        expect(title).toBeInTheDocument();
      });
     
      test('calls showSidebar when the icon is clicked', () => {
        const mockshowSidebar = jest.fn();
       render(<SidebarHeader  sidebarTitle='' showSidebar={mockshowSidebar}/>)

        fireEvent.click(screen.getByText('MockedIcon'));
        expect(mockshowSidebar).toHaveBeenCalled();
      })
    })