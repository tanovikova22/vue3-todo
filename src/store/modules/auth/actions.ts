import type { ActionTree, ActionContext } from "vuex";
import type { Mutations } from "./mutations";
import { MutationsType } from "./mutations";
import type { State } from "./state";
import type { LoginData } from "@/types/LoginData";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export enum ActionTypes {
    loginUser = "LOGIN_USER",
    logoutUser = "LOGOUT_USER",
    registerUser = "REGISTER_USER"
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
export type Actions = {
    [ActionTypes.loginUser](context: ActionAugments, payload: LoginData): Promise<void>
    [ActionTypes.logoutUser](context: ActionAugments): Promise<void>
    [ActionTypes.registerUser](context: ActionAugments, payload: LoginData): Promise<void>
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.loginUser]({ commit }, payload) {
        const auth = getAuth();

        return await signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                commit(MutationsType.setAuthUser, true)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                throw new Error(errorMessage);
            });
    },
    async [ActionTypes.logoutUser]({ commit }) {
        const auth = getAuth();

        return await signOut(auth)
            .then((response) => {
                commit(MutationsType.setAuthUser, false);
                console.log(response)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                throw new Error(errorMessage);
            });
    },
    async [ActionTypes.registerUser]({ commit }, payload) {
        const auth = getAuth();

        return await createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                commit(MutationsType.setAuthUser, true)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                throw new Error(errorMessage);
            });
    }
}