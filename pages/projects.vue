<template>
  <div class="container mx-auto">
    <slice-zone :components="components" :slices="document.data.slices" />
  </div>
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle("projects", {
      lang: params.lang,
    });

    if (document) {
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
