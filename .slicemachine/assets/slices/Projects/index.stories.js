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
      mock: {"variation":"default","name":"Default","slice_type":"projects","items":[{"background":"#910684","title":[{"type":"heading2","text":"Exploit cross-platform e-business","spans":[]}],"client":[{"type":"paragraph","text":"Officia dolor excepteur occaecat quis exercitation non excepteur exercitation.","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit in sit dolore dolor proident fugiat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"WhatWeDo":"scale transparent vortals","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"http://google.com"}},{"background":"#caa1a5","title":[{"type":"heading2","text":"Visualize integrated e-services","spans":[]}],"client":[{"type":"paragraph","text":"Lorem pariatur magna sint qui magna aliquip minim reprehenderit dolore pariatur minim labore irure.","spans":[]}],"description":[{"type":"paragraph","text":"Eiusmod elit in eiusmod velit laboris cupidatat commodo cillum consequat. Non culpa esse nulla aliquip aliqua duis nulla consectetur id ullamco quis.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"WhatWeDo":"disintermediate front-end web-readiness","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"showalllink":{"link_type":"Web","url":"https://slicemachine.dev"},"ShowAllText":[{"type":"paragraph","text":"Velit amet nostrud eu reprehenderit nulla culpa cupidatat duis laboris dolor sunt anim in sit.","spans":[]}],"Background":"#7c0136","status":false},"id":"_Default"}
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
      mock: {"variation":"projectsIndex","name":"Projects Index","slice_type":"projects","items":[{"title":[{"type":"heading2","text":"Enhance bleeding-edge web-readiness","spans":[]}],"client":[{"type":"paragraph","text":"Minim quis excepteur do cillum ullamco sunt.","spans":[]}],"description":[{"type":"paragraph","text":"Esse ut consectetur nostrud cupidatat excepteur sint officia ut. Tempor sit fugiat aliqua culpa labore cillum in reprehenderit.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"WhatWeDo":"brand revolutionary blockchains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"heading2","text":"Grow innovative niches","spans":[]}],"client":[{"type":"paragraph","text":"Sint velit deserunt nisi aliqua ullamco exercitation veniam mollit qui ullamco proident in velit dolore.","spans":[]}],"description":[{"type":"paragraph","text":"Veniam laborum elit est voluptate incididunt excepteur anim ad sit. Aliqua voluptate irure elit id aliquip laboris sunt ipsum aliquip magna irure proident.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"WhatWeDo":"brand out-of-the-box functionalities","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"heading2","text":"Whiteboard 24/7 eyeballs","spans":[]}],"client":[{"type":"paragraph","text":"Veniam ex sint eu adipisicing ut est nulla commodo. Consectetur sunt elit consectetur nostrud irure proident et nulla exercitation exercitation Lorem ex ipsum ut. Ad irure exercitation est sint nulla est tempor sit excepteur ad eu eu laborum occaecat occaecat.","spans":[]}],"description":[{"type":"paragraph","text":"Tempor in consequat deserunt incididunt ut.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"WhatWeDo":"deliver cross-media convergence","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"siteLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"status":false},"id":"_ProjectsIndex"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ProjectsIndex.storyName = 'Projects Index'
