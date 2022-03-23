const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];


module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily, // <-- this is where the override is happening
    extend: {},
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
  ],
}
