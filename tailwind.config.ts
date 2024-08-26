import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "375px",
        s: "425px",
        // Add other custom breakpoints here
      },
      fontFamily: {
        inter: ["Inter", "sans"],
        "inter-tight": ['"Inter Tight"', "sans"],
        "cor-a": ['"OCR-A BT"', "sans"],
      },
      boxShadow: {
        "custom-sm": "0px 1px 8px 0px #0000000F",
      },
    },
  },
  plugins: [],
};
export default config;
