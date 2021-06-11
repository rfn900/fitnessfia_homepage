const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "Sans Serif"],
      body: ["Open Sans"],
    },
    extend: {
      colors: {
        rose: colors.rose,
        violet: colors.violet,
      },
      fontSize: {
        "10xl": "10rem",
      },
      letterSpacing: {
        large: "0.3em",
      },
      height: {
        "2px": "2px",
        mobile: "748px",
        laptop: "900px",
        desktop: "1080px",
        wide: "1440px",
      },
      width: {
        desktop: "1680px",
      },
      maxHeight: {
        mobile: "748px",
        laptop: "900px",
        desktop: "1080px",
      },
      maxWidth: {
        desktop: "1680px",
      },
      minHeight: {
        laptop: "900px",
      },
      screens: {
        "3xl": "2120px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
