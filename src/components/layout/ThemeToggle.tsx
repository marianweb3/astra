import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   setIsDarkMode(true);
    //   document.documentElement.classList.add("dark");
    // } else {
    //   setIsDarkMode(false);
    //   document.documentElement.classList.remove("dark");
    // }
  }, []);

  const toggleDarkMode = () => {
    // if (isDarkMode) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    // }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="flex items-center sm:w-[50px] h-7 bg-[#78788080] rounded-full p-[2px] cursor-pointer"
      onClick={toggleDarkMode}
    >
      <motion.div
        className={`flex items-center justify-center w-6 h-6 bg-white dark:bg-black rounded-full`}
        // animate={
        //   window.innerWidth >= 640 ? { x: isDarkMode ? 22 : 0 } : undefined
        // }
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {isDarkMode ? <Moon color="#FFF" size={14} /> : <Sun size={14} />}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
