/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './portfolio.html',
    './about.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        fall: 'fall 5s linear infinite', // Standarddauer 5s, linear, unendlich
      },
    },
  },
  plugins: [],
}

