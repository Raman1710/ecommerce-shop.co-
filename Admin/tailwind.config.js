/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'integral': ['Integral CF Bold', 'sans-serif'],
        'satoshi-bold': ['Satoshi'],
        'satoshi-regular': ['Satoshi'],

        
      },
    },
  },
  plugins: [],
}