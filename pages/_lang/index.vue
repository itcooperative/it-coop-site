
<template>
  <slice-zone :components="components" :slices="document.data.slices" />
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, error, store }) {
    // Languages from API response
    console.log(params.lang);
    const lang = params.lang;

    const document = await $prismic.api.getSingle("main", {
      lang: lang,
    });

    if (document) {
      store.commit("SET_LANG_OTHER", document.alternate_languages[0]);
      store.commit("SET_LANG_CURRENT", document.lang);

      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: this.document.data.metaTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.data.metaDescr,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.document.data.metaImage.url,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "summary_large_image",
        },

        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.document.data.metaTitle,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.document.data.metaImage.url,
        },

        {
          hid: "og:image:width",
          property: "og:image:width",
          content: this.width,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.document.data.metaImage.url,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.document.data.metaImage.alt,
        },
        {
          hid: "vk:image",
          property: "vk:image",
          content: this.document.data.metaImage.url,
        },
      ],
    };
  },
  data: function () {
    return { components };
  },
};
</script>

<style lang="scss" scoped>
.partner-item {
  flex-basis: 50%;

  @media screen and (min-width: 500px) {
    flex-basis: 20%;
  }
}
</style>
