/**
 * 用户登录操作
 * @Author: jerryyu
 * @Date: 2021-09-29 19:58:15
 * @Last Modified by: jerryyu
 * @Last Modified time: 2021-09-29 20:54:42
 */
import { ActionTree, ActionContext } from 'vuex'
import { useStore } from '@/store'
import { RootState } from '@/store/interface'
import { state, IUserState } from './state'
import { Mutations } from './mutations'
import { UserMutationTypes } from './mutationTypes'

// import { loginRequest, userInfoRequest } from '@/apis/user'
import { removeCookie, setCookie } from '@/utils/cookie'
// import { PermissionActionType } from '../permission/action-types'
import router, { resetRouter } from '@/router'
import { RouteRecordRaw } from 'vue-router'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<IUserState, RootState>, 'commit'>

export interface Actions {
  login({ commit }: AugmentedActionContext, userInfo: { username: string; password: string }): void
  resetToken({ commit }: AugmentedActionContext): void
  getUserInfo({ commit }: AugmentedActionContext): void
  changeRoles({ commit }: AugmentedActionContext, role: string): void
  logout({ commit }: AugmentedActionContext): void
}

export const actions: ActionTree<IUserState, RootState> & Actions = {
  async login(
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ) {
    let { username } = userInfo
    username = username.trim()
    setCookie('token', 'sdsd')
    // await loginRequest({ username, password })
    //   .then(async (res) => {
    //     if (res?.code === 0 && res.data.accessToken) {
    //       setCookie(res.data.accessToken)
    //       commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  },

  resetToken({ commit }: AugmentedActionContext) {
    removeCookie('')
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
  },

  async getUserInfo({ commit }: AugmentedActionContext) {
    if (state.token === '') {
      throw Error('token is undefined!')
    }

    commit(UserMutationTypes.SET_ROLES, ['admin'])
    commit(UserMutationTypes.SET_NAME, 'jerry')
    // await userInfoRequest().then((res) => {
    //   if (res?.code === 0) {
    //     commit(UserMutationTypes.SET_ROLES, res.data.roles)
    //     commit(UserMutationTypes.SET_NAME, res.data.name)
    //     commit(UserMutationTypes.SET_AVATAR, res.data.avatar)
    //     commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction)
    //     commit(UserMutationTypes.SET_EMAIL, res.data.email)
    //     return res
    //   } else {
    //     throw Error('Verification failed, please Login again.')
    //   }
    // })
  },

  async changeRoles({ commit }: AugmentedActionContext, role: string) {
    const token = role + '-token'
    const store = useStore()
    commit(UserMutationTypes.SET_TOKEN, token)
    setCookie('token', token)
    // await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
    // store.dispatch(PermissionActionType.ACTION_SET_ROUTES, state.roles)
    // store.state.permission.dynamicRoutes.forEach((item: RouteRecordRaw) => {
    //   router.addRoute(item)
    // })
  },

  logout({ commit }: AugmentedActionContext) {
    console.log(commit)
    removeCookie('kkk')
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
    resetRouter()
  }
}
