import React, { createContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: DefaultTheme,
    setTheme: (theme: DefaultTheme) => void,
    toggleTheme: () => void
}
const themeInitial = {
    theme: light,
    setTheme: () => { },
    toggleTheme: () => { }
}


export const ThemesContext = createContext<ThemeContextType>(themeInitial);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState(themeInitial.theme);

    async function toggleTheme(){
        await setTheme(theme == light ? dark : light)
    }

    return <ThemesContext.Provider value={{ theme,setTheme,toggleTheme }}>{children}</ThemesContext.Provider>
}

/*
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
