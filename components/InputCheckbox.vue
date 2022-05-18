<template>
  <div class="flex items-center">
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
  </div>
</template>
<script>
export default {
  props: ["label"],
};
</script>

