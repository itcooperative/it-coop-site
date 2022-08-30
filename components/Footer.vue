<template>
  <div
    class="sm:flex justify-between pt-4 pb-8 px-8 border-t-2 border-black"
    :style="`background: ${data.Background}`"
  >
    <div>
      <a :href="'mailto:' + $prismic.asText(data.Email)">
        <PrismicRichText
          class="md:text-lg font-medium mb-2"
          :field="data.Email"
      /></a>

      <span class="break-all mb-2 block text-sm sm:text-lg">
        {{ data.IdKey }}
      </span>
      <span class="break-all block text-sm sm:text-lg">
        {{ data.Fingerprint }}
      </span>
      <PrismicRichText class="md:text-lg font-medium" :field="data.Telegram" />
    </div>
    <PrismicRichText
      class="md:text-lg font-medium pt-10 sm:pt-0"
      :field="data.Copyright"
    />
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
