/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bright_blue: "hsl(220, 98%, 61%)",
        
      }
    },
  },
  plugins: [],
}

