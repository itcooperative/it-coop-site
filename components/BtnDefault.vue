<template>
  <button
    :class="[
      invert
        ? 'border-2 text-white bg-black border-black px-5 py-2  md:text-xl hover:bg-transparent hover:text-black'
        : 'border-2 border-black px-5 py-2  md:text-xl hover:bg-black hover:text-white',
    ]"
  >
    <slot></slot>
  </button>
</template><script>
export default {
  props: { invert: { type: Boolean, default: false } },
};
</script>

