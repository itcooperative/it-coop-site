<template>
  <section
    v-if="slice.primary.status ? true : false"
    class="section py-16 sm:py-12"
    :style="`background: ${slice.primary.Background}`"
  >
    <div class="mx-auto container px-3 pb-16">
      <div class="grid grid-cols-12">
        <H1 class="col-span-12 md:col-span-11">
          <PrismicRichText :field="slice.primary.title"
        /></H1>

        <PrismicRichText
          class="col-span-12 md:col-span-11 text-xl"
          :field="slice.primary.description"
        />
      </div>
    </div>
    <div
      class="marquee overflow-hidden py-3 border-t-2 border-b-2 border-black"
    >
      <PrismicRichText
        :field="slice.primary.BannerText"
        class="string text-lg sm:text-2xl uppercase whitespace-no-wrap"
      />
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

.marquee .string {
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: scroll 25s infinite linear;
  -moz-animation: scroll 25s infinite linear;
  animation: scroll 25s infinite linear;
}
</style>
