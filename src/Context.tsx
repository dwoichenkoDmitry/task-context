import { ReactElement, createContext, useContext } from 'react';

const ThemeContext = createContext({ currentTheme: 'light' });
type Theme = 'light' | 'dark';

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider
            value={{
                currentTheme: props.theme,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const { currentTheme } = useContext(ThemeContext);
    return currentTheme as Theme;
}
