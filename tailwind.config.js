/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'unsplash': 'url(images/unsplash.jpg)'
      }},
      fontFamily: {
        'norse': ['Norse-Bold']
      }
  },
  plugins: [],
}