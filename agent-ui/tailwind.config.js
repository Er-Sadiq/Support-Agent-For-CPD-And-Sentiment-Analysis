/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      p: '#23263A',
      s: '#393c4e',
      t: '#162C42',
      a: '#A0D74A',  
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'], // Updated to use Poppins
    },},
  },
  plugins: [],
}

