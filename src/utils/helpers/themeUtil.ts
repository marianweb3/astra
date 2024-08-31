export const getCurrentTheme = (): "dark" | "light" => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (storedPrefs === "dark" || storedPrefs === "light") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use dark theme as the default, return "dark" instead
  return "light";
};

export const getThemeClass = (
  lightClass: string,
  darkClass: string
): string => {
  const theme = getCurrentTheme();
  return theme === "dark" ? darkClass : lightClass;
};
