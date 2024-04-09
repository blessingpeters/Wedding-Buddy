/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "san-serif"]
      },
      colors:{
        burgundy:{
          50: "#50112E66",
          100: "#50112E"
        },
        graywhite:{
          200: "#DBDBDB",
          400: "#7D7777",
          600: "#4A4646",
        }
      },
    },
  },

  plugins: [],
 

})

