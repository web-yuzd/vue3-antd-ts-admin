import { RouteRecordRaw } from 'vue-router'

export type IPermissionState = {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
}

export const state: IPermissionState = {
  routes: [],
  dynamicRoutes: []
}
