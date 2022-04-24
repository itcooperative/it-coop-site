<template>
  <header class="py-2" :style="`background: ${data.Background}`">
    <div class="flex items-center px-3 sm:px-8 justify-between relative">
      <NuxtLink to="/"> <PrismicImage :field="data.Logo" /> </NuxtLink>

      <nav>
        <ul>
          <li
            v-for="menuLink in $store.state.menu.menu_links"
            :key="menuLink.id"
          >
            <prismic-link :field="menuLink.link">{{
              $prismic.asText(menuLink.label)
            }}</prismic-link>
          </li>
        </ul>
      </nav>
      <PrismicRichText :field="data.GetContactsBtn" />
      <LangSwitcher />
    </div>
  </header>
</template>
<script>
import { components } from "~/slices";

export default {
  props: ["data", "altLangs"],
  data: function () {
    return { components };
  },
};
</script>
<style>
</style>
