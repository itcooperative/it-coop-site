import MyComponent from '../../../../slices/WriteUsSnippet';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/WriteUsSnippet'
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
      mock: {"variation":"default","name":"Default","slice_type":"write_us_snippet","items":[],"primary":{"title":[{"type":"paragraph","text":"Mollit do proident nostrud incididunt exercitation laboris quis deserunt sunt ad. Dolor laborum ea cupidatat ex ullamco et irure aliquip sunt.","spans":[]}],"BtnText":[{"type":"paragraph","text":"Id tempor incididunt consectetur cillum fugiat irure consequat do sint sit cillum ut dolor est aliquip. Id velit eu reprehenderit eiusmod eu adipisicing sit reprehenderit elit.","spans":[]}],"status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
