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
          100: "#50112E",
          500: "#7A1A46",
        },
        graywhite:{
          200: "#DBDBDB",
          400: "#7D7777",
          600: "#4A4646",
        }
      },
      boxShadow:{
        '3xl': "0px 0px 22px -10px rgba(0,0,0,1)",

      }
    },
  },

  plugins: [],


})

