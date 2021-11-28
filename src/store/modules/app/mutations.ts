import { MutationTree } from 'vuex'
import { IAppState } from './state'

export type Mutations<S = IAppState> = {
  toggleSiderbar(state: S, collapsed: boolean): void
}

export const mutations: MutationTree<IAppState> & Mutations = {
  toggleSiderbar: (state: IAppState, collapsed: boolean): void => {
    state.collapsed = collapsed
  }
}
