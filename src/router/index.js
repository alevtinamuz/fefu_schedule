import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: AppView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
