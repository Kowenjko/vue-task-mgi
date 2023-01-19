import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeafletView from '../views/LeafletView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/leaflet',
      name: 'leaflet',
      component: LeafletView,
    },
  ],
})

export default router
