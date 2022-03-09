import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/login-view',
    name: 'login-view',
    component: () => import( '@/views/LoginView.vue'),
  },
  {
    path: '/register-view',
    name: 'register-view',
    component: () => import( '@/views/RegisterView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import( '@/views/ForgotPassword.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/header',
    name: 'header',
    component: () => import( '@/views/Header.vue')
  },
  {
    path: '/footer',
    name: 'footer',
    component: () => import( '@/views/Footer.vue')
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
