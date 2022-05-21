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
        <!-- <nav class="hidden md:block">
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
        <BtnDefault class="mx-4 hidden md:block">
          <NuxtLink :to="'/' + $store.state.lang.current + '/' + '#contacts'">
            <PrismicRichText :field="data.GetContactsBtn" />
          </NuxtLink>
        </BtnDefault>
        <LangSwitcher />
        <div class="ml-8 md:hidden">
          <img
            @click="showMenu ? (showMenu = false) : (showMenu = true)"
            src="/menu.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div
      v-show="showMenu"
      @click="showMenu = false"
      class="absolute border-black mt-1 border-t-2 border-b-2 py-8 w-full z-20"
      :style="`background: ${data.Background}`"
    >
      <!-- <nav>
        <ul>
          <li
            v-for="menuLink in $store.state.menu.menu_links"
            :key="menuLink.id"
            class="px-8 py-4 md:py-2"
          >
            <NuxtLink
              :to="'/' + $store.state.lang.current + '/' + menuLink.link.slug"
              class="text-lg md:text-lg"
              >{{ $prismic.asText(menuLink.label) }}</NuxtLink
            >
          </li>
        </ul>
      </nav> -->
       <NuxtLink
          invert
          :to="'/' + $store.state.lang.current + '/' + '#contacts'"
        >
        <BtnDefault invert class="mx-4">

          <PrismicRichText :field="data.GetContactsBtn" />
      </BtnDefault>
      </NuxtLink>
    </div>
    <div
      v-show="showMenu"
      @click="showMenu = false"
      class="fixed bg-black opacity-50 z-10 top-0 bottom-0 right-0 left-0"
    ></div>
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
