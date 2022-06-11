import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Asiatisch from '../views/Asiatisch'
import Indisch from '../views/Indisch'

const routes = [
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
    path: '/asiatisch',
    name: 'Asiatisch',
    component: Asiatisch
  },
  {
    path: '/indisch',
    name: 'Indisch',
    component: Indisch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
