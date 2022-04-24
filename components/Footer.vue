<template>
  <div
    class="
      sm:flex
      items-center
      justify-between
      py-2
      text-center
      sm:text-lefts
      px-8
    "
    :style="`background: ${data.Background}`"
  >
    <PrismicRichText :field="data.Copyright" />
    <PrismicRichText :field="data.Email" />
    <PrismicRichText :field="data.Telegram" />
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
