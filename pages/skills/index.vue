<template>
  <div class="justify-center items-center flex bg-gradient-to-br from-brand-first to-brand-second flex-col mx-auto px-4 py-24">
    <div class="container flex-col ">
      <div class="py-3 pb-10 text-center">
        <NuxtLink class=" text-3xl text-white" to="/">Назад</NuxtLink>
      </div>
    <div class="text-left text-lg  text-white max-w-2xl">IT-кооператив «Noda»​ - это объединение IT-специалистов из разных городов России, разделяющих
      либертарные ценности: мы не используем наемный труд, общие вопросы решаем совместно на
      собраниях, получаем равную оплату, напрямую зависящую от потраченного времени.</div>
    <div class="text-xl font-semibold text-white text-center pt-10">
      Что мы можем:
    </div>
    <ul class="text-left py-5 max-w-md leading-8 list-disc" >
      <li class="text-white">Сайт «под ключ»: лендинг, портал, интернет-магазин</li>
      <li class="text-white">Веб-приложение, игру, анимацию</li>
      <li class="text-white">Телеграм-бота</li>
      <li class="text-white">Мобильное приложение для Android</li>
      <li class="text-white">Получить, обработать  и проанализировать данные со сторонних сайтов</li>
      <li class="text-white">Оптимизировать скорость загрузки сайта</li>
      <li class="text-white">Настроить кассу, платежный сервис, сбор средств и пожертвований</li>
      <li class="text-white">Проконсультировать по IT-инфраструктуре</li>
      <li class="text-white">Оказать техподдержку существующим и разработанным нами проектам</li>
    </ul>
      <div class="text-lg font-semibold text-white text-center py-10">Интересно? пишите нам на <a href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></div>

      <div class="text-left text-white max-w-2xl text-lg font-medium pt-5">
      На данный момент в кооперативе 10 участников, большинство из которых являются профессионалами
      в своей области компетенции, имеют большой опыт работы (от 5 лет). Все участники заинтересованы в
      работе в социальной сфере: с НКО, профсоюзами, гражданскими низовыми инициативами. Такие
      проекты являются для нас приоритетными, многие участники уже имели опыт работы в этой сфере.
      Мы готовим общее портфолио, но готовы выслать подробное портфолио под конкретный проект.
      </div>
      <hr>
      <div class="text-xl font-semibold  max-w-md text-white text-center pt-10">
        У нас также налажена связь с другими коллективами в смежных областях:
      </div>
      <ul class="text-left py-5 max-w-md leading-8 list-disc" >
        <li class="text-white">Цифровое искусство: анимационный дизайн, 3D графика, оформление выставок, концертов,
      спектаклей и других культурных мероприятий</li>
        <li class="text-white">Фото- и видеосъемка (студия, репортаж, художественная), монтаж</li>
        <li class="text-white">Онлайн-трансляции, конференции, телемосты</li>
        <li class="text-white">Дизайн печатных материалов</li>
        <li class="text-white">Художественные иллюстрации</li>
        <li class="text-white">Контент, тексты, SEO</li>

      </ul>
    </div>
  </div>

</template>

<script>
import Body from "../../components/Body";
import Footer from "../../components/Footer";
export default {
  components: {Footer, Body}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
