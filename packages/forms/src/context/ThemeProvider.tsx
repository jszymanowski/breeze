import { THEMES, type Theme, ThemeProviderContext } from "@src/context/ThemeProviderContext";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export default function ThemeProvider({
  children,
  defaultTheme = THEMES.LIGHT,
  storageKey = "breeze-forms-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch (error) {
      console.warn("Unable to access localStorage:", error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...Object.values(THEMES));

    if (theme === "system") {
      let systemTheme: Theme = THEMES.LIGHT;
      try {
        systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? THEMES.DARK
          : THEMES.LIGHT;
      } catch (error) {
        console.warn("Error checking system theme preference:", error);
      }
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);

    return () => {
      root.classList.remove(...Object.values(THEMES));
    };
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
