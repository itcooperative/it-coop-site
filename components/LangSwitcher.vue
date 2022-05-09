<template>
  <section class="lang-switcher">
    <span @click="changeLang($store.state.lang.other)" class="cursor-pointer">
      <span class="md:text-lg ml-5">{{
        langs[$store.state.lang.other.lang]
      }}</span>
    </span>
  </section>
</template>

<script>
export default {
  name: "lang-switcher",
  data() {
    return {
      langs: {
        "en-us": "Eng",
        ru: "Rus",
      },
    };
  },
  methods: {
    changeLang(lang) {
      this.$store.commit("SET_LANG_CURRENT", lang);
      console.log(this.$store.state.lang.other.lang);
      this.$router.push(
        this.$prismic.linkResolver(this.$store.state.lang.current)
      );
    },
  },
};
</script>
