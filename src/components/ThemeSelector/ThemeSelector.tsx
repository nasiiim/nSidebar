import React from 'react'

import { ThemeSelectorProps } from './ThemeSelector.types'

import './ThemeSelector.css'



const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme, setTheme }) => {
    return (
        <div className='div-mode'>
            <button className='theme-btn' onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? 'dark' : 'light'}
            </button>
        </div>
    )
}

export default ThemeSelector
