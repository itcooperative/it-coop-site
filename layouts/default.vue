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
@media (min-width: 640px) {
  .container {
    max-width: 480px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 618px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 864px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1120px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1376px;
  }
}
</style>
