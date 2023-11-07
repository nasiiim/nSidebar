import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar  from './Sidebar';
import { ThemeProvider } from '../../context/theme2.context'; 

// Mock the inner components if necessary
jest.mock('../SidebarHeader', () => ({ SidebarHeader: () => <button>SidebarHeader</button> }));
jest.mock('../SidebarMenuItems', () => ({ SidebarMenuItems: () => <div>SidebarMenuItems</div> }));
jest.mock('../UserProfile', () => ({ UserProfile: () => <div>UserProfile</div> }));
jest.mock('../ThemeSelector', () => ({ ThemeSelector: () => <div>ThemeSelector</div> }));

describe('Sidebar component', () => {
  it('should render with given theme', () => {
    const { container } = render(
      <ThemeProvider>
        <Sidebar 
          sidebarTitle="Test Title"
          items={[]}
          userProfileAvatar="avatar.png"
          userName="Test User"
        />
      </ThemeProvider>
    );

    // The default theme is 'light', so the container should have class 'container-light'
    expect(container.firstChild).toHaveClass('container-light');
  });

  it('should toggle sidebar visibility', () => {
    render(
      <ThemeProvider>
        <Sidebar 
          sidebarTitle="Test Title"
          items={[]}
          userProfileAvatar="avatar.png"
          userName="Test User"
        />
      </ThemeProvider>
    );

    // Assuming SidebarHeader component renders a button for toggling sidebar visibility
    fireEvent.click(screen.getByText('SidebarHeader'));

    // Check if the sidebar's visibility is toggled by checking the presence of the 'active' class
    // This assertion depends on the implementation detail of how the toggling state affects the class name
    expect(screen.getByText('SidebarMenuItems').parentElement).toHaveClass('active');
  });

 });
