/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: require('./colors.cjs'),
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
        secondary: ['Rubik', 'sans-serif'],
        accent: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        huge: '160%',
      },
    },
  },
}
