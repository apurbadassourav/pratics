/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'Container': '1144px',
      },
      colors :{
        'balck':' #000000',
        'white':'#FFFFFF',
        'red':'#F40404',
        overlay:' rgba(0, 0, 0, 0.60)'
       },
       fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('./src/assets/banner.png')",
        
      }
    },
  },
  plugins: [],
}