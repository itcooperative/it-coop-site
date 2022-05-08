import MyComponent from '../../../../slices/Team';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Team'
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
      mock: {"variation":"default","name":"Default","slice_type":"team","items":[{"Name":[{"type":"paragraph","text":"Exercitation veniam adipisicing laborum adipisicing commodo magna adipisicing. Velit qui mollit magna cillum minim eiusmod enim et consectetur culpa sit do pariatur.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"Job":"recontextualize killer solutions","Descr":[{"type":"paragraph","text":"Ut Lorem voluptate esse. Adipisicing tempor consectetur occaecat laboris sint. Cillum pariatur enim deserunt.","spans":[]}]},{"Name":[{"type":"paragraph","text":"Aliqua aliqua adipisicing ullamco minim officia dolore in nostrud nostrud ipsum qui do qui.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"Job":"productize dynamic networks","Descr":[{"type":"paragraph","text":"Ut do veniam nisi quis duis. Aliquip magna consectetur veniam anim nostrud et ex commodo.","spans":[]}]},{"Name":[{"type":"paragraph","text":"Ex magna officia in tempor reprehenderit labore culpa eu. Occaecat eiusmod duis fugiat non nostrud incididunt id veniam in. Aliquip labore velit labore voluptate quis amet laborum fugiat.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"Job":"transition real-time markets","Descr":[{"type":"paragraph","text":"Nulla aute culpa laboris in in. Amet nisi consectetur aliquip ex mollit officia officia et laborum. Id enim sint incididunt sint anim aliquip non aute ad amet.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Drive visionary initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Est laborum aliqua dolor voluptate ullamco anim sunt magna ipsum quis ipsum amet enim eu. Cillum nisi eiusmod sit veniam. Aute sit consectetur est dolor nulla.","spans":[]}],"Background":"#b953b5","status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
