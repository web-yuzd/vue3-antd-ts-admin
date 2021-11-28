import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export type { IPermissionState } from './state'

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
