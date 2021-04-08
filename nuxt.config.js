export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
  target:'static',
  head: {
    title: 'Кооператив Noda-IT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Itcoop — айти кооператив',
        content: 'Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["nuxt-social-meta",
    {
      url: 'http://itcoop.ru/',
      title: 'Itcoop — айти кооператив',
      site_name: 'Itcoop',
      description: "Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда.",
      img: "http://itcoop.ru/Frame5.png",
      locale: "ru_RU",
      // twitter: "@user",
      twitter_card: "summary_large_image",
      themeColor: "#1400FF",
    }],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  pwa: {
    icon: false // disables the icon module
  }
}
