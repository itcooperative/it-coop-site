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
      mock: {"variation":"default","name":"Default","slice_type":"about_us","items":[{"title":[{"type":"heading2","text":"Matrix web-enabled experiences","spans":[]}],"description":[{"type":"paragraph","text":"Excepteur commodo laboris adipisicing amet eiusmod cillum irure nostrud ex.","spans":[]}],"background":"#57227d"},{"title":[{"type":"heading2","text":"Transform sticky metrics","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt anim deserunt minim qui amet cillum.","spans":[]}],"background":"#62ca58"},{"title":[{"type":"heading2","text":"Generate end-to-end niches","spans":[]}],"description":[{"type":"paragraph","text":"Ea occaecat culpa sunt et mollit elit magna excepteur irure do deserunt esse.","spans":[]}],"background":"#99dc86"},{"title":[{"type":"heading2","text":"Incubate bleeding-edge partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Ad veniam irure occaecat aute aute ipsum quis. Ipsum sint ad et mollit in laboris tempor proident labore qui mollit consequat non elit sunt.","spans":[]}],"background":"#74ba25"},{"title":[{"type":"heading2","text":"Utilize viral communities","spans":[]}],"description":[{"type":"paragraph","text":"Velit officia voluptate sit veniam cillum Lorem officia minim incididunt nisi sit laborum voluptate deserunt veniam.","spans":[]}],"background":"#37660a"}],"primary":{"status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
