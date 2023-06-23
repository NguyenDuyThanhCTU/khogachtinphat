/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        p: "375px",
        d: "1024px",
      },
      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },

      colors: {
        Blue3D: "#1D1D3D",
        BlueFF: "#1A49FF",
        BlueFFhover: "#002DD2",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        redPrimmary: "#ed1b2e",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
      },
    },
  },

  plugins: [],
};
