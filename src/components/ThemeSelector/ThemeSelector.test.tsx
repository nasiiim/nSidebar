import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen } from '@testing-library/react';
import ThemeSelector from './ThemeSelector';


describe('Running test for cheack themeSelector button', () => {
   
   test('render component without carshing', () => {
    const mockSetTheme = jest.fn();
     render(<ThemeSelector theme='light'  setTheme= {mockSetTheme}/>);

     const button = screen.getByRole('button', {name: /dark/i});
     expect(button).toBeInTheDocument();
   });
});
 
test('should switch to dark mode when the theme is light', () => {
    const mockSetTheme = jest.fn();
    render(<ThemeSelector theme='light'  setTheme= {mockSetTheme}/>);

    fireEvent.click(screen.getByRole('button', {name: /dark/i}));
    const updaterFunction = mockSetTheme.mock.calls[0][0];

     expect(updaterFunction('light')).toBe('dark');
});


test('should switch to light mode when the theme is dark', () => {
    const mockSetTheme = jest.fn();
    render(<ThemeSelector theme='dark'  setTheme= {mockSetTheme}/>);

    fireEvent.click(screen.getByRole('button', {name: /light/i}));

    const updaterFunction = mockSetTheme.mock.calls[0][0];
    expect(updaterFunction('dark')).toBe('light');
});
