import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Kategorien from '../views/Kategorien'
import Restaurants from '../views/Restaurants'

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
    path: '/kategorien',
    name: 'Kategorien',
    component: Kategorien
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
