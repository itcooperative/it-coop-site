<template>
  <textarea
    type="text"
    :placeholder="placeholder"
    class="bg-transparent border-b-3 border-black text-black"
  />
</template>
<script>
export default {
  props: ["placeholder"],
};
</script>
