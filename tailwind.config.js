/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['SfProRegular', ...defaultTheme.fontFamily.sans],
      sfBold: ['SfProBold', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "12px",
        lg: "12px",
        xl: "12px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1140px",
      }
    },
    extend: {
      screens: {
        "3xl": "1600px"
      },
      colors: {
        primary: "#254E75",
        "primary-800": "#266080",
        "primary-900": "#115175",
        "primary-alt": "#2F7D96",
        secondary: "#E45D61",
        "gray": {
          100 : "#F3F6FF",
          200 : "#EFF2FC",
          300 : "#E2E5F1",
          400 : "#D4D7E5",
          500 : "#B4B7C9",
          600 : "#9397AD",
          700 : "#585C7B",
          800 : "#3E4265",
          900 : "#131022"
        },
        "dark-gray": "#606060",
        "light-gray": "#DEDEDE"
      },
    },
    },
  plugins: [],
}

