/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '0-320': {'min': '0px', 'max': '320px'},
      // => @media (min-width: 0 and max-width: 320px) { ... }

      '0-1200': {'min': '0px', 'max': '1200px'},
      // => @media (min-width: 0 and max-width: 320px) { ... }

      '2xsm': '320px',
      // => @media (min-width: 320px) { ... }

      'xsm': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1526px',
      // => @media (min-width: 1280px) { ... }

    },
  },
  plugins: [],
}
