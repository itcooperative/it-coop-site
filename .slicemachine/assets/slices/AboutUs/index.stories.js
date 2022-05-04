import MyComponent from '../../../../slices/AboutUs';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutUs'
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
      mock: {"variation":"default","name":"Default","slice_type":"about_us","items":[{"title":[{"type":"heading2","text":"Redefine cross-platform web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Velit nulla in ex aliquip ut sunt occaecat ut aute pariatur officia enim ea in. Nostrud ea labore ad fugiat.","spans":[]}],"background":"#70cc5d"},{"title":[{"type":"heading2","text":"Synthesize out-of-the-box web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Ut laboris exercitation consequat fugiat in aute ullamco voluptate et ex. Et ut laborum id.","spans":[]}],"background":"#3d7af9"},{"title":[{"type":"heading2","text":"Envisioneer enterprise eyeballs","spans":[]}],"description":[{"type":"paragraph","text":"Culpa fugiat nulla cupidatat et ut magna labore veniam nisi ad occaecat amet laborum id. Consectetur mollit non sint ex deserunt ad pariatur ipsum dolor.","spans":[]}],"background":"#021dea"},{"title":[{"type":"heading2","text":"Brand compelling interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Laboris ullamco officia consequat adipisicing amet consequat. Qui est pariatur veniam ullamco sint fugiat labore laborum cupidatat.","spans":[]}],"background":"#848259"},{"title":[{"type":"heading2","text":"Harness world-class functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Labore aliquip amet aliqua deserunt qui ea. Elit minim ullamco ipsum anim velit nostrud nostrud. Elit fugiat consequat eu id sunt ipsum ad in sunt ullamco.","spans":[]}],"background":"#3f3fe0"}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
