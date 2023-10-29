import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

const ThemeModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  const value = { themeMode, setThemeMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeModeContextProvider;
