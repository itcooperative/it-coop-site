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
      mock: {"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"title":[{"type":"heading1","text":"Scale open-source deliverables","spans":[]}],"description":[{"type":"paragraph","text":"Eiusmod aliqua reprehenderit velit aute. Proident esse ex pariatur tempor. Sunt magna veniam et aliqua.","spans":[]}],"BannerText":[{"type":"paragraph","text":"Cupidatat duis ad proident sunt nisi consectetur consequat aliquip aute deserunt ut amet.","spans":[]}],"Background":"#9459f4","status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
