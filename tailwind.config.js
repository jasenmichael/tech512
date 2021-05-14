module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/**/*.svg',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('./colors.js'),
      animation: {
        spin: 'spin 2s linear infinite',
      },
      scale: {
        101: '1.01',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
        secondary: ['Rubik', 'sans-serif'],
        accent: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      transitionProperty: ['responsive'],
      transform: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
      display: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
    require('tailwind-hamburgers'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
