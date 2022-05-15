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
      mock: {"variation":"default","name":"Default","slice_type":"projects","items":[{"background":"#24ebfa","title":[{"type":"heading2","text":"Strategize B2B portals","spans":[]}],"client":[{"type":"paragraph","text":"Ad ullamco do deserunt consequat cillum sint fugiat voluptate ex voluptate irure. Eiusmod consectetur esse pariatur ipsum ex eiusmod consequat voluptate incididunt commodo anim consequat excepteur nulla est. Ea qui pariatur incididunt eiusmod.","spans":[]}],"description":[{"type":"paragraph","text":"Sit consequat exercitation non sunt amet dolor adipisicing. Id consectetur aliqua nostrud exercitation ea.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"WhatWeDo":"engage customized mindshare","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"}},{"background":"#a9bad3","title":[{"type":"heading2","text":"Expedite dot-com technologies","spans":[]}],"client":[{"type":"paragraph","text":"Pariatur tempor excepteur sit deserunt.","spans":[]}],"description":[{"type":"paragraph","text":"Laboris duis duis magna pariatur laborum et elit nulla anim cupidatat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"WhatWeDo":"architect real-time initiatives","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},{"background":"#52264e","title":[{"type":"heading2","text":"Scale leading-edge schemas","spans":[]}],"client":[{"type":"paragraph","text":"Incididunt aliqua commodo fugiat. Tempor qui eu amet consectetur excepteur sint enim.","spans":[]}],"description":[{"type":"paragraph","text":"Velit enim nostrud est consequat proident minim deserunt nostrud ad duis deserunt est quis cupidatat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"WhatWeDo":"empower open-source supply-chains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},{"background":"#a9c3c1","title":[{"type":"heading2","text":"Recontextualize B2C eyeballs","spans":[]}],"client":[{"type":"paragraph","text":"Ut sunt sit cillum aliqua mollit fugiat sit laborum occaecat pariatur elit consectetur laboris magna. Cillum esse ipsum nostrud reprehenderit excepteur commodo.","spans":[]}],"description":[{"type":"paragraph","text":"Dolor Lorem officia Lorem occaecat duis cupidatat do sit culpa cupidatat dolor.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"WhatWeDo":"harness seamless supply-chains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},{"background":"#19ff10","title":[{"type":"heading2","text":"Envisioneer web-enabled schemas","spans":[]}],"client":[{"type":"paragraph","text":"Incididunt ullamco laborum minim mollit nostrud mollit enim ipsum sit consequat Lorem aute nostrud exercitation. Nulla laboris ea ea mollit ea cupidatat nisi eiusmod excepteur aliquip do anim. Minim labore incididunt aute est eu.","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum consectetur quis anim duis qui do exercitation duis sit qui sint laborum. Eu tempor eiusmod pariatur eu excepteur commodo ea officia quis commodo. Non fugiat duis commodo quis tempor Lorem do laborum reprehenderit fugiat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"WhatWeDo":"deliver B2B supply-chains","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}}],"primary":{"showalllink":{"link_type":"Web","url":"http://twitter.com"},"ShowAllText":[{"type":"paragraph","text":"Officia ea irure duis nisi deserunt culpa adipisicing labore irure. Dolore eiusmod ad elit dolore culpa eu sint.","spans":[]}],"Background":"#800d8e","status":false},"id":"_Default"}
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
      mock: {"variation":"projectsIndex","name":"Projects Index","slice_type":"projects","items":[{"background":"#92e663","title":[{"type":"heading2","text":"Whiteboard compelling metrics","spans":[]}],"client":[{"type":"paragraph","text":"Do laborum adipisicing dolore.","spans":[]}],"description":[{"type":"paragraph","text":"Magna commodo veniam nulla dolor ex commodo dolor amet tempor ad consequat sit.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"WhatWeDo":"target dot-com channels","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"}},{"background":"#0f6c59","title":[{"type":"heading2","text":"Implement rich deliverables","spans":[]}],"client":[{"type":"paragraph","text":"Reprehenderit aliquip voluptate minim do. Dolore sunt non ipsum incididunt mollit aliqua consectetur elit enim veniam sunt non anim ea.","spans":[]}],"description":[{"type":"paragraph","text":"Quis enim reprehenderit officia aliqua excepteur cillum culpa excepteur cillum amet. Velit excepteur nostrud elit anim enim nisi pariatur in velit commodo laboris in deserunt ea sunt. Deserunt id ex labore.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"WhatWeDo":"benchmark transparent e-business","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"}},{"background":"#dd801a","title":[{"type":"heading2","text":"Architect enterprise ROI","spans":[]}],"client":[{"type":"paragraph","text":"Do proident cillum veniam. Laborum laboris do sit.","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt cillum proident eiusmod non enim mollit sint quis commodo. Ad do commodo officia.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"WhatWeDo":"visualize compelling methodologies","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}}],"primary":{"status":false},"id":"_ProjectsIndex"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ProjectsIndex.storyName = 'Projects Index'
