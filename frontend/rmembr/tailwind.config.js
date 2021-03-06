/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lanading-back": "url(../images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)"
      },
      fontFamily: {
        'mcursive': ['Bebas Neue', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        "neutral": colors.neutral,
      }
    },
  },
  plugins: [],
}
