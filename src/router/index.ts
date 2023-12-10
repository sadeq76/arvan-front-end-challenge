import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresAuth: false, layout: false }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: { requiresAuth: false, layout: false }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true, layout: true }
    }
  ]
})

export default router
