<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="
      input
      bg-transparent
      border-b-2 border-black
      text-black
      placeholder:text-red placeholder:text-lg
    "
  />
</template>
<script>
export default {
  props: ["placeholder"],
};
</script>
<style scoped>
.input::placeholder {
  color: black;
  opacity: 1;
}
</style>
