import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    { path: '/menu', name: 'menu', component: Public.Menu},
    { path: '/contact', name: 'contact', component: Public.contact},
    { path: '/apropos', name: 'apropos', component: Public.apropos},
    { path: '/resa', name: 'resa', component: Public.resa},
    
    //404
    { path: '/:pathMatch(.*)*', name: 'redirection', component: redirection},
  ]
})

export default router
