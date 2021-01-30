<template>
  <div class="main h-screen sm:grid sm:grid-cols-3 sm:grid-rows-3 mx-auto px-3 sm:px-10 py-10">
    <div class="sm:col-span-1 sm:row-span-1 sm:h-full sm:border-r-4 border-dashed border-black	sm:row-start-1 sm:row-end-3">
      <h1 class="h1 w-full text-center primary-font text-6xl lg:text-6xl text-opacity-75 font-bold p-4 sm:border-t-4 sm:border-l-4 sm:border-b-4 border-dashed border-black	">Itcoop</h1>
    </div>
    <div class=" sm:col-span-1 self-center sm:row-start-2 sm:col-start-2 sm:h-full border-black flex align-center border-dashed border-black flex items-center">
      <div class="center p-4 sm:border-b-4  sm:border-t-4 border-dashed border-black	">
        <h2 class="h2 primary-font text-xl  lg:text-3xl text-center pb-5">Айтишечка для социалочки</h2>
        <h3 class="h2 primary-font text-xl  lg:text-3xl text-center">Делаем простые и сложные проекты: сайты, ботов, веб-приложения.</h3>
        <div class="radius"></div>
      </div>
    </div>
    <div class="sm:col-span-1  sm:row-start-2 sm:row-end-4 sm:col-start-3 sm:border-l-4 border-black border-dashed flex items-end justify-center">
      <h3 class="h2 text-lg mt-4 font-semibold text-center  p-2 sm:p-4 border-2 sm:border-r-4 sm:border-l-0  sm:border-t-4 sm:border-b-4 border-dashed border-black 	sm:w-full"><a  class="text-2xl sm:text-3xl" href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></h3>
    </div>
  </div>

</template>

<script>
import Body from "../components/Body";
import Footer from "../components/Footer";
export default {
  components: {Footer, Body}
}
</script>

<style lang="scss" scoped>

.center {
  position: relative;

  @media (min-width: 640px) {
    .radius {
      position: absolute;
      border-radius: 100px;
      border-right: 4px dashed hsl(0deg 0% 0%);
      border-left: 4px dashed hsl(0deg 0% 0%);
      border-top: 4px dashed hsl(0deg 0% 0%);
      border-bottom: 4px dashed hsl(0deg 0% 0%);
      width: 40px;
      left: -22px;
      bottom: -22px;
      height: 40px;
    }
    &:before{
      content: "";
      border-top: 4px dashed hsl(0deg 0% 0%);
      width: 25%;
      position: absolute;
      right: -25%;
      top: -4px;
    }
    &:after{
      content: "";
      border-top: 4px dashed hsl(0deg 0% 0%);
      width: 25%;
      position: absolute;
      left: -25%;
      bottom: -5px;
    }
  }


}
.main {
  background-image: url('~assets/images/bg-phone.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 640px) {
    background-image: url('~assets/images/bg.png');
  }
}
</style>
