<template>
  <div>
    <Header :data="$store.state.header" />
    <Nuxt />
    <Footer :data="$store.state.footer" />
  </div>
</template>
<script>
export default {
  async middleware({ store, $prismic, params }) {
    await store.dispatch("fetchHeader", {
      params: params,
      api: $prismic,
    });
    await store.dispatch("fetchFooter", {
      params: params,
      api: $prismic,
    });
    await store.dispatch("fetchMenu", { params: params, api: $prismic });
  },
};
</script>
<style>
html {
  font-family: "IBM Plex Sans";
  font-size: 18px;
}
</style>
