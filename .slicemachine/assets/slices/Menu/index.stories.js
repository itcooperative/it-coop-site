import MyComponent from '../../../../slices/Menu';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Menu'
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
      mock: {"variation":"default","name":"Default","slice_type":"menu","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"Name":[{"type":"paragraph","text":"Eiusmod est cillum officia commodo. Est velit aliquip aliquip exercitation culpa officia est reprehenderit duis ea dolor ea minim occaecat. Deserunt commodo do ullamco velit laboris reprehenderit ullamco ea deserunt in tempor labore labore ullamco adipisicing.","spans":[]}]},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"Name":[{"type":"paragraph","text":"Magna proident ullamco ad cillum sint adipisicing qui. Nulla fugiat veniam laboris ipsum esse mollit id pariatur elit elit. Laboris Lorem nulla nostrud.","spans":[]}]}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
