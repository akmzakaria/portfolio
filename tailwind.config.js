/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
        'background-light': '#ffffff',
        'background-dark': '#111827',
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
    },
  },
  plugins: [],
}
