module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#0C0217",
        lightBlue: "#00FFF0",
        custom: "#0c0217a4",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/BACKGROUND.PNG')",
      },
      fontFamily: {
        monts: ["Montserrat", "ui-sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        "3xl": "1980px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
