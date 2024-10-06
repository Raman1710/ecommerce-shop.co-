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
      animation:{
          "loop-scroll" : "loop-scroll 50s linear infinite"
      },
      keyframes:{
          "loop-scroll" : {
            from: { transform : "translateX(0)"},
            to: { transform: "translateX(-100%)"},
          },
      },
    },
  },
  plugins: [],
}