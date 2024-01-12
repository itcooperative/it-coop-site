<template>
  <div>
    <div class="checkbox-form">
      <div class="answers">
        <label class="item">
          <span :for="name">{{ label }}</span>
          <input
            :required="required"
            :name="name"
            :id="name"
            v-model="checked"
            type="checkbox"
            :value="value"
            @change="onChange"
          />
          <span class="checkmark" />
        </label>
      </div>
    </div>
  </div>
  <!-- <div class="flex items-center">
    <input
      id="remember"
      value=""
      type="checkbox"
      class="
        form-checkbox
        border-gray-300 border-2
        text-black
        focus:border-gray-300 focus:ring-black
      "
    />

    <input
      id="remember"
      type="checkbox"
      value=""
      class="
        w-6
        h-6
        border border-gray-300
        bg-gray-50
        focus:ring-3 focus:ring-black
        dark:bg-gray-700
        dark:border-gray-600
        dark:focus:ring-black
        dark:ring-offset-gray-800
      "
      required
    />
    <label
      for="remember"
      class="ml-2 sm:text-xl font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
  </div> -->
</template>
<script>
export default {
  props: {
    label: String,
    name: String,
    value: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: [],
    };
  },
  methods: {
    onChange() {
      this.$emit("input", this.checked);
    },
  },
};
</script>

<style>
.checkbox-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkbox-form .answers {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}

.checkbox-form .item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1em;
  height: 21 px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

.checkbox-form .item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border: 2px solid #000;
  background-color: #fff;
}

.checkbox-form .item:hover input ~ .checkmark {
  border-color: #fff;
  transition: 0.3s;
}

.checkbox-form .item input:checked ~ .checkmark {
  background-color: #fff;
}

.checkbox-form .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-form .item input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-form .item .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
