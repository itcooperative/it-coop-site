<template>
  <button
    class="relative"
    v-on:mouseover="animate_start"
    :class="[
      invert
        ? 'border-2  text-white bg-black border-black px-[48px] py-[12px]  md:text-xl'
        : 'border-2  border-black px-[48px] py-[12px]  md:text-xl',
    ]"
  >
    <div
      :class="[animate_class]"
      class="absolute w-0 left-0 bg-black top-0 bottom-0"
    ></div>

    <slot></slot>
  </button>
</template><script>
import { string } from "io-ts";

export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
      animate: { type: string, default: "translate" },
    },
  },
  data: function () {
    return { animate_class: "" };
  },
  methods: {
    animate_start() {
      if (this.animate_class) {
        this.animate_class = "";
      } else {
        this.animate_class = "translate";
      }
    },
  },
};
</script>
<style>
.translate:hover {
  color: white;
  animation-name: translate;
  animation-duration: 1s;
}

@keyframes translate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
