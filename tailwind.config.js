module.exports = {
  mode: "jit",

  purge: [
    `./components/**/*.{vue,js}`,
    `./slices/**/*.{vue,js}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
  ],
  theme: {
    fontSize: {
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "7rem",
    },
    gradientColorStops: (theme) => ({
      "brand-first": "#33C030",
      "brand-second": "#25B3BC",
    }),
    fontFamily: {
      "primary-font": ["IBM Plex Sans"],
      "secondary-font": ["Russo One"],
    },
  },
};
