<template>
  <div class="justify-center items-center flex bg-gradient-to-r from-green-400 to-blue-400 flex-col mx-auto px-4 py-24">
    <div class="container flex-col ">
    <div class=" text-white text-center max-w-2xl">IT-кооператив «Noda»​ - это объединение IT-специалистов из разных городов России, разделяющих
      либертарные ценности: мы не используем наемный труд, общие вопросы решаем совместно на
      собраниях, получаем равную оплату, напрямую зависящую от потраченного времени.</div>
    <div class="text-xl font-semibold text-white text-center pt-5">
      Что мы можем делать:
    </div>
    <ul class="text-left py-5 max-w-md" >
      <li class="text-white">● Сайты «под ключ»: лендинги,
      порталы и интернет-магазины используя CMS (WordPress, Prismic и другие) и фреймворки
      Laravel, Next и Django.</li>
      <li class="text-white">● Веб-приложения, веб-игры, веб-анимация(любой сложности), интегрировать видео</li>
      <li class="text-white">● Настраивать кассы, платежные сервисы, сбор средств и пожертвований</li>
      <li class="text-white">● Оптимизировать загрузку сайта до зеленого показателя Google PageSpeed</li>
      <li class="text-white">● Телеграм-боты</li>
      <li class="text-white">● Мобильные приложения для Android c личным кабинетом, игры, обучающие приложения</li>
      <li class="text-white">● Получать, обрабатывать и анализировать больших массивов данных со сторонних сайтов</li>
      <li class="text-white">● Обеспечивать безопасность: защиту конфиденциальности данных, защиту от атак, серверную безопасность</li>
      <li class="text-white">● Настраивать и оптимизировать серверы</li>
      <li class="text-white">● Электронную очередь, системы оповещения, электронные терминалы, видеонаблюдение</li>
      <li class="text-white">● Консультировать по IT-инфраструктуре</li>
      <li class="text-white">● Оказывать поддержку существующим и разработанным нами проектам</li>
    </ul>
      <div class="text-lg font-semibold text-white text-center py-5">Интересно? пишите нам на <a href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></div>

      <div class=" text-white text-center max-w-2xl text-lg font-medium">
      На данный момент в кооперативе 10 участников, большинство из которых являются профессионалами
      в своей области компетенции, имеют большой опыт работы (от 5 лет). Все участники заинтересованы в
      работе в социальной сфере: с НКО, профсоюзами, гражданскими низовыми инициативами. Такие
      проекты являются для нас приоритетными, многие участники уже имели опыт работы в этой сфере.
      Мы готовим общее портфолио, но готовы выслать подробное портфолио под конкретный проект.
      </div>
      <hr>
      <div class="text-xl font-semibold  max-w-md text-white text-center pt-5">
        У нас также налажена связь с другими коллективами в смежных областях:
      </div>
      <ul class="text-left py-5 max-w-md" >
        <li class="text-white">● Цифровое искусство: анимационный дизайн, 3D графика, оформление выставок, концертов,
      спектаклей и других культурных мероприятий</li>
        <li class="text-white">● Фото- и видеосъемка (студия, репортаж, художественная), монтаж</li>
        <li class="text-white">● Онлайн-трансляции, конференции, телемосты</li>
        <li class="text-white">● Дизайн печатных материалов</li>
        <li class="text-white">● Художественные иллюстрации</li>
        <li class="text-white">● Контент, тексты, SEO</li>

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
