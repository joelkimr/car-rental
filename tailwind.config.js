/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
    },
    keyframes: {
      slider: {
        '0%': { transform: 'translateX(0)' },
        '100%': {
          transform: 'translateX(calc(-100% / var(--slider-total-clones)))',
        },
      },
      'dot-pulse': {
        '0%,100%': {
          transform: 'Scale(1)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(1.25)',
          opacity: 0.3,
        },
      },
    },
    animation: {
      slider: 'slider 56s linear infinite',
      'dot-pulse': 'dot-pulse 1s infinite ease-in-out',
    },
  },
  plugins: [],
};
