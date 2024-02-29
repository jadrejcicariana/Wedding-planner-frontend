import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import MyplanView from '../views/MyplanView.vue'
import DetailsView from '../views/DetailsView.vue'
import ExpensesView from '../views/ExpensesView.vue'

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

  {
    path: '/details',
    name: 'details',
    component: DetailsView
  },

  {
    path: '/expenses',
    name: 'expenses',
    component: ExpensesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
