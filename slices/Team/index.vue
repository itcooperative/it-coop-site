<template>
  <section class="section" :style="`background: ${slice.primary.Background}`">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" />

    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <PrismicImage :field="item.Photo" />
      <PrismicRichText :field="item.Name" />
      <span>{{ item.Job }}</span>
      <PrismicRichText :field="item.Descr" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Team",
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
