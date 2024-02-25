import { createRouter, createWebHistory } from 'vue-router/auto'

import Home from '../pages/index.vue'
import About from '../pages/about/index.vue'


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
  ]
})

export default router
