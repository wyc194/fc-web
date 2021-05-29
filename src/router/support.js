import NProgress from 'nprogress'
import Layout from '@/components/layout'
import router from '@/router'
import store from '@/store'
import { getToken } from '@/api/account/login'

/**
 * 由菜单集构建路由
 *
 * @param menus       菜单列表
 * @param firstLevel  是否一级菜单  default true
 * @returns {*}
 */
const buildRouters = (menus, firstLevel = true) => {
  menus.forEach((item) => {
    item.hidden = true
    item.meta = { title: item.title }
    item.path = '/'
    if (item.children && item.children.length > 0) {
      if (firstLevel) {
        item.component = Layout
      } else {
        item.component = Layout
      }
      item.redirect = '/' + item.children[0].link
      buildRouters(item.children, false)
    } else {
      item.path = '/' + item.link
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      item.component = () => import(/* webpackChunkName: "chunk-[request]" */'../views/' + item.link)
    }
  })
  return menus
}

/**
 * 路由前置处理
 *
 * @param router
 * @param to
 * @param from
 * @param next
 */
const loginUrl = '/login'
const whiteList = ['/login', '/404']
export const beforeRoute = async (to, from, next) => {
  NProgress.start()
  if (whiteList.includes(to.path)) {
    next()
    NProgress.done()
    return
  }

  const token = getToken()
  // token无效
  if (!token) {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`${loginUrl}?redirect=${encodeURIComponent(to.fullPath)}`)
    }
    NProgress.done()
    return
  }

  if (loginUrl === to.path) {
    next({ path: '/' })
    NProgress.done()
    return
  }

  const hasMenus = store.getters.menus && store.getters.menus.length > 0
  if (hasMenus) {
    next()
    NProgress.done()
    return
  }

  const menus = await store.dispatch('getUserInfo')
  if (!menus) {
    next('/404')
    NProgress.done()
    return
  }

  const accessRouters = buildRouters(menus)
  if (accessRouters.length === 0) {
    next('/404')
    NProgress.done()
    return
  }

  // 添加动态路由
  accessRouters.forEach(accessRouter => router.addRoute(accessRouter))

  next({ ...to, replace: true })
}

/**
 * 路由后置处理
 */
export const afterRoute = () => {
  NProgress.done()
}
