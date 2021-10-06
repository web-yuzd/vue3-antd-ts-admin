/**
 * 物流服务模块路由
 * @Author: jerryyu
 * @Date: 2021-09-30 22:56:28
 * @Last Modified by: jerryyu
 * @Last Modified time: 2021-10-06 23:31:03
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const logistics: Array<RouteRecordRaw> = [
  {
    path: '/logistics',
    component: Layout,
    name: 'Logistics',
    redirect: 'noredirect',
    meta: {
      title: '系统配置',
      icon: 'icon-xitongpeizhi'
    },
    children: [
      {
        path: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/system/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          noCache: true
        }
      },
      {
        path: 'roles',
        component: () => import(/* webpackChunkName: "roles" */ '@/views/system/roles/index.vue'),
        name: 'Roles',
        meta: {
          title: '角色管理',
          noCache: true
        }
      },
      {
        path: 'permission',
        component: () =>
          import(/* webpackChunkName: "permission" */ '@/views/system/roles/index.vue'),
        name: 'Permission',
        meta: {
          title: '权限管理',
          noCache: true
        }
      }
    ]
  }
]

export default logistics
