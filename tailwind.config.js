/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Jost":["Jost"]
    },
    extend: {
      container:{
        center: true,
        padding:"20px",
        screens:{
          lg:"1380px"
        }
      }
    },
    screens: {
      'sm': '380px',
      'md': '650px',
      'lg': '1024px',
      'xl': '1340px',
    }
  },
  plugins: [],
}