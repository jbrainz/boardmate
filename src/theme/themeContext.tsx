import * as React from 'react'

type Theme = {
    [key: string] : React.CSSProperties
}

const defaultTheme: Theme = {
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    }
}

export const ThemeContext = React.createContext(defaultTheme)
export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}