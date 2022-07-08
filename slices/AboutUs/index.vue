<template>
  <section class="about-us" v-if="slice.primary.status ? true : false">
    <div class="md:grid md:grid-cols-2">
      <div
        class="flex"
        v-for="(item, i) in slice.items"
        :class="[i % 2 ? 'justify-start' : 'justify-end']"
        :key="`slice-item-${i}`"
        :style="`background: ${item.background}`"
      >
        <div
          class="container-half pt-20 pb-40"
          :class="[i % 2 ? 'pl-3 md:pl-20 pr-3' : 'pr-3 md:pr-20 pl-3']"
        >
          <H2 class="pb-8"><PrismicRichText :field="item.title" /></H2>
          <PrismicRichText
            class="sm:text-xl leading-tight"
            :field="item.description"
          />
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

<style>
.about-us p {
  margin-bottom: 20px;
}
.container-half {
  width: 100%;
}
@media (min-width: 640px) {
  .container-half {
    max-width: 640px;
    margin: auto;
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

@media (min-width: 1536px) {
  .container-half {
    max-width: 768px;
  }
}
</style>
