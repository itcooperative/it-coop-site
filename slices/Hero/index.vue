<template>
  <section
    class="section py-16 sm:py-8"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="mx-auto container px-3 pb-16">
      <PrismicRichText
        :field="slice.primary.title"
        class="
          text-2xl
          sm:text-4xl
          md:text-6xl
          font-secondary-font
          leading-none
          pb-8
        "
      />
      <PrismicRichText class="text-xl" :field="slice.primary.description" />
    </div>
    <div
      class="marquee overflow-hidden py-3 border-t-2 border-b-2 border-black"
    >
      <span>
        <PrismicRichText
          :field="slice.primary.BannerText"
          class="text-2xl uppercase whitespace-no-wrap"
      /></span>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Hero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style>
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
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: scroll 35s infinite linear;
  -moz-animation: scroll 35s infinite linear;
  animation: scroll 35s infinite linear;
}
</style>
