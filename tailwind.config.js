/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary:'#0f127a',
      },
      fontFamily:{
        Roboto:['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

