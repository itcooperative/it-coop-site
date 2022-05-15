<template>
  <section
    v-if="slice.primary.status ? true : false"
    class="py-8 sm:py-12"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="marquee overflow-hidden py-3">
      <span class="flex">
        <div
          class="mx-8"
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
        >
          <PrismicImage :field="item.logo" class="mx-8 h-16" /></div
      ></span>
    </div>
    <!-- <div class="container mx-auto px-3 flex justify-center"></div> -->
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Logos",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {};
  },
};
</script>

<style>
.slick-track {
  display: flex;
  align-items: center;
}
@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.marquee {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.marquee span {
  display: flex;
  align-items: center;
  padding-left: 100%;
  -webkit-animation: scroll 25s infinite linear;
  -moz-animation: scroll 25s infinite linear;
  animation: scroll 25s infinite linear;
}
</style>
