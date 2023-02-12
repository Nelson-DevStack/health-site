/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      text: ['Work Sans', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        mainColor: '#F24444',
        darkerRed: '#F23333',
        secondaryColor: '#F27405',
        darkerOrange: '#F26304',
      },
    },
  },
  plugins: [],
};
