/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        atr: {
          noir: '#110D0B',
          espresso: '#17120F',
          surface: '#1D1714',
          surfaceLight: '#261F1B',
          terracotta: '#9A5844',
          terracottaLight: '#C87A5B',
          terracottaHover: '#D98B6C',
          terracottaDark: '#4E2E23',
          cream: '#F4EFEA',
          creamMuted: '#D8CEC5',
          creamDark: '#A8998D',
          border: 'rgba(244, 239, 234, 0.08)',
          borderWarm: 'rgba(200, 122, 91, 0.25)',
        }
      },
      boxShadow: {
        'glow-terracotta': '0 0 45px -10px rgba(200, 122, 91, 0.35)',
        'inner-warm': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      }
    }
  },
  plugins: [],
}
