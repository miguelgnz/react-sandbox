"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ThemeCtxProps {
  backgroundColor: string;
  setBackground: Dispatch<SetStateAction<string>>;
}

const ctx: ThemeCtxProps = {
  backgroundColor: "",
  setBackground: () => {},
};

interface ComponentProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext(ctx);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<ComponentProps> = ({
  children,
}) => {
  const [background, setBackground] = useState("gray");

  const value = {
    backgroundColor: background,
    setBackground: setBackground,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
