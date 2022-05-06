<template>
  <div class="flex items-center h-5">
    <input
      id="remember"
      type="checkbox"
      value=""
      class="
        w-4
        h-4
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
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
  </div>
</template>
<script>
export default {
  props: ["label"],
};
</script>

