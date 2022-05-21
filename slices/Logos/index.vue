<template>
  <section
    v-if="slice.primary.status ? true : false"
    class="py-8 sm:py-12"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="marquee overflow-hidden py-3">
      <span>
        <div
          class="h-12 w-24 mx-4 flex items-center justify-center"
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
        >
          <PrismicImage :field="item.logo" /></div
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
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}

@-moz-keyframes scroll {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -moz-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
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
  display: inline-flex;
  align-items: center;
  padding-left: 0%;
  -webkit-animation: scroll 35s infinite linear;
  -moz-animation: scroll 35s infinite linear;
  animation: scroll 35s infinite linear;
}
</style>
