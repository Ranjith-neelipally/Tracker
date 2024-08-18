import React, {createContext, useState, ReactNode, useContext} from 'react';
import {Theme} from '.';

type ThemeType = 'light' | 'dark';

interface ThemeContextInterface {
  theme?: ThemeType;
  StatusBarColor?: string;
  footerColor?: string;
  toggleTheme: (statusBarcolor?: string, footerColor?: string) => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'light',
  toggleTheme: () => {},
  StatusBarColor: Theme.light.primary,
  footerColor: Theme.light.primary,
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [StatusBarColor, setStatusBarColor] = useState<string>(
    Theme.light.primary,
  );
  const [footerColor, setFooterColor] = useState<string>(Theme.light.primary);

  const toggleTheme = (statusBarcolor?: string, footerColor?: string) => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';

      const newStatusBarColor =
        statusBarcolor ||
        (newTheme === 'light' ? Theme.light.primary : Theme.dark.primary);
      setStatusBarColor(newStatusBarColor);

      const newFooterColor =
        footerColor ||
        (newTheme === 'light' ? Theme.light.primary : Theme.dark.primary);
      setFooterColor(newFooterColor);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{theme, StatusBarColor, footerColor, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
