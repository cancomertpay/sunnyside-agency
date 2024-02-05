/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        primary: {
          blue: "rgba(62,191,255,255)",
          bgYellow: "#ffd600",
          softRed: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          darkDesaturatedCyan: "hsl(167, 40%, 24%)",
          darkBlue: "hsl(198, 62%, 26%)",
          darkModerateCyan: "hsl(168, 34%, 41%)",
        },
        neutral: {
          veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
          veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
          darkGrayishBlue: "hsl(232, 10%, 55%)",
          grayishBlue: "hsl(210, 4%, 67%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
