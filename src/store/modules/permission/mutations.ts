import { MutationTree } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { IPermissionState } from './state'
import { constantRoutes } from '@/router'

export type Mutations<S = IPermissionState> = {
  setRoutes(state: S, routes: RouteRecordRaw[]): void
}

export const mutations: MutationTree<IPermissionState> & Mutations = {
  setRoutes: (state: IPermissionState, routes: RouteRecordRaw[]): void => {
    state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }
}
