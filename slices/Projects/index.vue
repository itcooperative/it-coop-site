<template>
  <section
    class="py-20 sm:py-32"
    :style="`background: ${slice.primary.Background}`"
    v-if="slice.primary.status ? 'true' : 'false'"
  >
    <div class="container mx-auto px-3">
      <article
        class="sm:p-16 mb-8 sm:mb-16"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :style="`background: ${item.background}`"
      >
        <div class="sm:hidden">
          <PrismicImage :field="item.Image" />
        </div>
        <div class="p-8 sm:p-0 sm:mb-8 text-white text-3xl font-secondary-font">
          <PrismicRichText :field="item.title" />
        </div>
        <div class="p-8 sm:p-0 sm:grid grid-cols-12 gap-8">
          <div class="col-span-12 sm:col-span-5">
            <PrismicRichText
              class="text-white font-bold text-xl mb-4"
              :field="item.client"
            />
            <div class="text-white font-bold mb-4">{{ item.WhatWeDo }}</div>

            <PrismicRichText
              class="text-white font-medium"
              :field="item.description"
            />
          </div>
          <div class="col-span-12 sm:col-span-7 hidden sm:block">
            <PrismicImage :field="item.Image" />
          </div>
        </div>
        <div class="flex justify-end pt-4">
          <PrismicImage class="w-16" :field="item.Logo" />
        </div>
      </article>
    </div>
    <div class="text-center mt-10">
      <BtnDefault>
        <PrismicLink :field="slice.primary.showalllink">{{
          $prismic.asText(slice.primary.ShowAllText)
        }}</PrismicLink>
      </BtnDefault>
    </div>
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
