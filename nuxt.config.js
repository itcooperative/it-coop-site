export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
  head: {
    title: "Кооператив It-coop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
    "@nuxtjs/pwa"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/i18n",
      [
        "@openafg/nuxt-fullpage",
        {
          activeSection: 0,
          mouseWheelSensitivity: 120,
          showIndicators: false
        }
      ],
      "nuxt-social-meta",
      {
        url: "http://itcoop.ru/",
        title: "Itcoop — айти кооператив",
        site_name: "Itcoop",
        description:
          "Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда.",
        img: "http://itcoop.ru/Frame5.png",
        locale: "ru_RU",
        // twitter: "@user",
        twitter_card: "summary_large_image",
        themeColor: "#1400FF"
      }
    ]
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  pwa: {
    icon: false // disables the icon module
  },
  i18n: {
    vueI18nLoader: true,
    pluralizationRules: {
      ru(choice, choicesLength) {
        if (choice === 0) {
          return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (choicesLength < 4) {
          return !teen && endsWithOne ? 1 : 2;
        }
        if (!teen && endsWithOne) {
          return 1;
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
        }

        return choicesLength < 4 ? 2 : 3;
      }
    },
    locales: [
      {
        code: "ru",
        name: "RU",
        nameFull: "Русский",
        iso: "ru-RU"
      },
      {
        code: "en",
        name: "EN",
        nameFull: "English",
        iso: "en-US"
      }
    ],
    defaultLocale: "ru",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "itcoop_lang",
      onlyOnRoot: true // recommended
    }
  }
};
