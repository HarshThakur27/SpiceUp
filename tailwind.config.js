/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#27355A',
        custome: '#0F182C',
      },
      keyframes: {
        clipReveal: {
          '0%': { clipPath: 'inset(0 0 0 100%)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
        },
        reveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)', transform: 'translateY(100%)' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1'  },
        },
      },
      animation: {
        clipReveal: 'clipReveal 2s ease forwards ',
        reveal: 'reveal 3s ease forwards 4s',
      },
    },
  },
  plugins: [],
}
