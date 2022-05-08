<template>
  <section v-if="slice.primary.status ? 'true' : 'false'">
    <div class="sm:grid sm:grid-cols-2">
      <div
        class="flex"
        v-for="(item, i) in slice.items"
        :class="[i % 2 ? 'justify-start' : 'justify-end']"
        :key="`slice-item-${i}`"
        :style="`background: ${item.background}`"
      >
        <div
          class="container-half py-20"
          :class="[i % 2 ? 'pl-3 sm:pl-20 pr-3' : 'pr-3 sm:pr-20 pl-3']"
        >
          <PrismicRichText class="text-3xl font-bold" :field="item.title" />
          <PrismicRichText class="text-xl" :field="item.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "AboutUs",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.container-half {
  width: 100%;
}

@media (min-width: 640px) {
  .container-half {
    max-width: 320px;
  }
}
@media (min-width: 768px) {
  .container-half {
    max-width: 374px;
  }
}
@media (min-width: 1024px) {
  .container-half {
    max-width: 512px;
  }
}
@media (min-width: 1280px) {
  .container-half {
    max-width: 640px;
  }
}
</style>
