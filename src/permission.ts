/**
 * 权限控制
 * @Author: jerryyu
 * @Date: 2021-09-28 11:15:17
 * @Last Modified by: jerryyu
 * @Last Modified time: 2021-09-29 21:35:13
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { RouteLocationNormalized } from 'vue-router'
import { message } from 'ant-design-vue'
import router from '@/router'
import store from '@/store'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if (store.state.user.token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.state.user.roles.length === 0) {
        try {
          await store.dispatch('user/getUserInfo', undefined)
          const roles = store.state.user.roles
          console.log('roles', roles)
          store.dispatch('permission/generateRoutes', roles)
          store.state.permission.dynamicRoutes.forEach((route) => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (error) {
          store.dispatch('user/resetToken', undefined)
          message.error('Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    next(`/login?redirect=${to.path}`)
    NProgress.done()
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  NProgress.done()
})
