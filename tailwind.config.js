/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#00183d',
        'yellow': '#e3b81f',
        'red': '#d40000'
      },
    },
  },
  plugins: [],
}

