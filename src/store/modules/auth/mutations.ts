import type { MutationTree } from "vuex";
import type { State, User } from "./state";

export enum MutationsType {
    setUser = "SET_USER",
    setAuthUser = "SET_AUTH_USER"
}

export interface Mutations {
    [MutationsType.setUser](state: State, user: User | null): void;
    [MutationsType.setAuthUser](state: State, isAuthed: boolean): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationsType.setUser](state, user) {
        state.user = user;
    },
    [MutationsType.setAuthUser](state, isAuthed) {
        state.isAuthed = isAuthed;
    }
};
