/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair","serif"],
        Barlow: ['Barlow Condensed', "sans-serif"]
      },
      backgroundImage: {
        'home': "url('/public/assets/bghome/bghome.jpg')",
        'homemob': "url('/public/assets/bghome/bghomemob.jpg')",
        'hometab': "url('/public/assets/bghome/bghometab.jpg')",
        'destination': "url('/public/assets/destination/bgdestination.jpg')",
        'destmob': "url('/public/assets/destination/bgdestinationmob.jpg')",
        'desttab': "url('/public/assets/destination/bgdestinationtab.jpg')",
        'crew': "url('/public/assets/crew/bgcrew.jpg')",
        'crewmob': "url('/public/assets/crew/bgcrewmob.jpg')",
        'crewtab': "url('/public/assets/crew/bgcrewtab.jpg')",
        'tech': "url('/public/assets/tech/bgtechnology.jpg')",
        'techmob': "url('/public/assets/tech/bgtechmob.jpg')",
        'techtab': "url('/public/assets/tech/bgtechtab.jpg')",
      }
    },
  },
  plugins: [],
};
