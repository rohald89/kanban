/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      base: ["0.8125rem", "1.4375rem"],
      xl: ["1.5rem", "1.875rem"],
      lg: ["1.125rem", "1.4375rem"],
      md: ["0.9375rem", "1.1875rem"],
      sm: ["0.75rem", "0.9375rem"],
    },
    extend: {
      colors: {
        black: "#000112",
        veryDarkGrey: "#20212C",
        darkGrey: "#2B2C37",
        darkGreyLine: "#3E3F4E",
        mediumGrey: "#828fa3",
        lightGreyLine: "#e4ebfa",
        lightGrey: "#f4f7fd",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        mainRed: "#EA5555",
        mainRedHover: "#FF9898",
      },
      letterSpacing: {
        widest: "0.15rem",
      },
      boxShadow: {
        main: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
        secondary: "0px 10px 20px rgba(54, 78, 126, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
