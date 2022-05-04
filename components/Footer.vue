<template>
  <div
    class="sm:flex justify-between py-8 px-8 border-t-2 border-black"
    :style="`background: ${data.Background}`"
  >
    <div>
      <PrismicRichText class="md:text-lg font-medium" :field="data.Email" />
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
