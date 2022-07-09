export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: true,
  target: "static", // default is 'server'

  head: {
    title: "Кооператив It-coop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда.",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon_16px.png" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/click-outside.js",
    { src: "@/plugins/aos", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
    "@nuxtjs/prismic",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Russo One": [400, 500, 600, 700],
      "IBM Plex Sans": [400, 500, 600, 700],
    },
  },
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  prismic: {
    modern: true,
    preview: false,
    endpoint: "https://itcoop.prismic.io/api/v2",
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { transpile: ["@prismicio/vue"] },
  pwa: {
    icon: false, // disables the icon module
  },
  generate: {
    routes: ["/ru", "/en-us", "/projects/ru", "/projects/en-us"],
  },
  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
    ],
  },
};
