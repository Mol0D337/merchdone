import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/models',
    name: 'Models',
    component: () => import('../views/Models.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
