<template>
  <button
    class="relative overflow-hidden translate"
    :class="[
      invert
        ? 'border-2 hover:text-black duration-1000 text-white border-black px-[48px] py-[12px]  md:text-xl translate-invert'
        : 'border-2 hover:text-white duration-1000 border-black px-[48px] py-[12px]  md:text-xl translate',
    ]"
  >
    <span class="relative z-40"><slot></slot></span>

    <div
      :class="[invert ? 'translate_bg-invert' : 'translate_bg']"
      class="z-20 absolute w-full left-0 border-black bg-black top-0 bottom-0"
    ></div>
  </button>
</template><script>
export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
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
    animate_leave() {
      if (this.animate_class) {
        this.animate_class = "translate";
      } else {
        this.animate_class = "";
      }
    },
  },
};
</script>
<style>
.translate_bg {
  left: -100%;
}
.translate-invert:hover .translate_bg-invert {
  animation-name: translate;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.translate:hover .translate_bg {
  animation-name: translate;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
