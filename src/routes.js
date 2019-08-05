import allStories from './components/allStories.vue'
import singleStory from './components/singleStory.vue'

export default[
  {path: '/', component: allStories},
  {path: '/story/:id', component: singleStory},
]
