import React from "react";
import { useLocalStorage } from "utils/useLocalStorage";

type DarkModeContextValue = {
  isDarkModeEnabled: boolean;
  setDarkMode: (enabled: boolean) => void;
};
export const DarkModeContext = React.createContext<DarkModeContextValue>({
  isDarkModeEnabled: false,
  setDarkMode: () => undefined,
});

export function useDarkMode() {
  return React.useContext(DarkModeContext);
}

export const DarkModeProvider = ({ children }: React.PropsWithChildren) => {
  // Check the system perference
  const mediaQuery = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)"),
    []
  );

  const [isSystemPreferenceDark, setSystemPreferenceDark] = React.useState(
    mediaQuery.matches
  );

  // Handle system perference changes
  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) =>
      setSystemPreferenceDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery]);

  // Persistent user override
  const [isUserPreferenceDark, setUserPreferenceDark] =
    useLocalStorage<boolean>("ui:darkModeUserPreference");

  const isDarkModeEnabled =
    isUserPreferenceDark !== undefined
      ? isUserPreferenceDark
      : isSystemPreferenceDark;

  const contextValue = React.useMemo(
    () => ({ isDarkModeEnabled, setDarkMode: setUserPreferenceDark }),
    [isDarkModeEnabled, setUserPreferenceDark]
  );

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`h-full ${isDarkModeEnabled ? "dark" : "light"}`}>
      <DarkModeContext.Provider value={contextValue}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};
