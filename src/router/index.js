import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/PedidosView.vue')
  },
  { path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
