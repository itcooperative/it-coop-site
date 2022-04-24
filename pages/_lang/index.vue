<template>
  <div class="container mx-auto">
    <slice-zone :components="components" :slices="document.data.slices" />
  </div>
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, error, store }) {
    // Languages from API response
    const document = await $prismic.api.getSingle("main", {
      lang: params.lang,
    });
    if (document) {
      store.commit("SET_LANG", document.alternate_languages);
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
