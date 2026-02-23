/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indiva: {
          blue: '#A5D6E5', 
          orange: '#F58220', 
          dark: '#333333',
        }
      }
    },
  },
  plugins: [],
}