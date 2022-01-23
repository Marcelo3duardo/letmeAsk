import React, { createContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: DefaultTheme,
    setTheme: (theme: DefaultTheme) => void
}
const themeInitial = {
    theme: light,
    setTheme: () => { }
}

export const ThemesContext = createContext<ThemeContextType>(themeInitial);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(themeInitial.theme);
    return <ThemesContext.Provider value={{ theme, setTheme }}>{children}</ThemesContext.Provider>
}




/*
export async function toggleTheme (){

    const [theme, setTheme] = useState(light);
    await setTheme(theme.colors.title == 'light' ? dark : light)

}
*/
