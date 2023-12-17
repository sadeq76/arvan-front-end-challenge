import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/login/LoginPage.vue'
import RegisterPage from '@/views/register/RegisterPage.vue'
import ArticlePage from '@/views/article/ArticlePage.vue'
import CreateArticlePage from '@/views/article/CreateArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: { requiresAuth: false, layout: false }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
      meta: { requiresAuth: false, layout: false }
    },
    // TODO: (code: 0006) remove question mark from this path
    {
      path: '/articles/page/:page(\\d+)?',
      name: 'Articles',
      component: ArticlePage,
      meta: { requiresAuth: true, layout: true },
      props: true
    },
    {
      path: '/articles/create',
      name: 'CreateArticle',
      component: CreateArticlePage,
      meta: { requiresAuth: true, layout: true }
    },
    {
      path: '/articles/edit/:slug',
      name: 'EditArticle',
      component: CreateArticlePage,
      meta: { requiresAuth: true, layout: true },
      props: true
    }
  ]
})

router.beforeEach((to, _, next) => {
  // if (to.meta.requiresAuth) return next('/login')

  if (to.path === '/' || to.path === '/articles') return next('/articles/page/1')

  next()
})

export default router
