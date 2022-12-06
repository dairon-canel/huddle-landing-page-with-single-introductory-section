/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      violet: 'hsl(257, 40%, 49%)',
      softMagenta: 'hsl(300, 69%, 71%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      600: '600',
    },
  },
  plugins: [],
};
