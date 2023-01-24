/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      tea: {
        50: "#F7F0D4",
        100: "#F0E0A8",
        200: "#E8D17D",
        300: "#E0C152",
        400: "#D8B227",
        500: "#AD8E1F",
        600: "#826B17",
        700: "#57470F",
        800: "#2B2408",
        900: "#1B1B1B",
      },
      sky: {
        50: "#DDECEE",
        100: "#BBD9DD",
        200: "#99C6CC",
        300: "#77B3BB",
        400: "#56A0A9",
        500: "#98c5cb",
        600: "#448088",
        700: "#336066",
        800: "#224044",
        900: "#112022",
      },
      violet: {
        50: "#e7d2d0",
        100: "#dbbcbe",
        200: "#c596a7",
        300: "#ae7497",
        400: "#97588c",
        500: "#7f407f",
        600: "#602c68",
        700: "#451c51",
        800: "#2d1039",
        900: "#190722",
      },
      white: "#ffffff",
    },
    fontFamily: {
      body: ["Satoshi Variable", "sans-serif"],
      titles: ["Satoshi Variable", "serif"],
      sans: ["Satoshi Variable", "sans-serif"],
    },
    backgroundImage: {
      "hero-image": "url('/assets/images/hero-image.webp')",
      "hero-radial-gradient":
        "radial-gradient(46.21% 47.88% at 52.81% 66.82%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.52) 46.88%)",
    },
    keyframes: {
      float: {
        "0%": {
          // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          transform: "translatey(0px)",
        },
        "50%": {
          // boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
          transform: "translatey(-20px)",
        },
        "100%": {
          // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          transform: "translatey(0px)",
        },
      },
      fadeIn: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      pulse: {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.1)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
    },
    animation: {
      float: "float 6s ease-in-out infinite",
      fadeIn: "fadeIn 1s ease-in-out",
      pulse: "pulse 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
