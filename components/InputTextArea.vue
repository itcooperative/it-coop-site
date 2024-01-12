<template>
  <div class="relative">
    <textarea
      type="text"
      :required="required"
      :name="name"
      rows="1"
      v-model="content"
      class="textarea input py-2 bg-transparent border-b-2 border-black text-black outline-none placeholder:text-red placeholder:text-xl w-full font-medium z-40 relative overflow-hidden"
      @input="mixin_autoResize_resize"
    />
    <label
      :class="[contain ? 'contain' : '']"
      class="absolute lg:text-xl top-0 font-medium bottom-[10px] left-0 z-0"
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
  methods: {
    mixin_autoResize_resize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.setAttribute("style", "height", `${this.$el.scrollHeight}px`);
    });
  },
};
</script>
<style scoped>
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
.textarea:focus ~ label {
  transform: scale(0.5) translate(0, -25px);
  transition: 0.5s;
  transform-origin: top left;
}
</style>
