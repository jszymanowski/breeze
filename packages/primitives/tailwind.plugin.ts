// Inside your package: tailwind-plugin.js
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, theme, matchUtilities }) {
  // This function is empty - we're not actually adding anything new
}, {
  // Instead, we use the safelist option to ensure specific classes are included
  safelist: [
    'text-info-foreground',
    'bg-primary-500',
    'rounded-md',
    'p-4',
    // ...any other standard Tailwind classes your package uses
  ]
})
