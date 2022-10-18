import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import games from '../views/games.vue'
import about from '../views/aboutRaptoreum.vue'
import chat from '../views/chat.vue'
import smartcontracts from '../views/smartcontracts.vue'
import statistics from '../views/statistics.vue'
import surveys from '../views/statistics.vue'
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
  },
  {
    path: '/games',
    name: 'games',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:games
  },
  {
    path: '/chat',
    name: 'chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:chat
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:about
  },
  {
    path: '/statistics',
    name: 'statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:statistics
  },
  {
    path: '/surveys',
    name: 'surveys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:surveys
  },
  {
    path: '/smartcontracts',
    name: 'smartcontracts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:smartcontracts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
