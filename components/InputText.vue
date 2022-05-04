<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="
      bg-transparent
      border-b-3 border-black
      text-black
      placeholder:text-black placeholder:text-lg
    "
  />
</template>
<script>
export default {
  props: ["placeholder"],
};
</script>
