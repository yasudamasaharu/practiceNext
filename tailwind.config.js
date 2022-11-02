/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200': '200px'
      },
      maxWidth: {
        '24': '240px',
        '104': '1040px'
      },
      rotate: {
        '45': '45deg',
        '135': '135deg',
      },
      fontSize: {
        '15': '15px',
        '13': '13px'
      },
      borderWidth: {
        "1": '1px'
      }
    },
  },
  plugins: [],
}