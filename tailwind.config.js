module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  theme: {},
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [require('tailwindcss-font-inter')()]
};
