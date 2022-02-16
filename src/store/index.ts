import { createStore, Store as VuexStore, createLogger } from 'vuex';
import type { CommitOptions, DispatchOptions } from "vuex";
import { state } from './modules/auth/state'
import type { State } from "./modules/auth/state"
import { mutations } from './modules/auth/mutations'
import type { Mutations } from "./modules/auth/mutations"
import { actions } from './modules/auth/actions'
import type { Actions } from "./modules/auth/actions"

export const store = createStore<State>({
    plugins: import.meta.env.MODE === 'development' ? [createLogger()] : [],
    state,
    mutations,
    actions,
})
export function useStore() {
    return store as Store
}
export type Store = Omit<
    VuexStore<State>,
    'commit' | 'dispatch'
    > & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}