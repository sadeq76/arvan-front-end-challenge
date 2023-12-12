import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ArticleView from '@/views/ArticleView.vue'

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
      path: '/articles/page/:page(\\d+)',
      name: 'Articles',
      component: ArticleView,
      meta: { requiresAuth: true, layout: true },
      props: true
    }
  ]
})

router.beforeEach((to, _, next) => {
  // if (to.meta.requiresAuth) return next('/login')

  if (to.path === '/articles') return next('/articles/page/1')

  next()
})

export default router
