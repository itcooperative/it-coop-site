<template>
  <ul
    :class="[open ? 'show' : 'close']"
    class="menu w-4/5 absolute h-screen bg-black py-4"
    style="top: 100%"
  >
    <li
      v-for="(item, index) in menu"
      :key="index"
      class="text-white text-lg py-4 px-3 shadow-md"
      @click="$emit('clickNav')"
    >
      <NuxtLink v-if="(item.type = 'int')" :to="item.url">{{
        item.name
      }}</NuxtLink>
      <a v-else :href="item.url">{{ item.name }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  transition: "slide-bottom",
  props: {
    menu: Array,
    open: Boolean,
  },
  data() {
    return {};
  },
};
</script>
<style  lang="scss">
.menu {
  left: -100%;
}
.show {
  left: 0;
  animation: show 0.5s;
}
.close {
  left: -100%;

  animation: close 0.5s;
}
@keyframes show {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes close {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
