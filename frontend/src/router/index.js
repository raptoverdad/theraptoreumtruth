import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: homeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loginView
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: registerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
