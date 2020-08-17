const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        watermelon: '#ff4a6e',
        lavender: '#9198e5',
        sunglo: '#e66465',
        'linkedin-cyan': '#0e76a8',
        'google-red': '#de5246',
        'twitter-blue': '#00acee',
        'facebook-blue': '#3b5998',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
