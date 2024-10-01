/** @type {import('tailwindcss').Config} */  
module.exports = {  
  purge: {  
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
  },  
  darkMode: 'class', // or 'media'  
  theme: {  
    extend: {},  
  },  
  variants: {  
    extend: {},  
  },  
  plugins: [],  
}