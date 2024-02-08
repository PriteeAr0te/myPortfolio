/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        'source-serif': ['"Source Serif 4"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(79, 70, 229) #0f172a"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "#0f172a",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(79, 70, 229)",
            borderRadius: "20px",
            border: "1px solid #0f172a"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

