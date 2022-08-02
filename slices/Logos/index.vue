<template>
  <section
    v-if="slice.primary.status ? true : false"
    class="py-8 sm:py-12"
    :style="`background: ${slice.primary.Background}`"
  >
    <div id="logoMarguee" class="marquee">
      <div class="marquee__inner">
        <div
          class="mx-6 flex w-16 sm:w-auto items-center justify-center"
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
        >
          <PrismicImage class="max-h-10 max-w-32" :field="item.logo" />
        </div>
      </div>
    </div>
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
  mounted() {
    if (process.client) {
      const marquee2 = document.querySelector("#logoMarguee");
      this.animateMarquee(marquee2, 13000);
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
  display: inline-flex;
}
</style>
