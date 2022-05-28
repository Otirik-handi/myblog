import {
  createRouter,
  createWebHistory
} from 'vue-router'

import store from "../store"

import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import('../views/Results.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  console.log("[router]", store.state.test)
  return true
})

export default router