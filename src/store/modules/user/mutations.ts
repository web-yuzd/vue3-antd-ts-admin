import { MutationTree } from 'vuex'
import { IUserState } from './state'
import { UserMutationTypes } from './mutationTypes'

export type Mutations<S = IUserState> = {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void
  [UserMutationTypes.SET_NAME](state: S, name: string): void
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void
  [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void
  [UserMutationTypes.SET_EMAIL](state: S, email: string): void
}

export const mutations: MutationTree<IUserState> & Mutations = {
  [UserMutationTypes.SET_TOKEN](state: IUserState, token: string) {
    state.token = token
  },

  [UserMutationTypes.SET_NAME](state: IUserState, name: string) {
    state.name = name
  },

  [UserMutationTypes.SET_AVATAR](state: IUserState, avatar: string) {
    state.avatar = avatar
  },

  [UserMutationTypes.SET_ROLES](state: IUserState, roles: string[]) {
    state.roles = roles
  },

  [UserMutationTypes.SET_EMAIL](state: IUserState, email: string) {
    state.email = email
  }
}
