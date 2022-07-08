<template>
  <section class="pb-20 sm:pb-32" v-if="slice.primary.status ? true : false">
    <div class="container mx-auto px-3">
      <H2 class="mb-4 text-lg sm:text-lg">
        <PrismicRichText :field="slice.primary.title" />
      </H2>
      <div class="mt-3">
        <BtnDefault>
          <NuxtLink :to="'/' + $store.state.lang.current + '#contacts'">
            {{ $prismic.asText(slice.primary.BtnText) }}
          </NuxtLink>
        </BtnDefault>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "WriteUsSnippet",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
</style>
