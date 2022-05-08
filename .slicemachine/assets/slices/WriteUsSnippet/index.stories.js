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
      mock: {"variation":"default","name":"Default","slice_type":"write_us_snippet","items":[],"primary":{"title":[{"type":"paragraph","text":"Aliquip incididunt laborum officia sunt irure sit non non. Dolore ex mollit dolore sint exercitation est commodo non veniam sunt nisi non.","spans":[]}],"BtnText":[{"type":"paragraph","text":"Tempor ullamco cupidatat ex ullamco enim. Id cupidatat officia id. Laboris velit magna do.","spans":[]}],"BtnLink":{"link_type":"Web","url":"http://google.com"},"status":false},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
