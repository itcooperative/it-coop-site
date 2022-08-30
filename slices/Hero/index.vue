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
          class="col-span-12 lg:col-span-8 xl:col-span-7 text-xl leading-snug"
          :field="slice.primary.description"
        />
      </div>
    </div>
    <div
      id="heroMarguee"
      class="marquee overflow-hidden py-3 border-t-2 border-b-2 border-black"
    >
      <div class="marquee__inner">
        <PrismicRichText
          :field="slice.primary.BannerText"
          class="string text-lg sm:text-2xl uppercase whitespace-no-wrap pr-5"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Hero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  mounted() {
    if (process.client) {
      const marquee2 = document.querySelector("#heroMarguee");
      this.animateMarquee(marquee2, 15000);
    }
  },
  methods: {
    animateMarquee(el, duration) {
      if (process.client) {
        const innerEl = el.querySelector(".marquee__inner");
        const innerWidth = innerEl.offsetWidth;
        const cloneEl = innerEl.cloneNode(true);
        el.appendChild(cloneEl);

        let start = performance.now();
        let progress;
        let translateX;

        requestAnimationFrame(function step(now) {
          progress = (now - start) / duration;

          if (progress > 1) {
            progress %= 1;
            start = now;
          }

          translateX = innerWidth * progress;

          innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
          cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
          requestAnimationFrame(step);
        });
      }
    },
  },
};
</script>

<style>
.marquee {
  overflow: hidden;
  font-size: 0;
  font-family: sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: default;
  user-select: none;
}

.marquee__inner {
  font-size: 2rem;
  white-space: nowrap;
  display: inline-block;
}
</style>
