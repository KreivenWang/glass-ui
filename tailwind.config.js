/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        warm: '#ee9ca7',
        cold: '#6dd5ed',
        navi: '#161626'
      }
    }
  },
  plugins: []
};
