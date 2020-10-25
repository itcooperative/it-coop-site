<template>
  <div class="h-screen justify-center items-center flex bg-gradient-to-r from-green-400 to-blue-400 flex-col mx-auto px-4">
    <div class="text-6xl font-bold text-white">Noda-it</div>
    <div class="text-lg font-semibold text-white">Скоро здесь будет наш сайт</div>
    <div class="text-lg font-semibold text-white">А пока пишите нам на <a href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></div>
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
