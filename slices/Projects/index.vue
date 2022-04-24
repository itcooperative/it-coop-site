<template>
  <section class="section" :style="`background: ${slice.primary.Background}`">
    <article
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      :style="`background: ${item.background}`"
    >
      <PrismicRichText :field="item.title" />
      <PrismicRichText :field="item.client" />
      <PrismicRichText :field="item.description" />
      <span>{{ item.WhatWeDo }}</span>
      <PrismicImage :field="item.Image" />
      <PrismicImage :field="item.Logo" />
    </article>
    <PrismicLink :field="slice.primary.showalllink">{{
      $prismic.asText(slice.primary.ShowAllText)
    }}</PrismicLink>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Projects",
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
