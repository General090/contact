/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '412px',
      // => @media (min-width: 412px) { ... }
  },
    extend: {},
  },
  plugins: [],
}

