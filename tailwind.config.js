/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#0080ff",
        primaryD: "#05a",
        primaryDark: "#048",
        sdgOrange: "#e9432f",
        sdgYellow: "#fbc318",
        sdgGreen: "#4c9e39",
      },
      // backgroundImage: {
      //   carouselBg: "url('./src/assets/carouselBg.jpg')"
      // }
    },
  },
  plugins: [],
}
