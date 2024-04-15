/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#121212',
        cardsColor: '#1E1E1E',
        inputColor: '#292929'
      }
    },
  },
  plugins: [],
}

