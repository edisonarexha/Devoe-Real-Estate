import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { onAuthStateChanged, getAuth } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/login',
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
  {
    path: '/houses-view',
    name: 'houses-view',
    component: () => import( '../views/Houses/HousesPage')
  },
  {
    path: '/flats-view',
    name: 'flats-view',
    component: () => import('../views/Flats/FlatsPage')
  },
  {
    path: '/offices-view',
    name: 'offices-view',
    component: () => import('../views/Offices/Offices')
  },
  {
    path: '/ViewFlat',
    name: 'ViewFlat',
    component: () => import('../views/Flats/ViewFlat')
  },
  {
    path: '/ViewHouse',
    name: 'ViewHouse',
    component: () => import('../views/Houses/ViewHouse')
  },
  {
    path: '/ViewOffice',
    name: 'ViewOffice',
    component: () => import('../views/Offices/ViewOffice')
  },
   {
     path: '/add-view',
     name: 'add-view',
     component: () => import('../views/Offices/AddOffices')
   },
  //  {
  //   path: '/offices-view',
  //   name: 'offices-view',
  //   component: () => import('../views/Offices/Offices')
  // },

 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {

  onAuthStateChanged(getAuth(), (user) => {
    if (to.matched.some((record) => record.meta.isAuthenticated && !user)) {
      next("/login-view");
    }
  });

  next();
});

export default router
