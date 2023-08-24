import React, { FC, ReactNode, useMemo, useState } from 'react';
import {
    ThemeContext,
    Theme,
    LOCAL_STORAGE_THEME_KEY
} from 'app/providers/themeProvider/lib/ThemeContext';


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type Props = {
    children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;