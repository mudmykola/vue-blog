import { createRouter, createWebHistory } from 'vue-router/auto'

import Home from '../pages/index.vue'
import About from '../pages/about/index.vue'
import Contact from '../pages/contact/index.vue'
import News from '../pages/news/index.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})

export default router
