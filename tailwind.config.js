/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },  
    colors: {
      "white": "#ffffff",
      "grassgreen": "#8CC63F",
      "black": "#000000",
      "darkgreen": "#0B722D"
    },
    fontSize: {
      "tiny": "0.625rem",
      "xs": "1.625rem",
      "sm": "1.875rem",
      "base": "2.125rem",
      "md": "2.625rem",
      "lg": "5.375rem",
      "xl": "7rem",
      "2xl": "11.875rem"
    },
    borderRadius: {
      custom: "3.5rem",
      form: "1.5rem"
    },
    extend: {
    backgroundImage: {
      'mobile': "url('./src/images/bg-mobile.png')",
      'desktop': "url('./src/images/bg-large.png')"
    },

    },
  },
  plugins: [],
}

