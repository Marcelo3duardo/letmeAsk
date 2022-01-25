import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';

import dark from '../styles/themes/dark';

interface ThemeContextState{
    changeTheme():void;
}

const ThemeContext = createContext<ThemeContextState>({} as ThemeContextState);
const MyThemeProvider: React.FC = ({ children }) => {
    const themeDark = localStorage.getItem('themeDark');
    const [darkMode,setDarkMode] = useState(themeDark != 'no');
    const changeTheme = useCallback(
        ()=>{
        setDarkMode(!darkMode);
        const dark = !darkMode ? 'yes':'no';
        localStorage.setItem('themeDark',dark);
    },[darkMode]);

    return (
        <ThemeProvider theme={!darkMode ? light : dark}>
            <ThemeContext.Provider value={{changeTheme}}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

function useTheme():ThemeContextState{
    const context = useContext(ThemeContext);
    return context;
}

export {useTheme,MyThemeProvider};