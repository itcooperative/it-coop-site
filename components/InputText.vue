<template>
  <div class="input relative">
    <input
      :required="required"
      :name="name"
      v-model="content"
      type="text"
      class="input bg-transparent border-b-2 border-black text-black py-2 placeholder:text-red placeholder:text-xl outline-none w-full z-40 relative"
    />
    <label
      :class="[contain ? 'contain' : '']"
      class="absolute lg:text-xl font-medium bottom-[10px] left-0 z-0"
      for=""
      >{{ placeholder }}</label
    >
  </div>
</template>
<script>
export default {
  props: {
    placeholder: String,
    name: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return { content: "" };
  },
  computed: {
    contain() {
      if (this.content.length) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style  scoped>
.input::placeholder {
  color: black;
  opacity: 1;
  font-weight: 500;
}

.contain {
  transform: scale(0.5) translate(0, -25px);
  transition: 0.3s;
  transform-origin: top left;
}
.input:focus ~ label {
  transform: scale(0.5) translate(0, -25px);
  transition: 0.5s;
  transform-origin: top left;
}
</style>
