import React from 'react';
import '@testing-library/jest-dom'
import {render } from '@testing-library/react'
import UserProfile from './UserProfile';


describe('<UserProfile/>', () => {

 test('render component without carshing', () => {
    render(<UserProfile userProfileAvatar='' userName=''/>)
   
 });
 
 test('renders the image with correct src', () => {
    const userProfileAvatar = "https://example.com/image.jpg";
    const { getByAltText } = render(<UserProfile userProfileAvatar={userProfileAvatar} userName="" />);
    
    const image = getByAltText('user icon');
    expect(image).toHaveAttribute('src', userProfileAvatar);
  });

  test('has the correct alt text for the image', () => {
    const { getByAltText } = render(<UserProfile userProfileAvatar="" userName="" />);
    
    const image = getByAltText('user icon');
    expect(image).toBeInTheDocument();
  });

  test('renders the userName correctly', () => {
    const userName = "JohnDoe";
    const { getByText } = render(<UserProfile userProfileAvatar="" userName={userName} />);
    
    expect(getByText(userName)).toBeInTheDocument();
  });

})