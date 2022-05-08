<template>
  <section
    v-if="slice.primary.status ? 'true' : 'false'"
    class="items-center py-20"
    :style="`background: ${slice.primary.Background}`"
  >
    <VueSlickCarousel :options="slickOptions" class="flex">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <PrismicImage :field="item.logo" class="h-10 mx-3" />
      </div>
    </VueSlickCarousel>
    <!-- <div class="container mx-auto px-3 flex justify-center"></div> -->
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import VueSlickCarousel from "vue-slick";
import "slick-carousel/slick/slick.css";

export default {
  name: "Logos",
  components: { VueSlickCarousel },
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {
      slickOptions: {
        slidesToShow: 8,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 7,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      },
    };
  },
};
</script>


