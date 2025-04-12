/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkblue: '#00008b',
        cadetblue: '#5f9ea0',
        whitesmoke: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
