/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    boxShadow: {
      soft: "0px 20px 60px 0px rgba(73, 97, 168, 0.05)",
    },
    colors: {
      blue: "#0A327B",
      red: "#F65552",
      veryDarkGreyBlue: "#1C202B",
      darkGreyBlue: "#5E6778",
      greyBlue: "#939CAD",
      lightGreyBlue: "#E5EFFA",
      veryLightGreyBlue: "#DDE7EE",
      snow: "#F7FAFD",
      white: "#FFFFFF",
    },
  },
}
