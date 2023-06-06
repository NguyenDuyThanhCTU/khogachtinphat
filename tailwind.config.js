/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      p: "375px",
      d: "1024px",
    },
    fontFamily: {
      LexendDeca: ["Lexend Deca", "sans-serif"],
    },
  },

  plugins: [],
};
