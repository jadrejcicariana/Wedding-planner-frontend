import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import MyplanView from '../views/MyplanView.vue'
import DetailsView from '../views/DetailsView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import GuestsView from '../views/GuestsView.vue'
import { Auth } from '../services'

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

  {
    path: '/guests',
    name: 'guests',
    component: GuestsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  const publicViews = ['/', '/login', '/signup']
  const needsLogin = !publicViews.includes(to.path)
  const user = Auth.getUser()

  if (needsLogin && !user) {
    next('/')
    return
  }
  else if (!needsLogin && user) {
    next('/myplan')
    return
  }
  next()
})

export default router
