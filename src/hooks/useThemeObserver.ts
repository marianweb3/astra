"use client";
import { useState, useEffect } from "react";

export const useThemeObserver = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isCurrentlyDark =
        document.documentElement.classList.contains("dark");
      setIsDark(isCurrentlyDark);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};
