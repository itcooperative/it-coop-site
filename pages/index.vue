<template>
  <div class="h-screen justify-center items-center flex bg-gradient-to-br from-brand-first to-brand-second flex-col mx-auto px-4">
    <div class="primary-font text-6xl sm:text-8xl text-opacity-75 font-bold text-white ">Noda-IT</div>
    <div class="primary-font text-lg text-white text-center">Скоро здесь будет сайт нашего кооператива.</div>
    <div class="primary-font text-lg  text-white text-center">Мы умеем
      <NuxtLink class="underline font-semibold" to="/skills">немало.</NuxtLink>
    </div>
    <div class="text-lg  text-white text-center">
      Вы даже удивитесь, что в кооперативе такие спецы.
    </div>
    <div class="text-lg text-white text-center">
      Нам просто надоел наёмный труд.
    </div>
    <div class="text-lg pt-4 font-semibold text-white text-center">Интересно? Пишите нам на <a href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></div>
  </div>

</template>

<script>
import Body from "../components/Body";
import Footer from "../components/Footer";
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
