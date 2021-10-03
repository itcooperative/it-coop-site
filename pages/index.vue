<i18n lang="yaml">
ru:
  start:
    title: 'IT-COOP'
    subtitle: 'Айтишечка для социалочки'
    descr: 'Делаем простые и сложные проекты: сайты, ботов, веб-приложения.'
    email: 'noda@itcoop.ru'
  partners:
    title: 'Мы работаем с НКО'
    items:
      hand-help: 'Hand-help'
      agora: 'Агора'
      blagie-dela: 'Благие дела'
      smothers: 'Солдатские матери Санкт-Петербурга'
      bellona: 'Беллона'
      cwatch: 'Гражданский контроль'
en:
  start:
    title: 'IT-COOP'
    subtitle: 'IT for social projects'
    descr: 'Make simple and complicate things: bots, sites, applications'
    email: 'noda@itcoop.ru'
  partners:
    title: 'We are work with NGO'
    items:
      hand-help: 'Hand-help'
      agora: 'Агора'
      blagie-dela: 'Благие дела'
      smothers: 'Солдатские матери Санкт-Петербурга'
      bellona: 'Беллона'
      cwatch: 'Гражданский контроль'
</i18n>
<template>
  <div class="container mx-auto">
    <Meta />
    <div class="h-screen">
      <div
        class="
          main
          overflow-hidden
          sm:grid sm:grid-cols-3
          lg:grid-cols-8
          sm:grid-rows-3
          mx-auto
          px-3
          sm:px-10
          py-10
        "
      >
        <div
          class="
            sm:col-span-1
            lg:col-span-2
            sm:row-span-1
            sm:h-full
            sm:row-start-1 sm:row-end-3
          "
        ></div>
        <div
          class="
            sm:col-span-1
            lg:col-span-4
            self-center
            sm:row-start-2
            sm:col-start-2
            sm:h-full
            flex
            align-center
            items-center
          "
        >
          <div class="center p-4">
            <h1 class="primary-font text-5xl lg:text-6xl text-center">
              {{ $t("start.title") }}
            </h1>
            <h2 class="h2 primary-font text-2xl lg:text-xl text-center pb-6">
              {{ $t("start.subtitle") }}
            </h2>
            <h2 class="h2 primary-font text-xl lg:text-xl text-center pb-6">
              {{ $t("start.descr") }}
            </h2>
            <div class="h2 primary-font text-3xl lg:text-3xl text-center">
              {{ $t("start.email") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="NPO" class="overflow-hidden sm:h-screen mx-auto py-10">
      <div class="sm:h-full">
        <H2>
          {{ $t("partners.title") }}
        </H2>
        <ul class="flex flex-wrap justify-center items-center my-10">
          <li
            v-for="(item, index) in partners"
            :key="index"
            class="partner-item mb-10"
          >
            <!-- <div class="partner-item_background">{{ item.name }}</div> -->
            <NuxtLink :to="item.url">
              <img :src="item.logo" :alt="item.name" class="px-5 w-48" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    partners() {
      return [
        {
          name: this.$t("items.hand-help"),
          url: "https://hand-help.ru/",
          logo: "/hand-help.png",
        },
        {
          name: this.$t("items.agora"),
          url: "https://hand-help.ru/",
          logo: "/agora.png",
        },
        {
          name: this.$t("items.memo"),
          url: "https://hand-help.ru/",
          logo: "/memo.png",
        },
        {
          name: this.$t("items.blagie-dela"),
          url: "https://hand-help.ru/",
          logo: "/blagie-dela.png",
        },
        {
          name: this.$t("items.smothers"),
          url: "https://hand-help.ru/",
          logo: "/smothers.png",
        },
        {
          name: this.$t("items.bellona"),
          url: "https://hand-help.ru/",
          logo: "/bellona.png",
        },
        {
          name: this.$t("items.cwatch"),
          url: "https://hand-help.ru/",
          logo: "/cwatch.png",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.partner-item {
  flex-basis: 50%;

  @media screen and (min-width: 500px) {
    flex-basis: 20%;
  }
}
</style>
