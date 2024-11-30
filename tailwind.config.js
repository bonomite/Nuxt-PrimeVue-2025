/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      darkMode: ['selector', '[class*="app-dark"]'],
      colors: {
        'p-primary-color': {
          100: '#00ff00',
          200: '#ff0000',
          300: '#ff0000',
          400: '#ffff00',
          500: '#ff0000',
          600: '#ff0000',
          700: '#ff0000',
          800: '#ff0000',
          900: '#ff0000',
        },
      },
      screens: {
        'xs': '320px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1920px',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [require('tailwindcss-primeui')]
}

