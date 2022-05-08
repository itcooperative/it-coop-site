import MyComponent from '../../../../slices/SitePrice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SitePrice'
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
      mock: {"variation":"default","name":"Default","slice_type":"site_price","items":[],"primary":{"title":[{"type":"heading1","text":"Benchmark back-end e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Anim reprehenderit sunt cillum eiusmod commodo. In laborum est est quis anim adipisicing ut minim dolore ex laborum dolor excepteur. Eiusmod reprehenderit amet reprehenderit est id dolor consequat tempor tempor quis fugiat.","spans":[]}],"Background":"#84c0d9","status":false},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
