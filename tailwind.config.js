/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    darkMode: ['selector', '[class*="dark"]'],
    extend: {
      colors: {
        'p-primary': {
          50: '#e4f2fd',
          100: '#d0e5f6',
          200: '#a2cbed',
          300: '#74b2e4',
          400: '#4698db',
          500: '#187fd3',
          600: '#1365a8',
          700: '#0e4c7e',
          800: '#093254',
          900: '#04192a',
          950: '#020d16',
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

