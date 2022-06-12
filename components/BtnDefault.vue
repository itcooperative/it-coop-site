<template>
  <button
    :class="[
      invert
        ? 'border-2 transition duration-500  text-white bg-black border-black px-[48px] py-[12px]  md:text-xl hover:bg-transparent hover:text-black'
        : 'border-2 transition duration-500  border-black px-[48px] py-[12px]  md:text-xl hover:bg-black hover:text-white',
    ]"
  >
    <slot></slot>
  </button>
</template><script>
export default {
  props: { invert: { type: Boolean, default: false } },
};
</script>

