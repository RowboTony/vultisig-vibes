/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@builder.io/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '374px',
      },
      colors: {
        oxford: '#061B3A',
        persian: '#2155DF',
        turquoise: '#33E6BF',
        secondary: '#11284A',
        tertiary: '#02122B',
        darkBg: '#050C1B',
        blueAccent: '#0040FF',
        cyanAccent: '#00E0FF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'text-gradient': 'linear-gradient(90deg, #0040FF 0%, #00E0FF 100%)',
        'text-gradient-alt': 'linear-gradient(90deg, #33E6BF 0%, #2155DF 100%)',
      },
    },
  },
  plugins: [],
}
