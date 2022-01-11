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
    descr: 'We make simple and complex stuff: bots, sites, web-appications.'
    email: 'noda@itcoop.ru'
  partners:
    title: 'We work with NGO'
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
    <div class="h-screen mx-auto">
      <div class="sm:h-full flex items-center justify-center">
        <div class="p-4">
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
            <a :href="'mailto:' + $t('start.email')">{{ $t("start.email") }}</a>
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
            <a :href="item.url" target="_blank">
              <img :src="item.logo" :alt="item.name" class="px-5 w-48" />
            </a>
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
          url: "https://business.agora.legal",
          logo: "/agora.png",
        },
        // {
        //   name: this.$t("items.memo"),
        //   url: "https://hand-help.ru/",
        //   logo: "/memo.png",
        // },
        {
          name: this.$t("items.blagie-dela"),
          url: "https://blagie-dela.ru",
          logo: "/blagie-dela.png",
        },
        {
          name: this.$t("items.smothers"),
          url: "https://soldiersmothers.ru",
          logo: "/smothers.png",
        },
        // {
        //   name: this.$t("items.bellona"),
        //   url: "https://hand-help.ru/",
        //   logo: "/bellona.png",
        // },
        {
          name: this.$t("items.cwatch"),
          url: "https://game.courtmonitoring.org",
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
