/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      lightBlue: colors.lightBlue,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
      sky: colors.sky,
      stone: colors.stone,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,

      primary: colors.blue,
      secondary: colors.yellow,
    },
  },
  plugins: [],
};
