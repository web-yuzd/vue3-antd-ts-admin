import { ActionTree, ActionContext } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { RootState } from '@/store/interface'
import { IPermissionState } from './state'
import { Mutations } from './mutations'
import { asyncRoutes } from '@/router'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<IPermissionState, RootState>, 'commit'>

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return (route.meta.roles as string[]).includes(role)
      }
    })
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]): RouteRecordRaw[] => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface Actions {
  generateRoutes({ commit }: AugmentedActionContext, roles: string[]): void
}

export const actions: ActionTree<IPermissionState, RootState> & Actions = {
  generateRoutes({ commit }, roles: string[]): void {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('setRoutes', accessedRoutes)
    // return routers
  }
}
