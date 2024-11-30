import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
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
  },
  plugins: [require('tailwindcss-primeui')]
}
