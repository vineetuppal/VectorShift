/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: '#4A148C', // Deep purple
        gradientMiddle: '#6A1B9A', // Vibrant purple
        gradientEnd: '#12005E', // Dark purple/blue
      },
      backgroundImage: {
        'classy-gradient': 'linear-gradient(135deg, #4A148C, #6A1B9A 50%, #12005E)',
      },
    },
  },
  plugins: [],
}

