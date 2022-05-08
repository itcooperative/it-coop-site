import MyComponent from '../../../../slices/FormContact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FormContact'
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
      mock: {"variation":"default","name":"Default","slice_type":"form_contact","items":[],"primary":{"title":[{"type":"heading1","text":"Recontextualize plug-and-play content","spans":[]}],"Background":"#91db67","InputName":[{"type":"paragraph","text":"Eu nostrud reprehenderit reprehenderit id cillum do enim duis aute. Aliqua elit amet tempor laborum et dolor esse incididunt. Fugiat Lorem cillum aliqua velit irure sunt ea.","spans":[]}],"InputContacts":[{"type":"paragraph","text":"Exercitation magna aliquip laborum officia eiusmod quis et aute proident id consectetur cillum. Nulla anim magna ipsum velit voluptate irure nostrud pariatur nulla proident incididunt.","spans":[]}],"InputMessage":[{"type":"paragraph","text":"Lorem laboris voluptate mollit pariatur sunt laborum ullamco proident ipsum aliquip. Deserunt ad qui aliqua magna occaecat ut.","spans":[]}],"PersonalData":[{"type":"paragraph","text":"Irure Lorem et exercitation nulla elit. Anim commodo do dolore eu consequat tempor amet elit anim ullamco nulla. In cupidatat pariatur sit.","spans":[]}],"SubmitBtn":[{"type":"paragraph","text":"Et do deserunt incididunt excepteur proident esse est proident ipsum anim quis veniam anim.","spans":[]}],"status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'