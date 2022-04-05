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
    path: '/app-view',
    name: 'app-view',
    component: () => import( '../components/HomePage'),
  },
  {
    path: '/register-view',
    name: 'register-view',
    component: () => import( '@/views/RegisterView.vue')
  },
  {
    path: '/about-view',
    name: 'about-view',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/header-view',
    name: 'header-view',
    component: () => import( '@/views/HeaderView.vue')
  },
  {
    path: '/footer-view',
    name: 'footer-view',
    component: () => import( '@/views/FooterView.vue')
  },
  {
    path: '/contact-view',
    name: 'contact-view',
    component: () => import( '@/views/ContactView.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: () => import( '@/views/AdminDashboard.vue')
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
