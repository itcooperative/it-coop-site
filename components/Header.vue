<template>
  <header class="py-2" :style="`background: ${data.Background}`">
    <div
      class="flex items-center container mx-auto px-3 justify-between relative"
    >
      <NuxtLink to="/"> <PrismicImage :field="data.Logo" /> </NuxtLink>
      <div class="hidden">
        <img src="/menu.svg" alt="" />
      </div>
      <div class="justify-end items-center flex">
        <!-- <nav>
          <ul>
            <li
              v-for="menuLink in $store.state.menu.menu_links"
              :key="menuLink.id"
              class="px-8 py-2"
            >
              <NuxtLink
                :to="'/' + $store.state.lang.current + '/' + menuLink.link.slug"
                class="md:text-lg"
                >{{ $prismic.asText(menuLink.label) }}</NuxtLink
              >
            </li>
          </ul>
        </nav> -->
        <BtnDefault class="mx-4">
          <NuxtLink :to="'/' + $store.state.lang.current + '/' + '#contacts'">
            <PrismicRichText :field="data.GetContactsBtn" />
          </NuxtLink>
        </BtnDefault>
        <LangSwitcher />
      </div>
      <div v-show="showMenu">
        <BtnDefault class="mx-4">
          <NuxtLink :to="'/' + $store.state.lang.current + '/' + '#contacts'">
            <PrismicRichText :field="data.GetContactsBtn" />
          </NuxtLink>
        </BtnDefault>
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>
<script>
import { components } from "~/slices";

export default {
  props: ["data", "altLangs"],
  data: function () {
    return { components, showMenu: false };
  },
};
</script>
<style>
</style>
