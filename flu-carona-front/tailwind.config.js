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
        'flu-red': '#6E182C',
        'flu-green': '#01633D',
        'flu-gray': '#706F6F',
      }
    },
  },
  plugins: [],
}
