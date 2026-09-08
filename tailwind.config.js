/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'Consolas', 'monospace'],
      },
      colors: {
        romance: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        editorial: {
          bg: '#0A0A0C',
          card: '#121216',
          border: '#23232C',
          muted: '#8E8E9F',
          red: '#E11D48',
          crimson: '#BE123C',
          cream: '#F7F4EE',
          sand: '#ECE6DA',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        equalizer: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '18px' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        equalizer: 'equalizer 0.8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
