import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"title":[{"type":"paragraph","text":"Elit ut consectetur proident. Ex sint occaecat aute sunt velit tempor laborum. Laborum deserunt Lorem velit ad.","spans":[]}],"description":[{"type":"paragraph","text":"Sunt sunt nostrud sunt quis id velit reprehenderit. Quis magna tempor fugiat officia nulla id culpa eiusmod deserunt aliqua et exercitation ex quis. Laboris aliquip officia irure excepteur enim consectetur proident enim.","spans":[]}],"BannerText":[{"type":"paragraph","text":"Aliqua ex culpa sunt cillum pariatur.","spans":[]}],"Background":"#377f28","status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
