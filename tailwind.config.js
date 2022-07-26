module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    
    extend: {
      fontFamily: {
          'montserratAlternates-bold':["MontserratAlternates-Bold"],
          'montserratAlternates-medium':["MontserratAlternates-Medium"]
      },
      colors:{
        'squid-pink':'#FF287E',
      }
    },
  },
  plugins: [],
}

