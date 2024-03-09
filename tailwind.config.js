/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#102135',
        'dark-red': '#B90101',
        'green': '#05DB01',

      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    }
  },
  plugins: [],
}

