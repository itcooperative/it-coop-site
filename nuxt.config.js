export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

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
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
  prismic: {
    modern: true,
    endpoint: "https://itcoop.prismic.io/api/v2",
    apiOptions: {
      routes: [
        // Resolves the Homepage document to "/"
        {
          type: "main",
          path: "/:lang?",
        },
        {
          type: "projects",
          path: "/:lang?/projects",
        },
      ],
    },
    /* see configuration for more */
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/i18n"],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { transpile: ["@prismicio/vue"] },
  pwa: {
    icon: false, // disables the icon module
  },
  // i18n: {
  //   vueI18nLoader: true,
  //   pluralizationRules: {
  //     ru(choice, choicesLength) {
  //       if (choice === 0) {
  //         return 0;
  //       }

  //       const teen = choice > 10 && choice < 20;
  //       const endsWithOne = choice % 10 === 1;

  //       if (choicesLength < 4) {
  //         return !teen && endsWithOne ? 1 : 2;
  //       }
  //       if (!teen && endsWithOne) {
  //         return 1;
  //       }
  //       if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
  //         return 2;
  //       }

  //       return choicesLength < 4 ? 2 : 3;
  //     },
  //   },
  //   locales: [
  //     {
  //       code: "ru",
  //       name: "RU",
  //       nameFull: "Русский",
  //       iso: "ru-RU",
  //     },
  //     {
  //       code: "en",
  //       name: "EN",
  //       nameFull: "English",
  //       iso: "en-US",
  //     },
  //   ],
  //   defaultLocale: "en",
  //   strategy: "prefix_except_default",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "itcoop_lang",
  //     onlyOnRoot: true, // recommended
  //   },
  // },
};
