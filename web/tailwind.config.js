// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // VSM Schools Monk/Mountain palette
        primary: '#1C2C4B',           // Deep Indigo
        accent: '#A78A55',            // Warm Gold
        'muted-foreground': '#4A4A4A',// Stone Grey text
        background: '#F5F5F5',        // Soft Background
        softBackground: '#F5F5F5',    // alias
      },
      fontFamily: {
        // you’ll need to import the actual fonts in _app.tsx or global.css
        heading: ['"Noto Sans Display"', ...fontFamily.sans],
        body: ['Inter', ...fontFamily.sans],
      },
      borderRadius: {
        lg: '16px',
      },
      spacing: {
        '4.5': '1.125rem', // optional custom spacing
      },
    },
  },
  plugins: [],
}
