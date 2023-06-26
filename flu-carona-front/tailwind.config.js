/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'flu-red': '#531b2f',
        'flu-green': '#01633D',
        'flu-gray': '#706F6F',
        'off-white': '#01633D',
      }
    },
  },
  plugins: [],
}
