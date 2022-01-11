<i18n lang="yaml">
ru:
  menu:
    manifest: 'Манифест'
    npo: 'C кем работаем'
en:
  menu:
    manifest: 'Manifest'
    npo: 'Our partners'
</i18n>
<template>
  <header class="bg-black py-2 fixed top-0 w-full">
    <div class="flex items-center px-3 sm:px-8 justify-between relative">
      <nuxt-link to="/">
        <img src="/logo.svg" alt="" class="w-10" />
      </nuxt-link>

      <div class="flex items-center">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="text-white inline-block mr-8"
        >
          {{ locale.name }}
        </nuxt-link>
        <ul class="hidden sm:flex">
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="text-white ml-8"
          >
            <NuxtLink v-if="item.type === 'int'" :to="localePath(item.url)">{{
              item.name
            }}</NuxtLink>
            <a v-else :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
        <Icon
          icon="bx:bx-menu"
          class="text-white text-4xl sm:hidden"
          @click.native="
            isOpenMenu ? (isOpenMenu = false) : (isOpenMenu = true)
          "
        />
        <HeaderMobileMenu
          @clickNav="isOpenMenu = false"
          :menu="menu"
          :open="isOpenMenu"
        />
      </div>
    </div>
  </header>
</template>
<script>
import { Icon } from "@iconify/vue2";
import bxMenu from "@iconify/icons-bx/bx-menu";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      icons: {
        bxMenu,
      },
      isOpenMenu: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    menu() {
      return [
        { name: this.$t("menu.manifest"), url: "/manifest", type: "int" },
        { name: this.$t("menu.npo"), url: "/#NPO", type: "int" },
      ];
    },
  },
};
</script>
<style>
</style>
