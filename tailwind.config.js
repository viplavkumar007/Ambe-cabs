/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf2',
          100: '#c5d0dc',
          200: '#9fb0c4',
          300: '#7890ab',
          400: '#5a7699',
          500: '#3c5c87',
          600: '#2c3947',
          700: '#1e2a35',
          800: '#131c24',
          900: '#0a1019',
        },
        gold: {
          300: '#d4b896',
          400: '#c9a96e',
          500: '#b8944a',
          600: '#a07a2e',
        },
        steel: {
          400: '#547a95',
          500: '#4a6d85',
        },
        cream: '#e8edf2',
      },
      fontFamily: {
        display: ['Fraunces', 'Manrope', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(184,148,74,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(184,148,74,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
