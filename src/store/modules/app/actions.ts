import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store/interface'
import { IAppState } from './state'
import { Mutations } from './mutations'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<IAppState, RootState>, 'commit'>

export interface Actions {
  setSidebar({ commit }: AugmentedActionContext): void
}

export const actions: ActionTree<IAppState, RootState> & Actions = {
  setSidebar({ commit, state }): void {
    commit('toggleSiderbar', !state.collapsed)
  }
}
