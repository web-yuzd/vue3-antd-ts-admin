/*
 * @Description: setting moudle
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-05 15:39:26
 */
import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex'

// TODO: How to surpass cyclical dependency linting errors cleanly?
import { RootState } from '@/store/interface'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { IUserState } from './state'

export { IUserState }

export type UserStore<S = IUserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}

const store: Module<IUserState, RootState> = {
  state,
  mutations,
  actions,
  namespaced: true
}

export default store
