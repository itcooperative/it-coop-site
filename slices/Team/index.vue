<template>
  <section
    class="py-20 sm:py-32"
    :style="`background: ${slice.primary.Background}`"
    v-if="slice.primary.status ? true : false"
  >
    <div class="container mx-auto px-3">
      <H2> <PrismicRichText :field="slice.primary.title" class="title" /> </H2>
      <PrismicRichText
        class="text-xl my-4"
        :field="slice.primary.description"
      />
      <VueSlickCarousel :options="slickOptions" class="flex mt-10">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="text-center"
        >
          <PrismicImage
            :field="item.Photo"
            class="h-32 w-32 object-cover rounded-full mx-auto"
          />

          <PrismicRichText :field="item.Name" class="font-bold text-center" />
          <div class="text-center">{{ item.Job }}</div>
          <PrismicRichText class="text-center" :field="item.Descr" />
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import VueSlickCarousel from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  name: "Team",
  components: { VueSlickCarousel },

  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {
      slickOptions: {
        slidesToShow: 5,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

