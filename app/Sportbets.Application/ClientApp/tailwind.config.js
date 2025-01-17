/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/**/*.{html,js,tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme}) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl')},
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
  prefix: 'sp',
}

