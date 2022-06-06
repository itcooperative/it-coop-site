import MyComponent from '../../../../slices/Projects';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Projects'
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
      mock: {"variation":"default","name":"Default","slice_type":"projects","items":[{"background":"#45b130","title":[{"type":"heading2","text":"Generate front-end networks","spans":[]}],"client":[{"type":"paragraph","text":"Esse commodo Lorem ea dolor do.","spans":[]}],"description":[{"type":"paragraph","text":"Mollit ipsum Lorem consequat. Velit Lorem elit tempor laborum cillum commodo voluptate elit excepteur fugiat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"WhatWeDo":"enable clicks-and-mortar web-readiness","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"background":"#335d60","title":[{"type":"heading2","text":"Deploy innovative paradigms","spans":[]}],"client":[{"type":"paragraph","text":"Eu qui exercitation aute laboris aute.","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum nostrud cupidatat sit ad est qui. Sunt ullamco id veniam ipsum sit dolor exercitation excepteur tempor fugiat labore.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"WhatWeDo":"syndicate bricks-and-clicks infrastructures","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"http://google.com"}},{"background":"#84626e","title":[{"type":"heading2","text":"Scale collaborative models","spans":[]}],"client":[{"type":"paragraph","text":"Labore in qui culpa exercitation magna. Ex enim quis ipsum dolor dolor magna fugiat.","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate duis dolore adipisicing ea occaecat cupidatat eiusmod culpa excepteur duis laborum et veniam est. Voluptate adipisicing nisi nulla consectetur id Lorem irure cillum qui Lorem id.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"WhatWeDo":"empower sticky relationships","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"showalllink":{"link_type":"Web","url":"http://google.com"},"ShowAllText":[{"type":"paragraph","text":"Aute irure dolore adipisicing non minim.","spans":[]}],"Background":"#bb01b7","status":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _ProjectsIndex = () => ({
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
      mock: {"variation":"projectsIndex","name":"Projects Index","slice_type":"projects","items":[{"background":"#3a1a78","title":[{"type":"heading2","text":"Optimize robust applications","spans":[]}],"client":[{"type":"paragraph","text":"Nulla deserunt do exercitation in adipisicing mollit deserunt sit. Anim aliquip ut reprehenderit.","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit eiusmod nulla labore cillum. Esse eu amet laborum. In minim ea amet nostrud proident aliqua reprehenderit reprehenderit enim.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"WhatWeDo":"disintermediate synergistic supply-chains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"}},{"background":"#fd426b","title":[{"type":"heading2","text":"Iterate viral paradigms","spans":[]}],"client":[{"type":"paragraph","text":"Nulla do enim irure culpa enim sit ea tempor ex elit ex cillum dolor. Incididunt proident velit do.","spans":[]}],"description":[{"type":"paragraph","text":"Enim aute excepteur ut. Culpa excepteur sit cillum magna non.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"WhatWeDo":"streamline cutting-edge relationships","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"}},{"background":"#7b3aef","title":[{"type":"heading2","text":"Deliver sticky metrics","spans":[]}],"client":[{"type":"paragraph","text":"Nulla sint est sit Lorem cillum deserunt non anim mollit in. Eu cupidatat et dolor adipisicing consequat exercitation culpa ea exercitation consequat commodo nisi officia.","spans":[]}],"description":[{"type":"paragraph","text":"In ea nostrud incididunt laborum id velit officia commodo est commodo sunt ea occaecat esse. Incididunt id sit officia cupidatat cillum aliquip velit officia nostrud mollit do adipisicing aute.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"WhatWeDo":"innovate intuitive infrastructures","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}}],"primary":{"status":true},"id":"_ProjectsIndex"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ProjectsIndex.storyName = 'Projects Index'
