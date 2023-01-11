import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeafletView from '../views/LeafletView.vue'
import LeafletVue3View from '../views/LeafletVue3View.vue'

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
    {
      path: '/leaflet-v3',
      name: 'leaflet3',
      component: LeafletVue3View,
    },
  ],
})

export default router
