<i18n lang="yaml">
ru:
  produce: 'Разработано it-coop'
  email: 'noda@itcoop.ru'
en:
  produce: 'Produced by it-coop'
  email: 'noda@itcoop.ru'
</i18n>
<template>
  <div
    class="
      bg-black
      sm:flex
      items-center
      justify-between
      py-2
      text-center
      sm:text-lefts
      px-8
    "
  >
    <div class="text-white text-xs sm:text-md">{{ $t("produce") }}</div>
    <a
      class="block text-white text-xs sm:text-md"
      :href="'mailto:' + $t('email')"
      >{{ $t("email") }}</a
    >
  </div>
</template>
<style>
</style>
