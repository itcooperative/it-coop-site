<template>
  <header>
    <div
      class="py-[24px] z-[15] relative"
      :style="`background: ${data.Background}`"
    >
      <div
        class="flex items-center container mx-auto px-3 justify-between relative"
      >
        <NuxtLink to="/"> <PrismicImage :field="data.Logo" /> </NuxtLink>
        <div class="hidden">
          <img src="/menu.svg" alt="" />
        </div>
        <div class="justify-end items-center flex">
          <nav class="hidden md:block">
            <ul>
              <li
                v-for="menuLink in $store.state.menu.menu_links"
                :key="menuLink.id"
                class="px-8 py-2"
              >
                <NuxtLink
                  :to="
                    '/' + $store.state.lang.current + '/' + menuLink.link.slug
                  "
                  class="md:text-lg"
                  >{{ $prismic.asText(menuLink.label) }}</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <BtnDefault class="mx-4 hidden md:block">
            <span @click="scrollToContact" class="curor-pointer">
              <PrismicRichText :field="data.GetContactsBtn" />
            </span>
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
    </div>

    <div
      v-show="showMenu"
      @click="showMenu = false"
      class="absolute border-black border-t-2 border-b-2 py-8 w-full z-20"
      :style="`background: ${data.Background}`"
    >
      <nav>
        <ul>
          <li
            v-for="menuLink in $store.state.menu.menu_links"
            :key="menuLink.id"
            class="px-8 py-4 md:py-2"
          >
            <NuxtLink
              :to="'/' + $store.state.lang.current + '/' + menuLink.link.slug"
              class="text-xl block"
              >{{ $prismic.asText(menuLink.label) }}</NuxtLink
            >
          </li>
          <li class="px-8 py-4 md:py-2">
            <span @click="scrollToContact" class="curor-pointer text-xl block">
              <PrismicRichText :field="data.GetContactsBtn" />
            </span>
          </li>
        </ul>
      </nav>
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
  methods: {
    scrollToContact() {
      // Проверка, существует ли элемент
      const element = document.getElementById("contacts");
      if (element) {
        // Плавный скроллинг к элементу
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style>
</style>
