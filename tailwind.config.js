module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A1D33C"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
