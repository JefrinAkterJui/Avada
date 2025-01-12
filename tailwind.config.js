/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '10px',
        xl: '2rem',
        '2xl': '4rem',
      },
    },
    backgroundImage:{
      'mainBanner':'url("/img/banner.png")',
      'Sbg':'url("/img/Sbg.png")',
      'sbg1':'url("/img/sbg1.png")',
      'sbg2':'url("/img/sbg2.png")',
      'sbg3':'url("/img/sbg3.png")',

    },
    fontFamily:{
      'IBM':["IBM Plex Sans", "serif"],
      'Yellowtail':["Yellowtail", "serif"]
    }
  },
  plugins: [],
}