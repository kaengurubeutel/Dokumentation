import { createRouter, createWebHistory } from 'vue-router'

/* The code is creating a router instance using the `createRouter` function from the `vue-router`
library. */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/Amanda',
        name: 'amanda',
        component: () => import('../views/AmandaView.vue')
    },
    {
        path: '/Maxi',
        name: 'maxi',
        component: () => import('../views/MaxiView.vue')
    },
    {
        path: '/Lou',
        name: 'lou',
        component: () => import('../views/LouView.vue')
    },
  ]})

  export default router;