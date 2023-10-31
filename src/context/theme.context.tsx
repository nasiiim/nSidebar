import {createContext, useContext, useState} from "react";
import React from 'react'

type ThemeContextType = "light" | "dark";
type CustomContextType = {
    theme: ThemeContextType;
    setTheme: (theme: ThemeContextType) => void;
};
const ThemeContext = React.createContext<CustomContextType | undefined>(undefined);


const ThemeProvider = (props: any) => {

    const [theme, setTheme] = useState<ThemeContextType>("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

}
export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used inside the ThemeProvider');
    }

    return context;
};

export {ThemeContext, ThemeProvider};
export type {ThemeContextType}
