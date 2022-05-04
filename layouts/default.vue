<template>
  <div>
    <Header :data="$store.state.header" />
    <Nuxt />
    <Footer :data="$store.state.footer" />
  </div>
</template>
<script>
export default {
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchHeader", $prismic);
    await store.dispatch("fetchFooter", $prismic);
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>
<style>
html {
  font-family: "IBM Plex Sans";
  font-size: 18px;
}
</style>
