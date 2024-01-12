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
            ? 'col-span-12 sm:col-span-6 flex flex-wrap  mb-8'
            : 'lg:px-16 lg:py-12 mb-8 lg:mb-[80px]',
        ]"
      >
        <PrismicLink
          :field="item.siteLink"
          :class="[slice.variation === 'projectsIndex' ? 'mb-2' : 'lg:hidden']"
        >
          <PrismicImage :field="item.Image" />
        </PrismicLink>
        <PrismicLink
          :field="item.siteLink"
          :class="[
            slice.variation === 'projectsIndex'
              ? 'col-span-12'
              : 'col-span-12 lg:col-span-7  w-full',
          ]"
        >
          <H2
            class="title text-lg sm:text-xl"
            :class="[
              animate_class +
                (slice.variation === 'projectsIndex'
                  ? 'py-4'
                  : ' px-8 lg:px-0 pt-8 lg:pt-0  lg:mb-8 text-white'),
            ]"
          >
            <PrismicRichText :field="item.title" />
          </H2>
        </PrismicLink>
        <div
          class=""
          :class="[
            slice.variation === 'projectsIndex'
              ? 'basis-[80%] '
              : 'p-8 lg:p-0 lg:grid grid-cols-12 gap-8 ',
          ]"
        >
          <div
            :class="[
              slice.variation === 'projectsIndex'
                ? 'flex flex-col'
                : `col-span-12 lg:col-span-5 ${i % 2 ? 'order-2' : ''}`,
            ]"
          >
            <PrismicRichText
              class="font-bold"
              :field="item.client"
              :class="[
                slice.variation === 'projectsIndex'
                  ? 'text-sm mb-2'
                  : 'text-white text-lg lg:text-xl mb-6',
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
            <div
              class="flex justify-end pt-8 pr-4 pb-4 lg:pb-0 lg:pr-0 hidden"
              v-if="slice.variation !== 'projectsIndex'"
              :class="[
                slice.variation === 'projectsIndex'
                  ? 'basis-[20%] items-end pl-2'
                  : '',
              ]"
            >
              <PrismicImage class="logo" :field="item.Logo" />
            </div>
          </div>
          <PrismicLink
            v-if="slice.variation != 'projectsIndex'"
            :field="item.siteLink"
            class="col-span-12 sm:col-span-7 hidden lg:block w-full"
            :class="[i % 2 ? 'order-1' : '']"
          >
            <PrismicImage class="w-full" :field="item.Image" />
          </PrismicLink>
        </div>
        <div
          class="flex justify-end pt-8 pr-4 pb-4 lg:pb-0 lg:pr-0 hidden"
          v-if="slice.variation === 'projectsIndex'"
          :class="[
            slice.variation === 'projectsIndex'
              ? 'basis-[20%] items-end pl-2'
              : '',
          ]"
        >
          <PrismicImage class="logo" :field="item.Logo" />
        </div>
      </article>
    </div>
    <div class="text-center mt-10" v-if="slice.variation != 'projectsIndex'">
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
  data: function () {
    return { animate_class: "" };
  },
  methods: {
    animate_start() {
      if (this.animate_class) {
        this.animate_class = "";
      } else {
        this.animate_class = " bling ";
      }
    },
  },
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

.bling {
  animation-name: blinging;
  animation-duration: 0.5s;
}

@keyframes blinging {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
