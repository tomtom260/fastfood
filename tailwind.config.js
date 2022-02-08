const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: theme => theme('width'),
      maxWidth: theme => theme('width'),
      minHeight: theme => theme('width'),
      maxHeight: theme => theme('width'),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // primary: '#1b75bb',
        // secondary: '#fcaf17',
        error: colors.red[600],
        sky: colors.sky,
        teal: colors.teal,
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
