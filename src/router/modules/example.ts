import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const example: Array<RouteRecordRaw> = [
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: '错误页面'
      // icon: '#icon404'
    },
    children: [
      {
        path: '401',
        component: () =>
          import(/* webpackChunkName: "error-page-401" */ '@/views/errorPage/404.vue'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () =>
          import(/* webpackChunkName: "errorPage-404" */ '@/views/errorPage/404.vue'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  }
]

export default example
