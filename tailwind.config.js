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
        "primary-100": "#BAC7CE",
        "primary-200": "#A6B9C4",
        "primary-300": "#90A9B8",
        "primary-400": "#7B9BAD",
        "primary-500": "#668DA2",
        "primary-600": "#517E97",
        "primary-700": "#3C6F8C",
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

