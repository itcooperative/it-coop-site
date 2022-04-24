<template>
  <div>
    <Header :data="$store.state.header" />
    <Nuxt class="mt-20 sm:mt-16 px-3 sm:px-0" />
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
</style>
