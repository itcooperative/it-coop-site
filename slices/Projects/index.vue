<template>
  <section
    class="pb-20 sm:pb-32"
    :style="`background: ${slice.primary.Background}`"
    v-if="slice.primary.status ? true : false"
  >
    <div class="container mx-auto px-3">
      <article
        class="sm:px-16 sm:py-12 mb-8 sm:mb-[80px] project"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :style="`background: ${item.background}`"
      >
        <div class="sm:hidden">
          <PrismicImage :field="item.Image" />
        </div>

        <PrismicLink
          :field="item.siteLink"
          class="col-span-12 sm:col-span-7 hidden sm:block w-full"
        >
          <H2 class="title p-8 sm:p-0 sm:mb-8 text-white">
            <PrismicRichText :field="item.title" />
          </H2>
        </PrismicLink>
        <div class="p-8 sm:p-0 sm:grid grid-cols-12 gap-8">
          <div class="col-span-12 sm:col-span-5">
            <PrismicRichText
              class="text-white font-bold text-lg sm:text-xl mb-6"
              :field="item.client"
            />
            <div class="text-white font-bold mb-6">{{ item.WhatWeDo }}</div>

            <PrismicRichText
              class="descr text-white font-medium text-sm leading-normal"
              :field="item.description"
            />
          </div>
          <PrismicLink
            :field="item.siteLink"
            class="col-span-12 sm:col-span-7 hidden sm:block w-full"
          >
            <PrismicImage class="w-full" :field="item.Image" />
          </PrismicLink>
        </div>
        <div class="flex justify-end pt-8 pr-4 pb-4 sm:pb-0 sm:pr-0">
          <PrismicImage class="logo" :field="item.Logo" />
        </div>
      </article>
    </div>
    <!-- <div class="text-center mt-10">
      <BtnDefault>
        <PrismicLink :field="slice.primary.showalllink">{{
          $prismic.asText(slice.primary.ShowAllText)
        }}</PrismicLink>
      </BtnDefault>
    </div> -->
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

<style>
.project .logo {
  width: 200px;
  height: 100px;
  object-fit: contain;
  object-position: right;
}
.project .descr a {
  text-decoration: underline;
  cursor: pointer;
}

.project .title a {
  cursor: pointer;
}
</style>
