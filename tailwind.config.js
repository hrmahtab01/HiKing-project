/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      }
    },
    colors:{
      Primary:"#05060A",
      SecondDary:"#5D616F",
      ThidrColor:"#3E82FC",
      FourColor:"#FE2C54"

    },
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      bgimage: "url('/assets/Background.png')",
     
    }
  },
  plugins: [],
}