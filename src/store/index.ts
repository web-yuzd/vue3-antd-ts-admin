import { createStore, useStore as baseUseStore, Store, createLogger } from 'vuex'
import { InjectionKey } from 'vue'
import modules from './modules'
import { RootState } from './interface'

export const key: InjectionKey<Store<RootState>> = Symbol('store')

const store = createStore<RootState>({
  modules,
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger({})] : []
})

export function useStore<T = RootState>(): Store<T> {
  return baseUseStore<T>(key)
}

export default store
