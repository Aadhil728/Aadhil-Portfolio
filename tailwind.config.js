module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0458ac",
        secondary: "#272c38",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1rem",
          lg: "2rem",
          xl: "6rem",
          sm: "1rem",
        },
      },
      fontFamily: {
        ralwayFont: ["Raleway", "sans-serif"],
        dancingFont: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
