import { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
