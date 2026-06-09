/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blanco: '#ece9f4',
        negro: '#0D0D0D',
        rojo: '#f21b42',
        mint: '#C8D8DC',
        'footer-bg': '#111111',
      },
      fontFamily: {
        posterman: ['Posterman', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
