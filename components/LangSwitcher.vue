<template>
  <section class="lang-switcher">
    <nuxt-link :to="$prismic.linkResolver(langs[0])">
      <span>{{ langs[0].lang }}</span>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: "lang-switcher",
  data: function () {
    return { langs: this.$store.state.lang };
  },
};
</script>
