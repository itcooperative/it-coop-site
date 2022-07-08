<template>
  <section
    class="pb-20 sm:pb-32"
    :style="`background: ${slice.primary.Background}`"
    v-if="slice.primary.status ? true : false"
  >
    <div
      class="container mx-auto px-3"
      :class="[
        slice.variation === 'projectsIndex' ? 'grid grid-cols-12 gap-8' : '',
      ]"
    >
      <article
        class="project"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :style="`background: ${item.background}`"
        :class="[
          slice.variation === 'projectsIndex'
            ? 'col-span-12 sm:col-span-6 flex flex-wrap'
            : 'sm:px-16 sm:py-12 mb-8 sm:mb-[80px]',
        ]"
      >
        <PrismicLink
          :field="item.siteLink"
          :class="[slice.variation === 'projectsIndex' ? 'mb-2' : 'sm:hidden']"
        >
          <PrismicImage :field="item.Image" />
        </PrismicLink>
        <PrismicLink
          :field="item.siteLink"
          class=""
          :class="[
            slice.variation === 'projectsIndex'
              ? 'col-span-12'
              : 'col-span-12 sm:col-span-7 hidden sm:block w-full',
          ]"
        >
          <H2
            class="title"
            :class="[
              slice.variation === 'projectsIndex'
                ? 'text-xl sm:text-xl'
                : ' p-8 sm:p-0 sm:mb-8 text-white',
            ]"
          >
            <PrismicRichText :field="item.title" />
          </H2>
        </PrismicLink>
        <div
          class=""
          :class="[
            slice.variation === 'projectsIndex'
              ? 'basis-4/5 '
              : 'p-8 sm:p-0 sm:grid grid-cols-12 gap-8',
          ]"
        >
          <div
            class=""
            :class="[
              slice.variation === 'projectsIndex'
                ? 'flex flex-col'
                : 'col-span-12 sm:col-span-5',
            ]"
          >
            <PrismicRichText
              class="font-bold"
              :field="item.client"
              :class="[
                slice.variation === 'projectsIndex'
                  ? 'text-sm mb-2'
                  : 'text-white text-lg sm:text-xl mb-6',
              ]"
            />
            <div
              class="font-bold"
              :class="[
                slice.variation === 'projectsIndex'
                  ? 'text-sm mb-2'
                  : 'text-white  mb-6',
              ]"
            >
              {{ item.WhatWeDo }}
            </div>

            <PrismicRichText
              class="descr"
              :field="item.description"
              :class="[
                slice.variation === 'projectsIndex'
                  ? 'text-sm '
                  : 'text-white font-medium text-sm leading-normal',
              ]"
            />
          </div>
          <PrismicLink
            v-if="!slice.variation === 'projectsIndex'"
            :field="item.siteLink"
            class="col-span-12 sm:col-span-7 hidden sm:block w-full"
          >
            <PrismicImage class="w-full" :field="item.Image" />
          </PrismicLink>
        </div>
        <div
          class="flex justify-end pt-8 pr-4 pb-4 sm:pb-0 sm:pr-0"
          :class="[
            slice.variation === 'projectsIndex'
              ? 'basis-1/5 items-end pl-2'
              : '',
          ]"
        >
          <PrismicImage class="logo" :field="item.Logo" />
        </div>
      </article>
    </div>
    <div class="text-center mt-10" v-if="!slice.variation === 'projectsIndex'">
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
