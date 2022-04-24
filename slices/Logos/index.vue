<template>
  <section
    class="section flex"
    :style="`background: ${slice.primary.Background}`"
  >
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <PrismicImage :field="item.logo" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Logos",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
