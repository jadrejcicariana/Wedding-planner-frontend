import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import MyplanView from '../views/MyplanView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },

  {
    path: '/myplan',
    name: 'myplan',
    component: MyplanView
  },
/*   {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
