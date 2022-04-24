<template>
  <section class="section" :style="`background: ${slice.primary.Background}`">
    <PrismicRichText :field="slice.primary.title" />
    <form action="">
      <input
        type="text"
        :placeholder="$prismic.asText(slice.primary.InputName)"
      />
      <input
        type="text"
        :placeholder="$prismic.asText(slice.primary.InputContacts)"
      />
      <input
        type="text"
        :placeholder="$prismic.asText(slice.primary.InputMessage)"
      />
      <label>{{ $prismic.asText(slice.primary.InputMessage) }}</label>
      <input type="checkbox" />
      <button type="submit">
        <PrismicRichText :field="slice.primary.SubmitBtn" />
      </button>
    </form>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FormContact",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
