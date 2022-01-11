<i18n lang="yaml">
ru:
  title: 'О нас'
  text:
    start: 'IT-COOP'
    1st: ' - это кооператив it-специалистов. Нас угнетают реалии it-индустрии и наемного труда, как бы их не маскировали agile-практиками, а работников не засыпали деньгами. Мы бы хотели обратить наши знания и стек, во благо свободного мира без угнетения и эксплуатации — поэтому создали этот проект. '
    2st: 'Мы ценим свободный труд и участие в управлении, каждый участник коллектива обладает возможность принимать участие в управлении проектом. Мы выбрали непростой путь равенства зарплат и компенсация труда каждого участника исчисляется исходя из единой ставки умноженной на затраты времени.'
en:
  title: 'About us'
  text:
    start: 'IT-COOP'
    1st: ' is the project that unites leftist activists, web designers and web developers from Russia that would like to work on IT-solutions for non-commercial organizations, at the same time practicing equal envolvment in decisionmaking process, the same per-hour rates for any kind of work and common fund that is intended to support coop members and also other social projects in Russia. '
    2st: ' '

</i18n>
<template>
  <div class="container mx-auto h-screen">
    <Meta :title="$t('title')" :descr="$t('text.start') + $t('text.1st')" />

    <div class="sm:h-full mx-auto" style="max-width: 768px">
      <PageTitle>
        {{ $t("title") }}
      </PageTitle>
      <div>
        <p class="mb-4">
          <span class="text-xl sm:text-3xl">{{ $t("text.start") }}</span
          >{{ $t("text.1st") }}
        </p>
        <p>{{ $t("text.2st") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>
