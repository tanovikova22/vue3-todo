import type { LoginData } from "@/types/LoginData";
import type { UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default class AuthService {

    static async login(payload: LoginData): Promise<UserCredential> {
        return signInWithEmailAndPassword(getAuth(), payload.email, payload.password);
    }

    static async signUp(payload: LoginData): Promise<UserCredential> {
        return createUserWithEmailAndPassword(getAuth(), payload.email, payload.password);
    }

    static async logout(): Promise<void> {
        return signOut(getAuth());
    }
}