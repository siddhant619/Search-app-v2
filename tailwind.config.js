const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    

    colors:{
      ...defaultTheme.colors,
      primary: {
        900: "#742A2A",
        800: "#9B2C2C",
        700: "#AF1818",
        600: "#C12C27",
        500: "#DF5754",
        400: "#FC8181",
        300: "#FEB2B2",
        200: "#FED7D7",
        100: "#FFF5F5",
        50: "#FFFAFA"
      }
    },
   
  },
  variants: {
    extend: {
      pointerEvents: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
