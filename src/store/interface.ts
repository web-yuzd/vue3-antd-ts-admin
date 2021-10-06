// import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { IPermissionState } from './modules/permission/state'

export interface RootState {
  // app: IAppState
  user: IUserState
  permission: IPermissionState
}
