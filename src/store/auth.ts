import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import type { LoginData } from "@/types/LoginData";

export interface Store {
    isAuthenticated: boolean;
    // TODO: define user type ASAP
    user: {} | null
}

export const authStore = defineStore('auth', {
    state: (): Store => ({
        isAuthenticated: false,
        user: null
    }),

    actions: {
        signUp(payload: LoginData): Promise<void> {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ..
                });
        },
        login(payload: LoginData): Promise<void> {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                });
        }
    }
})