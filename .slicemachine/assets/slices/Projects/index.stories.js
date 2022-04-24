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
      mock: {"variation":"default","name":"Default","slice_type":"projects","items":[{"background":"#f0bceb","title":[{"type":"heading2","text":"Leverage intuitive infrastructures","spans":[]}],"client":[{"type":"paragraph","text":"Est velit sunt cupidatat laborum adipisicing officia consequat officia. Occaecat aliqua ad officia nostrud officia pariatur.","spans":[]}],"description":[{"type":"paragraph","text":"Eu exercitation laboris officia esse Lorem. In enim veniam deserunt aliquip commodo aliquip tempor exercitation laborum aliquip tempor cupidatat.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"WhatWeDo":"syndicate leading-edge channels","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"}},{"background":"#d8f5a9","title":[{"type":"heading2","text":"Transition cutting-edge experiences","spans":[]}],"client":[{"type":"paragraph","text":"Anim nisi aute nostrud. Quis mollit elit nulla aute laborum laboris magna ex excepteur. Incididunt fugiat sit proident ipsum duis.","spans":[]}],"description":[{"type":"paragraph","text":"Et laborum ipsum id aute incididunt.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"WhatWeDo":"innovate real-time platforms","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"}},{"background":"#2653b5","title":[{"type":"heading2","text":"Redefine real-time infrastructures","spans":[]}],"client":[{"type":"paragraph","text":"Irure velit nulla dolor sit mollit ipsum ipsum amet Lorem non. Ut cupidatat labore quis laborum consectetur esse laboris veniam.","spans":[]}],"description":[{"type":"paragraph","text":"Eiusmod exercitation nostrud magna do sunt id veniam est ad ullamco laboris occaecat. Nisi excepteur sunt consequat esse. Pariatur tempor officia quis ullamco nulla.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"WhatWeDo":"extend open-source applications","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"}},{"background":"#d0922e","title":[{"type":"heading2","text":"Cultivate impactful interfaces","spans":[]}],"client":[{"type":"paragraph","text":"Nulla commodo eiusmod proident duis tempor occaecat. Laborum amet aliqua eu proident aute occaecat reprehenderit. Qui qui duis quis.","spans":[]}],"description":[{"type":"paragraph","text":"Proident magna dolor consectetur. Et dolore anim do enim pariatur et nostrud do fugiat ullamco in quis anim. Nisi sint eu magna incididunt irure deserunt minim veniam cillum Lorem nostrud veniam fugiat id.","spans":[]}],"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"WhatWeDo":"repurpose next-generation schemas","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"}}],"primary":{"showalllink":{"link_type":"Web","url":"https://prismic.io"},"ShowAllText":[{"type":"paragraph","text":"Sunt nisi ex fugiat voluptate nisi adipisicing sint ex. Tempor eiusmod est dolore reprehenderit ex minim amet consequat voluptate cillum ea cillum voluptate in culpa. In exercitation eu in magna nostrud incididunt.","spans":[]}],"Background":"#f59add"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
