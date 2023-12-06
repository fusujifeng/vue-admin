import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue";

const publicRoutes=[
  {
    path: '/',
    name: 'app',
    component: App
  },

  {
    path: '/login',
    name: 'about',
    component: () => import('../views/Login/index.vue')
  }
]

//公开路由表
const router= createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:publicRoutes
})

export default router
