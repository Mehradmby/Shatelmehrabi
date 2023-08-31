/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
      colors: {
        primary: "#5218b1",
        bgHeader:"#ebe9e9",
        secoundryText:"#747474",
        menuBackground:"#e8d0fa"
      },
     
    },
  },
  plugins: [],
}
