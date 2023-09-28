/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        primaryColor: '#ff581f',
        secondaryColor: '#111111',
        secondaryColorLight: '#232220',
        textLight: '#a3a3a3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: { 75: '1200px' },
    },
  },
  plugins: [],
};
