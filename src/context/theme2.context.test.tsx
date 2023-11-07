import React from 'react';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from './theme2.context';



const renderWithTheme = (component: React.ReactElement) => {
  return {
    ...render(<ThemeProvider>{component}</ThemeProvider>),
    useTheme,
  };
};


describe('ThemeContext', () => {
  it('provides the theme and setTheme function', () => {
    // A component to capture and display the theme value
    const TestComponent = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span data-testid="themeValue">{theme}</span>
          <button onClick={() => setTheme('dark')} data-testid="themeButton">Change to dark</button>
        </div>
      );
    };

    // Render the TestComponent within the ThemeProvider
    const { getByTestId } = renderWithTheme(<TestComponent />);

    // Initially, the theme should be 'light'
    expect(getByTestId('themeValue').textContent).toBe('light');

    // Act and trigger the button to change the theme
    act(() => {
      const button = getByTestId('themeButton');
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    // The theme should now be 'dark'
    expect(getByTestId('themeValue').textContent).toBe('dark');
  });
});