import { createRouter, createWebHashHistory } from 'vue-router'
import { beforeRoute, afterRoute } from './support'
import Layout from '../components/layout'
import Blank from '../components/layout/blank'
import Home from '../views/home/index'
import Regulex from '../views/tools/regex/regulex'
import Login from '../views/login'
import ErrorPage from '../views/error'

const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: 'regulex',
        name: 'regulex',
        component: Regulex,
        meta: { title: '图解正则表达式' }
      }
    ]
  },
  {
    path: '/blank',
    hidden: true,
    component: Blank,
    children: [
      {
        path: 'regulex_',
        name: 'regulex_',
        component: Regulex,
        meta: { title: '图解正则表达式' }
      }
    ]
  },
  {
    path: '/404',
    component: ErrorPage,
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => beforeRoute(to, from, next))
router.afterEach(() => afterRoute())

export default router
