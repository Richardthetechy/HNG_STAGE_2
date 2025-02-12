/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#05252C',
        'nav-border-color': '#197686',
        "body-bg": "#02191D",
        "content-bg": "#08252B",
        "border-color": "#0E464F",
      },
      textColor : {
        "normal":'#0A0C11'
      },
      fontFamily : {
        "JejuMyeongjo": ['JejuMyeongjo'],
        "Road-Rage": ['Road Rage'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

