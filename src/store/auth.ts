import { defineStore } from 'pinia';
import type { LoginData } from "@/types/LoginData";
import AuthService from "@/services/auth";
import type { UserCredential } from "firebase/auth";

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
        signUp(payload: LoginData): Promise<UserCredential> {
            try {
                const response = AuthService.signUp(payload);
                console.log(response)
                this.isAuthenticated = true;
                return response;
            } catch (error) {
                console.log(error);
                //TODO: remove type assertion
                throw new Error(error as string);
            }
        },
        login(payload: LoginData): Promise<UserCredential> {
            try {
                const response = AuthService.login(payload);
                console.log(response);
                this.isAuthenticated = true;
                return response;
            } catch (error) {
                console.log(error);
                //TODO: remove type assertion
                throw new Error(error as string);
            }
        },
        logout(): Promise<void> {
            try {
                const response = AuthService.logout();
                this.isAuthenticated = false;
                return response;
            } catch (error) {
                console.log(error);
                //TODO: remove type assertion
                throw new Error(error as string);
            }
        }
    }
})