<template>
  <span v-if="false" />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Itcoop — айти кооператив'
    },
    description: {
      type: String,
      default: 'Сделаем ваши сайты, приложения, боты и другие проекты без добавления наёмного труда.'
    },
    image: {
      type: String,
      default: `/Frame5.png`
    },
    keywords: {
      type: String,
      default: 'сайты для НКО, разработка сайтов, сайты wordpress, сайты nuxt, разработка vue, веб-студия, программисты, разработка быстрых сайтов, веб разработка'
    }
  },
  data() {
    return {
      mainDomain: process.env.DOMAIN,
    }
  },
  head() {
      const canonical = `${this.mainDomain + this.$route.path
        .toLowerCase()
        .replace(/\/$/, '')}`

    return {
      title: this.title,
      link: [{ rel: 'canonical', href: canonical }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Antijob.net — чёрный список работодателей'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Antijob.net'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '600'
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '700'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.DOMAIN + this.$route.path
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'ru_RU'
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.image
        },
        {
          hid: 'fb:pages',
          property: 'fb:pages',
          content: '116903918520198',
        },
        {
          hid: 'vk:image',
          property: 'vk:image',
          content: this.image
        }
      ]
    }
  },
}
</script>
