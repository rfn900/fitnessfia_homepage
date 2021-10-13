const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "oswald"],
      body: ["Open Sans"],
    },
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
        rose: colors.rose,
        violet: colors.violet,
      },
      fontSize: {
        xm: "0.5rem",
        "10xl": "10rem",
      },
      letterSpacing: {
        large: "0.3em",
        extra: "0.5em",
      },
      outline: {
        red: ["2px solid #FEE4E7", "1px"],
      },
      height: {
        "2px": "2px",
        mobile: "748px",
        laptop: "900px",
        desktop: "1080px",
        wide: "1440px",
      },
      width: {
        "2px": "2px",
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
        xs: "412px",
        "3xl": "2120px",
      },
      inset: {
        "1/5": "20%",
      },
      translate: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    zIndex: ["hover"],
    outline: ["focus"],
    extend: {
      scale: ["focus-within"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
