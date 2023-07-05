/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
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
      colors: {
        primary: "#E45D61",
        secondary: "#254E75",
      },
    },
    },
  plugins: [],
}

