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
      mock: {"variation":"default","name":"Default","slice_type":"team","items":[{"Name":[{"type":"paragraph","text":"Irure enim pariatur ullamco sit minim esse occaecat. Nulla Lorem ullamco qui et fugiat culpa nostrud aliqua reprehenderit laboris adipisicing non. Eu sint excepteur eu ad amet sint id laborum duis dolor aliquip aliqua duis in et.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"Job":"iterate one-to-one methodologies","Descr":[{"type":"paragraph","text":"Magna fugiat ut sit sit officia cupidatat dolor culpa nisi non.","spans":[]}]},{"Name":[{"type":"paragraph","text":"Incididunt id aliqua commodo id deserunt et tempor id non do aliqua.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"Job":"incentivize synergistic web services","Descr":[{"type":"paragraph","text":"Velit veniam do duis mollit consectetur veniam mollit irure fugiat ea id Lorem laboris do.","spans":[]}]},{"Name":[{"type":"paragraph","text":"Sint commodo ad deserunt consequat. Laboris aliqua ex est consectetur do consectetur veniam consequat adipisicing pariatur cupidatat.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"Job":"expedite mission-critical deliverables","Descr":[{"type":"paragraph","text":"Dolore incididunt pariatur est incididunt consequat laborum labore adipisicing magna duis consequat proident.","spans":[]}]},{"Name":[{"type":"paragraph","text":"Sint dolor non consectetur ut esse quis ex aliqua aliqua sint cupidatat ex aute officia. Culpa eu cupidatat quis exercitation aliquip amet fugiat eu et deserunt occaecat minim duis.","spans":[]}],"Photo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"Job":"matrix transparent technologies","Descr":[{"type":"paragraph","text":"Id non aliquip enim nostrud eiusmod minim velit mollit et commodo laboris. Duis qui in ullamco.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Visualize 24/7 networks","spans":[]}],"description":[{"type":"paragraph","text":"Officia est consectetur qui tempor ut. In ipsum nisi proident magna cupidatat ipsum sit dolor quis ullamco. Ipsum exercitation culpa excepteur quis.","spans":[]}],"Background":"#6652e5","Show":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'