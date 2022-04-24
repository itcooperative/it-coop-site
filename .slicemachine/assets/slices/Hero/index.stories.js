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
      mock: {"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"title":[{"type":"heading1","text":"Syndicate scalable infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Enim in consectetur voluptate deserunt et.","spans":[]}],"BannerText":[{"type":"paragraph","text":"Occaecat irure tempor officia magna aute ad consectetur non dolor eu.","spans":[]}],"Background":"#2cf44b"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
