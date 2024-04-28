/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "san-serif"],
        openSans: ["Open Sans", "sans-serif"]
      },
      colors:{
        burgundy:{
          50: "#50112E66",
          100: "#50112E",
          200: "#571332",
          500: "#7A1A46",
        },
        gold:{
          100: "#CC9900"
        },
        graywhite:{
          200: "#DBDBDB",
          400: "#7D7777",
          600: "#4A4646",
        }
      },
      boxShadow:{
        "2.5xl": "0px 0px 56px 0px rgba(0, 0, 0, 1)",
        '3xl': "0px 0px 22px -10px rgba(0,0,0,1)",

      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      },
      borderRadius: {
        '4xl': '28px',
        '5xl': '32px',
      }

    },
  },

  plugins: [],


}

