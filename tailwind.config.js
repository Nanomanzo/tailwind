/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        primary: '#cc2d4b',
        secondary: '#8fa206',
        terciary: '#61AEC9',
      },
      textColor: {
        primary: '#cc2d4b',
        secondary: '#8fa206',
        terciary: '#61AEC9',
      },
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
    },
  },
  variants: {
    extend:{}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
    require('tailwind-scrollbar-hide')
  ],
};