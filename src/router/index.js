import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Asiatisch from '../views/Asiatisch'
import Indisch from '../views/Indisch'
import Italienisch from '../views/Italienisch'
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
    path: '/asiatisch',
    name: 'Asiatisch',
    component: Asiatisch
  },
  {
    path: '/indisch',
    name: 'Indisch',
    component: Indisch
  },
  {
    path: '/italienisch',
    name: 'Italienisch',
    component: Italienisch
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
