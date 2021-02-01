<template>
  <div class="main overflow-hidden	h-screen sm:grid sm:grid-cols-3 lg:grid-cols-8 sm:grid-rows-3 mx-auto px-3 sm:px-10 py-10">
    <div class="sm:col-span-1 lg:col-span-2 sm:row-span-1 sm:h-full sm:border-r-4 border-dashed border-black	sm:row-start-1 sm:row-end-3">
      <h1 class="h1 pb-10 sm:pb-0 pt-10 sm:pt-0 w-full text-center primary-font text-6xl lg:text-6xl text-opacity-75 font-bold p-4 sm:border-t-4 sm:border-l-4 sm:border-b-4 border-dashed border-black	">Itcoop</h1>
    </div>
    <div class=" sm:col-span-1 lg:col-span-4 self-center sm:row-start-2 sm:col-start-2 sm:h-full border-black flex align-center border-dashed border-black flex items-center">
      <div class="center p-4 sm:border-b-4  sm:border-t-4 border-dashed border-black	">
        <h2 class="h2 primary-font text-xl  lg:text-3xl text-center pb-5">Айтишечка для социалочки</h2>
        <h3 class="h2 primary-font text-xl  lg:text-3xl text-center">Делаем простые и сложные проекты: сайты, ботов, веб-приложения.</h3>
        <div class="radius"></div>
      </div>
    </div>
    <div class="sm:col-span-1 lg:col-span-2 sm:row-start-2 sm:row-end-4 sm:col-start-3 sm:border-l-4 border-black border-dashed flex items-end justify-center">
      <h3 class="h2 text-lg mt-4 font-semibold text-center  p-2 sm:p-4 border-2 sm:border-r-4 sm:border-l-0  sm:border-t-4 sm:border-b-4 border-dashed border-black 	sm:w-full"><a  class="text-2xl sm:text-3xl" href="mailto:noda@itcoop.ru ">noda@itcoop.ru </a></h3>
    </div>
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="line-6"></div>
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
.line-1{
  width: 3px;
  height: 100%;
  transform: rotate(-12deg);
  background: #1400FF;
  position: fixed;
  top: 3%;
  z-index: -1;
  border-right: 2px dashed black;
  outline: 2px solid #1400FF;
  @media (min-width: 640px) {
    width: 3px;
    background: #1400FF;
    border: none;
    outline: none;
  }
}

.line-2{
  width: 3px;
  height: 157%;
  transform: rotate(-65deg);
  background: #FC2222;
  position: fixed;
  top: -11%;
  left: 37px;
  z-index: -1;
  border-right: 2px dashed black;
  outline: 2px solid #FC2222;
  display: none;
  @media (min-width: 640px) {
    width: 3px;
    background: #FC2222;
    border: none;
    outline: none;
    display: block;

  }
}

.line-3{
  width: 3px;
  height: 257%;
  background: #1400FF;
  position: fixed;
  left: 0;
  z-index: -1;
  border-right: 2px dashed black;
  outline: 2px solid #1400FF;
  transform: rotate(-35deg);
  top: -58%;

  @media (min-width: 640px) {
    width: 3px;
    background: #1400FF;
    border: none;
    outline: none;
    transform: rotate(-77deg);
    top: -49%;
  }
}

.line-4{
  width: 3px;
  height: 300%;
  transform: rotate(-61deg);
  background: #FC2222;
  position: fixed;
  top: -130%;
  right: 0;
  z-index: -1;
  border-right: 2px dashed black;
  outline: 2px solid #FC2222;

  @media (min-width: 640px) {
    top: -112%;
    width: 3px;
    background: #1400FF;
    border: none;
    outline: none;

  }
}

.line-5{
  width: 3px;
  height: 300%;
  transform: rotate(-31deg);
  background: #FC2222;
  position: fixed;
  right: 0;
  z-index: -1;
  border-right: 2px dashed black;
  outline: 2px solid #FC2222;
  top: -121%;

  @media (min-width: 640px) {
    width: 3px;
    background: #FC2222;
    border: none;
    outline: none;
    transform: rotate(-71deg);
    top: -114%;
  }
}

.line-6{
  height: 316%;
  transform: rotate(-20deg);
  outline: 2px solid #FC2222;
  background: #FC2222;
  position: fixed;
  right: 0;
  z-index: -1;
  top: -120%;
  border-right: 2px dashed black;
  display: none;

  @media (min-width: 640px) {
    top: -90%;
    width: 3px;
    background: #1400FF;
    border: none;
    outline: none;
    display: block;
  }
}

//.main {
//  background-image: url('~assets/images/bg-phone.png');
//  background-position: top;
//  background-repeat: no-repeat;
//  background-size: cover;
//  @media (min-width: 640px) {
//    background-image: url('~assets/images/bg.png');
//  }
//}
</style>
