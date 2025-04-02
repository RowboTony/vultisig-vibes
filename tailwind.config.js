/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@builder.io/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        oxford: '#061B3A',
        persian: '#2155DF',
        turquoise: '#33E6BF',
        secondary: '#11284A',
        tertiary: '#02122B',
      },
      fontFamily: {
        brockmann: ['"Brockmann"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
}
